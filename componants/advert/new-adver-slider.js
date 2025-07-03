"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import AdvertCard from "../advert/advert-card";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const AllAdverts = [
  {
    title: "Spotify Aile Planı",
    price: 29.9,
    viewCount: 300,
    isVitrin: true,
    vitrinText: "POPÜLER",
    vitrinColor: "var(--label4)",
    isAnimated: false,
    animatedText: "ÇOK SATAN",
    image: "https://placehold.co/300x300",
    categoryImage: "https://placehold.co/50x50/000000/FFFFFF?text=Müzik",
    sellerName: "TuneMart",
    sellerImage: "https://placehold.co/50x50",
    animateBg: "var(--success)",
  },
  {
    title: "Valorant VP",
    price: 149.0,
    viewCount: 110,
    isVitrin: true,
    vitrinText: "TAVSİYE",
    vitrinColor: "var(--label5)",
    isAnimated: false,
    animatedText: "ÇOK SATAN",
    image: "https://placehold.co/300x300",
    categoryImage: "https://placehold.co/50x50/000000/FFFFFF?text=Valorant",
    sellerName: "ValorStore",
    sellerImage: "https://placehold.co/50x50",
    animateBg: "var(--label5)",
  },
  {
    title: "League of Legends RP",
    price: 89.0,
    viewCount: 210,
    isVitrin: false,
    vitrinText: "İNDİRİM",
    vitrinColor: "var(--label1)",
    isAnimated: false,
    animatedText: "ÇOK SATAN",
    image: "https://placehold.co/300x300",
    categoryImage: "https://placehold.co/50x50/000000/FFFFFF?text=LoL",
    sellerName: "RiotMart",
    sellerImage: "https://placehold.co/50x50",
    animateBg: "var(--success)",
  },
  {
    title: "Discord Nitro",
    price: 59.0,
    viewCount: 190,
    isVitrin: true,
    vitrinText: "YENİ ÜRÜN",
    vitrinColor: "var(--label6)",
    isAnimated: false,
    animatedText: "ÇOK SATAN",
    image: "https://placehold.co/300x300",
    categoryImage: "https://placehold.co/50x50/000000/FFFFFF?text=Nitro",
    sellerName: "NitroBay",
    sellerImage: "https://placehold.co/50x50",
    animateBg: "var(--success)",
  },
  {
    title: "Xbox Game Pass",
    price: 79.0,
    viewCount: 160,
    isVitrin: false,
    vitrinText: "Vitrin İlanı",
    vitrinColor: "var(--label1)",
    isAnimated: false,
    animatedText: "ÇOK SATAN",
    image: "https://placehold.co/300x300",
    categoryImage: "https://placehold.co/50x50/000000/FFFFFF?text=Xbox",
    sellerName: "BoxStore",
    sellerImage: "https://placehold.co/50x50",
    animateBg: "var(--label5)",
  },
  {
    title: "Epic Games Hediye",
    price: 60.0,
    viewCount: 95,
    isVitrin: true,
    vitrinText: "HEDİYE",
    vitrinColor: "var(--label7)",
    isAnimated: false,
    animatedText: "ÇOK SATAN",
    image: "https://placehold.co/300x300",
    categoryImage: "https://placehold.co/50x50/000000/FFFFFF?text=Epic",
    sellerName: "EpicShop",
    sellerImage: "https://placehold.co/50x50",
    animateBg: "var(--success)",
  },
  {
    title: "Amazon Prime",
    price: 25.0,
    viewCount: 250,
    isVitrin: false,
    vitrinText: "İNDİRİM",
    vitrinColor: "var(--label1)",
    isAnimated: false,
    animatedText: "ÇOK SATAN",
    image: "https://placehold.co/300x300",
    categoryImage: "https://placehold.co/50x50/000000/FFFFFF?text=Prime",
    sellerName: "PrimeZone",
    sellerImage: "https://placehold.co/50x50",
    animateBg: "var(--success)",
  },
  {
    title: "YouTube Premium",
    price: 39.0,
    viewCount: 130,
    isVitrin: true,
    vitrinText: "RAHAT İZLE",
    vitrinColor: "var(--label8)",
    isAnimated: false,
    animatedText: "ÇOK SATAN",
    image: "https://placehold.co/300x300",
    categoryImage: "https://placehold.co/50x50/000000/FFFFFF?text=YT",
    sellerName: "YTShop",
    sellerImage: "https://placehold.co/50x50",
    animateBg: "var(--success)",
  },
  {
    title: "Mobile Legends Diamonds",
    price: 109.0,
    viewCount: 175,
    isVitrin: true,
    vitrinText: "EN UCUZ",
    vitrinColor: "var(--label9)",
    isAnimated: false,
    animatedText: "ÇOK SATAN",
    image: "https://placehold.co/300x300",
    categoryImage: "https://placehold.co/50x50/000000/FFFFFF?text=MLBB",
    sellerName: "LegendsPay",
    sellerImage: "https://placehold.co/50x50",
    animateBg: "var(--label5)",
  },
  {
    title: "Google Play Kodu",
    price: 45.0,
    viewCount: 140,
    isVitrin: false,
    vitrinText: "İNDİRİM",
    vitrinColor: "var(--label1)",
    isAnimated: false,
    animatedText: "ÇOK SATAN",
    image: "https://placehold.co/300x300",
    categoryImage: "https://placehold.co/50x50/000000/FFFFFF?text=Play",
    sellerName: "PlayZone",
    sellerImage: "https://placehold.co/50x50",
    animateBg: "var(--success)",
  },
];

const NewAdvertSlider = () => {
  return (
    <div className="py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-4">
          <h2
            style={{ color: "var(--foreground)" }}
            className="text-[30px] py-2 font-bold"
          >
            YENİ İLANLAR
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
              {AllAdverts.map((game, index) => (
                <SwiperSlide key={index}>
                  <AdvertCard data={game} link="/advert-detail" />
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
              color: "var(--foreground)",
              boxShadow:
                "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            }}
            className="px-6 py-2 text-white rounded-lg transition duration-300 border-glow"
          >
            Tümünü Görüntüle
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NewAdvertSlider;
