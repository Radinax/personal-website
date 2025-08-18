import HeroImage from "/pic.webp";

const About = () => {
  return (
    <section id="about" className="py-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            From Electrical Engineer to AI-First Frontend Architect
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg text-white leading-relaxed text-center sm:text-left">
              <b className="text-red-400">
                Senior Frontend Engineer specializing in AI-powered enterprise
                applications
              </b>
              . With 8+ years of experience, I bridge the gap between complex
              business logic and intuitive interfaces—modernizing legacy systems
              like Memorable AI's dashboard (<b>40% faster load times</b>) and
              shipping LLM tools to Product Hunt.
            </p>

            <p className="text-lg text-white leading-relaxed text-center sm:text-left">
              My <b className="text-red-400">engineering background</b>{" "}
              (electromagnetics + MATLAB) fuels my architectural approach. I
              don't just build UIs—I design <b>scalable systems</b>
              with React/TypeScript, GraphQL, and AI integration, mentored 10+
              developers remotely, and led fintech projects serving 100K+ users.
            </p>

            <p className="text-lg text-white leading-relaxed text-center sm:text-left">
              <b className="text-red-400">Current focus</b>: Helping companies
              augment their frontends with <b>LLM capabilities</b> while
              maintaining performance and type safety (Zustand + Codegen).
              Passionate about tools that turn complex data into{" "}
              <b>actionable insights</b> for business users.
            </p>
          </div>

          {/* Your existing image component remains unchanged */}
          <div className="relative flex justify-center">
            <div
              className="absolute bg-zinc-800 rounded-3xl shadow-lg"
              style={{
                width: "90%",
                minWidth: "320px",
                maxWidth: "1020px",
                height: "100%",
                transform: "translate(30px,30px)", // Offset to bottom-right
                zIndex: 0,
              }}
            ></div>

            {/* Top Image Card (foreground) */}
            <div
              className="relative z-10"
              style={{
                width: "90%",
                minWidth: "320px",
                maxWidth: "1020px",
              }}
            >
              <img
                src={HeroImage}
                alt="Dashboard preview"
                className="object-contain rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <q className="text-xl text-white leading-relaxed italic text-center sm:text-left">
          The best interfaces disappear—they make AI feel human and complexity
          feel simple. That's why I obsess over both pixel-perfect React and
          strategic LLM integration.
        </q>
      </div>
    </section>
  );
};

export default About;
