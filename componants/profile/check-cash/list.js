import React, { useState } from "react";

import { FaWallet } from "react-icons/fa";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { FaRegBuilding } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import { FaTimes, FaUser, FaUniversity } from "react-icons/fa";
import { LuBanknote } from "react-icons/lu";

import Table from "../table";

const BANKALAR = [
  "Ziraat Bankası",
  "Garanti BBVA",
  "Akbank",
  "İş Bankası",
  "Yapı Kredi",
  "QNB Finansbank",
  "Vakıfbank",
];

const WithdrawRequestModal = ({ onClose }) => {
  const [amount, setAmount] = useState("");
  const [netAmount, setNetAmount] = useState("");
  const [usePapara, setUsePapara] = useState(false);
  const [bank, setBank] = useState("");
  const [iban, setIban] = useState("");
  const [accountName, setAccountName] = useState("Onur Taşdeler");
  const [paparaNo, setPaparaNo] = useState("");

  // Sabit örnek bakiye
  const availableBalance = 0;

  // Tutar hesaplama örneği (%2 komisyon)
  const handleAmountChange = (val) => {
    setAmount(val);
    const num = parseFloat(val.replace(",", "."));
    setNetAmount(num && !isNaN(num) ? (num * 0.98).toFixed(2) : "");
  };

  return (
    <div
      id="transaction-modal"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
    >
      <div className="relative bg-[var(--profile-tab-bg)] text-[var(--foreground)] rounded-2xl p-6 w-full max-w-lg shadow-lg">
        {/* Başlık ve Kapat */}
        <div className="text-2xl font-semibold mb-4">Çekim Talebi Oluştur</div>
        <button
          onClick={onClose}
          className="absolute top-5 right-6 text-2xl text-gray-300 bg-[var(--alert)]/90 hover:bg-red-800 w-7 h-7 flex items-center justify-center rounded"
        >
          <FaTimes />
        </button>
        {/* Bakiye */}
        <div className="mb-4 text-sm">
          Çekilebilir Bakiye:{" "}
          <span className="text-[var(--label9)] font-semibold">
            {availableBalance.toFixed(2)} TL
          </span>
        </div>

        {/* Tutar Girişi */}
        <div className="flex gap-4 mb-4">
          <div className="flex-1">
            <label className="text-xs mb-1 block">
              Çekmek İstediğiniz Tutar
            </label>
            <div className="rounded flex items-center pr-2">
              <input
                type="number"
                min="0"
                step="0.01"
                className="bg-transparent flex-1 px-3 py-2 text-white focus:outline-none !rounded-r-none"
                value={amount}
                onChange={(e) => handleAmountChange(e.target.value)}
                placeholder="0.00"
              />
              <div className="bg-[var(--success)] text-black font-semibold px-[16px] py-[15px] rounded-r">
                <LuBanknote className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <label className="text-xs mb-1 block">
              Hesabınıza Geçecek Tutar
            </label>
            <div className="rounded flex items-center pr-2 opacity-60">
              <input
                type="number"
                className="bg-transparent flex-1 px-3 py-2 text-white !rounded-r-none"
                value={netAmount}
                readOnly
                disabled
                placeholder="0.00"
              />
              <div className="bg-[var(--success)] text-black font-semibold px-[16px] py-[15px] rounded-r">
                <LuBanknote className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Çizgi */}
        <div className="h-px bg-[#ffffff18] my-4" />

        {/* Papara Checkbox */}
        <label className="flex items-center text-xs mb-2 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={usePapara}
            onChange={(e) => setUsePapara(e.target.checked)}
            className="form-checkbox accent-blue-500 mr-2 !w-4 !h-4"
          />
          Papara Hesabı Eklemek İstiyorum.
        </label>

        {/* Papara aktifse */}
        {usePapara ? (
          <div className="grid md:grid-cols-2 gap-3 mb-2">
            <div>
              <label className="text-xs mb-1 block">Alıcı Ad Soyad</label>
              <div className="flex rounded items-center ">
                <input
                  type="text"
                  className="flex-1 bg-transparent py-2 pr-2 text-white focus:outline-none !rounded-r-none"
                  value={accountName}
                  onChange={(e) => setAccountName(e.target.value)}
                  placeholder="Ad Soyad"
                />
                <div className="bg-[var(--success)] text-black font-semibold px-[16px] py-[15px] rounded-r">
                  <FaUser className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
            <div>
              <label className="text-xs mb-1 block">Papara Hesap No</label>
              <div className="flex rounded items-center ">
                <div className="bg-[var(--success)] text-black font-semibold px-[16px] py-[15px] rounded-l">
                  <FaUser className="w-4 h-4 text-white" />
                </div>
                <input
                  type="text"
                  className="flex-1 bg-transparent py-2 text-white focus:outline-none !rounded-l-none"
                  value={paparaNo}
                  onChange={(e) => setPaparaNo(e.target.value)}
                  placeholder="Hesap Numaranız"
                />
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 gap-3 mb-2">
              <div>
                <label className="text-xs mb-1 block">Banka Adı</label>
                <div className="flex rounded items-center ">
                  <select
                    className="bg-transparent flex-1 py-2 text-white focus:outline-none !rounded-r-none"
                    value={bank}
                    onChange={(e) => setBank(e.target.value)}
                  >
                    <option value="">Banka Adı</option>
                    {BANKALAR.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                  <div className="bg-[var(--success)] text-black font-semibold px-[16px] py-[15px] rounded-r">
                    <FaUniversity className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
              <div>
                <label className="text-xs mb-1 block">Alıcı Ad Soyad</label>
                <div className="flex rounded items-center ">
                  <input
                    type="text"
                    className="flex-1 bg-transparent py-2 pr-2 text-white focus:outline-none !rounded-r-none"
                    value={accountName}
                    onChange={(e) => setAccountName(e.target.value)}
                    placeholder="Ad Soyad"
                  />
                  <div className="bg-[var(--success)] text-black font-semibold px-[16px] py-[15px] rounded-r">
                    <FaUser className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
            {/* IBAN */}
            <div>
              <label className="text-xs mb-1 block">IBAN</label>
              <div className="flex rounded items-center">
                <span className="bg-[var(--success)] text-black font-semibold px-[16px] py-[12px] rounded-l">
                  TR
                </span>
                <input
                  type="text"
                  className="flex-1 bg-transparent !rounded-l-none rounded-r text-white focus:outline-none"
                  value={iban}
                  onChange={(e) => setIban(e.target.value)}
                  placeholder="IBAN Numaranız"
                />
              </div>
            </div>
          </>
        )}

        {/* Oluştur Butonu */}
        <button className="mt-6 w-full py-3 rounded bg-[var(--success)] hover:bg-[var(--label3)] text-white font-semibold text-base flex items-center justify-center gap-2 transition">
          <LuBanknote className="w-5 h-5" /> OLUŞTUR
        </button>
      </div>
    </div>
  );
};

