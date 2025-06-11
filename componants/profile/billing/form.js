import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { MdOutlineReceiptLong } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";

const exampleAddresses = [
  {
    companyName: "Cool Games Inc.",
    taxOffice: "Kadıköy",
    taxNumber: "1234567890",
    country: "Turkey",
    city: "Istanbul",
    district: "Kadıköy",
    address:
      "Acıbadem Mah. Şehit Şakir Elkovan Sk. No:24 D:8 Kadıköy, İstanbul, Türkiye. Burası çok uzun bir örnek adres satırı ve sonunda devam ediyor.",
    owner: "Ayşe Kaya",
    phone1: "+90 555 123 45 67",
    phone2: "+90 555 987 65 43",
  },
  {
    companyName: "E-Pin World",
    taxOffice: "Seyhan",
    taxNumber: "9876543210",
    country: "Turkey",
    city: "Adana",
    district: "Çukurova",
    address:
      "Baraj Yolu Bulv. Huzurevleri Mah. 77023 Sok. No: 14 Çukurova, Adana.",
    owner: "Mehmet Demir",
    phone1: "+90 501 234 56 78",
    phone2: "",
  },
];

const BillingModal = ({ onClose, initialData = {}, onDelete }) => {
  // input değerlerini initialData'dan doldur
  const [companyName, setCompanyName] = useState(initialData.companyName || "");
  const [taxOffice, setTaxOffice] = useState(initialData.taxOffice || "");
  const [taxNumber, setTaxNumber] = useState(initialData.taxNumber || "");
  const [country, setCountry] = useState(initialData.country || "Turkey");
  const [city, setCity] = useState(initialData.city || "");
  const [district, setDistrict] = useState(initialData.district || "");
  const [address, setAddress] = useState(initialData.address || "");
  const [owner, setOwner] = useState(initialData.owner || "");
  const [phone1, setPhone1] = useState(initialData.phone1 || "");
  const [phone2, setPhone2] = useState(initialData.phone2 || "");

  useEffect(() => {
    setCompanyName(initialData.companyName || "");
    setTaxOffice(initialData.taxOffice || "");
    setTaxNumber(initialData.taxNumber || "");
    setCountry(initialData.country || "Turkey");
    setCity(initialData.city || "");
    setDistrict(initialData.district || "");
    setAddress(initialData.address || "");
    setOwner(initialData.owner || "");
    setPhone1(initialData.phone1 || "");
    setPhone2(initialData.phone2 || "");
  }, [initialData]);

  const handleSave = (e) => {
    e.preventDefault();
    // Bu noktada props ile update yapılmalı!
    alert("Saved!");
    onClose();
  };

  const handleDelete = () => {
    if (
      window.confirm("Are you sure you want to delete this billing address?")
    ) {
      onDelete?.(); // Eğer varsa çağır
      onClose();
    }
  };

  return (
    <div
      id="billing"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 px-4"
    >
      <div className="bg-[var(--profile-tab-bg)] rounded-xl p-6 w-full max-w-2xl shadow-xl relative text-white max-h-[90vh] overflow-y-auto sm:max-h-[80vh]">
        {/* Title */}
        <div className="flex items-center gap-2 mb-2">
          <MdOutlineReceiptLong className="text-green-500 w-7 h-7" />
          <h2 className="text-2xl font-semibold">Billing Information</h2>
        </div>
        <p className="text-sm text-gray-400 mb-3 border-b border-[#272731] pb-2">
          Bakiye iade taleplerinizi buradan gerçekleştirebilirsiniz.
        </p>

        {/* Warning box */}
        <div className="bg-[#fbe8a6] text-black rounded-md p-3 text-xs mb-4">
          Kimlik bilgileriniz 27 Haziran 2013’te yürürlüğe giren 6493 sayılı
          <b>
            {" "}
            “
            <span className="text-[#ef9700]">
              Ödeme ve Menkul Kıymet Mutabakat Sistemleri, Ödeme Hizmetleri ve
              Elektronik Para Kuruluşları Hakkında Kanun
            </span>
            ”
          </b>{" "}
          kapsamındaki ödeme güvenliğini sağlamak amacıyla alınmaktadır. Bu
          bilgiler hiçbir şekilde herhangi bir kurum/kuruluş ya da kişi ile
          paylaşılmamaktadır.
        </div>

        <form onSubmit={handleSave} className="space-y-4">
          {/* Section Title */}
          <h3 className="text-lg font-semibold mb-1">Ödeme Bilgileri</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              className="rounded px-3 py-2 text-white"
              placeholder="Şirket Adı"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
            <input
              className="rounded px-3 py-2 text-white"
              placeholder="Vergi Dairesi"
              value={taxOffice}
              onChange={(e) => setTaxOffice(e.target.value)}
              required
            />
            <input
              className="rounded px-3 py-2 text-white"
              placeholder="Vergi Numarası"
              value={taxNumber}
              onChange={(e) => setTaxNumber(e.target.value)}
              required
            />
            <select
              className="rounded px-3 py-2 text-white"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            >
              <option value="Turkey">Turkey</option>
              <option value="Germany">Germany</option>
            </select>
            <select
              className="rounded px-3 py-2 text-white"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            >
              <option value="">Select City</option>
              <option value="Adana">Adana</option>
              <option value="Istanbul">Istanbul</option>
            </select>
            <select
              className="rounded px-3 py-2 text-white"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              required
            >
              <option value="">Select District</option>
              <option value="Aladag(Karsanti)">Aladag(Karsanti)</option>
              <option value="Cukurova">Cukurova</option>
            </select>
            <textarea
              className="rounded bg-[var(--profile-input)] px-3 py-2 text-white md:col-span-2 resize-none"
              placeholder="Adresinizi Giriniz.."
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              rows={2}
              required
            />
            <input
              className="rounded px-3 py-2 text-white"
              placeholder="Firma Sahibi"
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
              required
            />
            <input
              className="rounded px-3 py-2 text-white"
              placeholder=" Yetkili Telefon #1"
              value={phone1}
              onChange={(e) => setPhone1(e.target.value)}
              required
            />
            <input
              className="rounded px-3 py-2 text-white md:col-span-2"
              placeholder="Yetkili Telefon #2"
              value={phone2}
              onChange={(e) => setPhone2(e.target.value)}
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-4">
            {Object.keys(initialData).length > 0 && (
              <button
                type="button"
                onClick={handleDelete}
                className="px-6 py-2 rounded bg-red-600 hover:bg-red-700 text-white font-semibold mr-auto"
              >
                Delete
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 rounded bg-[var(--alert)] hover:opacity-80 text-white font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded bg-[var(--success)] text-white font-semibold flex items-center gap-2"
            >
              <span>Update Information</span>
            </button>
          </div>
        </form>

        {/* Top-right close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-5 w-8 h-8 rounded-md flex justify-center items-center bg-[var(--alert,#ff5656)] hover:bg-red-700 transition-colors"
        >
          <FaTimes className="text-white w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

// BillingAddress COMPONENT
const truncate = (str, length) =>
  str.length > length ? str.slice(0, length) + "..." : str;

const BillingAddress = ({
  title,
  externalModalOpen = false,
  externalModalData = {},
  onExternalModalClose = () => {},
}) => {
  const [showModal, setShowModal] = useState(false);
  const [addresses, setAddresses] = useState(exampleAddresses);
  const [editIndex, setEditIndex] = useState(null);

  const [externalMode, setExternalMode] = useState(false);

  // Modalı kendi içinden açarken
  const handleOpenModal = (idx = null) => {
    setEditIndex(idx);
    setShowModal(true);
    setExternalMode(false);
  };

  // Modalı dışarıdan tetiklenip açıldığında
  useEffect(() => {
    if (externalModalOpen) {
      setShowModal(true);
      setEditIndex(null);
      setExternalMode(true);
    }
    // Kapanış için de kontrol (Opsiyonel)
    if (!externalModalOpen && showModal && externalMode) {
      setShowModal(false);
      setEditIndex(null);
      setExternalMode(false);
    }
  }, [externalModalOpen]);

  // Modalı kapatırken
  const handleCloseModal = () => {
    setShowModal(false);
    setEditIndex(null);
    setExternalMode(false);
    onExternalModalClose();
  };

  // Silme fonksiyonu
  const handleDelete = (idx) => {
    setAddresses((prev) => prev.filter((_, i) => i !== idx));
    handleCloseModal();
  };

  return (
    <div>
      <div className="flex items-center space-x-4 py-2">
        <h2
          style={{ color: "var(--foreground)" }}
          className="text-[30px] py-2 font-bold"
        >
          {title}
        </h2>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 hidden md:block to-green-500" />
        <div className="flex md:flex-nowrap flex-wrap items-center w-full md:w-auto gap-2 mb-4">
          <button
            onClick={() => handleOpenModal(null)}
            className="flex-1 py-2 text-center font-medium w-auto min-w-[200px] bg-[var(--success)] rounded-md"
          >
            Fatura Adresi Ekle
          </button>
        </div>
      </div>

      {/* MODAL sadece showModal true ise açılır */}
      {showModal && (
        <BillingModal
          onClose={handleCloseModal}
          initialData={
            externalMode
              ? externalModalData
              : editIndex !== null
              ? addresses[editIndex]
              : {}
          }
          onDelete={
            !externalMode && editIndex !== null
              ? () => handleDelete(editIndex)
              : undefined
          }
        />
      )}

      {/* Adres Listesi */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
        {addresses.map((item, i) => (
          <div
            key={i}
            className="relative border-2 border-[var(--primary)] rounded-xl p-4 bg-[var(--primary)]/10 flex flex-col gap-2 shadow-md transition hover:shadow-xl"
          >
            {/* Şirket adı, vurgulu */}
            <div className="font-bold text-lg text-[var(--primary)] mb-1">
              {item.companyName}
            </div>
            <div className="text-[13px] text-gray-300">
              <span className="font-semibold">Owner:</span> {item.owner}
            </div>
            <div className="text-[13px] text-gray-400 mb-1">
              <span className="font-semibold">Tax Office:</span>{" "}
              {item.taxOffice}
              {" • "}
              <span className="font-semibold">Tax No:</span> {item.taxNumber}
            </div>
            <div className="text-[13px] text-gray-400 mb-1">
              <span className="font-semibold">City:</span> {item.city}{" "}
              <span className="font-semibold">District:</span> {item.district}
            </div>
            {/* Address kısaltılmış şekilde */}
            <div className="text-sm text-white rounded px-3 py-2 overflow-hidden whitespace-nowrap text-ellipsis">
              {truncate(item.address, 50)}
            </div>
            {/* Telefonlar */}
            <div className="flex flex-col gap-1 mt-1 text-xs text-gray-400">
              {item.phone1 && (
                <div>
                  <span className="font-semibold text-gray-300">Tel 1:</span>{" "}
                  {item.phone1}
                </div>
              )}
              {item.phone2 && (
                <div>
                  <span className="font-semibold text-gray-300">Tel 2:</span>{" "}
                  {item.phone2}
                </div>
              )}
            </div>

            {/* Edit butonu */}
            <button
              className="absolute top-2 right-2 bg-[var(--success)] text-white rounded-md p-1 shadow hover:bg-blue-700 transition"
              onClick={() => handleOpenModal(i)}
            >
              <FiEdit3 className="w-4 h-4 text-white" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BillingAddress;
