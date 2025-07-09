"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "./Theme";
import SearchInput from "./Search";
import MegaMenu from "./MegaMenu";
import Link from "next/link";
import { CiCirclePlus } from "react-icons/ci";
import { MdOutlineFavorite } from "react-icons/md";
import { FaSteamSquare } from "react-icons/fa";
import { GiConsoleController } from "react-icons/gi";
import { HiSpeakerphone } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { IoLogoTwitch } from "react-icons/io5";
import { X } from "lucide-react";
import FloatingSidebar from "./all-pages";
import MobileNav from "./mobile-nav";
import Image from "next/image";
import dynamic from "next/dynamic";
import user from "../../src/assets/animations/account.json";
import message from "../../src/assets/animations/message.json";
import adverts from "../../src/assets/animations/Adverts.json";
import balanceHistory from "../../src/assets/animations/EarnHistory.json";
import bank from "../../src/assets/animations/Bank.json";
import help from "../../src/assets/animations/Help.json";
import transactions from "../../src/assets/animations/Transactions.json";
import passwordChange from "../../src/assets/animations/PasswordChange.json";
import earnings from "../../src/assets/animations/Earnings.json";
import refunds from "../../src/assets/animations/Refunds.json";
import notifications from "../../src/assets/animations/Notifications.json";
import reference from "../../src/assets/animations/Reference.json";
import order from "../../src/assets/animations/Order.json";
import addBalance from "../../src/assets/animations/balanceHistory.json";
import checkCash from "../../src/assets/animations/CheckCash.json";
import stream from "../../src/assets/animations/stream.json";
import giveaway from "../../src/assets/animations/giveaway.json";
import { FaUserAlt } from "react-icons/fa";

import Logo from "./Logo";
import StarBorder from "./StarBorder";

const Player = dynamic(
  () => import("@lordicon/react").then((mod) => mod.Player),
  { ssr: false }
);

const lightColors = [
  "var(--label2-light)",
  "var(--label7-light)",
  "var(--label9-light)",
  "var(--success-light)",
  "var(--alert-light)",
];

const items = [
  {
    title: "Item 1",
    imageUrl: "https://placehold.co/30",
    bgColor: lightColors[0],
    link: "https://example.com/item1",
  },
  {
    title: "Item 2",
    imageUrl: "https://placehold.co/30",
    bgColor: lightColors[1],
    link: "https://example.com/item2",
  },
  {
    title: "Item 3",
    imageUrl: "https://placehold.co/30",
    bgColor: lightColors[2],
    link: "https://example.com/item3",
  },
  {
    title: "Item 4",
    imageUrl: "https://placehold.co/30",
    bgColor: lightColors[3],
    link: "https://example.com/item4",
  },
  {
    title: "Item 5",
    imageUrl: "https://placehold.co/30",
    bgColor: lightColors[4],
    link: "https://example.com/item5",
  },
  {
    title: "Item 6",
    imageUrl: "https://placehold.co/30",
    bgColor: lightColors[1],
    link: "https://example.com/item6",
  },
  {
    title: "Item 7",
    imageUrl: "https://placehold.co/30",
    bgColor: lightColors[2],
    link: "https://example.com/item7",
  },
  {
    title: "Item 8",
    imageUrl: "https://placehold.co/30",
    bgColor: lightColors[3],
    link: "https://example.com/item8",
  },
  {
    title: "Item 9",
    imageUrl: "https://placehold.co/30",
    bgColor: lightColors[0],
    link: "https://example.com/item9",
  },
  {
    title: "Item 10",
    imageUrl: "https://placehold.co/30",
    bgColor: lightColors[4],
    link: "https://example.com/item10",
  },
  {
    title: "Item 11",
    imageUrl: "https://placehold.co/30",
    bgColor: lightColors[2],
    link: "https://example.com/item11",
  },
  {
    title: "Item 12",
    imageUrl: "https://placehold.co/30",
    bgColor: lightColors[3],
    link: "https://example.com/item12",
  },
  {
    title: "Item 13",
    imageUrl: "https://placehold.co/30",
    bgColor: lightColors[1],
    link: "https://example.com/item13",
  },
];

