import React, { useRef, useState } from "react";

import styles from "./Header.module.css";

import { Link } from "react-router-dom";
import { CodeIcon, MenuIcon } from "../assets/icons";

const Header = () => {
  const headerRef = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e) => {
    if (e.currentTarget.scrollY > 100) {
      headerRef.current.classList.add(styles.scrolled);
    } else {
      headerRef.current.classList.remove(styles.scrolled);
    }
  };

  window.addEventListener("scroll", (e) => handleScroll(e));

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header ref={headerRef} className={styles.header}>
      <div className={styles.brand}>
        <Link to="/">
          <div className={styles.brandLogo}>
            <CodeIcon />
          </div>
          <h1 className={styles.brandName}>Give Me Idea</h1>
        </Link>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link to="javascript">JavaScript</Link>
          </li>
          <li>
            <Link to="css">CSS</Link>
          </li>
          <li>
            <Link to="react">React JS</Link>
          </li>
          <li>
            <Link to="vue">Vue JS</Link>
          </li>
          <li>
            <Link to="angular">Angular JS</Link>
          </li>
          <li>
            <Link to="svelte">Svelte JS</Link>
          </li>
          <li>
            <a href="#contact" className={styles.contact}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className={styles.mobileMenu}>
        <button onClick={toggleMobileMenu}>
          <MenuIcon />
        </button>
      </div>
      {isMenuOpen && (
        <div className={styles.activeMenu}>
          <ul>
            <li onClick={toggleMobileMenu}>
              <Link to="javascript">JavaScript</Link>
            </li>
            <li onClick={toggleMobileMenu}>
              <Link to="css">CSS</Link>
            </li>
            <li onClick={toggleMobileMenu}>
              <Link to="react">React JS</Link>
            </li>
            <li onClick={toggleMobileMenu}>
              <Link to="vue">Vue JS</Link>
            </li>
            <li onClick={toggleMobileMenu}>
              <Link to="angular">Angular JS</Link>
            </li>
            <li onClick={toggleMobileMenu}>
              <Link to="svelte">Svelte JS</Link>
            </li>
            <li onClick={toggleMobileMenu}>
              <a href="#contact" className={styles.contact}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
