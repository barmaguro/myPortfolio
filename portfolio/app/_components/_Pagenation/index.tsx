import { WORKS_LIST_LIMIT } from "app/_constance";
import Link from "next/link";

type Props = {
  totalCount: number;
  current?: number;
  basePath?: string;
};

export default function Pagenation({
  totalCount,
  current = 1,
  basePath = "/works",
}: Props) {
  const pages = Array.from(
    {
      length: Math.ceil(totalCount / WORKS_LIST_LIMIT),
    },
    (_, i) => i + 1
  );
  console.log(pages);

  return (
    <nav>
      <ul className="container mx-auto flex gap-6 justify-center items-center mt-10"> 
        {pages.map((p) => (
          <li key={p} className="text-xl">
            {current !== p ? (
              <Link href={`${basePath}/p/${p}`} className="size-10 flex items-center justify-center rounded-full border"  >
                {p}
              </Link>
            ) : (
              <span className="bg-primary text-white size-10 flex items-center justify-center rounded-full border-primary">{p}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
