import Image from "next/image";
import BadgeLine from "./BadgeLine";
import SectionTitle from "./SectionTitle";

const serviceContets = [
  {
    title: "design",
    image: "/images/img_service01.png",
    text: "シンプルなデザインが得意です。\nそれでいてわかりやすく、目的に向かって迷わないデザインと設計を心がけています。",
    skills: ["UIデザイン", "figma", "adobeXD", "canva"],
  },
  {
    title: "coding",
    image: "/images/img_service02.png",
    text: "保守、管理のしやすい設計でコーディングします。\n高パフォーマンスで見る人がイライラしないようにテストも行います。",
    skills: ["Next.js", "Gsap", "WordPress"],
  },
  {
    title: "direction",
    image: "/images/img_service03.png",
    text: "要件定義から参画して、それに最適な仕組みを構築します。\nだれが参画してもスムーズに参加できるように心がけています",
    skills: ["Notion", "slack", "GoogleMeet"],
  },
];

const ServiceSection = () => {
  return (
    <>
      <section id="service" className="mt-5">
        <SectionTitle title="service" />
        <div className="flex flex-col gap-10 mt-10">
          {serviceContets.map((service, index) => (
            <>
              <div className="grid grid-rows-auto " key={index}>
                <h3 className="text-xl uppercase place-self-center">
                  {service.title}
                </h3>
                <div className="grid grid-cols-2">
                  <div className="">
                    <Image
                      src={service.image}
                      alt=""
                      className="h-full w-full object-cover"
                      width={320}
                      height={250}
                    />
                  </div>
                  <div className="mt-5 pl-6">
                    <BadgeLine
                      BadgeLineArray={[{ [service.title]: service.skills }]}
                    />
                  </div>
                </div>
                <p className="whitespace-pre-line mt-5 px-4 text-xs leading-loose">
                  {service.text}
                </p>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
};

export default ServiceSection;
