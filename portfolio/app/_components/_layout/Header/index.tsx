import BreadCrumb from "@/_components/BreadCrumbWrapper";
import LogoHasText from "@/layout/LogoHasText";
import NavigationMenuMiddle from "@/layout/NavigationMenuMiddle";
import OpenMenu from "@/layout/OpenMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      <div className="container mx-auto flex items-center justify-between bg-background px-4 pt-3">
        <LogoHasText />
        <div className="md:hidden">
          <OpenMenu />
        </div>
        <div className="hidden md:block">
          <NavigationMenuMiddle />
        </div>
      </div>
      <BreadCrumb />
    </header>
  );
}
