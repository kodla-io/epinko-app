"use client";

import React, { useState } from "react";
import Link from "next/link";
// import { AiOutlineSafety } from "react-icons/ai";

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
              <span className="md:w-full w-[70px] text-sm md:text-md">{tab.label}</span>
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
                  <div className="p-1 glow">
                    <div className="relative min-h-[300px] max-h-[300px] overflow-hidden glow-inside">
                      <div className="absolute top-0 left-0 grid flex-cols md:grid-cols-3 w-full space-y-1 p-1">
                        <div className="">
                          <span className="bg-orange-500 text-white text-[7px] p-2 rounded-[10px]">
                            LOREM IPSUM
                          </span>
                        </div>
                        <div className="">
                          <span className="bg-blue-700 text-white text-[7px] p-2 rounded-[10px]">
                            LOREM IPSUM
                          </span>
                        </div>
                        <div className="">
                          <span className="bg-red-700 text-white text-[7px] p-2 rounded-[10px]">
                            LOREM IPSUM
                          </span>
                        </div>
                      </div>
                      {/* <div className="absolute top-2 right-2">
                        <AiOutlineSafety className="w-8 h-8" />
                      </div> */}
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
                        <h3 className="text-md font-bold clamp-2 max-h-[48px] min-h-[48px]">
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
                              <p className="text-[10px] font-bold">
                                Lorem Ipsum
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
