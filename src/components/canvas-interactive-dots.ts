// src/lib/canvasInteractiveDots.ts

interface MousePosition {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface DotOptions {
  canvas: HTMLCanvasElement;
  colorDot: string[];
  repelStrength?: number;
  connectDistance?: number;
  connectRadius?: number;
}

class Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  colour: string;

  private baseColour: { r: number; g: number; b: number };

  constructor(private options: DotOptions) {
    const { canvas, colorDot } = options;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = -0.1 + Math.random();
    this.vy = -0.1 + Math.random();
    this.radius = Math.random() * 0.5;
    this.colour = colorDot[Math.floor(Math.random() * colorDot.length)];

    // Parse base color for shifting
    const match = this.colour.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
    this.baseColour = match
      ? { r: +match[1], g: +match[2], b: +match[3] }
      : { r: 81, g: 162, b: 233 };
  }

  create(
    ctx: CanvasRenderingContext2D,
    mouse: MousePosition,
    windowSize: number
  ): void {
    const dotDistance = Math.hypot(this.x - mouse.x, this.y - mouse.y);
    const distanceRatio = dotDistance / (windowSize / 1.7);
    const alpha = Math.max(0, 1 - distanceRatio);

    // Color shift: shift toward pink on repel
    const shiftFactor = Math.max(0, (200 - dotDistance) / 200);
    const r = Math.floor(
      this.baseColour.r + shiftFactor * (255 - this.baseColour.r)
    );
    const g = Math.floor(
      this.baseColour.g - shiftFactor * (this.baseColour.g - 77)
    );
    const b = Math.floor(
      this.baseColour.b - shiftFactor * (this.baseColour.b - 90)
    );

    const colorWithAlpha = `rgba(${r}, ${g}, ${b}, ${alpha})`;

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = colorWithAlpha;
    ctx.fill();
  }

  update(mouse: MousePosition, repelStrength: number): void {
    const friction = 0.92;
    this.vx *= friction;
    this.vy *= friction;

    const dx = this.x - mouse.x;
    const dy = this.y - mouse.y;
    const distance = Math.hypot(dx, dy);

    if (distance < 200) {
      const force = (200 - distance) / 200;
      const angle = Math.atan2(dy, dx);
      this.vx += Math.cos(angle) * force * repelStrength;
      this.vy += Math.sin(angle) * force * repelStrength;
    }

    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > this.options.canvas.width) this.vx = -this.vx;
    if (this.y < 0 || this.y > this.options.canvas.height) this.vy = -this.vy;
  }

  static connect(
    ctx: CanvasRenderingContext2D,
    dots: Dot[],
    mouse: MousePosition,
    distance: number,
    d_radius: number
  ): void {
    for (let i = 0; i < dots.length; i++) {
      for (let j = i + 1; j < dots.length; j++) {
        const dot1 = dots[i];
        const dot2 = dots[j];

        const dx = dot1.x - dot2.x;
        const dy = dot1.y - dot2.y;

        if (Math.abs(dx) < distance && Math.abs(dy) < distance) {
          const distToMouse = Math.hypot(dot1.x - mouse.x, dot1.y - mouse.y);
          if (distToMouse < d_radius) {
            ctx.beginPath();
            ctx.moveTo(dot1.x, dot1.y);
            ctx.lineTo(dot2.x, dot2.y);

            const alpha = Math.max(
              0,
              1 - Math.max(0, distToMouse / d_radius - 0.3)
            );
            ctx.strokeStyle = `rgba(81, 162, 233, ${alpha})`;
            ctx.stroke();
            ctx.closePath();
          }
        }
      }
    }
  }
}

export const initCanvasInteractiveDots = (
  canvas: HTMLCanvasElement,
  options: {
    colorDot?: string[];
    repelStrength?: number;
    onResize?: () => void;
  } = {}
): (() => void) => {
  const {
    colorDot = [
      "rgb(81, 162, 233)",
      "rgb(81, 162, 233)",
      "rgb(81, 162, 233)",
      "rgb(81, 162, 233)",
      "rgb(255, 77, 90)",
    ],
  } = options;
  const repelStrength = options.repelStrength ?? 0.5;

  const ctx = canvas.getContext("2d");
  if (!ctx) return () => {};

  // Enable trail effect
  ctx.shadowBlur = 10;
  ctx.shadowColor = "rgba(81, 162, 233, 0.3)";
  ctx.globalCompositeOperation = "source-over"; // or 'lighter' for glow

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  let dots: Dot[] = [];

  const initDots = () => {
    const windowSize = window.innerWidth;
    let count = 100;
    let connectDistance = 0;
    let connectRadius = 0;

    if (windowSize > 1600) {
      count = 600;
      connectDistance = 70;
      connectRadius = 300;
    } else if (windowSize > 1300) {
      count = 575;
      connectDistance = 60;
      connectRadius = 280;
    } else if (windowSize > 1100) {
      count = 500;
      connectDistance = 55;
      connectRadius = 250;
    } else if (windowSize > 800) {
      count = 300;
    } else if (windowSize > 600) {
      count = 200;
    } else {
      count = 100;
    }

    dots = Array.from(
      { length: count },
      () =>
        new Dot({
          canvas,
          colorDot,
          repelStrength,
          connectDistance,
          connectRadius,
        })
    );
  };

  const mouse = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    vx: 0,
    vy: 0,
  };
  let lastX = mouse.x;
  let lastY = mouse.y;

  const animate = () => {
    // Slight fade for trail
    ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    dots.forEach((dot) => {
      dot.update(mouse, repelStrength);
      dot.create(ctx, mouse, window.innerWidth);
    });

    if (window.innerWidth > 1100) {
      Dot.connect(ctx, dots, mouse, 70, 300);
    }

    animationId = requestAnimationFrame(animate);
  };

  let animationId: number | null = null;
  resize();
  initDots();

  animate();

  const handleMove = (x: number, y: number) => {
    mouse.vx = (x - lastX) * 0.6;
    mouse.vy = (y - lastY) * 0.6;
    lastX = x;
    lastY = y;
    mouse.x = x;
    mouse.y = y;
  };

  const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX, e.clientY);
  const handleTouchMove = (e: TouchEvent) => {
    e.preventDefault();
    const touch = e.touches[0];
    handleMove(touch.clientX, touch.clientY);
  };

  const handleResize = () => {
    if (animationId) cancelAnimationFrame(animationId);
    resize();
    initDots();
    animate();
  };

  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("touchmove", handleTouchMove, { passive: false });
  window.addEventListener("resize", handleResize);

  return () => {
    if (animationId) cancelAnimationFrame(animationId);
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("touchmove", handleTouchMove);
    window.removeEventListener("resize", handleResize);
  };
};
