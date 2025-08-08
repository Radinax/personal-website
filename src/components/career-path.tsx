import { useEffect, useRef, useState } from "react";

const timelineEvents = [
  {
    year: "2013",
    title: "Started my career as Electric Engineer",
    description:
      "Due to my Thesis on the Electromagnetic Waves of the National Transmission Lines simulated through Matlab, I started teaching Electromagnetic Theory in a University which helped me develop my current Leading skills",
    type: "start",
  },
  {
    year: "2015",
    title: "Began Freelance Web Development & Engineering Foundation",
    description:
      "Started building websites with HTML, CSS, JavaScript, and PHP.",
    type: "start",
  },
  {
    year: "2018",
    title: "Transition to Professional Frontend Development",
    description:
      "Got my first fulltime job as Software Developer, joined Innovative Algorithms to build complex data dashboards for logistics and operations.",
    type: "milestone",
  },
  {
    year: "2019",
    title: "Expanding Professional Experience at Tecno Makers SAS",
    description:
      "Developed internal engagement platforms and interactive components for large-scale content management systems, enhancing user interaction and content distribution for Discovery Channel.",
    type: "milestone",
  },
  {
    year: "2021",
    title: "Rapid Ascent to Lead Developer (Vascar Solutions)",
    description:
      "Promoted to Lead Developer within two months at Vascar Solutions (FinTech). Led team in building an AI-powered Finance Dashboard using React, TypeScript, and Redux Toolkit, enhancing operational efficiency.",
    type: "skill",
  },
  {
    year: "2022",
    title: "Driving AI & Enterprise Solutions (Memorable AI)",
    description:
      "Promoted to Team Leader within four months at Memorable AI. Led the modernization of a legacy enterprise real-time AI-powered Campaign Performance Dashboard integrated with a custom LLM and contributed to the development of an Ad Maker Tool.",
    type: "skill",
  },
  {
    year: "2023",
    title: "Strategic Client Re-engagement & Technical Modernization (Finvar)",
    description:
      "Re-engaged as a trusted partner for Finvar. Led critical developer tooling improvements including Git multi-branch strategy and Vite migration, enabling 3.2x faster releases. Enhanced core dashboard functionality and developed a new Landing Page.",
    type: "current",
  },
  {
    year: "2025",
    title: "UI System & Performance Optimization (Remote Crew)",
    description:
      "Led the migration of a large-scale React application from Material UI to Shadcn UI, dramatically boosting development efficiency, component reusability, and user satisfaction.",
    type: "current",
  },
];

const Career = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    const rect = scrollRef.current.getBoundingClientRect();
    setStartX(e.clientX - rect.left); // Use clientX and bounding rect for accuracy
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const rect = scrollRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const walk = (x - startX) * 1.5; // Scroll speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const element = scrollRef.current;
    element?.addEventListener("mouseleave", handleMouseUp);
    return () => {
      element?.removeEventListener("mouseleave", handleMouseUp);
    };
  }, []);

  return (
    <section id="career" className="py-20">
      <div className="max-w-6xl mx-auto px-6 bg-transparent">
        <h2 className="text-4xl font-bold text-center mb-6 text-white">
          Career Journey
        </h2>
        <div className="w-24 h-1 bg-red-600 mx-auto mb-12"></div>

        {/* Desktop: Vertical Timeline */}
        <div className="hidden md:block relative">
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-red-800"></div>

          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div
                className={`w-1/2 ${
                  index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"
                }`}
              >
                <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full">
                      {event.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>

              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow-lg"></div>

              <div className="w-1/2"></div>
            </div>
          ))}
        </div>

        {/* Mobile: Horizontal Alternating Timeline */}
        <div className="md:hidden">
          <div className="relative">
            {/* Horizontal center line */}
            <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-red-800 transform -translate-y-0.5 z-0"></div>

            {/* Scrollable container */}
            <div
              ref={scrollRef}
              className={`flex space-x-8 overflow-x-auto px-4 pb-8 pt-8 cursor-grab ${
                isDragging ? "cursor-grabbing" : ""
              } scrollbar-hide h-[900px]`}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              {timelineEvents.map((event, index) => {
                const isEven = index % 2 === 0; // true = above, false = below
                return (
                  <div
                    key={index}
                    className="flex-shrink-0 w-80 relative flex flex-col items-center select-none"
                  >
                    {/* Timeline dot - centered on the line */}
                    <div className="w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow-lg z-10 mb-1 absolute top-1/2"></div>

                    {/* Card: positioned above or below */}
                    <div
                      className={`z-10 bg-white p-6 rounded-xl shadow-lg border border-slate-200 w-full text-center transition-transform duration-300 ${
                        isEven
                          ? "transform -translate-y-0" // Above the line
                          : "transform translate-y-110" // Below the line
                      }`}
                    >
                      <div className="flex justify-center gap-3 mb-3">
                        <span className="text-sm font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full">
                          {event.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {event.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
