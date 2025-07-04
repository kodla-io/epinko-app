import React, { useState } from "react";
import { LuShieldAlert } from "react-icons/lu";
import Link from "next/link";
import { FaCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

const users = [
  {
    name: "itemSatış Duyuru",
    avatar: "https://placehold.co/100",
    lastMsg: "Tosla hesabınıza çekim ya...",
    time: "09:33",
    star: false,
    badge: false,
  },
  {
    name: "fareyliyy",
    avatar: "https://placehold.co/100",
    lastMsg: "%100 ⭐ 10-40 SKİNLİ RAN...",
    time: "20:27",
    star: true,
    badge: true,
  },
  {
    name: "aydohbertu",
    avatar: "https://placehold.co/100",
    lastMsg: "Avukatım sizinle görüşmek...",
    time: "12:09",
    star: false,
    badge: false,
  },
];

const messages = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  return (
    <div className="w-full">
      {/* Üstte kırmızı uyarı barı */}
      <div className="w-full bg-[var(--alert)] rounded text-white px-4 py-2 flex items-center gap-2 text-sm font-semibold">
        <span className="text-lg">&#9888;</span>
        <span>
          Önemli Uyarı! Site dışı iletişim kurmak alışveriş güvenliğini sağlayamayacağımız için <a href="#" className="underline font-bold">yasaktır</a>.
        </span>
      </div>
      <div className="flex flex-wrap md:flex-nowrap gap-4 md:gap-0 text-white font-sans my-4">
        {/* SOL PANEL */}
        <div className="w-full md:w-2/7 min-h-[100px] md:min-h-[500px] max-h-[500px] flex flex-col bg-[var(--messages-main-bg)] rounded-tl-md rounded-bl-md border-r border-[var(--messages-border)]">
          {/* Yeni Sohbet Oluştur Butonu */}
          <div className="border-b border-[var(--messages-border)]">
            <button className="w-full flex items-center gap-2 bg-gradient-to-r from-[#6a8cff] to-[#3ad29f] text-white text-sm font-semibold px-4 py-4 rounded-md shadow hover:opacity-90 transition">
              <FaPlus className="w-5 h-5" />
              YENİ SOHBET OLUŞTUR
            </button>
          </div>
          {/* Arama */}
          <div className="py-3 px-4 border-b border-[var(--messages-border)] bg-[var(--messages-main-bg)]">
            <input
              type="text"
              placeholder="Sohbet ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 rounded bg-[var(--messages-my-bg)] text-[var(--foreground)] placeholder-[var(--text-gray)] outline-none border-none"
            />
          </div>
          {/* Kullanıcı Listesi */}
          <div className="flex-1 rounded p-2 bg-[var(--messages-main-bg)]">
            <div className="overflow-y-auto max-h-[360px]  min-h-[200px] space-y-2">
              {users
                .filter((user) =>
                  user.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((user, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-[var(--messages-other-bg)] transition border border-transparent hover:border-[#6a8cff]"
                >
                  <div className="relative">
                    <img
                      src={user.avatar}
                      alt="User Avatar"
                      className="rounded-full w-10 h-10 border-2 border-[#6a8cff]"
                    />
                    <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[var(--success)] border-2 border-[var(--messages-main-bg)]"></span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1">
                      <span className="font-semibold truncate text-[var(--foreground)] text-sm">{user.name}</span>
                      {user.star && <FaStar className="text-[var(--label7)] w-3 h-3" />}
                      {user.badge && <span className="bg-[var(--label7)] text-[var(--foreground)] text-[10px] px-1 rounded ml-1">%100</span>}
                    </div>
                    <div className="text-xs text-[var(--text-gray)] truncate">{user.lastMsg}</div>
                  </div>
                  <div className="flex flex-col items-end gap-1 min-w-[40px]">
                    <span className="text-xs text-[var(--text-gray)]">{user.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SAĞ PANEL */}
        <div className="w-full md:w-5/7 flex flex-col !bg-[var(--messages-main-bg)] rounded-tr-md rounded-br-md shadow-lg">
          {/* HEADER */}
          <div className="p-2 border-b border-[var(--messages-border)] flex justify-between bg-[var(--messages-main-bg)] items-center">
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
                <p className="font-semibold text-[var(--foreground)] text-sm">Kamilcan Mutlu</p>
                <p className="text-xs text-[var(--success)]">çevrimiçi</p>
              </div>
            </div>
            <button className="bg-[var(--alert)] text-white text-xs px-3 py-1 rounded hover:bg-red-500 flex items-center gap-2">
              <LuShieldAlert className="w-5 h-5" />
              <span>Sohbeti Bildir</span>
            </button>
          </div>

          {/* MESAJLAR */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[350px] max-h-[350px] bg-[var(--messages-main-bg)]">
            {/* Karşı kişi mesajı */}
            <div>
              <div className="bg-[var(--messages-other-bg)] inline-block px-4 py-2 rounded-lg text-[var(--foreground)] max-w-md shadow">
                Lorem ipsum dolor sit amet...
              </div>
              <p className="text-xs text-[var(--text-gray)] mt-1">04:51, Bugün</p>
            </div>

            {/* Benim mesajım */}
            <div className="text-right">
              <div className="bg-[var(--messages-my-bg)] inline-block px-4 py-2 rounded-lg text-[var(--foreground)] max-w-md shadow">
                Malesuada bibendum arcu vitae elementum...
              </div>
              <p className="text-xs text-[var(--text-gray)] mt-1">05:10, Bugün</p>
            </div>
          </div>

          {/* MESAJ GÖNDERME */}
          <div className="p-4 border-t border-[var(--messages-border)] flex bg-[var(--messages-main-bg)]">
            <input
              type="text"
              placeholder="Mesaj yaz..."
              className="flex-1 p-2 rounded-l bg-[var(--messages-my-bg)] text-white placeholder-gray-400 outline-none border-none"
            />
            <button className="bg-[var(--primary)] hover:bg-[var(--label1)] px-4 py-2 rounded-r text-white font-semibold cursor-pointer">
              GÖNDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default messages;
