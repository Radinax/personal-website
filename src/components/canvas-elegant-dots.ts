// src/lib/canvasElegantDots.ts

interface Dot {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  colour: string;
}

interface Mouse {
  x: number;
  y: number;
}

export const initCanvasElegantDots = (
  canvas: HTMLCanvasElement,
  options: {
    colorDot?: string[];
    connectionRadius?: number; // max distance to connect
    activationRadius?: number; // how close mouse needs to be
    baseRadius?: number;
    hoverRadius?: number;
    lineOpacity?: number;
    floatSpeed?: number;
  } = {}
): (() => void) => {
  const ctx = canvas.getContext("2d");
  if (!ctx) return () => {};

  // Options
  const colorDot = options.colorDot || [
    "rgb(81, 162, 233)",
    "rgb(255, 77, 90)",
  ];
  const connectionRadius = options.connectionRadius ?? 100;
  const activationRadius = options.activationRadius ?? 120;
  const baseRadius = options.baseRadius ?? 1.2;
  const hoverRadius = options.hoverRadius ?? 2.5;
  const lineOpacity = options.lineOpacity ?? 0.6;
  const floatSpeed = options.floatSpeed ?? 0.3;

  // Mouse state
  const mouse: Mouse = { x: Infinity, y: Infinity };

  // Resize
  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  resize();

  // Create dots
  const dots: Dot[] = Array.from({ length: 180 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: baseRadius,
    vx: (Math.random() - 0.5) * floatSpeed,
    vy: (Math.random() - 0.5) * floatSpeed,
    colour: colorDot[Math.floor(Math.random() * colorDot.length)],
  }));

  // Animation
  const animate = () => {
    // Slight trail for soft fade
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let activeDot: Dot | null = null;

    // Update floating motion
    dots.forEach((dot) => {
      dot.x += dot.vx;
      dot.y += dot.vy;

      if (dot.x < 0 || dot.x > canvas.width) dot.vx = -dot.vx;
      if (dot.y < 0 || dot.y > canvas.height) dot.vy = -dot.vy;
    });

    // Find closest dot to mouse
    let minDist = activationRadius;
    dots.forEach((dot) => {
      const dx = dot.x - mouse.x;
      const dy = dot.y - mouse.y;
      const dist = Math.hypot(dx, dy);

      if (dist < minDist) {
        minDist = dist;
        activeDot = dot;
      }
    });

    // Draw dots
    dots.forEach((dot) => {
      const isActive = dot === activeDot;
      const r = isActive ? hoverRadius : dot.radius;

      ctx.beginPath();
      ctx.arc(dot.x, dot.y, r, 0, Math.PI * 2);
      ctx.fillStyle = dot.colour;
      ctx.globalAlpha = isActive ? 1 : 0.6;
      ctx.fill();
      ctx.globalAlpha = 1;
    });

    // Draw connections from active dot
    if (activeDot) {
      dots.forEach((dot) => {
        if (dot === activeDot) return;

        const dx = dot.x - activeDot!.x;
        const dy = dot.y - activeDot!.y;
        const dist = Math.hypot(dx, dy);

        if (dist < connectionRadius) {
          ctx.beginPath();
          ctx.moveTo(activeDot!.x, activeDot!.y);
          ctx.lineTo(dot.x, dot.y);

          const fadeOut = dist / connectionRadius;
          const alpha = lineOpacity * (1 - fadeOut);

          ctx.strokeStyle = `rgba(241, 245, 249, ${alpha})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });
    }

    animationId = requestAnimationFrame(animate);
  };

  let animationId: number | null = null;
  animate();

  // Mouse and touch
  const handleMove = (x: number, y: number) => {
    mouse.x = x;
    mouse.y = y;
  };

  const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX, e.clientY);
  const handleTouchMove = (e: TouchEvent) => {
    e.preventDefault();
    const t = e.touches[0];
    handleMove(t.clientX, t.clientY);
  };

  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("touchmove", handleTouchMove, { passive: false });
  window.addEventListener("resize", resize);

  return () => {
    if (animationId) cancelAnimationFrame(animationId);
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("touchmove", handleTouchMove);
    window.removeEventListener("resize", resize);
  };
};
