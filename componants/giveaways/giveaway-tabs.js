import React, { useState } from "react";
import { useEffect } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { IoLogoTwitch } from "react-icons/io5";
import { LuTicket, LuTicketX } from "react-icons/lu";
import Link from "next/link";

const GiveawayTabs = () => {
  const [activeTab, setActiveTab] = useState("all");

  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev === "...") return "..";
        if (prev === "..") return "...";
        if (prev === ".") return "..";
        return ".";
      });
    }, 500); // 0.5 saniyede bir değişsin
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center flex-wrap md:flex-nowrap space-x-4">
        <h2
          style={{ color: "var(--foreground)" }}
          className="text-white text-[30px] py-2 font-bold md:px-0 px-4"
        >
          ÇEKİLİŞ SİSTEMİ
        </h2>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
        <div className="px-4 py-2 bg-[var(--label2)] rounded-sm">
          Sayfada Bulunan Anlık Kullanıcı Sayısı: 459
        </div>
      </div>
      <div className="p-4 space-y-6">
        {/* Search & Tabs & Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <input
            type="text"
            placeholder={`Çekiliş Ara${dots}`}
            className="rounded cursor-pointer px-3 py-2 flex-1 min-w-[200px] bg-[var(--advert-list-bg)] text-[var(--foreground)]"
          />
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded ${
                activeTab === "all"
                  ? "bg-blue-500 text-white flex items-center gap-2 text-sm md:text-lg"
                  : "bg-[var(--advert-list-bg)] flex items-center gap-2 text-sm md:text-lg"
              }`}
            >
              <LuTicket />
              Tüm Çekilişler
            </button>
            <button
              onClick={() => setActiveTab("ended")}
              className={`px-4 py-2 rounded ${
                activeTab === "ended"
                  ? "bg-blue-500 text-white flex items-center gap-2 text-sm md:text-lg"
                  : "bg-[var(--advert-list-bg)] flex items-center gap-2 text-sm md:text-lg"
              }`}
            >
              <LuTicketX />
              Biten Çekilişler
            </button>
          </div>
          <div className="flex gap-2 ml-auto md:flex-nowrap flex-wrap">
            <Link
              href="#"
              className="bg-[var(--success)] text-white px-4 py-2 rounded flex items-center gap-2"
            >
              <FiPlusCircle />
              Yeni Çekiliş Oluştur
            </Link>
            <Link
              href="#"
              className="bg-[var(--label4)] text-white px-4 py-2 rounded flex items-center gap-2"
            >
              <IoLogoTwitch />
              Yayıncı Başvurusu Yap
            </Link>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === "all" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <div
                key={index}
                className="bg-[var(--list-box)] rounded-lg p-4 flex flex-col"
              >
                {/* Header */}
                <div className="flex items-center mb-4">
                  <img
                    src="https://placehold.co/40x40"
                    alt="Profile"
                    className="rounded-full w-16 h-16 mr-3"
                  />
                  <div>
                    <div className="font-semibold">@itemilani</div>
                    <div className="text-gray-400 text-sm">
                      Açıklama kısa metni burada.
                    </div>
                  </div>
                </div>

                {/* Body (scrollable) */}
                <div className="flex-1 overflow-y-auto max-h-40 space-y-2 mb-4 border-b-2 pb-2 border-b-[var(--advert-list-bg)]">
                  {[1, 2, 3, 4].map((reward, idx) => (
                    <div key={idx} className="flex items-center">
                      <img
                        src="https://placehold.co/32x32"
                        alt="Reward"
                        className="w-12 h-12 mr-3 rounded-md"
                      />
                      <div>
                        <div className="font-medium text-sm">
                          {reward}. Kazanana verlecek ödül
                        </div>
                        <div className="text-xs text-gray-400">
                          Ödül açıklaması burada olacak
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="space-y-2">
                  <div className="flex justify-between font-semibold text-lg">
                    <div className="flex items-center justify-center gap-1 flex-wrap">
                      <span className="text-yellow-400">1.047,30₺</span>
                      <span>Toplam Ödül</span>
                    </div>
                    <div className="text-sm flex items-center gap-2">
                      <span className="rounded-md p-4 text-center bg-[var(--advert-list-bg)]">
                        16g
                      </span>
                      <span className="rounded-md p-4 text-center bg-[var(--advert-list-bg)]">
                        6s
                      </span>
                      <span className="rounded-md p-4 text-center bg-[var(--advert-list-bg)]">
                        12dk
                      </span>
                      <span className="rounded-md p-4 text-center bg-[var(--advert-list-bg)]">
                        9sn
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button className="bg-blue-500 text-white w-full py-2 rounded">
                      Çekilişe Katıl
                    </button>
                    <button className="bg-green-500 text-white w-full py-2 rounded">
                      Kuralları İncele
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[1, 2, 3, 4].map((item, index) => (
              <div
                key={index}
                className="bg-[var(--list-box)] rounded-lg p-4 flex flex-col"
              >
                {/* Header */}
                <div className="flex items-center mb-4">
                  <img
                    src="https://placehold.co/40x40"
                    alt="Profile"
                    className="rounded-full w-16 h-16 mr-3"
                  />
                  <div>
                    <div className="font-semibold">@itemilani</div>
                    <div className="text-gray-400 text-sm">
                      Açıklama kısa metni burada.
                    </div>
                  </div>
                </div>

                {/* Body (scrollable) */}
                <div className="flex-1 overflow-y-auto max-h-40 space-y-2 mb-4 border-b-2 pb-2 border-b-[var(--advert-list-bg)]">
                  {[1, 2, 3, 4].map((reward, idx) => (
                    <div key={idx} className="flex items-center">
                      <img
                        src="https://placehold.co/32x32"
                        alt="Reward"
                        className="w-12 h-12 mr-3 rounded-md"
                      />
                      <div>
                        <div className="font-medium text-sm">
                          {reward}. Kazanana verlecek ödül
                        </div>
                        <div className="text-xs text-gray-400">
                          Ödül açıklaması burada olacak
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="space-y-2">
                  <div className="flex justify-between font-semibold text-lg">
                    <div className="flex items-center justify-center gap-1 flex-wrap">
                      <span className="text-yellow-400">1.047,30₺</span>
                      <span>Toplam Ödül</span>
                    </div>
                    <div className="text-sm flex items-center gap-2">
                      <span className="rounded-md p-4 text-center bg-[var(--advert-list-bg)]">
                        16g
                      </span>
                      <span className="rounded-md p-4 text-center bg-[var(--advert-list-bg)]">
                        6s
                      </span>
                      <span className="rounded-md p-4 text-center bg-[var(--advert-list-bg)]">
                        12dk
                      </span>
                      <span className="rounded-md p-4 text-center bg-[var(--advert-list-bg)]">
                        9sn
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button className="bg-blue-500 text-white w-full py-2 rounded">
                      Çekilişe Katıl
                    </button>
                    <button className="bg-green-500 text-white w-full py-2 rounded">
                      Kuralları İncele
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GiveawayTabs;
