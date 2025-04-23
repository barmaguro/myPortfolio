import Pagenation from "@/components/_Pagenation";
import Categories from "@/components/Category";
import WorksList from "@/components/features/works/WorksList";
import { getCategoryDetail, getWorksList } from "@/libs/microcms";
import { WORKS_LIST_LIMIT } from "app/_constants";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
    current: string;
  }>;
};

export default async function Page(props: Props) {
  const params = await props.params;
  const current = parseInt(params.current as string, 10);

  const category = await getCategoryDetail(params.id).catch(notFound);

  const { contents: works, totalCount } = await getWorksList({
    filters: `category[equals]${category.id}`,
    limit: WORKS_LIST_LIMIT,
    offset: WORKS_LIST_LIMIT * (current - 1),
  });

  if (works.length === 0) {
    notFound();
  }
  return (
    <>
      <p className="font-bold">
        <Categories category={category} />
        の一覧
      </p>
      <WorksList works={works} />
      <Pagenation
        totalCount={totalCount}
        basePath={`/works/category/${category.id}`}
      />
    </>
  );
}
