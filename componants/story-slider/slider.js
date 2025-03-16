"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";

const StorySlider = () => {
  return (
    <div className="py-2">
      <div className="container mx-auto px-4">
        <div className="py-8 space-x-4">
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
              modules={[Autoplay]}
              autoplay={{
                delay: 2000, // Otomatik kaydırma süresi (ms)
                disableOnInteraction: false, // Kullanıcı etkileşimi sonrasında durmaması için
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <Link href="/">
                  <img
                    src="https://placehold.co/100"
                    alt="Item 5"
                    className="rounded-full w-full h-full object-cover"
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="/">
                  <img
                    src="https://placehold.co/100"
                    alt="Item 5"
                    className="rounded-full w-full h-full object-cover"
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="/">
                  <img
                    src="https://placehold.co/100"
                    alt="Item 5"
                    className="rounded-full w-full h-full object-cover"
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="/">
                  <img
                    src="https://placehold.co/100"
                    alt="Item 5"
                    className="rounded-full w-full h-full object-cover"
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="/">
                  <img
                    src="https://placehold.co/100"
                    alt="Item 5"
                    className="rounded-full w-full h-full object-cover"
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="/">
                  <img
                    src="https://placehold.co/100"
                    alt="Item 5"
                    className="rounded-full w-full h-full object-cover"
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="/">
                  <img
                    src="https://placehold.co/100"
                    alt="Item 5"
                    className="rounded-full w-full h-full object-cover"
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="/">
                  <img
                    src="https://placehold.co/100"
                    alt="Item 5"
                    className="rounded-full w-full h-full object-cover"
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="/">
                  <img
                    src="https://placehold.co/100"
                    alt="Item 5"
                    className="rounded-full w-full h-full object-cover"
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="/">
                  <img
                    src="https://placehold.co/100"
                    alt="Item 5"
                    className="rounded-full w-full h-full object-cover"
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="/">
                  <img
                    src="https://placehold.co/100"
                    alt="Item 5"
                    className="rounded-full w-full h-full object-cover"
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="/">
                  <img
                    src="https://placehold.co/100"
                    alt="Item 5"
                    className="rounded-full w-full h-full object-cover"
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="/">
                  <img
                    src="https://placehold.co/100"
                    alt="Item 5"
                    className="rounded-full w-full h-full object-cover"
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="/">
                  <img
                    src="https://placehold.co/100"
                    alt="Item 5"
                    className="rounded-full w-full h-full object-cover"
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="/">
                  <img
                    src="https://placehold.co/100"
                    alt="Item 5"
                    className="rounded-full w-full h-full object-cover"
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="/">
                  <img
                    src="https://placehold.co/100"
                    alt="Item 5"
                    className="rounded-full w-full h-full object-cover"
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="/">
                  <img
                    src="https://placehold.co/100"
                    alt="Item 5"
                    className="rounded-full w-full h-full object-cover"
                  />
                </Link>
              </SwiperSlide>
            </Swiper>
          </>
        </div>
      </div>
    </div>
  );
};

export default StorySlider;
