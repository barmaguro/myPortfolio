import Article from "@/components/article";
import { getWorksDetail } from "@/libs/microcms";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{ dk?: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const data = await getWorksDetail(params.slug, {
    draftKey: searchParams.dk,
  });

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [data?.thumbnail?.url ?? ""],
    },
  };
}

export const revalidate = 0;

export default async function Page(props: Props) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const data = await getWorksDetail(params.slug, {
    draftKey: searchParams.dk,
  }).catch(notFound);
  return (
    <>
      <Article data={data} />
    </>
  );
}
