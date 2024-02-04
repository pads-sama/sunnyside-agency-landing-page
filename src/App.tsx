import About from "./components/about";
import Header from "./components/header";
import Hero from "./components/hero";
import Services from "./components/services";

export default function App() {
  return (
    <div className="relative max-w-[1440px] my-0 mx-auto">
      <Header />
      <Hero />
      <About />
      <Services />
    </div>
  );
}
