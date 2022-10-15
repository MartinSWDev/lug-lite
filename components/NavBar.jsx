import Link from "next/link";

const NavBar = () => {
  return (
    <div>
      <div>
        <Link href="/">
          <h1>Lug Lite</h1>
        </Link>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
