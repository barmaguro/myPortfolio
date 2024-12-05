import { getWorksList } from "app/_components/_libs/microcms";
import Pagenation from "app/_components/_Pagenation";
import { WORKS_LIST_LIMIT } from "app/_constance";
import { notFound } from "next/navigation";
import WorksList from "app/_components/WorksList";

type Props = {
  params: {
    current: string;
  };
};

export default async function Page({ params }: Props) {
  const current = parseInt(params.current as string, 10);

  if (Number.isNaN(current) || current < 1) {
    notFound();
  }
  const { contents: works, totalCount } = await getWorksList({
    limit: WORKS_LIST_LIMIT,
    offset: WORKS_LIST_LIMIT * (current - 1),
  });

  if (works.length === 0) {
    notFound();
  }

  return (
    <>
      <WorksList works={works} />
      <Pagenation totalCount={totalCount} current={current} />
    </>
  );
}
