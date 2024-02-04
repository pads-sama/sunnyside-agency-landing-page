import orange from "../assets/images/desktop/image-header-removebg.png";
import arrow from "../assets/images/icon-arrow-down.svg";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-[100dvh] -mt-[6.25rem] bg-[#3dbeff] overflow-hidden  | lg:-mt-[8.26rem]"
    >
      <div className="h-[inherit] relative flex justify-center items-center | lg:items-start lg:pt-52">
        <motion.h1
          initial={{ x: -1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-fraunces font-extrabold text-5xl uppercase text-center text-white tracking-widest z-10 | lg:text-6xl lg:tracking-[1rem]"
        >
          We are creatives
        </motion.h1>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          src={arrow}
          alt="arrow svg"
          className="absolute bottom-32 z-10 animate-bounce | md:bottom-[10rem] lg:bottom-[18rem] | xl:bottom-[21rem]"
        />

        <motion.img
          initial={{ y: 1000, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          src={orange}
          alt="picture of orange"
          className="absolute bottom-0 min-w-[46.875rem] h-auto z-0"
        />
      </div>
    </section>
  );
}
