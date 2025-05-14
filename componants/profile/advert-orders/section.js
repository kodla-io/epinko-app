"use client";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoChatbubbles } from "react-icons/io5";
import { IoCheckmarkDone } from "react-icons/io5";
import Link from "next/link";
import { FaCircle } from "react-icons/fa";
import { LuShieldAlert } from "react-icons/lu";
import { PiUserCircleGearBold } from "react-icons/pi";

import Table from "../table";
import WarningText from "../../texts/warning";

const order = [
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
];

const headers = [
  { key: "no", label: "Sipariş Numarası" },
  { key: "date", label: "Sipariş Tarihi" },
  { key: "count", label: "Adedi" },
  { key: "onlyPrice", label: "Birim Fiyatı" },
  { key: "totalPrice", label: "Toplam Fiyatı" },
  { key: "orderState", label: "Sipariş Durumu" },
];

export default function orderList({ title }) {
  return (
    <div className="">
      <div className="flex items-center space-x-4 py-2">
        <h2
          style={{ color: "var(--foreground)" }}
          className="text-[30px] py-2 font-bold"
        >
          {title}
        </h2>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
      </div>
      <div className="p-1 md:p-4 rounded text-white">
        <div className="space-y-4">
          {order.map((order) => (
            <>
              <div
                key={order.id}
                className="bg-[var(--advert-list-bg)] rounded-xl border border-yellow-400 overflow-hidden"
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
                    <div className="text-yellow-400 text-sm mt-1">
                      {order.desc}
                    </div>
                    <div className="text-gray-400 text-xs mt-1">
                      {order.date}
                    </div>
                  </div>

                  <div className="border-0 md:border-l-1 border-green-400 p-4 flex flex-wrap justify-center items-center space-y-2">
                    <span className="w-full text-center text-xl">
                      Alıcı Adı
                    </span>
                    <Link
                      href="/"
                      className="bg-green-500 text-white px-3 py-1 rounded hover:opacity-80 flex items-center gap-2"
                    >
                      <PiUserCircleGearBold className="w-6 h-6" />
                      kcanmutlu12
                    </Link>
                  </div>
                </div>
              </div>

              <Table headers={headers} data={order.table} />
            </>
          ))}

          <div className="space-y-4 bg-[var(--advert-list-bg)] p-4 rounded-md">
            <div className="flex justify-between items-center text-center text-sm font-semibold mb-6 flex-wrap md:flex-nowrap gap-2">
              <div className="w-full md:w-[190px] cursor-pointer text-green-500 relative after:content-[''] after:absolute md:after:h-[2px] after:w-0 md:after:w-full after:bg-green-500 after:top-1/2 after:left-full after:-translate-y-1/2">
                {/* <div className="bg-[#2a2b3c] rounded-full w-3 h-3 mx-auto mb-1 ring-2 ring-green-500"></div> */}
                <div
                  className="rounded-md"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, var(--success), transparent 20%, transparent 80%, var(--success))",
                    padding: "2px", // p-1 karşılığı
                  }}
                >
                  <div className="py-3 px-3 text-cebnter bg-[var(--list-box)] text-[var(--success)] rounded-md">
                    Teslimat Bekleniyor{" "}
                  </div>
                </div>
              </div>
              <div className="w-full md:w-[190px] cursor-pointer text-[var(--alert)] relative after:content-[''] after:absolute md:after:h-[2px] after:w-0 md:after:w-full after:bg-[var(--alert)] after:top-1/2 after:left-full after:-translate-y-1/2">
                {/* <div className="bg-[#2a2b3c] rounded-full w-3 h-3 mx-auto mb-1 ring-2 ring-red-500"></div> */}
                <div
                  className="rounded-md"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, var(--alert), transparent 20%, transparent 80%, var(--alert))",
                    padding: "2px", // p-1 karşılığı
                  }}
                >
                  <div className="py-3 px-3 text-cebnter bg-[var(--list-box)] text-[var(--alert)] rounded-md">
                    Alıcı Bekleniyor{" "}
                  </div>
                </div>
              </div>
              <div className="w-full md:w-[190px] cursor-pointer text-[var(--alert)] relative after:content-[''] after:absolute md:after:h-[2px] after:w-0 md:after:w-full after:bg-[var(--alert)] after:top-1/2 after:left-full after:-translate-y-1/2">
                {/* <div className="bg-[#2a2b3c] rounded-full w-3 h-3 mx-auto mb-1 ring-2 ring-red-500"></div> */}
                <div
                  className="rounded-md"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, var(--alert), transparent 20%, transparent 80%, var(--alert))",
                    padding: "2px", // p-1 karşılığı
                  }}
                >
                  <div className="py-3 px-3 text-cebnter bg-[var(--list-box)] text-[var(--alert)] rounded-md">
                    Admin Onayı Bekleniyor{" "}
                  </div>
                </div>
              </div>
              <div className="w-full md:w-[190px] cursor-pointer text-[var(--alert)] relative">
                {/* <div className="bg-[#2a2b3c] rounded-full w-3 h-3 mx-auto mb-1 ring-2 ring-red-500"></div> */}
                <div
                  className="rounded-md"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, var(--alert), transparent 20%, transparent 80%, var(--alert))",
                    padding: "2px", // p-1 karşılığı
                  }}
                >
                  <div className="py-3 px-3 text-cebnter bg-[var(--list-box)] text-[var(--alert)] rounded-md">
                    Sipariş Tamamlandı{" "}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-600 text-white p-1 rounded-lg flex items-center gap-2">
              <FaCheckCircle className="w-10 h-10 hidden md:block" />
              <p>
                <strong>Pubg 35 Level Hesap Yeni Sezon 2000 UC</strong> adlı
                ilan <strong>2022-12-08 10:25</strong> tarihinde{" "}
                <strong>kcanmutlu12</strong> adlı satıcı tarafından teslim
                edilmek üzere işaretlendi.
              </p>
            </div>

            <div className="bg-green-600 text-white p-1 rounded-lg flex items-center justify-between flex-wrap md:flex-nowrap gap-2">
              <div className="flex items-start gap-2">
                <IoChatbubbles className="w-10 h-10 hidden md:block" />
                <p>
                  Canlı Sohbet üzerinden satıcı ile görüşebilirsiniz.{" "}
                  <strong>
                    Sohbet esnasında sohbet kurallarına uymayı unutmayınız.
                  </strong>
                </p>
              </div>
              <button className="bg-orange-400 text-black font-semibold px-3 py-1 rounded hover:bg-orange-500 min-w-[180px]">
                Canlı Sohbete Git
              </button>
            </div>

            <div className="bg-green-600 text-white p-1 rounded-lg flex items-center gap-2">
              <IoCheckmarkDone className="w-10 h-10 hidden md:block" />
              <p>
                Siparişinizi teslim aldıktan sonra onay işlemini
                gerçekleştiriniz. Onayınız Beklenmektedir.
              </p>
            </div>
          </div>
        </div>

        <WarningText />

        <div className="w-full flex flex-col bg-[var(--advert-list-bg)] rounded-xl border border-1 border-gray-600">
          {/* HEADER */}
          <div className="p-3 border-b border-gray-600 flex justify-between items-center">
            <div className="flex items-center gap-2 items-center">
              <div className="bg-gradient-to-b from-[color:var(--success)] to-transparent rounded-full p-[2px]">
                <div className="p-2 bg-[var(--bg-info-box)] rounded-full relative">
                  <div className="rounded-full relative">
                    <Link href="/">
                      <img
                        src="https://placehold.co/100"
                        alt="User Avatar"
                        className="rounded-full w-12 h-12"
                      />
                    </Link>
                  </div>
                  <div href="#" className="absolute top-0 right-0 p-1">
                    <FaCircle className="w-3 h-3 text-[var(--success)]" />
                  </div>
                </div>
              </div>
              <div>
                <p className="font-semibold">Kamilcan Mutlu</p>
                <p className="text-sm text-green-400">çevrimiçi</p>
              </div>
            </div>
            <button className="bg-[var(--alert)] text-white text-sm px-3 py-1 rounded hover:bg-red-500 flex items-center gap-2">
              <LuShieldAlert className="w-8 h-8" />

              <span>Sohbeti Bildir</span>
            </button>
          </div>

          {/* MESAJLAR */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[332px] max-h-[332px]">
            {/* Karşı kişi mesajı */}
            <div>
              <div className="bg-[#2a2d41] inline-block px-4 py-2 rounded-lg text-white max-w-md">
                Lorem ipsum dolor sit amet...
              </div>
              <p className="text-xs text-gray-400 mt-1">04:51, Bugün</p>
            </div>

            {/* Benim mesajım */}
            <div className="text-right">
              <div className="bg-[#1f2133] inline-block px-4 py-2 rounded-lg text-white max-w-md">
                Malesuada bibendum arcu vitae elementum...
              </div>
              <p className="text-xs text-gray-400 mt-1">05:10, Bugün</p>
            </div>
          </div>

          {/* MESAJ GÖNDERME */}
          <div className="p-4 border-t border-gray-700 flex">
            <input
              type="text"
              placeholder="Mesaj yaz..."
              className="flex-1 p-2 rounded-l bg-[#1f2133] text-white placeholder-gray-400 outline-none"
            />
            <button className="bg-[var(--label2)] hover:bg-[var(--label1)] px-4 py-2 rounded-r text-white font-semibold cursor-pointer">
              GÖNDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
