import BadgeLine from "app/_components/BadgeLine";
import SectionTitle from "app/_components/SectionTitle";

const serviceContents = [
  {
    title: "サイト制作",
    text: "要件定義から、サーバーアップまで全ての工程を担当します。 WordPressやヘッドレスCMSを用いて、お客様が操作しやすいサイトを作成します。",
    skills: ["WordPress", "ヘッドレスCMS", "Next.js", "Nuxt.js", "GSAP"],
  },
  {
    title: "デザイン",
    text: "お客様の想いを形にします。 UI/UXに基づいてシンプルで操作性のいいデザインが得意です",
    skills: ["UI/UXデザイン", "figma", "AdobeXD", "canva"],
  },
  {
    title: "アフターサポート",
    text: "「サイトを作ったらそれでお仕舞い」ではなくそのあともサイトが有効に活用されるよう、MEO対策、SEO対策も行います。\nお客様がお持ちの「不」を見つけて業務改善のためのGAS,Notionの作成も受けたわまります。",
    skills: ["Notion作成", "GAS作成", "MEO対策", "SEO対策"],
  },
];

const ServiceSection = () => {
  return (
    <>
      <SectionTitle title="service" />
      <div className="flex flex-col gap-12 mt-10">
        {serviceContents.map((service, index) => (
          <div className="">
            <div className="" key={index}>
              <h3 className="text-xl uppercase place-self-center font-bold">
                {service.title}
              </h3>
              <div className="mt-8 pl-6">
                <BadgeLine
                  BadgeLineArray={[{ [service.title]: service.skills }]}
                />
              </div>
              <p className="whitespace-pre-line mt-8 px-4 text-sm  leading-loose md:text-base">
                {service.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServiceSection;
