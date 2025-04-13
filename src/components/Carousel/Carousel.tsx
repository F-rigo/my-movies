//create a carousel component without importing any library
import React, { useState } from 'react';

export default function Carousel({ items, title }: { items: string[], title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <h2>{title}</h2>
      <button onClick={handlePrev}>Previous</button>
      <div className="carousel-item">{items[currentIndex]}</div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}


