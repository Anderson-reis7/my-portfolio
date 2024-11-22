import ImgProject from "../img-project/img-project";

export function SectionProject() {
  return (
    <section className="font-ligth">
      <div className="text-lg md:text-xl">
        <h2 className="text-violet-500 md:mb-10">Meus Projetos de estudo e Pratica:</h2>
      </div>
      <div>
        <ImgProject/>
      </div>
    </section>
  );
}
