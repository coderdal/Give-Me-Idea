import React from "react";

import styles from "./Header.module.css";

import { Link } from "react-router-dom";
import { CodeIcon, MenuIcon } from "../assets/icons";

const Header = () => {
  return (
    <header className={styles.header}>
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
            <Link to="node">Node JS</Link>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/muhammederdal"
              target="_blank"
              rel="noreferrer"
              className={styles.contact}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className={styles.mobileMenu}>
        <button>
          <MenuIcon />
        </button>
      </div>
    </header>
  );
};

export default Header;
