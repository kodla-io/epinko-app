"use client";

import React, { useState } from "react";
import Link from "next/link";

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

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {tabs
          .find((tab) => tab.id === activeTab)
          .items.map((_, index) => (
            <div key={index} className="p-2 md:p-2">
              <Link href="#">
                <div className="p-1 glow">
                  <div className="relative min-h-[300px] max-h-[300px] overflow-hidden glow-inside">
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
                            <p className="text-[8px] font-bold">LoremIpsum</p>
                            <p className="text-[8px] text-gray-400">
                              GÜVENİLİR
                            </p>
                            <p className="text-[8px] text-yellow-500">
                              2 BAŞARILI
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
        <button className="px-6 py-2 text-white rounded-full border border-orange-500 shadow-lg hover:bg-orange-800 transition duration-300">
          Tümünü Görüntüle
        </button>
      </div>
    </div>
  );
};

export default Advert;
