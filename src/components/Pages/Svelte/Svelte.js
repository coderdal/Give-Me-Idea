import React, { useEffect, useState } from "react";
import Card from "../Card";

import axios from "axios";

import globalStyles from "../globalStyles.module.css";

import { SvelteIcon } from "../../assets/icons";

import SkeletonAnimation from "../CardSkeleton";

const Svelte = () => {
  const [ideas, setIdeas] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://givemeidea.herokuapp.com/ideas/svelte"
      );
      await setIdeas(response.data.data);
      await setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className={globalStyles.mainSection}>
      <h2 className={globalStyles.title}>Svelte Project Ideas</h2>
      <div className={globalStyles.cards}>
        {isLoading ? (
          <>
            <SkeletonAnimation />
            <SkeletonAnimation />
            <SkeletonAnimation />
            <SkeletonAnimation />
            <SkeletonAnimation />
            <SkeletonAnimation />
            <SkeletonAnimation />
            <SkeletonAnimation />
            <SkeletonAnimation />
            <SkeletonAnimation />
            <SkeletonAnimation />
            <SkeletonAnimation />
          </>
        ) : (
          ideas.map((item) => {
            return (
              <Card
                key={item.id}
                title={item.title}
                image={item.image}
                id={item.id}
              >
                <SvelteIcon />
              </Card>
            );
          })
        )}
      </div>
    </section>
  );
};

export default Svelte;
