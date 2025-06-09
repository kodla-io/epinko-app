import React, { useState, useEffect } from "react";
import Switch from "../../switch";
import { FiEdit } from "react-icons/fi";
import { FaShieldAlt } from "react-icons/fa";
import EntryLogs from "../../entry-logs/table";

const GoogleAuthModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 px-4">
      <div className="bg-gray-800 rounded-xl p-6 w-full max-w-md md:max-w-lg shadow-xl">
        <h3 className="text-xl font-semibold text-white mb-4">
          Google Authenticator
        </h3>
        <p className="text-gray-300 mb-4">
          Modal içeriğini buraya ekleyeceksin.
        </p>
        <div className="text-right">
          <button
            onClick={onClose}
            className="bg-primary text-white px-4 py-2 rounded hover:opacity-90"
          >
            Kapat
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Security({ title }) {
  const [emailEnabled, setEmailEnabled] = useState(false);
  const [smsEnabled, setSmsEnabled] = useState(false);
  const [googleAuthEnabled, setGoogleAuthEnabled] = useState(false);
  const [safeIpEnabled, setSafeIpEnabled] = useState(false);
  const [lastLoginEnabled, setLastLoginEnabled] = useState(false);
  const [streamerModeEnabled, setStreamerModeEnabled] = useState(false);
  const [mailNotificationEnabled, setMailNotificationEnabled] = useState(false);
  const [smsNotificationEnabled, setSmsNotificationEnabled] = useState(false);

  const [googleAuth, setGoogleAuth] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleGoogleAuth = () => {
    setGoogleAuth((prev) => !prev);
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

      {showModal && <GoogleAuthModal onClose={() => setShowModal(false)} />}

      <EntryLogs title={"Giriş Hareketllerim"} />
    </div>
  );
}
