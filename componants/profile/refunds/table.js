"use client";

import React, { useState, useEffect } from "react";
import { FaPlusCircle, FaMinusCircle, FaEdit, FaTrash } from "react-icons/fa";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import Alerts from "../../../componants/texts/warning";

const steps = [
  {
    id: 1,
    title: "İade Talebi Alındı",
    description:
      "Pulvinar mattis nunc sed blandit libero volutpat sed. Sit amet nisl purus in mollis nunc sed id semper.",
    color: "green",
  },
  {
    id: 2,
    title: "İade Talebi İnceleniyor",
    description:
      "Pulvinar mattis nunc sed blandit libero volutpat sed. Sit amet nisl purus in mollis nunc sed id semper.",
    color: "green",
  },
  {
    id: 3,
    title: "Admin Onayında",
    description:
      "Pulvinar mattis nunc sed blandit libero volutpat sed. Sit amet nisl purus in mollis nunc sed id semper.",
    color: "green",
  },
  {
    id: 4,
    title: "İade Tamamlandı",
    description:
      "Pulvinar mattis nunc sed blandit libero volutpat sed. Sit amet nisl purus in mollis nunc sed id semper.",
    color: "red",
  },
];

const AdvertData = [
  {
    id: 0,
    no: "#14GJ8",
    subject: "Urna porttitor rhoncus dolor purus.",
    createDate: "03-03-2023  |  21.45",
    finishDate: "03-03-2023  |  21.45",
    status: "Tamamlandı",
    statusColor: "var(--success)",
  },
  {
    id: 1,
    no: "#24GJ8",
    subject: "Urna porttitor rhoncus dolor purus.",
    createDate: "03-03-2023  |  21.45",
    finishDate: "03-03-2023  |  21.45",
    status: "Bekliyor",
    statusColor: "var(--label9)",
  },
  {
    id: 2,
    no: "#34GJ8",
    subject: "Urna porttitor rhoncus dolor purus.",
    createDate: "03-03-2023  |  21.45",
    finishDate: "03-03-2023  |  21.45",
    status: "Tamamlandı",
    statusColor: "var(--success)",
  },
  {
    id: 3,
    no: "#44GJ8",
    subject: "Urna porttitor rhoncus dolor purus.",
    createDate: "03-03-2023  |  21.45",
    finishDate: "03-03-2023  |  21.45",
    status: "Bekliyor",
    statusColor: "var(--label9)",
  },
];

const headers = [
  { key: "no", label: "No" },
  { key: "subject", label: "Konu" },
  { key: "createDate", label: "Oluşturma Tarihi" },
  { key: "finishDate", label: "Bitiş Tarihi" },
  { key: "durum", label: "Durum" },
  { key: "button", label: "Detay" },
];

