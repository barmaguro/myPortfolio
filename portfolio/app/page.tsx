import KeyVisual from "app/_components/KeyVisual";
import Service from "app/_section/Service";
import Works from "app/_section/Works";
import About from "app/_section/About";
import Contact from "app/_section/Contact";
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
      <section id="service" className="container px-4 mt-16">
        <Service />
      </section>
      <section id="works" className="container px-4 mt-16">
        <Works />
      </section>
      <section id="about" className="container px-4 mt-16">
        <About />
      </section>
      <section id="contact" className="container px-4 mt-16 max-w-lg mx-auto">
        <Contact />
      </section>
    </div>
  );
}
