import ContactForm from "@/components/features/contact/ContactForm";
import SectionTitle from "@/components/SectionTitle";

export default function index() {
  return (
    <div>
      <SectionTitle title="contact" />
      <p className="mt-10 leading-loose tracking-widest md:text-lg lg:mt-20 lg:text-xl">
        お問い合わせは下記のフォームからご連絡ください。
      </p>
      <ContactForm />
    </div>
  );
}
