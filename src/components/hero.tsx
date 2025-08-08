import XformerlyTwitter from "@/components/x";
import Linkedin from "@/components/linkedin";
import Github from "@/components/github";
import { ChevronDown, ArrowRight } from "lucide-react";
import ProfileImage from "/profile-image.webp";
import AnimatedBackgroundLayout from "@/components/animated-background-layout";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero">
      <AnimatedBackgroundLayout className="min-h-screen flex items-center justify-center pt-16 relative">
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="grid gap-12 items-center max-w-7xl mx-auto">
            {/* Content Section */}
            <div className="text-center order-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
                Hello, I'm <span className="text-red-500">Adrian</span>
                <span className="block text-3xl md:text-4xl lg:text-5xl mt-2">
                  I'm a Frontend Web Developer
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-red-400 mb-12 font-medium">
                React | TypeScript | B2B | Fintech | SaaS | Startups
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="group bg-red-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer border-2 border-red-500 hover:text-red-500 hover:bg-transparent"
                >
                  Explore My Work
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform rotate-90"
                  />
                </button>

                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="group border-2 border-red-500 text-red-500 px-8 py-4 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-300 cursor-pointer"
                >
                  What colleagues say about me
                </button>
              </div>
            </div>

            {/* Profile Picture */}
            <div className="flex justify-center order-1">
              <div className="relative">
                <div className="w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-white">
                  <img
                    src={ProfileImage}
                    alt="Adrian Beria - Senior Frontend Lead Developer"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="absolute -top-4 -right-4 size-16 md:size-24 bg-red-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 size-24 md:size-32 bg-emerald-500 rounded-full opacity-10 animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>

          <a
            href="/public/Adrian Beria Resume Senior Frontend.pdf"
            className="inline-block bg-white text-red-500 px-6 py-3 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition-colors duration-300"
            download="Adrian_Beria_Resume_Frontend.pdf"
          >
            Download my Resume
          </a>

          {/* Social Icons */}
          <div className="flex justify-center items-center mt-12 space-x-4">
            <a
              href="https://x.com/Adrberia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black shadow-sm shadow-white hover:shadow-black hover:shadow-md text-white hover:text-black hover:bg-white transition-all duration-300 transform hover:scale-105"
            >
              <XformerlyTwitter
                style={{ fill: "currentColor" }}
                className="size-8"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/adrianberia2013/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full shadow-sm hover:shadow-md hover:text-blue-600 hover:bg-white text-white bg-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              <Linkedin style={{ fill: "currentColor" }} className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/Radinax"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full hover:bg-white shadow-sm hover:shadow-md hover:text-black text-white bg-black transition-all duration-300 transform hover:scale-105 shadow-white hover:shadow-black"
            >
              <Github style={{ fill: "currentColor" }} className="size-8" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="text-center mt-16">
            <button
              onClick={() => scrollToSection("about")}
              className="text-slate-400 hover:text-slate-600 transition-colors animate-bounce"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </AnimatedBackgroundLayout>
    </section>
  );
};

export default Hero;
