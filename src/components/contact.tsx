import { Mail, Linkedin, Github, Twitter, ExternalLink } from "lucide-react";

const contactLinks = [
  {
    icon: <Mail className="text-blue-600" size={24} />,
    label: "Email",
    value: "adrberia@gmail.com",
    href: "mailto:adrberia@gmail.com",
    description: "Get in touch directly",
  },
  {
    icon: <Linkedin className="text-blue-700" size={24} />,
    label: "LinkedIn",
    value: "linkedin.com/in/adrianberia2013",
    href: "https://www.linkedin.com/in/adrianberia2013/",
    description: "Professional network",
  },
  {
    icon: <Github className="text-slate-800" size={24} />,
    label: "GitHub",
    value: "github.com/Radinax",
    href: "https://github.com/Radinax",
    description: "Code repositories",
  },
  {
    icon: <Twitter className="text-blue-500" size={24} />,
    label: "Twitter",
    value: "@Adrberia",
    href: "https://twitter.com/Adrberia",
    description: "Tech insights & updates",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="pt-20 bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Connect with Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600">
            Ready to discuss your next project or explore collaboration
            opportunities? I'm always interested in connecting with fellow
            professionals and innovative companies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white p-6 rounded-xl hover:bg-slate-50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 bg-white rounded-lg group-hover:scale-110 transition-transform">
                  {link.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">
                    {link.label}
                  </h3>
                  <p className="text-sm text-slate-600 mb-2">
                    {link.description}
                  </p>
                  <p className="text-sm font-medium text-blue-600 break-all">
                    {link.value}
                  </p>
                </div>
                <ExternalLink
                  size={16}
                  className="text-slate-400 group-hover:text-blue-600 transition-colors"
                />
              </div>
            </a>
          ))}
        </div>

        {/* Optional Blog Link */}
        <div className="bg-white rounded-2xl p-8 text-center">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">
            Interested in My Technical Insights?
          </h3>
          <p className="text-slate-600 mb-6">
            Check out my blog where I share thoughts on frontend development,
            team leadership, and industry trends.
          </p>
          <a
            href="https://adrian-beria-blog.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Visit My Blog
            <ExternalLink size={18} />
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-slate-200 bg-white h-full pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-slate-500">
            <p>
              &copy; {new Date().getFullYear()} Adrian Beria. Building the
              future of web applications.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
