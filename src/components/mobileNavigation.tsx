import { links } from "../lib/data";

type MobileNavProps = {
  isOpen: boolean;
  isActive: boolean;
  setIsActive: any;
};

export default function MobileNavigation({
  isOpen,
  setIsActive,
  isActive,
}: MobileNavProps) {
  return (
    <nav
      className={`${
        isOpen ? "block" : "hidden"
      } w-[90%] h-auto bg-white absolute top-[6.25rem] z-50 slide-up | md:hidden`}
    >
      <div className="h-[inherit] w-full relative overflow-hidden flex flex-col justify-center items-center py-10">
        <div className="w-full  h-8 bg-[#3dbeff] skew absolute -left-[13px] top-0"></div>
        <ul className="text-center text-gray-500 font-medium flex flex-col gap-2">
          {links.map((link) => (
            <li
              key={link.id}
              className="h-[3.5rem] w-[9rem] flex justify-center items-center text-[1.125rem]"
            >
              <a
                className={`${
                  link.id === "4"
                    ? "bg-yellow-0 text-black rounded-full font-bold font-fraunces uppercase hover:bg-blue-50 transition"
                    : ""
                } h-full w-full flex justify-center items-center hover:bg-blue-50 transition rounded-full`}
                href={link.url}
                onClick={() => setIsActive(!isActive)}
              >
                {link.name}
              </a>
              {/* <span className=""></span> */}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
