"use client";

import React, { useState } from "react";
import { FaSearch, FaTwitch } from "react-icons/fa";
import Link from "next/link";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const popularStreamers = [
  {
    image: "https://placehold.co/300",
    name: "ozlemyilmaz",
  },
  {
    image: "https://placehold.co/300",
    name: "ozlemyilmaz",
  },
  {
    image: "https://placehold.co/300",
    name: "ozlemyilmaz",
  },
  {
    image: "https://placehold.co/300",
    name: "ozlemyilmaz",
  },
  {
    image: "https://placehold.co/300",
    name: "ozlemyilmaz",
  },
  {
    image: "https://placehold.co/300",
    name: "ozlemyilmaz",
  },
  {
    image: "https://placehold.co/300",
    name: "ozlemyilmaz",
  },
  {
    image: "https://placehold.co/300",
    name: "ozlemyilmaz",
  },
  {
    image: "https://placehold.co/300",
    name: "ozlemyilmaz",
  },
  {
    image: "https://placehold.co/300",
    name: "ozlemyilmaz",
  },
  {
    image: "https://placehold.co/300",
    name: "ozlemyilmaz",
  },
  {
    image: "https://placehold.co/300",
    name: "ozlemyilmaz",
  },
  {
    image: "https://placehold.co/300",
    name: "ozlemyilmaz",
  },
  {
    image: "https://placehold.co/300",
    name: "ozlemyilmaz",
  },
  {
    image: "https://placehold.co/300",
    name: "ozlemyilmaz",
  },
  {
    image: "https://placehold.co/300",
    name: "ozlemyilmaz",
  },
  {
    image: "https://placehold.co/300",
    name: "ozlemyilmaz",
  },
  {
    image: "https://placehold.co/300",
    name: "ozlemyilmaz",
  },
  {
    image: "https://placehold.co/300",
    name: "ozlemyilmaz",
  },
  {
    image: "https://placehold.co/300",
    name: "ozlemyilmaz",
  },
  {
    image: "https://placehold.co/300",
    name: "ozlemyilmaz",
  },
  {
    image: "https://placehold.co/300",
    name: "ozlemyilmaz",
  },
  {
    image: "https://placehold.co/300",
    name: "ozlemyilmaz",
  },
  {
    image: "https://placehold.co/300",
    name: "ozlemyilmaz",
  },
];

const newStreamers = [
  {
    image: "https://placehold.co/300",
    name: "ozlemyilmaz",
  },
  {
    image: "https://placehold.co/300",
    name: "ozlemyilmaz",
  },
  {
    image: "https://placehold.co/300",
    name: "ozlemyilmaz",
  },
  {
    image: "https://placehold.co/300",
    name: "ozlemyilmaz",
  },
  {
    image: "https://placehold.co/300",
    name: "ozlemyilmaz",
  },
  {
    image: "https://placehold.co/300",
    name: "ozlemyilmaz",
  },
  {
    image: "https://placehold.co/300",
    name: "ozlemyilmaz",
  },
  {
    image: "https://placehold.co/300",
    name: "ozlemyilmaz",
  },
  {
    image: "https://placehold.co/300",
    name: "ozlemyilmaz",
  },
];

