"use client";

import React, { useState, useEffect } from "react";
import { FaPlusCircle, FaMinusCircle, FaEdit, FaTrash } from "react-icons/fa";

import { FcAdvertising } from "react-icons/fc";
import { Copy, Info } from "lucide-react";
import { FcMoneyTransfer } from "react-icons/fc";
import { RiWalletFill } from "react-icons/ri";
import { GiCoins } from "react-icons/gi";
import { IoPeople } from "react-icons/io5";
import { FaPeopleRobbery } from "react-icons/fa6";

const boxes = [
  {
    icon: <FcMoneyTransfer size={28} />,
    title: "Çekilen Bakiyeniz",
    text: "424,50₺",
    borderColor: "var(--label7)",
  },
  {
    icon: <RiWalletFill size={28} />,
    title: "Referans Bakiyeniz",
    text: "424,50₺",
    borderColor: "var(--label2)",
  },
  {
    icon: <GiCoins size={28} />,
    title: "Toplam Kazancınız",
    text: "424,50₺",
    borderColor: "var(--label9)",
  },
  {
    icon: <IoPeople size={28} />,
    title: "1 Aylık Üye Sayısı",
    text: "1200 kişi",
    borderColor: "var(--label4)",
  },
  {
    icon: <FaPeopleRobbery size={28} />,
    title: "Toplam Üye Sayısı",
    text: "1200 kişi",
    borderColor: "var(--label11)",
  },
];

const AdvertData = [
  {
    name: "Lorem Ipsum",
    username: "kcannmutlu",
    lorem1: "150₺",
    lorem2: "Lorem Ipsum",
    tarih: "25.01.2023 Çarşamba 01:13",
  },
  {
    name: "Lorem Ipsum",
    username: "kcannmutlu",
    lorem1: "150₺",
    lorem2: "Lorem Ipsum",
    tarih: "25.01.2023 Çarşamba 01:13",
  },
  {
    name: "Lorem Ipsum",
    username: "kcannmutlu",
    lorem1: "150₺",
    lorem2: "Lorem Ipsum",
    tarih: "25.01.2023 Çarşamba 01:13",
  },
];

const headers = [
  { key: "name", label: "Ad Soyad" },
  { key: "username", label: "Kullanıcı Adı" },
  { key: "lorem1", label: "Lorem" },
  { key: "lorem2", label: "Lorem" },
  { key: "tarih", label: "Tarih" },
];

const ReferenceSystem = ({ title }) => {
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
    <>
      <div className="space-y-4">
        <div className="flex items-center space-x-4 py-2">
          <h2
            style={{ color: "var(--foreground)" }}
            className="text-[30px] py-2 font-bold"
          >
            {title}
          </h2>
          <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
        </div>
        <div>
          {/* ÜSTTEKİ 2 KUTU */}
          <div className="flex items-center flex-wrap md:flex-nowrap sm:flex-row gap-4 mb-4">
            {/* SOL INPUT KUTUSU */}
            <div className="w-full md:flex-1 relative bg-[var(--advert-list-bg)] gap-2 rounded-md text-sm md:text-md">
              <input
              id="key-input"
                type="text"
                defaultValue="#135-FG-25AS#135-FG-25AS#135-FG-25AS#135-FG-25AS"
                className="w-full p-4 pr-10 rounded-md focus:outline-none"
                disabled
              />
              <Copy className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" />
            </div>

            {/* SAĞ KUTU */}
            <div className="w-full md:flex-1 flex items-center gap-2 p-1 md:p-2 rounded-md bg-[var(--label1)]">
              <Info className="md:w-5 md:h-5 !w-8 !h-8 text-white mt-1" />
              <div className="text-xs text-white">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>

          {/* ALT KUTU */}
          <div className="flex items-start md:items-center gap-2 p-4 rounded-md bg-[var(--profile-tab-bg)]">
            <FcAdvertising className="w-12 h-12 text-green-500 mt-1 hidden md:block" />
            <div className="text-sm">
              Bu, alt kısımdaki açıklama kutusudur. Uzun olabilir ama tek
              satırda da güzel durur. Bu, alt kısımdaki açıklama kutusudur. Uzun
              olabilir ama tek satırda da güzel durur. Bu, alt kısımdaki
              açıklama kutusudur. Uzun olabilir ama tek satırda da güzel durur
            </div>
          </div>
        </div>
      </div>
      <div className="w-full my-4">
        <div className="flex items-center space-x-4 py-2">
          <h2
            style={{ color: "var(--foreground)" }}
            className="text-[30px] py-2 font-bold"
          >
            İstatikleriniz
          </h2>
          <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {boxes.map((box, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 rounded bg-[var(--profile-tab-bg)] text-center gap-3"
              style={{
                border: `2px solid ${box.borderColor}`,
              }}
            >
              <div className="mb-2" style={{ color: box.borderColor }}>
                {box.icon}
              </div>
              <h4
                className="text-xs font-semibold mb-1"
                style={{ color: box.borderColor }}
              >
                {box.title}
              </h4>
              <p className="text-md">{box.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full my-4">
        <div className="flex items-center space-x-4 py-2">
          <h2
            style={{ color: "var(--foreground)" }}
            className="text-[30px] py-2 font-bold"
          >
            Kazanç Verileriniz
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
                        ) : header.key === "username" ? (
                          <div
                            className={`px-2 py-1 rounded font-semibold min-w-[140px] text-center bg-[var(--label4)]`}
                          >
                            <span className="">{item.username}</span>
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
                            ) : header.key === "username" ? (
                              <div
                                className={`px-2 py-1 rounded font-semibold min-w-[140px] text-center bg-[var(--label4)]`}
                              >
                                <span className="">{item.username}</span>
                              </div>
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
      </div>
    </>
  );
};

export default ReferenceSystem;
