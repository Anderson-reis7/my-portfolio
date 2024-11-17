import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Logo } from "./components/logo/logo";
import { SectionAbout } from "./components/section-About/section-about";
import { SectionContact } from "./components/section-contact/sectio-contact";
import SectionEducation from "./components/section-education/section-education";
import { SectionHome } from "./components/section-home/section-home";
import { SectionProject } from "./components/section-project/section-projetos";

export default function Home() {
  return (
    <div>
      <div className="pl-6 pr-3 gap-8 flex justify-center items-start flex-col">
        <header className="flex flex-col self-center items-center p-10">
          <Logo size={200} />
          <Header />
        </header>
        <main className="flex flex-col gap-8">
          <SectionHome />
          <SectionAbout />
          <SectionEducation/>
          <SectionProject />
          <SectionContact />
        </main>
      </div>
      <footer className="w-full mx-auto">
        <Footer />
      </footer>
    </div>
  );
}
