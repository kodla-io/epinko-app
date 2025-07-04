import React, { useState, useEffect } from "react";
import Switch from "../../switch";
import { FiEdit } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { AiOutlineSafety } from "react-icons/ai";
import { GoAlertFill } from "react-icons/go";

import EntryLogs from "../../entry-logs/table";

const GoogleAuthModal = ({
  onClose,
  setGoogleAuth,
  googleAuth,
  authFrequency,
  setAuthFrequency,
}) => {
  const [code, setCode] = useState("");

  const handleActivate2FA = () => {
    if (/^\d{6}$/.test(code)) {
      setGoogleAuth(true); // switch aktif hale getirilir
      onClose(); // modal kapanır
    } else {
      console.warn("Geçersiz kod.");
    }
  };

  const handleDisable2FA = () => {
    const confirmResult = window.confirm(
      "2FA güvenliğini devre dışı bırakmak istediğinize emin misiniz?"
    );
    if (confirmResult) {
      setGoogleAuth(false);
      onClose();
    }
  };

  return (
    <div
      id="authModal"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000b3] bg-opacity-60 px-4"
    >
      <div className="bg-[var(--profile-tab-bg)] rounded-xl p-6 w-full max-w-md md:max-w-lg shadow-xl relative">
        <h3 className="text-xl font-semibold text-[var(--foreground)] mb-6 flex gap-2 flex-nowrap items-center">
          <AiOutlineSafety className="w-10 h-10 text-[var(--success)]" /> Hesap
          Güvenliği
        </h3>
        <p className="font-medium mb-4 border-t border-b border-[#ffffff2e] py-4">
          Google 2 Faktörlü Doğrulama Sistemi
        </p>

        {googleAuth ? (
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold mb-1">
                Tebrikler, Google 2FA özelliğiniz aktif.
              </h2>
              <p className="text-sm text-[var(--text-gray)]">
                Aşağıdan ne sıklıkla kod kullanmak istediğinizi ayarlayabilir
                veya 2FA devre dışı bırakabilirsiniz.
              </p>
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">
                Kullanım Sıklığı
              </label>
              <select
                value={authFrequency}
                onChange={(e) => setAuthFrequency(e.target.value)}
                className="w-full bg-[var(--background)] rounded px-3 py-2"
              >
                <option>Her Girişte Kod Sorulsun</option>
                <option>Haftada 1 girişte kod sorulsun</option>
                <option>Ayda 1 girişte kod sorulsun</option>
              </select>
            </div>

            <div className="text-right">
              <button
                onClick={handleDisable2FA}
                className="bg-[var(--alert)] hover:opacity-80 text-white font-semibold px-4 py-2 rounded flex items-center gap-1 flex items-center ggap-2"
              >
                <GoAlertFill className="w-6 h-6 text-white" />
                2FA Güvenliği Kapat
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <img
                src="https://placehold.co/1000"
                alt="QR Kod"
                className="w-40 h-40 object-cover"
              />

              <div className="flex flex-col flex-1">
                <input
                  type="text"
                  placeholder="Telefonunuzda görünen kodu giriniz."
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="bg-gray-900 text-white border border-gray-700 rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-primary"
                />

                <button
                  className={`px-4 py-2 rounded text-white transition-colors ${
                    /^\d{6}$/.test(code)
                      ? "bg-[var(--success)]"
                      : "bg-[var(--success)] opacity-50"
                  }`}
                  disabled={!/^\d{6}$/.test(code)}
                  onClick={handleActivate2FA}
                >
                  2FA Aktif Et
                </button>
              </div>
            </div>
          </>
        )}

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

export default function Security({ title }) {
  const [emailEnabled, setEmailEnabled] = useState(false);
  const [smsEnabled, setSmsEnabled] = useState(false);
  const [streamerModeEnabled, setStreamerModeEnabled] = useState(false);
  const [mailNotificationEnabled, setMailNotificationEnabled] = useState(false);
  const [smsNotificationEnabled, setSmsNotificationEnabled] = useState(false);
  const [authFrequency, setAuthFrequency] = useState(
    "Her Girişte Kod Sorulsun"
  );

  const [googleAuth, setGoogleAuth] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleGoogleAuth = () => {
    setShowModal(true); // sadece modalı aç
  };

  // `googleAuth` true olduğunda modal'ı aç
  useEffect(() => {
    if (googleAuth) {
      setShowModal(true);
    }
  }, [googleAuth]);

  return (
    <div id="security">
      <div className="flex items-center space-x-4">
        <h2
          style={{ color: "var(--foreground)" }}
          className="text-white text-[30px] py-2 font-bold px-4"
        >
          {title}
        </h2>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
      </div>
      <div className="bg-[var(--profile-tab-bg)] rounded-sm p-1 md:p-4 grid md:grid-cols-2 gap-2 md:gap-4">
        {/* 1. Şifre */}
        <div className="bg-[var(--profile-input)] flex justify-between items-center p-3 rounded-lg shadow-sm">
          <span className="text-gray-600">Şifre</span>
          <div className="flex items-center space-x-2 text-gray-500">
            <span>******</span>
            <FiEdit className="text-[var(--success)] cursor-pointer" />
          </div>
        </div>

        {/* 2. Email ile giriş */}
        <div className="bg-[var(--profile-input)] flex justify-between items-center p-3 rounded-lg shadow-sm">
          <span className="text-gray-600">Email ile giriş</span>
          <Switch checked={emailEnabled} onChange={setEmailEnabled} />
        </div>

        {/* 3. SMS ile giriş */}
        <div className="bg-[var(--profile-input)] flex justify-between items-center p-3 rounded-lg shadow-sm">
          <span className="text-gray-600">SMS ile giriş</span>
          <Switch checked={smsEnabled} onChange={setSmsEnabled} />
        </div>

        {/* 4. Google Auth */}
        <div className="bg-[var(--profile-input)] flex justify-between items-center p-3 rounded-lg shadow-sm">
          <span className="text-gray-600">Google Auth</span>
          <Switch checked={googleAuth} onChange={toggleGoogleAuth} />
        </div>

        {/* 5. Güvenli IP */}
        <div className="bg-[var(--profile-input)] flex justify-between items-center p-3 rounded-lg shadow-sm">
          <span className="text-gray-600">Güvenli IP</span>
          <div className="flex items-center space-x-2 text-gray-500">
            <span>Aktif Değil</span>
            <FiEdit className="text-[var(--success)] cursor-pointer" />
          </div>
        </div>

        {/* 6. Son Giriş Bilgisi */}
        <div className="bg-[var(--profile-input)] flex justify-between items-center p-3 rounded-lg shadow-sm">
          <span className="text-gray-600">Yayıncı Modu</span>
          <Switch
            checked={streamerModeEnabled}
            onChange={setStreamerModeEnabled}
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <h2
          style={{ color: "var(--foreground)" }}
          className="text-white text-[30px] py-2 font-bold px-4"
        >
          Güvenlik Tercihleri
        </h2>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
      </div>

      <div className="bg-[var(--profile-tab-bg)] rounded-sm p-1 md:p-4 grid md:grid-cols-2 gap-2 gap-4">
        {/* 7. Email Bildirimleri */}
        <div className="bg-[var(--profile-input)] flex justify-between items-center p-3 rounded-lg shadow-sm">
          <span className="text-gray-600">Email Bildirimleri</span>
          <Switch
            checked={mailNotificationEnabled}
            onChange={setMailNotificationEnabled}
          />
        </div>

        {/* 7. SMS Bildirimleri */}
        <div className="bg-[var(--profile-input)] flex justify-between items-center p-3 rounded-lg shadow-sm">
          <span className="text-gray-600">SMS Bildirimleri</span>
          <Switch
            checked={smsNotificationEnabled}
            onChange={setSmsNotificationEnabled}
          />
        </div>
      </div>

      {showModal && (
        <GoogleAuthModal
          googleAuth={googleAuth}
          setGoogleAuth={setGoogleAuth}
          authFrequency={authFrequency}
          setAuthFrequency={setAuthFrequency}
          onClose={() => setShowModal(false)}
        />
      )}

      <EntryLogs title={"Giriş Hareketllerim"} />
    </div>
  );
}
