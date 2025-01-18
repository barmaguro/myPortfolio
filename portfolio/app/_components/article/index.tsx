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
      <div className="mx-auto mt-20 max-w-xl px-4 lg:max-w-5xl">
        <Link
          href={`/works/category/${data.category.id}`}
          className="block w-fit rounded-full bg-primary px-4 py-1 text-sm text-white"
        >
          {data.category.name}
        </Link>
        <h1 className="mt-5 pl-2 text-xl">{data.title}</h1>
        <div className="lg:grid lg:grid-cols-2 lg:gap-10">
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
              <h2 className="mt-2 text-xl">概要</h2>
              <p className="">{data.summary}</p>
            </div>
            <div className="mt-5">
              <h2 className="mt-2 text-xl">担当範囲</h2>
              <p className="">{data.scope}</p>
            </div>
            <div className="mt-5">
              <h2 className="mt-2 text-xl">主な使用技術</h2>
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
            {data.linkUrl ? (
              <Link
                href={data.linkUrl}
                className="mx-auto mt-10 flex w-fit justify-center rounded bg-secondary px-8 py-3 font-bold text-white"
              >
                サイトに移動する
              </Link>
            ) : (
              <p className="">現在こちらは非公開です。</p>
            )}
          </div>
        </div>

        <div className="global_overflow-view relative w-full align-bottom text-[0] leading-[0]">
          <p className="position-center absolute z-10 w-fit text-2xl font-medium tracking-widest text-white">
            Requirements
            <span className="ml-auto mt-1 block w-fit text-sm">要件定義</span>
          </p>
          <span className="global_clip-top block h-[25vh] translate-y-px bg-primary"></span>
          <span className="global_clip-bottom block h-[25vh] bg-primary"></span>
        </div>
        <section className="mx-auto max-w-lg">
          <div className="mt-5">
            <h2 className="mt-2 text-xl">制作目的</h2>
            {data.purpose}
          </div>
          <div className="mt-5">
            <h2 className="mt-2 text-xl">ターゲット</h2>
            {data.target}
          </div>
          <div className="mt-5">
            <h2 className="mt-2 text-xl">そのほか</h2>
            {data.content}
          </div>
        </section>
      </div>
      <div className="mt-10">
        <BackButton />
      </div>
    </>
  );
}
