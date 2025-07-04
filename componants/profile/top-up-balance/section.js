import React from "react";
import { TbAlertTriangleFilled } from "react-icons/tb";
import { FaBell } from "react-icons/fa";

const PaymentMethodCard = ({ image, title, description, active, onClick }) => (
  <div
    className={`bg-[var(--profile-tab-bg)] rounded text-center cursor-pointer hover:bg-[var(--advert-card-bg)] transition-all shadow-[0_2px_8px_rgba(0,0,0,0.3)] ${
      active ? "ring-2 ring-[var(--success)]" : ""
    }`}
    onClick={onClick}
  >
    <img
      src={image}
      alt={title}
      className="mx-auto mb-2 w-full h-[100px] object-cover rounded"
    />
    <div className="py-1">
      <p className="text-sm">{title}</p>
      <p className="text-sm text-[var(--text-gray)]">{description}</p>
    </div>
  </div>
);

const paymentInputs = {
  "Papara QR": [
    { label: "Hesabınıza Eklenecek Tutar", type: "text", name: "paparaAdd" },
    {
      label: "Bakiye'ye Aktarılacak Tutar",
      type: "text",
      name: "paparaTransfer",
    },
  ],
  Paypal: [{ label: "Paypal E-posta", type: "email", name: "paypalEmail" }],
  "Banka/Kredi Kartı": [
    { label: "Kart Numarası", type: "text", name: "cardNumber" },
    { label: "Kart Sahibi", type: "text", name: "cardHolder" },
  ],
  "GPay Cüzdan": [
    { label: "Telefon Numarası", type: "text", name: "gpayPhone" },
  ],
  "İninal Kart": [{ label: "Kart Numarası", type: "text", name: "ininalCard" }],
  "BKM Express": [
    { label: "Telefon Numarası", type: "text", name: "bkmPhone" },
  ],
  "QNB Finansbank": [
    { label: "IBAN", type: "text", name: "qnbIban" },
    { label: "Hesap Sahibi", type: "text", name: "qnbHolder" },
  ],
  Vakıfbank: [
    { label: "IBAN", type: "text", name: "vakifIban" },
    { label: "Hesap Sahibi", type: "text", name: "vakifHolder" },
  ],
  Halkbank: [
    { label: "IBAN", type: "text", name: "halkIban" },
    { label: "Hesap Sahibi", type: "text", name: "halkHolder" },
  ],
};

const paymentTitles = {
  "Papara QR": "PAPARA QR ile Ödeme Yöntemi",
  Paypal: "PAYPAL ile Ödeme Yöntemi",
  "Banka/Kredi Kartı": "Kredi Kartı ile Ödeme Yöntemi",
  "GPay Cüzdan": "GPay ile Ödeme Yöntemi",
  "İninal Kart": "İninal Kart ile Ödeme Yöntemi",
  "BKM Express": "BKM Express ile Ödeme Yöntemi",
  "QNB Finansbank": "QNB Finansbank ile Ödeme Yöntemi",
  Vakıfbank: "Vakıfbank ile Ödeme Yöntemi",
  Halkbank: "Halkbank ile Ödeme Yöntemi",
};

const PaymentDetails = ({ selectedMethod }) => (
  <div
    id="top-up-balance"
    className="bg-[var(--profile-tab-bg)] p-4 rounded flex flex-wrap md:flex-nowrap gap-2"
  >
    <div className="w-full md:w-1/3">
      <img
        src="https://placehold.co/200"
        alt={selectedMethod}
        className="w-[150px] h-[100px] md:w-full md:h-[150px] object-cover rounded-tr-lg rounded-bl-lg"
      />
    </div>
    <div className="w-full md:w-2/3 flex flew-wrap flex-col justify-between">
      <div>
        <h3 className="font-bold text-lg">
          {paymentTitles[selectedMethod] || selectedMethod}
        </h3>
      </div>
      <div className="flex flex-wrap md:flex-nowrap gap-4 mb-4">
        {paymentInputs[selectedMethod]?.map((input, idx) => (
          <div className="md:flex-1 w-full" key={input.name}>
            <label className="text-sm text-[var(--text-gray)]">{input.label}</label>
            <input
              type={input.type}
              className="w-full border border-[var(--text-gray)] rounded p-2 mt-1"
            />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm text-[var(--text-gray)]">Komisyon Oranı: %3.5</p>
        <button className="bg-[var(--success)] hover:bg-[var(--label3)] transition px-4 py-2 rounded text-white text-sm">
          Ödeme Adımına Geç
        </button>
      </div>
    </div>
  </div>
);

const PaymentOptions = ({ title }) => {
  const [selectedMethod, setSelectedMethod] = React.useState("Papara QR");

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
    {
      image: "https://placehold.co/200",
      title: "Paypal",
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
            <PaymentMethodCard
              key={i}
              {...method}
              active={selectedMethod === method.title}
              onClick={() => setSelectedMethod(method.title)}
            />
          ))}
        </div>
        {/* Sağ Kısım */}
        <div className="w-full md:w-2/3 gap-4">
          <div className="flex items-center gap-3 p-2 rounded-md bg-[var(--success)] border border-[var(--success)] text-white mb-4 w-full">
            <FaBell className="w-8 h-8 hidden md:block" />
            <span>
              Nisi pretium fusce id velit ut. Accumsan sit amet nulla facilisi
              morbi Nisi pretium fusce id velit ut. Accumsan sit amet nulla
              facilisi morbi...
            </span>
          </div>

          <div className="flex items-center gap-3 p-2 rounded-md bg-[var(--alert)] border border-[var(--alert)] text-white mb-4 w-full">
            <TbAlertTriangleFilled className="w-8 h-8 hidden md:block" />
            <span>
              Nisi pretium fusce id velit ut. Accumsan sit amet nulla facilisi
              morbi Nisi pretium fusce id velit ut. Accumsan sit amet nulla
              facilisi morbi...
            </span>
          </div>
          <PaymentDetails selectedMethod={selectedMethod} />
        </div>
      </div>
    </>
  );
};

export default PaymentOptions;
