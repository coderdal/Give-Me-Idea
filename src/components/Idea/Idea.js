import React, { useState, useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";

import styles from "./Idea.module.css";

import axios from "axios";

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
        console.log(response);
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
    <section className={styles.idea}>
      <button type="submit" onClick={() => navigate(-1)}>
        go back
      </button>
      <h2>{idea.title}</h2>
    </section>
  );
};

export default Idea;
