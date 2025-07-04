"use client";

import React from "react";
import Link from "next/link";
import AdvertCard from "./advert-card";

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

const SimilarAdverts = () => {
  return (
    <div className="container mx-auto px-1 md:px-4">
      <div className="flex items-center space-x-4">
        <h2
          style={{ color: "var(--foreground)" }}
          className="text-white text-[30px] py-2 font-bold"
        >
          KATEGORİYE AİT İLANLAR
        </h2>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6">
        {AllAdverts.map((item, index) => (
          <div key={index} className="p-2 md:p-2">
            <AdvertCard data={item} link="/advert-detail" />
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center py-4">
        <Link href="/all-adverts">
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

export default SimilarAdverts;
