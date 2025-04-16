"use client";

import React from "react";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const Announcements = () => {
  const announcements1 = [
    {
      category: "Rise Online",
      color: "--label1",
      img: "https://placehold.co/400x200",
      title:
        "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor",
      date: "25-10-2022",
      views: "157 Görüntüleme",
    },
    {
      category: "Apex",
      color: "--label2",
      img: "https://placehold.co/400x200",
      title:
        "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor",
      date: "25-10-2022",
      views: "157 Görüntüleme",
    },
    {
      category: "CSGO",
      color: "--label3",
      img: "https://placehold.co/400x200",
      title:
        "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor",
      date: "25-10-2022",
      views: "157 Görüntüleme",
    },
  ];

  const announcements2 = [
    {
      category: "Zula",
      color: "--label4",
      img: "https://placehold.co/400x200",
      title:
        "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor",
      date: "25-10-2022",
      views: "157 Görüntüleme",
    },
    {
      category: "Zula",
      color: "--label5",
      img: "https://placehold.co/400x200",
      title:
        "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor",
      date: "25-10-2022",
      views: "157 Görüntüleme",
    },
    {
      category: "Battlegrounds",
      color: "--label6",
      img: "https://placehold.co/400x200",
      title:
        "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor",
      date: "25-10-2022",
      views: "157 Görüntüleme",
    },
  ];

  return (
    <div className="py-2 container mx-auto">
      <div className="flex items-center space-x-4 p-4">
        <h2
          style={{ color: "var(--foreground)" }}
          className="text-[30px] py-2 font-bold"
        >
          DUYURULAR
        </h2>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
      </div>
      <div className="px-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {[announcements1, announcements2].map((announcements, index) => (
          <div key={index}>
            <Link href="/new-detail">
              <div className="mb-4 relative">
                <img
                  src={announcements[0].img}
                  alt={announcements[0].category}
                  className="w-full h-auto object-cover max-h-[300px] min-h-[300px]"
                />
                <div className="p-4 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent">
                  <span
                    style={{
                      backgroundColor: `var(${announcements[0].color})`,
                    }}
                    className="text-white px-2 py-1 rounded"
                  >
                    {announcements[0].category}
                  </span>
                  <h3 className="text-lg font-bold mt-2">
                    {announcements[0].title}
                  </h3>
                  <div className="text-gray-300 flex gap-4 mt-1 text-sm">
                    <span className="flex items-center">
                      <SlCalender className="mr-2" />
                      {announcements[0].date}
                    </span>
                    <span className="flex items-center">
                      <FaEye className="mr-2" /> {announcements[0].views}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
            {announcements.slice(1).map((item, index) => (
              <Link href="/new-detail" key={index}>
                <div className="flex mb-4 bg-[var(--advert-list-bg)] rounded-lg overflow-hidden p-2">
                  <img
                    src={item.img}
                    alt={item.category}
                    className="w-1/3 h-auto object-cover max-h-[120px] min-h-[120px] rounded-lg"
                  />
                  <div className="px-4 flex-1 flex flex-wrap flex-col justify-between">
                    <div>
                      <span
                        style={{ backgroundColor: `var(${item.color})` }}
                        className="text-white px-2 py-1 rounded"
                      >
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-md font-bold mt-2">{item.title}</h3>
                    <div className="text-gray-300 flex gap-4 mt-1 text-sm">
                      <span className="flex items-center">
                        <SlCalender className="mr-2" />
                        {item.date}
                      </span>
                      <span className="flex items-center">
                        <FaEye className="mr-2" /> {item.views}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
