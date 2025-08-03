import Github from "@/components/github";
import Linkedin from "@/components/linkedin";
import Twitter from "@/components/x";
import Mail from "@/components/mail";
import { ExternalLink } from "lucide-react";

const contactLinks = [
  {
    icon: <Mail className="text-red-500 size-12" />,
    label: "Email",
    value: "adrberia@gmail.com",
    href: "mailto:adrberia@gmail.com",
    description: "Get in touch directly",
  },
  {
    icon: <Linkedin className="text-blue-700 size-12" />,
    label: "LinkedIn",
    value: "linkedin.com/in/adrianberia2013",
    href: "https://www.linkedin.com/in/adrianberia2013/",
    description: "Professional network",
  },
  {
    icon: <Github className="text-slate-800 size-12" />,
    label: "GitHub",
    value: "github.com/Radinax",
    href: "https://github.com/Radinax",
    description: "Code repositories",
  },
  {
    icon: <Twitter className="text-black size-12" />,
    label: "Twitter",
    value: "@Adrberia",
    href: "https://twitter.com/Adrberia",
    description: "Tech insights & updates",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Connect with Me
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>
          <p className="text-lg text-white">
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
              className="group bg-white p-6 rounded-xl hover:bg-slate-50 hover:shadow-lg transition-all duration-300 relative"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 bg-white rounded-lg">{link.icon}</div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">
                    {link.label}
                  </h3>
                  <p className="text-sm text-slate-600 mb-2">
                    {link.description}
                  </p>
                  <p className="text-sm font-medium text-red-500 break-all">
                    {link.value}
                  </p>
                </div>
                <ExternalLink
                  size={16}
                  className="absolute top-3 right-5 text-slate-400 group-hover:text-red-500 transition-colors"
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
            className="inline-flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Visit My Blog
            <ExternalLink size={18} />
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-30 pt-8 h-full py-10 bg-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white flex flex-col justify-center sm:flex-row gap-1 font-semibold">
            <p>&copy; {new Date().getFullYear()} Adrian Beria.</p>
            <p>Building the future of web applications.</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
