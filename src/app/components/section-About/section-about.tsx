import Image from "next/image";

export function SectionAbout() {
  return (
    <section className="flex flex-col gap-8 items-center">
      <div>
        <Image
          className=""
          src="/anderson.jpg"
          alt="Next.js logo"
          width={160}
          height={28}
          priority
        />
      </div>
      <div className="text-justify">
        <p className=" text-lg font-light">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt,
          aut beatae, laborum quo quidem debitis eaque, facilis iusto explicabo
          dignissimos quae? Dolorum nulla, maiores velit asperiores facilis aut
          tenetur explicabo?
        </p>
      </div>
    </section>
  );
}