const RefundRequests = ({ title }) => {
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

  const [activeTab, setActiveTab] = useState("refunds");
  const [displayedTitle, setTitle] = useState("");

  // Detay butonuna tıklandığında
  const handleDetailClick = (itemTitle) => {
    setTitle(itemTitle);
    setActiveTab("detail");
  };

  // Geri butonuna tıklandığında
  const handleBackClick = () => {
    setActiveTab("refunds");
    setTitle("");
  };

  // Geri butonuna tıklandığında
  const handleCreateClick = () => {
    setActiveTab("create");
    setTitle("");
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center flex-wrap md:flex-nowrap space-x-4 py-2 mb-3 md:mb-0">
        <h2
          style={{ color: "var(--foreground)" }}
          className="text-[30px] py-2 font-bold"
        >
          {activeTab === "refunds" && title}
          {activeTab === "create" && <span>İade Talebi Oluştur</span>}
          {activeTab === "detail" && displayedTitle}
        </h2>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500 hidden md:block" />
        {activeTab !== "refunds" && (
          <button
            onClick={handleBackClick}
            className="flex-1 py-2 text-center font-medium min-w-[200px] bg-[var(--label4)] rounded-md"
          >
            İade Taleplerim
          </button>
        )}
        {activeTab === "refunds" && (
          <button
            onClick={handleCreateClick}
            className="flex-1 py-2 text-center font-medium min-w-[200px] bg-[var(--label4)] rounded-md"
          >
            Talep Oluştur
          </button>
        )}
      </div>
      {activeTab === "refunds" && (
        <>
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
                                onClick={() => alert(`Düzenle: ${item.no}`)}
                              >
                                <FaEdit />
                              </button>
                              <button onClick={() => alert(`Sil: ${item.no}`)}>
                                <FaTrash />
                              </button>
                            </div>
                          ) : header.key === "button" ? (
                            <div className="">
                              <button
                                onClick={() => handleDetailClick(item.no)}
                                className="px-2 py-1 rounded-md bg-[var(--label4)] text-white hover:opacity-80 rounded-md"
                              >
                                Detay
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
                              ) : header.key === "button" ? (
                                <div className="">
                                  <button
                                    onClick={() => handleDetailClick(item.no)}
                                    className="px-2 py-1 rounded-md bg-[var(--label4)] text-white hover:opacity-80 rounded-md"
                                  >
                                    Detay
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
      {activeTab === "detail" && (
        <>
          <div className="bg-[var(--advert-list-bg)] p-6 rounded-lg overflow-x-auto">
            <div className="relative flex justify-between items-start md:items-center gap-6 md:gap-0 min-w-[800px]">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className="flex flex-col items-center text-center w-[200px] relative"
                >
                  {/* Daire */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg border-4 border-${step.color}-500 bg-${step.color}-600 z-10`}
                  >
                    {step.id}
                  </div>

                  {/* Çizgi (bir sonrakine kadar) */}
                  {index < steps.length - 1 && (
                    <div
                      className={`absolute top-5 left-[50%] h-1 w-[calc(100%+2.5rem)] md:w-[calc(100%+3.5rem)] bg-${step.color}-600`}
                    ></div>
                  )}

                  {/* İçerik kutusu */}
                  <div
                    className="mt-6 rounded-md"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${step.color}, transparent 20%, transparent 80%, ${step.color})`,
                      padding: "2px",
                    }}
                  >
                    <div
                      className={`p-4 rounded-md bg-[var(--list-box)] text-white`}
                    >
                      <h4
                        className={`font-semibold text-${step.color}-400 text-sm`}
                      >
                        {step.title}
                      </h4>
                      <p className="text-xs mt-1">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Alerts />
        </>
      )}
      {activeTab === "create" && (
        <>
          <div
            id="refund-request"
            className="bg-[var(--advert-list-bg)] p-4 rounded-lg"
          >
            <div className="flex md:flex-row flex-col space-x-4 mb-2 md:mb-4 gap-2">
              <div className="md:flex-1 w-full">
                <select
                  className="w-full p-3 rounded-lg border-none focus:outline-none custom-select cursor-pointer"
                  defaultValue=""
                >
                  <option value="" disabled>
                    İade Nedenini Seçiniz
                  </option>
                  <option value="para yatırma">Para Yatırma</option>
                  <option value="satın alma">Satın Alma</option>
                </select>
              </div>
              <div className="md:flex-1 w-full">
                <input
                  type="text"
                  placeholder="IBAN"
                  className="w-full p-3 rounded-lg text-white border-none focus:outline-none"
                />
              </div>
            </div>
            <div className="w-full">
              <textarea
                className="w-full p-3 rounded-lg text-white border-none focus:outline-none resize-none min-h-[220px] max-h-[300px]"
                placeholder="Lütfen mesajınızı yazınız."
              ></textarea>
            </div>

            <div className="flex w-full justify-end mt-2">
              <button className="py-2 text-center font-medium min-w-[200px] bg-[var(--success)] rounded-md">
                İade Talebi Oluştur
              </button>
            </div>
          </div>
          <Alerts />
        </>
      )}
    </div>
  );
};

export default RefundRequests;
