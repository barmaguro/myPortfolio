import BreadCrumb from "app/_components/BreadCrumbWrapper";
import LogoHasText from "app/_components/LogoHasText";
import OpenMenu from "app/_components/OpenMenu";
import NavigationMenuMiddle from "app/_components/NavigationMenuMiddle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      <div className="container mx-auto flex items-center justify-between bg-background px-4 py-3">
        <LogoHasText />
        <div className="md:hidden">
          <OpenMenu />
        </div>
        <div className="hidden md:block">
          <NavigationMenuMiddle />
        </div>
      </div>
      <BreadCrumb/>
    </header>
  );
}
