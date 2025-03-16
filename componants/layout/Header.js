"use client";

import { useState, useRef, useEffect } from "react";
import { FaShoppingCart, FaGlobe } from "react-icons/fa";
import { useTheme } from "./Theme";
import SearchInput from "./Search";
import MegaMenu from "./MegaMenu";
import Link from "next/link";

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

  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([]);

  const toggleMenu = (items) => {
    setMenuItems(items);
    setIsMegaMenuOpen((prev) => !prev);
  };
  return (
    <header className="w-full bg-gray-900 text-white">
      {/* Üst Kısım */}
      <div className="flex justify-between items-center px-4 container py-1 m-auto text-xsm border-gray-700">
        <div className="flex space-x-4">
          <a href="#" className="hover:text-green-400">
            <p>Hakkımızda</p>
          </a>
          <a href="#" className="hover:text-green-400">
            <p>Haberler</p>
          </a>
          <a href="#" className="hover:text-green-400">
            <p>Yardım</p>
          </a>
          <a href="#" className="hover:text-green-400">
            <p>İletişim</p>
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <FaGlobe onClick={toggleTheme} className="text-gray-400" />
          <span>TR</span>
        </div>
      </div>

      {/* Ana Menü */}
      <div className="bg-gray-800">
        <div className="container m-auto flex justify-between items-center px-6 py-3">
          {/* Logo */}
          <div className="text-2xl font-bold text-green-500">
            epin<span className="text-white">KO</span>
          </div>

          {/* Menü */}
          <nav className="hidden md:flex items-center space-x-6 text-sm uppercase">
            {/* Arama Çubuğu */}
            <div className="relative">
              <SearchInput />
              <button className="absolute right-0 top-0 mt-2 mr-3 text-gray-600">
                🔍
              </button>
            </div>
          </nav>

          {/* Sağ Kısım */}
          <div className="flex items-center space-x-4">
            <button className="bg-green-500 px-4 py-2 text-white rounded-md hover:bg-green-600 transition">
              Giriş Yap
            </button>
            <FaShoppingCart className="text-xl cursor-pointer" />
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

      <div className="bg-gray-800">
        <div className="container m-auto flex justify-between items-center px-6 py-3">
          {/* Alt Menü */}
          <nav className="hidden md:flex space-x-6 text-sm uppercase">
            <div className="relative">
              <button
                onClick={() => toggleMenu(items)}
                className="text-white flex items-center space-x-1 hover:text-green-400 p-1 rounded"
              >
                <div
                  style={{ backgroundColor: "rgba(88, 243, 249, 0.3)" }}
                  className="rounded-md p-1 mr-2"
                >
                  <img
                    src="/media/icons/gamepad.png"
                    alt="Mega Menu Icon"
                    className="max-w-[25px] min-w-[25px]"
                  />
                </div>
                <span className="text-lg">Tüm Oyunlar</span>
                <img
                  src="/media/icons/down.png"
                  className="max-w-[25px] min-w-[25px]"
                />
              </button>
            </div>
            <div className="relative">
              <button
                onClick={() => toggleMenu(items2)}
                className="text-white flex items-center space-x-1 hover:text-green-400 p-1 rounded"
              >
                <div
                  style={{ backgroundColor: "rgba(88, 249, 115, 0.3)" }}
                  className="rounded-md p-1 mr-2"
                >
                  <img
                    src="/media/icons/advert.png"
                    alt="Mega Menu Icon"
                    className="max-w-[25px] min-w-[25px]"
                  />
                </div>
                <span className="text-lg">Tüm İlanlar</span>
                <img
                  src="/media/icons/down.png"
                  className="max-w-[25px] min-w-[25px]"
                />
              </button>
            </div>
            <Link href="#">
              <button className="text-white flex items-center space-x-1 hover:text-green-400 p-1 rounded">
                <div
                  style={{ backgroundColor: "rgba(249, 88, 104, 0.3)" }}
                  className="rounded-md p-1 mr-2"
                >
                  <img
                    src="/media/icons/fav.png"
                    alt="Mega Menu Icon"
                    className="max-w-[25px] min-w-[25px]"
                  />
                </div>
                <span className="text-lg">Favoriler</span>
              </button>
            </Link>
            <Link href="#">
              <button className="text-white flex items-center space-x-1 hover:text-green-400 p-1 rounded">
                <div
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
                  className="rounded-md p-1 mr-2"
                >
                  <img
                    src="/media/icons/steam2.png"
                    alt="Mega Menu Icon"
                    className="max-w-[25px] min-w-[25px]"
                  />
                </div>
                <span className="text-lg">Steam Oyunlar</span>
              </button>
            </Link>
            <Link
              href="#"
              className="hover:text-green-400 flex items-center space-x-1"
            >
              <img src="/media/icons/steam.png" />
              <span>İletişim</span>
            </Link>
          </nav>
        </div>
      </div>
      {isMegaMenuOpen && <MegaMenu items={menuItems} isImage={false} />}

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
