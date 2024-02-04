import Aos from "aos";
import { testimonialsData } from "../lib/data";
import { useEffect } from "react";

export default function Testimonials() {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <section className="py-20 flex justify-center items-center flex-col | md:py-32">
      <h1
        data-aos="zoom-in"
        data-aos-once={true}
        className="font-fraunces font-bold text-2xl uppercase text-grayishBlue-0 tracking-widest | md:text-3xl"
      >
        Client testimonials
      </h1>

      <div className=" text-darkGrayBlue-0 flex justify-center items-center gap-10 flex-wrap font-semibold mt-20 | md:w-full md:gap-5">
        {testimonialsData.map((testimonial) => (
          <div
            key={testimonial.id}
            className="max-w-[20rem] flex min-h-[18rem] px-3 | md:min-w-[25rem] | lg:min-w-[25rem] lg:px-2"
          >
            <div
              data-aos={testimonial.animate}
              data-aos-delay={testimonial.delay}
              data-aos-once={true}
              className=" flex flex-col justify-center items-center text-center gap-5 my-0 mx-auto | sm:max-w-[70%] | md:max-w-[100%] md:px-4"
            >
              <img
                src={testimonial.image}
                alt={testimonial.alt}
                className="w-[5rem] h-[5rem] rounded-full"
              />
              <p className="text-lg">{testimonial.text}</p>
              <div className="flex flex-col">
                <strong className="text-xl font-fraunces text-darkDesaturatedBlue-0">
                  {testimonial.name}
                </strong>
                <small className="text-grayishBlue-0 text-sm">
                  {testimonial.role}
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
