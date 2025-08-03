// src/lib/canvasDotsBg.ts

interface MousePosition {
  x: number;
  y: number;
}

class Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  colour: string;

  constructor(public canvas: HTMLCanvasElement, colorDot: string[]) {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;

    this.vx = -0.5 + Math.random();
    this.vy = -0.5 + Math.random();

    this.radius = Math.random() * 1.5;
    this.colour = colorDot[Math.floor(Math.random() * colorDot.length)];
  }

  create(ctx: CanvasRenderingContext2D, mousePosition: MousePosition): void {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

    const top = window.scrollY;
    const dotDistance = Math.hypot(
      this.x - mousePosition.x,
      this.y - mousePosition.y + top
    );
    const windowSize = window.innerWidth;
    const distanceRatio = dotDistance / (windowSize / 2);
    const alpha = Math.max(0, 1 - distanceRatio);

    const colorWithAlpha = this.colour.slice(0, -1) + `,${alpha})`;
    ctx.fillStyle = colorWithAlpha;
    ctx.fill();
  }

  animate(): void {
    if (this.y < 0 || this.y > this.canvas.height) this.vy = -this.vy;
    if (this.x < 0 || this.x > this.canvas.width) this.vx = -this.vx;

    this.x += this.vx;
    this.y += this.vy;
  }

  static connect(
    ctx: CanvasRenderingContext2D,
    dots: Dot[],
    mousePosition: MousePosition,
    distance: number,
    d_radius: number
  ): void {
    for (let i = 0; i < dots.length; i++) {
      for (let j = i + 1; j < dots.length; j++) {
        const dx = dots[i].x - dots[j].x;
        const dy = dots[i].y - dots[j].y;

        if (Math.abs(dx) < distance && Math.abs(dy) < distance) {
          const distToMouse = Math.hypot(
            dots[i].x - mousePosition.x,
            dots[i].y - mousePosition.y
          );
          if (distToMouse < d_radius) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);

            const alpha = 1 - Math.max(0, distToMouse / d_radius - 0.3);
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
const mousePosition: MousePosition = { x: 0, y: 0 };

const colorDotDefault = [
  "rgb(81, 162, 233)",
  "rgb(81, 162, 233)",
  "rgb(81, 162, 233)",
  "rgb(255, 77, 90)",
];

export const initCanvasDots = (options: CanvasDotsOptions): (() => void) => {
  const { canvas, colorDot = colorDotDefault, onResize } = options;
  const ctx = canvas.getContext("2d");
  if (!ctx) return () => {};

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  const initDots = () => {
    const windowSize = window.innerWidth;
    let count = 1;

    if (windowSize > 1600) count = 100;
    else if (windowSize > 1300) count = 75;
    else if (windowSize > 1100) count = 50;

    dots = Array.from({ length: count }, () => new Dot(canvas, colorDot));

    if (dots[0]) {
      dots[0].radius = 1.5;
      dots[0].colour = "#51a2e9";
    }
  };

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    mousePosition.x = window.innerWidth / 2;
    mousePosition.y = window.innerHeight / 2 + window.scrollY;

    dots.forEach((dot, i) => {
      if (i !== 0) dot.animate();
      dot.create(ctx, mousePosition);
    });

    if (window.innerWidth > 1100) {
      Dot.connect(ctx, dots, mousePosition, 120, 200);
    }

    animationId = requestAnimationFrame(animate);
  };

  // Initial setup
  resize();
  initDots();
  ctx.lineWidth = 0.3;
  ctx.strokeStyle = "rgb(81, 162, 233)";

  animate();

  const handleResize = () => {
    if (animationId) cancelAnimationFrame(animationId);
    resize();
    initDots();
    if (typeof onResize === "function") onResize();
    animate();
  };

  const handleScroll = () => {
    mousePosition.y = window.innerHeight / 2 + window.scrollY;
  };

  window.addEventListener("resize", handleResize);
  window.addEventListener("scroll", handleScroll);

  // Return cleanup function
  return () => {
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
    window.removeEventListener("resize", handleResize);
    window.removeEventListener("scroll", handleScroll);
  };
};
