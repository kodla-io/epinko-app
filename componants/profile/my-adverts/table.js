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

import Table from "../table"

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
  const [activeTab, setActiveTab] = useState("list");
  const [selectedData, setSelectedData] = useState([]);

  const getData = (order) => {
    setSelectedData([]); // önce sıfırla
    setSelectedData(order); // sonra içine tek bir obje ekle
    console.log("getData çalıştı, gelen veri:", order);
  };

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
            <div className="flex flex-wrap items-center gap-4 bg-[var(--advert-list-bg)] p-4 rounded-xl text-white">
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
                <select className="bg-[#2B2D3C] text-sm px-3 py-2 rounded-md text-white outline-none custom-select">
                  <option>Onay Bekliyor</option>
                  <option>Aktif</option>
                  <option>Reddedildi</option>
                </select>
              </div>

              {/* Tür Alanı */}
              <div className="flex w-full md:w-auto items-center gap-2">
                <span className="text-sm text-gray-300">Tür:</span>
                <select className="bg-[#2B2D3C] text-sm px-3 py-2 rounded-md text-white outline-none custom-select">
                  <option>Stoklu</option>
                  <option>Tekil</option>
                </select>
              </div>
            </div>

            <table className="min-w-full text-left text-white bg-[var(--advert-list-bg)] rounded-lg">
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
                    <tr className="border-b-1 border-[var(--success)] hover:bg-[#3A3B51] cursor-pointer">
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
                        className="bg-[var(--advert-list-bg)]"
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
                                    onClick={() => alert(`Düzenle: ${item.no}`)}
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
      <div className="p-0 md:p-2 min-h-screen text-white">
        {activeTab === "detail" && (
          <>
            <div className="rounded-xl p-2 md:p-4 text-white space-y-4">
              <div className="flex items-center space-x-4 py-2">
                <h2
                  style={{ color: "var(--foreground)" }}
                  className="text-[30px] py-2 font-bold"
                >
                  #4FXZ1270 - İlan Detayları
                </h2>
                <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
                <button
                  onClick={() => setActiveTab("ad")}
                  className={`px-4 py-2 rounded-md bg-[var(--success)]`}
                >
                  İlanı Öne Çıkart
                </button>
                <button
                  onClick={() => setActiveTab("update")}
                  className={`px-4 py-2 rounded-md bg-[var(--label7)]`}
                >
                  İlanı Güncelle
                </button>
                <button className={`px-4 py-2 rounded-md bg-[var(--alert)]`}>
                  İlanı Sil
                </button>
                <button
                  onClick={() => setActiveTab("list")}
                  className={`px-4 py-2 rounded-md bg-[var(--label2)]`}
                >
                  Geri
                </button>
              </div>

              {/* Üst Bilgi */}
              <div className="bg-[var(--advert-list-bg)] flex flex-col md:flex-row p-4 gap-4 items-center rounded-md">
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
                    selected === "PUBG Mobile" ? "bg-green-500 text-white" : ""
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
                    selected === "Hesap Satış" ? "bg-green-500 text-white" : ""
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
                      ? "bg-green-500 text-white"
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
                      ? "bg-green-500 text-white"
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

              {/* Bilgiler */}
              <div className="flex flex-col md:flex-row gap-4 mt-4">
                {/* Sol kutu (2/3) */}
                <div className="md:w-2/3 w-full bg-[var(--advert-list-bg)] p-4 rounded-lg">
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
                <div className="md:w-1/3 w-full bg-[var(--advert-list-bg)] p-4 rounded-lg flex items-center justify-center">
                  <div className="flex flex-col items-center gap-2 text-center">
                    <svg
                      className="text-green-500 w-12 h-12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2l4 -4"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10z"
                      />
                    </svg>
                    <p className="text-green-500 font-semibold">
                      İlanınız Satışta!
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4 py-2">
                <h2
                  style={{ color: "var(--foreground)" }}
                  className="text-[30px] py-2 font-bold"
                >
                  {title}
                </h2>
                <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
              </div>
              <Table />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MyAdvertsTable;
