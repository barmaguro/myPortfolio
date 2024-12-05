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
  };
};

export default async function page({ params }: Props) {
  const category = await getCategoryDetail(params.id).catch(notFound);

  const { contents: works, totalCount } = await getWorksList({
    limit: WORKS_LIST_LIMIT,
    filters: `category[equals]${category.id}`,
  });
  return (
    <>
      <p>
        <Category category={category} /> の一覧
      </p>
      <WorksList works={works} />
      <Pagenation
        totalCount={totalCount}
        basePath={`/works/category/${category.id}`}
      />
    </>
  );
}
