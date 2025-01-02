import { CarouselItem } from "@/components/ui/carousel";
import Date from "app/_components/_Date";
import Image from "next/image";
import Link from "next/link";
import BadgeLine from "./BadgeLine";

export default async function WorksCard({ category }: any) {
  if (category.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <>
      {category.map((works, index) => {
        return (
          <CarouselItem key={index} className="h-[750px] lg:h-fit">
            <div className="lg:mx-auto lg:w-fit">

                <div className="h-fit shrink-0 ">
                  <h3 className="text-xl font-medium lg:text-xl  ">
                         {works.title}
                  </h3>
                  <Date date={works.publishedAt ?? works.createdAt} />
                <div className="mt-5 flex flex-col lg:flex-row lg:gap-6 ">

                </div>
                  <div className="mt-5 h-[300px] w-full lg:w-[400px]">
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
              <p className="mt-5  grow text-sm md:text-lg">
                {works.summary}
              </p>
            </div>
            <Link
              href={`works/${works.id}`}
              className="mx-auto mt-10 flex w-fit justify-center rounded bg-secondary px-8 py-3 font-bold text-white "
            >
              詳しくみる
            </Link>
          </CarouselItem>
        );
      })}
      ;
    </>
  );
}
