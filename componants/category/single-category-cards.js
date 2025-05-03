"use client";
import { useState } from "react";
import { AiOutlineSafety } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import Link from "next/link";

const tabData = [
  {
    id: "tr",
    title: "VALORANT",
    subtitle: "TR",
    cards: [
      {
        title: "Spotify Aile Planı",
        price: 29.9,
        viewCount: 300,
        isVitrin: true,
        vitrinText: "POPÜLER",
        vitrinColor: "var(--label4)",
        isAnimated: false,
        animatedText: "ÇOK SATAN",
        image: "https://placehold.co/300x300",
        categoryImage: "https://placehold.co/50x50/000000/FFFFFF?text=Müzik",
        sellerName: "TuneMart",
        sellerImage: "https://placehold.co/50x50",
        animateBg: "var(--success)",
      },
      {
        title: "Valorant VP",
        price: 149.0,
        viewCount: 110,
        isVitrin: true,
        vitrinText: "TAVSİYE",
        vitrinColor: "var(--label5)",
        isAnimated: false,
        animatedText: "ÇOK SATAN",
        image: "https://placehold.co/300x300",
        categoryImage: "https://placehold.co/50x50/000000/FFFFFF?text=Valorant",
        sellerName: "ValorStore",
        sellerImage: "https://placehold.co/50x50",
        animateBg: "var(--label5)",
      },
      {
        title: "League of Legends RP",
        price: 89.0,
        viewCount: 210,
        isVitrin: false,
        vitrinText: "İNDİRİM",
        vitrinColor: "var(--label1)",
        isAnimated: false,
        animatedText: "ÇOK SATAN",
        image: "https://placehold.co/300x300",
        categoryImage: "https://placehold.co/50x50/000000/FFFFFF?text=LoL",
        sellerName: "RiotMart",
        sellerImage: "https://placehold.co/50x50",
        animateBg: "var(--success)",
      },
      {
        title: "Discord Nitro",
        price: 59.0,
        viewCount: 190,
        isVitrin: true,
        vitrinText: "YENİ ÜRÜN",
        vitrinColor: "var(--label6)",
        isAnimated: false,
        animatedText: "ÇOK SATAN",
        image: "https://placehold.co/300x300",
        categoryImage: "https://placehold.co/50x50/000000/FFFFFF?text=Nitro",
        sellerName: "NitroBay",
        sellerImage: "https://placehold.co/50x50",
        animateBg: "var(--success)",
      },
      {
        title: "Xbox Game Pass",
        price: 79.0,
        viewCount: 160,
        isVitrin: false,
        vitrinText: "Vitrin İlanı",
        vitrinColor: "var(--label1)",
        isAnimated: false,
        animatedText: "ÇOK SATAN",
        image: "https://placehold.co/300x300",
        categoryImage: "https://placehold.co/50x50/000000/FFFFFF?text=Xbox",
        sellerName: "BoxStore",
        sellerImage: "https://placehold.co/50x50",
        animateBg: "var(--label5)",
      },
      {
        title: "Epic Games Hediye",
        price: 60.0,
        viewCount: 95,
        isVitrin: true,
        vitrinText: "HEDİYE",
        vitrinColor: "var(--label7)",
        isAnimated: false,
        animatedText: "ÇOK SATAN",
        image: "https://placehold.co/300x300",
        categoryImage: "https://placehold.co/50x50/000000/FFFFFF?text=Epic",
        sellerName: "EpicShop",
        sellerImage: "https://placehold.co/50x50",
        animateBg: "var(--success)",
      },
    ],
  },
  {
    id: "eu",
    title: "EU WEST",
    subtitle: "",
    cards: [
      {
        title: "Spotify Aile Planı",
        price: 29.9,
        viewCount: 300,
        isVitrin: true,
        vitrinText: "POPÜLER",
        vitrinColor: "var(--label4)",
        isAnimated: false,
        animatedText: "ÇOK SATAN",
        image: "https://placehold.co/300x300",
        categoryImage: "https://placehold.co/50x50/000000/FFFFFF?text=Müzik",
        sellerName: "TuneMart",
        sellerImage: "https://placehold.co/50x50",
        animateBg: "var(--success)",
      },
      {
        title: "Valorant VP",
        price: 149.0,
        viewCount: 110,
        isVitrin: true,
        vitrinText: "TAVSİYE",
        vitrinColor: "var(--label5)",
        isAnimated: false,
        animatedText: "ÇOK SATAN",
        image: "https://placehold.co/300x300",
        categoryImage: "https://placehold.co/50x50/000000/FFFFFF?text=Valorant",
        sellerName: "ValorStore",
        sellerImage: "https://placehold.co/50x50",
        animateBg: "var(--label5)",
      },
      {
        title: "League of Legends RP",
        price: 89.0,
        viewCount: 210,
        isVitrin: false,
        vitrinText: "İNDİRİM",
        vitrinColor: "var(--label1)",
        isAnimated: false,
        animatedText: "ÇOK SATAN",
        image: "https://placehold.co/300x300",
        categoryImage: "https://placehold.co/50x50/000000/FFFFFF?text=LoL",
        sellerName: "RiotMart",
        sellerImage: "https://placehold.co/50x50",
        animateBg: "var(--success)",
      },
      {
        title: "Discord Nitro",
        price: 59.0,
        viewCount: 190,
        isVitrin: true,
        vitrinText: "YENİ ÜRÜN",
        vitrinColor: "var(--label6)",
        isAnimated: false,
        animatedText: "ÇOK SATAN",
        image: "https://placehold.co/300x300",
        categoryImage: "https://placehold.co/50x50/000000/FFFFFF?text=Nitro",
        sellerName: "NitroBay",
        sellerImage: "https://placehold.co/50x50",
        animateBg: "var(--success)",
      },
      {
        title: "Xbox Game Pass",
        price: 79.0,
        viewCount: 160,
        isVitrin: false,
        vitrinText: "Vitrin İlanı",
        vitrinColor: "var(--label1)",
        isAnimated: false,
        animatedText: "ÇOK SATAN",
        image: "https://placehold.co/300x300",
        categoryImage: "https://placehold.co/50x50/000000/FFFFFF?text=Xbox",
        sellerName: "BoxStore",
        sellerImage: "https://placehold.co/50x50",
        animateBg: "var(--label5)",
      },
      {
        title: "Epic Games Hediye",
        price: 60.0,
        viewCount: 95,
        isVitrin: true,
        vitrinText: "HEDİYE",
        vitrinColor: "var(--label7)",
        isAnimated: false,
        animatedText: "ÇOK SATAN",
        image: "https://placehold.co/300x300",
        categoryImage: "https://placehold.co/50x50/000000/FFFFFF?text=Epic",
        sellerName: "EpicShop",
        sellerImage: "https://placehold.co/50x50",
        animateBg: "var(--success)",
      },
    ],
  },
];

