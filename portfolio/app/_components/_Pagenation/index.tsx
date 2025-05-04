import { WORKS_LIST_LIMIT } from "app/_constants";
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
    <nav aria-label="ページネーション">
      <ul className="container mx-auto mt-10 flex items-center justify-center gap-6">
        {pages.map((p) => (
          <li key={p} className="text-xl">
            {current !== p ? (
              <Link
                href={`${basePath}/p/${p}`}
                aria-label={`${p}ページに移動する`}
                className="flex size-10 items-center justify-center rounded-full border transition hover:scale-110 hover:border-2 hover:font-bold"
              >
                {p}
              </Link>
            ) : (
              <span className="flex size-10 items-center justify-center rounded-full border-primary bg-primary text-white transition hover:opacity-70">
                {p}
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
