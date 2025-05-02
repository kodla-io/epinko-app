"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaRegEye } from "react-icons/fa6";

const Advert = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const leftTabs = [
    { id: "tab1", label: "Rise Online", items: Array(12).fill("") },
    { id: "tab2", label: "Pubg Mobile", items: Array(10).fill("") },
    { id: "tab3", label: "Valorant", items: Array(8).fill("") },
  ];

  const rightTabs = [
    { id: "tab4", label: "Rise Online", items: Array(6).fill("") },
    { id: "tab5", label: "Pubg Mobile", items: Array(5).fill("") },
    { id: "tab6", label: "Valorant", items: Array(4).fill("") },
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
      <div className="advert-tabs p-2 space-x-4 mb-4 flex justify-between">
        <div className="left-tabs flex space-x-1 md:space-x-4">
          {leftTabs.map((tab) => (
            <div
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`md:px-2 px-1 py-1 ${
                activeTab === tab.id
                  ? "advert-tab-active font-bold flex items-center"
                  : "advert-tab flex items-center"
              }`}
            >
              <img
                className="w-[40px] h-[40px] mr-2 rounded-md"
                src="https://placehold.co/100"
              />
              <span className="md:w-full w-[70px] text-sm md:text-md">
                {tab.label}
              </span>
            </div>
          ))}
        </div>
        <div className="right-tabs hidden md:flex ">
          {rightTabs.map((tab) => (
            <div
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-2 py-1 ${
                activeTab === tab.id
                  ? "advert-tab-active font-bold flex items-center mr-2"
                  : "advert-tab flex items-center  mr-2"
              }`}
            >
              <img
                className="w-[60px] h-[60px] rounded-md onject-cover"
                src="https://placehold.co/100"
              />
            </div>
          ))}
        </div>
      </div>

      {leftTabs.concat(rightTabs).map((tab) => (
        <div
          key={tab.id}
          className={`tab-content ${
            activeTab === tab.id ? "active" : "hidden"
          }`}
        >
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {tab.items.map((_, index) => (
              <div key={index} className="p-2 md:p-2">
                <Link href="#">
                  <div
                    className="p-2 rounded-t-md"
                    style={{
                      background:
                        "linear-gradient(to bottom, var(--success) 0%, var(--success) 20%, #28282A 40% , var(--advert-card-bg) 100%)",
                    }}
                  >
                    <div className="flex gap-[2px] w-full flex justify-center mb-2">
                      {"ÇOK SATAN".split("").map((char, index) => (
                        <span
                          key={index}
                          className="text-white font-bold text-sm animate-fade-in-up"
                          style={{
                            animationDelay: `${index * 100}ms`,
                            animationFillMode: "both",
                          }}
                        >
                          {char}
                        </span>
                      ))}
                    </div>

                    <div className="overflow-hidden">
                      <div className="relative">
                        <img
                          src="https://placehold.co/300x300"
                          alt={`Card ${index}`}
                          className="w-full h-full object-cover min-h-[220px] max-h-[220px] bg-gradient-to-tl rounded-md"
                        />
                        <div className="flex items-center py-1 px-2 absolute bottom-0 left-0 w-full bg-[#0000007a]">
                          <img
                            src="https://placehold.co/50x50"
                            alt="Seller"
                            className="w-6 h-6 rounded-md"
                          />
                          <div className="ml-2">
                            <p className="text-sm font-bold">Lorem Ipsum</p>
                          </div>
                        </div>
                        <div className="absolute bottom-0 right-0 p-2">
                          <img
                            src="https://placehold.co/50x50/000000/FFFFFF?text=Category"
                            alt="Category"
                            className="w-10 h-10 rounded-md"
                          />
                        </div>
                      </div>
                      <div className="text-white p-2 w-full">
                        <h3 className="text-sm font-bold clamp-2 max-h-[40px] min-h-[40px]">
                          LOREM IPSUM LOREM IPSUM
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center border-t border-t-[var(--advert-card-border)] bg-[var(--advert-card-bg)] rounded-b-md">
                    <div className="text-md font-bold text-white p-2">
                      199.90₺
                    </div>
                    <div className="p-2">
                      <div className="flex items-center rounded-full bg-[#20c65c33] text-[var(--success)] p-1">
                        <FaRegEye className="w-4 h-4 mr-1" />
                        <span className="text-[11px]">150</span>
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
        <Link href="/all-adverts">
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
    </div>
  );
};

export default Advert;
