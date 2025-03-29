"use client";

import React from "react";
import Comments from "../../componants/comments/comments";

const productList = [
  {
    id: 1,
    title: "Lorem Ipsum Dolar Sit Amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 52.3,
    originalPrice: 58.8,
    stockAvailable: true,
    image: "https://placehold.co/100",
  },
  {
    id: 2,
    title: "Lorem Ipsum Dolar Sit Amet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 52.3,
    originalPrice: 58.8,
    stockAvailable: false,
    image: "https://placehold.co/100",
  },
  {
    id: 3,
    title: "Lorem Ipsum Dolar Sit Amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 52.3,
    originalPrice: 58.8,
    stockAvailable: true,
    image: "https://placehold.co/100",
  },
  {
    id: 4,
    title: "Lorem Ipsum Dolar Sit Amet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 52.3,
    originalPrice: 58.8,
    stockAvailable: false,
    image: "https://placehold.co/100",
  },
  {
    id: 1,
    title: "Lorem Ipsum Dolar Sit Amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 52.3,
    originalPrice: 58.8,
    stockAvailable: true,
    image: "https://placehold.co/100",
  },
  {
    id: 2,
    title: "Lorem Ipsum Dolar Sit Amet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 52.3,
    originalPrice: 58.8,
    stockAvailable: false,
    image: "https://placehold.co/100",
  },
  {
    id: 3,
    title: "Lorem Ipsum Dolar Sit Amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 52.3,
    originalPrice: 58.8,
    stockAvailable: true,
    image: "https://placehold.co/100",
  },
  {
    id: 4,
    title: "Lorem Ipsum Dolar Sit Amet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 52.3,
    originalPrice: 58.8,
    stockAvailable: false,
    image: "https://placehold.co/100",
  },
];

const GameProducts = () => {
  return (
    <div className="p-4">
      <div className="container m-auto">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          {/* Sol Kısım */}
          <div
            style={{
              backgroundColor: "var(--advert-list-bg)",
              color: "var(--color)",
            }}
            className="flex-none p-4 rounded-lg w-full md:w-1/2"
          >
            <div className="flex items-center space-x-4">
              <h2
                style={{ color: "var(--foreground)" }}
                className="text-white text-[30px] py-2 font-bold"
              >
                BENZER ÜRÜNLER
              </h2>
              <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
            </div>
            <div className="flex flex-col p-4 min-h-[650px] max-h-[650px] overflow-y-scroll overflow-hidden">
              {productList.map((product, index) => (
                <div
                  style={{
                    backgroundColor: "var(--advert-list-bg)",
                    color: "var(--color)",
                  }}
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-11 gap-2 p-4 mb-4 rounded-lg"
                >
                  <div className="md:col-span-8 flex items-start">
                    <img
                      className="w-25 h-20 rounded-lg"
                      src={product.image}
                      alt={product.title}
                    />
                    <div className="ml-4">
                      <h2 className="text-[25px]">{product.title}</h2>
                      <div className="md:flex hidden items-center justify-between flex-nowrap">
                        <button className="bg-orange-600 text-white px-3 py-1 mx-1 rounded text-xs">
                          %10 İndirim
                        </button>
                        <button className="bg-purple-600 text-white px-3 py-1 mx-1 rounded text-xs">
                          Lorem Ipsum
                        </button>
                        <button className="bg-red-600 text-white px-3 py-1 mx-1 rounded text-xs">
                          Popüler
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-3 flex items-center md:justify-around justify-between flex-nowrap md:flex-wrap">
                    <div className="md:hidden flex items-center justify-between flex-nowrap">
                      <button className="bg-orange-600 text-white px-3 py-1 mx-1 rounded text-xs">
                        %10 İndirim
                      </button>
                      <button className="bg-purple-600 text-white px-3 py-1 mx-1 rounded text-xs">
                        Lorem Ipsum
                      </button>
                      <button className="bg-red-600 text-white px-3 py-1 mx-1 rounded text-xs">
                        Popüler
                      </button>
                    </div>
                    <div className="flex flex-wrap items-center justify-end text-end space-x-2">
                      <div
                        style={{ color: "var(--alert)" }}
                        className="w-full line-through"
                      >
                        {product.originalPrice} ₺
                      </div>
                      <div
                        style={{ color: "var(--success)" }}
                        className="w-full text-[30px]"
                      >
                        {product.price} ₺
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sağ Kısım */}
          <div
            style={{
              backgroundColor: "var(--advert-list-bg)",
              color: "var(--color)",
            }}
            className="flex-none p-4 rounded-lg  w-full md:w-1/2"
          >
            <div className="flex items-center space-x-4">
              <h2
                style={{ color: "var(--foreground)" }}
                className="text-white text-[30px] py-2 font-bold"
              >
                DEĞERLENDİRMELER
              </h2>
              <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
            </div>
            <div className="min-h-[650px] max-h-[650px] overflow-y-scroll overflow-hidden">
              <Comments />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameProducts;
