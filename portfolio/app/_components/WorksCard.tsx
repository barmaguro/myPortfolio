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
            <div className="lg:w-fit lg:mx-auto">
              <div className="flex flex-col mt-5 lg:flex-row lg:gap-6 ">
                <div className="h-fit flex-shrink-0 ">
                  <h3 className="text-xl font-medium lg:text-xl  ">
                    {works.title}
                  </h3>
                  <Date date={works.publishedAt ?? works.createdAt} />

                  <div className="mt-5 w-full h-[300px] lg:w-[400px]">
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
                <div className="">
                  <p className="mt-5 text-lg uppercase lg:mt-16">tech stack</p>
                  <div className="mt-5 ">
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
              </div>
              <p className="mt-5  text-sm flex-grow md:text-lg">
                {works.summary}
              </p>
            </div>
            <Link
              href={`works/${works.id}`}
              className="flex justify-center mt-10 font-bold bg-secondary text-white py-3 px-8 w-fit mx-auto rounded "
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
