import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";

const slides = Array.from({ length: 9 });

export default function App() {
  return (
    <>
      <div id="deal-of-the-day-slider">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper w-full"
        >
          {slides.map((_, index) => (
            <SwiperSlide key={index}>
              <Link href="/advert-detail">
                <img
                  src="https://placehold.co/300x350"
                  alt={`Slide ${index + 1}`}
                  className="object-cover  rounded-lg cursor-pointer"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
