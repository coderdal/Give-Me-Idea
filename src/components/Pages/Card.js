import React from "react";
import { Link } from "react-router-dom";

import globalStyles from "./globalStyles.module.css";

const Card = ({ image, title, description, id }) => {
  return (
    <>
      <div className={globalStyles.card}>
        <Link to={`/idea/${id}`}>
          <img src={image} alt={title} />
          <h3>{title}</h3>
        </Link>
      </div>
    </>
  );
};

export default Card;
