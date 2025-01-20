import Image from "next/image";
import Link from "next/link";
import { Works } from "../_libs/microcms";
import BackButton from "../BackButton";
import BadgeLine from "../BadgeLine";

type Props = {
  data: Works;
};

export default function Article({ data }: Props) {
  return (
    <>
      <div className="mx-auto mt-20 max-w-xl px-4 lg:mt-40 lg:max-w-5xl">
        <div className="lg:max-w-2xl lg:pl-14">
          <h1 className="mt-5 pl-2 text-3xl font-medium">{data.title}</h1>
          <Link
            href={`/works/category/${data.category.id}`}
            className="mt-5 block w-fit rounded-full bg-primary px-4 py-1 text-sm text-white"
          >
            {data.category.name}
          </Link>
        </div>
        <div className="mt-5 lg:grid lg:grid-cols-[2fr,1fr] lg:gap-10">
          <div className="mt-5">
            <Image
              src={data.thumbnail.url}
              alt={data.title}
              width={data.thumbnail.width}
              height={data.thumbnail.height}
              className="size-full object-cover"
            />
          </div>
          <div className="">
            <div className="mt-5">
              <h2 className="relative pl-3 text-lg font-medium before:absolute before:left-0 before:top-1/2 before:h-6 before:w-1 before:-translate-y-1/2 before:bg-primary">
                概要
              </h2>
              <p className="mt-2 lg:text-xl">{data.summary}</p>
            </div>
            <div className="mt-5 lg:mt-8">
              <h2 className="relative pl-3 text-lg font-medium before:absolute before:left-0 before:top-1/2 before:h-6 before:w-1 before:-translate-y-1/2 before:bg-primary">
                主な使用技術
              </h2>
              <div className="mt-4">
                <BadgeLine
                  BadgeLineArray={[
                    {
                      [data.title]: data["badgeList"].map(
                        (array) => array.badge
                      ),
                    },
                  ]}
                />
              </div>
            </div>
            <div className="mt-5 lg:mt-8">
              <h2 className="relative pl-3 text-lg font-medium before:absolute before:left-0 before:top-1/2 before:h-6 before:w-1 before:-translate-y-1/2 before:bg-primary">
                担当範囲
              </h2>
              <p className="mt-2 lg:text-xl">{data.scope}</p>
            </div>
            {data.linkUrl ? (
              <Link
                href={data.linkUrl}
                className="mx-auto mt-10 flex w-fit justify-center rounded bg-secondary px-8 py-3 font-bold text-white"
              >
                サイトに移動する
              </Link>
            ) : (
              <></>
            )}
          </div>
        </div>

        <div className="global_overflow-view relative w-full align-bottom text-[0] leading-[0]">
          <p className="position-center absolute z-10 w-fit text-2xl font-medium tracking-widest text-white lg:text-4xl">
            Requirements
            <span className="ml-auto mt-1 block w-fit text-sm lg:text-lg">
              要件定義
            </span>
          </p>
          <span className="global_clip-top block h-[25vh] translate-y-px bg-primary"></span>
          <span className="global_clip-bottom block h-[25vh] bg-primary"></span>
        </div>
        <section className="mx-auto max-w-3xl">
          <div className="mt-5 lg:mt-20">
            <h2 className="relative pl-3 text-2xl font-medium before:absolute before:left-0 before:top-1/2 before:h-6 before:w-1 before:-translate-y-1/2 before:bg-primary">
              制作目的
            </h2>
            <p
              className="mt-2 lg:text-xl"
              dangerouslySetInnerHTML={{
                __html: data.purpose,
              }}
            ></p>
          </div>
          <div className="mt-5 lg:mt-20">
            <h2 className="relative pl-3 text-2xl font-medium before:absolute before:left-0 before:top-1/2 before:h-6 before:w-1 before:-translate-y-1/2 before:bg-primary">
              ターゲット
            </h2>
            <p
              className="mt-2 lg:text-xl"
              dangerouslySetInnerHTML={{
                __html: data.target,
              }}
            ></p>
          </div>
          <div className="mt-5 lg:mt-20">
            <h2 className="relative pl-3 text-2xl font-medium before:absolute before:left-0 before:top-1/2 before:h-6 before:w-1 before:-translate-y-1/2 before:bg-primary">
              そのほか
            </h2>
            <p
              className="mt-2 lg:text-xl"
              dangerouslySetInnerHTML={{
                __html: data.content,
              }}
            ></p>
          </div>
        </section>
      </div>
      <div className="mt-10 lg:mt-20">
        <BackButton />
      </div>
    </>
  );
}
