"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";

export default function App() {
  return (
    <div className="py-2">
      <div className="container mx-auto px-4">
        <div className="py-2 px-0 lg:px-24 space-x-4">
          <>
            <Swiper
              slidesPerView={2}
              spaceBetween={10}
              loop={true}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 5,
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
          </>
        </div>
      </div>
      <div className="flex justify-center items-center py-4">
        <Link href="/all-games">
          <button
            style={{
              backgroundColor: "var(--btn-bg)",
              color: "var(--btn-color)",
            }}
            className="px-6 py-2 text-white rounded-lg shadow-lg transition duration-300 glow-on-hover"
          >
            Tümünü Görüntüle
          </button>
        </Link>
      </div>
    </div>
  );
}
