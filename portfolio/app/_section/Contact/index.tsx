import ContactForm from "app/_components/ContactForm";
import SectionTitle from "app/_components/SectionTitle";
import Image from "next/image";

export default function index() {
  return (
    <div>
      <SectionTitle title="contact" />
      <p className="text-sm tracking-widest leading-loose mt-10">
        お問い合わせは下記のフォームかXのDMでご連絡ください。
      </p>
      <div className="flex items-center justify-center gap-4 mt-8">
        <div className="w-6">
          <Image
            src="/images/icon_x-black.png"
            alt="xのロゴ"
            width={2400}
            height={2453}
          />
        </div>
       <p className=" font-bold">@motodesign</p>
      </div>
      <ContactForm />
    </div>
  );
}
