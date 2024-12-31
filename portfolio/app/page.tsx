import KeyVisual from "app/_components/KeyVisual";
import About from "app/_section/About";
import Contact from "app/_section/Contact";
import Service from "app/_section/Service";
import Works from "app/_section/Works";
import Concept from "./_section/Concept";
// rafce アロー関数コンポーネントの出し方

type Props = {
  params: {
    id: string;
  };
};

export default async function Page() {
  return (
    <div className="mx-auto">
      <KeyVisual />
      <section className=" px-4 lg:max-w-xl mx-auto">
        <Concept />
      </section>
      <section
        id="service"
        className=" px-4 mt-16 md:mt-32 max-w-md mx-auto"
      >
        <Service />
      </section>
      <section
        id="works"
        className=" px-4 mt-16 md:mt-32 max-w-md lg:max-w-5xl mx-auto"
      >
        <Works />
      </section>
      <section
        id="about"
        className=" px-4 mt-16 md:mt-32 max-w-md mx-auto"
      >
        <About />
      </section>
      <section
        id="contact"
        className=" px-4 mt-16 md:mt-32 max-w-lg mx-auto"
      >
        <Contact />
      </section>
    </div>
  );
}
