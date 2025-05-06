"use client";

import React, { useState, useEffect } from "react";
import {
  FaPlusCircle,
  FaMinusCircle,
  FaEdit,
  FaTrash,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaCircle,
} from "react-icons/fa";
import Link from "next/link";

const AdvertData = [
  {
    no: 0,
    requestNo: "#T-S-2",
    date: "25.01.2023",
    orderNo: "#OR-800-49",
    requestType: "Lorem Lorem",
    status: "Aktif",
    statusColor: "#D2F6F4",
    statusTextColor: "#56BEB8",
    lastUpdate: "25.01.2023",
  },
  {
    no: 1,
    requestNo: "#T-S-2",
    date: "25.01.2023",
    orderNo: "#OR-800-49",
    requestType: "Lorem Lorem",
    status: "Çözüldü",
    statusColor: "var(--success)",
    statusTextColor: "#ffffff",
    lastUpdate: "25.01.2023",
  },
  {
    no: 2,
    requestNo: "#T-S-2",
    date: "25.01.2023",
    orderNo: "#OR-800-49",
    requestType: "Lorem Lorem",
    status: "Bekliyor",
    statusColor: "var(--label7)",
    statusTextColor: "#ffffff",
    lastUpdate: "25.01.2023",
  },
];

const headers = [
  { key: "requestNo", label: "Talep No" },
  { key: "date", label: "Tarih" },
  { key: "orderNo", label: "Sipariş No" },
  { key: "requestType", label: "Talep Türü" },
  { key: "durum", label: "Durum" },
  { key: "actions", label: "Düzenle" },
];

const headersSingle = [
  { key: "requestNo", label: "Talep No" },
  { key: "date", label: "Tarih" },
  { key: "orderNo", label: "Talep Türü" },
  { key: "requestType", label: "Talep Türü" },
  { key: "durum", label: "Durum" },
  { key: "lastUpdate", label: "Son Güncelleme" },
];

