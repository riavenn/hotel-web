import React from "react";

import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = ({ className }) => {
  return (
    <nav className={`${styles.navbar} ${className || ""}`}>
      <Link className={styles.navbarLeft} href="/">
        <img
          src="/otel-logo.png"
          alt="Hotel Logo"
          className={styles.hotelLogo}
        />
      </Link>
      <div className={styles.navbarRight}>
        <Link href="/" className={styles.navLink}>
          Anasayfa
        </Link>
        <Link href="/about" className={styles.navLink}>
          Hakkında
        </Link>
        <Link href="/rooms" className={styles.navLink}>
          Odalar
        </Link>
        <Link href="/contact" className={styles.navLink}>
          İletişim
        </Link>
      </div>
      <Link href="/rooms" className={styles.browseRoomsButton}>Odaları Keşfet</Link>
    </nav>
  );
};

export default Navbar;
