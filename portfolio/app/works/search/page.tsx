import { getWorksList } from "app/_components/_libs/microcms";
import SearchField from "app/_components/SearchField";
import WorksList from "app/_components/WorksList";
import { WORKS_LIST_LIMIT } from "app/_constance";

type Props = {
  searchParams: {
    q?: string;
  };
};
export default async function Page({ searchParams }: Props) {
  const { contents: works } = await getWorksList({
    limit: WORKS_LIST_LIMIT,
    q: searchParams.q,
  });
  return (
    <>
      <SearchField />
      <WorksList works={works} />
    </>
  );
}
