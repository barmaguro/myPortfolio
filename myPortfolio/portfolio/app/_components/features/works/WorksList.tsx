import Date from "@/components/_Date";
import { Works } from "@/libs/microcms";
import BadgeLine from "@/components/BadgeLine";
import Image from "next/image";
import Link from "next/link";
import Categories from "@/components/Category";
import { getCategoryBgColor } from "@/libs/utils";
import ButtonHover from "@/components/ButtonHover";

type Props = {
  works: Works[];
};

export default function WorksList({ works }: Props) {
  if (works.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <>
      <div className="mx-auto mt-10 grid max-w-md gap-y-10 px-4 md:max-w-fit md:grid-cols-2 md:gap-10 lg:max-w-7xl lg:grid-cols-3">
        {works.map((works, index) => (
          <div
            key={index}
            className="mt-10 md:row-span-6 md:grid md:grid-rows-subgrid md:gap-y-0 lg:mt-16"
          >
            <h3 className="text-xl font-medium md:text-xl">{works.title}</h3>
            <div className="mt-4 flex items-center justify-between">
              <Date date={works.publishedAt ?? works.createdAt} />
              <Link
                aria-label={`${works.category}ページに移動する`}
                href={`/works/category/${works.category.id}`}
                className={`block w-fit rounded-full ${getCategoryBgColor(works)} px-4 py-1 text-sm text-white`}
              >
                <Categories category={works.category} />
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

            <Link href={`/works/${works.id}`} aria-label={`${works.title}の詳細ページに移動する`} className="mt-10 block">
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
