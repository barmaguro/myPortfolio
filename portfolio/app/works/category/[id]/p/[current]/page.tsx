import {
  getCategoryDetail,
  getWorksList,
} from "app/_components/_libs/microcms";
import Pagenation from "app/_components/_Pagenation";
import Category from "app/_components/Category";
import WorksList from "app/_components/WorksList";
import { WORKS_LIST_LIMIT } from "app/_constance";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
    current: string;
  };
};

export default async function Page({ params }: Props) {
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
        <Category category={category} />
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
