import React from "react";

function HeroSection() {
  return (
    <div>
      <div className="round">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <img
        src="https://pngimg.com/uploads/fitness/fitness_PNG45.png"
        alt=""
        className="hero_img"
      />
      <div className="heading">
        <h2>Fitness</h2>
        <h1>Tracker</h1>
      </div>
    </div>
  );
}

export default HeroSection;
