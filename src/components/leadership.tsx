import { Users, Target, Lightbulb, TrendingUp } from "lucide-react";

const leadershipPoints = [
  {
    icon: <Users className="text-blue-600" size={24} />,
    title: "Team Scaling & Mentorship",
    description:
      "Successfully scaled frontend teams and mentored junior developers, fostering collaborative environments that drive innovation and professional growth.",
  },
  {
    icon: <Target className="text-emerald-600" size={24} />,
    title: "Hands-on Leadership",
    description:
      "Lead by example with active coding contributions while providing strategic technical direction and architectural decision-making for complex projects.",
  },
  {
    icon: <Lightbulb className="text-amber-500" size={24} />,
    title: "Innovation & Best Practices",
    description:
      "Champion modern development practices, implement CI/CD pipelines, and introduce cutting-edge technologies that improve team productivity and code quality.",
  },
  {
    icon: <TrendingUp className="text-purple-600" size={24} />,
    title: "Cross-functional Collaboration",
    description:
      "Bridge technical and business teams, translating complex requirements into actionable development strategies that align with organizational goals.",
  },
];

const Leadership = () => {
  return (
    <section id="leadership" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Leadership & Impact
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            My leadership philosophy centers on hands-on technical excellence
            combined with team empowerment. I believe in fostering collaborative
            environments where innovation thrives and teams grow together to
            deliver exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {leadershipPoints.map((point, index) => (
            <div
              key={index}
              className="p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 bg-slate-50"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-50 rounded-lg flex-shrink-0">
                  {point.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {point.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Lead Your Next Project
          </h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Looking for a technical leader who can drive both innovation and
            results? Let's discuss how I can contribute to your team's success
            and help scale your product initiatives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
