import { Code, Layers, Settings, Target, Users2, Zap } from "lucide-react";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    icon: <Code className="text-blue-600" size={24} />,
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Next.js",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Tools & Technologies",
    icon: <Settings className="text-slate-600" size={24} />,
    skills: ["Vite", "Webpack", "Git", "Docker", "Redux", "Tailwind CSS"],
  },
  {
    title: "Testing & Quality",
    icon: <Target className="text-emerald-600" size={24} />,
    skills: [
      "Cypress",
      "Jest",
      "Unit Testing",
      "Integration Testing",
      "Code Reviews",
    ],
  },
  {
    title: "Architecture & APIs",
    icon: <Layers className="text-purple-600" size={24} />,
    skills: [
      "CI/CD Pipelines",
      "GraphQL",
      "RESTful APIs",
      "Microservices",
      "Shadcn UI",
    ],
  },
];

const focusAreas = [
  {
    icon: <Users2 className="text-blue-600" size={20} />,
    title: "B2B SaaS Solutions",
    description: "Enterprise-grade applications for business users",
  },
  {
    icon: <Layers className="text-emerald-600" size={20} />,
    title: "Internal Tools Development",
    description: "Streamlining operations with custom dashboards",
  },
  {
    icon: <Zap className="text-amber-500" size={20} />,
    title: "Performance Optimization",
    description: "Scalable solutions for high-traffic applications",
  },
  {
    icon: <Target className="text-purple-600" size={20} />,
    title: "AI/ML Integration",
    description: "Intelligent features that enhance user experience",
  },
];

const Expertise = () => {
  return (
    <section id="expertise" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            My Expertise
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600">
            Technical skills and specialized focus areas that drive exceptional
            results
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-slate-50 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-slate-900">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="inline-block text-sm text-slate-600 bg-slate-100 px-3 py-1 rounded-full mr-2 mb-2"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Focus Areas */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Key Focus Areas
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area, index) => (
              <div
                key={index}
                className="text-center p-4 hover:bg-slate-50 rounded-lg transition-colors"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-100 rounded-full mb-4">
                  {area.icon}
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">
                  {area.title}
                </h4>
                <p className="text-sm text-slate-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
