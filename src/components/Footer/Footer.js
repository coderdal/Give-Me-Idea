import React from "react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "../assets/icons";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.text}>
        <h1>
          Project made by
          <a href="https://linkedin.com/in/muhammederdal"> Muhammed Erdal </a>
          <br /> with Love 💚
        </h1>
        <p>Coding For Everyone</p>
      </div>
      <div className={styles.additive}>
        <h5>
          You can reach me through the following social media accounts and give
          feedback or contribute to the Project.
        </h5>
        <div className={styles.social}>
          <div className={styles.link}>
            <a
              href="https://twitter.com/cod_erdal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon />
            </a>
          </div>
          <div className={styles.link}>
            <a
              href="https://www.linkedin.com/in/muhammederdal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon />
            </a>
          </div>
          <div className={styles.link}>
            <a
              href="https://github.com/coderdal/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
            </a>
          </div>
        </div>
        <div className={styles.buymeacoffee}>
          <h4>
            Or you can
            <a
              href="https://www.buymeacoffee.com/erdal"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy me a coffee
            </a>
          </h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
