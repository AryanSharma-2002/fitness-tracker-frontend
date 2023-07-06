import React from "react";

function WorkoutPlan({ title, description, instructions, images }) {
  const [activeImageIndex, setActiveImageIndex] = React.useState(0);

  const slide = (n) => {
    setActiveImageIndex((prevIndex) => (prevIndex + n) % images.length);
  };

  return (
    <section className="workout-plan">
      <h2>{title}</h2>
      <div className="workout-plan__image">
        <div className="slider">
          {images.map((image, index) => {
            return (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className={`img ${
                  index === activeImageIndex ? "img-active" : ""
                }`}
              />
            );
          })}
        </div>
        <div className="slider-nav">
          <button
            className="slider-nav__arrow slider-nav__prev"
            onClick={() => slide(-1)}
          >
            &lt;
          </button>
          <button
            className="slider-nav__arrow slider-nav__next"
            onClick={() => slide(1)}
          >
            &gt;
          </button>
        </div>
      </div>
      <div className="workout-plan__content">
        <p>{description}</p>
        <h3>Instructions:</h3>
        <ol>
          {instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default WorkoutPlan;
