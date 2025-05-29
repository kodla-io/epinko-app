"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCopy } from "react-icons/fa6";

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
      table: [
        {
          no: "OR-700-35",
          date: "2022-11-25   21:20",
          count: "2",
          onlyPrice: "380₺",
          totalPrice: "760₺",
          orderState: "Teslimat Bekliyor",
        },
      ],
    },
    {
      id: 1,
      image: "https://placehold.co/80x80",
      title: "League of Legends Riot Points 9200 RP",
      code: "OR-700-36",
      desc: "2x600₺ = 1200₺ | Lorem ipsum dolor sit amet",
      date: "2022-11-25 21:20",
      table: [
        {
          no: "OR-700-35",
          date: "2022-11-25   21:20",
          count: "2",
          onlyPrice: "380₺",
          totalPrice: "760₺",
          orderState: "Teslimat Bekliyor",
        },
      ],
    },
    {
      id: 2,
      image: "https://placehold.co/80x80",
      title: "League of Legends Riot Points 9200 RP",
      code: "OR-700-36",
      desc: "2x600₺ = 1200₺ | Lorem ipsum dolor sit amet",
      date: "2022-11-25 21:20",
      table: [
        {
          no: "OR-700-35",
          date: "2022-11-25   21:20",
          count: "2",
          onlyPrice: "380₺",
          totalPrice: "760₺",
          orderState: "Teslimat Bekliyor",
        },
      ],
    },
  ],
  preparing: [
    {
      id: 0,
      image: "https://placehold.co/80x80",
      title: "League of Legends Riot Points 5800 RP",
      code: "OR-700-35",
      desc: "1x380₺ = 380₺ | Lorem ipsum dolor sit amet",
      date: "2022-11-25 21:20",
      table: [
        {
          no: "OR-700-35",
          date: "2022-11-25   21:20",
          count: "2",
          onlyPrice: "380₺",
          totalPrice: "760₺",
          orderState: "Teslimat Bekliyor",
        },
      ],
    },
    {
      id: 1,
      image: "https://placehold.co/80x80",
      title: "League of Legends Riot Points 9200 RP",
      code: "OR-700-36",
      desc: "2x600₺ = 1200₺ | Lorem ipsum dolor sit amet",
      date: "2022-11-25 21:20",
      table: [
        {
          no: "OR-700-35",
          date: "2022-11-25   21:20",
          count: "2",
          onlyPrice: "380₺",
          totalPrice: "760₺",
          orderState: "Teslimat Bekliyor",
        },
      ],
    },
    {
      id: 2,
      image: "https://placehold.co/80x80",
      title: "League of Legends Riot Points 9200 RP",
      code: "OR-700-36",
      desc: "2x600₺ = 1200₺ | Lorem ipsum dolor sit amet",
      date: "2022-11-25 21:20",
      table: [
        {
          no: "OR-700-35",
          date: "2022-11-25   21:20",
          count: "2",
          onlyPrice: "380₺",
          totalPrice: "760₺",
          orderState: "Teslimat Bekliyor",
        },
      ],
    },
  ],
  completed: [
    {
      id: 0,
      image: "https://placehold.co/80x80",
      title: "League of Legends Riot Points 5800 RP",
      code: "OR-700-35",
      desc: "1x380₺ = 380₺ | Lorem ipsum dolor sit amet",
      date: "2022-11-25 21:20",
      table: [
        {
          no: "OR-700-35",
          date: "2022-11-25   21:20",
          count: "2",
          onlyPrice: "380₺",
          totalPrice: "760₺",
          orderState: "Teslimat Bekliyor",
        },
      ],
    },
    {
      id: 1,
      image: "https://placehold.co/80x80",
      title: "League of Legends Riot Points 9200 RP",
      code: "OR-700-36",
      desc: "2x600₺ = 1200₺ | Lorem ipsum dolor sit amet",
      date: "2022-11-25 21:20",
      table: [
        {
          no: "OR-700-35",
          date: "2022-11-25   21:20",
          count: "2",
          onlyPrice: "380₺",
          totalPrice: "760₺",
          orderState: "Teslimat Bekliyor",
        },
      ],
    },
    {
      id: 2,
      image: "https://placehold.co/80x80",
      title: "League of Legends Riot Points 9200 RP",
      code: "OR-700-36",
      desc: "2x600₺ = 1200₺ | Lorem ipsum dolor sit amet",
      date: "2022-11-25 21:20",
      table: [
        {
          no: "OR-700-35",
          date: "2022-11-25   21:20",
          count: "2",
          onlyPrice: "380₺",
          totalPrice: "760₺",
          orderState: "Teslimat Bekliyor",
        },
      ],
    },
  ],
  cancelled: [
    {
      id: 0,
      image: "https://placehold.co/80x80",
      title: "League of Legends Riot Points 5800 RP",
      code: "OR-700-35",
      desc: "1x380₺ = 380₺ | Lorem ipsum dolor sit amet",
      date: "2022-11-25 21:20",
      table: [
        {
          no: "OR-700-35",
          date: "2022-11-25   21:20",
          count: "2",
          onlyPrice: "380₺",
          totalPrice: "760₺",
          orderState: "Teslimat Bekliyor",
        },
      ],
    },
    {
      id: 1,
      image: "https://placehold.co/80x80",
      title: "League of Legends Riot Points 9200 RP",
      code: "OR-700-36",
      desc: "2x600₺ = 1200₺ | Lorem ipsum dolor sit amet",
      date: "2022-11-25 21:20",
      table: [
        {
          no: "OR-700-35",
          date: "2022-11-25   21:20",
          count: "2",
          onlyPrice: "380₺",
          totalPrice: "760₺",
          orderState: "Teslimat Bekliyor",
        },
      ],
    },
    {
      id: 2,
      image: "https://placehold.co/80x80",
      title: "League of Legends Riot Points 9200 RP",
      code: "OR-700-36",
      desc: "2x600₺ = 1200₺ | Lorem ipsum dolor sit amet",
      date: "2022-11-25 21:20",
      table: [
        {
          no: "OR-700-35",
          date: "2022-11-25   21:20",
          count: "2",
          onlyPrice: "380₺",
          totalPrice: "760₺",
          orderState: "Teslimat Bekliyor",
        },
      ],
    },
  ],
};

