import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import imagenes from '../datos'

// import required modules
import { Pagination, Autoplay } from "swiper";


export default function Gallery() {
  return (
    <div className="gallery">
      <Swiper
        slidesPerView={4}
        slidesPerGroup={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{delay: 4000, disableOnInteraction: false }}
        className="mySwiper"
        breakpoints={{
          "@0.00":{
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75":{
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@1.00":{
            slidesPerView: 3,
            spaceBetween: 10,
          },
          "@1.50":{
            slidesPerView: 4,
            spaceBetween: 10,
          }
        }}
      >

        {imagenes.map(foto => 

        <SwiperSlide>
            
            <div className="divslider"> 
              <img src={process.env.PUBLIC_URL+ `/img/${foto.img}`}/>
              <p> {foto.name} </p>
            </div>

        </SwiperSlide>
        
        )}
      </Swiper>
    </div>
  );
}
