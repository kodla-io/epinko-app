"use client";

import React from "react";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const LastNews = () => {
  const newsItems = [
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
            SON HABERLER
          </h2>
          <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
        </div>
        <div className="py-8 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {newsItems.map((item, index) => (
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
                      <SlCalender className="mr-2" /> {item.date}
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
      </div>
    </div>
  );
};

export default LastNews;
