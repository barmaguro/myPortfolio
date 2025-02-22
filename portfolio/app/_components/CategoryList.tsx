import { getAllCategoryList } from "@/libs/microcms";
import Link from "next/link";


export default async function CategoryList() {
  const categories = await getAllCategoryList();
  return (
    <>
      <ul className="mt-2 flex flex-col gap-2  md:gap-4">
        <li >  
          <Link href={"/works"} className="flex items-center gap-1 underline">
            <svg
              xmlns="http://www.w3.org/2000/svg"    
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
            <p className="text-base">全実績一覧</p>
          </Link>
        </li>
        {categories.map((category, index) => (
          <li key={index}>
            <Link
              href={`/works/category/${category.id}`}
              key={index}
              className="flex items-center gap-1 underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
              <p className="text-base">{category.name}一覧</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
