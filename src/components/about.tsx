import HeroImage from "/pic.png";

const About = () => {
  return (
    <section id="about" className="py-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg text-white leading-relaxed">
              As a Senior Frontend Lead Developer,{" "}
              <b className="text-red-400">
                I specialize in building sophisticated B2B platforms and
                internal tools using React and TypeScript
              </b>
              . My unique journey began with an Electrical Engineering
              background, providing me with analytical thinking and systems
              understanding that I've applied to web development since 2015.
            </p>

            <p className="text-lg text-white leading-relaxed">
              From freelance web development with HTML, CSS, JavaScript, and PHP
              (2015-2018) to professional development leadership since 2018,
              I've consistently focused on solving complex problems for business
              users. I excel at modernizing codebases, optimizing performance,
              and leading cross-functional teams to deliver scalable solutions.
            </p>

            <p className="text-lg text-white leading-relaxed">
              <b className="text-red-400">
                My expertise lies in transforming complex business requirements
                into intuitive, efficient interfaces that empower professional
                users and drive operational excellence
              </b>
              . I'm passionate about integrating AI-driven features and creating
              solutions that scale with growing organizations.
            </p>
          </div>

          <div className="relative flex justify-center">
            {/* Bottom "Paper" Layer (background) */}
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
        <q className="text-lg text-white leading-relaxed">
          From my early days as a freelance web developer to leading teams in
          building complex B2B platforms, my journey has been driven by a
          passion for creating impactful user experiences.
        </q>
      </div>
    </section>
  );
};

export default About;
