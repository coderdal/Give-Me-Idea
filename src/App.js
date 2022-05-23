import React from "react";

import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

// import pages
import Angular from "./components/Pages/Angular/Angular";
import Css from "./components/Pages/Css/Css";
import JavaScript from "./components/Pages/JavaScript/JavaScript";
import ReactJs from "./components/Pages/React/ReactJs";
import Svelte from "./components/Pages/Svelte/Svelte";
import Vue from "./components/Pages/Vue/Vue";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/javascript" element={<JavaScript />} />
        <Route path="/angular" element={<Angular />} />
        <Route path="/css" element={<Css />} />
        <Route path="/react" element={<ReactJs />} />
        <Route path="/vue" element={<Vue />} />
        <Route path="/svelte" element={<Svelte />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
