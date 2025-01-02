import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card";
import { navItems } from "app/_components/_libs/navigation";
import Link from "next/link";
import CategoryList from "../CategoryList";

export default function index() {
  return (
    <>
      <nav className="">
        <ul className="mx-auto  flex w-fit items-baseline gap-14 py-5">
          {navItems.map((item, index) => (
            <>
              {item.label === "Works" ? (
                multipleMenu(item)
              ) : (
                <li className="text-lg text-secondary " key={index}>
                  <Link href={item.href} className="flex items-center gap-1">
                    <p>{item.label}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
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
        <li>
          <HoverCard>
            <HoverCardTrigger className="text-lg text-secondary">
              Works
            </HoverCardTrigger>
            <HoverCardContent className=" mt-4 rounded border bg-background px-4 pb-4 pt-2">
              <CategoryList />
            </HoverCardContent>
          </HoverCard>
        </li>
      </>
    );
  }
};
