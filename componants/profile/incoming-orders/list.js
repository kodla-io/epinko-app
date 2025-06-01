"use client";
import React from "react";
import { useState } from "react";
import { PiUserCircleGearBold } from "react-icons/pi";

import { FaCheckCircle } from "react-icons/fa";
import { IoChatbubbles } from "react-icons/io5";
import { IoCheckmarkDone } from "react-icons/io5";
import Link from "next/link";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

import Table from "../table";

const orders = {
  pending: [
    {
      id: 0,
      image: "https://placehold.co/80x80",
      title: "League of Legends Riot Points 5800 RP",
      code: "OR-700-35",
      desc: "1x380₺ = 380₺ | Lorem ipsum dolor sit amet",
      date: "2022-11-25 21:20",
      buttonText: "Teslimat Bekliyor",
      table1: [
        {
          detail: "M416 buz diyarı 7. Seviye AKM buz diyarı",
          category: "Hesap Satış",
          user: "kcanmutlu12",
          date: "2022-11-25   21:20",
          status: "Teslimat Bekliyor",
          statusColor: "var(--label2)",
          statusTextColor: "#ffffff",
        },
      ],
      table2: [
        {
          no: "OR-700-35",
          date: "2022-11-25   21:20",
          count: "2",
          onlyPrice: "380₺",
          totalPrice: "760₺",
          comission: "380₺",
          earn: "3000₺",
        },
      ],
    },
    {
      id: 1,
      image: "https://placehold.co/80x80",
      title: "League of Legends Riot Points 5800 RP",
      code: "OR-700-35",
      desc: "1x380₺ = 380₺ | Lorem ipsum dolor sit amet",
      date: "2022-11-25 21:20",
      buttonText: "Teslimat Bekliyor",
      table1: [
        {
          detail: "M416 buz diyarı 7. Seviye AKM buz diyarı",
          category: "Hesap Satış",
          user: "kcanmutlu12",
          date: "2022-11-25   21:20",
          status: "Teslimat Bekliyor",
          statusColor: "var(--label2)",
          statusTextColor: "#ffffff",
        },
      ],
      table2: [
        {
          no: "OR-700-35",
          date: "2022-11-25   21:20",
          count: "2",
          onlyPrice: "380₺",
          totalPrice: "760₺",
          comission: "380₺",
          earn: "3000₺",
        },
      ],
    },
  ],
  waiting: [
    {
      id: 0,
      image: "https://placehold.co/80x80",
      title: "League of Legends Riot Points 5800 RP",
      code: "OR-700-35",
      desc: "1x380₺ = 380₺ | Lorem ipsum dolor sit amet",
      date: "2022-11-25 21:20",
      buttonText: "Alıcı Onayında",
      table1: [
        {
          detail: "M416 buz diyarı 7. Seviye AKM buz diyarı",
          category: "Hesap Satış",
          user: "kcanmutlu12",
          date: "2022-11-25   21:20",
          status: "Alıcı Onayında",
          statusColor: "var(--label7)",
          statusTextColor: "#ffffff",
        },
      ],
      table2: [
        {
          no: "OR-700-35",
          date: "2022-11-25   21:20",
          count: "2",
          onlyPrice: "380₺",
          totalPrice: "760₺",
          comission: "380₺",
          earn: "3000₺",
        },
      ],
    },
  ],
  confirm: [
    {
      id: 0,
      image: "https://placehold.co/80x80",
      title: "League of Legends Riot Points 5800 RP",
      code: "OR-700-35",
      desc: "1x380₺ = 380₺ | Lorem ipsum dolor sit amet",
      date: "2022-11-25 21:20",
      buttonText: "Tamamlandı",
      table1: [
        {
          detail: "M416 buz diyarı 7. Seviye AKM buz diyarı",
          category: "Hesap Satış",
          user: "kcanmutlu12",
          date: "2022-11-25   21:20",
          status: "Tamamlandı",
          statusColor: "var(--label2)",
          statusTextColor: "#ffffff",
        },
      ],
      table2: [
        {
          no: "OR-700-35",
          date: "2022-11-25   21:20",
          count: "2",
          onlyPrice: "380₺",
          totalPrice: "760₺",
          comission: "380₺",
          earn: "3000₺",
        },
      ],
    },
    {
      id: 1,
      image: "https://placehold.co/80x80",
      title: "League of Legends Riot Points 5800 RP",
      code: "OR-700-35",
      desc: "1x380₺ = 380₺ | Lorem ipsum dolor sit amet",
      date: "2022-11-25 21:20",
      buttonText: "Tamamlandı",
      table1: [
        {
          detail: "M416 buz diyarı 7. Seviye AKM buz diyarı",
          category: "Hesap Satış",
          user: "kcanmutlu12",
          date: "2022-11-25   21:20",
          status: "Tamamlandı",
          statusColor: "var(--label2)",
          statusTextColor: "#ffffff",
        },
      ],
      table2: [
        {
          no: "OR-700-35",
          date: "2022-11-25   21:20",
          count: "2",
          onlyPrice: "380₺",
          totalPrice: "760₺",
          comission: "380₺",
          earn: "3000₺",
        },
      ],
    },
  ],
  canceled: [
    {
      id: 0,
      image: "https://placehold.co/80x80",
      title: "League of Legends Riot Points 5800 RP",
      code: "OR-700-35",
      desc: "1x380₺ = 380₺ | Lorem ipsum dolor sit amet",
      date: "2022-11-25 21:20",
      buttonText: "İptal Edildi",
      table1: [
        {
          detail: "M416 buz diyarı 7. Seviye AKM buz diyarı",
          category: "Hesap Satış",
          user: "kcanmutlu12",
          date: "2022-11-25   21:20",
          status: "İptal Edildi",
          statusColor: "var(--alert)",
          statusTextColor: "#ffffff",
        },
      ],
      table2: [
        {
          no: "OR-700-35",
          date: "2022-11-25   21:20",
          count: "2",
          onlyPrice: "380₺",
          totalPrice: "760₺",
          comission: "380₺",
          earn: "3000₺",
        },
      ],
    },
  ],
};

