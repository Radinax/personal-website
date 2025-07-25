import { ChevronDown, ArrowRight } from "lucide-react";
import ProfileImage from "public/profile-image.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid gap-12 items-center max-w-7xl mx-auto">
          {/* Content Section */}
          <div className="text-center order-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Adrian Beria
              <span className="block text-blue-600 text-3xl md:text-4xl lg:text-5xl mt-2">
                Frontend Lead Developer
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 mb-4 font-medium">
              React | TypeScript | B2B | Fintech | SaaS
            </p>

            <p className="text-lg md:text-xl text-slate-500 mb-12 leading-relaxed">
              Building robust B2B platforms and complex internal tools that
              streamline operations and drive efficiency for professional users.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button
                onClick={() => scrollToSection("projects")}
                className="group bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 cursor-pointer"
              >
                Explore My Work
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button
                onClick={() => scrollToSection("testimonials")}
                className="group border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                What colleagues say about me
              </button>
            </div>
          </div>

          {/* Profile Picture Section */}
          <div className="flex justify-center order-1">
            <div className="relative">
              <div className="w-80 h-80 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-white">
                <img
                  src={ProfileImage}
                  alt="Adrian Beria - Senior Frontend Lead Developer"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-500 rounded-full opacity-10 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="text-center mt-16">
          <button
            onClick={() => scrollToSection("about")}
            className="text-slate-400 hover:text-slate-600 transition-colors animate-bounce"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