const HelpRequests = ({ title }) => {
  const [expandedRow, setExpandedRow] = useState(null);
  const [visibleCols, setVisibleCols] = useState(7);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Burada başka bir şey yapılabilir: API çağrısı vs.
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

  const [activeTab, setActiveTab] = useState("tab1");

  const [selectedRequest, setSelectedRequest] = useState([]);

  const handleSelectRequest = (index) => {
    const selected = AdvertData[index];
    if (selected) {
      setSelectedRequest([selected]); // önceki verileri sil, sadece bu veriyi ata
      setActiveTab("selected-request");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center space-x-4 py-2">
        <h2
          style={{ color: "var(--foreground)" }}
          className="text-[30px] py-2 font-bold"
        >
          {title}
        </h2>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 hidden md:block to-green-500" />
      </div>

      <div className="flex md:flex-nowrap flex-wrap items-center w-full md:w-auto gap-2 mb-4">
        <button
          onClick={() => setActiveTab("tab2")}
          className="flex-1 py-2 text-center font-medium w-auto min-w-[200px] bg-[var(--success)] rounded-md"
        >
          Yardım Talebi Oluştur
        </button>
        <button
          onClick={() => setActiveTab("tab1")}
          className="flex-1 py-2 text-center font-medium w-auto min-w-[200px] bg-[var(--label2)] rounded-md"
        >
          Yardım Taleplerim
        </button>
      </div>

      {activeTab === "tab1" && (
        <div className="">
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
                  <tr className="hover:bg-[#3A3B51] cursor-pointer">
                    {headers.slice(0, visibleCols).map((header) => (
                      <td key={header.key} className="p-4">
                        {header.key === "durum" ? (
                          <div
                            className={`px-2 py-1 rounded font-semibold min-w-[140px] text-center`}
                            style={{
                              backgroundColor: item.statusColor,
                              color: item.statusTextColor,
                            }}
                          >
                            <span>{item.status}</span>
                          </div>
                        ) : header.key === "actions" ? (
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleSelectRequest(item.no)}
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
                            className="mb-1 px-4 py-3 flex items-center gap-2"
                          >
                            <strong>{header.label}:</strong>{" "}
                            {header.key === "durum" ? (
                              <span
                                style={{
                                  backgroundColor: item.statusColor,
                                  color: item.statusTextColor,
                                }}
                                className="px-2 py-1 rounded"
                              >
                                {item.status}
                              </span>
                            ) : header.key === "actions" ? (
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => handleSelectRequest(item.no)}
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
        </div>
      )}
      {activeTab === "tab2" && (
        <div
          id="help-request-form"
          className="bg-[var(--advert-list-bg)] p-4 rounded-lg"
        >
          <div className="flex flex-row flex-wrap space-x-4 mb-2 md:mb-4 gap-2">
            <div className="w-full m-0">
              <select
                className="w-full p-3 rounded-lg border-none focus:outline-none custom-select cursor-pointer"
                defaultValue=""
              >
                <option value="" disabled>
                  Konu Seçiniz
                </option>
                <option value="para yatırma">Para Yatırma</option>
                <option value="satın alma">Satın Alma</option>
              </select>
            </div>
            <div className="w-full">
              <textarea className="w-full p-3 rounded-lg text-white border-none focus:outline-none resize-none min-h-[220px] max-h-[300px]"></textarea>
            </div>
          </div>

          <div className="flex w-full justify-end">
            <button className="py-2 text-center font-medium min-w-[200px] bg-[var(--success)] rounded-md">
              Destek Talebi Oluştur
            </button>
          </div>
        </div>
      )}
      {activeTab === "selected-request" && (
        <div>
          <table className="min-w-full text-left text-white bg-[var(--advert-list-bg)] rounded-lg">
            <thead>
              <tr>
                {headersSingle.slice(0, visibleCols).map((header) => (
                  <th key={header.key} className="p-4">
                    {header.label}
                  </th>
                ))}
                {visibleCols < headersSingle.length && (
                  <th className="p-4"></th>
                )}
              </tr>
            </thead>
            <tbody>
              {selectedRequest.map((item, index) => (
                <React.Fragment key={index}>
                  <tr className="hover:bg-[#3A3B51] cursor-pointer">
                    {headersSingle.slice(0, visibleCols).map((header) => (
                      <td key={header.key} className="p-4">
                        {header.key === "durum" ? (
                          <div
                            className={`px-2 py-1 rounded font-semibold min-w-[140px] text-center`}
                            style={{
                              backgroundColor: item.statusColor,
                              color: item.statusTextColor,
                            }}
                          >
                            <span>{item.status}</span>
                          </div>
                        ) : header.key === "actions" ? (
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => alert(`Düzenle: ${item.no}`)}
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
                    {visibleCols < headersSingle.length && (
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
                        headersSingle.slice(visibleCols).map((header) => (
                          <div
                            key={header.key}
                            className="mb-1 px-4 py-3 flex items-center gap-2"
                          >
                            <strong>{header.label}:</strong>{" "}
                            {header.key === "durum" ? (
                              <span
                                style={{
                                  backgroundColor: item.statusColor,
                                  color: item.statusTextColor,
                                }}
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
          <div className="w-full flex flex-col bg-[var(--advert-list-bg)] rounded-xl mt-4">
            {/* HEADER */}
            <div className="p-3 border-b border-gray-600">
              <div className="flex items-center gap-2 items-center">
                <div className="bg-gradient-to-b from-[color:var(--success)] to-transparent rounded-full p-[2px]">
                  <div className="p-2 bg-[var(--bg-info-box)] rounded-full relative">
                    <div className="rounded-full relative">
                      <Link href="/">
                        <img
                          src="https://placehold.co/100"
                          alt="User Avatar"
                          className="rounded-full w-12 h-12"
                        />
                      </Link>
                    </div>
                    <div href="#" className="absolute top-0 right-0 p-1">
                      <FaCircle className="w-3 h-3 text-[var(--success)]" />
                    </div>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-[var(--success)]">Epinko</p>
                  <p className="text-sm">Son Güncelleme: 10/12/2022  |  21:57</p>
                </div>
              </div>
            </div>

            {/* MESAJLAR */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[332px] max-h-[332px]">
              {/* Karşı kişi mesajı */}
              <div>
                <div className="bg-[#2a2d41] inline-block px-4 py-2 rounded-lg text-white max-w-md">
                  Lorem ipsum dolor sit amet...
                </div>
                <p className="text-xs text-gray-400 mt-1">04:51, Bugün</p>
              </div>

              {/* Benim mesajım */}
              <div className="text-right">
                <div className="bg-[#1f2133] inline-block px-4 py-2 rounded-lg text-white max-w-md">
                  Malesuada bibendum arcu vitae elementum...
                </div>
                <p className="text-xs text-gray-400 mt-1">05:10, Bugün</p>
              </div>
            </div>

            {/* MESAJ GÖNDERME */}
            <div className="p-4 flex">
              <input
                type="text"
                placeholder="Mesaj yaz..."
                className="flex-1 p-2 rounded-l bg-[#1f2133] text-white placeholder-gray-400 outline-none"
              />
              <button className="bg-[var(--label2)] hover:bg-[var(--label1)] px-4 py-2 rounded-r text-white font-semibold cursor-pointer">
                GÖNDER
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HelpRequests;
