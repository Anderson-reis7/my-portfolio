import Image from "next/image";

export function SectionAbout() {
  return (
    <section className="flex flex-col gap-8 items-center">
      <div id="about">
        <Image
          className="rounded-lg border-solid border-2 border-[#0A0F26]"
          src="/anderson.jpg"
          alt="Next.js logo"
          width={300}
          height={300}
          priority
        />
      </div>
      <div className="text-justify">
        <p className=" text-lg font-light">
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
