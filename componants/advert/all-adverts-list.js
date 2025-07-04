"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineSafety } from "react-icons/ai";
import StreamerSingle from "../streamers/streamers-single";
import Comments from "../texts/comments";
import ImageTextScrollComponent from "../texts/explanation";
import HowToCreateAd from "../advert/how-to-create-an-ad";
import HowToBuyAd from "../advert/how-to-buy";
import WhatIsReliableSeller from "../advert/What-is-a-reliable-seller";
import AdvertCard from "./advert-card";

const AllAdvertsList = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabs = [
    "Tüm İlanlar",
    "İlan Nasıl Oluşturulur?",
    "Nasıl Satın Alınır?",
    "Güvenilir Satıcı Nedir?",
  ];

  const sampleArray = [
    {
      title: "PUBG Mobile UC",
      price: 199.9,
      viewCount: 150,
      isVitrin: true,
      vitrinText: "ÇOK SATAN",
      vitrinColor: "var(--label1)",
      isAnimated: true,
      animatedText: "ÇOK SATAN",
      image: "https://placehold.co/300x300",
      categoryImage: "https://placehold.co/50x50/000000/FFFFFF?text=Oyun",
      sellerName: "Epinko",
      sellerImage: "https://placehold.co/50x50",
      animateBg: "var(--success)",
    },
    {
      title: "Free Fire Elmas",
      price: 99.9,
      viewCount: 85,
      isVitrin: true,
      vitrinText: "YENİ",
      vitrinColor: "var(--label2)",
      isAnimated: true,
      animatedText: "ÇOK SATAN",
      image: "https://placehold.co/300x300",
      categoryImage: "https://placehold.co/50x50/000000/FFFFFF?text=Free",
      sellerName: "FireStore",
      sellerImage: "https://placehold.co/50x50",
      animateBg: "var(--success)",
    },
    {
      title: "Steam Cüzdan Kodu",
      price: 50.0,
      viewCount: 240,
      isVitrin: false,
      vitrinText: "İNDİRİM",
      vitrinColor: "var(--label1)",
      isAnimated: true,
      animatedText: "ÇOK SATAN",
      image: "https://placehold.co/300x300",
      categoryImage: "https://placehold.co/50x50/000000/FFFFFF?text=Steam",
      sellerName: "GamePlus",
      sellerImage: "https://placehold.co/50x50",
      animateBg: "var(--success)",
    },
    {
      title: "Netflix Premium",
      price: 35.0,
      viewCount: 120,
      isVitrin: true,
      vitrinText: "İNDİRİM",
      vitrinColor: "var(--label3)",
      isAnimated: true,
      animatedText: "ÇOK SATAN",
      image: "https://placehold.co/300x300",
      categoryImage: "https://placehold.co/50x50/000000/FFFFFF?text=Film",
      sellerName: "Netshop",
      sellerImage: "https://placehold.co/50x50",
      animateBg: "var(--label5)",
    },
    {
      title: "Roblox Robux",
      price: 125.0,
      viewCount: 180,
      isVitrin: false,
      vitrinText: "İNDİRİM",
      vitrinColor: "var(--label1)",
      isAnimated: true,
      animatedText: "ÇOK SATAN",
      image: "https://placehold.co/300x300",
      categoryImage: "https://placehold.co/50x50/000000/FFFFFF?text=Robux",
      sellerName: "BlockStore",
      sellerImage: "https://placehold.co/50x50",
      animateBg: "var(--success)",
    },
    {
      title: "Spotify Aile Planı",
      price: 29.9,
      viewCount: 300,
      isVitrin: true,
      vitrinText: "POPÜLER",
      vitrinColor: "var(--label4)",
      isAnimated: true,
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
      isAnimated: true,
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
      isAnimated: true,
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
      isAnimated: true,
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
      isAnimated: true,
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
      isAnimated: true,
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
      isAnimated: true,
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
      isAnimated: true,
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
      isAnimated: true,
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
      isAnimated: true,
      animatedText: "ÇOK SATAN",
      image: "https://placehold.co/300x300",
      categoryImage: "https://placehold.co/50x50/000000/FFFFFF?text=Play",
      sellerName: "PlayZone",
      sellerImage: "https://placehold.co/50x50",
      animateBg: "var(--success)",
    },
  ];

  return (
    <div id="all-adverts" className="container mx-auto">
      <div className="advert-tabs space-x-4">
        <div className="flex justify-between items-center w-full">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`text-center w-full rounded-sm ${
                activeTab === index && "bg-[var(--advert-list-bg)]"
              }`}
              onClick={() => handleTabClick(index)}
            >
              <h2
                className={`w-full min-w-[200px] p-3 rounded-md cursor-pointer ${
                  activeTab === index ? "font-bold" : "font-normal"
                }`}
              >
                {tab}
              </h2>
            </div>
          ))}
        </div>
      </div>

      <div className="tab-content active py-4">
        {activeTab === 0 && (
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {sampleArray.map((item, index) => (
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
            <div className="py-8">
              <StreamerSingle title="YAYINCILARIMIZ" />
            </div>
            <div
              style={{
                backgroundColor: "var(--advert-list-bg)",
              }}
              className="p-2 md:p-8 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <h2
                  style={{ color: "var(--foreground)" }}
                  className="text-white text-[30px] py-2 font-bold"
                >
                  YORUMLAR
                </h2>
                <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
              </div>
              <Comments />
            </div>
            <div className="p-2 md:py-8">
              <ImageTextScrollComponent />
            </div>
          </div>
        )}
        {activeTab === 1 && (
          <div>
            <HowToCreateAd />
          </div>
        )}
        {activeTab === 2 && (
          <div>
            <HowToBuyAd />
          </div>
        )}
        {activeTab === 3 && (
          <div>
            <WhatIsReliableSeller />
          </div>
        )}
      </div>
    </div>
  );
};

export default AllAdvertsList;
