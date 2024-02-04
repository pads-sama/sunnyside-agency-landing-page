import { testimonialsData } from "../lib/data";

export default function Testimonials() {
  return (
    <section className="py-32 flex justify-center items-center flex-col">
      <h1>Client testimonials</h1>

      {testimonialsData.map((testimonial) => (
        <div key={testimonial.id} className="grid ">
          <div className="flex">
            <img src={testimonial.image} alt={testimonial.alt} />
            <p>{testimonial.text}</p>
            <strong>{testimonial.name}</strong>
            <small>{testimonial.role}</small>
          </div>
        </div>
      ))}
    </section>
  );
}
