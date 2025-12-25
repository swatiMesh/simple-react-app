import React from "react";
import "../css/Tour.css";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Tours from "./Tours";

const Tour = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Tours />
    </div>
  );
};

export default Tour;
