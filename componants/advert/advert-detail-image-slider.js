import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Görsellerin listesi
const images = [
  "https://placehold.co/500",
  "https://placehold.co/500",
  "https://placehold.co/500",
  "https://placehold.co/500",
  "https://placehold.co/500",
  "https://placehold.co/500",
  "https://placehold.co/500",
  "https://placehold.co/500",
  "https://placehold.co/500",
];

export default function AdvertProductImageSlider() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };

  return (
    <div className="w-full">
      <Swiper
        loop={true}
        autoplay={{
          delay: 5000, // 3 saniyede bir geçiş
          disableOnInteraction: false, // kullanıcı tıklasa bile devam etsin
        }}
        pagination={pagination}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`advert image ${index + 1}`}
              className="rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
