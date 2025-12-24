import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './imagetrail.css';

function lerp(a, b, n) {
  return (1 - n) * a + n * b;
}

function getLocalPointerPos(e, rect) {
  let clientX = 0,
    clientY = 0;
  if (e.touches && e.touches.length > 0) {
    clientX = e.touches[0].clientX;
    clientY = e.touches[0].clientY;
  } else {
    clientX = e.clientX;
    clientY = e.clientY;
  }
  return {
    x: clientX - rect.left,
    y: clientY - rect.top,
  };
}

function getMouseDistance(p1, p2) {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  return Math.hypot(dx, dy);
}

class ImageItem {
  DOM = { el: null, inner: null };
  defaultStyle = { scale: 1, x: 0, y: 0, opacity: 0 };
  rect = null;

  constructor(DOM_el) {
    this.DOM.el = DOM_el;
    this.DOM.inner = this.DOM.el.querySelector('.content__img-inner');
    this.getRect();
    this.initEvents();
  }

  initEvents() {
    this.resize = () => {
      gsap.set(this.DOM.el, this.defaultStyle);
      this.getRect();
    };
    window.addEventListener('resize', this.resize);
  }

  getRect() {
    this.rect = this.DOM.el.getBoundingClientRect();
  }

  removeEvents() {
    window.removeEventListener('resize', this.resize);
  }
}

class ImageTrailVariant1 {
  constructor(container) {
    this.container = container;
    this.DOM = { el: container };
    this.images = [...this.DOM.el.querySelectorAll('.content__img')].map(img => new ImageItem(img));
    this.imagesTotal = this.images.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;
    this.isHovering = false;
    this.threshold = 80;
    this.animationFrameId = null;

    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };

    // Store currently visible images
    this.visibleImages = new Set();

    // Event handlers
    this.handlePointerMove = ev => {
      const rect = this.container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos(ev, rect);
    };

    this.handleMouseEnter = () => {
      this.isHovering = true;
      const rect = this.container.getBoundingClientRect();
      this.mousePos = getLocalPointerPos({ clientX: this.mousePos.x + rect.left, clientY: this.mousePos.y + rect.top }, rect);
      this.cacheMousePos = { ...this.mousePos };
      this.lastMousePos = { ...this.mousePos };
      if (!this.animationFrameId) {
        this.render();
      }
    };

    this.handleMouseLeave = () => {
      this.isHovering = false;
      if (this.animationFrameId) {
        cancelAnimationFrame(this.animationFrameId);
        this.animationFrameId = null;
      }
      // Hide all visible images
      this.visibleImages.forEach(img => {
        gsap.killTweensOf(img.DOM.el);
        gsap.set(img.DOM.el, { opacity: 0, scale: 0 });
      });
      this.visibleImages.clear();
      this.activeImagesCount = 0;
      this.isIdle = true;
      this.zIndexVal = 1;
    };

    this.container.addEventListener('mousemove', this.handlePointerMove);
    this.container.addEventListener('touchmove', this.handlePointerMove);
    this.container.addEventListener('mouseenter', this.handleMouseEnter);
    this.container.addEventListener('mouseleave', this.handleMouseLeave);
    this.container.addEventListener('touchstart', this.handleMouseEnter);
    this.container.addEventListener('touchend', this.handleMouseLeave);
  }

  render() {
    if (!this.isHovering) return;

    let distance = getMouseDistance(this.mousePos, this.lastMousePos);
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);

    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }

    // Update positions of visible images to follow mouse
    this.visibleImages.forEach(img => {
      gsap.to(img.DOM.el, {
        duration: 0.4,
        ease: 'power1',
        x: this.cacheMousePos.x - img.rect.width / 2,
        y: this.cacheMousePos.y - img.rect.height / 2 + this.yOffset,
        opacity: 1,
        scale: 1,
      });
    });

    if (this.isIdle && this.zIndexVal !== 1) {
      this.zIndexVal = 1;
    }
    this.animationFrameId = requestAnimationFrame(() => this.render());
  }

  showNextImage() {
    // Limit the number of visible images (e.g., max 3 to prevent clutter)
    const maxVisibleImages = 3;
    if (this.visibleImages.size >= maxVisibleImages) {
      const oldestImg = this.visibleImages.values().next().value;
      gsap.killTweensOf(oldestImg.DOM.el);
      gsap.set(oldestImg.DOM.el, { opacity: 0, scale: 0 });
      this.visibleImages.delete(oldestImg);
      this.activeImagesCount--;
    }

    ++this.zIndexVal;
    this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];

    this.visibleImages.add(img);
    this.activeImagesCount++;
    this.isIdle = false;

    gsap.killTweensOf(img.DOM.el);
    gsap.set(img.DOM.el, {
      zIndex: this.zIndexVal,
      x: this.cacheMousePos.x - img.rect.width / 2,
      y: this.cacheMousePos.y - img.rect.height / 2 + this.yOffset,
    });
    gsap.to(img.DOM.el, {
      duration: 0.4,
      ease: 'power1',
      opacity: 1,
      scale: 1,
    });
  }

  onImageActivated() {
    this.activeImagesCount++;
    this.isIdle = false;
  }

  onImageDeactivated() {
    this.activeImagesCount--;
    if (this.activeImagesCount === 0) {
      this.isIdle = true;
    }
  }

  destroy() {
    this.container.removeEventListener('mousemove', this.handlePointerMove);
    this.container.removeEventListener('touchmove', this.handlePointerMove);
    this.container.removeEventListener('mouseenter', this.handleMouseEnter);
    this.container.removeEventListener('mouseleave', this.handleMouseLeave);
    this.container.removeEventListener('touchstart', this.handleMouseEnter);
    this.container.removeEventListener('touchend', this.handleMouseLeave);
    this.images.forEach(img => img.removeEvents());
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }
}

// Placeholder for other variants (unchanged)
class ImageTrailVariant2 {
  // ... (unchanged)
}

class ImageTrailVariant3 {
  // ... (unchanged)
}

class ImageTrailVariant4 {
  // ... (unchanged)
}

class ImageTrailVariant5 {
  // ... (unchanged)
}

class ImageTrailVariant6 {
  // ... (unchanged)
}

class ImageTrailVariant7 {
  // ... (unchanged)
}

class ImageTrailVariant8 {
  // ... (unchanged)
}

const variantMap = {
  1: ImageTrailVariant1,
  2: ImageTrailVariant2,
  3: ImageTrailVariant3,
  4: ImageTrailVariant4,
  5: ImageTrailVariant5,
  6: ImageTrailVariant6,
  7: ImageTrailVariant7,
  8: ImageTrailVariant8,
};

export default function ImageTrail({ items = [], variant = 1 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const Cls = variantMap[variant] || variantMap[1];
    const instance = new Cls(containerRef.current);

    return () => {
      instance.destroy();
    };
  }, [variant, items]);

  return (
    <div className="content" ref={containerRef}>
      {items.map((url, i) => (
        <div className="content__img" key={i}>
          <div className="content__img-inner" style={{ backgroundImage: `url(${url})` }} />
        </div>
      ))}
    </div>
  );
}