import Date from "@/components/_Date";
import BadgeLine from "@/components/BadgeLine";
import ButtonHover from "@/components/ButtonHover";
import { CarouselItem } from "@/components/ui/carousel";
import { Works } from "@/libs/microcms";
import Image from "next/image";
import Link from "next/link";

type Props = {
  category: Works[];
};

export default async function WorksCard({ category }: Props) {
  if (category.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <>
      {category.map((works, index) => {
        return (
          <CarouselItem key={index} className="grid grid-cols-1 lg:h-fit">
            <div className="row-span-6 grid grid-rows-subgrid">
              <h3 className="text-xl font-medium lg:text-xl">{works.title}</h3>
              <Date date={works.publishedAt ?? works.createdAt} />
              <div className="gap-6 lg:grid lg:grid-cols-[2fr,1fr]">
                <div className="mt-5 h-auto w-full">
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
                <div className="mt-4">
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
              <p className="mt-5 text-base md:text-lg">{works.summary}</p>
              <Link
                aria-label={`${works.title}の詳細ページに移動する`}
                href={`works/${works.id}`}
                className="mx-auto mt-8 block w-fit"
              >
                <ButtonHover
                  bgColor={"bg-secondary"}
                  textColor={"hover:text-secondary"}
                  borderColor={"hover:border-secondary"}
                >
                  詳しくみる
                </ButtonHover>
              </Link>
            </div>
          </CarouselItem>
        );
      })}
    </>
  );
}
