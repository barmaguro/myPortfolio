import CategoryList from "@/components/CategoryList";
import { navItems } from "@/libs/navigation";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card";
import Link from "next/link";

export default function index() {
  return (
    <>
      <nav className="">
        <ul className="mx-auto flex w-fit items-center gap-14 py-5">
          {navItems.map((item, index) => (
            <>
              {item.label === "Works" ? (
                multipleMenu(item)
              ) : (
                <li className="" key={index}>
                  <Link
                    href={item.href}
                    area-label={`${item}セクションに移動する`}
                    className="group flex items-center gap-2"
                  >
                    <p className="text-lg text-secondary transition group-hover:text-accent lg:text-xl">
                      {item.label}
                    </p>
                    <span className="grid place-items-center size-6 border-1 rounded-full border-secondary group-hover:border-accent group-hover:bg-accent">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5 transition group-hover:translate-y-1 group-hover:text-white scale-x-125"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5"
                        />
                      </svg>
                    </span>
                  </Link>
                </li>
              )}
            </>
          ))}
        </ul>
      </nav>
    </>
  );
}

const multipleMenu = (item) => {
  if (item.label === "Works") {
    return (
      <>
        <li className="">
          <HoverCard openDelay={0}>
            <HoverCardTrigger asChild>
              <button
                className="text-lg text-secondary hover:text-accent lg:text-xl"
                aria-label="詳細ポップアップをひらく。"
              >
                Work
              </button>
            </HoverCardTrigger>
            <HoverCardContent className="mt-4 rounded border bg-background px-4 pb-4 pt-2">
              <CategoryList />
            </HoverCardContent>
          </HoverCard>
        </li>
      </>
    );
  }
};
