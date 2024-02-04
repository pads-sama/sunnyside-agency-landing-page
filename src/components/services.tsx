import { useEffect } from "react";
import { servicesData } from "../lib/data";
import AOS from "aos";
import Testimonials from "./testimonials";

export default function Services() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section id="services" className="overflow-hidden">
      <div className="grid | md:grid-cols-2">
        {servicesData.map((service) => (
          <article key={service.id} className="grid |">
            <figure
              className={`${
                service.id === "1"
                  ? "text-graphicDesignText-0"
                  : "text-photographyText-0"
              } w-[100%] h-auto relative flex flex-col items-center`}
            >
              <img
                data-aos="zoom-in"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-once={true}
                src={service.imageD}
                alt="image of a cherry"
                className="w-full h-full hidden | sm:block"
              />
              <img
                data-aos="zoom-in"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-once={true}
                src={service.imageM}
                alt="image of a cherry"
                className="w-full h-full sm:hidden"
              />
              <div
                data-aos="fade-up"
                data-aos-easing="ease-in-sine"
                data-aos-once={true}
                data-aos-delay="300"
                className="absolute bottom-0 h-[20rem] flex flex-col items-center justify-center gap-5 max-w-[30rem] my-0 mx-auto | md:h-[10rem] | lg:h-[15rem]"
              >
                <h1 className="text-3xl text-wrap font-fraunces font-bold | md:text-4xl ">
                  {service.title}
                </h1>
                <p className="text-center font-medium px-6 | lg:text-xl">
                  {service.description}
                </p>
              </div>
            </figure>
          </article>
        ))}
      </div>
      <Testimonials />
    </section>
  );
}
