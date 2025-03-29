"use client";
import React, { useState } from "react";

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
];

const CategoryProducts = () => {
  const [counts, setCounts] = useState(
    productList.reduce((acc, product) => {
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
    <div className="p-4">
      <div className="container m-auto">
        <div className="flex items-center space-x-4">
          <h2
            style={{ color: "var(--foreground)" }}
            className="text-white text-[30px] py-2 font-bold"
          >
            ÜRÜNLER
          </h2>
          <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
        </div>
        {productList.map((product) => (
          <div
            style={{
              backgroundColor: "var(--advert-list-bg)",
              color: "var(--color)",
            }}
            key={product.id}
            className="grid grid-cols-1 md:grid-cols-11 gap-2 p-4 mb-4 rounded-lg"
          >
            <div className="md:col-span-4 flex items-start">
              <img
                className="w-25 h-25 rounded-lg"
                src={product.image}
                alt={product.title}
              />
              <div className="ml-4">
                <h2 className="text-lg">{product.title}</h2>
                <p className="text-sm">{product.description}</p>
              </div>
            </div>
            <div className="md:col-span-2 flex items-center justify-between lg:justify- flex-nowrap md:flex-wrap">
              <button className="bg-orange-600 text-white px-3 py-1 mx-1 rounded text-xs w-full">
                %10 İndirim
              </button>
              <button className="bg-purple-600 text-white px-3 py-1 mx-1 rounded text-xs w-full">
                Lorem Ipsum
              </button>
              <button className="bg-red-600 text-white px-3 py-1 mx-1 rounded text-xs w-full">
                Popüler
              </button>
            </div>
            <div className="md:col-span-4 flex items-center md:justify-around justify-between lg:justify- flex-nowrap md:flex-wrap">
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
                <div
                  style={{ color: "var(--success)" }}
                  className="w-full text-[30px]"
                >
                  {product.price} ₺
                </div>
                <div className="w-full line-through">
                  {product.originalPrice} ₺
                </div>
              </div>
            </div>
            <div className="col-span-1 flex items-center justify-start">
              {product.stockAvailable ? (
                <div className="flex flex-wrap items-center">
                  <button className="bg-blue-600 text-white px-3 py-1 rounded mb-0 md:mb-2">
                    Sepete Ekle
                  </button>
                  <button className="bg-green-600 text-white px-3 py-1 rounded ml-2 md:ml-0">
                    Sepete Ekle
                  </button>
                </div>
              ) : (
                <button className="bg-red-600 text-white px-3 py-1 rounded">
                  Stokta Yok
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
