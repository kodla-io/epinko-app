import { RiPagesLine } from "react-icons/ri";
import { FaPercent } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import React, { useState } from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

export default function Listings({ title }) {
  const listings = [
    {
      id: "#1525H",
      title: "Urna porttitor rhoncus dolor purus.",
      description:
        "Sit amet nisl purus in mollis nunc sed id semper. Mi eget mauris pharetra et ultrices euismod.",
      date: "03-01-2023",
      time: "23:35",
      commission: "300₺",
      earnings: "11600₺",
      image: "https://placehold.co/150",
    },
    {
      id: "#1525H",
      title: "Urna porttitor rhoncus dolor purus.",
      description:
        "Sit amet nisl purus in mollis nunc sed id semper. Mi eget mauris pharetra et ultrices euismod.",
      date: "03-01-2023",
      time: "23:35",
      commission: "300₺",
      earnings: "11600₺",
      image: "https://placehold.co/150",
    },
    {
      id: "#1525H",
      title: "Urna porttitor rhoncus dolor purus.",
      description:
        "Sit amet nisl purus in mollis nunc sed id semper. Mi eget mauris pharetra et ultrices euismod.",
      date: "03-01-2023",
      time: "23:35",
      commission: "300₺",
      earnings: "11600₺",
      image: "https://placehold.co/150",
    },
    {
      id: "#1525H",
      title: "Urna porttitor rhoncus dolor purus.",
      description:
        "Sit amet nisl purus in mollis nunc sed id semper. Mi eget mauris pharetra et ultrices euismod.",
      date: "03-01-2023",
      time: "23:35",
      commission: "300₺",
      earnings: "11600₺",
      image: "https://placehold.co/150",
    },
    {
      id: "#1525H",
      title: "Urna porttitor rhoncus dolor purus.",
      description:
        "Sit amet nisl purus in mollis nunc sed id semper. Mi eget mauris pharetra et ultrices euismod.",
      date: "03-01-2023",
      time: "23:35",
      commission: "300₺",
      earnings: "11600₺",
      image: "https://placehold.co/150",
    },
    {
      id: "#1525H",
      title: "Urna porttitor rhoncus dolor purus.",
      description:
        "Sit amet nisl purus in mollis nunc sed id semper. Mi eget mauris pharetra et ultrices euismod.",
      date: "03-01-2023",
      time: "23:35",
      commission: "300₺",
      earnings: "11600₺",
      image: "https://placehold.co/150",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Burada başka bir şey yapılabilir: API çağrısı vs.
  };

  return (
    <div id="earnings" className="p-6 space-y-4 min-h-screen">
      <div className="flex items-center space-x-4 py-2">
        <h2
          style={{ color: "var(--foreground)" }}
          className="text-[30px] py-2 font-bold"
        >
          {title}
        </h2>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 hidden md:block to-green-500" />
      </div>
      <div className="flex flex-wrap justify-between bg-[var(--profile-tab-bg)] p-2 rounded gap-2 mb-4">
        <input
          type="text"
          placeholder="Ara"
          className="bg-[#2a2a3b] text-white p-2 rounded-md w-full md:w-60"
        />
        <select className="bg-[#2a2a3b] text-white p-2 rounded-md flex-1">
          <option>Tarihe Göre Sırala</option>
        </select>
        <select className="bg-[#2a2a3b] text-white p-2 rounded-md flex-1">
          <option>Kazanca Göre Sırala</option>
        </select>
        <select className="bg-[#2a2a3b] text-white p-2 rounded-md flex-1">
          <option>İlan No’ya Göre Sırala</option>
        </select>
      </div>

      {/* Liste */}
      <div className="space-y-2">
        {listings.map((item, index) => (
          <div
            key={index}
            className="flex items-center flex-wrap md:flex-nowrap justify-between bg-[var(--profile-tab-bg)] p-2 rounded text-white"
          >
            <img
              src={item.image}
              alt="Game"
              className="w-20 h-20 rounded-md object-cover mr-4"
            />
            <div className="flex-1">
              <h3 className="font-bold text-sm">{item.title}</h3>
              <p className="text-xs mb-1 clamp-1">{item.description}</p>
              <div className="text-xs text-orange-300 flex gap-2 items-center">
                📅 {item.date} <span className="text-white">|</span> ⏰{" "}
                {item.time}
              </div>
            </div>
            <div className="ml-0 md:ml-4 text-xs bg-[#2a2a3b] p-2 mt-2 md:mt-0 w-full md:w-auto rounded-md space-y-1">
              <div className="flex items-center gap-2">
                <RiPagesLine className="w-4 h-4" />
                <b>İlan No:</b>{" "}
                <span className="text-[#44c0ff]">{item.id}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPercent className="w-4 h-4" />
                <b>Komisyon:</b>{" "}
                <span className="text-red-400">{item.commission}</span>
              </div>
              <div className="flex items-center gap-2">
                <GiReceiveMoney className="w-4 h-4" />
                <b>Kazanç:</b>{" "}
                <span className="text-green-400">{item.earnings}</span>
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-center mt-6">
          <ul className="flex items-center space-x-1 p-2 rounded-lg">
            {/* Sol ikon */}
            <li>
              <button
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                className="px-2 py-1 h-[34px] rounded-md bg-gradient-to-r from-[var(--idle)] to-[var(--label7)] text-white hover:opacity-80"
              >
                <FaAngleDoubleLeft />
              </button>
            </li>

            {/* Sayfa numaraları */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <li key={page}>
                <button
                  onClick={() => handlePageChange(page)}
                  className={`px-2 py-1 rounded-md border border-[var(--idle)] ${
                    page === currentPage
                      ? "bg-[var(--label7)] text-white"
                      : "text-white hover:bg-[var(--idle)]"
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
                className="px-2 py-1 h-[34px] rounded-md bg-gradient-to-l from-[var(--idle)] to-[var(--label7)] text-white hover:opacity-80"
              >
                <FaAngleDoubleRight />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