const AllStreamersList = () => {
  const [activeTab, setActiveTab] = useState("populer");

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 8;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Burada başka bir şey yapılabilir: API çağrısı vs.
  };

  return (
    <div className="container mx-auto my-3 flex flex-col items-center">
      {/* Üst bar */}
      <div className="w-full flex flex-wrap justify-between items-between gap-2 p-2 rounded-xl">
        {/* Arama */}
        <div className="flex items-center bg-gradient-to-r from-purple-700 to-indigo-800 rounded-full px-3 py-1 w-full sm:w-auto">
          <FaSearch className="w-4 h-4 text-white mr-2" />
          <input
            type="text"
            placeholder="Yayıncı Ara"
            className="bg-transparent text-white placeholder-white outline-none w-full"
          />
        </div>

        {/* Tablar */}
        <div className="flex gap-2 mx-auto">
          <button
            onClick={() => setActiveTab("populer")}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              activeTab === "populer"
                ? "bg-gradient-to-r from-purple-700 to-indigo-800 text-white"
                : "bg-neutral-900 text-white/80 hover:text-white"
            }`}
          >
            POPÜLER YAYINCILAR
          </button>
          <button
            onClick={() => setActiveTab("yeni")}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              activeTab === "yeni"
                ? "bg-gradient-to-r from-purple-700 to-indigo-800 text-white"
                : "bg-neutral-900 text-white/80 hover:text-white"
            }`}
          >
            YENİ YAYINCILAR
          </button>
        </div>

        {/* Sağdaki Buton */}
        <Link href="/">
          <button className="px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-700 to-indigo-800 text-white hover:opacity-90 transition">
            YAYINCI BAŞVURUSU YAP
          </button>
        </Link>
      </div>

      {/* Tab İçeriği */}
      <div className="w-full mt-2 text-white p-4 rounded-xl shadow-lg bg-[var(--list-box)]">
        {activeTab === "populer" && (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {popularStreamers.map((card, index) => (
                <Link key={index} href="/">
                  <div
                    style={{ border: "2px solid var(--label4)" }}
                    className="bg-gray-900 rounded-lg overflow-hidden"
                  >
                    <div className="relative">
                      <img
                        src={card.image}
                        alt={card.name}
                        className="w-full h-auto"
                      />
                      <div
                        style={{ backgroundColor: "var(--label4)" }}
                        className="absolute top-2 left-2 rounded-full p-1"
                      >
                        <FaTwitch className="text-white" />
                      </div>
                    </div>
                    <div
                      style={{ backgroundColor: "var(--label4)" }}
                      className="text-center text-white py-2"
                    >
                      {card.name}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex justify-center mt-6">
              <ul className="flex items-center space-x-1 bg-[#0f0f1a] p-2 rounded-lg">
                {/* Sol ikon */}
                <li>
                  <button
                    onClick={() =>
                      handlePageChange(Math.max(1, currentPage - 1))
                    }
                    className="px-3 py-2 h-[42px] rounded-md bg-gradient-to-r from-purple-800 to-purple-600 text-white hover:opacity-80"
                  >
                    <FaAngleDoubleLeft />
                  </button>
                </li>

                {/* Sayfa numaraları */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <li key={page}>
                      <button
                        onClick={() => handlePageChange(page)}
                        className={`px-3 py-2 rounded-md border border-purple-500 ${
                          page === currentPage
                            ? "bg-purple-600 text-white"
                            : "text-white hover:bg-purple-700"
                        }`}
                      >
                        {page}
                      </button>
                    </li>
                  )
                )}

                {/* Sağ ikon */}
                <li>
                  <button
                    onClick={() =>
                      handlePageChange(Math.min(totalPages, currentPage + 1))
                    }
                    className="px-3 py-2 h-[42px] rounded-md bg-gradient-to-r from-purple-800 to-purple-600 text-white hover:opacity-80"
                  >
                    <FaAngleDoubleRight />
                  </button>
                </li>
              </ul>
            </div>
          </>
        )}
        {activeTab === "yeni" && (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {newStreamers.map((card, index) => (
                <Link key={index} href="/">
                  <div
                    style={{ border: "2px solid var(--label4)" }}
                    className="bg-gray-900 rounded-lg overflow-hidden"
                  >
                    <div className="relative">
                      <img
                        src={card.image}
                        alt={card.name}
                        className="w-full h-auto"
                      />
                      <div
                        style={{ backgroundColor: "var(--label4)" }}
                        className="absolute top-2 left-2 rounded-full p-1"
                      >
                        <FaTwitch className="text-white" />
                      </div>
                    </div>
                    <div
                      style={{ backgroundColor: "var(--label4)" }}
                      className="text-center text-white py-2"
                    >
                      {card.name}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex justify-center mt-6">
              <ul className="flex items-center space-x-1 bg-[#0f0f1a] p-2 rounded-lg">
                {/* Sol ikon */}
                <li>
                  <button
                    onClick={() =>
                      handlePageChange(Math.max(1, currentPage - 1))
                    }
                    className="px-3 py-2 h-[42px] rounded-md bg-gradient-to-r from-purple-800 to-purple-600 text-white hover:opacity-80"
                  >
                    <FaAngleDoubleLeft />
                  </button>
                </li>

                {/* Sayfa numaraları */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <li key={page}>
                      <button
                        onClick={() => handlePageChange(page)}
                        className={`px-3 py-2 rounded-md border border-purple-500 ${
                          page === currentPage
                            ? "bg-purple-600 text-white"
                            : "text-white hover:bg-purple-700"
                        }`}
                      >
                        {page}
                      </button>
                    </li>
                  )
                )}

                {/* Sağ ikon */}
                <li>
                  <button
                    onClick={() =>
                      handlePageChange(Math.min(totalPages, currentPage + 1))
                    }
                    className="px-3 py-2 h-[42px] rounded-md bg-gradient-to-r from-purple-800 to-purple-600 text-white hover:opacity-80"
                  >
                    <FaAngleDoubleRight />
                  </button>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AllStreamersList;
