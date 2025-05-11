import React, { useState } from "react";
import { FaWallet } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { TbDiscountFilled } from "react-icons/tb";

import Table from "../table";

const transactions = [
  {
    requestID: "1034-1234",
    savedName: "Lorem Ipsum",
    iban: "TR19 1919 1991 9191 9919 1991 19",
    name: "Epinko Epinko",
    date: "12/10/2025",
    orderState: "7000₺",
    status: "Onay Bekliyor",
    statusColor: "var(--label9)",
  },
  {
    requestID: "1034-1234",
    savedName: "Lorem Ipsum",
    iban: "TR19 1919 1991 9191 9919 1991 19",
    name: "Epinko Epinko",
    date: "12/10/2025",
    orderState: "7000₺",
    status: "İptal Edildi",
    statusColor: "var(--alert)",
  },
  {
    requestID: "1034-1234",
    savedName: "Lorem Ipsum",
    iban: "TR19 1919 1991 9191 9919 1991 19",
    name: "Epinko Epinko",
    date: "12/10/2025",
    orderState: "7000₺",
    status: "Onaylandı",
    statusColor: "var(--label1)",
  },
  {
    requestID: "1034-1234",
    savedName: "Lorem Ipsum",
    iban: "TR19 1919 1991 9191 9919 1991 19",
    name: "Epinko Epinko",
    date: "12/10/2025",
    orderState: "7000₺",
    status: "İptal Edildi",
    statusColor: "var(--alert)",
  },
];

const transactionsCanceled = [
  {
    requestID: "1034-1234",
    savedName: "Lorem Ipsum",
    iban: "TR19 1919 1991 9191 9919 1991 19",
    name: "Epinko Epinko",
    date: "12/10/2025",
    orderState: "7000₺",
    status: "İptal Edildi",
    statusColor: "var(--alert)",
  },
  {
    requestID: "1034-1234",
    savedName: "Lorem Ipsum",
    iban: "TR19 1919 1991 9191 9919 1991 19",
    name: "Epinko Epinko",
    date: "12/10/2025",
    orderState: "7000₺",
    status: "İptal Edildi",
    statusColor: "var(--alert)",
  },
];

const headers = [
  { key: "requestID", label: "Talep ID" },
  { key: "savedName", label: "Kayıt Adı" },
  { key: "iban", label: "IBAN" },
  { key: "name", label: "İsim Soyisim" },
  { key: "date", label: "Tarih" },
  { key: "orderState", label: "Tutar" },
  { key: "durum", label: "Durum" },
];

const CheckCash = () => {
  const [activeTab, setActiveTab] = useState("transactions");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <div
        id="check-cash"
        className="flex flex-col md:flex-row gap-4 bg-[var(--advert-list-bg)]"
      >
        <div className="md:w-1/4 w-full flex flex-col space-y-4 p-4">
          <div className="flex items-center space-x-2 border-2 border-green-500 rounded-xl p-4">
            <div className="flex-none">
              <div className="bg-green-500 rounded-full p-4">
                <FaWallet className="w-6 h-6" />
              </div>
            </div>
            <div className="flex-grow text-center">
              <div>İlan Bakiyeniz</div>
              <div className="text-xl">4268,50₺</div>
            </div>
          </div>

          <div className="flex items-center space-x-2 border-2 border-yellow-500 rounded-xl p-4">
            <div className="flex-none">
              <div className="bg-yellow-500 rounded-full p-4">
                <FaTimes className="w-6 h-6" />
              </div>
            </div>
            <div className="flex-grow text-center">
              <div>Çekim Alt Limit</div>
              <div className="text-xl">50₺</div>
            </div>
          </div>

          <div className="flex items-center space-x-2 border-2 border-red-500 rounded-xl p-4">
            <div className="flex-none">
              <div className="bg-red-500 rounded-full p-4">
                <TbDiscountFilled className="w-6 h-6" />
              </div>
            </div>
            <div className="flex-grow text-center">
              <div>Komisyon Tutarı</div>
              <div className="text-xl">10₺</div>
            </div>
          </div>
        </div>

        <div className="md:w-3/4 w-full p-4 text-white rounded space-y-4">
          <div className="flex space-x-2 w-full flex-wrap md:flex-nowrap gap-4">
            <button
              className="bg-blue-500 p-2 rounded w-full md:flex-1"
              onClick={() => setActiveTab("transactions")}
            >
              Bakiye Çekim Taleplerim
            </button>
            <button className="bg-purple-500 p-2 rounded w-full md:flex-1">
              Banka Hesabı Ekle
            </button>
            <button
              className="bg-red-500 p-2 rounded w-full md:flex-1"
              onClick={() => setActiveTab("transactionsCanceled")}
            >
              Başarılı Çekim Taleplerim
            </button>
          </div>

          <form className="space-y-4">
            <div className="flex items-center flex-wrap md:flex-nowrap gap-4">
              <select className="w-full p-2 rounded bg-gray-700 w-full md:flex-1">
                <option>Kayitlı Banka Hesaplarım</option>
              </select>
              <input
                type="text"
                className="w-full p-2 rounded bg-gray-700 w-full md:flex-1"
                placeholder="Banka Adı"
              />
              <input
                type="text"
                className="w-full p-2 rounded bg-gray-700 w-full md:flex-1"
                placeholder="Hesap Sahibi"
              />
            </div>
            <div className="flex items-center flex-wrap md:flex-nowrap gap-4">
              <input
                type="text"
                className="w-full p-2 rounded bg-gray-700 w-full md:flex-1"
                placeholder="+90 555 555 55 55"
              />
              <input
                type="text"
                className="w-full p-2 rounded bg-gray-700 w-full md:flex-1"
                placeholder="TR__ ____ ____ ____ ____"
              />
            </div>

            <div className="flex w-full justify-end">
              <button type="submit" className="bg-green-500 p-2 rounded">
                Güncelle
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-2 space-y-2">
        <div className="flex items-center space-x-4 py-2">
          <h2
            style={{ color: "var(--foreground)" }}
            className="text-[30px] py-2 font-bold"
          >
            SON İŞLEMLERİM
          </h2>
          <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
        </div>
        {activeTab === "transactions" ? (
          <Table headers={headers} data={transactions} />
        ) : (
          <Table headers={headers} data={transactionsCanceled} />
        )}
      </div>
    </>
  );
};

export default CheckCash;
