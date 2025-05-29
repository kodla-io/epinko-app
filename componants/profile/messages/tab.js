import React from "react";
import { LuShieldAlert } from "react-icons/lu";
import Link from "next/link";
import { FaCircle } from "react-icons/fa";

const users = [
  "Kamilcan Mutlu",
  "Özlem Yılmaz",
  "Alican İtem",
  "Gülistan E.",
  "Can Mutlu",
  "Özlem M.",
  "Kamilcan Mutlu",
  "Özlem Yılmaz",
  "Alican İtem",
  "Gülistan E.",
  "Can Mutlu",
  "Özlem M.",
];

const messages = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap gap-4 text-white font-sans my-4">
      {/* SOL PANEL */}
      <div className="w-full md:w-2/7 min-h-[100px] md:min-h-[500px] max-h-[500px] flex flex-col bg-[#333a48]">
        {/* Arama */}
        <div className="py-4 px-2">
          <input
            type="text"
            placeholder="Kişi Ara"
            className="w-full px-4 py-2 rounded-full bg-[var(--advert-list-bg)] text-white placeholder-gray-400 outline-none"
          />
        </div>
        {/* Kullanıcı Listesi */}
        <div className="flex-1 rounded p-2">
          <div className="overflow-y-auto max-h-[410px] md:min-h-[410px] min-h-[200px]">
            {users.map((user, index) => (
              <div
                key={index}
                className="flex items-center px-1 py-2 gap-2 hover:bg-[#2a2d41] cursor-pointer border-b border-gray-600 w-[96%]"
              >
                <div className="bg-gradient-to-b from-[color:var(--success)] to-transparent rounded-full p-[2px]">
                  <div className="p-2 bg-[var(--bg-info-box)] rounded-full relative">
                    <div className="rounded-full relative">
                      <Link href="/">
                        <img
                          src="https://placehold.co/100"
                          alt="User Avatar"
                          className="rounded-full w-8 h-8"
                        />
                      </Link>
                    </div>
                    <div href="#" className="absolute top-0 right-0 ">
                      <FaCircle className="w-3 h-3 text-[var(--success)]" />
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-white">{user}</p>
                  <p className="text-xs text-gray-400">çevrimiçi</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SAĞ PANEL */}
      <div className="w-full md:w-5/7 flex flex-col bg-[#3a404b] rounded">
        {/* HEADER */}
        <div className="p-2 border-b border-gray-600 flex justify-between bg-[#414a59] items-center">
          <div className="flex items-center gap-2 items-center">
            <div className="bg-gradient-to-b from-[color:var(--success)] to-transparent rounded-full p-[2px]">
              <div className="p-2 bg-[var(--bg-info-box)] rounded-full relative">
                <div className="rounded-full relative">
                  <Link href="/">
                    <img
                      src="https://placehold.co/100"
                      alt="User Avatar"
                      className="rounded-full w-8 h-8"
                    />
                  </Link>
                </div>
                <div href="#" className="absolute top-0 right-0 p-1">
                  <FaCircle className="w-3 h-3 text-[var(--success)]" />
                </div>
              </div>
            </div>
            <div>
              <p className="font-semibold text-sm">Kamilcan Mutlu</p>
              <p className="text-xs text-green-400">çevrimiçi</p>
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
  );
};

export default messages;
