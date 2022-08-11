import React from 'react';
import "./Slider.css";
import Carrousel from "../carousel/Carrousel";


const Slider = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-title">
        <h2>My Work</h2>
      </div>

      <Carrousel />
    </div>
  );
}

export default Slider