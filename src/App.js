import React, { useState } from "react";
import "./App.css";
const images = ["/image/1.JPG", "/image/2.JPG", "/image/3.JPG", "/image/4.JPG"];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1
    );
  };

  return (
    <div className="sliderContainer">
      <button className="prevBtn" onClick={prevSlide}>
        <i class="fa-solid fa-backward"></i> Previous
      </button>

      <div className="slider">
        {images.map((image) => (
          <div
            className={`slide`}
            style={{
              transform: `translateX(${-400 * currentIndex}px)`,
              transition: "1s",
            }}
          >
            <img className="sliderImage" src={image} alt="" />
          </div>
        ))}
      </div>

      <button className="nextBtn" onClick={nextSlide}>
        Next <i class="fa-solid fa-forward"></i>
      </button>
    </div>
  );
}

export default App;