const items2 = [
  {
    title: "Item 1",
    imageUrl: "https://placehold.co/30",
    bgColor: lightColors[2],
    link: "https://example.com/item1",
  },
  {
    title: "Item 2",
    imageUrl: "https://placehold.co/30",
    bgColor: lightColors[3],
    link: "https://example.com/item2",
  },
  {
    title: "Item 3",
    imageUrl: "https://placehold.co/30",
    bgColor: lightColors[0],
    link: "https://example.com/item3",
  },
  {
    title: "Item 4",
    imageUrl: "https://placehold.co/30",
    bgColor: lightColors[4],
    link: "https://example.com/item4",
  },
  {
    title: "Item 5",
    imageUrl: "https://placehold.co/30",
    bgColor: lightColors[1],
    link: "https://example.com/item5",
  },
  {
    title: "Item 6",
    imageUrl: "https://placehold.co/30",
    bgColor: lightColors[3],
    link: "https://example.com/item6",
  },
  {
    title: "Item 7",
    imageUrl: "https://placehold.co/30",
    bgColor: lightColors[0],
    link: "https://example.com/item7",
  },
];

const profileTabs = [
  { key: "personal-details", icon: user, label: "Hesabım" },
  { key: "my-orders", icon: order, label: "Siparişlerim" },
  { key: "my-adverts", icon: adverts, label: "İlanlarım" },
  { key: "notifications", icon: notifications, label: "Bildirimler" },
  { key: "streamer-panel", icon: stream, label: "Yayıncı Paneli" },
  { key: "password-change", icon: passwordChange, label: "Şifre Değiştir" },
  { key: "giveaways", icon: giveaway, label: "Çekiliş Yönetimi" },
  { key: "top-up-balance", icon: addBalance, label: "Bakiye Yükle" },
  { key: "wallet-history", icon: balanceHistory, label: "Ödeme Geçmişim" },
  { key: "check-cash", icon: checkCash, label: "Bakiye Çek" },
  { key: "bank-accounts", icon: bank, label: "Banka Hesaplarım" },
  { key: "earnings", icon: earnings, label: "Kazançlarım" },
  { key: "transactions", icon: transactions, label: "İşlemlerim" },
  { key: "my-messages", icon: message, label: "Mesajlarım" },
  { key: "refunds", icon: refunds, label: "İade Talebi" },
  { key: "reference-system", icon: reference, label: "Referans Sistemi" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("tr");

  const toggleTheme = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setIsDark(savedTheme === "dark");

    // Dil dropdown menüsü için click-outside handler
    const handleClickOutside = (event) => {
      if (!event.target.closest(".language-dropdown")) {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    setIsDark(!isDark);
    toggleTheme();
  };

  const toggleSwitch = () => {
    setIsDark(!isDark);
  };

  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([]);

  const toggleMenu = (items, event) => {
    const button = event.currentTarget;
    const megaMenu = document.querySelector(".megaMenu");

    if (isMegaMenuOpen && button.classList.contains("active-mega-menu-tab")) {
      button.classList.remove("active-mega-menu-tab");

      megaMenu.classList.remove("open");

      // Animasyon süresine göre bir timeout kullanabilirsiniz.
      setTimeout(() => {
        setIsMegaMenuOpen(false);
      }, 500); // 0.5s, CSS'deki transition süresiyle eşleşiyor
    } else {
      document
        .querySelectorAll(".mage-menu-button")
        .forEach((btn) => btn.classList.remove("active-mega-menu-tab"));
      button.classList.add("active-mega-menu-tab");

      megaMenu.classList.add("open");
      setIsMegaMenuOpen(true);
    }

    setMenuItems(items);
  };

  // Modal açma/kapama fonksiyonları
  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    setIsRegisterModalOpen(false);
  };

  const openRegisterModal = () => {
    setIsRegisterModalOpen(true);
    setIsLoginModalOpen(false);
  };

  const closeModals = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(false);
  };

  // Login Modal Component
  const LoginModal = () => (
    <div className="fixed inset-0 bg-black/20 text-[var(--foreground)] backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[var(--advert-card-bg)] rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto relative">
        {/* Kapatma butonu */}
        <button
          onClick={closeModals}
          className="absolute right-4 top-4 text-[var(--text-gray)] hover:text-white z-10"
        >
          <X size={24} />
        </button>

        <div className="p-6">
          <div className="mb-6">
            <h2 className="text-2xl mb-2">Merhaba</h2>
            <h1 className="text-4xl font-bold mb-4">Giriş Yap</h1>
            <div className="text-sm text-[var(--text-gray)]">
              Yeni Misin?{" "}
              <button
                onClick={openRegisterModal}
                className="text-blue-400 hover:underline"
              >
                Kayıt Ol
              </button>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-2">
              Kullanıcı adınızı veya e-posta adresinizi giriniz
            </label>
            <input
              type="text"
              placeholder="Kullanıcı adı ya da Eposta adresi"
              className="w-full px-4 py-3 rounded-lg bg-[var(--profile-input)] border-none focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-2">Şifrenizi Giriniz</label>
            <input
              type="password"
              placeholder="Şifre"
              className="w-full px-4 py-3 rounded-lg bg-[var(--profile-input)] border-none focus:outline-none"
            />
            <div
              className="text-right text-sm text-[var(--primary)] mt-2 hover:underline cursor-pointer"
              onClick={() => {
                setIsLoginModalOpen(false);
                setIsForgotModalOpen(true);
              }}
            >
              Şifremi Unuttum
            </div>
          </div>

          <button className="w-full mb-4 bg-[var(--success)] hover:bg-[var(--label2)] transition-colors py-3 rounded-lg text-white font-semibold">
            Giriş Yap
          </button>

          <div className="flex flex-col gap-2">
            <button className="w-full bg-white text-black py-3 rounded-lg hover:opacity-80 transition font-semibold flex items-center gap-2 justify-center">
              <FcGoogle className="w-6 h-6" />
              <span>Google ile Giriş Yap</span>
            </button>

            <button className="w-full bg-[var(--label4)] text-white py-3 rounded-lg hover:opacity-80 transition font-semibold flex items-center gap-2 justify-center">
              <IoLogoTwitch className="w-6 h-6" />
              <span>Twitch ile Giriş Yap</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Register Modal Component
  const RegisterModal = () => (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[var(--advert-card-bg)] text-[var(--foreground)] rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto relative">
        {/* Kapatma butonu */}
        <button
          onClick={closeModals}
          className="absolute right-4 top-4 text-gray-400 hover:text-white z-10"
        >
          <X size={24} />
        </button>

        <div className="p-6">
          <div className="mb-6">
            <h2 className="text-2xl text-[var(--foreground)] mb-2">Merhaba</h2>
            <h1 className="text-4xl font-bold text-[var(--foreground)] mb-4">
              Kayıt Ol
            </h1>
            <div className="text-sm text-[var(--text-gray)]">
              Üye Misin?{" "}
              <button
                onClick={openLoginModal}
                className="text-blue-400 hover:underline"
              >
                Giriş Yap
              </button>
            </div>
          </div>

          <div className="flex gap-2 mb-4">
            <div className="flex-1">
              <label className="block text-[var(--foreground)] text-sm mb-2">
                Ad
              </label>
              <input
                type="text"
                placeholder="Adınız"
                className="w-full px-4 py-3 rounded-lg bg-[var(--profile-input)] text-[var(--foreground)] border-none focus:outline-none"
              />
            </div>
            <div className="flex-1">
              <label className="block text-[var(--foreground)] text-sm mb-2">
                Soyad
              </label>
              <input
                type="text"
                placeholder="Soyadınız"
                className="w-full px-4 py-3 rounded-lg bg-[var(--profile-input)] text-[var(--foreground)] border-none focus:outline-none"
              />
            </div>
          </div>

          <div className="flex gap-2 mb-4">
            <div className="flex-1">
              <label className="block text-[var(--foreground)] text-sm mb-2">
                Kullanıcı adı
              </label>
              <input
                type="text"
                placeholder="Kullanıcı adı"
                className="w-full px-4 py-3 rounded-lg bg-[var(--profile-input)] text-[var(--foreground)] border-none focus:outline-none"
              />
            </div>
            <div className="flex-1">
              <label className="block text-[var(--foreground)] text-sm mb-2">
                Email Adresi
              </label>
              <input
                type="email"
                placeholder="Email Adresi"
                className="w-full px-4 py-3 rounded-lg bg-[var(--profile-input)] text-[var(--foreground)] border-none focus:outline-none"
              />
            </div>
          </div>

          <div className="flex gap-2 mb-4">
            <div className="flex-1">
              <label className="block text-[var(--foreground)] text-sm mb-2">
                Şifre
              </label>
              <input
                type="password"
                placeholder="Şifre"
                className="w-full px-4 py-3 rounded-lg bg-[var(--profile-input)] text-[var(--foreground)] border-none focus:outline-none"
              />
            </div>
            <div className="flex-1">
              <label className="block text-[var(--foreground)] text-sm mb-2">
                Şifre Tekrar
              </label>
              <input
                type="password"
                placeholder="Şifre Tekrar"
                className="w-full px-4 py-3 rounded-lg bg-[var(--profile-input)] text-[var(--foreground)] border-none focus:outline-none"
              />
            </div>
          </div>

          <button className="w-full mb-4 bg-[var(--primary)] hover:bg-[var(--label2)] transition-colors py-3 rounded-lg text-white font-semibold">
            Kayıt Ol
          </button>

          <div className="flex flex-col gap-2">
            <button className="w-full bg-white text-black py-3 rounded-lg hover:opacity-80 transition font-semibold flex items-center gap-2 justify-center">
              <FcGoogle className="w-6 h-6" />
              <span>Google ile Kayıt Ol</span>
            </button>

            <button className="w-full bg-[var(--label4)] text-white py-3 rounded-lg hover:opacity-80 transition font-semibold flex items-center gap-2 justify-center">
              <IoLogoTwitch className="w-6 h-6" />
              <span>Twitch ile Kayıt Ol</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const languages = {
    tr: {
      name: "Türkçe",
      flag: "/media/tr.png",
    },
    en: {
      name: "English",
      flag: "/media/en.png",
    },
  };

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    setIsLanguageDropdownOpen(false);
    // Burada dil değişimi için gerekli işlemleri yapabilirsiniz
  };

  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const profileIconRef = useRef(null);
  const dropdownRefs = useRef([]);

  const handleMenuItemEnter = (index) => {
    dropdownRefs.current[index]?.playFromBeginning();
  };

  const [isForgotModalOpen, setIsForgotModalOpen] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [showForgotInfo, setShowForgotInfo] = useState(false);

  // Şifremi Unuttum Modal Component
  const ForgotPasswordModal = () => {
    const inputRef = useRef(null);
    // Modal açıldığında inputa otomatik focus
    useEffect(() => {
      if (inputRef.current) inputRef.current.focus();
    }, []);
    return (
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-[var(--advert-card-bg)] text-[var(--foreground)] rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto relative">
          {/* Kapatma butonu */}
          <button
            onClick={() => setIsForgotModalOpen(false)}
            className="absolute right-4 top-4 text-gray-400 hover:text-white z-10"
          >
            <X size={24} />
          </button>
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl mb-2">Şifremi Unuttum</h2>
              <h1 className="text-4xl font-bold mb-4">Şifre Sıfırlama</h1>
              <div className="text-sm text-[var(--text-gray)]">
                Kayıtlı e-posta adresinizi girin, size şifre sıfırlama
                bağlantısı gönderelim.
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm mb-2">E-posta adresiniz</label>
              <input
                ref={inputRef}
                type="email"
                placeholder="E-posta adresi"
                className="w-full px-4 py-3 rounded-lg bg-[var(--profile-input)] border-none focus:outline-none text-[var(--foreground)]"
                value={forgotEmail}
                onChange={(e) => setForgotEmail(e.target.value)}
                autoComplete="off"
              />
              <div
                className="mt-2 text-sm text-blue-400 hover:underline cursor-pointer text-right"
                onClick={() => {
                  setIsForgotModalOpen(false);
                  setIsLoginModalOpen(true);
                }}
              >
                Giriş Yap
              </div>
            </div>
            <button
              className="w-full mb-4 bg-[var(--success)] hover:bg-[var(--label2)] transition-colors py-3 rounded-lg text-white font-semibold"
              onClick={() => {
                setShowForgotInfo(true);
                setTimeout(() => {
                  setShowForgotInfo(false);
                  setIsForgotModalOpen(false);
                  setForgotEmail("");
                }, 2000);
              }}
            >
              Şifre Sıfırlama Maili Gönder
            </button>
            {showForgotInfo && (
              <div className="bg-[var(--success)]/10 text-[var(--success)] p-3 rounded text-center font-semibold mt-2">
                Mail gönderildi! Lütfen e-posta kutunuzu kontrol edin.
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    const handler = () => setIsForgotModalOpen(true);
    window.addEventListener("openForgotPasswordModal", handler);
    return () => window.removeEventListener("openForgotPasswordModal", handler);
  }, []);

  return (
    <>
      <header className="w-full text-[var(--foreground)] relative z-50">
        {/* Üst Kısım */}
        <div className="header-top w-full border-b border-[var(--input-border)]">
          <div className="flex justify-between items-center px-4 container py-1 m-auto text-xsm">
            <div className="flex space-x-4">
              <a href="#" className="text-[13px] hover:text-green-400">
                <p>Hakkımızda</p>
              </a>
              <a href="#" className="text-[13px] hover:text-green-400">
                <p>Haberler</p>
              </a>
              <a href="#" className="text-[13px] hover:text-green-400">
                <p>Yardım</p>
              </a>
              <a href="#" className="text-[13px] hover:text-green-400">
                <p>İletişim</p>
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <div className="relative language-dropdown">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
                  }}
                  className="flex items-center space-x-2 hover:opacity-80 transition-opacity py-1"
                >
                  <div className="w-7 h-5 relative overflow-hidden rounded-sm">
                    <Image
                      src={languages[selectedLanguage].flag}
                      alt={languages[selectedLanguage].name}
                      fill
                      className="object-contain"
                      style={{ backgroundColor: "transparent" }}
                    />
                  </div>
                  <span className="text-sm">
                    {selectedLanguage.toUpperCase()}
                  </span>
                </button>

                {isLanguageDropdownOpen && (
                  <div className="absolute top-full right-0 mt-1 w-32 bg-[var(--background)] border border-[var(--border)] rounded-lg shadow-lg overflow-hidden z-50">
                    {Object.entries(languages).map(([code, lang]) => (
                      <button
                        key={code}
                        onClick={() => handleLanguageChange(code)}
                        className={`flex items-center space-x-3 w-full px-3 py-2 hover:bg-[var(--background)] transition-colors ${
                          selectedLanguage === code
                            ? "bg-[var(--advert-list-bg)]"
                            : ""
                        }`}
                      >
                        <div className="w-7 h-5 relative overflow-hidden rounded-sm">
                          <Image
                            src={lang.flag}
                            alt={lang.name}
                            fill
                            className="object-contain"
                            style={{ backgroundColor: "transparent" }}
                          />
                        </div>
                        <span className="text-sm text-[var(--foreground)]">
                          {lang.name}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Ana Menü */}
        <div className="header-middle border-b border-[var(--input-border)]">
          <div className="container m-auto flex justify-between items-center px-2 md:px-6 py-3">
            {/* Logo */}
            <div className="text-2xl font-bold text-green-500">
              {/* epin<span className="text-white">KO</span> */}
              <Link href="/">
                <Logo className="max-w-[90px] md:max-w-[130px]" />
              </Link>
            </div>

            {/* Menü */}
            <nav className="hidden lg:flex items-center space-x-6 text-sm uppercase">
              {/* Arama Çubuğu */}
              <div className="relative flex">
                <SearchInput />
                <Link
                  href="/create-advert"
                  className="flex text-[var(--foreground)] bg-[var(--success)] items-center font-bold px-4 rounded transition ml-3 ilan-ekle-button"
                >
                  <span className="mr-2 text-[20px]">
                    <CiCirclePlus />
                  </span>
                  İlan Ekle
                </Link>
              </div>
            </nav>

            {/* Sağ Kısım */}
            <div className="flex items-center space-x-4">
              <div className="md:block hidden d-l-mode">
                <div className="middle">
                  <div
                    className={`switch ${isDark ? "dark" : ""}`}
                    onClick={handleToggle}
                  >
                    <span className="sun"></span>
                    <span className="moon"></span>
                    <span className="sun--bubble--left"></span>
                    <span className="sun--bubble--right"></span>
                    <span className="moon--bubble--left"></span>
                    <span className="moon--bubble--middle"></span>
                    <span className="moon--bubble--right"></span>
                    <span className="moon--star--left"></span>
                    <span className="moon--star--right"></span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <StarBorder
                  as="button"
                  onClick={openLoginModal}
                  color="var(--success)"
                  speed="3s"
                  thickness={2}
                  className="text-xs font-bold"
                >
                  Giriş Yap
                </StarBorder>
                <StarBorder
                  as="button"
                  onClick={openRegisterModal}
                  color="var(--success)"
                  speed="3s"
                  thickness={2}
                  className="text-xs font-bold"
                >
                  Kayıt Ol
                </StarBorder>
              </div>
              {/* Profile (Kişi) ikonu ve dropdown */}
              <div className="relative">
                <button
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--advert-list-bg)] hover:bg-[var(--label2)] transition"
                  onClick={() => setIsProfileDropdownOpen((v) => !v)}
                >
                  <FaUserAlt
                    style={{ color: "var(--foreground)" }}
                    className="w-6 h-6"
                  />
                </button>
                {/* Dropdown */}
                <div
                  className={`absolute right-0 mt-2 min-w-[220px] bg-[var(--background)] rounded-xl shadow-lg border border-[var(--border-color)] overflow-hidden z-50 transition-all duration-200 ${
                    isProfileDropdownOpen
                      ? "scale-100 opacity-100 pointer-events-auto"
                      : "scale-95 opacity-0 pointer-events-none"
                  }`}
                  style={{ boxShadow: "0 8px 32px 0 rgba(0,0,0,0.15)" }}
                >
                  {/* Kullanıcı kutusu */}
                  <div className="flex items-center gap-3 px-4 py-3 border-b border-[var(--advert-list-bg)] bg-[var(--advert-list-bg)]">
                    <img
                      src="https://placehold.co/48x48"
                      alt="Profil Fotoğrafı"
                      className="w-12 h-12 rounded-full border-2 border-[var(--success)]"
                    />
                    <div className="flex flex-col">
                      <span className="font-bold text-[var(--foreground)] text-base">
                        onurtasdeler
                      </span>
                      <span className="text-xs text-[var(--text-gray)]">
                        0.00 ₺
                      </span>
                    </div>
                  </div>
                  <ul className="flex flex-col py-2">
                    {profileTabs.map((item, idx) => (
                      <li
                        key={item.key}
                        className="flex items-center gap-3 px-4 py-2 hover:bg-[var(--advert-list-bg)] cursor-pointer transition"
                        onMouseEnter={() => handleMenuItemEnter(idx)}
                      >
                        <Link
                          href={`/profile?tab=${item.key}`}
                          className="flex items-center gap-3 w-full"
                          onClick={() => setIsProfileDropdownOpen(false)}
                        >
                          <Player
                            ref={(el) => (dropdownRefs.current[idx] = el)}
                            icon={item.icon}
                            size={28}
                            trigger="manual"
                          />
                          <span className="text-[var(--foreground)]">
                            {item.label}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Mobil Menü Butonu */}
            <MobileNav
              onLoginClick={openLoginModal}
              onRegisterClick={openRegisterModal}
            />
          </div>
        </div>

        {/* Alt Menü */}
        <div className="header-bottom">
          <div className="container m-auto flex justify-between items-center px-6 py-1">
            <nav className="hidden md:flex space-x-6 text-sm uppercase">
              <div className="relative">
                <button
                  onClick={(event) => toggleMenu(items, event)}
                  className="text-[var(--foreground)] flex items-center space-x-1 hover:text-green-400 p-1 rounded mage-menu-button"
                >
                  <div
                    style={{ backgroundColor: "rgba(88, 243, 249, 0.3)" }}
                    className="rounded-md p-[6px] mr-2"
                  >
                    <GiConsoleController className="w-4 h-4" />
                  </div>
                  <span className="text-md font-bold">Tüm Oyunlar</span>
                  <img
                    src="/media/icons/down.png"
                    className="max-w-[22px] min-w-[22px]"
                  />
                </button>
              </div>
              <div className="relative">
                <button
                  onClick={(event) => toggleMenu(items2, event)}
                  className="text-[var(--foreground)] flex items-center space-x-1 hover:text-green-400 p-1 rounded mage-menu-button"
                >
                  <div
                    style={{ backgroundColor: "rgba(88, 249, 115, 0.3)" }}
                    className="rounded-md p-[6px] mr-2"
                  >
                    <HiSpeakerphone className="w-4 h-4" />
                  </div>
                  <span className="text-md font-bold">Tüm İlanlar</span>
                  <img
                    src="/media/icons/down.png"
                    className="max-w-[22px] min-w-[22px]"
                  />
                </button>
              </div>
              <Link href="/">
                <button className="text-[var(--foreground)] flex items-center space-x-1 hover:text-green-400 p-1 rounded">
                  <div
                    style={{ backgroundColor: "rgba(249, 88, 104, 0.3)" }}
                    className="rounded-md p-[6px] mr-2"
                  >
                    <MdOutlineFavorite className="w-4 h-4" />
                  </div>
                  <span className="text-md font-bold">Favoriler</span>
                </button>
              </Link>
              <Link href="/steam-games">
                <button className="text-[var(--foreground)] flex items-center space-x-1 hover:text-green-400 p-1 rounded">
                  <div className="rounded-lg mr-2">
                    <FaSteamSquare className="w-7 h-7 text-[#112752]" />
                  </div>
                  <span className="text-md font-bold">Steam Oyunlar</span>
                </button>
              </Link>
            </nav>
          </div>
        </div>
        <div className="absolute w-full shadow-lg z-10 megaMenu">
          {isMegaMenuOpen && <MegaMenu items={menuItems} isImage={false} />}
        </div>

      </header>
      <FloatingSidebar />

      {/* Modals */}
      {isLoginModalOpen && <LoginModal />}
      {isRegisterModalOpen && <RegisterModal />}
      {isForgotModalOpen && <ForgotPasswordModal />}
    </>
  );
};

export default Header;
