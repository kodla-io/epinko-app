"use client";

import React from "react";

import { LuCircleCheckBig } from "react-icons/lu";

const items = [
  {
    id: 1,
    image: "https://placehold.co/100",
    title: "Sipariş Onayı",
    date: "2025-05-09",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt sit amet, consectetur adipiscing elit. ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    image: "https://placehold.co/100",
    title: "Kargoya Verildi",
    date: "2025-05-08",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris consectetur adipiscing elit. Sed do eiusmod tempor incididunt sit amet, consectetur adipiscing elit. nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    image: "https://placehold.co/100",
    title: "Teslim Edildi",
    date: "2025-05-07",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum vitae elementum curabitur vitae nunc sed dolore eu fugiat nulla pariatur.",
  },
  {
    id: 4,
    image: "https://placehold.co/100",
    title: "İade Süreci Başladı",
    date: "2025-05-06",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa consectetur adipiscing elit. Sed do eiusmod tempor incididunt sit amet, consectetur adipiscing elit. qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 5,
    image: "https://placehold.co/100",
    title: "İade Tamamlandı",
    date: "2025-05-05",
    description:
      "Aliquam malesuada bibendum arcu velit dignissim sodales ut eu sem.",
  },
];

const NotificationsList = ({ title }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4 py-2 flex-wrap md:flex-nowrap">
        <h2
          style={{ color: "var(--foreground)" }}
          className="text-[30px] py-2 font-bold"
        >
          {title}
        </h2>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 hidden md:block to-green-500 hidden md:block" />
        <button className="w-full md:w-auto py-2 px-4 text-center font-medium w-auto min-w-[200px] bg-[var(--label2)] rounded-md flex gap-2 items-center justify-center text-white hover:opacity-80 transition duration-200">
          <LuCircleCheckBig className="w-4 h-4" />
          Tümünü Okundu Olarak İşaretle
        </button>
      </div>
      {items.map((item) => (
        <div
          key={item.id}
          className="flex gap-4 items-start bg-[var(--profile-tab-bg)] p-4 rounded-md shadow"
        >
          <img
            src={item.image}
            alt="Fotoğraf"
            className="w-[100px] h-[100px] object-cover rounded-md"
          />
          <div className="flex flex-col justify-between w-full">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <span className="text-sm font-semibold">{item.date}</span>
            </div>
            <p className="line-clamp-2">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationsList;
