"use client";

import React, { useState, useEffect } from "react";
import { FaPlusCircle, FaMinusCircle, FaEdit, FaTrash } from "react-icons/fa";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { GiCrossedSwords } from "react-icons/gi";
import { GiCheckedShield } from "react-icons/gi";
import { GiLegArmor } from "react-icons/gi";
import { LiaCoinsSolid } from "react-icons/lia";
import { MdOutlineConfirmationNumber } from "react-icons/md";
import { CiViewList } from "react-icons/ci";
import { MdDateRange } from "react-icons/md";
import { TfiViewGrid } from "react-icons/tfi";
import { FaRegCircleDot } from "react-icons/fa6";
import { IoTimeOutline } from "react-icons/io5";
import { FcAdvertising } from "react-icons/fc";
import { FaRegImages } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { RxStarFilled } from "react-icons/rx";
import { IoIosAlert } from "react-icons/io";

import Table from "../table";
import AdvertCard from "../../advert/advert-card";
import Calendar from "../calendar";

const AdvertData = [
  {
    no: "#35359",
    resim: "https://placehold.co/150",
    name: "Bronz Kasa 100% Bakiye",
    status: "Beklemede",
    statusColor: "var(--label2)",
    urun: "Bronz Kasa 100% Bakiye",
    tarih: "25.01.2023 Çarşamba 01:13",
    category: "PUBG Mobile - Hesap Satış",
    kullanici: "kcannmutlu",
    kullaniciResim: "https://placehold.co/150",
  },
  {
    no: "#621459",
    resim: "https://placehold.co/150",
    name: "Bronz Kasa 100% Bakiye",
    status: "Onaylandı",
    statusColor: "var(--label7)",
    urun: "Altın Kasa 100% Bakiye",
    tarih: "25.01.2023 Çarşamba 01:13",
    category: "PUBG Mobile - Hesap Satış",
    kullanici: "kcannmutlu",
    kullaniciResim: "https://placehold.co/150",
  },
  {
    no: "#621459",
    resim: "https://placehold.co/150",
    name: "Bronz Kasa 100% Bakiye",
    status: "İptal Edildi",
    statusColor: "var(--alert)",
    urun: "Altın Kasa 100% Bakiye",
    tarih: "25.01.2023 Çarşamba 01:13",
    category: "PUBG Mobile - Hesap Satış",
    kullanici: "kcannmutlu",
    kullaniciResim: "https://placehold.co/150",
  },
  {
    no: "#621459",
    resim: "https://placehold.co/150",
    name: "Bronz Kasa 100% Bakiye",
    status: "Onay Bekliyor",
    statusColor: "var(--label9)",
    urun: "Altın Kasa 100% Bakiye",
    tarih: "25.01.2023 Çarşamba 01:13",
    category: "PUBG Mobile - Hesap Satış",
    kullanici: "kcannmutlu",
    kullaniciResim: "https://placehold.co/150",
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

const headers2 = [
  { key: "no", label: "No" },
  { key: "code", label: "Kod" },
  { key: "user", label: "Üye" },
  { key: "sellPrice", label: "Satış Fiyatı" },
  { key: "commission", label: "Komisyon" },
  { key: "earn", label: "Kazanç" },
  { key: "durum", label: "Durum" },
  { key: "button", label: "Detay" },
];

const headers3 = [
  { key: "no", label: "İşlem No" },
  { key: "startDate", label: "İşlem Tarihi" },
  { key: "time", label: "Süre" },
  { key: "datePrice", label: "Süre Fiyatı" },
  { key: "featurePrice", label: "Özellik Fiyatı" },
  { key: "totalPrice", label: "Toplam Fiyat" },
  { key: "endDate", label: "Bitiş Tarihi" },
  { key: "durum", label: "Durum" },
];

const adPublisHistory = [
  {
    no: "##135-FG-25AS",
    startDate: "2022-11-25  21:20",
    time: "3 Gün",
    datePrice: "500₺",
    featurePrice: "500₺",
    totalPrice: "2500₺",
    endDate: "2022-11-28   21:20",
    status: "Satışta",
    statusColor: "var(--label7)",
  },
  {
    no: "##135-FG-25AS",
    startDate: "2022-11-25  21:20",
    time: "3 Gün",
    datePrice: "500₺",
    featurePrice: "500₺",
    totalPrice: "2500₺",
    endDate: "2022-11-28   21:20",
    status: "Satışta",
    statusColor: "var(--label7)",
  },
  {
    no: "##135-FG-25AS",
    startDate: "2022-11-25  21:20",
    time: "3 Gün",
    datePrice: "500₺",
    featurePrice: "500₺",
    totalPrice: "2500₺",
    endDate: "2022-11-28   21:20",
    status: "Satışta",
    statusColor: "var(--label7)",
  },
  {
    no: "##135-FG-25AS",
    startDate: "2022-11-25  21:20",
    time: "3 Gün",
    datePrice: "500₺",
    featurePrice: "500₺",
    totalPrice: "2500₺",
    endDate: "2022-11-28   21:20",
    status: "Satışta",
    statusColor: "var(--label7)",
  },
  {
    no: "##135-FG-25AS",
    startDate: "2022-11-25  21:20",
    time: "3 Gün",
    datePrice: "500₺",
    featurePrice: "500₺",
    totalPrice: "2500₺",
    endDate: "2022-11-28   21:20",
    status: "Satışta",
    statusColor: "var(--label7)",
  },
];

const DetailData = [
  {
    no: "#1",
    code: "#4FXZ1270",
    user: "@canmutlu",
    sellPrice: "450₺",
    commission: "50₺",
    earn: "400₺",
    status: "Satıldı",
    statusColor: "var(--label2)",
    buttonColor: "var(--label4)",
    buttonText: "Detay",
    buttonTab: "#",
    buttonActive: true,
  },
  {
    no: "#2",
    code: "#4FXZ1270",
    user: "--------",
    sellPrice: "450₺",
    commission: "50₺",
    earn: "400₺",
    status: "Satışt",
    statusColor: "var(--label2)",
    buttonColor: "var(--label4)",
    buttonText: "--------",
    buttonTab: "#",
    buttonActive: false,
  },
  {
    no: "#3",
    code: "#4FXZ1270",
    user: "@canmutlu",
    sellPrice: "450₺",
    commission: "50₺",
    earn: "400₺",
    status: "Satıldı",
    statusColor: "var(--label2)",
    buttonColor: "var(--label4)",
    buttonText: "Detay",
    buttonTab: "#",
    buttonActive: true,
  },
  {
    no: "#4",
    code: "#4FXZ1270",
    user: "--------",
    sellPrice: "450₺",
    commission: "50₺",
    earn: "400₺",
    status: "Satışt",
    statusColor: "var(--label2)",
    buttonColor: "var(--label4)",
    buttonText: "--------",
    buttonTab: "#",
    buttonActive: false,
  },
];

const adCardData = [
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
  const [selectedData, setSelectedData] = useState([]);

  const getData = (order) => {
    setSelectedData([]);
    setSelectedData(order);
    console.log("getData çalıştı, gelen veri:", order);
  };

  const [chosenDate, setChosenDate] = useState(null);

  return (
    <div id="my-adverts" className="container mx-auto">
      {activeTab === "list" && (
        <>
          <div className="flex items-center space-x-4 py-2">
            <h2
              style={{ color: "var(--foreground)" }}
              className="text-[30px] py-2 font-bold"
            >
              {title}
            </h2>
            <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
          </div>
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-4 bg-[var(--profile-tab-bg)] p-4 rounded-sm text-white">
              {/* Arama Alanı */}
              <div className="flex w-full md:w-auto items-center gap-2 bg-[var(--input-bg)] px-3 py-2 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Ara"
                  className="bg-transparent outline-none text-sm placeholder:text-gray-400 text-white"
                />
              </div>

              {/* Statü Alanı */}
              <div className="flex w-full md:w-auto items-center gap-2">
                <span className="text-sm text-gray-300">Statü:</span>
                <select className="bg-[#2B2D3C] text-xs !p-0 !px-2 rounded-sm !h-[36px] text-white outline-none custom-select">
                  <option>Onay Bekliyor</option>
                  <option>Aktif</option>
                  <option>Reddedildi</option>
                </select>
              </div>

              {/* Tür Alanı */}
              <div className="flex w-full md:w-auto items-center gap-2">
                <span className="text-xs text-gray-300">Tür:</span>
                <select className="bg-[#2B2D3C] text-sm !p-0 !px-2 rounded-sm !h-[36px] text-white outline-none custom-select">
                  <option>Stoklu</option>
                  <option>Tekil</option>
                </select>
              </div>
            </div>

            <table className="min-w-full text-left text-white bg-[var(--profile-tab-bg)] rounded-lg">
              <thead>
                <tr>
                  {headers.slice(0, visibleCols).map((header) => (
                    <th key={header.key} className="p-4">
                      {header.label}
                    </th>
                  ))}
                  {visibleCols < headers.length && <th className="p-4"></th>}
                </tr>
              </thead>
              <tbody>
                {AdvertData.map((item, index) => (
                  <React.Fragment key={index}>
                    <tr className="text-sm hover:bg-[#3A3B51] cursor-pointer">
                      {headers.slice(0, visibleCols).map((header) => (
                        <td key={header.key} className="p-2">
                          {header.key === "resim" ? (
                            <img
                              src={item.resim}
                              alt="İlan"
                              className="w-16 h-16 rounded-sm object-cover"
                            />
                          ) : header.key === "durum" ? (
                            <div
                              className={`px-2 py-1 rounded font-semibold min-w-[140px] text-center`}
                              style={{ backgroundColor: item.statusColor }}
                            >
                              <span className="">{item.status}</span>
                            </div>
                          ) : header.key === "actions" ? (
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => {
                                  setActiveTab("detail");
                                  getData([item]);
                                }}
                              >
                                <FaEdit />
                              </button>
                              <button onClick={() => alert(`Sil: ${item.no}`)}>
                                <FaTrash />
                              </button>
                            </div>
                          ) : (
                            item[header.key]
                          )}
                        </td>
                      ))}
                      {visibleCols < headers.length && (
                        <td onClick={() => toggleRow(index)} className="p-4">
                          <button>
                            {expandedRow === index ? (
                              <FaMinusCircle />
                            ) : (
                              <FaPlusCircle />
                            )}
                          </button>
                        </td>
                      )}
                    </tr>

                    {/* Genişletilen Bilgiler */}
                    <tr
                      style={{
                        maxHeight: expandedRow === index ? "1000px" : "0",
                        opacity: expandedRow === index ? "1" : "0",
                        overflow: "hidden",
                        transition: "max-height 0.5s ease, opacity 0.5s ease",
                      }}
                    >
                      <td
                        colSpan={visibleCols + 1}
                        className="bg-[var(--profile-tab-bg)]"
                      >
                        {expandedRow === index &&
                          headers.slice(visibleCols).map((header) => (
                            <div
                              key={header.key}
                              className="mb-1 px-6 py-3 flex items-center gap-2"
                            >
                              <strong>{header.label}:</strong>{" "}
                              {header.key === "resim" ? (
                                <img
                                  src={item.resim}
                                  alt="İlan"
                                  className="w-16 h-16 rounded-sm object-cover"
                                />
                              ) : header.key === "durum" ? (
                                <span
                                  style={{ backgroundColor: item.statusColor }}
                                  className="px-2 py-1 rounded"
                                >
                                  {item.status}
                                </span>
                              ) : header.key === "actions" ? (
                                <div className="flex items-center gap-2">
                                  <button
                                    onClick={() => {
                                      setActiveTab("detail");
                                      getData([item]);
                                    }}
                                  >
                                    <FaEdit />
                                  </button>
                                  <button
                                    onClick={() => alert(`Sil: ${item.no}`)}
                                  >
                                    <FaTrash />
                                  </button>
                                </div>
                              ) : (
                                item[header.key]
                              )}
                            </div>
                          ))}
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center mt-6">
            <ul className="flex items-center space-x-1 p-2 rounded-lg">
              {/* Sol ikon */}
              <li>
                <button
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  className="px-2 py-1 h-[34px] rounded-md bg-gradient-to-r from-[var(--label12)] to-[var(--label11)] text-white hover:opacity-80"
                >
                  <FaAngleDoubleLeft />
                </button>
              </li>

              {/* Sayfa numaraları */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <li key={page}>
                    <button
                      onClick={() => handlePageChange(page)}
                      className={`px-2 py-1 rounded-md border border-[var(--success)] ${
                        page === currentPage
                          ? "bg-[var(--success)] text-white"
                          : "text-white hover:bg-[var(--label12)]"
                      }`}
                    >
                      {page}
                    </button>
                  </li>
                )
              )}

              {/* Sağ ikon */}
              <li>
                <button
                  onClick={() =>
                    handlePageChange(Math.min(totalPages, currentPage + 1))
                  }
                  className="px-2 py-1 h-[34px] rounded-md bg-gradient-to-r from-[var(--label12)] to-[var(--label11)] text-white hover:opacity-80"
                >
                  <FaAngleDoubleRight />
                </button>
              </li>
            </ul>
          </div>
        </>
      )}
      <div className="p-0 md:py-2 min-h-screen text-white">
        {activeTab === "detail" && (
          <>
            <div className="rounded-sm p-2 md:p-4 text-white space-y-4">
              <div className="flex items-center space-x-4 py-2 flex flex-wrap md:flex-nowrap gap-2">
                <h2
                  style={{ color: "var(--foreground)" }}
                  className="text-[30px] py-2 font-bold"
                >
                  #4FXZ1270 - İlan Detayları
                </h2>
                <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500 hidden md:block" />
                <button
                  onClick={() => setActiveTab("ad")}
                  className={`px-4 py-2 rounded-md bg-[var(--success)] w-full md:w-auto`}
                >
                  İlanı Öne Çıkart
                </button>
                <button
                  onClick={() => setActiveTab("update")}
                  className={`px-4 py-2 rounded-md bg-[var(--label7)] w-full md:w-auto`}
                >
                  İlanı Güncelle
                </button>
                <button
                  className={`px-4 py-2 rounded-md bg-[var(--alert)] w-full md:w-auto`}
                >
                  İlanı Sil
                </button>
                <button
                  onClick={() => setActiveTab("list")}
                  className={`px-4 py-2 rounded-md bg-[var(--label2)] w-full md:w-auto`}
                >
                  Geri
                </button>
              </div>

              {/* Üst Bilgi */}
              <div className="bg-[var(--profile-tab-bg)] flex flex-col md:flex-row p-4 gap-4 items-center rounded-md">
                <img
                  src="https://placehold.co/300x200"
                  alt="ürün"
                  className="rounded-md max-w-[250px] min-h-[20px]"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-3">
                    Dolor purus non enim praesent elementum.
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Eget velit aliquet sagittis id. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Eget velit aliquet sagittis id.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Eget velit aliquet sagittis id. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Eget vel ctetur adipi sit amet,
                    consectetur adipiscing elit. Eget velit aliquet sagittis id.
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 py-2">
                <h2
                  style={{ color: "var(--foreground)" }}
                  className="text-[30px] py-2 font-bold"
                >
                  Kategori ve İlan Bilgileri
                </h2>
                <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
              </div>

              {/* Kategori ve Butonlar */}
              <div className="flex flex-wrap md: flex-nowrap gap-4 items-center text-center">
                <span
                  onClick={() => setSelected("PUBG Mobile")}
                  className={`px-4 py-1 rounded-md text-sm cursor-pointer transition-colors duration-200 w-full md:flex-1 flex items-center py-3 justify-center gap-3 ${
                    selected === "PUBG Mobile" ? "bg-[var(--label6)] text-white" : ""
                  }`}
                  style={{
                    backgroundColor:
                      selected === "PUBG Mobile" ? "" : "var(--profile-tab-bg)",
                  }}
                >
                  <GiCrossedSwords className="w-8 h-8" />
                  <span>PUBG Mobile</span>
                </span>

                <span
                  onClick={() => setSelected("Hesap Satış")}
                  className={`px-4 py-1 rounded-md text-sm cursor-pointer transition-colors duration-200 w-full md:flex-1 flex items-center py-3 justify-center gap-3 ${
                    selected === "Hesap Satış" ? "bg-[var(--label4)] text-white" : ""
                  }`}
                  style={{
                    backgroundColor:
                      selected === "Hesap Satış" ? "" : "var(--profile-tab-bg)",
                  }}
                >
                  <GiCheckedShield className="w-8 h-8" />
                  <span>Hesap Satış</span>
                </span>

                <span
                  onClick={() => setSelected("Lorem Ipsum 1")}
                  className={`px-4 py-1 rounded-md text-sm cursor-pointer transition-colors duration-200 w-full md:flex-1 flex items-center py-3 justify-center gap-3 ${
                    selected === "Lorem Ipsum 1"
                      ? "bg-[var(--label4)] text-white"
                      : ""
                  }`}
                  style={{
                    backgroundColor:
                      selected === "Lorem Ipsum 1"
                        ? ""
                        : "var(--profile-tab-bg)",
                  }}
                >
                  <GiLegArmor className="w-8 h-8" />
                  <span>Lorem Ipsum</span>
                </span>

                <span
                  onClick={() => setSelected("Lorem Ipsum 2")}
                  className={`px-4 py-1 rounded-md text-sm cursor-pointer transition-colors duration-200 w-full md:flex-1 flex items-center py-3 justify-center gap-3 ${
                    selected === "Lorem Ipsum 2"
                      ? "bg-[var(--label4)] text-white"
                      : ""
                  }`}
                  style={{
                    backgroundColor:
                      selected === "Lorem Ipsum 2"
                        ? ""
                        : "var(--profile-tab-bg)",
                  }}
                >
                  <LiaCoinsSolid className="w-8 h-8" />
                  <span>Lorem Ipsum</span>
                </span>
              </div>

              {/* Bilgiler */}
              <div className="flex flex-col md:flex-row gap-4 mt-4">
                {/* Sol kutu (2/3) */}
                <div className="md:w-2/3 w-full bg-[var(--profile-tab-bg)] p-4 rounded-lg">
                  <div className="flex flex-col md:flex-row">
                    {/* Sol liste */}
                    <ul className="flex-1 space-y-2 px-1 custom-border">
                      <li className="flex justify-between hover:bg-gray-700/40 p-2 rounded transition">
                        <span className="font-semibold flex gap-2 items-center">
                          <MdOutlineConfirmationNumber className="w-5 h-5" />
                          İlan Numarası:
                        </span>
                        <span>#4FXZ1270</span>
                      </li>
                      <li className="flex justify-between hover:bg-gray-700/40 p-2 rounded transition">
                        <span className="font-semibold flex gap-2 items-center">
                          <CiViewList className="w-5 h-5" />
                          İlan Tipi:
                        </span>
                        <span>Stoklu Ürün</span>
                      </li>
                      <li className="flex justify-between hover:bg-gray-700/40 p-2 rounded transition">
                        <span className="font-semibold flex gap-2 items-center">
                          {" "}
                          <MdDateRange className="w-5 h-5" />
                          İşlem Tarihi:
                        </span>
                        <span>2022-11-20 01:50</span>
                      </li>
                      <li className="flex justify-between hover:bg-gray-700/40 p-2 rounded transition">
                        <span className="font-semibold flex gap-2 items-center">
                          <MdDateRange className="w-5 h-5" />
                          Güncellenme:
                        </span>
                        <span>2022-11-25 21:20</span>
                      </li>
                    </ul>

                    {/* Sağ liste */}
                    <ul className="flex-1 space-y-2 px-1">
                      <li className="flex justify-between hover:bg-gray-700/40 p-2 rounded transition">
                        <span className="font-semibold">Birim Fiyat:</span>
                        <span>3.300₺</span>
                      </li>
                      <li className="flex justify-between hover:bg-gray-700/40 p-2 rounded transition">
                        <span className="font-semibold">Komisyon:</span>
                        <span>300₺</span>
                      </li>
                      <li className="flex justify-between hover:bg-gray-700/40 p-2 rounded transition">
                        <span className="font-semibold">Kazancınız:</span>
                        <span>3.000₺</span>
                      </li>
                      <li className="flex justify-between hover:bg-gray-700/40 p-2 rounded transition">
                        <span className="font-semibold">Kalan Stok:</span>
                        <span>3 Adet</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Sağ kutu (1/3) */}
                <div className="md:w-1/3 w-full bg-[var(--profile-tab-bg)] p-4 rounded-lg flex items-center justify-center">
                  <div className="flex flex-col items-center gap-2 text-center">
                    <div className="flex items-center justify-center">
                      <div className="bg-green-800 p-2 rounded-full">
                        <div className="bg-green-600 p-2 rounded-full">
                          <div className="bg-green-400 w-16 h-16 rounded-full flex items-center justify-center">
                            <svg
                              className="w-12 h-12 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-green-500 font-semibold">
                      İlanınız Satışta!
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full">
                <div className="flex items-center space-x-4 py-2">
                  <h2
                    style={{ color: "var(--foreground)" }}
                    className="text-[30px] py-2 font-bold"
                  >
                    Stock/Satış Bilgileri
                  </h2>
                  <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
                </div>
                <Table headers={headers2} data={DetailData} />
              </div>
            </div>
          </>
        )}
        {activeTab === "update" && (
          <>
            <div className="flex items-center space-x-4 py-2 flex flex-wrap md:flex-nowrap gap-2">
              <h2
                style={{ color: "var(--foreground)" }}
                className="text-[30px] py-2 font-bold"
              >
                #4FXZ1270 - İlanı Güncelle
              </h2>
              <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500 hidden md:block" />
              <button
                onClick={() => setActiveTab("detail")}
                className={`px-4 py-2 rounded-md bg-[var(--label2)] w-full md:w-auto`}
              >
                Geri
              </button>
            </div>
            <div
              id="advertUpdate"
              className="space-y-4 md:space-y-6 bg-[var(--profile-tab-bg)] p-2 md:p-4 rounded-lg"
            >
              {/* Select: Kategori */}
              <div className="flex items-center gap-2">
                <TfiViewGrid className="w-6 h-6 text-[var(--success)]" />
                <h2 className="text-white font-semibold">
                  İlan kategori Bilgileri
                </h2>
              </div>
              <div>
                <select className="w-full p-2 rounded text-white">
                  <option value="">Kategori Seçin</option>
                  <option value="1">Knight Online</option>
                </select>
              </div>

              {/* Kategori ve Butonlar */}
              <div className="flex flex-wrap md: flex-nowrap gap-4 items-center text-center">
                <span
                  onClick={() => setSelected("PUBG Mobile")}
                  className={`px-4 py-1 rounded-md text-sm cursor-pointer transition-colors duration-200 w-full md:flex-1 flex items-center py-3 justify-center gap-3 ${
                    selected === "PUBG Mobile" ? "bg-[var(--label4)] text-white" : ""
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
                    selected === "Hesap Satış" ? "bg-[var(--label4)] text-white" : ""
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
                    selected === "Lorem Ipsum 1"
                      ? "bg-[var(--label4)] text-white"
                      : ""
                  }`}
                  style={{
                    backgroundColor:
                      selected === "Lorem Ipsum 1"
                        ? ""
                        : "var(--advert-list-bg)",
                  }}
                >
                  <GiLegArmor className="w-8 h-8" />
                  <span>Lorem Ipsum</span>
                </span>

                <span
                  onClick={() => setSelected("Lorem Ipsum 2")}
                  className={`px-4 py-1 rounded-md text-sm cursor-pointer transition-colors duration-200 w-full md:flex-1 flex items-center py-3 justify-center gap-3 ${
                    selected === "Lorem Ipsum 2"
                      ? "bg-[var(--label4)] text-white"
                      : ""
                  }`}
                  style={{
                    backgroundColor:
                      selected === "Lorem Ipsum 2"
                        ? ""
                        : "var(--advert-list-bg)",
                  }}
                >
                  <LiaCoinsSolid className="w-8 h-8" />
                  <span>Lorem Ipsum</span>
                </span>
              </div>

              <div className="flex items-center bg-[var(--label4)] text-white text-sm rounded-md p-1 gap-2">
                <FcAdvertising className="w-8 h-8 mr-2 hidden md:block" />
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </span>
              </div>

              {/* İlan Özellikleri Başlığı */}
              <div className="flex items-center gap-2">
                <TfiViewGrid className="w-6 h-6 text-[var(--success)]" />
                <h2 className="text-white font-semibold">İlan Özellikleri</h2>
              </div>

              {/* 8 Select (4-4) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {Array.from({ length: 8 }).map((_, index) => (
                  <div key={index}>
                    <label className="text-white block mb-1">Lorem Ipsum</label>
                    <select className="w-full p-2 rounded text-white">
                      <option>Seçiniz</option>
                      <option>Option 1</option>
                    </select>
                  </div>
                ))}
              </div>

              {/* Başlık */}
              <div className="flex items-center gap-2">
                <TfiViewGrid className="w-6 h-6 text-[var(--success)]" />
                <h2 className="text-white font-semibold">
                  İlan Başlık ve Açıklama Bilgileri
                </h2>
              </div>

              <div className="flex items-center bg-[var(--label4)] text-white text-sm rounded-md p-1 gap-2">
                <FcAdvertising className="w-8 h-8 mr-2 hidden md:block" />
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </span>
              </div>

              {/* Kategori ve Butonlar */}
              <div className="flex flex-wrap md: flex-nowrap gap-4 items-center text-center">
                <span
                  onClick={() => setSelectedLanguage("language1")}
                  className={`px-4 py-1 rounded-md text-sm cursor-pointer transition-colors duration-200 w-full md:flex-1 flex items-center py-3 justify-center gap-3 ${
                    selectedLanguage === "language1"
                      ? "bg-[var(--label4)] text-white"
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
                      ? "bg-[var(--label4)] text-white"
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
                      ? "bg-[var(--label4)] text-white"
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
                      ? "bg-[var(--label4)] text-white"
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
                      ? "bg-[var(--label4)] text-white"
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
                <label className="text-white block mb-1">İlan Başlığı</label>
                <input type="text" className="w-full p-2 rounded text-white" />
              </div>

              {/* Açıklamalar */}
              <div>
                <label className="text-white block mb-1">İlan Açıklaması</label>
                <textarea
                  rows="4"
                  className="w-full p-2 rounded text-white resize-none"
                ></textarea>
              </div>

              <div>
                {/* Stok Bilgileri Başlığı */}
                <div className="flex items-center gap-2 mb-2">
                  <FaRegCircleDot className="w-6 h-6 text-[var(--success)]" />
                  <h2 className="text-white font-semibold">Stok Bilgileri</h2>
                </div>
                <textarea
                  rows="3"
                  className="w-full p-2 rounded text-white resize-none"
                ></textarea>
              </div>

              {/* Teslimat Süresi ve Fiyat Bilgileri */}
              <div className="flex items-center gap-2 mb-2">
                <IoTimeOutline className="w-6 h-6 text-[var(--success)]" />
                <h2 className="text-white font-semibold">
                  Teslimat Süresi ve Fiyat Bilgileri
                </h2>
              </div>

              {/* 1 Select + 3 Input / Responsive */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="text-white block mb-1">Teslim Süresi</label>
                  <select className="w-full p-2 rounded">
                    <option>0000dk</option>
                    <option>0010dk</option>
                  </select>
                </div>
                <div>
                  <label className="text-white block mb-1">Lorem Ipsum</label>
                  <input type="text" className="w-full p-2 rounded" />
                </div>
                <div>
                  <label className="text-white block mb-1">Lorem Ipsum</label>
                  <input type="text" className="w-full p-2 rounded" />
                </div>
                <div>
                  <label className="text-white block mb-1">Lorem Ipsum</label>
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

              <div className="flex items-center bg-[var(--label4)] text-white text-sm rounded-md p-1 gap-2">
                <FcAdvertising className="w-8 h-8 mr-2 hidden md:block" />
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </span>
              </div>

              {/* Yüklenen Görsel Placeholder */}
              <label className="flex items-center gap-2 text-sm rounded-md px-3 py-2 cursor-pointer bg-[var(--input-bg)]">
                <FaRegImages className="w-4 h-4 text-[var(--success)]" />
                <span>Görsel yükle</span>
                <input type="file" accept="image/*" className="hidden mt-2" />
              </label>

              <div className="w-full flex justify-end">
                <button className="flex items-center gap-2 bg-[var(--success)] text-white text-sm px-4 py-2 rounded-md hover:bg-[#2646f2] transition">
                  <FaPen className="w-3.5 h-3.5" />
                  <span>İlanı Güncelle</span>
                </button>
              </div>
            </div>
          </>
        )}
        {activeTab === "ad" && (
          <>
            <div className="flex items-center space-x-4 py-2 flex flex-wrap md:flex-nowrap gap-2">
              <h2
                style={{ color: "var(--foreground)" }}
                className="text-[30px] py-2 font-bold"
              >
                #4FXZ1270 - İlanı Güncelle
              </h2>
              <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500 hidden md:block" />
              <button
                onClick={() => setActiveTab("detail")}
                className={`px-4 py-2 rounded-md bg-[var(--label2)] w-full md:w-auto`}
              >
                Geri
              </button>
            </div>

            {/* Üst Bilgi */}
            <div className="bg-[var(--profile-tab-bg)] flex flex-col md:flex-row p-4 gap-4 items-center rounded-md">
              <img
                src="https://placehold.co/300x200"
                alt="ürün"
                className="rounded-md max-w-[250px] min-h-[20px]"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-3">
                  Dolor purus non enim praesent elementum.
                </h3>
                <p className="text-sm text-gray-400 mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                  velit aliquet sagittis id. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Eget velit aliquet sagittis id.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                  velit aliquet sagittis id. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Eget vel ctetur adipi sit amet,
                  consectetur adipiscing elit. Eget velit aliquet sagittis id.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 py-2">
              <h2
                style={{ color: "var(--foreground)" }}
                className="text-[30px] py-2 font-bold"
              >
                İlanı Öne Çıkart
              </h2>
              <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
            </div>

            <div className="flex items-center bg-[var(--label4)] text-white text-sm rounded-md p-1 gap-2">
              <RxStarFilled className="w-8 h-8 mr-2 hidden md:block text-[var(--label9)]" />
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
            </div>

            <div className="py-4 grid gap-4 grid-cols-1 md:grid-cols-3">
              {/* Üst Kısım */}
              <div className="md:col-span-3 flex gap-2 md:gap-4 flex-wrap md:flex-nowrap">
                {/* Sol Kutu */}
                <div className="w-full md:w-1/3 bg-[var(--profile-tab-bg)] p-4 flex flex-wrap justify-between">
                  <h2>Öne Çıkarma Süresi</h2>
                  <select className="w-full mt-2 bg-gray-700 p-2">
                    <option>Seçiniz</option>
                  </select>
                  <div className="w-full">
                    <Calendar onDateChange={(date) => setChosenDate(date)} />

                    {chosenDate && (
                      <p className="mt-4">
                        Seçilen Tarih: {chosenDate.toLocaleDateString("tr-TR")}
                      </p>
                    )}
                  </div>
                </div>

                {/* Sağ Kutu */}
                <div className="w-full md:w-2/3 flex gap-2 rounded-lg">
                  {/* İlanınızı Özelleştirin */}
                  <div className="md:w-2/3 w-full bg-[var(--profile-tab-bg)] p-4 flex justify-between flex-wrap">
                    <h2>İLANINIZI ÖZELLEŞTİRİN</h2>
                    <div>
                      <div className="space-y-1">
                        <div className="flex items-center">
                          <input type="checkbox" className="mr-2 !w-4 !h-4" />
                          <label>Lorem ipsum dolor.</label>
                          <span className="ml-auto">0.00₺</span>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" className="mr-2 !w-4 !h-4" />
                          <label>Lorem ipsum dolor.</label>
                          <span className="ml-auto">0.00₺</span>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" className="mr-2 !w-4 !h-4" />
                          <label>Lorem ipsum dolor.</label>
                          <span className="ml-auto">0.00₺</span>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" className="mr-2 !w-4 !h-4" />
                          <label>Lorem ipsum dolor.</label>
                          <span className="ml-auto">0.00₺</span>
                        </div>
                      </div>
                      <div className="flex items-center bg-[var(--label4)] text-white text-sm rounded-md p-1 gap-2 mt-2">
                        <IoIosAlert className="!w-10 !h-10 mr-2 hidden md:block text-[var(--white)]" />
                        <span className="flex-1 text-black">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </span>
                      </div>
                    </div>
                    <div className="w-full flex justify-between">
                      <h3>ÖZELLİKLER TOPLAMI</h3>
                      <span className="text-[var(--label7)]">00.00₺</span>
                    </div>
                    <div className="w-full flex justify-end">
                      <button className="bg-[var(--success)] py-1 px-2 rounded-lg px-1 mt-1 flex items-center flex-wrap text-xs">
                        <RxStarFilled className="w-4 h-4 mr-2 text-[var(--label9)]" />
                        İlanı Öne Çıkart
                      </button>
                    </div>
                  </div>

                  {/* Önizleme Alanı */}
                  <div className="md:w-1/3 w-full">
                    <AdvertCard data={adCardData[0]} />
                  </div>
                </div>
              </div>

              {/* Alt Kısım */}
              <div className="md:col-span-3 flex gap-2 md:gap-4 flex-wrap md:flex-nowrap">
                {/* Siz Ayarlayacağınız Kısım */}
                <div className="md:w-1/3 w-full bg-[var(--profile-tab-bg)] p-4 rounded-lg flex items-center justify-center">
                  <div className="flex flex-col items-center gap-2 text-center">
                    <div className="flex items-center justify-center">
                      <div className="bg-green-800 p-2 rounded-full">
                        <div className="bg-green-600 p-2 rounded-full">
                          <div className="bg-green-400 w-16 h-16 rounded-full flex items-center justify-center">
                            <svg
                              className="w-12 h-12 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-green-500 font-semibold">
                      İlanınız Satışta!
                    </p>
                  </div>
                </div>

                {/* Sağ Kutu */}
                <div className="w-full md:w-2/3 flex gap-2 rounded-lg">
                  {/* Seçilen İlan Özellikleri */}
                  <div className="w-full md:w-2/3 bg-[var(--profile-tab-bg)] p-4 flex justify-between flex-wrap">
                    <h2>SEÇİLEN İLAN ÖZELLİKLERİ</h2>
                    <div className="space-y-1 w-full">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2 !w-4 !h-4"
                          checked
                          disabled
                        />
                        <label>Lorem ipsum dolor.</label>
                        <span className="ml-auto">0.00₺</span>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2 !w-4 !h-4"
                          checked
                          disabled
                        />
                        <label>Lorem ipsum dolor.</label>
                        <span className="ml-auto">0.00₺</span>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2 !w-4 !h-4"
                          checked
                          disabled
                        />
                        <label>Lorem ipsum dolor.</label>
                        <span className="ml-auto">0.00₺</span>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2 !w-4 !h-4"
                          checked
                          disabled
                        />
                        <label>Lorem ipsum dolor.</label>
                        <span className="ml-auto">0.00₺</span>
                      </div>
                    </div>
                    <div className="mt-4 border-b border-t py-2 border-orange-500 w-full">
                      <div className="flex justify-between">
                        <span>Süre</span>
                        <span>3 Gün</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Başlangıç Tarihi</span>
                        <span>2022-11-25 21:20</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Bitiş Tarihi</span>
                        <span>2022-11-25 21:20</span>
                      </div>
                    </div>
                    <div className="flex w-full justify-between items-center">
                      <h3>TOPLAM FİYAT</h3>
                      <span className="text-[var(--label7)]">00.00₺</span>
                    </div>
                  </div>

                  {/* Sağda Siz Ayarlayacağınız Kısım */}
                  <div className="w-full md:w-1/3">
                    <AdvertCard data={adCardData[0]} />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4 py-2">
              <h2
                style={{ color: "var(--foreground)" }}
                className="text-[30px] py-2 font-bold"
              >
                Öne Çıkartma Geçmişi
              </h2>
              <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
            </div>

            <Table headers={headers3} data={adPublisHistory} />
          </>
        )}
      </div>
    </div>
  );
};

export default MyAdvertsTable;
