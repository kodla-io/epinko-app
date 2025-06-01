"use client";

import React, { useState, useEffect } from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const AdvertData = [
  {
    no: "3535-4359",
    tarih: "25.01.2023",
    product: "Bronz Kasa 100% Bakiye",
    orderNo: "#QR-1537-70",
    price: "7000₺",
    status: "Onay Bekliyor",
    statusColor: "var(--label7)",
  },
  {
    no: "3535-4359",
    tarih: "25.01.2023",
    product: "Valorant 2000VP Kod",
    orderNo: "#QR-1537-70",
    price: "1200₺",
    status: "Tamamlandı",
    statusColor: "var(--label2)",
  },
  {
    no: "3535-4359",
    tarih: "25.01.2023",
    product: "Bronz Kasa 100% Bakiye",
    orderNo: "#QR-1537-70",
    price: "7000₺",
    status: "İptal Edildi",
    statusColor: "var(--alert)",
  },
  {
    no: "3535-4359",
    tarih: "25.01.2023",
    product: "Bronz Kasa 100% Bakiye",
    orderNo: "#QR-1537-70",
    price: "7000₺",
    status: "Onay Bekliyor",
    statusColor: "var(--label7)",
  },
  {
    no: "3535-4359",
    tarih: "25.01.2023",
    product: "Valorant 2000VP Kod",
    orderNo: "#QR-1537-70",
    price: "1200₺",
    status: "Tamamlandı",
    statusColor: "var(--label2)",
  },
  {
    no: "3535-4359",
    tarih: "25.01.2023",
    product: "Bronz Kasa 100% Bakiye",
    orderNo: "#QR-1537-70",
    price: "7000₺",
    status: "İptal Edildi",
    statusColor: "var(--alert)",
  },
];

const headers = [
  { key: "no", label: "İşlem No" },
  { key: "tarih", label: "Tarih" },
  { key: "product", label: "Ürün" },
  { key: "orderNo", label: "Sipariş No" },
  { key: "price", label: "Fiyat" },
  { key: "durum", label: "Durum" },
];

const WalletHistory = ({ title }) => {
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
                <tr className="hover:bg-[#3A3B51] cursor-pointer">
                  {headers.slice(0, visibleCols).map((header) => (
                    <td key={header.key} className="p-4">
                      {header.key === "durum" ? (
                        <span
                          className={`px-2 py-1 rounded font-semibold`}
                          style={{ backgroundColor: item.statusColor }}
                        >
                          {item.status}
                        </span>
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
                        <div key={header.key} className="mb-1 px-6 py-3">
                          <strong>{header.label}:</strong>{" "}
                          {header.key === "durum" ? (
                            <span
                              style={{ backgroundColor: item.statusColor }}
                              className="px-2 py-1 rounded"
                            >
                              {item.status}
                            </span>
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
                    : "text-white hover:bg-[var(--idle)]"
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
    </div>
  );
};

export default WalletHistory;
