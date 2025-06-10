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
import { LuShieldAlert } from "react-icons/lu";
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

  const [activeTab, setActiveTab] = useState("requests");

  const [selectedRequest, setSelectedRequest] = useState([]);

  const handleSelectRequest = (index) => {
    const selected = AdvertData[index];
    if (selected) {
      setSelectedRequest([selected]); // önceki verileri sil, sadece bu veriyi ata
      setActiveTab("selected-request");
    }
  };

  const [topic, setTopic] = useState("");
  const [details, setDetails] = useState("");
  const [screenshots, setScreenshots] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setScreenshots(
      files.map((file) => ({
        file,
        url: URL.createObjectURL(file),
      }))
    );
  };

  const handleSubmit = () => {
    // TODO: Formu API'ye gönder
    console.log({ topic, details, screenshots });
    alert("Destek talebiniz gönderildi.");
  };

  return (
    <div id="help-requests" className="container mx-auto p-0 md:p-4">
      <div className="flex items-center space-x-4 py-2">
        <h2
          style={{ color: "var(--foreground)" }}
          className="text-[30px] py-2 font-bold"
        >
          {title}
        </h2>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 hidden md:block to-green-500" />
        {activeTab !== "requests" && (
          <div className="flex md:flex-nowrap flex-wrap items-center w-full md:w-auto gap-2 mb-4">
            <button
              onClick={() => setActiveTab("requests")}
              className="flex-1 py-2 text-center font-medium w-auto min-w-[200px] bg-[var(--success)] rounded-md"
            >
              Geri Git
            </button>
          </div>
        )}
      </div>

      {activeTab === "requests" && (
        <div className="">
          <div className="mx-auto mb-3">
            {/* Uyarı Mesajı */}
            <div className="bg-[var(--label5)] text-white font-bold text-center py-3 rounded mb-6">
              LÜTFEN ÖDEME YAPTIKDAN SONRA DİREK BURDAN YAZMAYIN İŞLEMİ
              HIZLANDIRMAYACAKTIR 10,15 DAKİKA ÖDEME KONTROLÜ SÜRMEKTEDİR.
            </div>

            {/* Başlık */}
            <h3 className="text-xl font-semibold mb-4">
              Destek Talebi Oluştur
            </h3>

            {/* İçerik Alanı */}
            <div className="bg-[var(--profile-tab-bg)] text-white p-4 rounded grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Sol: Fotoğraf Yükleme */}
              <div>
                <label
                  htmlFor="screenshotUpload"
                  className="block font-medium mb-2"
                >
                  Dosya
                </label>
                <input
                  id="screenshotUpload"
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileChange}
                  className="block w-full cursor-pointer text-sm text-gray-200 file:mr-4 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:text-white"
                />

                <label
                  htmlFor="screenshotUpload"
                  className="block font-medium mb-2 py-4"
                >
                  Talebiniz ekran görüntüsü içeriyorsa lütfen ekleyiniz. Lütfen
                  ekran resminin net görünürlü olmasına dikkat ediniz.
                </label>

                {/* Görsel Önizleme */}
                <div className="grid grid-cols-4 gap-2 mt-4 h-15">
                  {screenshots.map((img, index) => (
                    <img
                      key={index}
                      src={img.url}
                      alt={`screenshot-${index}`}
                      className="w-full h-full object-cover rounded"
                    />
                  ))}
                </div>
              </div>

              {/* Sağ: Başlık ve Detay */}
              <div className="md:col-span-2">
                <label htmlFor="topic" className="block mb-2 font-medium">
                  Destek Talep Konusu{" "}
                  {/* <span className="text-xs text-gray-400">
                    (Max 50 Karakter)
                  </span> */}
                </label>
                <input
                  type="text"
                  id="topic"
                  value={topic}
                  maxLength={50}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                />

                <label htmlFor="details" className="block mb-2 font-medium">
                  Destek Talebi Detayları
                </label>
                <textarea
                  id="details"
                  rows={6}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full px-4 py-2 rounded bg-[var(--profile-input)] resize-none text-white focus:outline-none"
                  placeholder="Talebinizi detaylı şekilde açıklayınız..."
                ></textarea>

                {/* Buton */}
                <div className="text-right mt-4">
                  <button
                    onClick={handleSubmit}
                    className="bg-[var(--primary)] hover:opacity-80 text-white font-semibold py-2 px-6 rounded"
                  >
                    Destek Talebi Oluştur
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4 py-2">
            <h2
              style={{ color: "var(--foreground)" }}
              className="text-[30px] py-2 font-bold"
            >
              Destek Taleplerim
            </h2>
            <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 hidden md:block to-green-500" />
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
                  className="px-2 py-1 h-[34px] rounded-md bg-gradient-to-r from-[var(--idle)] to-[var(--label7)] text-white hover:opacity-80"
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
                      className={`px-2 py-1 rounded-md border border-[var(--idle)] ${
                        page === currentPage
                          ? "bg-[var(--label7)] text-white"
                          : "text-white hover:bg-[var(--idle)]"
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
                  className="px-2 py-1 h-[34px] rounded-md bg-gradient-to-l from-[var(--idle)] to-[var(--label7)] text-white hover:opacity-80"
                >
                  <FaAngleDoubleRight />
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
      {activeTab === "selected-request" && (
        <div>
          <div className="p-1 md:p-4 mx-auto space-y-6">
            {/* Başlık ve Üst Bilgiler */}
            <div className="border-b border-gray-300 pb-4 mb-4">
              <h2 className="text-2xl font-bold">E-pin Kodu Hakkında</h2>
              <p className="text-sm text-gray-500">
                Destek Kodu: <span className="font-medium">#123456</span>
              </p>
              <p className="text-sm text-gray-500">
                Oluşturulma Tarihi: 10.06.2025 - 14:32
              </p>
              <span className="inline-block mt-2 px-4 py-1 bg-[var(--success)] text-white text-sm rounded-md">
                Çözümlendi
              </span>
            </div>

            {/* Mesajlar Konteyneri */}
            <div className="max-h-[500px] overflow-y-auto space-y-6 pr-2">
              {/* Kullanıcı Mesajı */}
              <div className="flex justify-end">
                <div className="bg-blue-100 text-black p-4 rounded-lg max-w-[100%] md:max-w-[80%]">
                  <p className="text-xs text-gray-600 mb-1">
                    Siz - 10.06.2025 14:35
                  </p>
                  <hr className="border-gray-300 my-2" />
                  <p className="font-semibold">Kod Hakkında</p>
                  <p>
                    E-pin kodunu girdim ama çalışmadı. Yardımcı olur musunuz? Ne
                    yapmama Lazım?
                  </p>
                </div>
              </div>

              {/* Karşı Taraf Mesajı */}
              <div className="flex justify-start">
                <div className="bg-gray-100 text-black p-4 rounded-lg max-w-[100%] md:max-w-[80%]">
                  <div className="flex items-center gap-3 mb-1">
                    <img
                      src="/logo.png"
                      alt="Destek"
                      className="w-auto h-6 rounded-full"
                    />
                    <div>
                      <p className="text-sm font-medium">Destek Ekibi</p>
                      <p className="text-xs text-gray-500">10.06.2025 14:40</p>
                    </div>
                  </div>
                  <hr className="border-gray-300 my-2" />
                  <p>
                    E-pinin sistemimizde aktif olduğunu görüyoruz. Lütfen bir
                    kez daha deneyin ve tarayıcınızı yenileyin. Sorun devam
                    ederse tekrar bize ulaşın.
                  </p>
                </div>
              </div>

              {/* Kullanıcı Mesajı */}
              <div className="flex justify-end">
                <div className="bg-blue-100 text-black p-4 rounded-lg max-w-[100%] md:max-w-[80%]">
                  <p className="text-xs text-gray-600 mb-1">
                    Siz - 10.06.2025 14:35
                  </p>
                  <hr className="border-gray-300 my-2" />
                  <p className="font-semibold">Kod Hakkında</p>
                  <p>
                    E-pin kodunu girdim ama çalışmadı. Yardımcı olur musunuz?
                  </p>
                </div>
              </div>

              {/* Karşı Taraf Mesajı */}
              <div className="flex justify-start">
                <div className="bg-gray-100 text-black p-4 rounded-lg max-w-[100%] md:max-w-[80%]">
                  <div className="flex items-center gap-3 mb-1">
                    <img
                      src="/logo.png"
                      alt="Destek"
                      className="w-auto h-6 rounded-full"
                    />
                    <div>
                      <p className="text-sm font-medium">Destek Ekibi</p>
                      <p className="text-xs text-gray-500">10.06.2025 14:40</p>
                    </div>
                  </div>
                  <hr className="border-gray-300 my-2" />
                  <p>
                    E-pinin sistemimizde aktif olduğunu görüyoruz. Lütfen bir
                    kez daha deneyin ve tarayıcınızı yenileyin. Sorun devam
                    ederse tekrar bize ulaşın.
                  </p>
                </div>
              </div>
            </div>

            {/* Mesaj Gönderme Alanı */}
            <div className="flex items-center gap-4 p-2 mt-4 bg-[var(--profile-tab-bg)] rounded-sm">
              <input
                type="text"
                placeholder="Bir mesaj yazın..."
                className="flex-1 px-4 py-2 rounded focus:outline-none focus:ring-2 bg-[var(--profile-input)] text-white"
              />
              <button className="bg-[var(--primary)] hover:opacity-80 text-white px-4 py-2 rounded">
                Gönder
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HelpRequests;
