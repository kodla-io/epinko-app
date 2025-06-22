"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCopy } from "react-icons/fa6";
import { FaFilter } from "react-icons/fa";
import { FaRegCopy, FaRegQuestionCircle, FaFileAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { TbCopy } from "react-icons/tb";

import Table from "../table";

const orders = {
  allOrders: [
    {
      id: 1,
      image: "https://placehold.co/80x80",
      title: "Vslorant 1200 VP",
      code: "OR-700-35",
      desc: "1x380₺ = 380₺ | Lorem ipsum dolor sit amet",
      date: "2022-11-25 21:20",
      total: "760₺",
      status: "Teslimat Bekliyor",
      color: "var(--label9)",
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
      epinData: [
        { id: 1, code: "45940_0" },
        { id: 2, code: "45940_1" },
        { id: 3, code: "45940_2" },
        { id: 4, code: "45940_3" },
        { id: 5, code: "45940_4" },
        { id: 6, code: "45940_5" },
        { id: 7, code: "45940_6" },
        { id: 8, code: "45940_7" },
        { id: 9, code: "45940_8" },
        { id: 10, code: "45940_9" },
      ],
    },
  ],
  ePin: [
    {
      id: 2,
      image: "https://placehold.co/80x80",
      title: "League of Legends Riot Points 5800 RP",
      code: "OR-700-35",
      desc: "1x380₺ = 380₺ | Lorem ipsum dolor sit amet",
      date: "2022-11-25 21:20",
      total: "760₺",
      status: "Teslimat Bekliyor",
      color: "var(--label9)",
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
      epinData: [
        { id: 1, code: "45940_0" },
        { id: 2, code: "45940_1" },
        { id: 3, code: "45940_2" },
        { id: 4, code: "45940_3" },
        { id: 5, code: "45940_4" },
        { id: 6, code: "45940_5" },
        { id: 7, code: "45940_6" },
        { id: 8, code: "45940_7" },
        { id: 9, code: "45940_8" },
        { id: 10, code: "45940_9" },
      ],
    },
    {
      id: 3,
      image: "https://placehold.co/80x80",
      title: "League of Legends Riot Points 5800 RP",
      code: "OR-700-35",
      desc: "1x380₺ = 380₺ | Lorem ipsum dolor sit amet",
      date: "2022-11-25 21:20",
      total: "760₺",
      status: "Teslimat Bekliyor",
      color: "var(--label9)",
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
      epinData: [
        { id: 1, code: "45940_0" },
        { id: 2, code: "45940_1" },
        { id: 3, code: "45940_2" },
        { id: 4, code: "45940_3" },
        { id: 5, code: "45940_4" },
        { id: 6, code: "45940_5" },
        { id: 7, code: "45940_6" },
        { id: 8, code: "45940_7" },
        { id: 9, code: "45940_8" },
        { id: 10, code: "45940_9" },
      ],
    },
  ],
  case: [
    {
      id: 4,
      image: "https://placehold.co/80x80",
      title: "League of Legends Riot Points 5800 RP",
      code: "OR-700-35",
      desc: "1x380₺ = 380₺ | Lorem ipsum dolor sit amet",
      date: "2022-11-25 21:20",
      total: "760₺",
      status: "Teslimat Bekliyor",
      color: "var(--label9)",
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
      epinData: [
        { id: 1, code: "45940_0" },
        { id: 2, code: "45940_1" },
        { id: 3, code: "45940_2" },
        { id: 4, code: "45940_3" },
        { id: 5, code: "45940_4" },
        { id: 6, code: "45940_5" },
        { id: 7, code: "45940_6" },
        { id: 8, code: "45940_7" },
        { id: 9, code: "45940_8" },
        { id: 10, code: "45940_9" },
      ],
    },
  ],
  draw: [
    {
      id: 6,
      image: "https://placehold.co/80x80",
      title: "League of Legends Riot Points 5800 RP",
      code: "OR-700-35",
      desc: "1x380₺ = 380₺ | Lorem ipsum dolor sit amet",
      date: "2022-11-25 21:20",
      total: "760₺",
      status: "Teslimat Bekliyor",
      color: "var(--label9)",
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
      epinData: [
        { id: 1, code: "45940_0" },
        { id: 2, code: "45940_1" },
        { id: 3, code: "45940_2" },
        { id: 4, code: "45940_3" },
        { id: 5, code: "45940_4" },
        { id: 6, code: "45940_5" },
        { id: 7, code: "45940_6" },
        { id: 8, code: "45940_7" },
        { id: 9, code: "45940_8" },
        { id: 10, code: "45940_9" },
      ],
    },
    {
      id: 7,
      image: "https://placehold.co/80x80",
      title: "League of Legends Riot Points 5800 RP",
      code: "OR-700-35",
      desc: "1x380₺ = 380₺ | Lorem ipsum dolor sit amet",
      date: "2022-11-25 21:20",
      total: "760₺",
      status: "Teslimat Bekliyor",
      color: "var(--label9)",
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
      epinData: [
        { id: 1, code: "45940_0" },
        { id: 2, code: "45940_1" },
        { id: 3, code: "45940_2" },
        { id: 4, code: "45940_3" },
        { id: 5, code: "45940_4" },
        { id: 6, code: "45940_5" },
        { id: 7, code: "45940_6" },
        { id: 8, code: "45940_7" },
        { id: 9, code: "45940_8" },
        { id: 10, code: "45940_9" },
      ],
    },
    {
      id: 8,
      image: "https://placehold.co/80x80",
      title: "League of Legends Riot Points 5800 RP",
      code: "OR-700-35",
      desc: "1x380₺ = 380₺ | Lorem ipsum dolor sit amet",
      date: "2022-11-25 21:20",
      total: "760₺",
      status: "Teslimat Bekliyor",
      color: "var(--label9)",
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
      epinData: [
        { id: 1, code: "45940_0" },
        { id: 2, code: "45940_1" },
        { id: 3, code: "45940_2" },
        { id: 4, code: "45940_3" },
        { id: 5, code: "45940_4" },
        { id: 6, code: "45940_5" },
        { id: 7, code: "45940_6" },
        { id: 8, code: "45940_7" },
        { id: 9, code: "45940_8" },
        { id: 10, code: "45940_9" },
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

const buttonClass =
  "flex items-center gap-2 py-2 px-3 rounded-sm bg-[var(--profile-input)] hover:opacity-60 text-xs font-semibold transition";

export default function orderList({ title }) {
  const [expanded, setExpanded] = useState(null);
  const [activeTab, setActiveTab] = useState("ePin");

  const [bank, setBank] = useState("");
  const [requestType, setRequestType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const toggle = (id) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  const [copied, setCopied] = useState(null);

  const handleCopy = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopied(id);
    setTimeout(() => setCopied(null), 1000);
  };

  const groupedAllOrders = [];
  for (let i = 0; i < orders.allOrders[0].epinData.length; i += 1) {
    groupedAllOrders.push(orders.allOrders[0].epinData.slice(i, i + 1));
  }

  const groupedEPin = [];
  for (let i = 0; i < orders.ePin[0].epinData.length; i += 1) {
    groupedEPin.push(orders.ePin[0].epinData.slice(i, i + 1));
  }

  const groupedCase = [];
  for (let i = 0; i < orders.case[0].epinData.length; i += 1) {
    groupedCase.push(orders.case[0].epinData.slice(i, i + 1));
  }

  const groupedDraw = [];
  for (let i = 0; i < orders.draw[0].epinData.length; i += 1) {
    groupedDraw.push(orders.draw[0].epinData.slice(i, i + 1));
  }

  return (
    <div id="orders" className="p-4">
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
          onClick={() => setActiveTab("allOrders")}
          className={`px-4 py-2 rounded w-full md:flex-1 ${
            activeTab === "allOrders"
              ? "bg-[var(--success)] text-white"
              : "border border-[var(--success)] text-[var(--success)]"
          }`}
        >
          Siparişlerim
        </button>
        <button
          onClick={() => setActiveTab("ePin")}
          className={`px-4 py-2 rounded w-full md:flex-1 ${
            activeTab === "ePin"
              ? "bg-[var(--success)] text-white"
              : "border border-[var(--success)] text-[var(--success)]"
          }`}
        >
          E Pin Siparişlerim
        </button>
        <button
          onClick={() => setActiveTab("case")}
          className={`px-4 py-2 rounded w-full md:flex-1 ${
            activeTab === "case"
              ? "bg-[var(--success)] text-white"
              : "border border-[var(--success)] text-[var(--success)]"
          }`}
        >
          Kasa Siparişlerim
        </button>
        <button
          onClick={() => setActiveTab("draw")}
          className={`px-4 py-2 rounded w-full md:flex-1 ${
            activeTab === "draw"
              ? "bg-[var(--success)] text-white"
              : "border border-[var(--success)] text-[var(--success)]"
          }`}
        >
          Çekiliş Siparişlerim
        </button>
      </div>
      {/* FİLTRELER */}
      <div className="flex flex-col md:flex-row gap-3 mb-5">
        {/* Search Input */}
        <div className="flex-2 relative">
          <input
            type="text"
            placeholder="Sipariş ara..."
            className="w-full rounded-md px-4 py-2 text-white outline-none !border !border-[#ffffff33] bg-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* 3 - Başlangıç Tarihi */}
        <input
          type="date"
          className="flex-1 !border !border-[#ffffff33] rounded px-4 py-2 text-white outline-none"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />

        {/* 4 - Bitiş Tarihi */}
        <input
          type="date"
          className="flex-1 !border !border-[#ffffff33] rounded px-4 py-2 text-white outline-none"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />

        {/* FİLTRELE BUTONU */}
        <button
          className="flex-1 md:max-w-[150px] py-2 bg-[var(--success)] rounded-md text-white font-semibold gap-2 flex items-center justify-center hover:bg-[var(--primary)] transition"
          onClick={() => {
            console.log("Filtrele");
          }}
        >
          <FaFilter className="w-5 h-5 text-white" />
          FİLTRELE
        </button>
      </div>
      <div className="rounded text-white">
        {activeTab === "allOrders" && (
          <div className="space-y-4">
            {orders.allOrders.map((order) => (
              <div
                key={order.id}
                className="bg-[var(--profile-tab-bg)] rounded-sm overflow-hidden"
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
                      className="text-white text-sm px-4 py-3"
                    >
                      <div className="text-white font-bold mb-2">
                        Sipariş Detayları
                      </div>

                      <div className="flex items-center justify-between bg-[var(--profile-input)] px-4 py-3 rounded-xl w-full mb-4">
                        {/* Sol: Total */}
                        <span className="text-white whitespace-nowrap">
                          Sipariş Tutarı:{" "}
                          <span className="text-[var(--succes)] font-semibold text-lg">
                            {order.total}
                          </span>
                        </span>
                        {/* Sağ: Durum Badge */}
                        <span
                          style={{
                            backgroundColor: order.color,
                            color: "#fff",
                            borderRadius: "999px",
                            padding: "6px 18px",
                            fontWeight: 600,
                            fontSize: "0.95rem",
                            marginLeft: "14px",
                            minWidth: 110,
                            display: "inline-block",
                            textAlign: "center",
                          }}
                        >
                          {order.status}
                        </span>
                      </div>

                      <div className="w-full">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row justify-between gap-4 items-start md:items-center mb-4">
                          {/* Başlık */}
                          <div className="flex items-center gap-2 font-bold text-lg text-gray-200 tracking-wide">
                            E-PİN KODLARI
                            <span className="text-xs opacity-70 font-normal ml-2">
                              ({orders.ePin[0].epinData.length})
                            </span>
                          </div>
                          {/* Butonlar */}
                          <div className="grid grid-cols-2 gap-2 md:flex md:grid-cols-1">
                            <button className={buttonClass}>
                              <FaRegQuestionCircle size={16} />
                              Nasıl Kullanırım
                            </button>
                            <button className={buttonClass}>
                              <FaFileAlt size={16} />
                              Metin Olarak Gör
                            </button>
                            <button className={buttonClass}>
                              <FiDownload size={16} />
                              TXT Olarak İndir
                            </button>
                            <button className={buttonClass}>
                              <TbCopy size={16} />
                              Tümünü Kopyala
                            </button>
                          </div>
                        </div>

                        {/* Kodlar - 2'li Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {groupedAllOrders.map((group, idx) => (
                            <div key={idx} className="flex flex-col gap-3">
                              {group.map((item, j) => (
                                <div
                                  key={item.id}
                                  className={`flex items-center justify-between rounded-lg bg-[var(--profile-input)] shadow py-3 px-5 transition group`}
                                >
                                  <span className="flex items-center gap-3">
                                    <span className="font-bold text-base min-w-[22px]">
                                      {item.id}
                                    </span>
                                    <span className="font-mono text-base">
                                      {item.code}
                                    </span>
                                  </span>
                                  <button
                                    onClick={() =>
                                      handleCopy(item.code, item.id)
                                    }
                                    className={`p-2 rounded-md transition-colors duration-200 ${
                                      copied === item.id
                                        ? "bg-[var(--success)] text-white"
                                        : "bg-[#25272f] text-[var(--success)] hover:opacity-80"
                                    }`}
                                    title="Kopyala"
                                  >
                                    <FaRegCopy className="w-5 h-5" />
                                  </button>
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        )}
        {activeTab === "ePin" && (
          <div className="space-y-4">
            {orders.ePin.map((order) => (
              <div
                key={order.id}
                className="bg-[var(--profile-tab-bg)] rounded-sm overflow-hidden"
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
                      className="text-white text-sm px-4 py-3"
                    >
                      <div className="text-white font-bold mb-2">
                        Sipariş Detayları
                      </div>

                      <div className="flex items-center justify-between bg-[var(--profile-input)] px-4 py-3 rounded-xl w-full mb-4">
                        {/* Sol: Total */}
                        <span className="text-white whitespace-nowrap">
                          Sipariş Tutarı:{" "}
                          <span className="text-[var(--succes)] font-semibold text-lg">
                            {order.total}
                          </span>
                        </span>
                        {/* Sağ: Durum Badge */}
                        <span
                          style={{
                            backgroundColor: order.color,
                            color: "#fff",
                            borderRadius: "999px",
                            padding: "6px 18px",
                            fontWeight: 600,
                            fontSize: "0.95rem",
                            marginLeft: "14px",
                            minWidth: 110,
                            display: "inline-block",
                            textAlign: "center",
                          }}
                        >
                          {order.status}
                        </span>
                      </div>

                      <div className="w-full">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row justify-between gap-4 items-start md:items-center mb-4">
                          {/* Başlık */}
                          <div className="flex items-center gap-2 font-bold text-lg text-gray-200 tracking-wide">
                            E-PİN KODLARI
                            <span className="text-xs opacity-70 font-normal ml-2">
                              ({orders.ePin[0].epinData.length})
                            </span>
                          </div>
                          {/* Butonlar */}
                          <div className="grid grid-cols-2 gap-2 md:flex md:grid-cols-1">
                            <button className={buttonClass}>
                              <FaRegQuestionCircle size={16} />
                              Nasıl Kullanırım
                            </button>
                            <button className={buttonClass}>
                              <FaFileAlt size={16} />
                              Metin Olarak Gör
                            </button>
                            <button className={buttonClass}>
                              <FiDownload size={16} />
                              TXT Olarak İndir
                            </button>
                            <button className={buttonClass}>
                              <TbCopy size={16} />
                              Tümünü Kopyala
                            </button>
                          </div>
                        </div>

                        {/* Kodlar - 2'li Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {groupedEPin.map((group, idx) => (
                            <div key={idx} className="flex flex-col gap-3">
                              {group.map((item, j) => (
                                <div
                                  key={item.id}
                                  className={`flex items-center justify-between rounded-lg bg-[var(--profile-input)] shadow py-3 px-5 transition group`}
                                >
                                  <span className="flex items-center gap-3">
                                    <span className="font-bold text-base min-w-[22px]">
                                      {item.id}
                                    </span>
                                    <span className="font-mono text-base">
                                      {item.code}
                                    </span>
                                  </span>
                                  <button
                                    onClick={() =>
                                      handleCopy(item.code, item.id)
                                    }
                                    className={`p-2 rounded-md transition-colors duration-200 ${
                                      copied === item.id
                                        ? "bg-[var(--success)] text-white"
                                        : "bg-[#25272f] text-[var(--success)] hover:opacity-80"
                                    }`}
                                    title="Kopyala"
                                  >
                                    <FaRegCopy className="w-5 h-5" />
                                  </button>
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        )}
        {activeTab === "case" && (
          <div className="space-y-4">
            {orders.case.map((order) => (
              <div
                key={order.id}
                className="bg-[var(--profile-tab-bg)] rounded-sm overflow-hidden"
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
                      className="text-white text-sm px-4 py-3"
                    >
                      <div className="text-white font-bold mb-2">
                        Sipariş Detayları
                      </div>

                      <div className="flex items-center justify-between bg-[var(--profile-input)] px-4 py-3 rounded-xl w-full mb-4">
                        {/* Sol: Total */}
                        <span className="text-white whitespace-nowrap">
                          Sipariş Tutarı:{" "}
                          <span className="text-[var(--succes)] font-semibold text-lg">
                            {order.total}
                          </span>
                        </span>
                        {/* Sağ: Durum Badge */}
                        <span
                          style={{
                            backgroundColor: order.color,
                            color: "#fff",
                            borderRadius: "999px",
                            padding: "6px 18px",
                            fontWeight: 600,
                            fontSize: "0.95rem",
                            marginLeft: "14px",
                            minWidth: 110,
                            display: "inline-block",
                            textAlign: "center",
                          }}
                        >
                          {order.status}
                        </span>
                      </div>

                      <div className="w-full">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row justify-between gap-4 items-start md:items-center mb-4">
                          {/* Başlık */}
                          <div className="flex items-center gap-2 font-bold text-lg text-gray-200 tracking-wide">
                            E-PİN KODLARI
                            <span className="text-xs opacity-70 font-normal ml-2">
                              ({orders.ePin[0].epinData.length})
                            </span>
                          </div>
                          {/* Butonlar */}
                          <div className="grid grid-cols-2 gap-2 md:flex md:grid-cols-1">
                            <button className={buttonClass}>
                              <FaRegQuestionCircle size={16} />
                              Nasıl Kullanırım
                            </button>
                            <button className={buttonClass}>
                              <FaFileAlt size={16} />
                              Metin Olarak Gör
                            </button>
                            <button className={buttonClass}>
                              <FiDownload size={16} />
                              TXT Olarak İndir
                            </button>
                            <button className={buttonClass}>
                              <TbCopy size={16} />
                              Tümünü Kopyala
                            </button>
                          </div>
                        </div>

                        {/* Kodlar - 2'li Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {groupedCase.map((group, idx) => (
                            <div key={idx} className="flex flex-col gap-3">
                              {group.map((item, j) => (
                                <div
                                  key={item.id}
                                  className={`flex items-center justify-between rounded-lg bg-[var(--profile-input)] shadow py-3 px-5 transition group`}
                                >
                                  <span className="flex items-center gap-3">
                                    <span className="font-bold text-base min-w-[22px]">
                                      {item.id}
                                    </span>
                                    <span className="font-mono text-base">
                                      {item.code}
                                    </span>
                                  </span>
                                  <button
                                    onClick={() =>
                                      handleCopy(item.code, item.id)
                                    }
                                    className={`p-2 rounded-md transition-colors duration-200 ${
                                      copied === item.id
                                        ? "bg-[var(--success)] text-white"
                                        : "bg-[#25272f] text-[var(--success)] hover:opacity-80"
                                    }`}
                                    title="Kopyala"
                                  >
                                    <FaRegCopy className="w-5 h-5" />
                                  </button>
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        )}
        {activeTab === "draw" && (
          <div className="space-y-4">
            {orders.draw.map((order) => (
              <div
                key={order.id}
                className="bg-[var(--profile-tab-bg)] rounded-sm overflow-hidden"
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
                      className="text-white text-sm px-4 py-3"
                    >
                      <div className="text-white font-bold mb-2">
                        Sipariş Detayları
                      </div>

                      <div className="flex items-center justify-between bg-[var(--profile-input)] px-4 py-3 rounded-xl w-full mb-4">
                        {/* Sol: Total */}
                        <span className="text-white whitespace-nowrap">
                          Sipariş Tutarı:{" "}
                          <span className="text-[var(--succes)] font-semibold text-lg">
                            {order.total}
                          </span>
                        </span>
                        {/* Sağ: Durum Badge */}
                        <span
                          style={{
                            backgroundColor: order.color,
                            color: "#fff",
                            borderRadius: "999px",
                            padding: "6px 18px",
                            fontWeight: 600,
                            fontSize: "0.95rem",
                            marginLeft: "14px",
                            minWidth: 110,
                            display: "inline-block",
                            textAlign: "center",
                          }}
                        >
                          {order.status}
                        </span>
                      </div>

                      <div className="w-full">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row justify-between gap-4 items-start md:items-center mb-4">
                          {/* Başlık */}
                          <div className="flex items-center gap-2 font-bold text-lg text-gray-200 tracking-wide">
                            E-PİN KODLARI
                            <span className="text-xs opacity-70 font-normal ml-2">
                              ({orders.ePin[0].epinData.length})
                            </span>
                          </div>
                          {/* Butonlar */}
                          <div className="grid grid-cols-2 gap-2 md:flex md:grid-cols-1">
                            <button className={buttonClass}>
                              <FaRegQuestionCircle size={16} />
                              Nasıl Kullanırım
                            </button>
                            <button className={buttonClass}>
                              <FaFileAlt size={16} />
                              Metin Olarak Gör
                            </button>
                            <button className={buttonClass}>
                              <FiDownload size={16} />
                              TXT Olarak İndir
                            </button>
                            <button className={buttonClass}>
                              <TbCopy size={16} />
                              Tümünü Kopyala
                            </button>
                          </div>
                        </div>

                        {/* Kodlar - 2'li Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {groupedDraw.map((group, idx) => (
                            <div key={idx} className="flex flex-col gap-3">
                              {group.map((item, j) => (
                                <div
                                  key={item.id}
                                  className={`flex items-center justify-between rounded-lg bg-[var(--profile-input)] shadow py-3 px-5 transition group`}
                                >
                                  <span className="flex items-center gap-3">
                                    <span className="font-bold text-base min-w-[22px]">
                                      {item.id}
                                    </span>
                                    <span className="font-mono text-base">
                                      {item.code}
                                    </span>
                                  </span>
                                  <button
                                    onClick={() =>
                                      handleCopy(item.code, item.id)
                                    }
                                    className={`p-2 rounded-md transition-colors duration-200 ${
                                      copied === item.id
                                        ? "bg-[var(--success)] text-white"
                                        : "bg-[#25272f] text-[var(--success)] hover:opacity-80"
                                    }`}
                                    title="Kopyala"
                                  >
                                    <FaRegCopy className="w-5 h-5" />
                                  </button>
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
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
