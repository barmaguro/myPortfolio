import Hamburger from "./Hamburger";
import LayoutLogo from "./LayoutLogo";

function Header() {
  return (
    <div className="flex justify-between items-center py-3 px-4 border-b-1 border-primary">
      <LayoutLogo />
      <Hamburger />
    </div>
  );
}

export default Header;
