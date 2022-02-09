import Link from "next/link";
import styles from "../../styles/components/header.module.css";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useState } from "react";

export default function MainHeader() {
  let [active, setActive] = useState(false);

  function toggleActive() {
    setActive(!active);
  }
  return (
    <header className={styles.header}>
      <span className={styles.logo}>Logo</span>

      <nav className={styles.navbar}>
        <ul
          className={`${styles.menu} ${
            active ? styles.active : styles.disabled
          }`}
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/prices">Prices</Link>
          </li>
        </ul>

        <div className={styles.toggle} onClick={toggleActive}>
          {active ? <IoMdClose /> : <IoMdMenu />}
        </div>
      </nav>
    </header>
  );
}
