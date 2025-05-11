import React from "react";
import { TbAlertTriangleFilled } from "react-icons/tb";
import { FaBell } from "react-icons/fa";

const PaymentMethodCard = ({ image, title, description }) => (
  <div className="bg-[var(--advert-list-bg)] p-3 rounded-lg text-center cursor-pointer hover:bg-[#3A3B51] transition-all shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
    <img
      src={image}
      alt={title}
      className="mx-auto mb-2 w-full h-[100px] object-cover rounded-lg"
    />
    <p className="font-semibold">{title}</p>
    <p className="text-sm text-gray-400">{description}</p>
  </div>
);

const PaymentDetails = () => (
  <div
    id="top-up-balance"
    className="bg-[var(--advert-list-bg)] p-4 rounded-lg flex flex-wrap md:flex-nowrap gap-2"
  >
    <div className="w-full md:w-1/3">
      <img
        src="https://placehold.co/200"
        alt="Papara"
        className="w-[150px] h-[100px] md:w-full md:h-[150px] object-cover rounded-tr-lg rounded-bl-lg"
      />
    </div>
    <div className="w-full md:w-2/3 flex flew-wrap flex-col justify-between">
      <div>
        <h3 className="font-bold text-lg">PAPARA QR ile Ödeme Yöntemi</h3>
      </div>
      <div className="flex flex-wrap md:flex-nowrap gap-4 mb-4">
        <div className="md:flex-1 w-full">
          <label className="text-sm text-gray-300">
            Hesabınıza Eklenecek Tutar
          </label>
          <input
            type="text"
            defaultValue="500₺"
            className="w-full border border-gray-600 rounded p-2 mt-1"
          />
        </div>
        <div className="md:flex-1 w-full">
          <label className="text-sm text-gray-300">
            Bakiye’ye Aktarılacak Tutar
          </label>
          <input
            type="text"
            defaultValue="517,5₺"
            className="w-full border border-gray-600 rounded p-2 mt-1"
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-400">Komisyon Oranı: %3.5</p>
        <button className="bg-blue-500 hover:bg-blue-600 transition px-4 py-2 rounded text-white text-sm">
          Ödeme Adımına Geç
        </button>
      </div>
    </div>
  </div>
);

const PaymentOptions = ({ title }) => {
  const methods = [
    {
      image: "https://placehold.co/200",
      title: "Papara QR",
      description: "%3.5 Komisyon",
    },
    {
      image: "https://placehold.co/200",
      title: "İninal Kart",
      description: "%3.5 Komisyon",
    },
    {
      image: "https://placehold.co/200",
      title: "GPay Cüzdan",
      description: "%3.5 Komisyon",
    },
    {
      image: "https://placehold.co/200",
      title: "BKM Express",
      description: "%3.5 Komisyon",
    },
    {
      image: "https://placehold.co/200",
      title: "Banka/Kredi Kartı",
      description: "%3.5 Komisyon",
    },
    {
      image: "https://placehold.co/200",
      title: "QNB Finansbank",
      description: "%3.5 Komisyon",
    },
    {
      image: "https://placehold.co/200",
      title: "Vakıfbank",
      description: "%3.5 Komisyon",
    },
    {
      image: "https://placehold.co/200",
      title: "Halkbank",
      description: "%3.5 Komisyon",
    },
  ];

  return (
    <>
      <div className="flex items-center space-x-4 py-2">
        <h2
          style={{ color: "var(--foreground)" }}
          className="text-[30px] py-2 font-bold"
        >
          {title}
        </h2>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
      </div>
      <div className="flex gap-6 p-2 md:p-4 flex-wrap md:flex-nowrap">
        {/* Sol Kısım */}
        <div className="w-full md:w-1/3 grid grid-cols-2 gap-4">
          {methods.map((method, i) => (
            <PaymentMethodCard key={i} {...method} />
          ))}
        </div>

        {/* Sağ Kısım */}
        <div className="w-full md:w-2/3 gap-4">
          <div className="flex items-center gap-3 p-2 rounded-md bg-green-100 border border-green-400 text-green-800 mb-4 w-full">
            <FaBell className="w-8 h-8 hidden md:block" />
            <span>
              Nisi pretium fusce id velit ut. Accumsan sit amet nulla facilisi
              morbi Nisi pretium fusce id velit ut. Accumsan sit amet nulla
              facilisi morbi...
            </span>
          </div>

          <div className="flex items-center gap-3 p-2 rounded-md bg-red-100 border border-red-400 text-red-800 mb-4 w-full">
            <TbAlertTriangleFilled className="w-8 h-8 hidden md:block" />
            <span>
              Nisi pretium fusce id velit ut. Accumsan sit amet nulla facilisi
              morbi Nisi pretium fusce id velit ut. Accumsan sit amet nulla
              facilisi morbi...
            </span>
          </div>
          <PaymentDetails />
        </div>
      </div>
    </>
  );
};

export default PaymentOptions;
