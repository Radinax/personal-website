const timelineEvents = [
  {
    year: "2013",
    title: "Electrical Engineer → Future Tech Architect",
    description:
      "Thesis on electromagnetic wave simulations (MATLAB) → taught university-level physics, honing analytical problem-solving and leadership skills that later defined my engineering career.",
    type: "start",
  },
  {
    year: "2015",
    title: "Self-Taught Freelance Developer",
    description:
      "Built foundational web dev skills (HTML/CSS/JS/PHP) while teaching, proving my ability to rapidly master complex systems.",
    type: "start",
  },
  {
    year: "2018",
    title: "First Full-Time Frontend Role",
    description:
      "Joined Innovative Algorithms to architect logistics dashboards with React + Redux, establishing my signature blend of data visualization and clean state management.",
    type: "milestone",
  },
  {
    year: "2019",
    title: "Enterprise UX at Scale (Discovery Channel)",
    description:
      "Developed engagement platforms for 100K+ users at Tecno Makers, mastering cross-functional collaboration with designers and marketers.",
    type: "milestone",
  },
  {
    year: "2021",
    title: "FinTech Leadership Breakthrough",
    description:
      "Promoted to Lead Developer in 2 months at Vascar Solutions. Shipped AI-powered finance dashboard (React/TypeScript) that unified real-time data streams, reducing user decision time by 35%.",
    type: "skill",
  },
  {
    year: "2022",
    title: "AI/LLM Frontier (Memorable AI)",
    description:
      "Led modernization of legacy dashboard → React/Next.js + GraphQL (40% faster). Built Product Hunt-featured Ad Maker with custom LLM integration, bridging AI and frontend.",
    type: "skill",
  },
  {
    year: "2025",
    title: "AgriTech Full-Stack Innovation",
    description:
      "Architected farmer communication system: Kotlin mobile app + React admin panel with geospatial alerts. Proved ability to deliver complex cross-platform solutions.",
    type: "skill",
  },
  {
    year: "2025",
    title: "LLM Prompt Engineering (Revelo)",
    description:
      "Trained specialized LLM for algorithmic prompt correction (Next.js 15). Demonstrated cutting-edge AI/UX integration capabilities.",
    type: "skill",
  },
  {
    year: "2023-Present",
    title: "Strategic FinTech Modernization (Finvar)",
    description:
      "Re-engaged to lead technical transformation: Vite migration (3.2x faster builds), Git workflow overhaul, and landing page revamp, proving my enduring value to long-term clients.",
    type: "current",
  },
];

const Career = () => {
  return (
    <section id="career" className="py-12 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-16 text-white">
          Career Journey
        </h2>
        <div className="w-24 h-1 bg-red-600 mx-auto mb-12"></div>

        {/* Desktop: Vertical Timeline */}
        <div className="hidden md:block relative">
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-red-800"></div>

          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-8 sm:mb-16 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div
                className={`w-full sm:w-1/2 ${
                  index % 2 === 0
                    ? "sm:pr-12 sm:text-right"
                    : "sm:pl-12 sm:text-left"
                } pl-12 sm:pl-0 text-left`}
              >
                <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3">
                    <span className="text-sm font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full">
                      {event.year}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>

              <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-red-600 rounded-full border-2 sm:border-4 border-white shadow-lg"></div>

              <div className="hidden sm:block sm:w-1/2"></div>
            </div>
          ))}
        </div>

        {/* Mobile: Vertical Timeline (simplified) */}
        <div className="md:hidden relative">
          <div className="absolute left-4 transform -translate-x-px h-full w-0.5 bg-red-800"></div>

          {timelineEvents.map((event, index) => (
            <div key={index} className="relative flex mb-8">
              <div className="w-full pl-12">
                <div className="bg-white p-4 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full">
                      {event.year}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>

              <div className="absolute left-4 transform -translate-x-1/2 w-3 h-3 bg-red-600 rounded-full border-2 border-white shadow-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
