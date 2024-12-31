import { Works } from "app/_components/_libs/microcms";
import BadgeLine from "app/_components/BadgeLine";
import ButtonLink from "app/_components/ButtonLink";
import Category from "app/_components/Category";
import Link from "next/link";
import Image from "next/image";
import Date from "app/_components/_Date";

type Props = {
  data: Works;
};

export default function Article({ data }: Props) {
  return (
    <>
      <div className="max-w-xl mx-auto mt-20 px-4">
        <div className="lg:w-fit lg:mx-auto">
          <div className="flex flex-col mt-5 lg:flex-row lg:gap-6 ">
            <div className="h-fit flex-shrink-0 ">
              <h3 className="text-xl font-medium lg:text-xl  ">{data.title}</h3>
              <Date date={data.publishedAt ?? data.createdAt} />
              <div className="mt-5 w-full h-[300px] lg:w-[400px]">
                {data.thumbnail ? (
                  <Image
                    className="w-full h-full object-cover"
                    src={data.thumbnail.url}
                    alt={data.title}
                    width={data.thumbnail.width}
                    height={data.thumbnail.height}
                  />
                ) : (
                  <p className="">サムネイルはありません。</p>
                )}
              </div>
            </div>
            <div className="">
              <p className="mt-5 text-lg uppercase lg:mt-16">tech stack</p>
              <div className="mt-5 ">
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
          </div>
          <p className="mt-2 text-lg text-gray-400">カテゴリー</p>
            <Link href={`/works/category/${data.category.id}`} className="bg-secondary text-white py-1 px-4 rounded-full mt-1 block w-fit">
              <Category category={data.category} />
            </Link>
          <p className="mt-5  text-sm flex-grow md:text-lg">{data.summary}</p>
        </div>
        <p className="w-fit mx-auto bg-secondary text-white py-3 px-8 rounded mt-10">
          <ButtonLink href="/works">戻る</ButtonLink>
        </p>
      </div>
    </>
  );
}
