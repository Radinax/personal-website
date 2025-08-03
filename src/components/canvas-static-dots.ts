// src/lib/canvasStaticDots.ts

export const initCanvasStaticDots = (
  canvas: HTMLCanvasElement,
  options: { colorDot?: string[]; speed?: number } = {}
) => {
  const ctx = canvas.getContext("2d");
  if (!ctx) return () => {};

  const colorDot = options.colorDot || ["rgb(81,162,233)"];
  const speed = options.speed || 0.5;

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  resize();

  const dots = Array.from({ length: 150 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * speed,
    vy: (Math.random() - 0.5) * speed,
    radius: Math.random() * 1.2,
    colour: colorDot[Math.floor(Math.random() * colorDot.length)],
  }));

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dots.forEach((dot) => {
      dot.x += dot.vx;
      dot.y += dot.vy;
      if (dot.x < 0 || dot.x > canvas.width) dot.vx = -dot.vx;
      if (dot.y < 0 || dot.y > canvas.height) dot.vy = -dot.vy;

      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
      ctx.fillStyle = dot.colour;
      ctx.globalAlpha = 0.6;
      ctx.fill();
      ctx.globalAlpha = 1;
    });
    animationId = requestAnimationFrame(animate);
  };

  let animationId: number | null = null;
  animate();

  window.addEventListener("resize", resize);

  return () => {
    if (animationId) cancelAnimationFrame(animationId);
    window.removeEventListener("resize", resize);
  };
};
