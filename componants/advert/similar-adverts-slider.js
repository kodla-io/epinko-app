"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { AiOutlineSafety } from "react-icons/ai";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper/modules";

const SimilarAdverts = [
  { title: "PUBG Mobile", isVitrin: true, vitrinColor: "var(--label1)" },
  { title: "Fortnite", isVitrin: false, vitrinColor: "var(--label1)" },
  { title: "Minecraft", isVitrin: false, vitrinColor: "var(--label2)" },
  { title: "Call of Duty", isVitrin: false, vitrinColor: "var(--label1)" },
  { title: "Apex Legends", isVitrin: true, vitrinColor: "var(--label3)" },
  { title: "Valorant", isVitrin: false, vitrinColor: "var(--label1)" },
  { title: "Among Us", isVitrin: true, vitrinColor: "var(--label4)" },
  { title: "Genshin Impact", isVitrin: false, vitrinColor: "var(--label1)" },
  { title: "Dota 2", isVitrin: false, vitrinColor: "var(--label4)" },
  { title: "CS:GO", isVitrin: true, vitrinColor: "var(--label6)" },
  { title: "Rocket League", isVitrin: true, vitrinColor: "var(--label1)" },
  { title: "Overwatch", isVitrin: false, vitrinColor: "var(--label7)" },
];

const SimilarAdvertsSlider = () => {
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
              slidesPerView={2}
              spaceBetween={10}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                1280: {
                  slidesPerView: 6,
                  spaceBetween: 10,
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
              {SimilarAdverts.map((game, index) => (
                <SwiperSlide key={index} className="p-0 ">
                  <Link href="#">
                    <div className="p-1">
                      <div className="relative min-h-[300px] max-h-[300px] overflow-hidden rounded-xl">
                        {game.isVitrin && (
                          <span
                            className="absolute top-[75px] left-[-21px] text-white py-[2px] px-[30px] text-xs font-bold transform -rotate-45 origin-top-left"
                            style={{ backgroundColor: game.vitrinColor }}
                          >
                            VİTRİN İLANI
                          </span>
                        )}
                        <div className="absolute top-2 right-2">
                          <AiOutlineSafety className="w-8 h-8" />
                        </div>
                        <img
                          src="https://placehold.co/200x300"
                          alt={`Card ${index}`}
                          className="w-full h-full object-cover min-h-[300px] max-h-[300px] bg-gradient-to-tl"
                        />
                        <div
                          className="text-white absolute bottom-0 p-2 w-full"
                          style={{
                            backdropFilter: "blur(4px)",
                          }}
                        >
                          <img
                            src="https://placehold.co/200x70/000000/FFFFFF"
                            className="relative bottom-[5px] left-1/2 transform -translate-x-1/2 w-[70%] md:w-[80%]"
                          />
                          <h3 className="text-md font-bold clamp-1">
                            {game.title}
                          </h3>
                          <div className="flex justify-between items-center mt-2">
                            <div className="flex items-center">
                              <img
                                src="https://placehold.co/50x50"
                                alt="Seller"
                                className="!w-10 !h-10 rounded-full"
                              />
                              <div className="ml-2">
                                <p className="text-[8px] text-gray-400">
                                  GÜVENİLİR SATICI
                                </p>
                              </div>
                            </div>
                            <div className="text-md font-bold text-yellow-400">
                              199.90₺
                            </div>
                          </div>
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
};

export default SimilarAdvertsSlider;
