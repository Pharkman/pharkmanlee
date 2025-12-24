import { useEffect, useRef, useCallback, useMemo } from 'react';
import { gsap } from 'gsap';
import './TargetCursor.css';

const TargetCursor = ({ targetSelector = '.cursor-target', hideDefaultCursor = true }) => {
  const cursorRef = useRef(null);
  const cornersRef = useRef(null);
  const outlineRef = useRef(null);
  const dotRef = useRef(null);
  const constants = useMemo(
    () => ({
      borderWidth: 3,
      cornerSize: 12,
      parallaxStrength: 0.00005
    }),
    []
  );

  const moveCursor = useCallback((x, y) => {
    if (!cursorRef.current) return;
    gsap.to(cursorRef.current, {
      x,
      y,
      duration: 0.1,
      ease: 'power3.out'
    });
  }, []);

  useEffect(() => {
    if (!cursorRef.current) return;

    const originalCursor = document.body.style.cursor;
    if (hideDefaultCursor) {
      document.body.style.cursor = 'none';
    }

    const cursor = cursorRef.current;
    cornersRef.current = cursor.querySelectorAll('.target-cursor-corner');
    const outline = outlineRef.current;

    gsap.set(outline, { width: 0, height: 0, x: 0, y: 0, display: 'none' });

    let activeTarget = null;
    let currentTargetMove = null;
    let currentLeaveHandler = null;
    let isAnimatingToTarget = false;
    let targetShape = 'brackets';

    const cleanupTarget = target => {
      if (currentTargetMove) {
        target.removeEventListener('mousemove', currentTargetMove);
      }
      if (currentLeaveHandler) {
        target.removeEventListener('mouseleave', currentLeaveHandler);
      }
      currentTargetMove = null;
      currentLeaveHandler = null;
    };

    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    });

    const moveHandler = e => moveCursor(e.clientX, e.clientY);
    window.addEventListener('mousemove', moveHandler);

    const scrollHandler = () => {
      if (!activeTarget || !cursorRef.current) return;

      const mouseX = gsap.getProperty(cursorRef.current, 'x');
      const mouseY = gsap.getProperty(cursorRef.current, 'y');

      const elementUnderMouse = document.elementFromPoint(mouseX, mouseY);
      const isStillOverTarget =
        elementUnderMouse &&
        (elementUnderMouse === activeTarget || elementUnderMouse.closest(targetSelector) === activeTarget);

      if (!isStillOverTarget) {
        if (currentLeaveHandler) {
          currentLeaveHandler();
        }
      }
    };

    window.addEventListener('scroll', scrollHandler, { passive: true });

    const mouseDownHandler = () => {
      if (!dotRef.current) return;
      gsap.to(dotRef.current, { scale: 0.7, duration: 0.3 });
      gsap.to(cursorRef.current, { scale: 0.9, duration: 0.2 });
    };

    const mouseUpHandler = () => {
      if (!dotRef.current) return;
      gsap.to(dotRef.current, { scale: 1, duration: 0.3 });
      gsap.to(cursorRef.current, { scale: 1, duration: 0.2 });
    };

    window.addEventListener('mousedown', mouseDownHandler);
    window.addEventListener('mouseup', mouseUpHandler);

    const enterHandler = e => {
      const directTarget = e.target;

      let current = directTarget;
      let target = null;
      while (current && current !== document.body) {
        if (current.matches(targetSelector)) {
          target = current;
          break;
        }
        current = current.parentElement;
      }

      if (!target || !cursorRef.current) return;

      if (activeTarget === target) return;

      if (activeTarget) {
        cleanupTarget(activeTarget);
      }

      activeTarget = target;

      const style = window.getComputedStyle(target);
      targetShape = 'brackets';
      if (style.borderRadius === '50%') {
        targetShape = 'circle';
      } else if (style.clipPath && style.clipPath.startsWith('polygon') && style.clipPath.split(',').length === 3) {
        targetShape = 'triangle';
      }

      const updateVisual = (mouseX, mouseY) => {
        const rect = target.getBoundingClientRect();
        const cursorCenterX = gsap.getProperty(cursor, 'x');
        const cursorCenterY = gsap.getProperty(cursor, 'y');

        let parallaxX = 0;
        let parallaxY = 0;
        if (mouseX !== undefined && mouseY !== undefined) {
          const targetCenterX = rect.left + rect.width / 2;
          const targetCenterY = rect.top + rect.height / 2;
          parallaxX = (mouseX - targetCenterX) * constants.parallaxStrength;
          parallaxY = (mouseY - targetCenterY) * constants.parallaxStrength;
        }

        if (targetShape === 'brackets') {
          gsap.set(outline, { display: 'none' });
          gsap.set(cornersRef.current, { display: 'block' });

          const tlOffset = {
            x: rect.left - cursorCenterX - constants.borderWidth + parallaxX,
            y: rect.top - cursorCenterY - constants.borderWidth + parallaxY
          };
          const trOffset = {
            x: rect.right - cursorCenterX + constants.borderWidth - constants.cornerSize + parallaxX,
            y: rect.top - cursorCenterY - constants.borderWidth + parallaxY
          };
          const brOffset = {
            x: rect.right - cursorCenterX + constants.borderWidth - constants.cornerSize + parallaxX,
            y: rect.bottom - cursorCenterY + constants.borderWidth - constants.cornerSize + parallaxY
          };
          const blOffset = {
            x: rect.left - cursorCenterX - constants.borderWidth + parallaxX,
            y: rect.bottom - cursorCenterY + constants.borderWidth - constants.cornerSize + parallaxY
          };

          const corners = Array.from(cornersRef.current);
          const offsets = [tlOffset, trOffset, brOffset, blOffset];
          gsap.to(corners, {
            x: i => offsets[i].x,
            y: i => offsets[i].y,
            duration: 0.2,
            ease: 'power2.out'
          });
        } else {
          gsap.set(cornersRef.current, { display: 'none' });
          gsap.set(outline, { display: 'block' });

          const targetCenterX = rect.left + rect.width / 2;
          const targetCenterY = rect.top + rect.height / 2;
          let offsetX = targetCenterX - cursorCenterX + parallaxX;
          let offsetY = targetCenterY - cursorCenterY + parallaxY;

          let outlineWidth = rect.width + constants.borderWidth * 2;
          let outlineHeight = rect.height + constants.borderWidth * 2;
          let borderRadius = '0';
          let clipPath = '';

          if (targetShape === 'circle') {
            const size = Math.max(outlineWidth, outlineHeight);
            outlineWidth = size;
            outlineHeight = size;
            borderRadius = '50%';
          } else if (targetShape === 'triangle') {
            const size = Math.max(outlineWidth, outlineHeight);
            outlineWidth = size;
            outlineHeight = size;
            clipPath = 'polygon(0% 100%, 50% 0%, 100% 100%)'; // Simple upward triangle shape
          }

          gsap.to(outline, {
            x: offsetX,
            y: offsetY,
            width: outlineWidth,
            height: outlineHeight,
            borderRadius,
            clipPath,
            duration: 0.2,
            ease: 'power2.out'
          });
        }
      };

      isAnimatingToTarget = true;
      updateVisual();

      setTimeout(() => {
        isAnimatingToTarget = false;
      }, 1);

      let moveThrottle = null;
      const targetMove = ev => {
        if (moveThrottle || isAnimatingToTarget) return;
        moveThrottle = requestAnimationFrame(() => {
          updateVisual(ev.clientX, ev.clientY);
          moveThrottle = null;
        });
      };

      const leaveHandler = () => {
        activeTarget = null;
        isAnimatingToTarget = false;

        if (targetShape === 'brackets') {
          const corners = Array.from(cornersRef.current);
          const positions = [
            { x: -constants.cornerSize * 1.5, y: -constants.cornerSize * 1.5 },
            { x: constants.cornerSize * 0.5, y: -constants.cornerSize * 1.5 },
            { x: constants.cornerSize * 0.5, y: constants.cornerSize * 0.5 },
            { x: -constants.cornerSize * 1.5, y: constants.cornerSize * 0.5 }
          ];
          gsap.to(corners, {
            x: i => positions[i].x,
            y: i => positions[i].y,
            duration: 0.3,
            ease: 'power3.out'
          });
        } else {
          gsap.to(outline, {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            duration: 0.3,
            ease: 'power3.out'
          });
        }

        cleanupTarget(target);
      };

      currentTargetMove = targetMove;
      currentLeaveHandler = leaveHandler;

      target.addEventListener('mousemove', targetMove);
      target.addEventListener('mouseleave', leaveHandler);
    };

    window.addEventListener('mouseover', enterHandler, { passive: true });

    return () => {
      window.removeEventListener('mousemove', moveHandler);
      window.removeEventListener('mouseover', enterHandler);
      window.removeEventListener('scroll', scrollHandler);
      window.removeEventListener('mousedown', mouseDownHandler);
      window.removeEventListener('mouseup', mouseUpHandler);

      if (activeTarget) {
        cleanupTarget(activeTarget);
      }

      document.body.style.cursor = originalCursor;
    };
  }, [targetSelector, moveCursor, constants, hideDefaultCursor]);

  return (
    <div ref={cursorRef} className="target-cursor-wrapper">
      <div ref={dotRef} className="target-cursor-dot" />
      <div className="target-cursor-corner corner-tl" />
      <div className="target-cursor-corner corner-tr" />
      <div className="target-cursor-corner corner-br" />
      <div className="target-cursor-corner corner-bl" />
      <div ref={outlineRef} className="target-cursor-outline" />
    </div>
  );
};

export default TargetCursor;