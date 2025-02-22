import BadgeLine from "@/components/BadgeLine";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";

const serviceContents = [
  {
    title: "サイト制作",
    titleSub: "Cording",
    text: "要件定義から、サーバーアップまで全ての工程を担当します。目的に合わせたサイト設計で、ユーザーが使いやすく、魅力が伝わるウェブサイトを制作します。",
    skills: ["WordPress", "ヘッドレスCMS", "Next.js", "Nuxt.js", "GSAP", "html/css", "JavaScript"],
    url: "/images/img_service01.png",
  },
  {
    title: "デザイン",
    titleSub: "Design",
    text: "おしゃれなだけでなく、ビジネス課題を解決するためのデザインをご提案します。 シンプルで操作性のいいUI/UXデザインが得意です",
    skills: ["UI/UXデザイン", "figma", "AdobeXD", "canva"],
    url: "/images/img_service02.png",
  },
  {
    title: "サポート",
    titleSub: "Support",
    text: "お客様がお持ちの「不」を見つけて業務改善のためのGAS,Notionでのマニュアル,サポートツールの作成も受けたわまります。",
    skills: ["Notion作成", "GAS作成", "MEO対策", "SEO対策"],
    url: "/images/img_service03.png",
  },
];

const ServiceSection = () => {
  return (
    <>
      <SectionTitle title="service" />
      <div className="mt-20 grid gap-20 lg:mt-40 lg:grid-cols-3 lg:gap-10">
        {serviceContents.map((service, index) => (
          <div
            className="lg:row-span-4 lg:grid lg:grid-rows-subgrid lg:gap-0"
            key={index}
          >
            <div className="relative">
              <span className="absolute -top-2/3 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 text-3xl font-bold tracking-widest text-primary opacity-50">
                {service.titleSub}
              </span>
              <h3
                className={`place-self-center text-xl font-medium uppercase lg:text-2xl`}
              >
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
            <p className="mt-4 whitespace-pre-line px-4 leading-loose md:text-base lg:text-lg/8">
              {service.text}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServiceSection;
