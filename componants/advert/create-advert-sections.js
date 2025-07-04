// components/CategoryStep.jsx
import React, { useState } from "react";
import { LuCircleChevronLeft } from "react-icons/lu";
import { GiCrossedSwords } from "react-icons/gi";
import { GiCheckedShield } from "react-icons/gi";
import { GiLegArmor } from "react-icons/gi";
import { LiaCoinsSolid } from "react-icons/lia";
import { TfiViewGrid } from "react-icons/tfi";
import { FaRegCircleDot } from "react-icons/fa6";
import { IoTimeOutline } from "react-icons/io5";
import { FcAdvertising } from "react-icons/fc";
import { FaRegImages } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { PiStarDuotone } from "react-icons/pi";
import { PiRectangleDashedFill } from "react-icons/pi";
import { PiRectangleDashedDuotone } from "react-icons/pi";

import AdvertCard from "./advert-card";

const Data = [
  {
    title: "Epic Games Hediye",
    price: 60.0,
    viewCount: 95,
    isVitrin: false,
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
];

const fakeData = [
  {
    id: 1,
    name: "Knight Online",
    image: "https://placehold.co/500?text=Knight+Online",
    subcategories: [
      {
        id: 101,
        name: "Item Satış",
        image: "https://placehold.co/500?text=Item+Satış",
      },
      {
        id: 102,
        name: "Hesap",
        image: "https://placehold.co/500?text=Hesap",
      },
      {
        id: 103,
        name: "CSS Ring",
        image: "https://placehold.co/500?text=CSS+Ring",
      },
    ],
  },
  {
    id: 2,
    name: "Metin2",
    image: "https://placehold.co/500?text=Metin2",
    subcategories: [
      {
        id: 201,
        name: "PVP Server",
        image: "https://placehold.co/500?text=PVP+Server",
      },
      {
        id: 202,
        name: "Item Alım",
        image: "https://placehold.co/500?text=Item+Alım",
      },
    ],
  },
  {
    id: 3,
    name: "PUBG Mobile",
    image: "https://placehold.co/500?text=PUBG+Mobile",
    subcategories: [
      {
        id: 301,
        name: "Skin Satış",
        image: "https://placehold.co/500?text=Skin+Satış",
      },
    ],
  },
  {
    id: 4,
    name: "Knight Online",
    image: "https://placehold.co/500?text=Knight+Online",
    subcategories: [
      {
        id: 101,
        name: "Item Satış",
        image: "https://placehold.co/500?text=Item+Satış",
      },
      {
        id: 102,
        name: "Hesap",
        image: "https://placehold.co/500?text=Hesap",
      },
      {
        id: 103,
        name: "CSS Ring",
        image: "https://placehold.co/500?text=CSS+Ring",
      },
    ],
  },
  {
    id: 5,
    name: "Metin2",
    image: "https://placehold.co/500?text=Metin2",
    subcategories: [
      {
        id: 201,
        name: "PVP Server",
        image: "https://placehold.co/500?text=PVP+Server",
      },
      {
        id: 202,
        name: "Item Alım",
        image: "https://placehold.co/500?text=Item+Alım",
      },
    ],
  },
  {
    id: 6,
    name: "PUBG Mobile",
    image: "https://placehold.co/500?text=PUBG+Mobile",
    subcategories: [
      {
        id: 301,
        name: "Skin Satış",
        image: "https://placehold.co/500?text=Skin+Satış",
      },
    ],
  },
];

const stepLabels = ["Kategori Seç", "İlan Bilgileri", "Boost", "Sonuç"];

const CategoryStep = () => {
  const [currentStep, setStep] = useState(1);

  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selected, setSelected] = useState("PUBG Mobile");
  const [selectedLanguage, setSelectedLanguage] = useState("language1");

  const selectedCategory = fakeData.find(
    (cat) => cat.id === selectedCategoryId
  );

  const handleSubcategorySelect = (sub) => {
    setSelectedSubcategory(sub);
    setStep(2);
  };

  // AŞAMA 3
  const options = {
    homepage: [
      { duration: "12 saat", price: 4 },
      { duration: "1 gün", price: 7 },
      { duration: "2 gün", price: 12 },
      { duration: "3 gün", price: 20 },
      { duration: "1 hafta", price: 36 },
      { duration: "1 ay", price: 90 },
    ],
    showcase: [
      { duration: "12 saat", price: 2 },
      { duration: "1 gün", price: 3.5 },
      { duration: "2 gün", price: 6 },
      { duration: "3 gün", price: 10 },
      { duration: "1 hafta", price: 18 },
      { duration: "1 ay", price: 45 },
    ],
    frame: [{ duration: "1 ay", price: 4 }],
    colorFrame: [{ duration: "1 ay", price: 4 }],
  };

  const [selected3, setSelected3] = useState({
    homepage: 0,
    showcase: 0,
    frame: 0,
    colorFrame: 0,
  });

  const handleSelect = (section, index) => {
    setSelected3((prev) => ({
      ...prev,
      [section]: prev[section] === index ? null : index, // Aynı seçeneğe tıklanırsa kaldır
    }));
  };

  const logSelections = () => {
    console.log("Seçilenler:", {
      "Anasayfa Vitrini": options.homepage[selected.homepage],
      "Vitrin İlanı": options.showcase[selected.showcase],
      "Kalın Çerçeve": options.frame[selected.frame],
      "Renkli Çerçeve": options.colorFrame[selected.colorFrame],
    });
  };

  return (
    <div className="text-[var(--foreground)] space-y-6 bg-[var(--advert-list-bg)] p-4">
      {/* Üst Adım Göstergesi */}
      <div className="flex justify-center gap-4 my-4">
        {currentStep > 1 && (
          <button
            onClick={() => setStep(currentStep - 1)}
            className="w-8 h-8 flex items-center justify-center rounded-full transition text-[var(--idle)]"
          >
            <LuCircleChevronLeft className="w-full h-full" />
          </button>
        )}
        {[1, 2, 3, 4].map((step) => (
          <React.Fragment key={step}>
            <div className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center text-white justify-center font-bold text-sm ${
                  currentStep === step ? "bg-[var(--idle)]" : "bg-[var(--text-gray)]"
                }`}
              >
                {step}
              </div>
              <span className="text-sm">{stepLabels[step - 1]}</span>
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* Adım 1: Kategori ve Alt Kategori */}
      {currentStep === 1 && (
        <div className="flex gap-2 w-full">
          {/* Ana Kategoriler */}
          <ul className=" w-3/4 p-2 max-h-[600px] overflow-y-auto">
            <input
              type="text"
              placeholder="Kategori ara..."
              className="w-full px-4 py-2 rounded-md mb-3 bg-[var(--background)] text-[var(--foreground)] placeholder-gray-400 focus:outline-none transition"
            />

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2">
              {fakeData.map((category) => (
                <li
                  key={category.id}
                  className={`rounded cursor-pointer border-2 transition-all p-2
                ${
                  selectedCategoryId === category.id
                    ? "border-[var(--success)] bg-[var(--success)]/10"
                    : "border-transparent hover:border-[var(--success)] bg-[var(--background)]"
                }
              `}
                  onClick={() => setSelectedCategoryId(category.id)}
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-[150px] object-cover rounded-md"
                  />
                  <p className="text-center mt-2 text-[var(--foreground)] font-medium">
                    {category.name}
                  </p>
                </li>
              ))}
            </div>
          </ul>

          {/* Alt Kategoriler */}
          <div className="flex flex-col w-1/4 bg-[var(--advert-card-bg)] rounded p-2 space-y-2 max-h-[600px] overflow-y-auto">
            {selectedCategory?.subcategories?.length > 0 ? (
              selectedCategory.subcategories.map((sub) => (
                <div
                  key={sub.id}
                  onClick={() => handleSubcategorySelect(sub)}
                  className="flex items-center gap-2 p-2 bg-[var(--advert-list-bg)] hover:bg-[var(--success)]/10 cursor-pointer rounded text-[var(--foreground)]"
                >
                  <img
                    src={sub.image}
                    alt={sub.name}
                    className="w-10 h-10 object-cover rounded"
                  />
                  <span>{sub.name}</span>
                </div>
              ))
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-[var(--foreground)] text-sm">Lütfen bir kategori seçin</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Adım 2 */}
      {currentStep === 2 && (
        <div
          id="advertCreate"
          className="space-y-4 md:space-y-6 p-2 md:p-4 rounded-lg"
        >
          {/* Select: Kategori */}
          <div className="flex items-center gap-2">
            <TfiViewGrid className="w-6 h-6 text-[var(--success)]" />
            <h2 className="text-[var(--foreground)] font-semibold">
              İlan kategori Bilgileri
            </h2>
          </div>
          <div>
            <select className="w-full p-2 rounded text-[var(--foreground)]">
              <option value="">Kategori Seçin</option>
              <option value="1">Knight Online</option>
            </select>
          </div>

          {/* Kategori ve Butonlar */}
          <div className="flex flex-wrap md: flex-nowrap gap-4 items-center text-center">
            <span
              onClick={() => setSelected("PUBG Mobile")}
              className={`px-4 py-1 rounded-md text-sm cursor-pointer transition-colors duration-200 w-full md:flex-1 flex items-center py-3 justify-center gap-3 ${
                selected === "PUBG Mobile" ? "bg-[var(--success)] text-white" : "text-[var(--foreground)]"
              }`}
              style={{
                backgroundColor:
                  selected === "PUBG Mobile" ? "" : "var(--advert-list-bg)",
              }}
            >
              <GiCrossedSwords className="w-8 h-8" />
              <span>PUBG Mobile</span>
            </span>

            <span
              onClick={() => setSelected("Hesap Satış")}
              className={`px-4 py-1 rounded-md text-sm cursor-pointer transition-colors duration-200 w-full md:flex-1 flex items-center py-3 justify-center gap-3 ${
                selected === "Hesap Satış" ? "bg-[var(--success)] text-white" : "text-[var(--foreground)]"
              }`}
              style={{
                backgroundColor:
                  selected === "Hesap Satış" ? "" : "var(--advert-list-bg)",
              }}
            >
              <GiCheckedShield className="w-8 h-8" />
              <span>Hesap Satış</span>
            </span>

            <span
              onClick={() => setSelected("Lorem Ipsum 1")}
              className={`px-4 py-1 rounded-md text-sm cursor-pointer transition-colors duration-200 w-full md:flex-1 flex items-center py-3 justify-center gap-3 ${
                selected === "Lorem Ipsum 1" ? "bg-[var(--success)] text-white" : "text-[var(--foreground)]"
              }`}
              style={{
                backgroundColor:
                  selected === "Lorem Ipsum 1" ? "" : "var(--advert-list-bg)",
              }}
            >
              <GiLegArmor className="w-8 h-8" />
              <span>Lorem Ipsum</span>
            </span>

            <span
              onClick={() => setSelected("Lorem Ipsum 2")}
              className={`px-4 py-1 rounded-md text-sm cursor-pointer transition-colors duration-200 w-full md:flex-1 flex items-center py-3 justify-center gap-3 ${
                selected === "Lorem Ipsum 2" ? "bg-[var(--success)] text-white" : "text-[var(--foreground)]"
              }`}
              style={{
                backgroundColor:
                  selected === "Lorem Ipsum 2" ? "" : "var(--advert-list-bg)",
              }}
            >
              <LiaCoinsSolid className="w-8 h-8" />
              <span>Lorem Ipsum</span>
            </span>
          </div>

          <div className="flex items-center bg-[var(--success)] text-white text-sm rounded-md p-1 gap-2">
            <FcAdvertising className="w-8 h-8 mr-2 hidden md:block" />
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
          </div>

          {/* İlan Özellikleri Başlığı */}
          <div className="flex items-center gap-2">
            <TfiViewGrid className="w-6 h-6 text-[var(--success)]" />
            <h2 className="text-[var(--foreground)] font-semibold">İlan Özellikleri</h2>
          </div>

          {/* 8 Select (4-4) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index}>
                <label className="text-[var(--foreground)] block mb-1">Lorem Ipsum</label>
                <select className="w-full p-2 rounded text-[var(--foreground)]">
                  <option>Seçiniz</option>
                  <option>Option 1</option>
                </select>
              </div>
            ))}
          </div>

          {/* Başlık */}
          <div className="flex items-center gap-2">
            <TfiViewGrid className="w-6 h-6 text-[var(--success)]" />
            <h2 className="text-[var(--foreground)] font-semibold">
              İlan Başlık ve Açıklama Bilgileri
            </h2>
          </div>

          <div className="flex items-center bg-[var(--success)] text-white text-sm rounded-md p-1 gap-2">
            <FcAdvertising className="w-8 h-8 mr-2 hidden md:block" />
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
          </div>

          {/* Kategori ve Butonlar */}
          <div className="flex flex-wrap md: flex-nowrap gap-4 items-center text-center">
            <span
              onClick={() => setSelectedLanguage("language1")}
              className={`px-4 py-1 rounded-md text-sm cursor-pointer transition-colors duration-200 w-full md:flex-1 flex items-center py-3 justify-center gap-3 ${
                selectedLanguage === "language1"
                  ? "bg-[var(--success)] text-white"
                  : ""
              }`}
              style={{
                backgroundColor:
                  selectedLanguage === "language1"
                    ? ""
                    : "var(--advert-list-bg)",
              }}
            >
              <span>Türkçe</span>
            </span>

            <span
              onClick={() => setSelectedLanguage("language2")}
              className={`px-4 py-1 rounded-md text-sm cursor-pointer transition-colors duration-200 w-full md:flex-1 flex items-center py-3 justify-center gap-3 ${
                selectedLanguage === "language2"
                  ? "bg-[var(--success)] text-white"
                  : ""
              }`}
              style={{
                backgroundColor:
                  selectedLanguage === "language2"
                    ? ""
                    : "var(--advert-list-bg)",
              }}
            >
              <span>Türkçe</span>
            </span>

            <span
              onClick={() => setSelectedLanguage("language3")}
              className={`px-4 py-1 rounded-md text-sm cursor-pointer transition-colors duration-200 w-full md:flex-1 flex items-center py-3 justify-center gap-3 ${
                selectedLanguage === "language3"
                  ? "bg-[var(--success)] text-white"
                  : ""
              }`}
              style={{
                backgroundColor:
                  selectedLanguage === "language3"
                    ? ""
                    : "var(--advert-list-bg)",
              }}
            >
              <span>Türkçe</span>
            </span>

            <span
              onClick={() => setSelectedLanguage("language4")}
              className={`px-4 py-1 rounded-md text-sm cursor-pointer transition-colors duration-200 w-full md:flex-1 flex items-center py-3 justify-center gap-3 ${
                selectedLanguage === "language4"
                  ? "bg-[var(--success)] text-white"
                  : ""
              }`}
              style={{
                backgroundColor:
                  selectedLanguage === "language4"
                    ? ""
                    : "var(--advert-list-bg)",
              }}
            >
              <span>Türkçe</span>
            </span>

            <span
              onClick={() => setSelectedLanguage("language5")}
              className={`px-4 py-1 rounded-md text-sm cursor-pointer transition-colors duration-200 w-full md:flex-1 flex items-center py-3 justify-center gap-3 ${
                selectedLanguage === "language5"
                  ? "bg-[var(--success)] text-white"
                  : ""
              }`}
              style={{
                backgroundColor:
                  selectedLanguage === "language5"
                    ? ""
                    : "var(--advert-list-bg)",
              }}
            >
              <span>Türkçe</span>
            </span>
          </div>

          {/* Başlık inputu */}
          <div>
            <label className="text-[var(--foreground)] block mb-1">İlan Başlığı</label>
            <input type="text" className="w-full p-2 rounded text-[var(--foreground)]" />
          </div>

          {/* Açıklamalar */}
          <div>
            <label className="text-[var(--foreground)] block mb-1">İlan Açıklaması</label>
            <textarea
              rows="4"
              className="w-full p-2 rounded text-[var(--foreground)] resize-none !h-[100px]"
            ></textarea>
          </div>

          <div>
            {/* Stok Bilgileri Başlığı */}
            <div className="flex items-center gap-2 mb-2">
              <FaRegCircleDot className="w-6 h-6 text-[var(--success)]" />
              <h2 className="text-[var(--foreground)] font-semibold">Stok Bilgileri</h2>
            </div>
            <textarea
              rows="3"
              className="w-full p-2 rounded text-[var(--foreground)] resize-none !h-[100px]"
            ></textarea>
          </div>

          {/* Teslimat Süresi ve Fiyat Bilgileri */}
          <div className="flex items-center gap-2 mb-2">
            <IoTimeOutline className="w-6 h-6 text-[var(--success)]" />
            <h2 className="text-[var(--foreground)] font-semibold">
              Teslimat Süresi ve Fiyat Bilgileri
            </h2>
          </div>

          {/* 1 Select + 3 Input / Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="text-[var(--foreground)] block mb-1">Teslim Süresi</label>
              <select className="w-full p-2 rounded">
                <option>0000dk</option>
                <option>0010dk</option>
              </select>
            </div>
            <div>
              <label className="text-[var(--foreground)] block mb-1">Lorem Ipsum</label>
              <input type="text" className="w-full p-2 rounded" />
            </div>
            <div>
              <label className="text-[var(--foreground)] block mb-1">Lorem Ipsum</label>
              <input type="text" className="w-full p-2 rounded" />
            </div>
            <div>
              <label className="text-[var(--foreground)] block mb-1">Lorem Ipsum</label>
              <input type="text" className="w-full p-2 rounded" />
            </div>
          </div>

          {/* Kategori Resimleri Başlık */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <FaRegImages className="w-6 h-6 text-[var(--success)]" />
              <h3 className="font-medium text-sm">Kategori Resimleri</h3>
            </div>

            {/* Kategori Resimleri */}
            <div className="flex flex-wrap gap-4">
              {/* Görsel Kutusu 1 */}
              <label className="relative cursor-pointer">
                <input
                  type="radio"
                  name="kategori"
                  className="absolute top-2 left-2 z-10 !w-4 !h-4"
                />
                <img
                  src="https:/placehold.co/500"
                  alt="Kategori 1"
                  className="w-32 h-32 rounded object-cover"
                />
              </label>

              {/* Görsel Kutusu 2 */}
              <label className="relative cursor-pointer">
                <input
                  type="radio"
                  name="kategori"
                  className="absolute top-2 left-2 z-10 !w-4 !h-4"
                />
                <img
                  src="https:/placehold.co/500"
                  alt="Kategori 2"
                  className="w-32 h-32 rounded object-cover"
                />
              </label>
            </div>
          </div>

          {/* İlan Resmi Yükle Başlık */}
          <div className="flex items-center gap-2 mb-2">
            <FaRegImages className="w-6 h-6 text-[var(--success)]" />
            <h3 className="font-medium text-sm">İlan Resmi Yükle</h3>
          </div>

          <div className="flex items-center bg-[var(--success)] text-white text-sm rounded-md p-1 gap-2">
            <FcAdvertising className="w-8 h-8 mr-2 hidden md:block" />
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
          </div>

          {/* Yüklenen Görsel Placeholder */}
          <label className="flex items-center gap-2 text-sm rounded-md px-3 py-2 cursor-pointer bg-[var(--input-bg)]">
            <FaRegImages className="w-4 h-4 text-[var(--success)]" />
            <span>Görsel yükle</span>
            <input type="file" accept="image/*" className="hidden mt-2" />
          </label>

          <div className="w-full flex justify-end">
            <button
              onClick={() => setStep(3)}
              className="flex items-center gap-2 bg-[var(--success)] text-white text-sm px-4 py-2 rounded-md hover:opacity-80 transition"
            >
              <FaPen className="w-3.5 h-3.5" />
              <span>Kaydet</span>
            </button>
          </div>
        </div>
      )}

      {/* Adım 3 */}
      {currentStep === 3 && (
        <div className="p-4 rounded">
          <div className="text-3xl">Vitrin Önizleme</div>
          <div className="mb-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            <div className="p-1 cursor-progress">
              {/* Görsel */}
              <div className="p-2 rounded-t-md bg-[var(--advert-card-bg)] animate-pulse">
                <div className="overflow-hidden">
                  <div className="relative">
                    <div className="w-full h-full min-h-[155px] max-h-[155px] md:min-h-[202px] md:max-h-[202px] bg-[var(--text-gray)] rounded-md" />
                  </div>
                </div>
              </div>

              {/* Başlık */}
              <div className="text-white p-2 w-full bg-[var(--advert-card-bg)] animate-pulse">
                <div className="space-y-2">
                  <div className="h-4 w-[85%] bg-[var(--text-gray)] rounded-md" />
                  <div className="h-4 w-[50%] bg-[var(--text-gray)] rounded-md" />
                </div>
              </div>

              {/* Fiyat */}
              <div className="flex justify-between items-center border-t border-t-[var(--advert-card-border)] bg-[var(--advert-card-bg)] animate-pulse">
                <div className="text-md font-bold text-white p-2 w-[50%]">
                  <div className="h-4 w-full bg-[var(--text-gray)] rounded-md" />
                </div>
                <div className="p-2 w-[50%]"></div>
              </div>

              {/* Satıcı ve Kategori */}
              <div className="relative bg-[var(--advert-card-bg)] rounded-b-md animate-pulse">
                <div className="flex items-center w-full p-2 gap-2">
                  <div className="w-6 h-6 rounded-md bg-[var(--text-gray)]" />
                  <div className="h-4 w-[60px] bg-[var(--text-gray)] rounded-md" />
                </div>
                <div className="absolute bottom-0 right-0 p-2">
                  <div className="w-10 h-10 rounded-md bg-[var(--text-gray)]" />
                </div>
              </div>
            </div>

            <AdvertCard data={Data[0]} link="/advert-detail" />
            <div className="p-1 hidden md:block cursor-progress">
              {/* Görsel */}
              <div className="p-2 rounded-t-md bg-[var(--advert-card-bg)] animate-pulse">
                <div className="overflow-hidden">
                  <div className="relative">
                    <div className="w-full h-full min-h-[155px] max-h-[155px] md:min-h-[202px] md:max-h-[202px] bg-[var(--text-gray)] rounded-md" />
                  </div>
                </div>
              </div>

              {/* Başlık */}
              <div className="text-white p-2 w-full bg-[var(--advert-card-bg)] animate-pulse">
                <div className="space-y-2">
                  <div className="h-4 w-[85%] bg-[var(--text-gray)] rounded-md" />
                  <div className="h-4 w-[50%] bg-[var(--text-gray)] rounded-md" />
                </div>
              </div>

              {/* Fiyat */}
              <div className="flex justify-between items-center border-t border-t-[var(--advert-card-border)] bg-[var(--advert-card-bg)] animate-pulse">
                <div className="text-md font-bold text-white p-2 w-[50%]">
                  <div className="h-4 w-full bg-[var(--text-gray)] rounded-md" />
                </div>
                <div className="p-2 w-[50%]"></div>
              </div>

              {/* Satıcı ve Kategori */}
              <div className="relative bg-[var(--advert-card-bg)] rounded-b-md animate-pulse">
                <div className="flex items-center w-full p-2 gap-2">
                  <div className="w-6 h-6 rounded-md bg-[var(--text-gray)]" />
                  <div className="h-4 w-[60px] bg-[var(--text-gray)] rounded-md" />
                </div>
                <div className="absolute bottom-0 right-0 p-2">
                  <div className="w-10 h-10 rounded-md bg-[var(--text-gray)]" />
                </div>
              </div>
            </div>
            <div className="p-1 hidden md:block cursor-progress">
              {/* Görsel */}
              <div className="p-2 rounded-t-md bg-[var(--advert-card-bg)] animate-pulse">
                <div className="overflow-hidden">
                  <div className="relative">
                    <div className="w-full h-full min-h-[155px] max-h-[155px] md:min-h-[202px] md:max-h-[202px] bg-[var(--text-gray)] rounded-md" />
                  </div>
                </div>
              </div>

              {/* Başlık */}
              <div className="text-white p-2 w-full bg-[var(--advert-card-bg)] animate-pulse">
                <div className="space-y-2">
                  <div className="h-4 w-[85%] bg-[var(--text-gray)] rounded-md" />
                  <div className="h-4 w-[50%] bg-[var(--text-gray)] rounded-md" />
                </div>
              </div>

              {/* Fiyat */}
              <div className="flex justify-between items-center border-t border-t-[var(--advert-card-border)] bg-[var(--advert-card-bg)] animate-pulse">
                <div className="text-md font-bold text-white p-2 w-[50%]">
                  <div className="h-4 w-full bg-[var(--text-gray)] rounded-md" />
                </div>
                <div className="p-2 w-[50%]"></div>
              </div>

              {/* Satıcı ve Kategori */}
              <div className="relative bg-[var(--advert-card-bg)] rounded-b-md animate-pulse">
                <div className="flex items-center w-full p-2 gap-2">
                  <div className="w-6 h-6 rounded-md bg-[var(--text-gray)]" />
                  <div className="h-4 w-[60px] bg-[var(--text-gray)] rounded-md" />
                </div>
                <div className="absolute bottom-0 right-0 p-2">
                  <div className="w-10 h-10 rounded-md bg-[var(--text-gray)]" />
                </div>
              </div>
            </div>
            <div className="p-1 hidden md:block cursor-progress">
              {/* Görsel */}
              <div className="p-2 rounded-t-md bg-[var(--advert-card-bg)] animate-pulse">
                <div className="overflow-hidden">
                  <div className="relative">
                    <div className="w-full h-full min-h-[155px] max-h-[155px] md:min-h-[202px] md:max-h-[202px] bg-[var(--text-gray)] rounded-md" />
                  </div>
                </div>
              </div>

              {/* Başlık */}
              <div className="text-white p-2 w-full bg-[var(--advert-card-bg)] animate-pulse">
                <div className="space-y-2">
                  <div className="h-4 w-[85%] bg-[var(--text-gray)] rounded-md" />
                  <div className="h-4 w-[50%] bg-[var(--text-gray)] rounded-md" />
                </div>
              </div>

              {/* Fiyat */}
              <div className="flex justify-between items-center border-t border-t-[var(--advert-card-border)] bg-[var(--advert-card-bg)] animate-pulse">
                <div className="text-md font-bold text-white p-2 w-[50%]">
                  <div className="h-4 w-full bg-[var(--text-gray)] rounded-md" />
                </div>
                <div className="p-2 w-[50%]"></div>
              </div>

              {/* Satıcı ve Kategori */}
              <div className="relative bg-[var(--advert-card-bg)] rounded-b-md animate-pulse">
                <div className="flex items-center w-full p-2 gap-2">
                  <div className="w-6 h-6 rounded-md bg-[var(--text-gray)]" />
                  <div className="h-4 w-[60px] bg-[var(--text-gray)] rounded-md" />
                </div>
                <div className="absolute bottom-0 right-0 p-2">
                  <div className="w-10 h-10 rounded-md bg-[var(--text-gray)]" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full p-4 space-y-4 mx-auto">
            {/* Açıklama */}
            <div className="bg-[var(--advert-card-bg)] p-4 rounded-md text-[var(--foreground)] relative">
              <p className="text-sm">
                Doping bakiyeniz varsa, ilan doping tutarının gerekli kısmı
                doping bakiyenizden, geri kalan kısmı hesap bakiyenizden
                çekilecektir. Eğer doping tutarı için yeterli doping bakiyeniz
                varsa, tümü doping bakiyenizden çekilecektir.
              </p>
              <div className="w-full flex justify-end">
                <span className="bg-orange-500 text-white text-sm px-3 py-1 rounded-md">
                  Mevcut doping bakiyesi: 0.00 TL
                </span>
              </div>
            </div>

            {/* Seçenek Kartları */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Tekrarlı Kartlar */}
              {[
                {
                  title: "Anasayfa Vitrini",
                  icon: <MdOutlineRocketLaunch className="w-12 h-12" />,
                  key: "homepage",
                  color: "var(--success)",
                },
                {
                  title: "Vitrin İlanı",
                  icon: <PiStarDuotone className="w-12 h-12" />,
                  key: "showcase",
                  color: "var(--success)",
                },
                {
                  title: "Kalın Çerçeve",
                  icon: <PiRectangleDashedFill className="w-12 h-12" />,
                  key: "frame",
                  color: "var(--primary)",
                },
                {
                  title: "Renkli Çerçeve",
                  icon: <PiRectangleDashedDuotone className="w-12 h-12" />,
                  key: "colorFrame",
                  color: "var(--primary)",
                },
              ].map((section) => (
                <div
                  key={section.key}
                  className="bg-[var(--advert-card-bg)] text-[var(--foreground)] p-4 rounded-md"
                >
                  <div className="flex items-center space-x-2 mb-3">
                    <span className={`text-[${section.color}]`}>
                      {section.icon}
                    </span>
                    <div>
                      <p className="text-xl font-semibold">{section.title}</p>
                      <p className="text-xs">
                        {section.key === "frame"
                          ? "İlanınız çerçeve ile belirginleşir."
                          : section.key === "colorFrame"
                          ? "Göz alıcı renkli çerçeve sunar."
                          : section.key === "homepage"
                          ? "İlanınızı sitenin ana sayfasında öne çıkarır."
                          : "İlgili kategoride en üst sırada çıkarır."}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {options[section.key].map((option, index) => (
                      <div
                        key={index}
                        onClick={() => handleSelect(section.key, index)}
                        className={`cursor-pointer p-2 text-md rounded-md text-center font-semibold flex flex-nowrap items-center justify-between
                  ${
                    selected3[section.key] === index
                      ? `bg-[${section.color}] text-white`
                      : "bg-[var(--advert-list-bg)] text-[var(--foreground)]"
                  }`}
                      >
                        <div>{option.duration}</div>
                        <div>{option.price}₺</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Buton */}
            <div className="flex justify-end">
              <button
                onClick={() => {
                  logSelections();
                  setStep(4);
                }}
                className="mt-4 bg-orange-500 text-white py-2 px-4 rounded"
              >
                İlanı Oluştur
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Adım 4 */}
      {currentStep === 4 && (
        <div className="bg-[var(--advert-card-bg)] text-[var(--foreground)] p-6 rounded">
          <h2 className="text-xl font-bold mb-4">4. Aşama</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      )}
    </div>
  );
};

export default CategoryStep;
