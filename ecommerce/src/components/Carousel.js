import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Autoplay } from 'swiper/modules';

import '../styles/Carousel.css';
import products from '../product';

const Carousel = () => {

  const images = [
    require('../assets/hats.jpeg'),
    require('../assets/jackets.jpeg'),
    require('../assets/jeans.jpeg'),
    require('../assets/shoes.jpeg'),
    require('../assets/tshirt.jpeg'),
  ];
  return (
    <div className="container-surface" style={{ userSelect: 'none' }}>
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
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
        modules={[EffectCoverflow, Autoplay]}
        className="swiper_container"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;