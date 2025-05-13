import BadgeLine from "@/components/BadgeLine";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";

const serviceContents = [
  {
    title: "サイト制作",
    titleSub: "Coding",
    text: "要件定義から、サーバーアップまで全ての工程を担当します。目的に合わせたサイト設計で、ユーザーが使いやすく、魅力が伝わるウェブサイトを制作します。",
    skills: [
      "WordPress",
      "ヘッドレスCMS",
      "Next.js",
      "Nuxt.js",
      "GSAP",
      "html/css",
      "JavaScript",
    ],
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

const featureContents = [
  {
    txtImg: "/images/txt_feature_performance.svg",
    title: "高パフォーマンス",
    imgUrl: "/images/img_feature_img1.png",
    annotation: "※LightHouseのシークレットモードでの検証結果",
    alt: "LightHouseでtotalの結果が99点のスクリーンショット",
    detail:
      "目を引くデザインも大事ですが、ユーザーが使いやすく、ストレスがなく操作できるようにパフォーマンスにもこだわっています。",
  },
  {
    txtImg: "/images/txt_feature_Accessibility.svg",
    title: "アクセシビリティチェック",
    imgUrl: "/images/img_feature_img2.png",
    annotation: "※miCheckerで検証結果",
    alt: "miCheckerで良好な結果のスクリーンショット",
    detail:
      "誰にとってもサイトが使いやすくなるようにスクリーンリーダーのVODAを使用してアクセシビリティチェックも施します。",
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
              <span className="absolute -top-2/3 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 font-mono text-3xl font-bold tracking-widest text-primary">
                {service.titleSub}
              </span>
              <h3
                className={`place-self-center text-xl font-medium uppercase lg:text-2xl`}
              >
                {service.title}
              </h3>
            </div>
            <div className="mx-auto mt-5 w-full max-w-80">
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
      <div className="mx-auto mt-20 max-w-3xl">
        <h3 className="text-center font-bold before:block before:font-mono before:text-2xl before:content-['Features']">
          ２つの特徴
        </h3>
        {featureContents.map((feature, index) => (
          <div
            className="mx-auto mt-10 rounded-3xl bg-slate-100 p-8 shadow-md lg:flex lg:items-center lg:gap-10"
            key={`feature-${index}`}
          >
            <div className="mx-auto max-w-96 shrink-0">
              <span className="flex items-center gap-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"
                    stroke="#0C7575"
                    strokeWidth="4"
                  />
                </svg>
                <p className="pl-1 text-xl font-semibold text-secondary md:text-2xl">
                  {feature.title}
                </p>
              </span>
              <div className="mt-4 px-2">
                <Image
                  src={feature.imgUrl}
                  className="rounded-2xl"
                  width={500}
                  height={500}
                  alt={feature.alt}
                />
                <small className="">{feature.annotation}</small>
              </div>
            </div>
            <div className="mt-4 text-secondary lg:mt-0 lg:w-80">
              <p className="text-lg">{feature.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServiceSection;
