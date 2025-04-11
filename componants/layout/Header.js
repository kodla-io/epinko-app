"use client";

import { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useTheme } from "./Theme";
import SearchInput from "./Search";
import MegaMenu from "./MegaMenu";
import Link from "next/link";
import { CiCirclePlus } from "react-icons/ci";

const items = [
  {
    title: "Item 1",
    imageUrl: "https://placehold.co/30",
    bgColor: "#1e2939",
    link: "https://example.com/item1",
  },
  {
    title: "Item 2",
    imageUrl: "https://placehold.co/30",
    bgColor: "#1e2939",
    link: "https://example.com/item2",
  },
  {
    title: "Item 3",
    imageUrl: "https://placehold.co/30",
    bgColor: "#1e2939",
    link: "https://example.com/item3",
  },
  {
    title: "Item 4",
    imageUrl: "https://placehold.co/30",
    bgColor: "#1e2939",
    link: "https://example.com/item4",
  },
  {
    title: "Item 5",
    imageUrl: "https://placehold.co/30",
    bgColor: "#1e2939",
    link: "https://example.com/item5",
  },
  {
    title: "Item 6",
    imageUrl: "https://placehold.co/30",
    bgColor: "#1e2939",
    link: "https://example.com/item6",
  },
  {
    title: "Item 7",
    imageUrl: "https://placehold.co/30",
    bgColor: "#1e2939",
    link: "https://example.com/item7",
  },
  {
    title: "Item 8",
    imageUrl: "https://placehold.co/30",
    bgColor: "#1e2939",
    link: "https://example.com/item8",
  },
  {
    title: "Item 9",
    imageUrl: "https://placehold.co/30",
    bgColor: "#1e2939",
    link: "https://example.com/item9",
  },
  {
    title: "Item 10",
    imageUrl: "https://placehold.co/30",
    bgColor: "#1e2939",
    link: "https://example.com/item10",
  },
  {
    title: "Item 11",
    imageUrl: "https://placehold.co/30",
    bgColor: "#1e2939",
    link: "https://example.com/item11",
  },
  {
    title: "Item 12",
    imageUrl: "https://placehold.co/30",
    bgColor: "#1e2939",
    link: "https://example.com/item12",
  },
  {
    title: "Item 13",
    imageUrl: "https://placehold.co/30",
    bgColor: "#1e2939",
    link: "https://example.com/item13",
  },
];

