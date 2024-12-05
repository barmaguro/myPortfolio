import BreadCrumb from "./BreadCrumb";
import Hamburger from "./Hamburger";
import LayoutLogo from "./LayoutLogo";

function Header() {
  return (
    <header className="sticky top-0 bg-inherit z-50">
      <div className="flex justify-between items-center py-3 px-4 border-b-1 border-primary">
        <LayoutLogo />
        <Hamburger />
      </div>
      <BreadCrumb />
    </header>
  );
}

export default Header;