const CheckCashDetailModal = ({ onClose, data }) => {
  if (!data) return null;
  console.log("Modal Data:", data.BankMessage);
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
    BankMessage:
      "Bakiyeniz Yetersiz Olduğundan Dolayı İşleminiz İptal Edilmiştir!",
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
    BankMessage:
      "Bakiyeniz Yetersiz Olduğundan Dolayı İşleminiz İptal Edilmiştir!",
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

const CheckCash = ({ title, onTabChange }) => {
  // Filtreler için state (isteğe göre sonra geliştir)
  const [bank, setBank] = useState("");
  const [requestType, setRequestType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const boxes = [
    {
      icon: <FaWallet className="text-[var(--label9)] w-7 h-7" />,
      title: "11.50 TL",
      desc: "Toplam Bakiye",
    },
    {
      icon: <FaWallet className="text-[var(--label9)] w-7 h-7" />,
      title: "0.00 TL",
      desc: "Çek.Bloke Bakiye",
    },
    {
      icon: <FaWallet className="text-[var(--label9)] w-7 h-7" />,
      title: "0.00 TL",
      desc: "Çekilebilir Bakiye",
    },
    {
      icon: <FaWallet className="text-[var(--label9)] w-7 h-7" />,
      title: "0.00 TL",
      desc: "Yayıncı Çek.Bakiye",
    },
  ];

  return (
    <>
      {isOpen && <WithdrawRequestModal onClose={() => setIsOpen(false)} />}
      {modalOpen && (
        <CheckCashDetailModal
          data={modalData}
          onClose={() => setModalOpen(false)}
        />
      )}
      <div className="flex items-center space-x-4 py-2">
        <h2
          style={{ color: "var(--foreground)" }}
          className="text-[30px] py-2 font-bold"
        >
          {title}
        </h2>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
      </div>
      <div id="check-cash" className="flex flex-col md:flex-row gap-2">
        <div className="w-full mx-auto p-1 md:p-0">
          {/* ÜSTTEKİ 6 KUTU */}
          <div className="flex md:flex-row flex-col gap-3 mb-5">
            {/* 4 bilgi kutusu */}
            {boxes.map((box, i) => (
              <div
                key={i}
                className="flex-1 bg-[var(--label9-light)] rounded-md p-3 flex gap-3 items-center min-w-[140px]"
              >
                <span>{box.icon}</span>
                <div>
                  <div className="text-[var(--label9)] text-lg font-bold">
                    {box.title}
                  </div>
                  <div className="text-xs text-[var(--foreground)] font-semibold">
                    {box.desc}
                  </div>
                </div>
              </div>
            ))}
            {/* Çekim Talebi Oluştur (Buton) */}
            <button
              className="flex-1 bg-[var(--success)] rounded-md text-white font-semibold text-center text-xs p-3 flex items-center justify-center hover:opacity-80 transition focus:outline-none"
              onClick={() => setIsOpen(true)}
            >
              <HiOutlineBanknotes className="w-6 h-6 mr-2" />
              Çekim Talebi Oluştur
            </button>
            {/* Banka Hesaplarını Düzenle (Buton) */}
            <button 
              className="flex-1 bg-[var(--primary)] rounded-md text-white font-semibold text-center text-xs p-3 flex items-center justify-center hover:opacity-80 transition focus:outline-none"
              onClick={() => onTabChange && onTabChange("bank-accounts")}
            >
              <FaRegBuilding className="w-6 h-6 mr-2" />
              Banka Hesaplarını Düzenle
            </button>
          </div>

          {/* FİLTRELER */}
          <div className="flex flex-col md:flex-row gap-3 mb-5">
            {/* 1 - Banka seçimi */}
            <select
              className="flex-1 rounded-md px-4 py-2 text-white outline-none !border !border-[#ffffff33]"
              value={bank}
              onChange={(e) => setBank(e.target.value)}
            >
              <option value="">Tüm Bankalar</option>
              <option value="ziraat">Ziraat</option>
              <option value="is">İş Bankası</option>
            </select>

            {/* 2 - Çekim türü seçimi */}
            <select
              className="flex-1 rounded-md px-4 py-2 text-white outline-none !border !border-[#ffffff33]"
              value={requestType}
              onChange={(e) => setRequestType(e.target.value)}
            >
              <option value="">Tüm Çekim Talepleri</option>
              <option value="havale">Havale/EFT</option>
              <option value="papara">Papara</option>
            </select>

            {/* 3 - Başlangıç Tarihi */}
            <input
              type="date"
              className="flex-1 !border !border-[#ffffff33] rounded px-4 py-2 text-white outline-none"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />

            {/* 4 - Bitiş Tarihi */}
            <input
              type="date"
              className="flex-1 !border !border-[#ffffff33] rounded px-4 py-2 text-white outline-none"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />

            {/* FİLTRELE BUTONU */}
            <button
              className="flex-1 md:max-w-[150px] py-2 bg-[var(--success)] rounded-md text-white font-semibold gap-2 flex items-center justify-center hover:bg-[var(--primary)] transition"
              onClick={() => {
                console.log("Filtrele");
              }}
            >
              <FaFilter className="w-5 h-5 text-white" />
              FİLTRELE
            </button>
          </div>

        </div>
      </div>
      <div className="mt-2 space-y-2">
        <Table
          headers={headers}
          data={transactions}
          onShowDetail={(item) => {
            setModalData(item);
            setModalOpen(true);
          }}
        />
      </div>
    </>
  );
};

export default CheckCash;
