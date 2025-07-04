"use client";

import React, { useState, useEffect } from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaEye,
  FaTimes,
} from "react-icons/fa";

const WalletHistoryData = [
  {
    no: "3535-4359",
    method: "Wamo",
    earn: "100₺",
    comission: "0₺",
    TotalPayment: "100₺",
    Date: "25.01.2023",
    status: "İptal Edildi",
    statusColor: "var(--alert)",
    BankMessage:
      "Bakiyeniz Yetersiz Olduğundan Dolayı İşleminiz İptal Edilmiştir!",
  },
  {
    no: "3535-4359",
    method: "Revolut",
    earn: "100₺",
    comission: "0₺",
    TotalPayment: "100₺",
    Date: "25.01.2023",
    status: "Onay Bekliyor",
    statusColor: "var(--label7)",
  },
  {
    no: "3535-4359",
    method: "PayTR Kredi Kartı",
    earn: "100₺",
    comission: "0₺",
    TotalPayment: "100₺",
    Date: "25.01.2023",
    status: "Onaylandı",
    statusColor: "var(--success)",
  },
  {
    no: "3535-4359",
    method: "Papara",
    earn: "200₺",
    comission: "6.16₺",
    TotalPayment: "206.16₺",
    Date: "25.01.2023",
    status: "Onay Bekliyor",
    statusColor: "var(--label7)",
  },
];

const headers = [
  { key: "no", label: "#" },
  { key: "method", label: "Ödeme Yöntemi" },
  { key: "earn", label: "Hesaba Geçen Tutar" },
  { key: "comission", label: "Komisyon" },
  { key: "TotalPayment", label: "Ödenen Tutar" },
  { key: "Date", label: "Ödeme Tarihi" },
  { key: "durum", label: "Durum" },
  // { key: "action", label: "Detay" },
];

const WalletDetailModal = ({ onClose, data }) => {
  if (!data) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000b3] bg-opacity-60 px-4">
      <div className="bg-[var(--advert-card-bg)] rounded-xl p-6 w-full max-w-md md:max-w-lg shadow-xl relative">
        <h3 className="text-xl font-semibold text-[var(--foreground)] mb-4 flex gap-2 items-center">
          Cüzdan İşlem Detayı
        </h3>
        <div className="mb-4 p-3 rounded bg-[var(--alert)] text-white">
          <b>Red Mesajı:</b> {data.BankMessage}
        </div>
        <div
          onClick={onClose}
          className="absolute top-0 right-5 w-8 h-8 rounded-md flex justify-center items-center mt-6 bg-[var(--alert)] cursor-pointer"
        >
          <button className="text-white">
            <FaTimes className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

const WalletHistory = ({ title }) => {
  const [expandedRow, setExpandedRow] = useState(null);
  const [visibleCols, setVisibleCols] = useState(7);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;

  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Burada başka bir şey yapılabilir: API çağrısı vs.
  };

  const handleResize = () => {
    const width = window.innerWidth;
    if (width < 640) setVisibleCols(2);
    else if (width < 768) setVisibleCols(3);
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

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center space-x-4 py-2">
        <h2
          style={{ color: "var(--foreground)" }}
          className="text-[30px] py-2 font-bold"
        >
          {title}
        </h2>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
      </div>
      <div className="">
        <table className="min-w-full text-left text-[var(--foreground)] bg-[var(--advert-card-bg)] rounded-lg">
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
            {WalletHistoryData.map((item, index) => (
              <React.Fragment key={index}>
                <tr className="hover:bg-[var(--advert-list-bg)] cursor-pointer">
                  {headers.slice(0, visibleCols).map((header) => (
                    <td key={header.key} className="p-2">
                      {header.key === "durum" ? (
                        <div className="flex items-center gap-2">
                          <span
                            style={{ backgroundColor: item.statusColor }}
                            className="px-2 py-1 rounded text-white"
                          >
                            {item.status}
                          </span>
                          {item.status === "İptal Edildi" && (
                            <span
                              className="w-8 h-8 flex rounded bg-[var(--label7)] cursor-pointer justify-center items-center"
                              onClick={() => {
                                setModalData(item);
                                setModalOpen(true);
                              }}
                            >
                              <FaEye className="w-4 h-4 text-white text-white" />
                            </span>
                          )}
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
                          className="mb-1 px-6 py-3 flex gap-2"
                        >
                          <strong>{header.label}:</strong>{" "}
                          {header.key === "durum" ? (
                            <div className="flex items-center gap-2">
                              <span
                                style={{ backgroundColor: item.statusColor }}
                                className="px-2 py-1 rounded"
                              >
                                {item.status}
                              </span>
                              {item.status === "İptal Edildi" && (
                                <span
                                  className="w-8 h-8 flex rounded bg-[var(--label7)] cursor-pointer justify-center items-center"
                                  onClick={() => {
                                    setModalData(item);
                                    setModalOpen(true);
                                  }}
                                >
                                  <FaEye className="w-4 h-4 text-white" />
                                </span>
                              )}
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
              className="px-2 py-1 h-[34px] rounded-md bg-gradient-to-r from-[var(--idle)] to-[var(--label7)] text-white hover:opacity-80"
            >
              <FaAngleDoubleLeft />
            </button>
          </li>

          {/* Sayfa numaraları */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <li key={page}>
              <button
                onClick={() => handlePageChange(page)}
                className={`px-2 py-1 rounded-md border border-[var(--idle)] ${
                  page === currentPage
                    ? "bg-[var(--label7)] text-white"
                    : "text-[var(--foreground)] hover:bg-[var(--idle)]"
                }`}
              >
                {page}
              </button>
            </li>
          ))}

          {/* Sağ ikon */}
          <li>
            <button
              onClick={() =>
                handlePageChange(Math.min(totalPages, currentPage + 1))
              }
              className="px-2 py-1 h-[34px] rounded-md bg-gradient-to-l from-[var(--idle)] to-[var(--label7)] text-white hover:opacity-80"
            >
              <FaAngleDoubleRight />
            </button>
          </li>
        </ul>
      </div>
      {modalOpen && (
        <WalletDetailModal
          data={modalData}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};

export default WalletHistory;
