import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";

import { Link } from "react-router-dom";
import { ClickIcon } from "../assets/icons";

import globalStyles from "./globalStyles.module.css";

const Card = ({ image, title, id, children }) => {
  return (
    <>
      <Link to={`/idea/${id}`}>
        <div className={globalStyles.card}>
          <span className={globalStyles.CategoryIcon}>{children}</span>
          <div className={globalStyles.image}>
            <LazyLoadImage
              src={image}
              alt={title}
              width="100%"
              height="100%"
              className={globalStyles.img}
            />
          </div>
          <div className={globalStyles.info}>
            <h3>{title}</h3>
          </div>
          <span className={globalStyles.DetailsIcon}>
            <ClickIcon />
          </span>
        </div>
      </Link>
    </>
  );
};

export default Card;