const header1 = [
  { key: "detail", label: "İlan Detayları" },
  { key: "category", label: "Kategori" },
  { key: "user", label: "Alıcı" },
  { key: "date", label: "Güncelleme Tarihi" },
  { key: "durum", label: "Sipariş Durumu" },
];

const header2 = [
  { key: "no", label: "Sipariş Numarası" },
  { key: "date", label: "Sipariş Tarihi" },
  { key: "count", label: "Adedi" },
  { key: "onlyPrice", label: "Birim Fiyatı" },
  { key: "totalPrice", label: "Toplam Fiyatı" },
  { key: "comission", label: "Komisyon" },
  { key: "earn", label: "Kazanç" },
];

export default function orderList({ title }) {
  const [activeTab, setActiveTab] = useState("pending");
  const [selectedData, setSelectedData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Burada başka bir şey yapılabilir: API çağrısı vs.
  };

  const getData = (order) => {
    setSelectedData([]); // önce sıfırla
    setSelectedData(order); // sonra içine tek bir obje ekle
    console.log("getData çalıştı, gelen veri:", order);
  };

  return (
    <div className="">
      {activeTab === "detail" && (
        <div className="flex items-center space-x-4 py-2 flex-wrap md:flex-nowrap">
          <h2
            style={{ color: "var(--foreground)" }}
            className="text-[30px] py-2 font-bold"
          >
            {title}
          </h2>
          <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 hidden md:block to-[var(--success)] hidden md:block" />
          <button
            onClick={() => setActiveTab("pending")}
            className="w-full md:w-auto py-2 px-4 text-center font-medium w-auto min-w-[200px] bg-[var(--label2)] rounded-md flex gap-2 items-center justify-center text-white hover:opacity-80 transition duration-200"
          >
            Geri Git
          </button>
        </div>
      )}
      <div className="p-1 md:p-4 rounded text-white">
        <div className="space-y-4">
          {activeTab !== "detail" && (
            <div className="flex justify-between items-center text-center text-sm font-semibold mb-6 flex-wrap md:flex-nowrap gap-2">
              <div
                onClick={() => setActiveTab("pending")}
                className="w-full md:w-[190px] cursor-pointer text-[var(--success)] relative after:content-[''] after:absolute md:after:h-[2px] after:w-0 md:after:w-full after:bg-[var(--success)] after:top-1/2 after:left-full after:-translate-y-1/2"
              >
                <div
                  className="rounded-md"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, var(--success), transparent 20%, transparent 80%, var(--success))",
                    padding: "2px", // p-1 karşılığı
                  }}
                >
                  <div className="py-3 px-3 text-cebnter bg-[var(--profile-tab-bg)] text-[var(--success)] rounded-md">
                    Teslimat Bekleniyor{" "}
                  </div>
                </div>
              </div>
              <div
                onClick={() => setActiveTab("waiting")}
                className="w-full md:w-[190px] cursor-pointer text-[var(--success)] relative after:content-[''] after:absolute md:after:h-[2px] after:w-0 md:after:w-full after:bg-[var(--success)] after:top-1/2 after:left-full after:-translate-y-1/2"
              >
                <div
                  className="rounded-md"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, var(--success), transparent 20%, transparent 80%, var(--success))",
                    padding: "2px",
                  }}
                >
                  <div className="py-3 px-3 text-cebnter bg-[var(--profile-tab-bg)] text-[var(--success)] rounded-md">
                    Alıcı Bekleniyor{" "}
                  </div>
                </div>
              </div>
              <div
                onClick={() => setActiveTab("confirm")}
                className="w-full md:w-[190px] cursor-pointer text-[var(--)] relative after:content-[''] after:absolute md:after:h-[2px] after:w-0 md:after:w-full after:bg-[var(--success)] after:top-1/2 after:left-full after:-translate-y-1/2"
              >
                <div
                  className="rounded-md"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, var(--success), transparent 20%, transparent 80%, var(--success))",
                    padding: "2px", // p-1 karşılığı
                  }}
                >
                  <div className="py-3 px-3 text-cebnter bg-[var(--profile-tab-bg)] text-[var(--success)] rounded-md">
                    Admin Onayı Bekleniyor{" "}
                  </div>
                </div>
              </div>
              <div
                onClick={() => setActiveTab("cancelled")}
                className="w-full md:w-[190px] cursor-pointer text-[var(--alert)] relative"
              >
                <div
                  className="rounded-md"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, var(--alert), transparent 20%, transparent 80%, var(--alert))",
                    padding: "2px", // p-1 karşılığı
                  }}
                >
                  <div className="py-3 px-3 text-cebnter bg-[var(--profile-tab-bg)] text-[var(--alert)] rounded-md">
                    İptal Edildi{" "}
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="mt-4">
            {activeTab === "pending" && (
              <div className="space-y-4">
                {orders.pending.map((order) => (
                  <React.Fragment key={order.id}>
                    <div className="bg-[var(--advert-list-bg)] rounded-xl border border-[var(--idle)] overflow-hidden">
                      <div className="flex flex-col md:flex-row items-center p-4 gap-4 relative">
                        <img
                          src={order.image}
                          alt="game"
                          className="w-20 h-20 object-cover rounded"
                        />

                        <div className="flex-1 text-white">
                          <div className="text-lg font-semibold">
                            {order.title}{" "}
                            <span className="text-sm text-gray-400">
                              | {order.code}
                            </span>
                          </div>
                          <div className="text-[var(--idle)] text-sm mt-1">
                            {order.desc}
                          </div>
                          <div className="text-gray-400 text-xs mt-1">
                            {order.date}
                          </div>
                        </div>

                        <div
                          className=""
                          onClick={() => {
                            setActiveTab("detail");
                            getData([order]);
                          }}
                        >
                          <button className="bg-[var(--success)] text-white px-3 py-1 rounded hover:opacity-80">
                            {order.buttonText}
                          </button>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
                <div className="flex justify-center mt-6">
                  <ul className="flex items-center space-x-1 p-2 rounded-lg">
                    {/* Sol ikon */}
                    <li>
                      <button
                        onClick={() =>
                          handlePageChange(Math.max(1, currentPage - 1))
                        }
                        className="px-2 py-1 h-[34px] rounded-md bg-gradient-to-r from-[var(--idle)] to-[var(--label7)] text-white hover:opacity-80"
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
                            className={`px-2 py-1 rounded-md border border-[var(--idle)] ${
                              page === currentPage
                                ? "bg-[var(--label7)] text-white"
                                : "text-white hover:bg-[var(--idle)]"
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
                          handlePageChange(
                            Math.min(totalPages, currentPage + 1)
                          )
                        }
                        className="px-2 py-1 h-[34px] rounded-md bg-gradient-to-l from-[var(--idle)] to-[var(--label7)] text-white hover:opacity-80"
                      >
                        <FaAngleDoubleRight />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            )}
            {activeTab === "waiting" && (
              <div className="space-y-4">
                {orders.waiting.map((order) => (
                  <React.Fragment key={order.id}>
                    <div className="bg-[var(--advert-list-bg)] rounded-xl border border-[var(--idle)] overflow-hidden">
                      <div className="flex flex-col md:flex-row items-center p-4 gap-4 relative">
                        <img
                          src={order.image}
                          alt="game"
                          className="w-20 h-20 object-cover rounded"
                        />

                        <div className="flex-1 text-white">
                          <div className="text-lg font-semibold">
                            {order.title}{" "}
                            <span className="text-sm text-gray-400">
                              | {order.code}
                            </span>
                          </div>
                          <div className="text-[var(--idle)] text-sm mt-1">
                            {order.desc}
                          </div>
                          <div className="text-gray-400 text-xs mt-1">
                            {order.date}
                          </div>
                        </div>

                        <div
                          className=""
                          onClick={() => {
                            setActiveTab("detail");
                            getData([order]);
                          }}
                        >
                          <button className="bg-[var(--label7)] text-white px-3 py-1 rounded hover:opacity-80">
                            {order.buttonText}
                          </button>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
                <div className="flex justify-center mt-6">
                  <ul className="flex items-center space-x-1 p-2 rounded-lg">
                    {/* Sol ikon */}
                    <li>
                      <button
                        onClick={() =>
                          handlePageChange(Math.max(1, currentPage - 1))
                        }
                        className="px-2 py-1 h-[34px] rounded-md bg-gradient-to-r from-[var(--idle)] to-[var(--label11)] text-white hover:opacity-80"
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
                            className={`px-2 py-1 rounded-md border border-[var(--success)] ${
                              page === currentPage
                                ? "bg-[var(--success)] text-white"
                                : "text-white hover:bg-[var(--idle)]"
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
                          handlePageChange(
                            Math.min(totalPages, currentPage + 1)
                          )
                        }
                        className="px-2 py-1 h-[34px] rounded-md bg-gradient-to-r from-[var(--idle)] to-[var(--label11)] text-white hover:opacity-80"
                      >
                        <FaAngleDoubleRight />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            )}
            {activeTab === "confirm" && (
              <div className="space-y-4">
                {orders.confirm.map((order) => (
                  <React.Fragment key={order.id}>
                    <div className="bg-[var(--advert-list-bg)] rounded-xl border border-[var(--idle)] overflow-hidden">
                      <div className="flex flex-col md:flex-row items-center p-4 gap-4 relative">
                        <img
                          src={order.image}
                          alt="game"
                          className="w-20 h-20 object-cover rounded"
                        />

                        <div className="flex-1 text-white">
                          <div className="text-lg font-semibold">
                            {order.title}{" "}
                            <span className="text-sm text-gray-400">
                              | {order.code}
                            </span>
                          </div>
                          <div className="text-[var(--idle)] text-sm mt-1">
                            {order.desc}
                          </div>
                          <div className="text-gray-400 text-xs mt-1">
                            {order.date}
                          </div>
                        </div>

                        <div
                          className=""
                          onClick={() => {
                            setActiveTab("detail");
                            getData([order]);
                          }}
                        >
                          <button className="bg-[var(--success)] text-white px-3 py-1 rounded hover:opacity-80">
                            {order.buttonText}
                          </button>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
                <div className="flex justify-center mt-6">
                  <ul className="flex items-center space-x-1 p-2 rounded-lg">
                    {/* Sol ikon */}
                    <li>
                      <button
                        onClick={() =>
                          handlePageChange(Math.max(1, currentPage - 1))
                        }
                        className="px-2 py-1 h-[34px] rounded-md bg-gradient-to-r from-[var(--idle)] to-[var(--label11)] text-white hover:opacity-80"
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
                            className={`px-2 py-1 rounded-md border border-[var(--success)] ${
                              page === currentPage
                                ? "bg-[var(--success)] text-white"
                                : "text-white hover:bg-[var(--idle)]"
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
                          handlePageChange(
                            Math.min(totalPages, currentPage + 1)
                          )
                        }
                        className="px-2 py-1 h-[34px] rounded-md bg-gradient-to-r from-[var(--idle)] to-[var(--label11)] text-white hover:opacity-80"
                      >
                        <FaAngleDoubleRight />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            )}
            {activeTab === "cancelled" && (
              <div className="space-y-4">
                {orders.canceled.map((order) => (
                  <React.Fragment key={order.id}>
                    <div className="bg-[var(--advert-list-bg)] rounded-xl border border-[var(--idle)] overflow-hidden">
                      <div className="flex flex-col md:flex-row items-center p-4 gap-4 relative">
                        <img
                          src={order.image}
                          alt="game"
                          className="w-20 h-20 object-cover rounded"
                        />

                        <div className="flex-1 text-white">
                          <div className="text-lg font-semibold">
                            {order.title}{" "}
                            <span className="text-sm text-gray-400">
                              | {order.code}
                            </span>
                          </div>
                          <div className="text-[var(--idle)] text-sm mt-1">
                            {order.desc}
                          </div>
                          <div className="text-gray-400 text-xs mt-1">
                            {order.date}
                          </div>
                        </div>

                        <div
                          className=""
                          onClick={() => {
                            setActiveTab("detail");
                            getData([order]);
                          }}
                        >
                          <button className="bg-[var(--alert)] text-white px-3 py-1 rounded hover:opacity-80">
                            {order.buttonText}
                          </button>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
                <div className="flex justify-center mt-6">
                  <ul className="flex items-center space-x-1 p-2 rounded-lg">
                    {/* Sol ikon */}
                    <li>
                      <button
                        onClick={() =>
                          handlePageChange(Math.max(1, currentPage - 1))
                        }
                        className="px-2 py-1 h-[34px] rounded-md bg-gradient-to-r from-[var(--idle)] to-[var(--label11)] text-white hover:opacity-80"
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
                            className={`px-2 py-1 rounded-md border border-[var(--success)] ${
                              page === currentPage
                                ? "bg-[var(--success)] text-white"
                                : "text-white hover:bg-[var(--idle)]"
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
                          handlePageChange(
                            Math.min(totalPages, currentPage + 1)
                          )
                        }
                        className="px-2 py-1 h-[34px] rounded-md bg-gradient-to-r from-[var(--idle)] to-[var(--label11)] text-white hover:opacity-80"
                      >
                        <FaAngleDoubleRight />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {activeTab === "detail" && (
            <div className="space-y-4">
              {selectedData.map((order) => (
                <React.Fragment key={order.id}>
                  <div className="bg-[var(--advert-list-bg)] rounded-xl border border-[var(--success)] overflow-hidden">
                    <div className="flex flex-col md:flex-row items-center p-4 gap-4 relative">
                      <img
                        src={order.image}
                        alt="game"
                        className="w-20 h-20 object-cover rounded"
                      />

                      <div className="flex-1 text-white">
                        <div className="text-lg font-semibold">
                          {order.title}{" "}
                          <span className="text-sm text-gray-400">
                            | {order.code}
                          </span>
                        </div>
                        <div className="text-[var(--success)] text-sm mt-1">
                          {order.desc}
                        </div>
                        <div className="text-gray-400 text-xs mt-1">
                          {order.date}
                        </div>
                      </div>

                      <div className="border-0 md:border-l-1 border-[var(--success)] p-4 flex flex-wrap justify-center items-center space-y-2">
                        <span className="w-full text-center text-xl">
                          Alıcı Adı
                        </span>
                        <Link
                          href="/"
                          className="bg-[var(--success)] text-white px-3 py-1 rounded hover:opacity-80 flex items-center gap-2"
                        >
                          <PiUserCircleGearBold className="w-6 h-6" />
                          kcanmutlu12
                        </Link>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
              <Table headers={header1} data={selectedData[0]?.table1 || []} />
              <Table headers={header2} data={selectedData[0]?.table2 || []} />

              <div className="flex justify-between items-center text-center text-sm font-semibold mb-6 flex-wrap md:flex-nowrap gap-2">
                <div className="w-full md:w-[190px] cursor-pointer text-[var(--success)] relative after:content-[''] after:absolute md:after:h-[2px] after:w-0 md:after:w-full after:bg-[var(--success)] after:top-1/2 after:left-full after:-translate-y-1/2">
                  {/* <div className="bg-[#2a2b3c] rounded-full w-3 h-3 mx-auto mb-1 ring-2 ring-[var(--success)]"></div> */}
                  <div
                    className="rounded-md"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, var(--success), transparent 20%, transparent 80%, var(--success))",
                      padding: "2px", // p-1 karşılığı
                    }}
                  >
                    <div className="py-3 px-3 text-cebnter bg-[var(--profile-tab-bg)] text-[var(--success)] rounded-md">
                      Teslimat Bekleniyor{" "}
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-[190px] cursor-pointer text-[var(--success)] relative after:content-[''] after:absolute md:after:h-[2px] after:w-0 md:after:w-full after:bg-[var(--success)] after:top-1/2 after:left-full after:-translate-y-1/2">
                  {/* <div className="bg-[#2a2b3c] rounded-full w-3 h-3 mx-auto mb-1 ring-2 ring-red-500"></div> */}
                  <div
                    className="rounded-md"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, var(--success), transparent 20%, transparent 80%, var(--success))",
                      padding: "2px", // p-1 karşılığı
                    }}
                  >
                    <div className="py-3 px-3 text-cebnter bg-[var(--profile-tab-bg)] text-[var(--success)] rounded-md">
                      Alıcı Bekleniyor{" "}
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-[190px] cursor-pointer text-[var(--success)] relative after:content-[''] after:absolute md:after:h-[2px] after:w-0 md:after:w-full after:bg-[var(--success)] after:top-1/2 after:left-full after:-translate-y-1/2">
                  {/* <div className="bg-[#2a2b3c] rounded-full w-3 h-3 mx-auto mb-1 ring-2 ring-red-500"></div> */}
                  <div
                    className="rounded-md"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, var(--success), transparent 20%, transparent 80%, var(--success))",
                      padding: "2px", // p-1 karşılığı
                    }}
                  >
                    <div className="py-3 px-3 text-cebnter bg-[var(--profile-tab-bg)] text-[var(--success)] rounded-md">
                      Admin Onayı Bekleniyor{" "}
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-[190px] cursor-pointer text-[var(--success)] relative">
                  {/* <div className="bg-[#2a2b3c] rounded-full w-3 h-3 mx-auto mb-1 ring-2 ring-red-500"></div> */}
                  <div
                    className="rounded-md"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, var(--success), transparent 20%, transparent 80%, var(--success))",
                      padding: "2px", // p-1 karşılığı
                    }}
                  >
                    <div className="py-3 px-3 text-cebnter bg-[var(--profile-tab-bg)] text-[var(--success)] rounded-md">
                      Sipariş Tamamlandı{" "}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[var(--success)] text-white p-1 rounded-lg flex items-center gap-2">
                <FaCheckCircle className="w-10 h-10 hidden md:block" />
                <p>
                  <strong>Pubg 35 Level Hesap Yeni Sezon 2000 UC</strong> adlı
                  ilan <strong>2022-12-08 10:25</strong> tarihinde{" "}
                  <strong>kcanmutlu12</strong> adlı satıcı tarafından teslim
                  edilmek üzere işaretlendi.
                </p>
              </div>

              <div className="bg-[var(--success)] text-white p-1 rounded-lg flex items-center justify-between flex-wrap md:flex-nowrap gap-2">
                <div className="flex items-start gap-2">
                  <IoChatbubbles className="w-10 h-10 hidden md:block" />
                  <p>
                    Canlı Sohbet üzerinden satıcı ile görüşebilirsiniz.{" "}
                    <strong>
                      Sohbet esnasında sohbet kurallarına uymayı unutmayınız.
                    </strong>
                  </p>
                </div>
                <button className="bg-[var(--idle)] text-white font-semibold px-3 py-1 rounded min-w-[180px]">
                  Canlı Sohbete Git
                </button>
              </div>

              <div className="bg-[var(--success)] text-white p-1 rounded-lg flex items-center gap-2">
                <IoCheckmarkDone className="w-10 h-10 hidden md:block" />
                <p>
                  Siparişinizi teslim aldıktan sonra onay işlemini
                  gerçekleştiriniz. Onayınız Beklenmektedir.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
