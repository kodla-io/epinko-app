import React from "react";
import SingleAdvert from "./single-tab-advert";
import Link from "next/link";

const items = [
  {
    title: "Roblox",
    imageUrl: "https://placehold.co/50",
    description: "500+ Başlık Mevcut",
  },
  {
    title: "Roblox",
    imageUrl: "https://placehold.co/50",
    description: "300+ Başlık Mevcut",
  },
  {
    title: "Roblox",
    imageUrl: "https://placehold.co/50",
    description: "400+ Başlık Mevcut",
  },
  {
    title: "Roblox",
    imageUrl: "https://placehold.co/50",
    description: "600+ Başlık Mevcut",
  },
  {
    title: "Roblox",
    imageUrl: "https://placehold.co/50",
    description: "700+ Başlık Mevcut",
  },
  {
    title: "Roblox",
    imageUrl: "https://placehold.co/50",
    description: "400+ Başlık Mevcut",
  },
  {
    title: "Roblox",
    imageUrl: "https://placehold.co/50",
    description: "600+ Başlık Mevcut",
  },
  {
    title: "Roblox",
    imageUrl: "https://placehold.co/50",
    description: "700+ Başlık Mevcut",
  },
  {
    title: "Roblox",
    imageUrl: "https://placehold.co/50",
    description: "500+ Başlık Mevcut",
  },
  {
    title: "Roblox",
    imageUrl: "https://placehold.co/50",
    description: "300+ Başlık Mevcut",
  },
  {
    title: "Roblox",
    imageUrl: "https://placehold.co/50",
    description: "400+ Başlık Mevcut",
  },
  {
    title: "Roblox",
    imageUrl: "https://placehold.co/50",
    description: "600+ Başlık Mevcut",
  },
  {
    title: "Roblox",
    imageUrl: "https://placehold.co/50",
    description: "700+ Başlık Mevcut",
  },
  {
    title: "Roblox",
    imageUrl: "https://placehold.co/50",
    description: "400+ Başlık Mevcut",
  },
  {
    title: "Roblox",
    imageUrl: "https://placehold.co/50",
    description: "600+ Başlık Mevcut",
  },
  {
    title: "Roblox",
    imageUrl: "https://placehold.co/50",
    description: "700+ Başlık Mevcut",
  },
];

const NewAdver = () => {
  return (
    <section
      style={{ backgroundColor: "var(--background-secondary)" }}
      className="p-4"
    >
      <div className="container mx-auto">
        <div className="flex items-center space-x-4">
          <h2
            style={{ color: "var(--foreground)" }}
            className="text-white text-[30px] py-2 font-bold"
          >
            YENİ İLANLAR
          </h2>
          <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Sol Bölüm (Yan Menü) */}
          <div className="flex-auto lg:basis-4/16 p-4 rounded-lg min-h-[664px] max-h-[664px]">
            <div className="text-white mb-4">
              <input
                type="text"
                placeholder="Kategori Ara"
                className="w-full p-2 rounded border border-gray-700 text-sm"
              />
            </div>
            <div className="border border-gray-800 rounded-lg p-2">
              <ul className="overflow-y-scroll overflow-x-hidden min-h-[576px] max-h-[576px]">
                {items.map((item, index) => (
                  <li
                    key={index}
                    style={{
                      backgroundColor: "var(--news-card-bg)",
                      color: "var(--foreground)",
                    }}
                    className="flex items-start mb-4 rounded-lg shadow-lg"
                  >
                    <Link href="#">
                      <div className="flex w-full">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="flex-grow w-18 h-18 mr-2 rounded"
                          style={{ flex: "2" }}
                        />
                        <div
                          className="text-white text-sm flex flex-col justify-between"
                          style={{ flex: "6" }}
                        >
                          <div>
                            <div className="font-bold">{item.title}</div>
                          </div>

                          <div className="flex flex-col space-y-2 text-[9px]">
                            <div className="flex space-x-4">
                              <div className="flex items-center space-x-1 text-gray-400">
                                <span>🔰</span>
                                <span>100+ Başarılı İşlem</span>
                              </div>
                              <div className="flex items-center space-x-1 text-gray-400">
                                <span>🛡️</span>
                                <span>100+ Güvenilir Satıcı</span>
                              </div>
                            </div>
                            <div className="flex space-x-4">
                              <div className="flex items-center space-x-1 text-gray-400">
                                <span>🔰</span>
                                <span>100+ Başarılı İşlem</span>
                              </div>
                              <div className="flex items-center space-x-1 text-gray-400">
                                <span>🛡️</span>
                                <span>100+ Güvenilir Satıcı</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sağ Bölüm (Ana İçerik) */}
          <div
            style={{ backgroundColor: "var(--bg-soft)" }}
            className="flex-auto lg:basis-12/16 p-1 rounded-lg md:p-4"
          >
            <SingleAdvert />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewAdver;
