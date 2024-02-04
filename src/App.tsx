import About from "./components/about";
import Header from "./components/header";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Services from "./components/services";

export default function App() {
  return (
    <div className="relative max-w-[1920px] my-0 mx-auto">
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
    </div>
  );
}
