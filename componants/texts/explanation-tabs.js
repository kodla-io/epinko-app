"use client";

import { useState } from "react";
import { FaClipboardList, FaCommentDots } from "react-icons/fa";
import Comments from "../texts/comments";

// Tab içerik bileşenleri
const TabAciklamasi = () => (
  <div>
    <p className="text-justify">
      Ultrices neque ornare aenean euismod elementum nisi quis. Nulla
      pellentesque dignissim enim sit amet venenatis. Tincidunt ornare massa
      eget egestas purus viverra accumsan in. Massa tempor nec feugiat nisl
      pretium. Amet consectetur adipiscing elit duis tristique sollicitudin.
      Aliquam vestibulum morbi blandit cursus risus at. Ante metus dictum at
      tempor commodo ullamcorper a. Tincidunt tortor aliquam nulla facilisi.
      Etiam dignissim diam quis enim lobortis scelerisque fermentum. Ac odio
      tempor orci dapibus. Sollicitudin ac orci phasellus egestas tellus rutrum
      tellus pellentesque.
    </p>
    <br />
    <p className="text-justify">
      In egestas erat imperdiet sed euismod. Facilisi cras fermentum odio eu
      feugiat pretium nibh. Integer enim neque volutpat ac tincidunt vitae
      semper quis. Sem nulla pharetra diam sit amet nisl suscipit adipiscing
      bibendum . Vitae congue mauris rhoncus aenean vel elit scelerisque.
      Egestas sed sed risus pretium quam vulputate dignissim. Sed euismod nisi
      porta lorem mollis. Venenatis a condimentum vitae sapien. Pharetra vel
      turpis nunc eget. Duis convallis convallis tellus id interdum velit
      laoreet. Scelerisque fermentum dui faucibus in ornare quam. Volutpat est
      velit egestas dui id ornare arcu odio ut. At quis risus sed vulputate odio
      ut enim blandit. At lectus urna duis convallis convallis tellus id
      interdum velit. Vitae sapien pellentesque habitant morbi tristique
      senectus et netus. Nibh mauris cursus mattis molestie a iaculis at erat
      pellentesque. Ut ornare lectus sit amet est placerat in egestas erat.{" "}
    </p>
  </div>
);

const TabSaticiYorumlari = () => (
  <div>
    <Comments />
  </div>
);

// Tab listesi
const tabs = [
  { id: 1, label: "Açıklama", icon: <FaClipboardList /> },
  { id: 2, label: "Kullanıcı Değerlendirmeleri", icon: <FaCommentDots /> },
];

const ExplanationTabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  // İçeriği dinamik olarak seç
  const renderTabContent = () => {
    switch (activeTab) {
      case 1:
        return <TabAciklamasi />;
      case 2:
        return <TabSaticiYorumlari />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto my-8 px-4 md:px-0">
      <div className="w-full">
        {/* Tabs */}
        <div className="flex overflow-x-auto bg-[var(--advert-list-bg)] rounded-t-lg px-2 py-3 gap-2 scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md whitespace-nowrap transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-[var(--advert-card-bg)]"
                  : "bg-[var(--advert-list-bg)] hover:bg-[var(--advert-card-bg)]"
              }`}
            >
              {tab.icon}
              <span className="text-sm font-medium">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-[var(--advert-list-bg)] p-4 rounded-b-lg max-h-[300px] min-h-[200px] mt-1 overflow-y-auto">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default ExplanationTabs;
