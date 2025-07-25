import About from "@/components/about";
import Contact from "@/components/contact";
import Expertise from "@/components/expertise";
import Hero from "@/components/hero";
import Leadership from "@/components/leadership";
import Navigation from "@/components/navigation";
import Projects from "@/components/projects";
import Testimonials from "@/components/testimonials";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Testimonials />
        <Leadership />
        <Contact />
      </main>
    </div>
  );
}

export default App;
