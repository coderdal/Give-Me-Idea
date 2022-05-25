import React from "react";
import { Link } from "react-router-dom";

import globalStyles from "./globalStyles.module.css";

const Card = ({ image, title, id }) => {
  return (
    <>
      <Link to={`/idea/${id}`}>
        <div className={globalStyles.card}>
          <div className={globalStyles.image}>
            <img src={image} alt={title} />
          </div>
          <div className={globalStyles.info}>
            <h3>{title}</h3>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
