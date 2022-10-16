import Link from "next/link";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <div>
      <div>
        <Link href="/">
          <h1 className={styles.topHeader}>Lug Lite</h1>
        </Link>
        <ul className={styles.homeButton}>
          <li className={styles.homeLink}>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