const items2 = [
  {
    title: "Item 1",
    imageUrl: "https://placehold.co/30",
    bgColor: "#1e2939",
    link: "https://example.com/item1",
  },
  {
    title: "Item 2",
    imageUrl: "https://placehold.co/30",
    bgColor: "#1e2939",
    link: "https://example.com/item2",
  },
  {
    title: "Item 3",
    imageUrl: "https://placehold.co/30",
    bgColor: "#1e2939",
    link: "https://example.com/item3",
  },
  {
    title: "Item 4",
    imageUrl: "https://placehold.co/30",
    bgColor: "#1e2939",
    link: "https://example.com/item4",
  },
  {
    title: "Item 5",
    imageUrl: "https://placehold.co/30",
    bgColor: "#1e2939",
    link: "https://example.com/item5",
  },
  {
    title: "Item 6",
    imageUrl: "https://placehold.co/30",
    bgColor: "#1e2939",
    link: "https://example.com/item6",
  },
  {
    title: "Item 7",
    imageUrl: "https://placehold.co/30",
    bgColor: "#1e2939",
    link: "https://example.com/item7",
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setIsDark(savedTheme === "dark");
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

  return (
    <header className="w-full text-white">
      {/* Üst Kısım */}
      <div className="header-top w-full">
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
            <span>TR</span>
          </div>
        </div>
      </div>

      {/* Ana Menü */}
      <div className="header-middle">
        <div className="container m-auto flex justify-between items-center px-2 md:px-6 py-3">
          {/* Logo */}
          <div className="text-2xl font-bold text-green-500">
            {/* epin<span className="text-white">KO</span> */}
            <Link href="/">
              <img className="max-w-[90px] md:max-w-[130px]" src="/media/logo.png" />
            </Link>
          </div>

          {/* Menü */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm uppercase">
            {/* Arama Çubuğu */}
            <div className="relative flex">
              <SearchInput />
              <button
                style={{
                  backgroundColor: "#41c85f",
                  color: "white",
                }}
                className="flex items-center font-bold py-2 px-4 rounded transition ml-3 ilan-ekle-button"
              >
                <span className="mr-2 text-[25px]">
                  <CiCirclePlus />
                </span>
                İlan Ekle
              </button>
            </div>
          </nav>

          {/* Sağ Kısım */}
          <div className="flex items-center space-x-4">
            <div className="d-l-mode">
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
            <Link href="/">
              <button className="px-4 py-2 text-white rounded-md transition border-glow-header">
                Giriş Yap
              </button>
            </Link>
            <Link href="/">
              <button className="px-4 py-2 text-white rounded-md transition border-glow-header">
                Kayıt Ol
              </button>
            </Link>
            {/* <FaShoppingCart className="text-xl cursor-pointer" /> */}
          </div>

          {/* Mobil Menü Butonu */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Alt Menü */}
      <div className="header-bottom">
        <div className="container m-auto flex justify-between items-center px-6 py-1">
          <nav className="hidden md:flex space-x-6 text-sm uppercase">
            {/* <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                  <filter id="gooey">
                    <feGaussianBlur
                      in="SourceGraphic"
                      stdDeviation="5"
                      result="blur"
                    />
                    <feColorMatrix
                      in="blur"
                      type="matrix"
                      values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                      result="highContrastGraphic"
                    />
                    <feComposite
                      in="SourceGraphic"
                      in2="highContrastGraphic"
                      operator="atop"
                    />
                  </filter>
                </defs>
              </svg>

              <button id="gooey-button">
                F*** Awesome
                <span className="bubbles">
                  <span className="bubble"></span>
                  <span className="bubble"></span>
                  <span className="bubble"></span>
                  <span className="bubble"></span>
                  <span className="bubble"></span>
                  <span className="bubble"></span>
                  <span className="bubble"></span>
                  <span className="bubble"></span>
                  <span className="bubble"></span>
                  <span className="bubble"></span>
                </span>
              </button>
            </div> */}
            <div className="relative">
              <button
                onClick={(event) => toggleMenu(items, event)}
                className="text-white flex items-center space-x-1 hover:text-green-400 p-1 rounded mage-menu-button"
              >
                <div
                  style={{ backgroundColor: "rgba(88, 243, 249, 0.3)" }}
                  className="rounded-md p-[6px] mr-2"
                >
                  <img
                    src="/media/icons/gamepad.png"
                    alt="Mega Menu Icon"
                    className="max-w-[22px] min-w-[22px]"
                  />
                </div>
                <span className="text-lg font-bold">Tüm Oyunlar</span>
                <img
                  src="/media/icons/down.png"
                  className="max-w-[22px] min-w-[22px]"
                />
              </button>
            </div>
            <div className="relative">
              <button
                onClick={(event) => toggleMenu(items2, event)}
                className="text-white flex items-center space-x-1 hover:text-green-400 p-1 rounded mage-menu-button"
              >
                <div
                  style={{ backgroundColor: "rgba(88, 249, 115, 0.3)" }}
                  className="rounded-md p-[6px] mr-2"
                >
                  <img
                    src="/media/icons/advert.png"
                    alt="Mega Menu Icon"
                    className="max-w-[22px] min-w-[22px]"
                  />
                </div>
                <span className="text-lg font-bold">Tüm İlanlar</span>
                <img
                  src="/media/icons/down.png"
                  className="max-w-[22px] min-w-[22px]"
                />
              </button>
            </div>
            <Link href="#">
              <button className="text-white flex items-center space-x-1 hover:text-green-400 p-1 rounded">
                <div
                  style={{ backgroundColor: "rgba(249, 88, 104, 0.3)" }}
                  className="rounded-md p-[6px] mr-2"
                >
                  <img
                    src="/media/icons/fav.png"
                    alt="Mega Menu Icon"
                    className="max-w-[22px] min-w-[22px]"
                  />
                </div>
                <span className="text-lg font-bold">Favoriler</span>
              </button>
            </Link>
            <Link href="#">
              <button className="text-white flex items-center space-x-1 hover:text-green-400 p-1 rounded">
                <div
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                  className="rounded-md p-[6px] mr-2"
                >
                  <img
                    src="/media/icons/steam2.png"
                    alt="Mega Menu Icon"
                    className="max-w-[22px] min-w-[22px]"
                  />
                </div>
                <span className="text-lg font-bold">Steam Oyunlar</span>
              </button>
            </Link>
            {/* <Link
              href="#"
              className="hover:text-green-400 flex items-center space-x-1"
            >
              <img src="/media/icons/steam.png" />
              <span>İletişim</span>
            </Link> */}
          </nav>
        </div>
      </div>
      <div className="absolute w-full shadow-lg z-10 megaMenu">
        {isMegaMenuOpen && <MegaMenu items={menuItems} isImage={false} />}
      </div>

      {/* Mobil Menü */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 py-4 px-6 space-y-4 text-sm uppercase">
          <a href="#" className="block text-white hover:text-green-400">
            🏠 Anasayfa
          </a>
          <a href="#" className="block text-white hover:text-green-400">
            🎮 Tüm Oyunlar
          </a>
          <a href="#" className="block text-white hover:text-green-400">
            🟢 Steam Oyunlar
          </a>
          <a href="#" className="block text-white hover:text-green-400">
            📢 İlanlar
          </a>
          <a href="#" className="block text-white hover:text-green-400">
            📩 İletişim
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
