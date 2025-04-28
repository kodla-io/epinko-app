import React from "react";
import { MdOutlineErrorOutline } from "react-icons/md";

import { FaPeopleLine } from "react-icons/fa6";
import { GiCoins } from "react-icons/gi";

const GiveawayDetail = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center space-x-4">
        <h2
          style={{ color: "var(--foreground)" }}
          className="text-white text-[30px] py-2 font-bold px-4"
        >
          SIT AMET CURSUS SIT AMET DICTUM
        </h2>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
      </div>
      <div className="p-4 mt-8 space-y-10">
        {/* ÜST KISIM */}
        <div className="flex flex-col-reverse lg:flex-row gap-4">
          {/* SOL TARAF */}
          <div className="flex flex-col flex-[3] gap-4">
            {/* ÜST 2 KUTU */}
            <div className="flex gap-4 flex-wrap md:flex-nowrap">
              {/* SOL (RESİM) */}
              <div className="w-full md:flex-[2] bg-[var(--advert-list-bg)] rounded-xl p-4 flex items-center justify-center">
                {/* Buraya resmi koy */}
                <img
                  src="https://placehold.co/500"
                  alt="Main"
                  className="w-full h-full object-cover rounded-lg min-h-[400px] max-h-[400px]"
                />
              </div>

              {/* SAĞ (CHAT) */}
              <div className="w-full md:flex-1 bg-[var(--advert-list-bg)] rounded-xl p-4">
                {/* Buraya chat simülasyonu */}
                <div className="flex justify-center items-center mb-4 border-b-2 border-[var(--advert-list-bg)]">
                  YAYIN SOHBETİ
                </div>
                <div className="overflow-y-scroll space-y-2 min-h-[350px] max-h-[350px]">
                  <div className="text-sm text-white">Kullanıcı1: Selam!</div>
                  <div className="text-sm text-white">
                    Kullanıcı2: Çekiliş ne zaman?
                  </div>
                  <div className="text-sm text-white">
                    Kullanıcı3: Başarılar herkese!
                  </div>
                  {/* daha fazla fake chat */}
                </div>
              </div>
            </div>

            {/* ALT KUTU (Uyarı Kutusu) */}
            <div className="bg-[var(--advert-list-bg)] rounded-xl p-4 flex items-center gap-2">
              <div className="text-green-400">
                {/* İkon (örnek) */}
                <MdOutlineErrorOutline className="w-10 h-10" />
              </div>
              <p className="text-sm text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem
                ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum
                dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor
                sit amet, consectetur adipiscing elit Lorem ipsum dolor sit
                amet, consectetur adipiscing elit .
              </p>
            </div>
          </div>

          {/* SAĞ TARAF */}
          <div className="flex-1 bg-[var(--bg-info-box)] rounded-xl">
            <div className="bg-gradient-to-b from-[color:var(--success)] to-transparent rounded-xl  p-[2px] rounded-xl">
              <div className="flex flex-col items-center bg-[var(--bg-info-box)] rounded-xl">
                <div className="bg-gradient-to-b from-[color:var(--success)] to-transparent rounded-full p-[2px] relative top-[-50px]">
                  <div className="p-4 bg-[var(--bg-info-box)] rounded-full">
                    <div className="bg-gradient-to-b from-[color:var(--success)] to-transparent rounded-full p-[2px]">
                      <img
                        src="https://placehold.co/100"
                        alt="User Avatar"
                        className="rounded-full w-20 h-20"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative top-[-45px] text-center p-4">
                  <h2 className="mt-2 font-bold text-xl">User Name K.</h2>
                  <div className="flex gap-2 items-center text-sm">
                    <p className="">
                      Convallis tellus 27.01.2023 | 21:45 velit aliquet sagittis
                      id consectetur.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 my-3 relative top-[-20px] p-4">
                  <button className="bg-[var(--primary)] py-1 justify-center rounded w-full flex gap-2 items-center">
                    <FaPeopleLine className="w-8 h-8" />
                    Toplam katılımcı sayısı: 351
                  </button>
                  <button className="bg-[var(--success)] py-1 justify-center rounded w-full flex gap-2 items-center">
                    <GiCoins className="w-8 h-8 text-[var(--label9)]" />
                    Çekiliş tutarı: 1.047,30₺
                  </button>
                </div>
                <div className="rounded-lg p-4 flex flex-col items-center gap-4 w-full">
                  <h2 className="text-white text-lg font-semibold">
                    Çekiliş Bitiş Zamanı
                  </h2>
                  <div className="flex gap-2">
                    <div className="bg-[#1e1e2d] rounded-md p-3 flex flex-col items-center min-w-[60px]">
                      <span className="text-white text-xl font-bold">16</span>
                      <span className="text-gray-400 text-xs">gün</span>
                    </div>
                    <div className="bg-[#1e1e2d] rounded-md p-3 flex flex-col items-center min-w-[60px]">
                      <span className="text-white text-xl font-bold">6</span>
                      <span className="text-gray-400 text-xs">saat</span>
                    </div>
                    <div className="bg-[#1e1e2d] rounded-md p-3 flex flex-col items-center min-w-[60px]">
                      <span className="text-white text-xl font-bold">12</span>
                      <span className="text-gray-400 text-xs">dakika</span>
                    </div>
                    <div className="bg-[#1e1e2d] rounded-md p-3 flex flex-col items-center min-w-[60px]">
                      <span className="text-white text-xl font-bold">09</span>
                      <span className="text-gray-400 text-xs">saniye</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ORTA KISIM (Tablo) */}
        <div className="grid grid-cols-1 gap-2">
          <div className="grid grid-cols-3 border-t border-l border-[var(--border-color)] overflow-hidden">
            {[...Array(9)].map((_, idx) => (
              <div
                key={idx}
                className="border-b border-r border-[var(--border-color)] p-4 text-center text-white text-sm"
              >
                {idx + 1}. Kazanana Verilecek Ödül: 3200VP
              </div>
            ))}
          </div>
        </div>

        {/* ALT KISIM (Listeler) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* LİSTE 1 */}
          <div className="bg-[var(--advert-list-bg)] rounded-xl h-[300px] flex flex-col">
            <h3 className="text-white text-lg mb-2 bg-[var(--advert-list-bg)] p-3 rounded-t-xl">
              Katılan Kişi Listesi (351)
            </h3>
            <div className="overflow-y-auto flex-1 space-y-1 p-4">
              {[...Array(20)].map((_, idx) => (
                <div key={idx} className="text-sm text-white">
                  LOREM IPSUM D***
                </div>
              ))}
            </div>
          </div>

          {/* LİSTE 2 */}
          <div className="bg-[var(--advert-list-bg)] rounded-xl h-[300px] flex flex-col">
            <h3 className="bg-[var(--advert-list-bg)] text-white text-lg mb-2 p-3 rounded-t-xl">
              Kazanan Katılımcı Listesi (9)
            </h3>
            <div className="overflow-y-auto flex-1 space-y-1 p-4">
              {[...Array(9)].map((_, idx) => (
                <div key={idx} className="text-sm text-white">
                  LOREM IPSUM D***
                </div>
              ))}
            </div>
          </div>

          {/* LİSTE 3 */}
          <div className="bg-[var(--advert-list-bg)] rounded-xl h-[300px] flex flex-col">
            <h3 className="bg-[var(--advert-list-bg)] text-white text-lg mb-2 p-3 rounded-t-xl">
              Yayıncının Daha Önceki Çekilişleri (14)
            </h3>
            <div className="overflow-y-auto flex-1 space-y-3 p-4">
              {[...Array(6)].map((_, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <img
                    src="https://placehold.co/100"
                    alt="avatar"
                    className="w-14 h-14 rounded-full"
                  />
                  <div className="flex flex-col w-full pr-4">
                    <span className="text-sm text-white">@itemilanı</span>
                    <div className="flex justify-between text-xs w-full">
                      <span>Sit amet cursusdictum.</span>
                      <span>3150 RP | 160₺</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiveawayDetail;
