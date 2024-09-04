// Slider.js
import React, { useState } from 'react';
import './Slider.css'; // Ensure this path is correct

// Import images directly
import dog1 from '../assets/dog1.png';
import dog2 from '../assets/dog2.png';
import dog3 from '../assets/dog3.png';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [dog1, dog2, dog3];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className='slider'>
      <div className='d-flex justify-content-center'><h2>Images</h2></div>
      <button className="slider-control prev" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="slider-inner">
        <img src={images[currentIndex]} style={{"width":"60vw","height":"60vh"}}></img>
      </div>
      <button className="slider-control next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Slider;
