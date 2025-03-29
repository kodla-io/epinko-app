"use client";

import React from "react";
import Link from "next/link";

const GameDetailAdvert = () => {
  const items = Array(6).fill("");

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
        {items.map((_, index) => (
          <div key={index} className="p-2 md:p-2">
            <Link href="#">
              <div className="relative min-h-[300px] max-h-[300px] overflow-hidden rounded-lg">
                <div className="absolute top-0 left-0 flex flex-col space-y-1 p-2">
                  <div className="bg-orange-500 text-white text-[7px] px-1 p-1 px-2 rounded-[10px]">
                    <span className="p-0 m-0">LOREM IPSUM</span>
                  </div>
                  <div className="bg-blue-700 text-white text-[7px] px-1 p-1 px-2 rounded-[10px]">
                    <span className="p-0 m-0">LOREM IPSUM</span>
                  </div>
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
                      "linear-gradient(to top, rgba(0, 0, 0, 0.7) 50%, transparent)",
                  }}
                >
                  <p className="text-[11px]">
                    Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                  </p>
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
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center py-4">
        <Link href="/all-games">
          <button
            style={{
              backgroundColor: "var(--btn-bg)",
              color: "var(--btn-color)",
            }}
            className="px-6 py-2 text-white rounded-lg shadow-lg transition duration-300 glow-on-hover"
          >
            DAHA FAZLA GÖRÜNTÜLE
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GameDetailAdvert;
