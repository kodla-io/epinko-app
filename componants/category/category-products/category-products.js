"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useRouter } from "next/navigation";

const productList = [
  {
    id: 1,
    title: "Lorem Ipsum Dolar Sit Amet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 52.3,
    originalPrice: 58.8,
    stockAvailable: true,
    image: "https://placehold.co/100",
    isPopular: false,
  },
  {
    id: 2,
    title: "Lorem Ipsum Dolar Sit Amet",
    description: "Lorem ipsum dolor sit amet..",
    price: 52.3,
    originalPrice: 58.8,
    stockAvailable: false,
    image: "https://placehold.co/100",
    isPopular: true,
  },
  {
    id: 3,
    title: "Lorem Ipsum Dolar Sit Amet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 52.3,
    originalPrice: 58.8,
    stockAvailable: true,
    image: "https://placehold.co/100",
    isPopular: false,
  },
  {
    id: 4,
    title: "Lorem Ipsum Dolar Sit Amet",
    description: "Lorem ipsum dolor sit amet.",
    price: 52.3,
    originalPrice: 58.8,
    stockAvailable: false,
    image: "https://placehold.co/100",
    isPopular: false,
  },
  {
    id: 5,
    title: "Lorem Ipsum Dolar Sit Amet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 52.3,
    originalPrice: 58.8,
    stockAvailable: true,
    image: "https://placehold.co/100",
    isPopular: true,
  },
  {
    id: 6,
    title: "Lorem Ipsum Dolar Sit Amet",
    description: "Lorem ipsum dolor sit amet.",
    price: 52.3,
    originalPrice: 58.8,
    stockAvailable: false,
    image: "https://placehold.co/100",
    isPopular: false,
  },
];

const productList2 = [
  {
    id: 1,
    title: "Lorem Ipsum Dolar Sit Amet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 52.3,
    originalPrice: 58.8,
    stockAvailable: true,
    image: "https://placehold.co/100",
    isPopular: false,
  },
  {
    id: 4,
    title: "Lorem Ipsum Dolar Sit Amet",
    description: "Lorem ipsum dolor sit amet.",
    price: 52.3,
    originalPrice: 58.8,
    stockAvailable: false,
    image: "https://placehold.co/100",
    isPopular: false,
  },
  {
    id: 5,
    title: "Lorem Ipsum Dolar Sit Amet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 52.3,
    originalPrice: 58.8,
    stockAvailable: true,
    image: "https://placehold.co/100",
    isPopular: true,
  },
  {
    id: 6,
    title: "Lorem Ipsum Dolar Sit Amet",
    description: "Lorem ipsum dolor sit amet.",
    price: 52.3,
    originalPrice: 58.8,
    stockAvailable: false,
    image: "https://placehold.co/100",
    isPopular: false,
  },
];

const productList3 = [
  {
    id: 1,
    title: "Lorem Ipsum Dolar Sit Amet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 52.3,
    originalPrice: 58.8,
    stockAvailable: true,
    image: "https://placehold.co/100",
    isPopular: false,
  },
  {
    id: 2,
    title: "Lorem Ipsum Dolar Sit Amet",
    description: "Lorem ipsum dolor sit amet..",
    price: 52.3,
    originalPrice: 58.8,
    stockAvailable: false,
    image: "https://placehold.co/100",
    isPopular: true,
  },
];

