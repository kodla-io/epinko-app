"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TiDelete } from "react-icons/ti";

const basketList = [
  {
    id: 1,
    title: "60 UC Pubg Mobile",
    description: "Pubg Mobile",
    price: 52.3,
    originalPrice: 58.8,
    stockAvailable: true,
    image: "https://placehold.co/100",
  },
  {
    id: 2,
    title: "60 UC Pubg Mobile",
    description: "Pubg Mobile",
    price: 52.3,
    originalPrice: 58.8,
    stockAvailable: false,
    image: "https://placehold.co/100",
  },
  {
    id: 3,
    title: "60 UC Pubg Mobile",
    description: "Pubg Mobile",
    price: 52.3,
    originalPrice: 58.8,
    stockAvailable: true,
    image: "https://placehold.co/100",
  },
  {
    id: 4,
    title: "60 UC Pubg Mobile",
    description: "Pubg Mobile",
    price: 52.3,
    originalPrice: 58.8,
    stockAvailable: false,
    image: "https://placehold.co/100",
  },
];

const Basket = () => {
  const [counts, setCounts] = useState(
    basketList.reduce((acc, product) => {
      acc[product.id] = 1;
      return acc;
    }, {})
  );

  const handleIncrement = (id) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: prevCounts[id] + 1,
    }));
  };

  const handleDecrement = (id) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: prevCounts[id] > 1 ? prevCounts[id] - 1 : 1,
    }));
  };
  return (
    <div className="container m-auto">
      <div className="flex flex-col md:flex-row w-full">
        {/* Sol Kısım */}
        <div className="md:w-6/9 w-full ">
          <div className="p-4">
            <div className="container m-auto">
              {basketList.map((product) => (
                <div
                  style={{
                    backgroundColor: "var(--advert-list-bg)",
                    color: "var(--color)",
                  }}
                  key={product.id}
                  className="grid grid-cols-1 md:grid-cols-11 gap-2 p-4 mb-4 rounded-lg relative"
                >
                  <div className="md:col-span-4 flex items-start">
                    <img
                      className="w-15 h-15 rounded-lg"
                      src={product.image}
                      alt={product.title}
                    />
                    <div className="ml-4">
                      <h2 className="text-lg">{product.title}</h2>
                      <p className="text-sm">{product.description}</p>
                    </div>
                  </div>

                  <div className="md:col-span-7 flex items-center md:justify-around justify-between lg:justify- flex-nowrap md:flex-wrap">
                    <div className="md:col-span-2 flex flex-wrap items-center justify-center text-center space-x-2">
                      <p className="p-0 m-0 text-[12px] font-normal">
                        BİRİM FİYAT
                      </p>
                      <div
                        style={{ color: "var(--success)" }}
                        className="w-full text-[20px] md:text-[30px]"
                      >
                        <p>{product.price} ₺</p>
                      </div>
                    </div>
                    <div className="md:col-span-2 flex items-center justify-center">
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
                          onClick={() => handleDecrement(product.id)}
                        >
                          –
                        </button>
                        <input
                          type="text"
                          className="text-center w-12 mx-2 focus:outline-none"
                          value={counts[product.id]}
                          readOnly
                        />
                        <button
                          style={{
                            backgroundColor: "var(--advert-list-bg)",
                          }}
                          className="py-2 px-4 rounded-r-lg focus:outline-none"
                          onClick={() => handleIncrement(product.id)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="md:col-span-2 flex flex-wrap items-center justify-center text-center space-x-2">
                      <p className="p-0 m-0 text-[12px] font-normal">
                        TOPLAM FİYAT
                      </p>
                      <div
                        style={{ color: "var(--success)" }}
                        className="w-full text-[20px] md:text-[30px]"
                      >
                        <p>{product.price} ₺</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 flex items-center justify-end">
                    <button className="bg-[var(--alert)] text-white p-1 rounded-full">
                      <TiDelete className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sağ Kısım */}
        <div className="md:w-3/9 w-full">
          <div className="p-4 rounded-md text-[var(--foreground)]">
            <div className="mb-6 bg-[var(--advert-list-bg)] p-4 rounded-md">
              <h2 className="text-xl font-bold text-orange-400">
                SİPARİŞ ÖZETİ
              </h2>
              <div className="flex justify-between mt-2">
                <span>Ürün Adeti</span>
                <span className="font-bold">4 Adet</span>
              </div>
              <div className="flex justify-between mt-2">
                <span>Kupon Kullan</span>
                <span className="font-bold">ysg11</span>
              </div>
              <div className="flex justify-between mt-2 border-t border-gray-600 pt-2">
                <span>TOPLAM FİYAT</span>
                <span>
                  <span className="line-through text-xs font-normal">58.80 ₺</span>
                  <span className="font-bold text-green-400 ml-2">52.30 ₺</span>
                </span>
              </div>
              <div className="flex justify-between mt-4">
                <Link href="/">
                  <button className="bg-green-500 text-white px-4 py-2 rounded-md">
                    Alışverişe Devam Et
                  </button>
                </Link>
                <Link href="/">
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-md">
                    Siparişi Tamamla
                  </button>
                </Link>
              </div>
            </div>

            <div className="bg-[var(--advert-list-bg)] p-4 rounded-md">
              <h2 className="text-xl font-bold text-orange-400">
                LOREM IPSUM DOLOR SIT AMET
              </h2>
              <div className="mt-4">
                <div className="flex items-start mb-2">
                  <span className="bg-[var(--label12)] text-white min-w-[40px] min-h-[40px] flex justify-center items-center rounded-full mr-2 ">
                    !
                  </span>
                  <p className="text-[12px]">
                    Sollicitudin nibh sit amet commodo nulla facilisi nullam
                    vehicula. Viverra adipiscing at in tellus integer feugiat
                    scelerisque varius morbi.
                  </p>
                </div>
                <div className="flex items-start mb-2">
                  <span className="bg-[var(--label4)] text-white min-w-[40px] min-h-[40px] flex justify-center items-center rounded-full mr-2">
                    !
                  </span>
                  <p className="text-[12px]">
                    Nulla facilisi nullam vehicula ipsum a arcu cursus vitae
                    congue. Tortor dignissim convallis aenean et tortor at
                    risus.
                  </p>
                </div>
                <div className="flex items-start mb-2">
                  <span className="bg-[var(--label7)] text-white min-w-[40px] min-h-[40px] flex justify-center items-center rounded-full mr-2">
                    !
                  </span>
                  <p className="text-[12px]">
                    Nulla facilisi nullam vehicula ipsum a arcu cursus vitae
                    congue. Tortor dignissim convallis aenean et tortor at
                    risus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
