import IconsContact from "./icons-contact";

export function SectionContact() {
  return (
    <section id="contact" className="flex flex-col items-center ">
      <div className="text-lg">
        <h2 className="md:text-5xl text-3xl font-bold my-3">Vamos <span className="text-violet-500">conversar?</span></h2>
      </div>
      <div className="md:text-lg">Meus contatos e rede social</div>
      <div className="mb-5 md:mb-16">
        <IconsContact/>
      </div>
    </section>
  );
}
