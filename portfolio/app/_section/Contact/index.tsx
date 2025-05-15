import ButtonHover from "@/_components/ButtonHover";
import ContactForm from "@/components/features/contact/ContactForm";
import SectionTitle from "@/components/SectionTitle";

export default function index() {
  return (
    <div>
      <SectionTitle title="contact" />
      <p className="mt-10 leading-loose tracking-widest md:text-lg lg:mt-20 lg:text-xl">
        お問い合わせは下記のフォームからご連絡ください。<br />
        XのDMからでも承ります。
      </p>
      <ButtonHover
        bgColor={"bg-secondary"}
        textColor={"hover:text-secondary"}
        borderColor={"hover:border-secondary"}
        margin={"mt-8 mx-auto"}
      >
        <a
          href="https://x.com/motodesign_web"
          className="flex items-center justify-center gap-4 "
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 1200 1227"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
              fill="currentColor"
            />
          </svg>
          <p className="text-lg">motodesign_web</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </a>
      </ButtonHover>
      <ContactForm />
    </div>
  );
}
