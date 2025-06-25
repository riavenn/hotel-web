"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./navbar.module.css";

const Navbar = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${className || ""}`}>
      <Link className={styles?.navbarLeft || ''} href="/">
        <img
          src="/otel-logo.png"
          alt="Hotel Logo"
          className={styles?.hotelLogo || ''}
        />
      </Link>
      

      
      <div className={styles?.navbarRight || ''}>
        <Link href="/" className={styles?.navLink || ''}>
          Anasayfa
        </Link>
        <Link href="/about" className={styles?.navLink || ''}>
          Hakkında
        </Link>
        <Link href="/rooms" className={styles?.navLink || ''}>
          Odalar
        </Link>
        <Link href="/contact" className={styles?.navLink || ''}>
          İletişim
        </Link>
      </div>
      
      <button className={styles?.hamburgerMenu || ''} onClick={toggleMenu}>
        <span className={styles?.hamburgerLine || ''}></span>
        <span className={styles?.hamburgerLine || ''}></span>
        <span className={styles?.hamburgerLine || ''}></span>
      </button>
      
      <div className={`${styles?.mobileMenu || ''} ${isMenuOpen ? (styles?.mobileMenuOpen || '') : ''}`}>
        <Link href="/" className={styles?.mobileNavLink || ''} onClick={toggleMenu}>
          Anasayfa
        </Link>
        <Link href="/about" className={styles?.mobileNavLink || ''} onClick={toggleMenu}>
          Hakkında
        </Link>
        <Link href="/rooms" className={styles?.mobileNavLink || ''} onClick={toggleMenu}>
          Odalar
        </Link>
        <Link href="/contact" className={styles?.mobileNavLink || ''} onClick={toggleMenu}>
          İletişim
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
