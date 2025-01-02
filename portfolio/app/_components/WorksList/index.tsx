import BadgeLine from "app/_components/BadgeLine";
import Date from "app/_components/_Date";
import { Works } from "app/_components/_libs/microcms";
import Image from "next/image";
import Link from "next/link";
import Category from "../Category";

type Props = {
  works: Works[];
};

export default function WorksList({ works }: Props) {
  if (works.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <>
      <div className="mx-auto mt-20 max-w-sm px-6 md:flex md:max-w-4xl  md:gap-10 lg:max-w-7xl md:flex-wrap md:justify-center">
        {works.map((works) => (
          <div className="mt-10 flex max-w-sm flex-col justify-center lg:mt-16">
            <div className="flex flex-col md:mx-auto md:w-fit md:grow">
              <div className="flex flex-col md:grow">
                <div className="h-fit">
                  <h3 className="text-xl font-medium md:text-xl">
                    {works.title}
                  </h3>
                  <div className="mt-4 flex items-center justify-between">
                    <Date date={works.publishedAt ?? works.createdAt} />
                    <Link
                      href={`/works/category/${works.category.id}`}
                      className="block w-fit rounded-full bg-primary px-4 py-1 text-sm text-white"
                    >
                      <Category category={works.category} />
                    </Link>
                  </div>
                  <div className="mt-4 h-[300px] w-full">
                    {works.thumbnail ? (
                      <Image
                        className="size-full object-cover"
                        src={works.thumbnail.url}
                        alt={works.title}
                        width={works.thumbnail.width}
                        height={works.thumbnail.height}
                      />
                    ) : (
                      <p className="">サムネイルはありません。</p>
                    )}
                  </div>
                </div>
                <div className="mt-4 md:grow">
                  <BadgeLine
                    BadgeLineArray={[
                      {
                        [works.title]: works["badgeList"].map(
                          (array) => array.badge
                        ),
                      },
                    ]}
                  />
                </div>
              </div>
              <p className="mt-5 text-sm md:grow">{works.summary}</p>
            </div>
            <Link
              href={`/works/${works.id}`}
              className="mx-auto mt-4 flex w-fit justify-center rounded-full bg-secondary px-8 py-2 text-sm font-bold text-white"
            >
              詳しくみる
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
