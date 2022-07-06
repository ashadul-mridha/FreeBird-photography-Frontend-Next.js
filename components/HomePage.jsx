import React from "react";
import Image from 'next/image'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from '../styles/Home.module.css'

// import required modules
import { Zoom, Navigation, Pagination } from "swiper";;

const HomePage = () => {
  
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        zoom={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Zoom, Navigation, Pagination]}
        className={styles.mySwiper}
      >
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <Image
              src="https://swiperjs.com/demos/images/nature-1.jpg"
              alt=""
              layout="fill"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <Image
              alt=""
              src="https://swiperjs.com/demos/images/nature-2.jpg"
              layout="fill"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <Image
              alt=""
              src="https://swiperjs.com/demos/images/nature-3.jpg"
              layout="fill"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <Image
              alt=""
              src="https://swiperjs.com/demos/images/nature-4.jpg"
              layout="fill"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <Image
              alt=""
              src="https://swiperjs.com/demos/images/nature-5.jpg"
              layout="fill"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <Image
              alt=""
              src="https://swiperjs.com/demos/images/nature-6.jpg"
              layout="fill"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <Image
              alt=""
              src="https://swiperjs.com/demos/images/nature-7.jpg"
              layout="fill"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <Image
              alt=""
              src="https://swiperjs.com/demos/images/nature-8.jpg"
              layout="fill"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <Image
              alt=""
              src="https://swiperjs.com/demos/images/nature-9.jpg"
              layout="fill"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomePage;
