import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { navItems } from "app/_components/_libs/navigation";
import Link from "next/link";
import CategoryList from "./CategoryList";


export default function OpenMenu() {
  return (
    <>
      <Drawer>
        <DrawerTrigger className="size-12 rounded-full border-transparent bg-primary text-white">
          menu
        </DrawerTrigger>
        <DrawerContent>
          <nav className="">
            <ul className="mx-auto flex w-fit flex-col items-start gap-4 py-5">
              {navItems.map((item, index) => (
                <>
                  <li className="text-2xl text-secondary " key={index}>
                    <Link href={item.href} className="flex items-center gap-3">
                      <p>{item.label}</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`size-6 translate-y-px ${item.label === "Works" ? "hidden" : ""}`}
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
              className=" size-14 rounded-full bg-secondary text-lg text-white"
            >
              close
            </Button>
          </DrawerClose>
        </DrawerContent>
      </Drawer>
    </>
  );
}
