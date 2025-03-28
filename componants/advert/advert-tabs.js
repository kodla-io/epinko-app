"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineSafety } from "react-icons/ai";

const Advert = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    { id: "tab1", label: "Rise Online", items: Array(12).fill("") },
    { id: "tab2", label: "Pubg Mobile", items: Array(10).fill("") },
    { id: "tab3", label: "Valorant", items: Array(8).fill("") },
    { id: "tab4", label: "TFT", items: Array(1).fill("") },
    { id: "tab5", label: "Pubg Mobile", items: Array(2).fill("") },
    { id: "tab6", label: "LOL", items: Array(3).fill("") },
    { id: "tab7", label: "Zula", items: Array(4).fill("") },
    { id: "tab8", label: "Roblox", items: Array(5).fill("") },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center space-x-4">
        <h2
          style={{ color: "var(--foreground)" }}
          className="text-white text-[30px] py-2 font-bold"
        >
          VİTRİN İLANLAR
        </h2>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
      </div>
      <div className="advert-tabs space-x-4 mb-4">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 ${
              activeTab === tab.id
                ? "text-blue-500 font-bold border-b-3 border-orange-500 flex items-center"
                : "text-gray-500 flex items-center"
            }`}
          >
            <img
              className="w-[30px] h-[30px] mr-2 rounded-md"
              src="https://placehold.co/50"
            />
            {tab.label}
          </div>
        ))}
      </div>

      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`tab-content ${activeTab === tab.id ? "active" : ""}`}
        >
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {tab.items.map((_, index) => (
              <div key={index} className="p-2 md:p-2">
                <Link href="#">
                  <div className="p-1 glow">
                    <div className="relative min-h-[300px] max-h-[300px] overflow-hidden glow-inside">
                      <div className="absolute top-0 left-0 flex flex-col space-y-1 p-2">
                        <div className="bg-orange-500 text-white text-[7px] px-1 p-1 px-2 rounded-[10px]">
                          <span className="p-0 m-0">LOREM IPSUM</span>
                        </div>
                        <div className="bg-blue-700 text-white text-[7px] px-1 p-1 px-2 rounded-[10px]">
                          <span className="p-0 m-0">LOREM IPSUM</span>
                        </div>
                        <div className="bg-red-700 text-white text-[7px] px-1 p-1 px-2 rounded-[10px]">
                          <span className="p-0 m-0">LOREM IPSUM</span>
                        </div>
                      </div>
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
                          background:
                            "linear-gradient(to top, rgba(0, 0, 0, 0.7) 70%, transparent)",
                        }}
                      >
                        <h3 className="text-md font-bold">
                          LOREM IPSUM LOREM IPSUM
                        </h3>
                        <div className="flex justify-between items-center mt-2">
                          <div className="flex items-center">
                            <img
                              src="https://placehold.co/50x50"
                              alt="Seller"
                              className="w-8 h-8 rounded-full"
                            />
                            <div className="ml-2">
                              <p className="text-[8px] font-bold">
                                Lorem Ipsum
                              </p>
                              <p className="text-[8px] text-gray-400">
                                GÜVENİLİR SATICI
                              </p>
                              <p className="text-[8px] text-yellow-500">
                                2 BAŞARILI İŞLEM
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
        </div>
      ))}

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

export default Advert;
