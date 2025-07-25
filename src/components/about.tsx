import { Code2, Users, Zap } from "lucide-react";

const highlights = [
  {
    icon: <Code2 className="text-blue-600" size={24} />,
    title: "Technical Excellence",
    description:
      "Expert in React, TypeScript, and modern frontend architecture",
  },
  {
    icon: <Users className="text-emerald-600" size={24} />,
    title: "Team Leadership",
    description: "Scaling product teams and mentoring developers",
  },
  {
    icon: <Zap className="text-amber-500" size={24} />,
    title: "Business Impact",
    description: "Delivering solutions that drive efficiency and growth",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed">
              As a Senior Frontend Lead Developer,{" "}
              <b>
                I specialize in building sophisticated B2B platforms and
                internal tools using React and TypeScript
              </b>
              . My unique journey began with an Electrical Engineering
              background, providing me with analytical thinking and systems
              understanding that I've applied to web development since 2015.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              From freelance web development with HTML, CSS, JavaScript, and PHP
              (2015-2018) to professional development leadership since 2018,
              I've consistently focused on solving complex problems for business
              users. I excel at modernizing codebases, optimizing performance,
              and leading cross-functional teams to deliver scalable solutions.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              <b>
                My expertise lies in transforming complex business requirements
                into intuitive, efficient interfaces that empower professional
                users and drive operational excellence
              </b>
              . I'm passionate about integrating AI-driven features and creating
              solutions that scale with growing organizations.
            </p>
          </div>

          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-slate-50 p-6 rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {highlight.title}
                  </h3>
                </div>
                <p className="text-slate-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
