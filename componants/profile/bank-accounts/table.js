"use client";

import React, { useState, useEffect } from "react";
import { FaPlusCircle, FaMinusCircle, FaEdit, FaTrash } from "react-icons/fa";

const AdvertData = [
  {
    name: "Ziraat Bankası",
    date: "25.01.2023",
    iban: "TR12 1212 0930 4903 4993 4309 48",
    fullName: "Lorem Lorem",
    status: "Aktif",
    statusColor: "#D2F6F4",
    statusTextColor: "#56BEB8",
  },
  {
    name: "İş Bank",
    date: "25.01.2023",
    iban: "TR12 1212 0930 4903 4993 4309 48",
    fullName: "Lorem Lorem",
    status: "Aktif",
    statusColor: "#D2F6F4",
    statusTextColor: "#56BEB8",
  },
  {
    name: "Vakıf Bank",
    date: "25.01.2023",
    iban: "TR12 1212 0930 4903 4993 4309 48",
    fullName: "Lorem Lorem",
    status: "Pasif",
    statusColor: "var(--alert)",
    statusTextColor: "#ffffff",
  },
];

const headers = [
  { key: "name", label: "Kayıt Adı" },
  { key: "date", label: "Kayıt Tarihi" },
  { key: "iban", label: "IBAN" },
  { key: "fullName", label: "İsim Soyisim" },
  { key: "durum", label: "Durum" },
  { key: "actions", label: "Düzenle" },
];

const BankAccounts = ({ title }) => {
  const [expandedRow, setExpandedRow] = useState(null);
  const [visibleCols, setVisibleCols] = useState(7);

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
                    <td key={header.key} className="p-4">
                      {header.key === "durum" ? (
                        <div
                          className={`px-2 py-1 rounded font-semibold min-w-[140px] text-center`}
                          style={{ backgroundColor: item.statusColor, color: item.statusTextColor }}
                        >
                          <span>{item.status}</span>
                        </div>
                      ) : header.key === "actions" ? (
                        <div className="flex items-center gap-2">
                          <button onClick={() => alert(`Düzenle: ${item.no}`)}>
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
                        <div key={header.key} className="mb-1 px-4 py-3 flex items-center gap-2">
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
                              <button onClick={() => alert(`Sil: ${item.no}`)}>
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
    </div>
  );
};

export default BankAccounts;
