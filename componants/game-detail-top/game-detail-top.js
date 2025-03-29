"use client";

import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { GiConfirmed, GiCubeforce } from "react-icons/gi";
import { CiClock2 } from "react-icons/ci";

const GameDetailTop = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
  };
  return (
    <div className="flex justify-center">
      <div className="container flex flex-col md:flex-row justify-between p-2 space-y-4 md:space-y-0">
        {/* İlk Kutu: Ürün Bilgileri */}
        <div className="flex-1 p-2">
          <div className="h-auto max-h-auto md:max-h-[425px] min-h-auto md:min-h-[425px] bg-[var(--advert-list-bg)] text-[var(--foreground)] p-4 relative rounded-lg">
            <div className="flex items-center space-x-4">
              <h2 className="text-white text-[30px] py-2 font-bold">
                ÜRÜN BİLGİLERİ
              </h2>
              <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
            </div>
            <h2 className="text-left text-lg font-bold mb-4">
              LEAGUE OF LEGENDS
            </h2>
            <p className="text-sm mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry Lorem Ipsum is simply dummy text of the printing and
              typesetting industry Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. simply dummy text of the
              printing and typesetting industry Lorem Ipsum is simply dummy text
              of the printing and typesetting industry. simply dummy text of the
              printing and typesetting industry Lorem Ipsum is simply dummy text
              of the printing and typesetting industry.
            </p>
            <div className="relative md:absolute md:bottom-[20px] w-full">
              <div className="flex justify-between w-full text-sm mb-2">
                <div className="w-1/2 flex">
                  <div className="bg-white p-1 rounded-full flex items-center justify-center w-6 h-6 mr-2">
                    <FaEye className="text-black text-xl" />
                  </div>
                  <span className="text-xs flex">100+ Görüntüleme</span>
                </div>
                <div className="w-1/2 flex">
                  <div className="bg-white p-1 rounded-full flex items-center justify-center w-6 h-6 mr-2">
                    <GiConfirmed className="text-black text-xl" />
                  </div>
                  <span className="text-xs flex">5000+ Satış</span>
                </div>
              </div>
              <div className="flex justify-between w-full text-sm">
                <div className="w-1/2 flex">
                  <div className="bg-white p-1 rounded-full flex items-center justify-center w-6 h-6 mr-2">
                    <CiClock2 className="text-black text-xl" />
                  </div>
                  <span className="text-xs flex">X Saat İçerisinde Teslim</span>
                </div>
                <div className="w-1/2 flex">
                  <div className="bg-white p-1 rounded-full flex items-center justify-center w-6 h-6 mr-2">
                    <GiCubeforce className="text-black text-xl" />
                  </div>
                  <span className="text-xs flex">5000+ Stok</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* İkinci Kutu: Görsel */}
        <div className="flex-1 p-2">
          <div className="h-auto max-h-auto md:max-h-[425px] min-h-auto md:min-h-[425px] bg-[var(--advert-list-bg)] text-[var(--foreground)] p-4 relative rounded-lg">
            <img
              src="https://placehold.co/200x70/000000/FFFFFF"
              className="absolute bottom-[20px] left-1/2 transform -translate-x-1/2"
            />
            <img
              src="https://placehold.co/350x300"
              alt="Game Picture"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Üçüncü Kutu: Satın Alma Bilgileri */}
        <div className="flex-1 p-2">
          <div className="h-auto max-h-auto md:max-h-[425px] min-h-auto md:min-h-[425px] bg-[var(--advert-list-bg)] text-[var(--foreground)] p-4 relative rounded-lg">
            <div className="flex items-center space-x-4">
              <h2 className="text-white text-[30px] py-2 font-bold">
                LEAGUE OF LEGENDS
              </h2>
              <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
            </div>
            <div className="flex items-center justify-between flex-nowrap">
              <button className="bg-orange-600 text-white px-3 py-1 mx-1 rounded text-xs w-full">
                %18 İndirim
              </button>
              <button className="bg-purple-600 text-white px-3 py-1 mx-1 rounded text-xs w-full">
                52.30 ₺
              </button>
              <button className="bg-red-600 text-white px-3 py-1 mx-1 rounded text-xs w-full">
                58.80 ₺
              </button>
            </div>
            <p className="text-sm my-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry Lorem Ipsum is simply dummy text of the printing and
              typesetting industr.
            </p>
            <div className="relative md:absolute md:bottom-[15px] md:left-[15px] md:right-[15px]">
              <div className="flex flex-nowrap items-center mb-5 justify-start">
                <div
                  style={{ color: "var(--success)" }}
                  className="text-[30px] mr-2"
                >
                  52.30 ₺
                </div>
                <div style={{ color: "var(--alert)" }} className="line-through">
                  58.80 ₺
                </div>
              </div>

              <div className="flex flex-nowrap items-center justify-between">
                <div
                  style={{
                    backgroundColor: "var(--background)",
                  }}
                  className="flex items-center p-2 rounded-lg"
                >
                  <button
                    style={{
                      backgroundColor: "var(--advert-list-bg)",
                    }}
                    className="py-2 px-4 rounded-l-lg focus:outline-none"
                    onClick={handleDecrement}
                  >
                    –
                  </button>
                  <input
                    type="text"
                    className="text-center w-12 mx-2 focus:outline-none"
                    value={count}
                    readOnly
                  />
                  <button
                    style={{
                      backgroundColor: "var(--advert-list-bg)",
                    }}
                    className="py-2 px-4 rounded-r-lg focus:outline-none"
                    onClick={handleIncrement}
                  >
                    +
                  </button>
                </div>
                <div className="p-1">
                  <button className="bg-blue-600 text-white px-3 py-1 rounded">
                    Sepete Ekle
                  </button>
                </div>
                <div className="p-1">
                  <button className="bg-green-600 text-white px-3 py-1 rounded">
                    Sepete Ekle
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetailTop;
