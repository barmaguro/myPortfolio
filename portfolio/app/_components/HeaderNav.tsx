// rfce
import Link from "next/link";

function HeaderNav() {
  return (
    <div>
      <ul className="flex justify-between items-center uppercase">
        <li className="">
          <Link href="/">
            <a className="">works</a>
          </Link>
        </li>
        <li className="">
          <Link href="/">
            <a className="">service</a>
          </Link>
        </li>
        <li className="">
          <Link href="/">
            <a className="">blog</a>
          </Link>
        </li>
        <li className="">
          <Link href="/">
            <a className="">contact</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default HeaderNav;
