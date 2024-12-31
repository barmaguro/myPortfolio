import BreadCrumb from "app/_components/BreadCrumbWrapper";
import LogoHasText from "app/_components/LogoHasText";
import OpenMenu from "app/_components/OpenMenu";
import NavigationMenuMiddle from "app/_components/NavigationMenuMiddle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      <div className="flex justify-between items-center py-3 px-4 bg-background container mx-auto">
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
