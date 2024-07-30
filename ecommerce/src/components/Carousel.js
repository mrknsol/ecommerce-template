import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Autoplay} from 'swiper/modules';

import '../styles/Carousel.css';
import products from '../product';

const Carousel = () => {

  const slides = Object.keys(products).map(key => {
    const firstProduct = products[key][0];
    return {
      category: key,
      image: firstProduct.image,
    };
  });
  return (
    <div className="container-surface" style={{ userSelect: 'none' }}>
    <Swiper
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={'auto'}
      spaceBetween={20}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1.5,
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      navigation
      modules={[EffectCoverflow, Autoplay]}
      className="swiper_container"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="swiper-slide">
          <Link to={`/catalog?category=${slide.category}`} className="swiper-link">
            <img src={slide.image} alt={`Slide ${index + 1}`} />
            <div className="category-label">{slide.category}</div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  );
};

export default Carousel;