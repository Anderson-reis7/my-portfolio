import { Icons } from "../icons/icons";

export function SectionHome() {
  return (
    <section>
      <div className="flex flex-col gap-8">
        <div className="flex gap-2">
          <span>Prazer, me chamo</span>
          <span className="text-violet-500">Anderson Reis.</span>
        </div>
        <div className="">
          <h1 className="text-5xl">Desenvolvedor Front-end Júnior</h1>
        </div>
        <div>
          <button className="bg-violet-500 rounded-md">Download CV</button>
        </div>
        <div>
          <Icons />
        </div>
      </div>
    </section>
  );
}
