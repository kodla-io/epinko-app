"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineSafety } from "react-icons/ai";
import StreamerSingle from "../streamers/streamers-single";
import Comments from "../texts/comments";
import ImageTextScrollComponent from "../texts/explanation";
import HowToCreateAd from "../advert/how-to-create-an-ad"
import HowToBuyAd from "../advert/how-to-buy"
import WhatIsReliableSeller from "../advert/What-is-a-reliable-seller"

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
  const AllAdverts = [
    { title: "PUBG Mobile", isVitrin: true, vitrinColor: "var(--label1)" },
    { title: "Fortnite", isVitrin: false, vitrinColor: "var(--label1)" },
    { title: "Minecraft", isVitrin: false, vitrinColor: "var(--label2)" },
    { title: "Call of Duty", isVitrin: false, vitrinColor: "var(--label1)" },
    { title: "Apex Legends", isVitrin: true, vitrinColor: "var(--label3)" },
    { title: "Valorant", isVitrin: false, vitrinColor: "var(--label1)" },
    { title: "Among Us", isVitrin: true, vitrinColor: "var(--label4)" },
    { title: "Genshin Impact", isVitrin: false, vitrinColor: "var(--label1)" },
    {
      title: "League of Legends",
      isVitrin: false,
      vitrinColor: "var(--label5)",
    },
    { title: "Dota 2", isVitrin: false, vitrinColor: "var(--label4)" },
    { title: "CS:GO", isVitrin: true, vitrinColor: "var(--label6)" },
    { title: "Rocket League", isVitrin: true, vitrinColor: "var(--label1)" },
    { title: "Overwatch", isVitrin: false, vitrinColor: "var(--label7)" },
    { title: "FIFA 21", isVitrin: false, vitrinColor: "var(--label1)" },
    { title: "Cyberpunk 2077", isVitrin: true, vitrinColor: "var(--label8)" },
    { title: "Red Dead Online", isVitrin: false, vitrinColor: "var(--label1)" },
    { title: "Warframe", isVitrin: true, vitrinColor: "var(--label9)" },
    { title: "Rust", isVitrin: false, vitrinColor: "var(--label1)" },
    { title: "Fall Guys", isVitrin: true, vitrinColor: "var(--label10)" },
    { title: "The Witcher 3", isVitrin: true, vitrinColor: "var(--label7)" },
  ];
  return (
    <div id="all-adverts" className="container mx-auto">
      <div className="advert-tabs space-x-4">
        <div className="flex justify-between items-center w-full">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`text-center w-full rounded-sm ${
                activeTab === index && "bg-gray-700"
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
              {AllAdverts.map((game, index) => (
                <div key={index} className="p-2 md:p-2">
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
                          <h3 className="text-md font-bold clamp-1">{game.title}</h3>
                          <div className="flex justify-between items-center mt-2">
                            <div className="flex items-center">
                              <img
                                src="https://placehold.co/50x50"
                                alt="Seller"
                                className="w-8 h-8 rounded-full"
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
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center py-4">
              <Link href="/all-games">
                <button
                  style={{
                    // backgroundColor: "var(--btn-bg)",
                    color: "var(--btn-color)",
                  }}
                  className="px-6 py-2 text-white rounded-lg shadow-lg transition duration-300 border-glow"
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
            <div
              className="p-2 md:py-8"
            >
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
