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
      <ul className="container flex gap-2">
        {pages.map((p) => (
          <li className="" key={p}>
            {current !== p ? (
              <Link href={`${basePath}/p/${p}`} >
                {p}
              </Link>
            ) : (
              <span className="bg-primary text-white">{p}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
