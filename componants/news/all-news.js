"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const AllNews = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 8;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Burada başka bir şey yapılabilir: API çağrısı vs.
  };
  const allNews = [
    {
      img: "https://placehold.co/150x100",
      title: "Haber 1",
      content:
        "Lorem Ipsum is simply dummy text of the printing industry Lorem Ipsum is simply dummy text of the printing industry...",
      date: "17 Eylül 2022",
      views: "27 Görüntüleme",
    },
    {
      img: "https://placehold.co/150x100",
      title: "Haber 2",
      content:
        "Lorem Ipsum has been the industry's standard dummy text Lorem Ipsum is simply dummy text of the printing industry ...",
      date: "18 Eylül 2022",
      views: "30 Görüntüleme",
    },
    {
      img: "https://placehold.co/150x100",
      title: "Haber 3",
      content: "Printing and typesetting industry. Lorem Ipsum has...",
      date: "19 Eylül 2022",
      views: "25 Görüntüleme",
    },
    {
      img: "https://placehold.co/150x100",
      title: "Haber 4",
      content:
        "Standard dummy text ever since the dummy text ever since 1500s...",
      date: "20 Eylül 2022",
      views: "35 Görüntüleme",
    },
    {
      img: "https://placehold.co/150x100",
      title: "Haber 1",
      content:
        "Lorem Ipsum is simply dummy text of the printing industry Lorem Ipsum is simply dummy text of the printing industry...",
      date: "17 Eylül 2022",
      views: "27 Görüntüleme",
    },
    {
      img: "https://placehold.co/150x100",
      title: "Haber 2",
      content:
        "Lorem Ipsum has been the industry's standard dummy text Lorem Ipsum is simply dummy text of the printing industry ...",
      date: "18 Eylül 2022",
      views: "30 Görüntüleme",
    },
    {
      img: "https://placehold.co/150x100",
      title: "Haber 3",
      content: "Printing and typesetting industry. Lorem Ipsum has...",
      date: "19 Eylül 2022",
      views: "25 Görüntüleme",
    },
    {
      img: "https://placehold.co/150x100",
      title: "Haber 4",
      content:
        "Standard dummy text ever since the dummy text ever since 1500s...",
      date: "20 Eylül 2022",
      views: "35 Görüntüleme",
    },
  ];

  return (
    <div className="py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-4">
          <h2
            style={{ color: "var(--foreground)" }}
            className="text-[30px] py-2 font-bold"
          >
            TÜM HABERLER
          </h2>
          <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
        </div>
        <div className="py-8 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {allNews.map((item, index) => (
            <Link href="/" key={index}>
              <div
                style={{
                  backgroundColor: "var(--news-card-bg)",
                  color: "var(--foreground)",
                }}
                className="rounded-xl overflow-hidden "
              >
                <img
                  src={item.img}
                  alt={`Item ${index + 1}`}
                  className="w-full min-h-[300px] max-h-[300px] object-cover"
                />
                <div className="p-4 text-left">
                  <div className="flex justify-between text-[10px] mb-2">
                    <span className="flex items-center">
                      <SlCalender className="mr-2" />
                      {item.date}
                    </span>
                    <span className="flex items-center">
                      <FaEye className="mr-2" /> {item.views}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm mb-4 clamp-2 max-h-[40px] min-h-[40px]">
                    {item.content}
                  </p>
                  <div className="flex justify-center">
                    <button
                      style={{ backgroundColor: "var(--idle)" }}
                      className="text-white text-sm font-semibold py-2 px-4 rounded"
                    >
                      Devamını Oku
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <ul className="flex items-center space-x-1 p-2 rounded-lg">
            {/* Sol ikon */}
            <li>
              <button
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                className="px-3 py-2 h-[42px] rounded-md bg-gradient-to-r from-[var(--label7)] to-[var(--label7)] text-white hover:opacity-80"
              >
                <FaAngleDoubleLeft />
              </button>
            </li>

            {/* Sayfa numaraları */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <li key={page}>
                <button
                  onClick={() => handlePageChange(page)}
                  className={`px-3 py-2 rounded-md border border-[var(--label7)] ${
                    page === currentPage
                      ? "bg-[var(--label7)] text-white"
                      : "text-[var(--foreground)] hover:bg-[var(--label7)]"
                  }`}
                >
                  {page}
                </button>
              </li>
            ))}

            {/* Sağ ikon */}
            <li>
              <button
                onClick={() =>
                  handlePageChange(Math.min(totalPages, currentPage + 1))
                }
                className="px-3 py-2 h-[42px] rounded-md bg-gradient-to-r from-[var(--label7)] to-[var(--label7)] text-white hover:opacity-80"
              >
                <FaAngleDoubleRight />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AllNews;
