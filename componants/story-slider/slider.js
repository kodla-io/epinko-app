"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";

const items = [
  "https://placehold.co/100",
  "https://placehold.co/100",
  "https://placehold.co/100",
  "https://placehold.co/100",
  "https://placehold.co/100",
  "https://placehold.co/100",
  "https://placehold.co/100",
  "https://placehold.co/100",
  "https://placehold.co/100",
  "https://placehold.co/100",
  "https://placehold.co/100",
  "https://placehold.co/100",
  "https://placehold.co/100",
  "https://placehold.co/100",
  "https://placehold.co/100",
  "https://placehold.co/100",
  "https://placehold.co/100",
  "https://placehold.co/100",
  "https://placehold.co/100",
  "https://placehold.co/100",
];

const StorySlider = () => {
  return (
    <div className="py-2">
      <div className="container mx-auto px-4">
        <div className="py-1 space-x-1">
          <>
            <Swiper
              slidesPerView={12}
              spaceBetween={10}
              breakpoints={{
                320: {
                  slidesPerView: 4,
                  spaceBetween: 5,
                },
                480: {
                  slidesPerView: 5,
                  spaceBetween: 5,
                },
                640: {
                  slidesPerView: 6,
                  spaceBetween: 5,
                },
                768: {
                  slidesPerView: 8,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 9,
                  spaceBetween: 10,
                },
                1280: {
                  slidesPerView: 12,
                  spaceBetween: 10,
                },
              }}
              pagination={{
                clickable: true,
              }}
              loop={true}
              modules={[Autoplay]}
              autoplay={{
                delay: 20000, // Otomatik kaydırma süresi (ms)
                disableOnInteraction: false, // Kullanıcı etkileşimi sonrasında durmaması için
              }}
              className="mySwiper !py-1"
            >
              {items.map((src, index) => (
                <SwiperSlide key={index} className="glow-on-hover-circle p-2">
                  <Link href="/category-detail">
                    <img
                      src={src}
                      alt={`Item ${index + 1}`}
                      className="bg-gradient-to-b from-blue-300 to-transparent p-1 rounded-full w-full h-full object-cover"
                    />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        </div>
      </div>
    </div>
  );
};

export default StorySlider;
