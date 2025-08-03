// src/lib/useCanvasDots.ts

import { initCanvasElegantDots } from "@/components/canvas-elegant-dots";
import { initCanvasFollowDots } from "@/components/canvas-follow-dots";
import { initCanvasInteractiveDots } from "@/components/canvas-interactive-dots";
import { initCanvasStaticDots } from "@/components/canvas-static-dots";
import { useEffect, useRef } from "react";

type DotType = "interactive" | "follow" | "static" | "elegant";

interface UseCanvasDotsOptions {
  type?: DotType;
  colorDot?: string[];
  repelStrength?: number;
  speed?: number;
  connectionRadius?: number;
  activationRadius?: number;
  lineOpacity?: number;
  floatSpeed?: number;
}

export const useCanvasDots = (options: UseCanvasDotsOptions = {}) => {
  const {
    type = "elegant",
    colorDot,
    repelStrength,
    speed,
    connectionRadius,
    activationRadius,
    lineOpacity,
    floatSpeed,
  } = options;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let cleanup: (() => void) | null = null;

    if (type === "elegant") {
      cleanup = initCanvasElegantDots(canvas, {
        colorDot,
        connectionRadius,
        activationRadius,
        lineOpacity,
        floatSpeed,
      });
    } else if (type === "interactive") {
      cleanup = initCanvasInteractiveDots(canvas, { colorDot, repelStrength });
    } else if (type === "follow") {
      cleanup = initCanvasFollowDots(canvas, { colorDot });
    } else if (type === "static") {
      cleanup = initCanvasStaticDots(canvas, { colorDot, speed });
    }

    cleanupRef.current = cleanup;

    return () => {
      if (cleanupRef.current) cleanupRef.current();
    };
  }, [
    type,
    colorDot,
    repelStrength,
    speed,
    connectionRadius,
    activationRadius,
    lineOpacity,
    floatSpeed,
  ]);

  return canvasRef;
};
