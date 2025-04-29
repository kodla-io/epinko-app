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
              <div className="w-full md:flex-1 bg-[var(--advert-list-bg)] rounded-xl p-4 flex items-center justify-center">
                {/* Buraya resmi koy */}
                <img
                  src="https://placehold.co/500"
                  alt="Main"
                  className="w-full h-full object-cover rounded-lg "
                />
              </div>

              {/* SAĞ (CHAT) */}
              <div className="w-full md:flex-1 bg-[var(--advert-list-bg)] rounded-xl p-4">
                <div className="mx-auto rounded-lg space-y-4">
                  {/* Başlık */}
                  <div className="">
                    <h2 className="text-md font-bold uppercase text-[#f4f4f5]">
                      ID NEQUE ALIQUAM VESTIBULUM MORBI BLANDIT
                    </h2>
                    <div className="w-full h-1 bg-orange-400 mx-auto mt-2 rounded-full"></div>
                    <p className="text-sm mt-2 text-gray-300">
                      Ultrices neque ornare aenean euismod elementum nisi quis.
                      Nulla pellentesque dignissim enim sit amet venenatis.
                      Tincidunt ornare eget egestas purus viverra accumsan in.
                    </p>
                  </div>

                  {/* Bilgi Kutuları */}
                  <div className="grid grid-cols-2 gap-3 text-sm w-full">
                    <div className="bg-[#26263d] rounded-md p-3 flex flex-col items-center border border-green-500">
                      <span className="text-lg">📢</span>
                      <span className="mt-1">İlan Numarası</span>
                      <span className="font-semibold text-white">#TS457F</span>
                    </div>
                    <div className="bg-[#26263d] rounded-md p-3 flex flex-col items-center border border-green-500">
                      <span className="text-lg">👁️</span>
                      <span className="mt-1">Görüntülenme</span>
                      <span className="font-semibold text-white">57</span>
                    </div>
                    <div className="bg-[#26263d] rounded-md p-3 flex flex-col items-center border border-green-500">
                      <span className="text-lg">📅</span>
                      <span className="mt-1">
                        Teslimat Süresi
                      </span>
                      <span className="font-semibold text-white">1 Saat</span>
                    </div>
                    <div className="bg-[#26263d] rounded-md p-3 flex flex-col items-center border border-green-500">
                      <span className="text-lg">📦</span>
                      <span className="mt-1">Toplam Stok</span>
                      <span className="font-semibold text-white">37 Adet</span>
                    </div>
                  </div>

                  {/* Fiyat */}
                  <div className="w-full">
                    <p className="text-sm">İlan Fiyatı</p>
                    <p className="text-2xl font-bold text-yellow-400">52.30₺</p>
                  </div>

                  {/* Miktar ve Buton */}
                  <div className="flex items-center justify-between gap-3 w-full">
                    <div className="flex items-center bg-[#26263d] px-2 py-1 rounded-md">
                      <button className="text-white text-xl px-2">−</button>
                      <input
                        type="text"
                        value="120"
                        className="w-12 text-center bg-transparent text-white outline-none"
                        readOnly
                      />
                      <button className="text-white text-xl px-2">+</button>
                    </div>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-semibold transition">
                      Siparişi Tamamla
                    </button>
                  </div>
                </div>
              </div>
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
      </div>
    </div>
  );
};

export default GiveawayDetail;
