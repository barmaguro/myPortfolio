import SectionTitle from "app/_components/SectionTitle";
import Image from "next/image";

const Career = [
  "株式会社KURANDで13店舗ある飲食部門の副事業責任者になる。",
  "web制作と飲食コンサルタントのフリーランスへ転向",
  "プログラミングスクールの講師を務める傍ら、フリーランスとして活動する。",
];

export default function index() {
  return (
    <>
      <SectionTitle title="About" />
      <div className="w-40 h-40 mx-auto mt-12 relative">
        <div className="absolute top-1/2 -translate-y-[43%] w-full text-[0] leading-[0] align-bottom -z-10  global_overflow-view">
          <span className="h-[25vh] bg-primary block global_clip-top translate-y-px"></span>
          <span className=" bg-primary block global_clip-bottom h-[25vh] "></span>
        </div>
        <Image
          src="/images/icon_main.jpg"
          className="w-full h-full object-cover rounded-full"
          alt="江田企毅のアイコン"
          width={1800}
          height={1800}
        />
      </div>
      <div className="mx-auto mt-20 max-w-[400px] tracking-widest">
        <span className="mx-auto w-fit block">
          <p className="font-medium text-lg md:text-xl">Eda Motoki</p>
          <p className="font-medium text-xl md:text-2xl">江田 企毅</p>
        </span>

        <p className="tracking-widest mt-10 w-11/12 mx-auto leading-loose md:text-lg">
          東京にてフリーランスのフロントエンドエンジニアをしています。
          <br />
          お酒が好きすぎて「sake diploma」という資格を持っています。
        </p>
        <div className="mt-10">
          {Career.map((career, index) => (
            <div
              className="flex justify-between gap-4 [&:not(:first-child)]:mt-6"
              key={index}
            >
              <span className="flex items-center justify-center gap-2">
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
                <span className="w-6 h-px bg-primary block"></span>
              </span>
              <p className="text-sm tracking-[0.24em] leading-loose  md:text-base">
                {career}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 md:mt-16">
          <h3 className="font-medium text-lg py-4 pl-2 border-b-1 border-b-border text-center md:text-2xl ">
            MotoDesign
          </h3>
          <div className="mt-10">
            <span className="flex items-center gap-2 ">
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
              <p className="md:text-lg">事業内容</p>
            </span>
            <p className="text-sm mt-4 md:text-base leading-loose tracking-[0.2em] ">
              Web制作におけるディレクション/デザイン/コーディング/CMS導入/MEO対策
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
