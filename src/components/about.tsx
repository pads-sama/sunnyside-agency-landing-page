import { useEffect } from "react";
import { aboutInformation } from "../lib/data";
import AOS from "aos";

export default function About() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section id="about" className="md:scroll-mt-[15rem] overflow-hidden">
      <div>
        {aboutInformation.map((about) => (
          <article
            key={about.id}
            className="grid | md:grid-rows-0 md:grid-cols-2"
          >
            <div
              data-aos="zoom-in"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-once={true}
              className={`${about.id === "1" ? "md:order-1" : ""}`}
            >
              <img
                src={about.image}
                alt={about.alt}
                className=" w-full h-full"
              />
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-once={true}
              className="px-5 min-h-[24rem]  flex flex-col justify-center items-center  text-[#5a636c] font-medium text-[1.125rem]"
            >
              <div className="max-w-96 text-center  flex flex-col justify-center items-center gap-5 py-8 | md:text-left md:items-start md:px-5 | lg:px-0 lg:max-w-[31rem]">
                <h1 className="px-3 text-3xl text-wrap font-fraunces font-bold text-gray-950 | md:text-5xl">
                  {about.title}
                </h1>
                <p className="px-2 lg:text-xl">{about.description}</p>
                <button className="text-xl  uppercase font-bold font-fraunces text-gray-950 w-[10rem] h-auto relative">
                  {about.cta}
                  <span className="absolute bg-yellow-0 opacity-40 h-2 w-full right-0 bottom-[0.188rem] -z-10 rounded-full"></span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