const headers = [
  { key: "no", label: "Sipariş Numarası" },
  { key: "date", label: "Sipariş Tarihi" },
  { key: "count", label: "Adedi" },
  { key: "onlyPrice", label: "Birim Fiyatı" },
  { key: "totalPrice", label: "Toplam Fiyatı" },
  { key: "orderState", label: "Sipariş Durumu" },
];

export default function orderList({ title }) {
  const [expanded, setExpanded] = useState(null);
  const [activeTab, setActiveTab] = useState("pending");

  const toggle = (id) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  return (
    <div className="p-4">
      <div className="flex items-center space-x-4 py-2">
        <h2
          style={{ color: "var(--foreground)" }}
          className="text-[30px] py-2 font-bold"
        >
          {title}
        </h2>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-[var(--success)]" />
      </div>
      {/* Tabs */}
      <div className="flex flex-wrap md:flex-nowrap gap-2 mb-4">
        <button
          onClick={() => setActiveTab("pending")}
          className={`px-4 py-2 rounded w-full md:flex-1 ${
            activeTab === "pending"
              ? "bg-[var(--label9)] text-white"
              : "border border-yellow-500 text-yellow-500"
          }`}
        >
          ONAY BEKLİYOR
        </button>
        <button
          onClick={() => setActiveTab("preparing")}
          className={`px-4 py-2 rounded w-full md:flex-1 ${
            activeTab === "preparing"
              ? "bg-[var(--label1)] text-white"
              : "border border-[var(--label1)] text-[var(--label1)]"
          }`}
        >
          HAZIRLANIYOR
        </button>
        <button
          onClick={() => setActiveTab("completed")}
          className={`px-4 py-2 rounded w-full md:flex-1 ${
            activeTab === "completed"
              ? "bg-[var(--success)] text-white"
              : "border border-[var(--success)] text-[var(--success)]"
          }`}
        >
          TAMAMLANDI
        </button>
        <button
          onClick={() => setActiveTab("cancelled")}
          className={`px-4 py-2 rounded w-full md:flex-1 ${
            activeTab === "cancelled"
              ? "bg-[var(--alert)] text-white"
              : "border border-[var(--alert)] text-[var(--alert)]"
          }`}
        >
          İPTAL EDİLDİ
        </button>
      </div>
      <div className="rounded text-white">
        {activeTab === "pending" && (
          <div className="space-y-4">
            {orders.pending.map((order) => (
              <div
                key={order.id}
                className="bg-[var(--advert-list-bg)] rounded border border-[var(--label9)] overflow-hidden"
              >
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
                    <div className="text-[var(--label9)] text-sm mt-1">
                      {order.desc}
                    </div>
                    <div className="text-gray-400 text-xs mt-1">
                      {order.date}
                    </div>
                  </div>

                  <div className="">
                    <button
                      onClick={() => toggle(order.id)}
                      className="bg-[var(--label9)] text-white px-3 py-1 rounded hover:opacity-80"
                    >
                      Detaylı İncele
                    </button>
                  </div>
                </div>

                {/* Expandable Detail */}
                <AnimatePresence>
                  {expanded === order.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-white text-sm px-4 py-3"
                    >
                      <div className="text-white font-bold mb-2">
                        Sipariş Detayları
                      </div>
                      <Table headers={headers} data={order.table} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        )}
        {activeTab === "preparing" && (
          <div className="space-y-4">
            {orders.preparing.map((order) => (
              <div
                key={order.id}
                className="bg-[var(--advert-list-bg)] rounded border border-[var(--label1)] overflow-hidden"
              >
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
                    <div className="text-[var(--label1)] text-sm mt-1">
                      {order.desc}
                    </div>
                    <div className="text-gray-400 text-xs mt-1">
                      {order.date}
                    </div>
                  </div>

                  <div className="">
                    <button
                      onClick={() => toggle(order.id)}
                      className="bg-[var(--label1)] text-white px-3 py-1 rounded hover:opacity-80"
                    >
                      Detaylı İncele
                    </button>
                  </div>
                </div>

                {/* Expandable Detail */}
                <AnimatePresence>
                  {expanded === order.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-white text-sm px-4 py-3"
                    >
                      <div className="text-white font-bold mb-2">
                        Sipariş Detayları
                      </div>
                      <Table headers={headers} data={order.table} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        )}
        {activeTab === "completed" && (
          <div className="space-y-4">
            {orders.preparing.map((order) => (
              <div
                key={order.id}
                className="bg-[var(--advert-list-bg)] rounded border border-[var(--success)] overflow-hidden"
              >
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

                  <div className="">
                    <button
                      onClick={() => toggle(order.id)}
                      className="bg-[var(--success)] text-white px-3 py-1 rounded hover:opacity-80"
                    >
                      Detaylı İncele
                    </button>
                  </div>
                </div>

                {/* Expandable Detail */}
                <AnimatePresence>
                  {expanded === order.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-white text-sm px-4 py-3 border-t border-[var(--success)]"
                    >
                      <div className="w-full flex items-center flex-wrap md :flex-nowrap gap-2">
                        <div className="w-full md:flex-1">
                          <div className="flex w-full items-center bg-[var(--advert-list-bg)] rounded-md">
                            <div className="text-white w-full p-4">
                              <h2 className="mb-4 text-lg font-semibold border-b border-[var(--success)] pb-2">
                                Sipariş Detayları
                              </h2>
                              <ul className="w-full">
                                <li className="flex justify-between items-center mb-2">
                                  <span>Sipariş Numarası</span>
                                  <span>{order.table[0].no}</span>
                                </li>
                                <li className="flex justify-between items-center mb-2">
                                  <span>Sipariş Adedi</span>
                                  <span>{order.table[0].count}</span>
                                </li>
                                <li className="flex justify-between items-center mb-2">
                                  <span>Sipariş Tarihi</span>
                                  <span>{order.table[0].date}</span>
                                </li>
                                <li className="flex justify-between items-center mb-2">
                                  <span>Birim Fiyat</span>
                                  <span>{order.table[0].onlyPrice}</span>
                                </li>
                                <li className="flex justify-between items-center mb-2">
                                  <span>Toplam Fiyat</span>
                                  <span>{order.table[0].totalPrice}</span>
                                </li>
                                <li className="flex justify-between items-center mb-2">
                                  <span>Sipariş Durumu</span>
                                  <span>{order.table[0].orderState}</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="w-full md:flex-1">
                          <div className="bg-[var(--advert-list-bg)] text-white p-3 lg:p-4 xl:p-6 rounded-md">
                            <h2 className="mb-4 text-lg font-semibold border-b border-[var(--success)] pb-2">
                              Epin Kodları
                            </h2>
                            <ul className="max-h-[200px] min-h-auto md:max-h-[100px] md:min-h-[100px] overflow-y-auto p-2">
                              <li className="flex justify-between items-center mb-2">
                                <span>Riot Points 9200 RP</span>
                                <span className="flex items-center">
                                  312312312
                                  <span className="ml-2 text-[var(--success)]">
                                    <FaCopy className="w-4 h-4 cursor-pointer" />
                                  </span>
                                </span>
                              </li>
                              <li className="flex justify-between items-center mb-2">
                                <span>Riot Points 9200 RP</span>
                                <span className="flex items-center">
                                  312312312
                                  <span className="ml-2 text-[var(--success)]">
                                    <FaCopy className="w-4 h-4 cursor-pointer" />
                                  </span>
                                </span>
                              </li>
                              <li className="flex justify-between items-center mb-2">
                                <span>Riot Points 9200 RP</span>
                                <span className="flex items-center">
                                  312312312
                                  <span className="ml-2 text-[var(--success)]">
                                    <FaCopy className="w-4 h-4 cursor-pointer" />
                                  </span>
                                </span>
                              </li>
                              <li className="flex justify-between items-center mb-2">
                                <span>Riot Points 9200 RP</span>
                                <span className="flex items-center">
                                  312312312
                                  <span className="ml-2 text-[var(--success)]">
                                    <FaCopy className="w-4 h-4 cursor-pointer" />
                                  </span>
                                </span>
                              </li>
                            </ul>
                            <div className="flex flex-wrap md:flex-nowrap md:justify-between mt-4 gap-1 xl:gap-2">
                              <button className="bg-[var(--label1)] text-xs md:text-sm py-2 px-1 rounded hover:bg-[var(--label1)] md:flex-1 w-full">
                                Txt Olarak İndir
                              </button>
                              <button className="bg-[var(--success)] text-xs md:text-sm py-2 px-1 rounded hover:bg-[var(--success)] md:flex-1 w-full">
                                Değerlendir
                              </button>
                              <button className="bg-[var(--label4)] text-xs md:text-sm py-2 px-1 rounded hover:bg-purple-500 md:flex-1 w-full">
                                Talep Oluştur
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        )}
        {activeTab === "cancelled" && (
          <div className="space-y-4">
            {orders.preparing.map((order) => (
              <div
                key={order.id}
                className="bg-[var(--advert-list-bg)] rounded border border-[var(--alert)] overflow-hidden"
              >
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
                    <div className="text-[var(--alert)] text-sm mt-1">
                      {order.desc}
                    </div>
                    <div className="text-gray-400 text-xs mt-1">
                      {order.date}
                    </div>
                  </div>

                  <div className="">
                    <button
                      onClick={() => toggle(order.id)}
                      className="bg-[var(--alert)] text-white px-3 py-1 rounded hover:opacity-80"
                    >
                      Detaylı İncele
                    </button>
                  </div>
                </div>

                {/* Expandable Detail */}
                <AnimatePresence>
                  {expanded === order.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-white text-sm px-4 py-3"
                    >
                      <div className="text-white font-bold mb-2">
                        Sipariş Detayları
                      </div>
                      <Table headers={headers} data={order.table} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Order Cards */}
    </div>
  );
}
