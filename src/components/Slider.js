import React, { useState } from "react";

function Slider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slider">
      {images.map((image, index) => {
        return (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`img ${index === currentIndex ? "img-active" : ""}`}
          />
        );
      })}
      <div className="slider-nav">
        <button
          className="slider-nav__arrow slider-nav__prev"
          onClick={prevSlide}
        >
          &lt;
        </button>
        <button
          className="slider-nav__arrow slider-nav__next"
          onClick={nextSlide}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Slider;
