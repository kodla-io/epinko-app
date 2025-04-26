import React, { useState } from 'react';
import { IoIosSettings } from "react-icons/io";
import Link from 'next/link';

const FloatingSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pages = [
    { name: 'Anasayfa', href: '/' },

    { name: 'Tüm Oyunlar', href: '/all-games' },
    { name: 'Oyun Detay', href: '/game-detail' },
    { name: 'Steam Oyunlar', href: '/steam-games' },

    { name: 'Kasa Kategori', href: '/kasa-kategori' },
    { name: 'Kasa Detay', href: '/kasa-detail' },

    { name: 'Tüm İlanlar', href: '/all-adverts' },
    { name: 'İlan Kategori Detay', href: '/advert-category-detail' },
    { name: 'Oyuncu İlanları', href: '/player-profile-adverts' },
    { name: 'İlan Oluştur', href: '/create-advert' },
    
    { name: 'Kategori Detay', href: '/category-detail' },

    { name: 'Günün Fırsatları', href: '/deal-of-the-day' },
    
    { name: 'Sepet', href: '/basket' },

    { name: 'Bayilik Başvuru', href: '/bayilik-basvuru' },

    { name: 'Bize Al/Sat', href: '/buy-sell-to-us' },
    { name: 'Bize Sat', href: '/sell-to-us' },

    { name: 'Yayıncılar', href: '/streamers' },
    { name: 'Yayıncı Detay', href: '/streamer-detail' },
    { name: 'Yayıncı Başvuru', href: '/yayinci-basvuru' },
    
    { name: 'Haberler', href: '/news' },
    { name: 'Haber Detay', href: '/news-detail' },

    { name: 'İletişim', href: '/contact' },
    { name: 'Login', href: '/login' },
    { name: 'Register', href: '/register' },
    { name: 'SSS', href: '/sss' },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end">
      {/* Sidebar */}
      {isOpen && (
        <div className="bg-white shadow-xl rounded-xl max-w-[400px] w-full p-4 mr-4 transition-all duration-300">
          <ul className="space-y-2">
            {pages.map((page, index) => (
              <li key={index}>
                <Link
                  href={page.href}
                  className="block text-gray-800 hover:text-pink-500 transition-colors"
                >
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Settings Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full shadow-lg transition-all duration-300"
      >
        <IoIosSettings className="w-5 h-5" />
      </button>
    </div>
  );
};

export default FloatingSidebar;