export default function SingleCategoryCards() {
  const [activeTab, setActiveTab] = useState(tabData[0].id);

  return (
    <div className="container mx-auto my-4 md: my-12">
      <div className="w-full p-4 space-y-4">
        {/* Üst Menü */}
        <div className="flex items-center justify-between bg-[var(--advert-card-bg)] rounded-md md:hidden block">
          <button className="bg-[var(--label2)] hover:bg-[var(--label1)] text-white text-sm font-semibold px-6 py-4 rounded-full m-2">
            <Link href="/">TÜMÜNÜ GÖR</Link>
          </button>
        </div>
        <div className="flex items-center justify-between bg-[var(--advert-card-bg)] rounded-md">
          <div className="flex overflow-x-auto scrollbar-hide rounded-md">
            {tabData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 px-4 py-6 text-md font-semibold whitespace-nowrap transition-all flex items-center
                ${
                  activeTab === tab.id
                    ? "bg-[#4b5357] text-white"
                    : "bg-[#2a2a2e] text-gray-300 hover:bg-[#3a3a3f]"
                }`}
              >
                <img
                  src="https://placehold.co/100"
                  className="w-8 h-8 rounded-full mr-2"
                />
                {tab.title}{" "}
                {tab.subtitle && (
                  <span className="opacity-70">({tab.subtitle})</span>
                )}
              </button>
            ))}
          </div>
          <button className="bg-[var(--label2)] hover:bg-[var(--label1)] text-white text-sm font-semibold px-6 py-4 rounded-full m-2 min-w-[160px] md:min-w-auto hidden md:block">
            <Link href="/">TÜMÜNÜ GÖR</Link>
          </button>
        </div>

        {/* İçerikler */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3">
          {tabData
            .find((tab) => tab.id === activeTab)
            ?.cards.map((data, index) => (
              <div key={index}>
                <Link href="#">
                  <div className="p-2 rounded-t-md bg-[var(--advert-card-bg)]">
                    <div className="overflow-hidden">
                      <div className="relative">
                        <img
                          src={data.image}
                          alt={`Card ${data.title}`}
                          className="w-full h-full object-cover min-h-[155px] max-h-[155px] md:min-h-[202px] md:max-h-[202px] bg-gradient-to-tl rounded-md"
                        />
                        <div className="absolute top-2 right-2">
                          <AiOutlineSafety className="w-8 h-8" />
                        </div>
                      </div>
                      <div className="text-white p-2 w-full">
                        <h3 className="text-sm font-bold clamp-2 max-h-[40px] min-h-[40px] text-left">
                          {data.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center border-t border-t-[var(--advert-card-border)] bg-[var(--advert-card-bg)] rounded-b-md">
                    <div className="text-md font-bold text-white p-2">
                      {data.price.toFixed(2)}₺
                    </div>
                    <div className="p-2">
                      <div className="flex items-center rounded-full bg-[#20c65c33] text-[var(--success)] p-1">
                        <FaRegEye className="w-4 h-4 mr-1" />
                        <span className="text-[11px]">{data.viewCount}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
