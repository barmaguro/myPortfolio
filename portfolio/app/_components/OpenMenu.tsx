import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";
import CategoryList from "./CategoryList";

const navItems = [
  {
    label: "Service",
    href: "#service",
  },
  {
    label: "Works",
    href: "#works",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Contact",
    href: "#Contact",
  },
];

export default function OpenMenu() {
  return (
    <>
      <Drawer>
        <DrawerTrigger className="w-12 h-12 rounded-full bg-primary text-white border-transparent">
          menu
        </DrawerTrigger>
        <DrawerContent>
          <nav className="">
            <ul className="flex flex-col gap-4 items-start w-fit mx-auto py-5">
              {navItems.map((item, index) => (
                <>
                  <li className="text-lg text-secondary " key={index}>
                    <Link href={item.href} className="flex gap-3 items-center">
                      <p>{item.label}</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`size-4 translate-y-px ${item.label === "Works" ? "hidden" : ""}`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </Link>
                    {item.label === "Works" && <CategoryList />}
                  </li>
                </>
              ))}
            </ul>
          </nav>
          <DrawerClose className="py-6">
            <Button
              variant="outline"
              className=" w-12 h-12 rounded-full bg-secondary text-white"
            >
              close
            </Button>
          </DrawerClose>
        </DrawerContent>
      </Drawer>
    </>
  );
}
