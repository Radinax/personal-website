// components/AnimatedBackgroundLayout.tsx
import React, { useEffect, useRef, useState } from "react";

interface Dot {
  x: number;
  y: number;
  baseOpacity: number;
  size: number;
}

interface AnimatedBackgroundLayoutProps {
  children: React.ReactNode;
  className?: string; // Optional additional classes
}

const AnimatedBackgroundLayout: React.FC<AnimatedBackgroundLayoutProps> = ({
  children,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dots, setDots] = useState<Dot[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Generate dots on mount and resize
  useEffect(() => {
    const generateDots = () => {
      const newDots: Dot[] = [];
      const spacing = 40;
      const cols = Math.ceil(window.innerWidth / spacing);
      const rows = Math.ceil(window.innerHeight / spacing);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          newDots.push({
            x: i * spacing + spacing / 2,
            y: j * spacing + spacing / 2,
            baseOpacity: Math.random() * 0.3 + 0.1,
            size: Math.random() * 2 + 1,
          });
        }
      }
      setDots(newDots);
    };

    generateDots();

    const handleResize = () => generateDots();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Track mouse position
  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  // Calculate distance from dot to mouse
  const getDistance = (dot: Dot) => {
    const dx = mousePos.x - dot.x;
    const dy = mousePos.y - dot.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  // Compute dynamic style for each dot
  const getDotStyle = (dot: Dot) => {
    if (!isHovering) {
      return {
        left: dot.x,
        top: dot.y,
        width: dot.size,
        height: dot.size,
        opacity: dot.baseOpacity,
        background: "#6B7280",
        boxShadow: "none",
        transform: "translate(-50%, -50%) scale(1)",
      };
    }

    const distance = getDistance(dot);
    const maxDistance = 120;

    if (distance < maxDistance) {
      const intensity = 1 - distance / maxDistance;
      const scale = 1 + intensity * 1.5;
      const opacity = Math.min(dot.baseOpacity + intensity * 0.9, 1);
      const glowIntensity = intensity * 20;

      return {
        left: dot.x,
        top: dot.y,
        width: dot.size,
        height: dot.size,
        opacity,
        background: `rgb(${34 + intensity * 100}, ${197 + intensity * 58}, ${
          94 + intensity * 161
        })`,
        boxShadow: `0 0 ${glowIntensity}px rgb(34 197 94 / ${intensity * 0.8})`,
        transform: `translate(-50%, -50%) scale(${scale})`,
      };
    }

    return {
      left: dot.x,
      top: dot.y,
      width: dot.size,
      height: dot.size,
      opacity: dot.baseOpacity,
      background: "#6B7280",
      boxShadow: "none",
      transform: "translate(-50%, -50%) scale(1)",
    };
  };

  return (
    <div
      ref={containerRef}
      className={`relative bg-black overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Animated Dots Background */}
      <div className="absolute inset-0">
        {dots.map((dot, index) => (
          <div
            key={index}
            className="absolute rounded-full transition-all duration-300 ease-out"
            style={getDotStyle(dot)}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default AnimatedBackgroundLayout;
