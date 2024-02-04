import { useEffect } from "react";
import DarkLogo from "../assets/images/darkLogo.svg";
import { links, socialsData } from "../lib/data";
import Aos from "aos";

export default function Footer() {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <footer className="py-20 px-10 bg-lightModerateCyan-0  font-barlow flex flex-col justify-center items-center | md:py-32 ">
      <div className="flex flex-col justify-center items-center w-full gap-10">
        <div className="w-52 h-auto ">
          <img
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-once={true}
            src={DarkLogo}
            alt="logo"
            className="w-full h-full"
          />
        </div>
        <ul className="flex w-full justify-between text-lg font-semibold max-w-96 h-10  items-center overflow-hidden">
          {links.slice(0, 3).map((link) => (
            <li
              key={link.id}
              data-aos={link.animate}
              data-aos-delay={link.delay}
              data-aos-once={true}
              data-aos-easing="ease-in-sine"
            >
              <a href={link.url} className="text-darkModerateCyan-0">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-10 mt-10  h-10 justify-center items-center ">
          {socialsData.map((social) => (
            <div key={social.id} className=" h-7 w-7">
              <a href="/" className="h-7 w-7">
                <img
                  src={social.image}
                  alt={social.alt}
                  className="w-full h-full"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
