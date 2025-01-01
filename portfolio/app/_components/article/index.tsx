import Image from "next/image";
import Link from "next/link";
import { Works } from "../_libs/microcms";
import ButtonLink from "../ButtonLink";
import Category from "../Category";

type Props = {
  data: Works;
};

export default function Article({ data }: Props) {
  return (
    <>
      <div className="max-w-xl mx-auto">
        <h1>{data.title}</h1>
        <div className="">
          <Image
            src={data.thumbnail.url}
            alt={data.title}
            width={data.thumbnail.width}
            height={data.thumbnail.height}
          />
        </div>
        <p className="">カテゴリー</p>
        <div className="">
          <Link href={`/works/category/${data.category.id}`}>
            <Category category={data.category} />
          </Link>
        </div>
        <p className="">
          <ButtonLink href="/works">Back</ButtonLink>
        </p>
      </div>
    </>
  );
}
