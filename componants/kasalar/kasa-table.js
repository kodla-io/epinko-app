"use client";

import React, { useState, useEffect } from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

const headers = [
  { key: "no", label: "No" },
  { key: "oyun", label: "Oyun" },
  { key: "urun", label: "Ürün" },
  { key: "tarih", label: "Tarih" },
  { key: "durum", label: "Durum" },
  { key: "kullanici", label: "Kullanıcı" },
];

const KasaTable = ({ data, title }) => {
  const [expandedRow, setExpandedRow] = useState(null);
  const [visibleCols, setVisibleCols] = useState(6);

  //   const headers = data.length > 0 ? Object.keys(data[0]) : [];

  const handleResize = () => {
    const width = window.innerWidth;

    if (width < 640) setVisibleCols(2);
    else if (width < 768) setVisibleCols(3);
    else if (width < 1024) setVisibleCols(4);
    else if (width < 1280) setVisibleCols(5);
    else if (width < 1536) setVisibleCols(6);
    else setVisibleCols(headers.length); // tüm kolonlar
  };

  useEffect(() => {
    handleResize(); // ilk açılışta
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [headers.length]);

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
      <div className="overflow-x-auto">
        <table className="min-w-full text-left bg-[var(--advert-card-bg)] rounded-lg">
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
            {data.map((item, index) => (
              <React.Fragment key={index}>
                <tr className="border-b-2 border-[var(--active-advert-tab)] hover:bg-[var(--active-advert-tab)] cursor-pointer">
                  {headers.slice(0, visibleCols).map((header) => (
                    <td key={header.key} className="p-4">
                      {header.key === "oyun" && item.oyunResim ? (
                        <div className="flex items-center">
                          <img
                            src={item.oyunResim}
                            alt={item.oyun}
                            className="w-16 h-16 rounded-sm object-cover mr-2"
                          />
                          <span>{item[header.key]}</span>
                        </div>
                      ) : header.key === "kullanici" && item.kullaniciResim ? (
                        <div className="flex items-center">
                          <img
                            src={item.kullaniciResim}
                            alt={item.kullanici}
                            className="w-10 h-10 object-cover rounded-full mr-2"
                          />
                          <span>{item[header.key]}</span>
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
                    className="bg-[var(--advert-card-bg)]"
                  >
                    {expandedRow === index &&
                      headers.slice(visibleCols).map((header) => (
                        <div key={header.key} className="mb-1 px-6 py-3">
                          {header.key === "oyun" && item.oyunResim ? (
                            <div>
                              <img
                                src={item.oyunResim}
                                alt={item.oyun}
                                className="w-10 h-10 object-cover"
                              />
                              <span>
                                <strong>{header.label}:</strong>{" "}
                                {item[header.key]}
                              </span>
                            </div>
                          ) : header.key === "kullanici" &&
                            item.kullaniciResim ? (
                            <div>
                              <span className="flex items-center gap-2">
                                <strong>{header.label}:</strong>{" "}
                                <img
                                  src={item.kullaniciResim}
                                  alt={item.kullanici}
                                  className="w-10 h-10 rounded-full object-cover"
                                />
                                {item[header.key]}
                              </span>
                            </div>
                          ) : (
                            <span>
                              <strong>{header.label}:</strong>{" "}
                              {item[header.key]}
                            </span>
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

export default KasaTable;
