import BadgeLine from "app/_components/BadgeLine";
import SectionTitle from "app/_components/SectionTitle";
import { url } from "inspector";
import Image from "next/image";

const serviceContents = [
  {
    title: "サイト制作",
    titleSub:"Cording",
    text: "要件定義から、サーバーアップまで全ての工程を担当します。 WordPressやヘッドレスCMSを用いて、お客様が操作しやすいサイトを作成します。",
    skills: ["WordPress", "ヘッドレスCMS", "Next.js", "Nuxt.js", "GSAP"],
    url:"/images/img_service01.png",
  },
  {
    title: "デザイン",
    titleSub:"Design",
    text: "お客様の想いを形にします。 UI/UXに基づいてシンプルで操作性のいいデザインが得意です",
    skills: ["UI/UXデザイン", "figma", "AdobeXD", "canva"],
    url:"/images/img_service02.png",
  },
  {
    title: "サポート",
    titleSub:"Support",
    text: "「サイトを作ったらそれでお仕舞い」ではなくそのあともサイトが有効に活用されるよう、MEO対策、SEO対策も行います。\nお客様がお持ちの「不」を見つけて業務改善のためのGAS,Notionの作成も受けたわまります。",
    skills: ["Notion作成", "GAS作成", "MEO対策", "SEO対策"],
    url:"/images/img_service03.png",
  },
];

const ServiceSection = () => {
  return (
    <>
      <SectionTitle title="service" />
      <div className="mt-20 flex flex-col items-center gap-20 lg:flex-row lg:items-start lg:justify-center">
        {serviceContents.map((service, index) => (
            <div className="lg:w-72" key={index}>
              <div className="relative">
                <span className="absolute -top-2/3 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 text-3xl font-bold tracking-widest text-primary opacity-50">{service.titleSub}</span>
                <h3 className={`place-self-center text-xl font-medium  uppercase `}>
                  {service.title}
                </h3> 
              </div>
              <div className="mt-5 w-full">
                    <Image
                                  src={service.url}
                                  alt={`${service.title}の画像`}
                                  width={480}
                                  height={300}
                                  className="size-full object-cover"
                                />
              </div>
              <div className="mt-8 pl-6">
                <BadgeLine
                  BadgeLineArray={[{ [service.title]: service.skills }]}
                />
              </div>
              <p className="mt-4 whitespace-pre-line px-4 leading-loose md:text-base">
                {service.text}
              </p>
            </div>
        ))}
      </div>
    </>
  );
};

export default ServiceSection;
