import React, { useState } from 'react';
import './Slideshow.scss';

const Slideshow = ({ pictures }) => {
  const [current, setCurrent] = useState(0);
  const length = pictures.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  if (length === 0) {
    return null;
  }

  return (
    <div className="slideshow">
      <img src={pictures[current]} alt="logement" />
      {length > 1 && (
        <>
          <button onClick={prevSlide} className="prev">&#10094;</button>
          <button onClick={nextSlide} className="next">&#10095;</button>
          <div className="number">
            {current + 1} / {length}
          </div>
        </>
      )}
    </div>
  );
};

export default Slideshow;