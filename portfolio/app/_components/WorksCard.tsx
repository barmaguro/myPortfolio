import { CarouselItem } from "@/components/ui/carousel";
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
          <CarouselItem key={index}>
            <div className="flex flex-col mt-5">
              <div className="flex-grow h-fit">
                <h3 className="text-xl ">{works.title}</h3>
                <Link href={`works/${works.id}`}>
                  <div className="max-w-sm mt-5 w-full h-[300px]">
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
                </Link>
              </div>
              <div className="">
                <p className="mt-5 text-xl uppercase">tech stack</p>
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
            <p className="mt-5 text-sm flex-grow">{works.summary}</p>
          </CarouselItem>
        );
      })}
      ;
    </>
  );
}
