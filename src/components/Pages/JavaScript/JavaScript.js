import React, { useEffect, useState } from "react";
import Card from "../Card";

import axios from "axios";

import globalStyles from "../globalStyles.module.css";

import { JavaScriptIcon } from "../../assets/icons";

const JavaScript = () => {
  const [ideas, setIdeas] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/js");
      setIdeas(response.data[0].data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className={globalStyles.mainSection}>
      <h2 className={globalStyles.title}>JavaScript Project Ideas</h2>
      <div className={globalStyles.cards}>
        {ideas.map((item) => {
          return (
            <Card
              key={item.id}
              title={item.title}
              image={item.image}
              id={item.id}
            >
              <JavaScriptIcon />
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default JavaScript;
