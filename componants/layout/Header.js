"use client";

import { useState } from "react";
import { FaShoppingCart, FaGlobe } from "react-icons/fa";
import { useTheme } from './Theme';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = useTheme();

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
          <nav className="hidden md:flex space-x-6 text-sm uppercase">
            <a
              href="#"
              className="hover:text-green-400 flex items-center space-x-1"
            >
              <img src="/media/icons/house.png" />
              <span>Anasayfa</span>
            </a>
            <a
              href="#"
              className="hover:text-green-400 flex items-center space-x-1"
            >
              <img src="/media/icons/console.png" />
              <span>Tüm Oyunlar</span>
            </a>
            <a
              href="#"
              className="hover:text-green-400 flex items-center space-x-1"
            >
              <img src="/media/icons/steam.png" />
              <span>Steam Oyunlar</span>
            </a>
            <a
              href="#"
              className="hover:text-green-400 flex items-center space-x-1"
            >
              <img src="/media/icons/steam.png" />
              <span>İlanlar</span>
            </a>
            <a
              href="#"
              className="hover:text-green-400 flex items-center space-x-1"
            >
              <img src="/media/icons/steam.png" />
              <span>İletişim</span>
            </a>
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
