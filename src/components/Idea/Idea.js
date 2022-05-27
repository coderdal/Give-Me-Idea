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
        const response = await axios.get(
          `https://givemeidea.herokuapp.com/idea/${id}`
        );
        await setIdea(response.data[0]);
        await setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, [id]);

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
          <p>
            <span>Summary: </span>
            {idea.description}
          </p>
          <p>
            <span>Task: </span>
            {idea.task}
          </p>
          <p>
            <span>Challenge: </span>
            {idea.challenge}
          </p>
          <p>
            <span>Note: </span>
            {idea.note}
          </p>
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
