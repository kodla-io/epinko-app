"use client";

import { useState } from "react";

const SearchSidebar = () => {
  const categories = [
    "Pubg Battleground",
    "Pubg Mobile",
    "Rise Online World",
    "Call Of Duty Mobile",
    "Pubg New State",
    "Rise Of Kingdoms",
    "Pasha Fencer",
    "Mobile Legends",
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const filteredCategories = categories.filter(category =>
    category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className="text-[var(--foreground)] p-4 rounded-lg md:relative md:mt-[-100px] bg-[var(--advert-card-bg)]"
    >
      <h2
        style={{ color: "var(--foreground)" }}
        className="text-white text-[20px] mb-2 font-bold"
      >
        KATEGORİLER
      </h2>
      {/* Kategori Arama */}
      <div className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Kategori Ara"
          className="w-full p-2 rounded text-[var(--foreground)] bg-[var(--advert-list-bg)] focus:outline-none focus:ring-1 focus:ring-[var(--success)] focus:border-[var(--success)]"
        />
      </div>

      {/* Kategori Listesi */}
      <div className="mb-4 space-y-2 max-h-[300px] overflow-y-scroll">
        {filteredCategories.map((game, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 border-b border-gray-500 pb-2"
          >
            <div className="w-8 h-8">
              <img className="rounded-sm" src="https://placehold.co/200" />
            </div>
            <span>{game}</span>
          </div>
        ))}
        {filteredCategories.length === 0 && (
          <div className="text-center py-4 text-gray-500">
            Kategori bulunamadı
          </div>
        )}
      </div>

      {/* Fiyat Aralığı */}
      <div className="mb-4">
        <h3 className="mb-2">Fiyat Aralığı</h3>
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Min. Fiyat"
            className="w-1/2 p-2 rounded text-[var(--foreground)] bg-[var(--advert-list-bg)] focus:outline-none focus:ring-1 focus:ring-[var(--success)] focus:border-[var(--success)]"
          />
          <input
            type="text"
            placeholder="Max. Fiyat"
            className="w-1/2 p-2 rounded text-[var(--foreground)] bg-[var(--advert-list-bg)] focus:outline-none focus:ring-1 focus:ring-[var(--success)] focus:border-[var(--success)]"
          />
        </div>
      </div>

      {/* Satıcı Filtrele */}
      <div className="mb-4">
        <h3 className="mb-2">Satıcı Filtrele</h3>
        <input
          type="text"
          placeholder="Satıcı Adı Giriniz"
          className="w-full p-2 rounded text-[var(--foreground)] bg-[var(--advert-list-bg)] focus:outline-none focus:ring-1 focus:ring-[var(--success)] focus:border-[var(--success)]"
        />
      </div>

      {/* Kelime Filtrele */}
      <div className="mb-4">
        <h3 className="mb-2">Kelime Filtrele</h3>
        <input
          type="text"
          placeholder="Kelime Giriniz"
          className="w-full p-2 rounded text-[var(--foreground)] bg-[var(--advert-list-bg)] focus:outline-none focus:ring-1 focus:ring-[var(--success)] focus:border-[var(--success)]"
        />
      </div>

      {/* Diğer Özellikler */}
      <div className="mb-4">
        <h3 className="mb-2">Diğer Özellikler</h3>
        <div className="space-y-2">
          {["Çevrimiçi Satıcı", "Güvenilir Satıcı", "En Hızlı Teslimat"].map(
            (option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input type="checkbox" className="!h-4 !w-4 text-[var(--success)]" />
                <span>{option}</span>
              </div>
            )
          )}
        </div>
      </div>

      {/* Filtreyi Uygula Butonu */}
      <button className="w-full bg-[var(--success)] text-white p-2 rounded">
        Filtreyi Uygula
      </button>
    </div>
  );
};

export default SearchSidebar;
