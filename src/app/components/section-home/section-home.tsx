import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { Icons } from "../icons/icons";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

export function SectionHome() {
  return (
    <section id="home">
      <div className="flex flex-col gap-8">
        <div className="flex gap-1">
          <span className="font-bold md:text-2xl text-xl italic">Prazer, me chamo</span>
          <span className="text-violet-500 md:text-2xl font-bold text-xl italic">
            Anderson Reis.
          </span>
        </div>
        <div className="">
          <h1 className="text-5xl md:text-6xl font-bold italic">Desenvolvedor Front-end Júnior</h1>
        </div>
        <div>
          <button
            className={`
            bg-violet-500 rounded-md font-bold text-base md:px-7 md:py-5
            py-3 px-5 cursor-pointer transition duration-500 ease-in-out hover:bg-violet-900
            `}
          >
            Download CV
          </button>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <Icons icone={<FaHtml5 color="#8b5cf6" size={20} />} texto="Html5" />
          <Icons icone={<FaCss3Alt color="#8b5cf6" size={20} />} texto="Css3" />
          <Icons
            icone={<IoLogoJavascript color="#8b5cf6" size={20} />}
            texto="JavaScript"
          />
          <Icons
            icone={<SiTypescript color="#8b5cf6" size={20} />}
            texto="TypeScript"
          />
          <Icons icone={<FaReact color="#8b5cf6" size={20} />} texto="React" />
          <Icons
            icone={<RiNextjsFill color="#8b5cf6" size={20} />}
            texto="NextJs"
          />
          <Icons
            icone={<RiTailwindCssFill color="#8b5cf6" size={20} />}
            texto="Tailwind"
          />
        </div>
      </div>
    </section>
  );
}
