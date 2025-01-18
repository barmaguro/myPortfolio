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
      <div className="relative mx-auto mt-10 lg:mt-20 size-40 lg:size-48">
        <div className="global_overflow-view absolute top-1/2 -z-10 w-full -translate-y-[43%] align-bottom text-[0]  leading-[0]">
          <span className="global_clip-top block h-[25vh] translate-y-px bg-primary"></span>
          <span className=" global_clip-bottom block h-[25vh] bg-primary "></span>
        </div>
        <Image
          src="/images/icon_main.jpg"
          className="size-full rounded-full object-cover"
          alt="江田企毅の写真"
          width={1800}
          height={1800}
        />
      </div>
      <div className="mx-auto mt-20 tracking-widest">
        <span className="mx-auto block w-fit">
          <p className="text-lg font-medium md:text-xl">Eda Motoki</p>
          <p className="text-xl font-medium md:text-2xl">江田 企毅</p>
        </span>

        <p className="mx-auto mt-10 px-4 leading-loose tracking-widest md:text-lg lg:text-xl/8">
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
                <span className="block h-px w-6 bg-primary"></span>
              </span>
              <p className="text-sm leading-loose tracking-[0.24em]  md:text-base lg:text-lg/8">
                {career}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 md:mt-16">
          <h3 className="border-b-1 border-b-border py-4 pl-2 text-center text-lg font-medium md:text-2xl  ">
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
              <p className="md:text-lg lg:text-xl">事業内容</p>
            </span>
            <p className="mt-4 text-sm leading-loose tracking-[0.2em] md:text-base lg:text-lg">
              Web制作におけるディレクション/デザイン/コーディング/CMS導入/MEO対策
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
