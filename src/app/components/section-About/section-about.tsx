import minhaImagem from "@/app/components/assents/anderson.jpg";
import Image from "next/image";

export function SectionAbout() {
  return (
    <section className="flex flex-col md:max-lg:flex-col lg:max-xl:flex-col md:flex-row gap-8 items-center">
      <div id="about" className="lg:max-xl:w-[400px] ">
        <Image
          className="md:w-[400px]  relative rounded-lg border-solid border-2 border-[#0A0F26]"
          src={minhaImagem}
          alt="Next.js logo"
          objectFit="cover"
          
          
        />
      </div>
      <div className=" md:flex md:w-full ">
        <p className=" md:flex-wrap text-lg md:text-2xl text-neutral-50 font-light">
          Sempre fui fascinado por tecnologia, desde pequeno já explorava
          computadores e celulares, o que despertou minha paixão pela área. Após
          cursar cinco semestres de Licenciatura em Matemática, percebi que não
          era o que queria e, em 2022, comecei minha jornada na área de TI. Me
          formei em Análise e Desenvolvimento de Sistemas em 2024 e escolhi me
          especializar em front-end, trabalhando com JavaScript, TypeScript,
          React, Next.js e Tailwind CSS. Estou sempre me desafiando e buscando
          evoluir, pronto para contribuir e fazer a diferença na sua empresa! 😉
        </p>
      </div>
    </section>
  );
}
