import { ArrowRight, Brain, TrendingUp, Wrench, Images } from "lucide-react";

const projects = [
  {
    title: "AI-Powered Finance Dashboard",
    role: "Lead Frontend Developer",
    company: "Vascar Solutions",
    icon: <Brain className="text-blue-100" size={24} />,
    description:
      "Led the development of a comprehensive FinTech platform with real-time data visualization and AI-powered insights. Streamlined complex financial operations and enhanced decision-making capabilities for enterprise clients. Contacted recently for specific project details.",
    impact:
      "Reduced data processing time by 60% and improved user efficiency in financial analysis workflows",
    technologies: [
      "React",
      "TypeScript",
      "AI/ML Integration",
      "Real-time Data",
      "FinTech APIs",
      "Redux",
      "Tailwind",
      "recharts",
      "React Query",
    ],
    gradient: "from-blue-500 to-cyan-500",
    link: "https://beta.capnote.com/",
  },
  {
    title: "Real-time Campaign Performance Dashboard",
    role: "Lead Frontend Developer",
    company: "Memorable AI",
    icon: <TrendingUp className="text-emerald-200" size={24} />,
    description:
      "Built an intelligent marketing analytics platform with AI-driven performance predictions and real-time campaign monitoring. Integrated complex data visualization for marketing teams.",
    impact:
      "Increased campaign optimization efficiency by 45% and provided actionable insights for marketing strategies",
    technologies: [
      "React",
      "AI/ML",
      "Recharts",
      "Real-time Analytics",
      "Performance Monitoring",
      "GraphQL",
      "Zustand",
      "React Query",
    ],
    gradient: "from-emerald-500 to-teal-500",
    link: "https://www.memorable.io/m/www.memorable.io/",
  },
  {
    title: "Admaker Tool",
    role: "Senior Frontend Developer",
    company: "Memorable AI",
    icon: <Images className="text-pink-200" size={24} />,
    description:
      "Collaborated on the development of a cutting-edge ad creation tool that leverages AI to generate completely new images optimized for branding and performance. In seconds and using only text, you can generate ads that maximize Recall, Distinctiveness, Engagement and other KPIs, then use the image editor to apply your own changes for feedback.",
    impact:
      "Increased ads optimization efficiency by 85%, allowing users to create, generate and edit their own ads",
    technologies: [
      "React",
      "NextJS",
      "AI/ML",
      "Recharts",
      "Real-time Analytics",
      "Performance Monitoring",
    ],
    gradient: "from-purple-500 to-pink-500",
    link: "https://www.producthunt.com/products/memorable-ad-maker",
  },
  {
    title: "Enterprise Application Modernization",
    role: "Senior Frontend Engineer",
    company: "Remote Crew",
    icon: <Wrench className="text-green-300" size={24} />,
    description:
      "Led the migration and modernization of legacy enterprise applications to modern React architecture, from Material UI, Axios and Redux, to Shadcn, React Query and Zustand. Improved scalability, performance, and maintainability across multiple product lines.",
    impact:
      "Achieved 40% improvement in application performance and reduced technical debt significantly",
    technologies: [
      "React",
      "TypeScript",
      "Migration Strategy",
      "Performance Optimization",
      "Team Leadership",
      "Material UI",
      "Tailwind",
      "Shadcn",
      "Zustand,",
    ],
    gradient: "from-green-800 to-green-500",
    link: "https://www.equi.com/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Impactful Solutions
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>
          <p className="text-lg text-white">
            Key projects that demonstrate expertise in B2B platforms and
            enterprise solutions
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform"
            >
              <div className="grid lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">
                        {project.title}
                      </h3>
                      <p className="text-red-500 font-medium">
                        {project.role} • {project.company}
                      </p>
                    </div>
                  </div>

                  <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="bg-gradient-to-r from-red-50 to-blue-50 p-4 rounded-lg mb-6">
                    <p className="text-slate-800 font-medium">
                      <span className="text-red-600 font-semibold">
                        Impact:
                      </span>{" "}
                      {project.impact}
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-sm bg-white text-slate-700 px-3 py-1 rounded-full border border-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-full bg-white border-2 border-red-500 text-red-500 px-6 py-3 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    View Project
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
