import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Navigation from "@/components/navigation";
import Projects from "@/components/projects";
import Testimonials from "@/components/testimonials";
import Career from "@/components/career-path";
import Footer from "@/components/footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <main className="bg-black opacity-90 blur-[0.5px]">
        <Hero />
        <About />
        <Career />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
