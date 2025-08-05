import {
  useState,
  useRef,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";

interface ScrollableCarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  className?: string;
}

const ScrollableCarousel = <T,>({
  items,
  renderItem,
  className = "",
}: ScrollableCarouselProps<T>) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const isProgrammaticScroll = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const goToSlide = useCallback(
    (index: number) => {
      const clampedIndex = Math.max(0, Math.min(index, items.length - 1));
      setCurrentIndex(clampedIndex);

      if (!scrollRef.current) return;

      isProgrammaticScroll.current = true;

      const containerWidth = scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({
        left: clampedIndex * containerWidth,
        behavior: "smooth",
      });

      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 500);
    },
    [items.length]
  );

  const updateIndexFromScroll = useCallback(() => {
    if (isProgrammaticScroll.current || !scrollRef.current) return;

    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

    scrollTimeoutRef.current = setTimeout(() => {
      if (!scrollRef.current) return;
      const containerWidth = scrollRef.current.clientWidth;
      if (containerWidth === 0) return;

      const scrollPos = scrollRef.current.scrollLeft;
      const centerScrollPos = scrollPos + containerWidth / 2;
      const index = Math.round(centerScrollPos / containerWidth);
      setCurrentIndex(Math.max(0, Math.min(index, items.length - 1)));

      isProgrammaticScroll.current = false;
    }, 150);
  }, [items.length]);

  // Mouse drag logic (for desktop)
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    e.preventDefault();

    const startX = e.clientX - scrollRef.current.offsetLeft;
    const scrollLeft = scrollRef.current.scrollLeft;

    const handleMouseMove = (e: MouseEvent) => {
      if (!scrollRef.current) return;
      const x = e.clientX - scrollRef.current.offsetLeft;
      const walk = (x - startX) * 1.5;
      scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const stopDragging = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", stopDragging);
      setIsDragging(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", stopDragging);
  };

  // Touch handlers (keep native scroll)
  const handleTouchStart = () => {
    setIsDragging(true);
  };

  const handleTouchMove = () => {
    // Let native scrolling handle it
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Listen to scroll events
  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    element.addEventListener("scroll", updateIndexFromScroll, {
      passive: true,
    });

    return () => {
      element.removeEventListener("scroll", updateIndexFromScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [updateIndexFromScroll]);

  // Scroll to current index when it changes
  useEffect(() => {
    if (!scrollRef.current) return;

    const containerWidth = scrollRef.current.clientWidth;
    const expectedScroll = currentIndex * containerWidth;
    const currentScroll = scrollRef.current.scrollLeft;

    if (Math.abs(currentScroll - expectedScroll) > 1) {
      isProgrammaticScroll.current = true;
      scrollRef.current.scrollTo({
        left: expectedScroll,
        behavior: "smooth",
      });

      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 500);
    }
  }, [currentIndex]);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (!scrollRef.current) return;

      isProgrammaticScroll.current = true;
      const containerWidth = scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({
        left: currentIndex * containerWidth,
        behavior: "auto",
      });

      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 100);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [currentIndex]);

  return (
    <div className={`relative ${className}`}>
      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className={`flex overflow-x-auto snap-x snap-mandatory scroll-smooth cursor-grab ${
          isDragging ? "cursor-grabbing" : ""
        } scrollbar-hide px-4`}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onScroll={updateIndexFromScroll}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full snap-center px-4 select-none"
          >
            {renderItem(item, index)}
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-6 space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-red-500 w-8"
                : "bg-slate-400 hover:bg-slate-500"
            }`}
            aria-label={`Go to item ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollableCarousel;
