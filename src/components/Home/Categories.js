import React from "react";
import { Link } from "react-router-dom";
import {
  AngularIcon,
  CssIcon,
  JavaScriptIcon,
  ReactIcon,
  SvelteIcon,
  VueIcon,
} from "../assets/icons";

import styles from "./Home.module.css";

const Categories = () => {
  return (
    <section id="categories" className={styles.categories}>
      <h1 className={styles.landingText}>
        Choose category <br /> You want to get ideas
      </h1>
      <div className={styles.categoryList}>
        <div className={styles.button}>
          <Link to="/css">
            <CssIcon /> CSS
          </Link>
        </div>
        <div className={styles.button}>
          <Link to="/javascript">
            <JavaScriptIcon /> JavaScript
          </Link>
        </div>
        <div className={styles.button}>
          <Link to="/react">
            <ReactIcon /> React JS
          </Link>
        </div>
        <div className={styles.button}>
          <Link to="/angular">
            <VueIcon /> Vue JS
          </Link>
        </div>
        <div className={styles.button}>
          <Link to="/vue">
            <AngularIcon /> Angular JS
          </Link>
        </div>
        <div className={styles.button}>
          <Link to="/svelte">
            <SvelteIcon /> Svelte JS
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Categories;
