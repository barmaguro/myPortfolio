import { CarouselItem } from "@/components/ui/carousel";
import Date from "app/_components/_Date";
import Image from "next/image";
import Link from "next/link";
import BadgeLine from "./BadgeLine";
import ButtonHover from "./ButtonHover";

export default async function WorksCard({ category }: any) {
  if (category.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <>
      {category.map((works, index) => {
        return (
          <CarouselItem
            key={index}
            className="grid grid-cols-1 lg:h-fit"
          >
            <div className="grid grid-rows-subgrid row-span-6">
              <h3 className="text-xl font-medium lg:text-xl">{works.title}</h3>
              <Date date={works.publishedAt ?? works.createdAt} />
              <div className="lg:flex gap-6">
                <div className="mt-5 h-auto w-full lg:w-[400px]">
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
              <Link href={`works/${works.id}`} className="mt-8 block w-fit mx-auto">
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
      ;
    </>
  );
}
