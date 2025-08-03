// @/components/canvas-elegant-dots.ts

interface ElegantDotsOptions {
  colorDot?: string[];
  connectionRadius?: number;
  activationRadius?: number;
  lineOpacity?: number;
  floatSpeed?: number;
}

export const initCanvasElegantDots = (
  canvas: HTMLCanvasElement,
  options: ElegantDotsOptions = {}
) => {
  const {
    colorDot = ["#ffffff"],
    connectionRadius = 150,
    activationRadius = 300,
    lineOpacity = 0.5,
    floatSpeed = 0.5,
  } = options;

  const ctx = canvas.getContext("2d");
  if (!ctx) return () => {};

  // ✅ 1. Resize canvas properly
  const resize = () => {
    const dpr = window.devicePixelRatio || 1;
    const rect = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    ctx.scale(dpr, dpr);
  };

  resize();
  window.addEventListener("resize", resize);

  // ✅ 2. Dot setup
  const dots: Dot[] = [];
  const numDots = Math.floor((window.innerWidth * window.innerHeight) / 10000);

  class Dot {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;

    constructor() {
      this.x = Math.random() * window.innerWidth;
      this.y = Math.random() * window.innerHeight;
      this.vx = (Math.random() - 0.5) * floatSpeed;
      this.vy = (Math.random() - 0.5) * floatSpeed;
      this.radius = Math.random() * 1.5 + 0.5;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > window.innerWidth) this.vx *= -1;
      if (this.y < 0 || this.y > window.innerHeight) this.vy *= -1;
    }

    draw() {
      if (!ctx) return;
      ctx.fillStyle = colorDot[Math.floor(Math.random() * colorDot.length)];
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Initialize dots
  for (let i = 0; i < numDots; i++) {
    dots.push(new Dot());
  }

  // Mouse tracking
  const mouse = { x: 0, y: 0 };
  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  // Animation loop
  const animate = () => {
    if (!canvas?.isConnected) return;

    // ✅ Clear only visible area
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    let dot, dx, dy, dist;

    // Draw lines
    for (let i = 0; i < dots.length; i++) {
      for (let j = i + 1; j < dots.length; j++) {
        dot = dots[j];
        dx = dots[i].x - dot.x;
        dy = dots[i].y - dot.y;
        dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < connectionRadius) {
          ctx.strokeStyle = `rgba(255, 255, 255, ${
            lineOpacity * (1 - dist / connectionRadius)
          })`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(dots[i].x, dots[i].y);
          ctx.lineTo(dot.x, dot.y);
          ctx.stroke();
        }
      }
    }

    // Activate on mouse
    for (let i = 0; i < dots.length; i++) {
      dx = mouse.x - dots[i].x;
      dy = mouse.y - dots[i].y;
      dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < activationRadius) {
        dots[i].vx += (dx / dist) * 0.1;
        dots[i].vy += (dy / dist) * 0.1;
      }

      dots[i].update();
      dots[i].draw();
    }

    requestAnimationFrame(animate);
  };

  animate();

  // Cleanup
  return () => {
    window.removeEventListener("resize", resize);
    window.removeEventListener("mousemove", () => {});
    // No way to cancel rAF from outside, but we check `canvas.isConnected`
  };
};
