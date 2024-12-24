import BreadCrumb from "app/_components/BreadCrumb";
import LogoHasText from "app/_components/LogoHasText";
import Hamburger from "app/_components/OpenMenu";

export default function Header() {
  return (
    <header className="sticky top-0  z-50">
      <div className="flex justify-between items-center py-3 px-4 bg-background">
        <LogoHasText />
        <Hamburger />
      </div>
      <BreadCrumb />
    </header>
  );
}
