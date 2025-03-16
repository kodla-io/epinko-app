"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import Link from "next/link";

export default function App() {
  return (
    <div className="py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-4">
          <h2
            style={{ color: "var(--foreground)" }}
            className="text-white text-[30px] py-2 font-bold"
          >
            YENİ OYUNLAR
          </h2>
          <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
        </div>
        <div className="py-2 space-x-4">
          <Swiper
            slidesPerView={1.5}
            spaceBetween={10}
            centeredSlides={true}
            loop={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              100: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4.5,
                spaceBetween: 30,
              },
            }}
            modules={[Autoplay]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
            className="mySwiper"
          >
            {Array.from({ length: 15 }).map((_, index) => (
              <SwiperSlide key={index}>
                <Link href="#">
                  <img
                    src="https://placehold.co/100x150"
                    alt={`Item ${index + 1}`}
                    className="w-full h-full rounded-[20px] object-cover min-h-[300px] max-h-[300px]"
                  />
                  <div className="absolute bottom-0 left-0 p-2 text-center w-full">
                    <div className="text-black bg-gradient-to-t p-2 rounded-b-[17px] from-white to-transparent">
                      <div className="font-bold">PUBG MOBİLE</div>
                      <div className="text-red-500 text-sm font-bold">
                        130.00 TL
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
