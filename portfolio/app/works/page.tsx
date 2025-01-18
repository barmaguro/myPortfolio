import {
  getAllCategoryList,
  getWorksList,
} from "app/_components/_libs/microcms";
import { getCategoryBgColor } from "app/_components/_libs/utils";
import Pagenation from "app/_components/_Pagenation";
import WorksList from "app/_components/WorksList";
import { WORKS_LIST_LIMIT } from "app/_constance";
import Link from "next/link";

export const revalidate = 0;

export default async function Page() {
  const { contents: works, totalCount } = await getWorksList({
    limit: WORKS_LIST_LIMIT,
  });

  const categories = await getAllCategoryList();
  return (
    <>
      <ul className="container mx-auto mt-20 flex flex-col items-center justify-center gap-4 md:flex-row">
        {categories.map((category, index) => (
          <li key={index}>
            <Link
              href={`/works/category/${category.id}`}
              key={index}
              className="flex items-center gap-1"
            >
              <p
                className={`flex  items-center gap-4  rounded px-4 py-1 text-base text-white ${getCategoryBgColor(category)}`}
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </p>
            </Link>
          </li>
        ))}
      </ul>
      <WorksList works={works} />
      <Pagenation totalCount={totalCount} />
    </>
  );
}
