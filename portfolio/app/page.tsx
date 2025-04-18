import KeyVisual from "@/components/KeyVisual";
import About from "@/section/About";
import Contact from "@/section/Contact";
import Service from "@/section/Service";
import Works from "@/section/Works";
import Concept from "@/section/Concept";

export default function Page() {
  return (
    <div className="mx-auto">
      <KeyVisual />
      <section className="mx-auto max-w-lg px-4 lg:max-w-xl">
        <Concept />
      </section>
      <section
        id="service"
        className="mx-auto mt-16 max-w-lg px-4 md:mt-32 lg:max-w-5xl content-visibility"
      >
        <Service />
      </section>
      <section
        id="works"
        className="mx-auto mt-16 max-w-lg px-4 md:mt-32 lg:max-w-5xl"
      >
        <Works />
      </section>
      <section id="about" className="mx-auto mt-16 max-w-lg px-4 md:mt-32 content-visibility">
        <About />
      </section>
      <section id="contact" className="mx-auto mt-16 max-w-2xl px-4 md:mt-32 content-visibility">
        <Contact />
      </section>
    </div>
  );
}
