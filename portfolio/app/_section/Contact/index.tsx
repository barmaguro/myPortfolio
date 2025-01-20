import ContactForm from "@/components/features/contact/ContactForm";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";

export default function index() {
  return (
    <div>
      <SectionTitle title="contact" />
      <p className="mt-10 leading-loose tracking-widest md:text-lg lg:mt-20 lg:text-xl">
        お問い合わせは下記のフォームかXのDMでご連絡ください。
      </p>
      <div className="mt-8 flex items-center justify-center gap-4">
        <div className="w-6">
          <Image
            src="/images/icon_x-black.png"
            alt="xのロゴ"
            width={2400}
            height={2453}
          />
        </div>
        <p className="font-bold md:text-lg">@motodesign</p>
      </div>
      <ContactForm />
    </div>
  );
}
