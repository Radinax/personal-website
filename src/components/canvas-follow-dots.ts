// src/lib/canvasFollowDots.ts

export const initCanvasFollowDots = (
  canvas: HTMLCanvasElement,
  options: { colorDot?: string[]; onResize?: () => void } = {}
) => {
  const ctx = canvas.getContext("2d");
  if (!ctx) return () => {};

  const colorDot = options.colorDot || ["rgb(81,162,233)", "rgb(255,77,90)"];

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  resize();

  const dots: {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    colour: string;
  }[] = [];

  const initDots = () => {
    const count = Math.min(100, window.innerWidth > 1200 ? 600 : 300);
    dots.length = 0;
    for (let i = 0; i < count; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: -0.5 + Math.random(),
        vy: -0.5 + Math.random(),
        radius: Math.random() * 1.5,
        colour: colorDot[Math.floor(Math.random() * colorDot.length)],
      });
    }
    if (dots[0]) {
      dots[0].radius = 2;
      dots[0].colour = "#51a2e9";
    }
  };

  initDots();

  const mouse = { x: canvas.width / 2, y: canvas.height / 2 };

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // First dot follows mouse
    dots[0].x = mouse.x;
    dots[0].y = mouse.y;

    dots.forEach((dot, i) => {
      if (i > 0) {
        dot.x += dot.vx;
        dot.y += dot.vy;
        if (dot.x < 0 || dot.x > canvas.width) dot.vx = -dot.vx;
        if (dot.y < 0 || dot.y > canvas.height) dot.vy = -dot.vy;
      }

      const dist = Math.hypot(dot.x - mouse.x, dot.y - mouse.y);
      const alpha = Math.max(0, 1 - dist / 500);
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
      ctx.fillStyle = dot.colour.slice(0, -1) + `,${alpha})`;
      ctx.fill();
    });

    animationId = requestAnimationFrame(animate);
  };

  let animationId: number | null = null;
  animate();

  const handleMove = (x: number, y: number) => {
    mouse.x = x;
    mouse.y = y;
  };

  window.addEventListener("mousemove", (e) => handleMove(e.clientX, e.clientY));
  window.addEventListener("touchmove", (e) => {
    e.preventDefault();
    const t = e.touches[0];
    handleMove(t.clientX, t.clientY);
  });
  window.addEventListener("resize", () => {
    if (animationId) cancelAnimationFrame(animationId);
    resize();
    initDots();
    animate();
  });

  return () => {
    if (animationId) cancelAnimationFrame(animationId);
    window.removeEventListener("resize", () => {});
    // cleanup listeners...
  };
};
