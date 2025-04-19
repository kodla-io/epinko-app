"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import Link from "next/link";

export default function DoubleSlider() {
  return (
    <div className="py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-4">
          <h2
            style={{ color: "var(--foreground)" }}
            className="text-white text-[30px] py-2 font-bold"
          >
            Çok Satanlar
          </h2>
          <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
        </div>
        <div className="py-2 space-x-4">
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            centeredSlides={true}
            loop={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              100: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 10,
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
                <Link href="/">
                  <div className="bg-[var(--advert-list-bg)] rounded-lg p-2 w-full">
                    <img
                      src="https://placehold.co/200x200"
                      alt={`Item ${index + 1}`}
                      className="w-full h-full rounded-lg object-cover"
                    />
                    <div className="w-full">
                      <div className="text-left text-md clamp-1">
                        Knight Online 3200 CASH
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="py-2 space-x-4">
          <>
            <Swiper
              slidesPerView={2}
              spaceBetween={10}
              loop={true}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                100: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 5,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 6,
                  spaceBetween: 10,
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
                  <Link href="/">
                    <div className="bg-[var(--advert-list-bg)] rounded-lg p-2 w-full">
                      <img
                        src="https://placehold.co/200"
                        alt={`Item ${index + 1}`}
                        className="w-full h-full rounded-lg object-cover"
                      />
                      <div className="w-full">
                        <div className="text-left text-md clamp-1">
                          Knight Online 3200 CASH
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
    </div>
  );
}
