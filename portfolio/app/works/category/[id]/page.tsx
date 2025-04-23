import {
  getCategoryDetail,
  getWorksList,
} from "@/libs/microcms";
import Pagenation from "@/components/_Pagenation";
import Categories from "@/components/Category";
import WorksList from "@/components/features/works/WorksList";
import { WORKS_LIST_LIMIT } from "@/_constants";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function page(props: Props) {
  const params = await props.params;
  const category = await getCategoryDetail(params.id).catch(notFound);
  const { contents: works, totalCount } = await getWorksList({
    limit: WORKS_LIST_LIMIT,
    filters: `category[equals]${category.id}`,
  });
  return (
    <>
      <p className="mt-20 text-center text-2xl font-medium text-secondary">
        <Categories category={category} />
      </p>
      <WorksList works={works} />
      <Pagenation
        totalCount={totalCount}
        basePath={`/works/category/${category.id}`}
      />
    </>
  );
}
