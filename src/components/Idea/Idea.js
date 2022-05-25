import React, { useState, useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";

import styles from "./Idea.module.css";

import axios from "axios";
import { ArrowBackIcon } from "../assets/icons";

const Idea = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [idea, setIdea] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/idea/${id}`);
        await setIdea(response.data[0]);
        await setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, [id]);

  window.scrollTo(0, 0);

  return isLoading ? (
    <h1>Loading</h1>
  ) : (
    <section className={styles.ideaSection}>
      <div className={styles.previousPage} onClick={() => navigate(-1)}>
        <ArrowBackIcon />
        Go Back
      </div>
      <div className={styles.idea}>
        <div className={styles.image}>
          <img src={idea.image} alt={idea.title} />
        </div>
        <div className={styles.details}>
          <h1>{idea.title}</h1>
          <p>{idea.description}</p>
          <p>{idea.note}</p>
          <h3>Links may be useful:</h3>
          <ul>
            {idea.related.map((link, index) => {
              return (
                <li key={index}>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    {link}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Idea;
