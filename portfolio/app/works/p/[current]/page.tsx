import Pagenation from "@/components/_Pagenation";
import WorksList from "@/components/features/works/WorksList";
import { WORKS_LIST_LIMIT } from "@/constants/index";
import { getAllCategoryList, getWorksList } from "@/libs/microcms";
import { getCategoryBgColor } from "@/libs/utils";
import Link from "next/link";
import { notFound } from "next/navigation";

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

  const categories = await getAllCategoryList();

  return (
    <>
      <ul className="container mx-auto mt-20 flex flex-col items-center justify-center gap-4 md:flex-row lg:mt-40">
        {categories.map((category, index) => (
          <li key={index}>
            <Link
              href={`/works/category/${category.id}`}
              key={index}
              className="flex items-center gap-1"
            >
              <p
                className={`flex items-center gap-4 rounded px-4 py-1 text-base text-white ${getCategoryBgColor(category)}`}
              >
                {category.name}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </p>
            </Link>
          </li>
        ))}
      </ul>
      <WorksList works={works} />
      <Pagenation totalCount={totalCount} current={current} />
    </>
  );
}
