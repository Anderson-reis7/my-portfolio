import { Logo } from "../logo/logo";

export function Header() {
  return (
    <div className="flex md:w-full flex-col md:flex-row md:px-0 md:justify-between items-center p-10">
      <div className="flex justify-center items-center">
        <Logo size={200} />
      </div>
      <div className="hidden md:max-lg:hidden md:flex md:gap-10 text-xl font-bold">
        <a className="navAnimation" href="#home">Inicio</a>
        <a className="navAnimation" href="#about">Sobre</a>
        <a className="navAnimation" href="#education">Educação</a>
        <a className="navAnimation" href="#contact">Contato</a>
      </div>
    </div>
  );
}
