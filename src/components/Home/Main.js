import React from "react";
import { Link } from "react-router-dom";

import { ArrowIcon, CssIcon, JavaScriptIcon, ReactIcon } from "../assets/icons";

import styles from "./Home.module.css";

const Main = () => {
  return (
    <main className={styles.home}>
      <div className={styles.landing}>
        <h1 className={styles.text}>
          Need an Project <span className={styles.colored}>idea</span>?
        </h1>
        <h1 className={styles.text}>Right Place !</h1>
        <p className={styles.smallText}>
          Do you want to develop a project but have no idea? <br />
          Don't worry, choose a category and check out the ideas we have
          prepared for you!
        </p>
      </div>
      <div className={styles.getStarted}>
        <div className={styles.start}>
          <div className={styles.info}>
            <span className={styles.text}>Click here and find cool ideas</span>
            <ArrowIcon />
          </div>
          <button className={styles.button}>Get Started 🔥</button>
        </div>
      </div>
      <div className={styles.quickButtons}>
        <div className={styles.button}>
          <Link to="/javascript">
            <JavaScriptIcon /> JavaScript
          </Link>
        </div>
        <div className={styles.button}>
          <Link to="/react">
            <ReactIcon /> React
          </Link>
        </div>
        <div className={styles.button}>
          <Link to="/css">
            <CssIcon /> CSS
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Main;
