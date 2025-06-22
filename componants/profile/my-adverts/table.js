"use client";

import React, { useState, useEffect } from "react";
import {
  FaPlusCircle,
  FaMinusCircle,
  FaEdit,
  FaTrash,
  FaFilter,
  FaCheckCircle,
} from "react-icons/fa";

import { CiViewList } from "react-icons/ci";
import { RxStarFilled } from "react-icons/rx";
import TimerDisplay from "../timer-display";

const incomingOrders = [
  {
    id: 0,
    image: "https://placehold.co/80x80",
    title: "League of Legends Riot Points 5800 RP",
    code: "OR-700-35",
    desc: "1x380₺ = 380₺ | Lorem ipsum dolor sit amet",
    date: "2022-11-25 21:20",
    buttonText: "Detay",
  },
];

const headers = [
  { key: "resim", label: "İlan Resmi" },
  { key: "no", label: "İlan No" },
  { key: "name", label: "İlan Adı" },
  { key: "tarih", label: "Tarih" },
  { key: "category", label: "Kategori" },
  { key: "durum", label: "Durum" },
  { key: "actions", label: "Düzenle" },
];

const MyAdvertsTable = ({ title }) => {
  const [expandedRow, setExpandedRow] = useState(null);
  const [visibleCols, setVisibleCols] = useState(7);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleResize = () => {
    const width = window.innerWidth;
    if (width < 640) setVisibleCols(2);
    else if (width < 768) setVisibleCols(2);
    else if (width < 1024) setVisibleCols(4);
    else if (width < 1280) setVisibleCols(5);
    else if (width < 1536) setVisibleCols(6);
    else setVisibleCols(headers.length);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleRow = (index) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  const [selected, setSelected] = useState("PUBG Mobile");
  const [selectedLanguage, setSelectedLanguage] = useState("language1");
  const [activeTab, setActiveTab] = useState("list");
  const [mainTab, setMainTab] = useState("myAdverts");
  const [selectedData, setSelectedData] = useState([]);

  const getData = (order) => {
    setSelectedData([]);
    setSelectedData(order);
    console.log("getData çalıştı, gelen veri:", order);
  };

  const [chosenDate, setChosenDate] = useState(null);

  const AdvertsContent = () => (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row gap-3 mb-5">
        {/* Search Input */}
        <div className="flex-3 relative">
          <input
            type="text"
            placeholder="İlan ara..."
            className="w-full rounded-md px-4 py-2 text-white outline-none !border !border-[#ffffff33] bg-transparent"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* İlan Durumu */}
        <select className="flex-1 rounded-md px-4 py-2 text-white outline-none !border !border-[#ffffff33] bg-transparent">
          <option value="">Tüm İlanlar</option>
          <option value="active">Aktif İlanlar</option>
          <option value="passive">Pasif İlanlar</option>
        </select>

        {/* FİLTRELE BUTONU */}
        <button className="flex-1 md:max-w-[150px] py-2 bg-[var(--success)] rounded-md text-white font-semibold gap-2 flex items-center justify-center hover:bg-[var(--primary)] transition">
          <FaFilter className="w-5 h-5 text-white" />
          FİLTRELE
        </button>
      </div>

      {/* İlan Kartları */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Kart 1 */}
        <div className="bg-[var(--advert-card-bg)] rounded-md overflow-hidden">
          <div className="relative">
            <img
              src="https://placehold.co/300x300"
              alt="game"
              className="w-full h-full object-cover min-h-[155px] max-h-[155px] md:min-h-[202px] md:max-h-[202px] object-cover"
            />
            <div className="absolute bottom-0 right-0 p-2">
              <button className="flex-1 bg-[var(--alert)] text-white px-2 py-1 rounded hover:opacity-80 flex items-center justify-center gap-2">
                <FaMinusCircle size={14} />
                Pasif
              </button>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-white mb-2">
              League of Legends Riot Points 5800 RP
            </h3>
            <div className="flex w-full items-center gap-2">
              <div className="space-y-2 w-full">
                <div className="w-full space-y-2 mt-2">
                  <div className="flex gap-2 w-full">
                    <button
                      onClick={() => setActiveTab("update")}
                      className="w-1/2 flex items-center justify-center gap-2 bg-[var(--success)] text-white px-2 py-1 rounded hover:opacity-80 text-xs"
                    >
                      <FaEdit size={10} />
                      Güncelle
                    </button>
                    <button
                      onClick={() => setActiveTab("detail")}
                      className="w-1/2 flex items-center justify-center gap-2 bg-[var(--primary)] text-white px-2 py-1 rounded hover:opacity-80 text-xs"
                    >
                      <FaEdit size={10} />
                      Detay
                    </button>
                  </div>
                  <div className="flex gap-2 w-full">
                    <button
                      onClick={() => setActiveTab("ad")}
                      className="w-1/2 flex items-center justify-center gap-2 bg-[var(--label9)] text-white px-2 py-1 rounded hover:opacity-80 text-xs"
                    >
                      <RxStarFilled size={10} />
                      Reklam
                    </button>
                    <button className="w-1/2 flex items-center justify-center gap-2 bg-[var(--alert)] text-white px-2 py-1 rounded hover:opacity-80 text-xs">
                      <FaTrash size={10} />
                      Sil
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {/* Süre göstergesi */}
              <TimerDisplay />
            </div>
          </div>
        </div>

        {/* Kart 2 */}
        <div className="bg-[var(--advert-card-bg)] rounded-md overflow-hidden">
          <div className="relative">
            <img
              src="https://placehold.co/300x300"
              alt="game"
              className="w-full h-full object-cover min-h-[155px] max-h-[155px] md:min-h-[202px] md:max-h-[202px] object-cover"
            />
            <div className="absolute bottom-0 right-0 p-2">
              <button className="flex-1 bg-[var(--alert)] text-white px-2 py-1 rounded hover:opacity-80 flex items-center justify-center gap-2">
                <FaMinusCircle size={14} />
                Pasif
              </button>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-white mb-2">
              League of Legends Riot Points 5800 RP
            </h3>
            <div className="flex w-full items-center gap-2">
              <div className="space-y-2 w-full">
                <div className="w-full space-y-2 mt-2">
                  <div className="flex gap-2 w-full">
                    <button
                      onClick={() => setActiveTab("update")}
                      className="w-1/2 flex items-center justify-center gap-2 bg-[var(--success)] text-white px-2 py-1 rounded hover:opacity-80 text-xs"
                    >
                      <FaEdit size={10} />
                      Güncelle
                    </button>
                    <button
                      onClick={() => setActiveTab("detail")}
                      className="w-1/2 flex items-center justify-center gap-2 bg-[var(--primary)] text-white px-2 py-1 rounded hover:opacity-80 text-xs"
                    >
                      <FaEdit size={10} />
                      Detay
                    </button>
                  </div>
                  <div className="flex gap-2 w-full">
                    <button
                      onClick={() => setActiveTab("ad")}
                      className="w-1/2 flex items-center justify-center gap-2 bg-[var(--label9)] text-white px-2 py-1 rounded hover:opacity-80 text-xs"
                    >
                      <RxStarFilled size={10} />
                      Reklam
                    </button>
                    <button className="w-1/2 flex items-center justify-center gap-2 bg-[var(--alert)] text-white px-2 py-1 rounded hover:opacity-80 text-xs">
                      <FaTrash size={10} />
                      Sil
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {/* Süre göstergesi */}
              <TimerDisplay />
            </div>
          </div>
        </div>

        {/* Kart 3 */}
        <div className="bg-[var(--advert-card-bg)] rounded-md overflow-hidden">
          <div className="relative">
            <img
              src="https://placehold.co/300x300"
              alt="game"
              className="w-full h-full object-cover min-h-[155px] max-h-[155px] md:min-h-[202px] md:max-h-[202px] object-cover"
            />
            <div className="absolute bottom-0 right-0 p-2">
              <button className="flex-1 bg-[var(--success)] text-white px-2 py-1 rounded hover:opacity-80 flex items-center justify-center gap-2">
                <FaCheckCircle size={14} />
                Aktif
              </button>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-white mb-2">
              League of Legends Riot Points 5800 RP
            </h3>
            <div className="flex w-full items-center gap-2">
              <div className="space-y-2 w-full">
                <div className="w-full space-y-2 mt-2">
                  <div className="flex gap-2 w-full">
                    <button
                      onClick={() => setActiveTab("update")}
                      className="w-1/2 flex items-center justify-center gap-2 bg-[var(--success)] text-white px-2 py-1 rounded hover:opacity-80 text-xs"
                    >
                      <FaEdit size={10} />
                      Güncelle
                    </button>
                    <button
                      onClick={() => setActiveTab("detail")}
                      className="w-1/2 flex items-center justify-center gap-2 bg-[var(--primary)] text-white px-2 py-1 rounded hover:opacity-80 text-xs"
                    >
                      <FaEdit size={10} />
                      Detay
                    </button>
                  </div>
                  <div className="flex gap-2 w-full">
                    <button
                      onClick={() => setActiveTab("ad")}
                      className="w-1/2 flex items-center justify-center gap-2 bg-[var(--label9)] text-white px-2 py-1 rounded hover:opacity-80 text-xs"
                    >
                      <RxStarFilled size={10} />
                      Reklam
                    </button>
                    <button className="w-1/2 flex items-center justify-center gap-2 bg-[var(--alert)] text-white px-2 py-1 rounded hover:opacity-80 text-xs">
                      <FaTrash size={10} />
                      Sil
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {/* Süre göstergesi */}
              <TimerDisplay />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // İlan siparişleri kartları içeriği (aktif/pasif ve süre olmadan)
  const AdvertOrdersContent = () => (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row gap-3 mb-5">
        {/* Search Input */}
        <div className="flex-3 relative">
          <input
            type="text"
            placeholder="İlan ara..."
            className="w-full rounded-md px-4 py-2 text-white outline-none !border !border-[#ffffff33] bg-transparent"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* İlan Durumu */}
        <select className="flex-1 rounded-md px-4 py-2 text-white outline-none !border !border-[#ffffff33] bg-transparent">
          <option value="">Tüm İlanlar</option>
          <option value="active">Aktif İlanlar</option>
          <option value="passive">Pasif İlanlar</option>
        </select>

        {/* FİLTRELE BUTONU */}
        <button className="flex-1 md:max-w-[150px] py-2 bg-[var(--success)] rounded-md text-white font-semibold gap-2 flex items-center justify-center hover:bg-[var(--primary)] transition">
          <FaFilter className="w-5 h-5 text-white" />
          FİLTRELE
        </button>
      </div>

      {/* İlan Kartları */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Kart 1 */}
        <div className="bg-[var(--advert-card-bg)] rounded-md overflow-hidden">
          <div className="relative">
            <img
              src="https://placehold.co/300x300"
              alt="game"
              className="w-full h-full object-cover min-h-[155px] max-h-[155px] md:min-h-[202px] md:max-h-[202px] object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-white mb-2">
              League of Legends Riot Points 5800 RP
            </h3>
            <div className="flex w-full items-center gap-2">
              <div className="space-y-2 w-full">
                <div className="w-full space-y-2 mt-2">
                  <div className="flex gap-2 w-full">
                    <button
                      onClick={() => setActiveTab("update")}
                      className="w-1/2 flex items-center justify-center gap-2 bg-[var(--success)] text-white px-2 py-1 rounded hover:opacity-80 text-xs"
                    >
                      <FaEdit size={10} />
                      Güncelle
                    </button>
                    <button
                      onClick={() => setActiveTab("detail")}
                      className="w-1/2 flex items-center justify-center gap-2 bg-[var(--primary)] text-white px-2 py-1 rounded hover:opacity-80 text-xs"
                    >
                      <FaEdit size={10} />
                      Detay
                    </button>
                  </div>
                  <div className="flex gap-2 w-full">
                    <button
                      onClick={() => setActiveTab("ad")}
                      className="w-1/2 flex items-center justify-center gap-2 bg-[var(--label9)] text-white px-2 py-1 rounded hover:opacity-80 text-xs"
                    >
                      <RxStarFilled size={10} />
                      Reklam
                    </button>
                    <button className="w-1/2 flex items-center justify-center gap-2 bg-[var(--alert)] text-white px-2 py-1 rounded hover:opacity-80 text-xs">
                      <FaTrash size={10} />
                      Sil
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Kart 2 */}
        <div className="bg-[var(--advert-card-bg)] rounded-md overflow-hidden">
          <div className="relative">
            <img
              src="https://placehold.co/300x300"
              alt="game"
              className="w-full h-full object-cover min-h-[155px] max-h-[155px] md:min-h-[202px] md:max-h-[202px] object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-white mb-2">
              League of Legends Riot Points 5800 RP
            </h3>
            <div className="flex w-full items-center gap-2">
              <div className="space-y-2 w-full">
                <div className="w-full space-y-2 mt-2">
                  <div className="flex gap-2 w-full">
                    <button
                      onClick={() => setActiveTab("update")}
                      className="w-1/2 flex items-center justify-center gap-2 bg-[var(--success)] text-white px-2 py-1 rounded hover:opacity-80 text-xs"
                    >
                      <FaEdit size={10} />
                      Güncelle
                    </button>
                    <button
                      onClick={() => setActiveTab("detail")}
                      className="w-1/2 flex items-center justify-center gap-2 bg-[var(--primary)] text-white px-2 py-1 rounded hover:opacity-80 text-xs"
                    >
                      <FaEdit size={10} />
                      Detay
                    </button>
                  </div>
                  <div className="flex gap-2 w-full">
                    <button
                      onClick={() => setActiveTab("ad")}
                      className="w-1/2 flex items-center justify-center gap-2 bg-[var(--label9)] text-white px-2 py-1 rounded hover:opacity-80 text-xs"
                    >
                      <RxStarFilled size={10} />
                      Reklam
                    </button>
                    <button className="w-1/2 flex items-center justify-center gap-2 bg-[var(--alert)] text-white px-2 py-1 rounded hover:opacity-80 text-xs">
                      <FaTrash size={10} />
                      Sil
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Kart 3 */}
        <div className="bg-[var(--advert-card-bg)] rounded-md overflow-hidden">
          <div className="relative">
            <img
              src="https://placehold.co/300x300"
              alt="game"
              className="w-full h-full object-cover min-h-[155px] max-h-[155px] md:min-h-[202px] md:max-h-[202px] object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-white mb-2">
              League of Legends Riot Points 5800 RP
            </h3>
            <div className="flex w-full items-center gap-2">
              <div className="space-y-2 w-full">
                <div className="w-full space-y-2 mt-2">
                  <div className="flex gap-2 w-full">
                    <button
                      onClick={() => setActiveTab("update")}
                      className="w-1/2 flex items-center justify-center gap-2 bg-[var(--success)] text-white px-2 py-1 rounded hover:opacity-80 text-xs"
                    >
                      <FaEdit size={10} />
                      Güncelle
                    </button>
                    <button
                      onClick={() => setActiveTab("detail")}
                      className="w-1/2 flex items-center justify-center gap-2 bg-[var(--primary)] text-white px-2 py-1 rounded hover:opacity-80 text-xs"
                    >
                      <FaEdit size={10} />
                      Detay
                    </button>
                  </div>
                  <div className="flex gap-2 w-full">
                    <button
                      onClick={() => setActiveTab("ad")}
                      className="w-1/2 flex items-center justify-center gap-2 bg-[var(--label9)] text-white px-2 py-1 rounded hover:opacity-80 text-xs"
                    >
                      <RxStarFilled size={10} />
                      Reklam
                    </button>
                    <button className="w-1/2 flex items-center justify-center gap-2 bg-[var(--alert)] text-white px-2 py-1 rounded hover:opacity-80 text-xs">
                      <FaTrash size={10} />
                      Sil
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Alış İlanları içeriği
  const BuyAdvertsContent = () => {
    const [expandedOrder, setExpandedOrder] = useState(null);

    const toggleExpand = (orderId) => {
      setExpandedOrder(expandedOrder === orderId ? null : orderId);
    };

    return (
      <div className="space-y-4">
        {incomingOrders.map((order) => (
          <React.Fragment key={order.id}>
            <div className="bg-[var(--profile-tab-bg)] border border-white/20 rounded-xl overflow-hidden">
              {/* Ana kart içeriği */}
              <div className="p-6">
                <div className="flex items-start gap-4">
                  {/* Sol taraf - Oyun resmi */}
                  <div className="flex-shrink-0">
                    <img
                      src={order.image}
                      alt="game"
                      className="w-20 h-20 object-cover rounded"
                    />
                  </div>

                  {/* Orta kısım - Sipariş bilgileri */}
                  <div className="flex-1">
                    <div className="mb-2">
                      <span className="text-white font-semibold">
                        Sipariş No :{" "}
                      </span>
                      <span className="text-white">{order.code}</span>
                    </div>

                    <div className="mb-2">
                      <span className="text-red-500">● </span>
                      <span className="text-white">
                        Sipariş satıcı tarafından iptal edildi
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mt-3">
                      <img
                        src="https://placehold.co/24x24"
                        alt="user"
                        className="w-6 h-6 rounded-full"
                      />
                      <span className="text-white">fareyiyy</span>
                    </div>
                  </div>

                  {/* Sağ taraf - Tarih ve fiyat */}
                  <div className="text-right">
                    <div className="text-gray-400 mb-2">02.08.2024</div>
                    <div className="text-orange-400 font-bold text-lg">
                      20.00 TL
                    </div>

                    {/* Detay butonu */}
                    <div className="mt-2">
                      <button
                        className="bg-[var(--primary)] text-white px-3 py-1 rounded text-sm hover:opacity-80 transition-opacity"
                        onClick={() => toggleExpand(order.id)}
                      >
                        {expandedOrder === order.id ? "Gizle" : "Detay"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Genişleyebilir içerik */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  expandedOrder === order.id
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div
                  className="px-6 pb-6 border-t border-white/20 bg-[var(--profile-tab-bg)]"
                  style={{ borderTopWidth: "0.5px" }}
                >
                  {/* Sol panel - Oyun bilgileri */}
                  <div className="flex gap-6 pt-4">
                    <div className="flex-1 p-4 bg-[var(--profile-input)] rounded-md">
                      <div className="mb-4 flex items-start gap-3">
                        <img
                          src="https://placehold.co/150x180"
                          alt="game icon"
                          className="w-18 h-22 object-cover rounded"
                        />
                        <div>
                          <h3 className="text-white font-semibold mb-2">
                            Valorant Random Hesap
                          </h3>
                          <div className="text-white mb-1">
                            10-40 SKİNLİ RANDOM HESAP
                          </div>
                          <div className="text-orange-400 font-bold text-xl">
                            20.00 TL
                          </div>
                        </div>
                      </div>

                      <button className="bg-[var(--primary)] text-white px-4 py-2 rounded flex items-center gap-2 hover:opacity-80">
                        <CiViewList size={16} className="text-white" />
                        İlanı Görüntüle
                      </button>
                    </div>

                    {/* Sağ panel - Mesaj geçmişi */}
                    <div className="flex-1">
                      <div className="relative">
                        {/* Timeline çizgisi */}
                        <div className="absolute left-5 top-8 bottom-0 w-px bg-gray-600"></div>

                        <div className="space-y-6">
                          {/* Mesaj 1 */}
                          <div className="flex items-start gap-3 relative">
                            <img
                              src="https://placehold.co/40x40"
                              alt="game icon"
                              className="w-10 h-10 rounded relative z-10"
                            />
                            <div>
                              <div className="text-xs text-gray-400 mb-1">
                                2 Ağustos 2024, 20:15, Cuma
                              </div>
                              <div className="text-white">
                                Satıcının teslimati bekleniyor
                              </div>
                            </div>
                          </div>

                          {/* Mesaj 2 */}
                          <div className="flex items-start gap-3 relative">
                            <img
                              src="https://placehold.co/40x40"
                              alt="game icon"
                              className="w-10 h-10 rounded relative z-10"
                            />
                            <div>
                              <div className="text-xs text-gray-400 mb-1">
                                2 Ağustos 2024, 20:27, Cuma
                              </div>
                              <div className="text-white font-semibold">
                                Sipariş satıcı tarafından iptal edildi
                              </div>
                              <div className="text-gray-300 text-sm">
                                Sipariş satıcı tarafından iptal edildi.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    );
  };

  return (
    <div id="my-adverts" className="container mx-auto">
      <div className="flex items-center space-x-4 py-2">
        <h2
          style={{ color: "var(--foreground)" }}
          className="text-[30px] py-2 font-bold"
        >
          {title}
        </h2>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap md:flex-nowrap gap-2 mb-4">
        <button
          onClick={() => setMainTab("myAdverts")}
          className={`px-4 py-2 rounded w-full md:flex-1 ${
            mainTab === "myAdverts"
              ? "bg-[var(--success)] text-white"
              : "border border-[var(--success)] text-[var(--success)]"
          }`}
        >
          İlanlarım
        </button>
        <button
          onClick={() => setMainTab("advertOrders")}
          className={`px-4 py-2 rounded w-full md:flex-1 ${
            mainTab === "advertOrders"
              ? "bg-[var(--success)] text-white"
              : "border border-[var(--success)] text-[var(--success)]"
          }`}
        >
          İlan Siparişlerim
        </button>
        <button
          onClick={() => setMainTab("buyAdverts")}
          className={`px-4 py-2 rounded w-full md:flex-1 ${
            mainTab === "buyAdverts"
              ? "bg-[var(--success)] text-white"
              : "border border-[var(--success)] text-[var(--success)]"
          }`}
        >
          Alış İlanları
        </button>
      </div>

      {/* Tab İçerikleri */}
      {mainTab === "myAdverts" && <AdvertsContent />}
      {mainTab === "advertOrders" && <AdvertOrdersContent />}
      {mainTab === "buyAdverts" && <BuyAdvertsContent />}
    </div>
  );
};

export default MyAdvertsTable;
