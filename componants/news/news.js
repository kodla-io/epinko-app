"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";

const NewsSlider = () => {
  return (
    <div className="py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-4">
          <h2
            style={{ color: "var(--foreground)" }}
            className="text-[30px] py-2 font-bold"
          >
            HABERLER
          </h2>
          <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
        </div>
        <div className="py-8 space-x-4">
          <>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay]}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              className="mySwiper"
            >
              {Array.from({ length: 15 }).map((_, index) => (
                <SwiperSlide key={index}>
                  <Link href="/">
                    <div
                      style={{
                        backgroundColor: "var(--news-card-bg)",
                        color: "var(--foreground)",
                      }}
                      className="rounded-xl overflow-hidden p-3"
                    >
                      <img
                        src="https://placehold.co/150x100"
                        alt="Item 5"
                        className="rounded-md w-full min-h-[300px] max-h-[300px] object-cover"
                      />
                      <div className="p-4 text-left">
                        <div className="flex justify-between text-[10px] mb-2">
                          <span>17 Eylül 2022</span>
                          <span>27 Görüntüleme</span>
                        </div>
                        <h3 className="text-lg font-bold mb-2">
                          Haber Haber Haber Haber
                        </h3>
                        <p className="text-sm mb-4">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s...
                        </p>
                        <div className="flex justify-center">
                          <button style={{backgroundColor: "var(--idle)"}} className="text-white text-sm font-semibold py-2 px-4 rounded">
                            Devamını Oku
                          </button>
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
};

export default NewsSlider;
