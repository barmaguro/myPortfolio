import Pagenation from "app/_components/_Pagenation";
import { getWorksList } from "app/_components/_libs/microcms";
import SearchField from "app/_components/SearchField";
import WorksList from "app/_components/WorksList";
import { WORKS_LIST_LIMIT } from "app/_constance";

export const revalidate = 0;

export default async function Page() {
  const { contents: works, totalCount } = await getWorksList({
    limit: WORKS_LIST_LIMIT,
  });

  return (
    <>
      <SearchField />
      <WorksList works={works} />
      <Pagenation totalCount={totalCount} />
    </>
  );
}
