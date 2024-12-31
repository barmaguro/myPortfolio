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
      <div className="lg:flex lg:flex-wrap lg:gap-6 mx-auto px-4 max-w-sm lg:max-w-5xl lg:justify-center">
        {works.map((works) => (
          <div className="mt-10 lg:mt-16 max-w-sm flex flex-col justify-center">
            <div className="lg:w-fit lg:mx-auto flex flex-col lg:flex-grow">
              <div className="flex flex-col lg:flex-grow">
                <div className="h-fit">
                  <h3 className="text-xl font-medium lg:text-xl">
                    {works.title}
                  </h3>
                  <div className="flex items-center justify-between mt-4">
                  <Date date={works.publishedAt ?? works.createdAt} />
                  <Link
                    href={`/works/category/${works.category.id}`}
                    className="bg-primary text-white py-1 px-4 text-sm rounded-full block w-fit"
                  >
                    <Category category={works.category} />
                  </Link>
                  </div>
                  <div className="mt-4 w-full h-[300px]">
                    {works.thumbnail ? (
                      <Image
                        className="w-full h-full object-cover"
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
                <div className="mt-4 lg:flex-grow">
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
              <p className="mt-5 text-sm lg:flex-grow">{works.summary}</p>
            </div>
            <Link
              href={`/works/${works.id}`}
              className="flex justify-center mt-4 font-bold bg-secondary text-sm text-white py-2 px-8 w-fit mx-auto rounded-full"
            >
              詳しくみる
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
