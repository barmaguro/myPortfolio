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

export default function Page() {
  return (
    <div className="mx-auto">
      <KeyVisual />
      <section className=" mx-auto max-w-lg px-4 lg:max-w-xl">
        <Concept />
      </section>
      <section
        id="service"
        className=" mx-auto mt-16 max-w-lg px-4 md:mt-32  lg:max-w-6xl"
      >
        <Service />
      </section>
      <section
        id="works"
        className=" mx-auto mt-16 max-w-lg px-4 md:mt-32 lg:max-w-5xl"
      >
        <Works />
      </section>
      <section
        id="about"
        className=" mx-auto mt-16 max-w-lg px-4 md:mt-32"
      >
        <About />
      </section>
      <section
        id="contact"
        className=" mx-auto mt-16 max-w-2xl px-4 md:mt-32"
      >
        <Contact />
      </section>
    </div>
  );
}
