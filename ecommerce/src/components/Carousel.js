import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Carousel.css';
import products from '../product';

const Carousel = () => {
  const carouselRef = useRef(null);

  const handleMouseDown = (e) => {
    const carousel = carouselRef.current;
    carousel.style.cursor = 'grabbing';
    carousel.style.userSelect = 'none';
    carousel.mouseDown = true;
    carousel.startX = e.pageX - carousel.offsetLeft;
    carousel.scrollLeft = carousel.scrollLeft;
  };

  const handleMouseUp = () => {
    const carousel = carouselRef.current;
    carousel.style.cursor = 'grab';
    carousel.style.removeProperty('user-select');
    carousel.mouseDown = false;
  };

  const handleMouseMove = (e) => {
    const carousel = carouselRef.current;
    if (!carousel.mouseDown) return;
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - carousel.startX) * 2;
    carousel.scrollLeft = carousel.scrollLeft - walk;
  };

  return (
    <div
      className="carousel"
      ref={carouselRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseUp}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {Object.keys(products).map((category) => {
        const items = products[category];
        if (items && items.length > 0) {
          return (
            <Link to={`/catalog?category=${category}`} key={category} className="carousel-item">
              <div className="carousel-card">
                <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
                <img src={items[0].image} alt={category} />
              </div>
            </Link>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default Carousel;