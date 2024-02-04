import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/icon-hamburger.svg";
import { useState } from "react";
import MobileNavigation from "./mobileNavigation";
import DesktopNavigation from "./desktopNavigation";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <header className="z-[999] relative">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className=" h-[6.25rem] w-full bg-transparent flex justify-between items-center px-5 | lg:h-[8.25rem] lg:px-10"
      >
        <motion.a href="/#home">
          <motion.img
            src={logo}
            className="w-44 h-8"
            alt="logo svg"
            whileHover={{ scale: 1.05 }}
          />
        </motion.a>

        <button
          className="block | md:hidden "
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          <img src={hamburger} alt="hamburger icon" className="w-7 h-5" />
        </button>
        <DesktopNavigation isActive={isActive} setIsActive={setIsActive} />

        <MobileNavigation
          isOpen={isOpen}
          isActive={isActive}
          setIsActive={setIsActive}
        />
      </motion.div>
    </header>
  );
}
