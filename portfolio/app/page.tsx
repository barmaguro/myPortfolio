import KeyVisual from "@/components/KeyVisual";
import About from "@/section/About";
import Concept from "@/section/Concept";
import Contact from "@/section/Contact";
import Service from "@/section/Service";
import Works from "@/section/Works";

export default function Page() {
  return (
    <main className="mx-auto">
      <KeyVisual />
      <section className="mx-auto max-w-lg px-4 py-16 md:py-24 lg:max-w-xl">
        <Concept />
      </section>
      <section
        id="service"
        className="content-visibility mx-auto max-w-lg scroll-mt-40 px-4 py-16 md:py-24 lg:max-w-5xl"
      >
        <Service />
      </section>
      <section
        id="works"
        className="content-visibility mx-auto max-w-lg scroll-mt-40 px-4 py-16 md:py-24 lg:max-w-5xl"
      >
        <Works />
      </section>
      <section
        id="about"
        className="mx-auto max-w-lg scroll-mt-40 px-4 py-16 md:py-24"
      >
        <About />
      </section>
      <section
        id="contact"
        className="content-visibility mx-auto mt-16 max-w-2xl scroll-mt-40 px-4 md:py-24"
      >
        <Contact />
      </section>
    </main>
  );
}
