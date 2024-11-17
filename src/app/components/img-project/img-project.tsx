import Image from "next/image";
import projectLink from "@/app/components/assents/project-link.webp";
import Link from "next/link";
import elevador from "@/app/components/assents/elevador.webp";
import cifra from "@/app/components/assents/cifra.webp";
import conversor from "@/app/components/assents/conversor.webp";
import Tooltip from "../tooltip/tooltip";

export default function ImgProject() {
  return (
    <div className="flex flex-col gap-7">
      <span className="mt-5">Project Links:</span>
      <div>
        <Tooltip tooltipText="Project-Links: pagina static para introdução de links para redes sociais e contato">
          <Link
            href={"https://github.com/Anderson-reis7/project-links"}
            target="_balnk"
          >
            <Image
              className="w-full rounded-lg border-solid border-2 border-[#0A0F26]"
              src={projectLink}
              alt="Next.js logo"
            /> 
          </Link>
        </Tooltip>
      </div>
      <span className="mt-5">Project-Elevador:</span>
      <div>
        <Tooltip tooltipText="Project-Elevador: Este é um projeto de simulação de um elevador interativo desenvolvido com HTML, CSS e JavaScript. O elevador se move entre diferentes andares, exibindo o status de Subindo ou Descendo no mostrador, e para automaticamente no andar desejado">
          <Link
            href={"https://github.com/Anderson-reis7/projet-elevador"}
            target="_balnk"
          >
            <Image
              className="w-full rounded-lg border-solid border-2 border-[#0A0F26]"
              src={elevador}
              alt="Next.js logo"
            />
          </Link>
        </Tooltip>
      </div>
      <span className="mt-5">Cifra de César:</span>
      <div>
        <Tooltip
          tooltipText="Cifra de César: 
Este projeto é uma aplicação web que implementa a Cifra de César, um dos mais antigos e simples algoritmos de criptografia. O usuário pode inserir uma mensagem e selecionar um deslocamento no alfabeto para criptografá-la."
        >
          <Link
            href={"https://github.com/Anderson-reis7/cifra-de-cesar"}
            target="_balnk"
          >
            <Image
              className="w-full rounded-lg border-solid border-2 border-[#0A0F26]"
              src={cifra}
              alt="Next.js logo"
            />
          </Link>
        </Tooltip>
      </div>
      <span className="mt-5">Conversor de Moedas:</span>
      <div>
        <Tooltip
          tooltipText="Conversor de Moedas: 
Este é um simples conversor de moedas que permite a conversão de valores em reais (BRL) para dólar (USD), euro (EUR), libra (GBP) e bitcoin (BTC).
Como usar:
Abra o arquivo index.html no seu navegador.
Selecione a moeda desejada no campo de seleção.
Insira o valor em reais que você deseja converter."
        >
          <Link
            href={"https://github.com/Anderson-reis7/conversor-de-dinheiro"}
            target="_balnk"
          >
            <Image
              className="w-full rounded-lg border-solid border-2 border-[#0A0F26]"
              src={conversor}
              alt="Next.js logo"
            />
          </Link>
        </Tooltip>
      </div>
    </div>
  );
}
