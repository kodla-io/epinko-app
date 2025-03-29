"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";

const sliderItems = [
  {
    title: "Item 1",
    media: "https://placehold.co/150x250",
    link: "/",
    background: "#FF5733",
  },
  {
    title: "Item 2",
    media: "https://placehold.co/150x250",
    link: "/",
    background: "#33FF57",
  },
  {
    title: "Item 3",
    media: "https://placehold.co/150x250",
    link: "/",
    background: "#3357FF",
  },
  {
    title: "Item 4",
    media: "https://placehold.co/150x250",
    link: "/",
    background: "#FF33A1",
  },
  {
    title: "Item 5",
    media: "https://placehold.co/150x250",
    link: "/",
    background: "#33FFD5",
  },
  {
    title: "Item 6",
    media: "https://placehold.co/150x250",
    link: "/",
    background: "#FFBD33",
  },
  {
    title: "Item 7",
    media: "https://placehold.co/150x250",
    link: "/",
    background: "#B833FF",
  },
  {
    title: "Item 8",
    media: "https://placehold.co/150x250",
    link: "/",
    background: "#FF5733",
  },
  {
    title: "Item 9",
    media: "https://placehold.co/150x250",
    link: "/",
    background: "#33FF57",
  },
  {
    title: "Item 10",
    media: "https://placehold.co/150x250",
    link: "/",
    background: "#3357FF",
  },
  {
    title: "Item 11",
    media: "https://placehold.co/150x250",
    link: "/",
    background: "#FF33A1",
  },
  {
    title: "Item 12",
    media: "https://placehold.co/150x250",
    link: "/",
    background: "#33FFD5",
  },
  {
    title: "Item 13",
    media: "https://placehold.co/150x250",
    link: "/",
    background: "#FFBD33",
  },
];

const GameListSlider = () => {
  return (
    <div className="py-2">
      <div className="container mx-auto px-4">
        <div className="py-8 space-x-4">
          <>
            <Swiper
              slidesPerView={2}
              spaceBetween={10}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 40,
                },
                1280: {
                  slidesPerView: 7,
                  spaceBetween: 40,
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
              style={{ padding: "20px 0" }}
            >
              {sliderItems.map((item, index) => (
                <SwiperSlide key={index}>
                  <Link href="/">
                    <div className="rounded-xl p-3 game-picture-card">
                      <img
                        src={item.media}
                        alt="Game Category"
                        className="rounded-md w-full object-cover"
                      />

                      <div className="hover-category-img">
                        <img src="https://placehold.co/150x250/000000/FFFFFF/png" />
                      </div>

                      <style jsx>{`
                        .game-picture-card::before,
                        .game-picture-card::after {
                          background-color: ${item.background};
                        }
                      `}</style>
                    </div>
                    <div
                      style={{
                        backgroundColor: item.background,
                        zIndex: "9",
                        width: "60%", // Genişliği ayarla
                      }}
                      className="absolute bottom-[-13px] left-1/2 transform -translate-x-1/2 rounded-sm"
                    >
                      <p className="text-center">{item.title}</p>
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
};

export default GameListSlider;
