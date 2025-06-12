import React, { useState, useEffect } from "react";

// Verification.jsx
import {
  FaCheck,
  FaTimes,
  FaIdCard,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const verificationData = [
  {
    title: "E-Posta Doğrulama",
    type: "email",
    description:
      "Telefon onayı yaparak ilan ekleme gibi işlemleri yapabilirsiniz. Bu alanlarda telefon numaranız size gönderilecek bilgilendirme sms'leri için kullanılacak olup güvenlik için zorunludur.",
    verified: true,
    verifiedLabel: "E-Posta Onaylandı",
    icon: <FaEnvelope size={36} />,
    actionLabel: "E-Posta Onayla", // Bunu kaldırabilir/aktif etmezsin.
    showBtn: false, // e-posta üzerinden buton çıkmasın
  },
  {
    title: "Telefon Numarası Doğrulama",
    type: "phone",
    description:
      "Telefon onayı yaparak ilan ekleme gibi işlemleri yapabilirsiniz. Bu alanlarda telefon numaranız size gönderilecek bilgilendirme sms'leri için kullanılacak olup güvenlik için zorunludur.",
    verified: false, // default onaysız
    verifiedLabel: "Telefon Numarası Onaylandı",
    icon: <FaPhone size={36} />,
    actionLabel: "Telefonu Onayla",
    showBtn: true,
  },
  {
    title: "Kimlik Doğrulama",
    type: "identity",
    description:
      "Kimlik onayı yaparak sistem üzerinden elde ettiğiniz kazançları banka hesaplarınıza çekebilirsiniz. Para gönderimi işlemleri için kimlik bilgilerinizin doğrulanması gerekmektedir.",
    verified: false, // default onaysız
    verifiedLabel: "Kimlik Bilgisi Onaylandı",
    icon: <FaIdCard size={36} />,
    actionLabel: "Kimlik Bilgisi Onayla",
    showBtn: true,
  },
];

// Telefon Doğrulama Modalı
const PhoneVerifyModal = ({ open, onClose }) => {
  const [step, setStep] = useState(1); // 1: Numara gir, 2: Kod gir
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [seconds, setSeconds] = useState(60);
  const [error, setError] = useState("");

  // Modal her açıldığında sıfırla
  useEffect(() => {
    if (open) {
      setStep(1);
      setPhone("");
      setCode("");
      setSeconds(60);
      setError("");
    }
  }, [open]);

  // Kod gönderildikten sonra timer başlasın
  useEffect(() => {
    let timer;
    if (open && step === 2 && seconds > 0) {
      timer = setInterval(
        () => setSeconds((sec) => (sec > 0 ? sec - 1 : 0)),
        1000
      );
    }
    return () => clearInterval(timer);
  }, [open, step, seconds]);

  function isValidPhone(str) {
    // Türkiye için 10 hane, sadece rakam, ör: 5xxxxxxxxx
    return /^[5][0-9]{9}$/.test(str);
  }

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000b3] bg-opacity-60 px-4">
      <div className="bg-[var(--profile-tab-bg)] rounded-xl p-6 w-full max-w-md shadow-xl relative text-white">
        <h3 className="text-2xl font-bold text-center mb-3">
          Telefon Doğrulama
        </h3>
        {step === 1 && (
          <>
            <div className="mb-3 text-center text-gray-300">
              Telefon numaranızı giriniz.
            </div>
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-[#22232b] text-white mb-2 border-none focus:outline-none text-center"
              placeholder="5xxxxxxxxx"
              value={phone}
              maxLength={10}
              onChange={(e) => {
                // Sadece rakam girilsin
                const val = e.target.value.replace(/[^0-9]/g, "");
                setPhone(val);
                setError("");
              }}
            />
            {error && (
              <div className="text-[var(--alert)] text-sm text-center mb-2">
                {error}
              </div>
            )}
            <div className="flex gap-3 mt-3">
              <button
                className="flex-1 py-2 rounded bg-[var(--alert)] font-semibold text-white hover:opacity-80"
                onClick={onClose}
              >
                İptal
              </button>
              <button
                className="flex-1 py-2 rounded bg-[var(--success)] font-semibold text-white hover:opacity-80"
                onClick={() => {
                  if (!isValidPhone(phone)) {
                    setError("Geçerli bir numara giriniz. (5xxxxxxxxx)");
                    return;
                  }
                  setStep(2);
                  setSeconds(60); // Sayaç başlasın
                  setError("");
                  // Burada gerçek api ile kod gönderim işlemi tetiklenebilir!
                }}
              >
                Kodu Gönder
              </button>
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <div className="text-sm text-[#54f7af] text-center mb-2">
              Numara:{" "}
              {phone.replace(/^(\d{3})(\d{3})(\d{2})(\d{2})$/, "5$1 $2 $3 $4")}
            </div>
            <div className="w-full bg-blue-100 py-2 text-center rounded text-blue-800 font-semibold mb-4">
              Kalan Süre: 0 dakika {seconds.toString().padStart(2, "0")} saniye
            </div>
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-[#22232b] text-white mb-4 border-none focus:outline-none text-center"
              placeholder="Kodu Giriniz"
              value={code}
              maxLength={6}
              onChange={(e) => setCode(e.target.value.replace(/[^0-9]/g, ""))}
            />
            <div className="flex gap-3 mt-2">
              <button
                onClick={onClose}
                className="flex-1 py-2 rounded bg-[var(--alert)] font-semibold text-white hover:opacity-80"
              >
                Kapat
              </button>
              <button
                className="flex-1 py-2 rounded bg-[#263965] font-semibold text-white hover:opacity-80 flex items-center justify-center gap-2"
                // onClick={() => ... kod kontrol fonksiyonu}
              >
                <FaCheck /> Kontrol Et
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// Kimlik Doğrulama Modalı
const IdentityVerifyModal = ({ open, onClose }) => {
  const [ad, setAd] = useState("");
  const [soyad, setSoyad] = useState("");
  const [dogumYili, setDogumYili] = useState("");
  const [tc, setTc] = useState("");

  useEffect(() => {
    if (!open) {
      setAd("");
      setSoyad("");
      setDogumYili("");
      setTc("");
    }
  }, [open]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000b3] bg-opacity-60 px-4">
      <div className="bg-[var(--profile-tab-bg)] rounded-xl p-6 w-full max-w-xl shadow-xl relative text-white">
        <h3 className="text-2xl font-bold text-center mb-1">TC Doğrulama</h3>
        <div className="text-sm text-gray-200 text-center mb-3">
          Lütfen doğum yılınızı ve TC Kimlik Numaranızı Giriniz.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
          <input
            type="text"
            className="p-3 rounded-lg bg-[#22232b] text-white border-none focus:outline-none"
            placeholder="Adınız"
            value={ad}
            onChange={(e) => setAd(e.target.value)}
          />
          <input
            type="text"
            className="p-3 rounded-lg bg-[#22232b] text-white border-none focus:outline-none"
            placeholder="Soyadınız"
            value={soyad}
            onChange={(e) => setSoyad(e.target.value)}
          />
          <input
            type="text"
            className="p-3 rounded-lg bg-[#22232b] text-white border-none focus:outline-none"
            placeholder="Doğum Yılı"
            value={dogumYili}
            onChange={(e) => setDogumYili(e.target.value)}
          />
          <input
            type="text"
            className="p-3 rounded-lg bg-[#22232b] text-white border-none focus:outline-none"
            placeholder="TC Kimlik No"
            value={tc}
            onChange={(e) => setTc(e.target.value)}
          />
        </div>
        <div className="flex gap-4 mt-2">
          <button
            onClick={onClose}
            className="flex-1 py-2 rounded bg-[var(--alert)] font-semibold text-white hover:opacity-80"
          >
            Kapat
          </button>
          <button className="flex-1 py-2 rounded bg-[#2196F3] font-semibold text-white hover:opacity-80 flex items-center justify-center gap-2">
            <FaCheck /> Kontrol Et
          </button>
        </div>
      </div>
    </div>
  );
};

const Verification = () => {
  const [phoneModalOpen, setPhoneModalOpen] = useState(false);
  const [identityModalOpen, setIdentityModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-center items-stretch w-full mt-6">
        {verificationData.map((item) => (
          <div
            key={item.type}
            className="flex flex-col items-center flex-1 min-w-[220px] max-w-[330px]"
          >
            {/* Daire ve iconlar */}
            <div
              className={`w-40 h-40 rounded-full flex flex-col items-center justify-center mb-5 border-8 ${
                item.verified
                  ? "border-[var(--success)]/10 bg-[var(--success)]/10"
                  : "border-[var(--alert)]/10 bg-[var(--alert)]/10"
              } shadow-md`}
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-2 ${
                  item.verified ? "bg-[var(--success)]" : "bg-[var(--alert)]"
                }`}
              >
                {item.verified ? (
                  <FaCheck size={38} className="text-white" />
                ) : (
                  <FaTimes size={38} className="text-white" />
                )}
              </div>
              {/* <div className="text-[var(--foreground)] text-center opacity-60 mt-1">
                {item.title}
              </div> */}
            </div>

            {/* Başlık */}
            <div className="text-lg font-semibold text-center mb-1 text-[var(--foreground)]">
              {item.title}
            </div>
            {/* Açıklama */}
            {/* <div className="text-sm mb-2 text-center text-gray-400 max-w-[320px]">
              {item.description}
            </div> */}
            {/* Onay ✓ veya Buton */}
            {/* Onaylıysa yazı, onaylı değilse sadece buton */}
            {item.showBtn ? (
              item.verified ? (
                <div className="text-md mt-1 text-center font-semibold text-[var(--success)]">
                  {item.verifiedLabel}
                </div>
              ) : (
                <button
                  className="mt-1 px-8 py-2 bg-[var(--success)] font-semibold text-white rounded-full hover:opacity-80 transition"
                  onClick={() => {
                    if (item.type === "phone") setPhoneModalOpen(true);
                    if (item.type === "identity") setIdentityModalOpen(true);
                  }}
                >
                  {item.actionLabel}
                </button>
              )
            ) : (
              // eposta için
              item.verified && (
                <div className="text-md mt-1 text-center font-semibold text-[var(--success)]">
                  {item.verifiedLabel}
                </div>
              )
            )}
          </div>
        ))}
      </div>

      {/* MODALLAR */}
      <PhoneVerifyModal
        open={phoneModalOpen}
        onClose={() => setPhoneModalOpen(false)}
      />
      <IdentityVerifyModal
        open={identityModalOpen}
        onClose={() => setIdentityModalOpen(false)}
      />
    </>
  );
};

export default Verification;
