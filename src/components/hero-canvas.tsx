// src/lib/canvasDots.ts

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
    mousePosition: MousePosition,
    windowSize: number
  ): void {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

    const dotDistance = Math.hypot(
      this.x - mousePosition.x,
      this.y - mousePosition.y
    );
    const distanceRatio = dotDistance / (windowSize / 1.7);
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
        const dot1 = dots[i];
        const dot2 = dots[j];

        const dx = dot1.x - dot2.x;
        const dy = dot1.y - dot2.y;

        if (Math.abs(dx) < distance && Math.abs(dy) < distance) {
          const distToMouse = Math.hypot(
            dot1.x - mousePosition.x,
            dot1.y - mousePosition.y
          );
          if (distToMouse < d_radius) {
            ctx.beginPath();
            ctx.moveTo(dot1.x, dot1.y);
            ctx.lineTo(dot2.x, dot2.y);

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
  "rgb(81, 162, 233)",
  "rgb(255, 77, 90)", // 80% blue, 20% pink
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

    // Customize first dot
    if (dots[0]) {
      dots[0].radius = 1.5;
      dots[0].colour = "#51a2e9";
    }

    // Store config on the array for access in animate
    (dots as any).distance = distance;
    (dots as any).d_radius = d_radius;
  };

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update dots
    dots.forEach((dot, i) => {
      if (i !== 0) dot.animate(); // Skip first dot animation (it follows mouse)
      dot.create(ctx, mousePosition, window.innerWidth);
    });

    // Draw lines if above threshold
    if (window.innerWidth > 1100 || (dots as any).distance > 0) {
      Dot.connect(
        ctx,
        dots,
        mousePosition,
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

  // Set initial mouse position to center
  mousePosition.x = window.innerWidth / 2;
  mousePosition.y = window.innerHeight / 2;

  // Start animation
  animate();

  // Event listeners
  const handleMouseMove = (e: MouseEvent) => {
    mousePosition.x = e.pageX;
    mousePosition.y = e.pageY;

    // Make first dot follow mouse
    if (dots[0]) {
      dots[0].x = e.pageX;
      dots[0].y = e.pageY;
    }
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

  // Cleanup function
  return () => {
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("resize", handleResize);
  };
};
