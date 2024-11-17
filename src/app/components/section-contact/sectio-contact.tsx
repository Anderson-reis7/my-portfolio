import IconsContact from "./icons-contact";

export function SectionContact() {
  return (
    <section id="contact" className="flex flex-col items-center">
      <div className="text-lg">
        <h2 className="text-3xl my-3">Vamos <span className="text-violet-500">conversar?</span></h2>
      </div>
      <div>Meus contatos e rede social</div>
      <div className="mb-5">
        <IconsContact/>
      </div>
    </section>
  );
}
