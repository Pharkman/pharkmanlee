// falling-text.js  (copy-paste this exact file)
import { useRef, useState, useEffect } from "react";
import Matter from "matter-js";
import "./falling-text.css";

const FallingText = ({
  className = "",
  text = "",
  highlightWords = [],
  trigger = "auto",
  backgroundColor = "transparent",
  gravity = 2,
  mouseConstraintStiffness = 0.9,
  fontSize = "1rem",
}) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const canvasRef = useRef(null);
  const [started, setStarted] = useState(false);

  /* -------------------------------------------------
     1. Build the words → colored pills only for highlights
     ------------------------------------------------- */
  useEffect(() => {
    if (!textRef.current) return;

    const highlightColors = [
      "#FF5A3A",
      "#FFD748",
      "#A98BFF",
      "#B2FF2A",
    ];

    const words = text.split(" ");
    const html = words
      .map((w) => {
        const isHighlight = highlightWords.some((hw) =>
          w.toLowerCase().startsWith(hw.toLowerCase())
        );

        if (isHighlight) {
          const bg = highlightColors[Math.floor(Math.random() * highlightColors.length)];
          return `<span class="pill" style="background:${bg};">${w}</span>`;
        }
        // return `<span class="pill plain">${w}</span>`;
      })
      .join(" ");

    textRef.current.innerHTML = html;
  }, [text, highlightWords]);

  /* -------------------------------------------------
     2. Trigger logic
     ------------------------------------------------- */
  useEffect(() => {
    if (trigger === "auto") {
      setStarted(true);
      return;
    }
    if (trigger === "scroll" && containerRef.current) {
      const obs = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) {
            setStarted(true);
            obs.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      obs.observe(containerRef.current);
      return () => obs.disconnect();
    }
  }, [trigger]);

  /* -------------------------------------------------
     3. Physics – only runs after start
     ------------------------------------------------- */
  useEffect(() => {
    if (!started) return;

    const {
      Engine,
      Render,
      World,
      Bodies,
      Runner,
      Mouse,
      MouseConstraint,
    } = Matter;

    // Fixed line – no TypeScript syntax
    const rect = containerRef.current.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;
    if (w <= 0 || h <= 0) return;

    const engine = Engine.create();
    engine.world.gravity.y = gravity;

    const render = Render.create({
      element: canvasRef.current,
      engine,
      options: {
        width: w,
        height: h,
        background: "transparent",
        wireframes: false,
      },
    });

    // Invisible walls
    const walls = [
      Bodies.rectangle(w / 2, h + 30, w, 60, { isStatic: true, render: { visible: false } }),
      Bodies.rectangle(-30, h / 2, 60, h, { isStatic: true, render: { visible: false } }),
      Bodies.rectangle(w + 30, h / 2, 60, h, { isStatic: true, render: { visible: false } }),
      Bodies.rectangle(w / 2, -30, w, 60, { isStatic: true, render: { visible: false } }),
    ];

    const pills = textRef.current.querySelectorAll(".pill");
    const bodies = [];

    pills.forEach((el) => {
      const b = el.getBoundingClientRect();
      const pw = b.width;
      const ph = b.height;

      const x = Math.random() * (w - pw - 40) + pw / 2 + 20;
      const y = Math.random() * (h * 0.2) + ph / 2 + 20;

      const body = Bodies.rectangle(x, y, pw + 8, ph + 8, {
        restitution: 0.1,
        frictionAir: 0.02,
        friction: 0.8,
        render: { visible: false },
      });

      Matter.Body.setVelocity(body, { x: (Math.random() - 0.5) * 2, y: 0 });
      Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.03);

      el.style.position = "absolute";
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
      el.style.transform = `translate(-50%, -50%)`;

      bodies.push({ el, body });
    });

    const mouse = Mouse.create(containerRef.current);
    const mConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: mouseConstraintStiffness, render: { visible: false } },
    });
    render.mouse = mouse;

    World.add(engine.world, [...walls, mConstraint, ...bodies.map((b) => b.body)]);

    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    const sync = () => {
      bodies.forEach(({ el, body }) => {
        el.style.left = `${body.position.x}px`;
        el.style.top = `${body.position.y}px`;
        el.style.transform = `translate(-50%, -50%) rotate(${body.angle}rad)`;
      });
      requestAnimationFrame(sync);
    };
    sync();

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      if (render.canvas) canvasRef.current?.removeChild(render.canvas);
      World.clear(engine.world);
      Engine.clear(engine);
    };
  }, [started, gravity, mouseConstraintStiffness]);

  const handleTrigger = () => {
    if (!started && (trigger === "click" || trigger === "hover")) setStarted(true);
  };

  return (
    <div
      ref={containerRef}
      className={`falling-text-container ${className}`}
      onClick={trigger === "click" ? handleTrigger : undefined}
      onMouseEnter={trigger === "hover" ? handleTrigger : undefined}
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor,
        minHeight: "320px",
      }}
    >
      <div ref={textRef} style={{ fontSize, lineHeight: 1.4 }} />
      <div ref={canvasRef} />
    </div>
  );
};

export default FallingText;