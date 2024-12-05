import Image from "next/image";
import Link from "next/link";
import BadgeLine from "app/_components/BadgeLine";
import { Works } from "app/_components/_libs/microcms";

type Props = {
  works: Works[];
};

export default function WorksList({ works }: Props) {
  if (works.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <>
      {works.map((article) => (
        <>
          <div className="flex flex-col mt-5">
            <div className="flex-grow h-fit">
              <h3 className="text-xl ">{article.title}</h3>
              <Link href={`/works/${article.id}`}>
                <div className="max-w-sm mt-5 w-full h-[300px]">
                  {article.thumbnail ? (
                    <Image
                      className="w-full h-full object-cover"
                      src={article.thumbnail.url}
                      alt={article.title}
                      width={article.thumbnail.width}
                      height={article.thumbnail.height}
                    />
                  ) : (
                    <Image
                      className=""
                      src=""
                      alt="No Image"
                      width={1200}
                      height={630}
                    />
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
                      [article.title]: article["badgeList"].map(
                        (array) => array.badge
                      ),
                    },
                  ]}
                />
              </div>
            </div>
          </div>
          <p className="mt-5 text-sm flex-grow">{article.summary}</p>
          <Link href="works" className="uppercase">
            view <br />
            all
          </Link>
        </>
      ))}
      ;
    </>
  );
}
