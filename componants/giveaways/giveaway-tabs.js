import React, { useState } from "react";
import { useEffect } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { IoLogoTwitch } from "react-icons/io5";
import { LuTicket, LuTicketX } from "react-icons/lu";
import Link from "next/link";

const GiveawayTabs = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

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

  // Çekiliş verileri
  const allGiveaways = [
    {
      id: 1,
      username: "@itemilani",
      description: "Steam oyunları çekilişi!",
      rewards: [
        { name: "Steam Gift Card 50 TL", description: "Steam platformu için hediye kartı" },
        { name: "Valorant 1000 VP", description: "Valorant oyunu için VP paketi" },
        { name: "PUBG Mobile UC", description: "PUBG Mobile için UC paketi" },
        { name: "League of Legends RP", description: "LoL için RP paketi" }
      ],
      totalPrize: "1.047,30₺",
      timeLeft: { days: 16, hours: 6, minutes: 12, seconds: 9 },
      status: "active"
    },
    {
      id: 2,
      username: "@gamerpro",
      description: "Gaming ekipmanları çekilişi!",
      rewards: [
        { name: "Gaming Mouse", description: "Profesyonel gaming mouse" },
        { name: "Gaming Keyboard", description: "RGB gaming klavye" },
        { name: "Gaming Headset", description: "7.1 surround ses sistemi" }
      ],
      totalPrize: "2.350,00₺",
      timeLeft: { days: 8, hours: 12, minutes: 30, seconds: 45 },
      status: "active"
    },
    {
      id: 3,
      username: "@techlover",
      description: "Teknoloji ürünleri çekilişi!",
      rewards: [
        { name: "AirPods Pro", description: "Kablosuz kulaklık" },
        { name: "Power Bank", description: "20.000mAh taşınabilir şarj" },
        { name: "USB-C Cable", description: "Hızlı şarj kablosu" }
      ],
      totalPrize: "3.200,00₺",
      timeLeft: { days: 3, hours: 8, minutes: 45, seconds: 20 },
      status: "active"
    },
    {
      id: 4,
      username: "@streamer",
      description: "Yayıncı ekipmanları çekilişi!",
      rewards: [
        { name: "Webcam", description: "4K yayın kamerası" },
        { name: "Microphone", description: "Profesyonel mikrofon" },
        { name: "Green Screen", description: "Yeşil perde seti" }
      ],
      totalPrize: "1.800,00₺",
      timeLeft: { days: 0, hours: 0, minutes: 0, seconds: 0 },
      status: "ended"
    },
    {
      id: 5,
      username: "@esports",
      description: "E-spor turnuvası ödülleri!",
      rewards: [
        { name: "Gaming Chair", description: "Ergonomik gaming koltuğu" },
        { name: "Gaming Desk", description: "LED'li gaming masası" },
        { name: "Monitor", description: "27 inç 144Hz monitör" }
      ],
      totalPrize: "4.500,00₺",
      timeLeft: { days: 12, hours: 18, minutes: 25, seconds: 10 },
      status: "active"
    },
    {
      id: 6,
      username: "@mobilegamer",
      description: "Mobil oyun çekilişi!",
      rewards: [
        { name: "iPhone 15", description: "Apple iPhone 15" },
        { name: "Samsung Galaxy", description: "Samsung Galaxy S24" },
        { name: "Gaming Controller", description: "Mobil gaming kontrolcü" }
      ],
      totalPrize: "25.000,00₺",
      timeLeft: { days: 0, hours: 0, minutes: 0, seconds: 0 },
      status: "ended"
    }
  ];

  // Filtreleme fonksiyonu
  const filteredGiveaways = allGiveaways.filter(giveaway => {
    const matchesSearch = 
      giveaway.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      giveaway.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      giveaway.rewards.some(reward => 
        reward.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        reward.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    
    if (activeTab === "all") {
      return matchesSearch && giveaway.status === "active";
    } else {
      return matchesSearch && giveaway.status === "ended";
    }
  });

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
        <div className="px-4 py-2 bg-[var(--primary)] text-white rounded-sm">
          Sayfada Bulunan Anlık Kullanıcı Sayısı: 459
        </div>
      </div>
      <div className="p-4 space-y-6">
        {/* Search & Tabs & Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <input
            type="text"
            placeholder={`Çekiliş Ara${dots}`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="rounded cursor-pointer px-3 py-2 flex-1 min-w-[200px] bg-[var(--advert-list-bg)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--success)]"
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
              href="/yayinci-basvuru"
              className="bg-[var(--label4)] text-white px-4 py-2 rounded flex items-center gap-2"
            >
              <IoLogoTwitch />
              Yayıncı Başvurusu Yap
            </Link>
          </div>
        </div>

        {/* Sonuç sayısı */}
        <div className="text-sm text-[var(--text-gray)]">
          {filteredGiveaways.length} çekiliş bulundu
        </div>

        {/* Tab Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredGiveaways.length > 0 ? (
            filteredGiveaways.map((giveaway, index) => (
              <div
                key={giveaway.id}
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
                    <div className="font-semibold">{giveaway.username}</div>
                    <div className="text-gray-400 text-sm">
                      {giveaway.description}
                    </div>
                  </div>
                </div>

                {/* Body (scrollable) */}
                <div className="flex-1 overflow-y-auto max-h-40 space-y-2 mb-4 border-b-2 pb-2 border-b-[var(--advert-list-bg)]">
                  {giveaway.rewards.map((reward, idx) => (
                    <div key={idx} className="flex items-center">
                      <img
                        src="https://placehold.co/32x32"
                        alt="Reward"
                        className="w-12 h-12 mr-3 rounded-md"
                      />
                      <div>
                        <div className="font-medium text-sm">
                          {reward.name}
                        </div>
                        <div className="text-xs text-gray-400">
                          {reward.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="space-y-2">
                  <div className="flex justify-between font-semibold text-lg">
                    <div className="flex items-center justify-center gap-1 flex-wrap">
                      <span className="text-yellow-400">{giveaway.totalPrize}</span>
                      <span>Toplam Ödül</span>
                    </div>
                    <div className="text-sm flex items-center gap-2">
                      <span className="rounded-md p-4 text-center bg-[var(--advert-list-bg)]">
                        {giveaway.timeLeft.days}g
                      </span>
                      <span className="rounded-md p-4 text-center bg-[var(--advert-list-bg)]">
                        {giveaway.timeLeft.hours}s
                      </span>
                      <span className="rounded-md p-4 text-center bg-[var(--advert-list-bg)]">
                        {giveaway.timeLeft.minutes}dk
                      </span>
                      <span className="rounded-md p-4 text-center bg-[var(--advert-list-bg)]">
                        {giveaway.timeLeft.seconds}sn
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    {giveaway.status === "active" ? (
                      <>
                        <button className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600 transition">
                      Çekilişe Katıl
                    </button>
                        <Link href="/giveaway-detail" className="bg-green-500 text-white w-full py-2 rounded hover:bg-green-600 transition flex items-center justify-center">
                      Kuralları İncele
                        </Link>
                      </>
                    ) : (
                      <button className="bg-gray-500 text-white w-full py-2 rounded cursor-not-allowed">
                        Çekiliş Sona Erdi
                    </button>
                    )}
                  </div>
                </div>
              </div>
            ))
        ) : (
            <div className="col-span-full text-center py-8 text-[var(--text-gray)]">
              Arama kriterlerinize uygun çekiliş bulunamadı.
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default GiveawayTabs;
