import { useState } from "react";
import { FaCopy } from "react-icons/fa";

const refUserList = [
  { name: "Ayşe Yıldız", date: "12.06.2023" },
  { name: "Mehmet Demir", date: "09.05.2023" },
  { name: "Selin Kurt", date: "17.02.2024" },
];

const earningList = [
  { month: "Ocak 2024", amount: 120 },
  { month: "Şubat 2024", amount: 60 },
  { month: "Mart 2024", amount: 210 },
];

const totalEarning = earningList.reduce((sum, item) => sum + item.amount, 0);

const referralLink = "https://oyuneks.com/kayit-ol?ref=0347521698";
const myReferralCode = "0347521698";

export default function ReferenceSystem({ title }) {
  // Kopyalandı uyarısı için
  const [copied, setCopied] = useState("");

  // Kopyalama işlemi
  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(""), 1200);
  };

  return (
    <div className="w-full p-1 md:p-4 max-w-6xl mx-auto text-white">
      {/* HEADER */}
      <div className="flex items-center space-x-4 py-2">
        <h2
          style={{ color: "var(--foreground)" }}
          className="text-[30px] py-2 font-bold"
        >
          {title}
        </h2>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
      </div>

      {/* ÜST INFO KUTULARI */}
      <div className="flex md:flex-row flex-col gap-4 mb-5 items-stretch">
        {/* SOL TARAF: Toplam kazanç + Bakiye Çek */}
        <div className="flex-1 bg-[#262737] rounded-xl p-5 flex flex-col justify-between min-h-[110px]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <div>
              <div className="text-lg font-bold">~ {totalEarning}₺</div>
              <div className="text-sm text-gray-400">Toplam Kazancın</div>
            </div>
          </div>
          <button className="mt-2 py-2 bg-[#303199] rounded-lg hover:bg-[#3c40b4] font-semibold transition">
            BAKİYE ÇEK
          </button>
        </div>

        {/* SAĞ TARAF: Referans Linki + Kodu */}
        <div className="flex-2 flex flex-col gap-2">
          {/* Link */}
          <div className="flex items-center bg-[#262737] rounded-xl px-4 py-2">
            <span className="text-[13px] text-[#33ff99] font-semibold min-w-auto md:min-w-[130px]">
              Referans Linki
            </span>
            <input
              type="text"
              className="flex-1 bg-transparent text-white font-medium ml-2 outline-none select-all"
              value={referralLink}
              readOnly
              onClick={(e) => e.target.select()}
            />
            <span
              className="ml-2 text-[var(--success)] cursor-pointer"
              onClick={() => copyToClipboard(referralLink, "link")}
            >
              <FaCopy />
            </span>
            {copied === "link" && (
              <span className="ml-2 text-green-400 text-xs">Kopyalandı</span>
            )}
          </div>
          {/* Kod */}
          <div className="flex items-center bg-[#262737] rounded-xl px-4 py-2">
            <span className="text-[13px] text-[#fabe32] font-semibold min-w-auto md:min-w-[130px]">
              Size Ait Referans Kodu
            </span>
            <input
              type="text"
              className="flex-1 bg-transparent text-white font-medium ml-2 outline-none select-all"
              value={myReferralCode}
              readOnly
              onClick={(e) => e.target.select()}
            />
            <span
              className="ml-2 text-[var(--success)] cursor-pointer"
              onClick={() => copyToClipboard(myReferralCode, "kod")}
            >
              <FaCopy />
            </span>
            {copied === "kod" && (
              <span className="ml-2 text-green-400 text-xs">Kopyalandı</span>
            )}
          </div>
        </div>
      </div>

      {/* ALT: Kazanç Durumu */}
      <div className="my-3 mt-8 text-xl font-semibold text-white border-t border-gray-600 pt-3">
        Kazanç Durumu
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        {/* SOL LİSTE - Referanslar */}
        <div className="flex-1 bg-[#262737] rounded-xl p-3">
          <div className="flex w-full justify-between items-center mb-2">
            <div className="mb-2 font-bold text-[#7f83ec] text-[15px]">
              Ad Soyad
            </div>
            <div className="mb-2 font-bold text-[#7f83ec] text-[15px]">
              Kayıt Tarihi
            </div>
          </div>
          <ul className="divide-y divide-[#35354b]">
            {refUserList.map((item, idx) => (
              <li
                key={idx}
                className="py-2 flex justify-between items-center text-white/90"
              >
                <span className="font-medium">{item.name}</span>
                <span className="text-sm text-gray-400">{item.date}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* SAĞ LİSTE - Aylar/Kazanç */}
        <div className="flex-1 bg-[#262737] rounded-xl p-3">
          <div className="flex w-full justify-between items-center mb-2">
            <div className="mb-2 font-bold text-[#7f83ec] text-[15px]">
              Aylar
            </div>
            <div className="mb-2 font-bold text-[#7f83ec] text-[15px]">
              Kazanç
            </div>
          </div>

          <ul className="divide-y divide-[#35354b]">
            {earningList.map((item, idx) => (
              <li
                key={idx}
                className="py-2 flex justify-between items-center text-white/90"
              >
                <span className="font-medium">{item.month}</span>
                <span className="text-lg text-[var(--success)] font-semibold">
                  {item.amount}₺
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
