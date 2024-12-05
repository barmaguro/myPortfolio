import { getWorksDetail } from "app/_components/_libs/microcms";
import Article from "app/_components/article";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
  searchParams: { dk?: string };
};

export default async function Page({ params, searchParams }: Props) {
  const data = await getWorksDetail(params.slug, {
    draftKey: searchParams.dk,
  }).catch(notFound);
  return (
    <>
      <Article data={data} />
    </>
  );
}
