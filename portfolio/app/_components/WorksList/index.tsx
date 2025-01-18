import BadgeLine from "app/_components/BadgeLine";
import Date from "app/_components/_Date";
import { Works } from "app/_components/_libs/microcms";
import Image from "next/image";
import Link from "next/link";
import ButtonHover from "../ButtonHover";
import Category from "../Category";
import { getCategoryBgColor } from "../_libs/utils";

type Props = {
  works: Works[];
};

export default function WorksList({ works }: Props) {
  if (works.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <>
      <div className="mx-auto mt-10 max-w-md md:max-w-fit px-4 grid gap-y-10  md:grid-cols-2 md:gap-x-10 md:gap-y-10  lg:max-w-7xl lg:grid-cols-3">
        {works.map((works) => (
          <div className="mt-10 md:grid  md:grid-rows-subgrid md:row-span-6 md:gap-y-0 lg:mt-16">
            <h3 className="text-xl font-medium md:text-xl">{works.title}</h3>
            <div className="mt-4 flex items-center justify-between">
              <Date date={works.publishedAt ?? works.createdAt} />
              <Link
                href={`/works/category/${works.category.id}`}
                className={`block w-fit rounded-full ${getCategoryBgColor(works)} px-4 py-1 text-sm text-white`}
              >
                <Category category={works.category} />
              </Link>
            </div>
            <div className="mt-4 h-auto w-full">
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

            <p className="mt-5 text-sm md:text-base">{works.summary}</p>

            <Link href={`/works/${works.id}`} className="mt-10 block">
              <ButtonHover
                bgColor={"bg-secondary"}
                textColor={"hover:text-secondary"}
                borderColor={"hover:border-secondary"}
                margin={"mx-auto"}
              >
                詳しくみる
              </ButtonHover>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