const CategoryProducts = ({ title }) => {
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

  const [activeTab, setActiveTab] = useState("Tab1");
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  const handleBuy = (product) => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 1200);
  };

  return (
    <div className="p-4">
      {/* Popup */}
      {showPopup && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-bounce">
          Ürün sepete eklendi!
        </div>
      )}
      <div className="container m-auto">
        {title && (
          <div className="flex items-center space-x-4">
            <h2
              style={{ color: "var(--foreground)" }}
              className="text-white text-[30px] py-2 font-bold"
            >
              ÜRÜNLER
            </h2>
            <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
          </div>
        )}

        {/* Tabs */}
        <div className="flex flex-wrap md:flex-nowrap space-x-2 mb-4 p-2 bg-[var(--advert-list-bg)] rounded-lg w-full justify-center items-center">
          <button
            onClick={() => setActiveTab("Tab1")}
            className={`px-4 py-1 rounded-md w-full flex items-center gap-2 ${
              activeTab === "Tab1" ? "bg-[var(--success)] text-white" : ""
            }`}
          >
            <img
              src="https://placehold.co/100"
              className="w-8 h-8 rounded-full"
              alt="category"
            />
            Pubg Mobile E-pin
          </button>
          <button
            onClick={() => setActiveTab("Tab2")}
            className={`px-4 py-1 rounded-md w-full flex items-center gap-2 ${
              activeTab === "Tab2" ? "bg-[var(--success)] text-white" : ""
            }`}
          >
            <img
              src="https://placehold.co/100"
              className="w-8 h-8 rounded-full"
              alt="category"
            />
            Türkiye - ID Yükleme
          </button>
          <button
            onClick={() => setActiveTab("Tab3")}
            className={`px-4 py-1 rounded-md w-full flex items-center gap-2 ${
              activeTab === "Tab3" ? "bg-[var(--success)] text-white" : ""
            }`}
          >
            <img
              src="https://placehold.co/100"
              className="w-8 h-8 rounded-full"
              alt="category"
            />
            Gloval - ID Yükleme
          </button>
        </div>

        {/* İçerik */}
        {activeTab === "Tab1" && (
          <div>
            {productList.map((product) => (
              <div
                key={product.id}
                className={`grid grid-cols-1 md:grid-cols-11 gap-2 p-4 mb-4 rounded-lg relative ${
                  product.isPopular
                    ? "bg-gradient-to-r from-[var(--success)] to-transparent border border-green-500"
                    : "bg-[var(--advert-list-bg)] text-[var(--color)]"
                }`}
              >
                {product.isPopular && (
                  <div className="absolute top-[-5px] left-1/2 translate-x-[-50%] bg-[var(--success)] text-white rounded-lg px-4 py-1 text-xs font-bold flex items-center justify-center gap-2">
                    <FaStar />
                    <span>Çok Satan Ürün</span>
                  </div>
                )}
                <div className="md:col-span-8 flex items-start">
                  <img
                    className="w-20 h-20 rounded-lg"
                    src={product.image}
                    alt={product.title}
                  />
                  <div className="ml-4">
                    <h2 className="text-lg clamp-1">{product.title}</h2>
                    <p className="text-sm clamp-1">{product.description}</p>
                    <div className="flex items-center gap-1">
                      <div
                        className={`text-3xl font-semibold ${
                          product.isPopular
                            ? "text-white"
                            : "text-[var(--label7)]"
                        }`}
                      >
                        {product.price} ₺
                      </div>
                      <div className="line-through text-md">
                        {product.originalPrice} ₺
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-3 md:grid grid-cols-1 md:grid-cols-3 gap-2 flex md:justify-center justify-between md:mt-0 mt-2">
                  <div className="md:col-span-2 flex items-center md:justify-around justify-between lg:justify- flex-nowrap md:flex-wrap">
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
                  </div>
                  <div className="col-span-1 flex items-center justify-start">
                    {product.stockAvailable ? (
                      <div className="flex flex-wrap items-center">
                        <button
                          className="bg-[var(--success)] hover:opacity-80 text-white text-sm px-3 md:py-1 py-3 rounded mb-0 md:mb-2 flex flex-wrap items-center justify-center gap-2"
                          onClick={() => handleBuy(product)}
                        >
                          <FaShoppingCart className="w-6 h-6" />
                          Satın Al
                        </button>
                      </div>
                    ) : (
                      <div className="bg-[var(--alert)] text-white px-3 py-3 md:py-1 rounded">
                        Stokta Yok
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {activeTab === "Tab2" && (
          <div>
            {productList2.map((product) => (
              <div
                key={product.id}
                className={`grid grid-cols-1 md:grid-cols-11 gap-2 p-4 mb-4 rounded-lg relative ${
                  product.isPopular
                    ? "bg-gradient-to-r from-[var(--success)] to-transparent border border-green-500"
                    : "bg-[var(--advert-list-bg)] text-[var(--color)]"
                }`}
              >
                {product.isPopular && (
                  <div className="absolute top-[-5px] left-1/2 translate-x-[-50%] bg-[var(--success)] text-black rounded-lg px-4 py-1 text-xs font-bold flex items-center justify-center gap-2">
                    <FaStar />
                    <span>Çok Satan Ürün</span>
                  </div>
                )}
                <div className="md:col-span-8 flex items-start">
                  <img
                    className="w-20 h-20 rounded-lg"
                    src={product.image}
                    alt={product.title}
                  />
                  <div className="ml-4">
                    <h2 className="text-lg clamp-1">{product.title}</h2>
                    <p className="text-sm clamp-1">{product.description}</p>
                    <div className="flex items-center gap-1">
                      <div
                        className={`text-3xl font-semibold ${
                          product.isPopular
                            ? "text-white"
                            : "text-[var(--label7)]"
                        }`}
                      >
                        {product.price} ₺
                      </div>
                      <div className="line-through text-md">
                        {product.originalPrice} ₺
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-3 md:grid grid-cols-1 md:grid-cols-3 gap-2 flex md:justify-center justify-between md:mt-0 mt-2">
                  <div className="md:col-span-2 flex items-center md:justify-around justify-between lg:justify- flex-nowrap md:flex-wrap">
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
                  </div>
                  <div className="col-span-1 flex items-center justify-start">
                    {product.stockAvailable ? (
                      <div className="flex flex-wrap items-center">
                        <button
                          className="bg-[var(--success)] hover:opacity-80 text-white text-sm px-3 md:py-1 py-3 rounded mb-0 md:mb-2 flex flex-wrap items-center justify-center gap-2"
                          onClick={() => handleBuy(product)}
                        >
                          <FaShoppingCart className="w-6 h-6" />
                          Satın Al
                        </button>
                      </div>
                    ) : (
                      <div className="bg-[var(--alert)] text-white px-3 py-3 md:py-1 rounded">
                        Stokta Yok
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {activeTab === "Tab3" && (
          <div>
            {productList3.map((product) => (
              <div
                key={product.id}
                className={`grid grid-cols-1 md:grid-cols-11 gap-2 p-4 mb-4 rounded-lg relative ${
                  product.isPopular
                    ? "bg-gradient-to-r from-[var(--success)] to-transparent border border-green-500"
                    : "bg-[var(--advert-list-bg)] text-[var(--color)]"
                }`}
              >
                {product.isPopular && (
                  <div className="absolute top-[-5px] left-1/2 translate-x-[-50%] bg-[var(--success)] text-black rounded-lg px-4 py-1 text-xs font-bold flex items-center justify-center gap-2">
                    <FaStar />
                    <span>Çok Satan Ürün</span>
                  </div>
                )}
                <div className="md:col-span-8 flex items-start">
                  <img
                    className="w-20 h-20 rounded-lg"
                    src={product.image}
                    alt={product.title}
                  />
                  <div className="ml-4">
                    <h2 className="text-lg clamp-1">{product.title}</h2>
                    <p className="text-sm clamp-1">{product.description}</p>
                    <div className="flex items-center gap-1">
                      <div
                        className={`text-3xl font-semibold ${
                          product.isPopular
                            ? "text-white"
                            : "text-[var(--label7)]"
                        }`}
                      >
                        {product.price} ₺
                      </div>
                      <div className="line-through text-md">
                        {product.originalPrice} ₺
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-3 md:grid grid-cols-1 md:grid-cols-3 gap-2 flex md:justify-center justify-between md:mt-0 mt-2">
                  <div className="md:col-span-2 flex items-center md:justify-around justify-between lg:justify- flex-nowrap md:flex-wrap">
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
                  </div>
                  <div className="col-span-1 flex items-center justify-start">
                    {product.stockAvailable ? (
                      <div className="flex flex-wrap items-center">
                        <button
                          className="bg-[var(--success)] hover:opacity-80 text-white text-sm px-3 md:py-1 py-3 rounded mb-0 md:mb-2 flex flex-wrap items-center justify-center gap-2"
                          onClick={() => handleBuy(product)}
                        >
                          <FaShoppingCart className="w-6 h-6" />
                          Satın Al
                        </button>
                      </div>
                    ) : (
                      <div className="bg-[var(--alert)] text-white px-3 py-3 md:py-1 rounded">
                        Stokta Yok
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryProducts;
