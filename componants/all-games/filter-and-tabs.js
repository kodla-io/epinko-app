"use client";

import { useState } from "react";

const tabs = ["Tümü", "Oyun", "Sosyal Medya", "Lisans Hizmetleri", "Diğer"];

export default function FilterAndTabs({ activeTab, setActiveTab }) {
  return (
    <div className="full-size-bg-img-all-games py-4 md:min-h-[350px] md:max-h-[350px] max-h-[100%] md:py-0 text-white flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold">TÜM KATEGORİLER</h2>
        <p className="text-sm mt-1">
          epinko.com'da yüzlerce kategoride binlerce farklı ürün sizi bekliyor.
        </p>
      </div>

      <div className="mt-4 gap-2 flex flex-wrap md:flex-nowrap items-center justify-between container mx-auto">
        <div className="w-full md:w-1/3 p-2 bg-[#0000001f] rounded-lg">
          <input
            type="text"
            placeholder="Arama"
            className="bg-[var(--background)] text-white rounded-lg p-4 w-full placeholder:text-[var(--foreground)]"
          />
        </div>
        <div className="flex justify-center md:justify-between gap-2 flex-wrap w-full md:w-2/3 bg-[#0000001f] p-2 rounded-lg">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`p-4 rounded-lg w-1/2 md:flex-1 ${
                activeTab === tab ? "bg-[var(--primary)]" : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
