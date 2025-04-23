import SearchField from "@/components/features/works/SearchField";
import WorksList from "@/components/features/works/WorksList";
import { getWorksList } from "@/libs/microcms";
import { WORKS_LIST_LIMIT } from "app/_constants";

type Props = {
  searchParams: Promise<{
    q?: string;
  }>;
};
export default async function Page(props: Props) {
  const searchParams = await props.searchParams;
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
