// src/lib/canvasInteractiveDots.ts

interface MousePosition {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

class Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  colour: string;

  private readonly friction = 0.95;
  private readonly repelStrength = 0.4;

  constructor(public canvas: HTMLCanvasElement, private colorDot: string[]) {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;

    this.vx = -0.5 + Math.random();
    this.vy = -0.5 + Math.random();

    this.radius = Math.random() * 1.5;
    this.colour = colorDot[Math.floor(Math.random() * colorDot.length)];
  }

  create(
    ctx: CanvasRenderingContext2D,
    mouse: MousePosition,
    windowSize: number
  ): void {
    const dotDistance = Math.hypot(this.x - mouse.x, this.y - mouse.y);
    const distanceRatio = dotDistance / (windowSize / 1.7);
    const alpha = Math.max(0, 1 - distanceRatio);

    const colorWithAlpha = this.colour.slice(0, -1) + `,${alpha})`;

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = colorWithAlpha;
    ctx.fill();
  }

  update(mouse: MousePosition): void {
    // Base movement
    this.vx *= this.friction;
    this.vy *= this.friction;

    // Repel from mouse if close
    const dx = this.x - mouse.x;
    const dy = this.y - mouse.y;
    const distance = Math.hypot(dx, dy);

    if (distance < 200) {
      const force = (200 - distance) / 200;
      const angle = Math.atan2(dy, dx);
      this.vx += Math.cos(angle) * force * this.repelStrength;
      this.vy += Math.sin(angle) * force * this.repelStrength;
    }

    // Apply velocity
    this.x += this.vx;
    this.y += this.vy;

    // Boundary bounce
    if (this.x < 0 || this.x > this.canvas.width) this.vx = -this.vx;
    if (this.y < 0 || this.y > this.canvas.height) this.vy = -this.vy;
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

interface CanvasDotsOptions {
  canvas: HTMLCanvasElement;
  colorDot?: string[];
  onResize?: () => void;
}

let animationId: number | null = null;
let dots: Dot[] = [];
const mouse: MousePosition = { x: 0, y: 0, vx: 0, vy: 0 };

const colorDotDefault = [
  "rgb(81, 162, 233)",
  "rgb(81, 162, 233)",
  "rgb(81, 162, 233)",
  "rgb(81, 162, 233)",
  "rgb(255, 77, 90)",
];

export const initCanvasInteractiveDots = (
  options: CanvasDotsOptions
): (() => void) => {
  const { canvas, colorDot = colorDotDefault, onResize } = options;
  const ctx = canvas.getContext("2d");
  if (!ctx) return () => {};

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  const initDots = () => {
    const windowSize = window.innerWidth;
    let count = 100;
    let distance = 0;
    let d_radius = 0;

    if (windowSize > 1600) {
      count = 600;
      distance = 70;
      d_radius = 300;
    } else if (windowSize > 1300) {
      count = 575;
      distance = 60;
      d_radius = 280;
    } else if (windowSize > 1100) {
      count = 500;
      distance = 55;
      d_radius = 250;
    } else if (windowSize > 800) {
      count = 300;
    } else if (windowSize > 600) {
      count = 200;
    } else {
      count = 100;
    }

    dots = Array.from({ length: count }, () => new Dot(canvas, colorDot));

    // Store config
    (dots as any).distance = distance;
    (dots as any).d_radius = d_radius;
  };

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update all dots
    dots.forEach((dot) => {
      dot.update(mouse);
      dot.create(ctx, mouse, window.innerWidth);
    });

    // Draw connections (only on large screens)
    if (window.innerWidth > 1100 && (dots as any).distance > 0) {
      Dot.connect(
        ctx,
        dots,
        mouse,
        (dots as any).distance,
        (dots as any).d_radius
      );
    }

    animationId = requestAnimationFrame(animate);
  };

  // Initial setup
  resize();
  initDots();

  ctx.lineWidth = 0.3;
  ctx.strokeStyle = "rgb(81, 162, 233)";

  // Initialize mouse in center
  mouse.x = window.innerWidth / 2;
  mouse.y = window.innerHeight / 2;
  mouse.vx = 0;
  mouse.vy = 0;

  // Mouse move with velocity (smoother repel)
  let lastX = mouse.x;
  let lastY = mouse.y;

  const handleMouseMove = (e: MouseEvent) => {
    mouse.vx = (e.clientX - lastX) * 0.8;
    mouse.vy = (e.clientY - lastY) * 0.8;
    lastX = e.clientX;
    lastY = e.clientY;

    mouse.x = e.clientX;
    mouse.y = e.clientY;
  };

  const handleResize = () => {
    if (animationId) cancelAnimationFrame(animationId);
    resize();
    initDots();
    if (typeof onResize === "function") onResize();
    animate();
  };

  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("resize", handleResize);

  // Start animation
  animate();

  // Return cleanup
  return () => {
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("resize", handleResize);
  };
};
