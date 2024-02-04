import { links } from "../lib/data";
import { motion } from "framer-motion";

type DesktopProps = {
  isActive: boolean;
  setIsActive: any;
};

export default function DesktopNavigation({
  isActive,
  setIsActive,
}: DesktopProps) {
  return (
    <nav className="hidden | md:block">
      <div className="h-[6.25rem] w-full relative flex flex-col justify-center items-center py-10">
        <ul className="text-center text-white font-medium flex gap-2">
          {links.map((link) => (
            <li
              key={link.id}
              className=" h-[3.5rem] w-[9rem] flex justify-center items-center text-[1.125rem]"
            >
              <motion.a
                whileHover={{ scale: 1.09 }}
                className={`${
                  link.id === "4"
                    ? "bg-white text-black rounded-full font-bold font-fraunces uppercase hover:bg-white/50 transition hover:text-white"
                    : ""
                } h-full w-full flex justify-center items-center hover:bg-white/50 transition rounded-full`}
                href={link.url}
                onClick={() => setIsActive(!isActive)}
              >
                {link.name}
              </motion.a>
              {/* <span className=""></span> */}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
