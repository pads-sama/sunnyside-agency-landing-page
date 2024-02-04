import { useEffect } from "react";
import { projectData } from "../lib/data";
import Aos from "aos";

export default function Projects() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section id="projects">
      <div className="grid grid-cols-2 grid-rows-2 overflow-hidden | md:grid-cols-4 md:grid-rows-1">
        {projectData.map((project) => (
          <div
            data-aos={project.animate}
            data-aos-delay={project.delay}
            data-aos-once={true}
            key={project.id}
            className="relative"
          >
            <img
              src={project.images.imgD}
              alt={project.alt}
              className="hidden | md:block "
            />
            <img
              src={project.images.imgM}
              alt={project.alt}
              className="md:hidden"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
