import React from "react";
import Link from "next/link";
import {
  FaTwitter,
  FaFacebook,
  FaTelegram,
  FaYoutube,
  FaTiktok,
  FaDiscord,
} from "react-icons/fa";
import Logo from "./Logo";
import Squares from "./Squares";

const Footer = () => {
  const linkClass =
    "relative inline-block text-[var(--text-gray)] transition-transform duration-300 hover:-translate-y-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full";

  return (
    <footer className="text-[var(--foreground)] relative overflow-hidden">
      {/* Animated Squares Background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <Squares 
          speed={0.2} 
          squareSize={20}
          direction="diagonal"
          borderColor="#00000014"
          hoverFillColor="#00000014"
        />
      </div>
      <div className="relative z-10">
        <div className="h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
        <div className="container mx-auto py-8 px-4">
          <div className="flex flex-wrap justify-between">
            {/* Logo ve Açıklama */}
            <div className="w-full md:w-4/14 mb-4 p-4">
              <div className="mb-2">
                <Logo className="max-w-[90px] md:max-w-[130px]" />
              </div>
              <p className="text-sm text-[var(--text-gray)]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </p>
              <div className="flex space-x-2 mt-4">
                <div className="flex space-x-2 mt-4">
                  <Link href="/twitter">
                    <div className="bg-gray-800 p-2 rounded-md h-8 w-8 flex items-center justify-center text-white transition-all duration-300 ease-in-out transform hover:scale-110 hover:z-10 hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 cursor-pointer">
                      <FaTwitter />
                    </div>
                  </Link>
                  <Link href="/facebook">
                    <div className="bg-gray-800 p-2 rounded-md h-8 w-8 flex items-center justify-center text-white transition-all duration-300 ease-in-out transform hover:scale-110 hover:z-10 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 cursor-pointer">
                      <FaFacebook />
                    </div>
                  </Link>
                  <Link href="/telegram">
                    <div className="bg-gray-800 p-2 rounded-md h-8 w-8 flex items-center justify-center text-white transition-all duration-300 ease-in-out transform hover:scale-110 hover:z-10 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 cursor-pointer">
                      <FaTelegram />
                    </div>
                  </Link>
                  <Link href="/youtube">
                    <div className="bg-gray-800 p-2 rounded-md h-8 w-8 flex items-center justify-center text-white transition-all duration-300 ease-in-out transform hover:scale-110 hover:z-10 hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 cursor-pointer">
                      <FaYoutube />
                    </div>
                  </Link>
                  <Link href="/tiktok">
                    <div className="bg-gray-800 p-2 rounded-md h-8 w-8 flex items-center justify-center text-white transition-all duration-300 ease-in-out transform hover:scale-110 hover:z-10 hover:bg-gradient-to-r hover:from-black hover:to-pink-600 cursor-pointer">
                      <FaTiktok />
                    </div>
                  </Link>
                  <Link href="/discord">
                    <div className="bg-gray-800 p-2 rounded-md h-8 w-8 flex items-center justify-center text-white transition-all duration-300 ease-in-out transform hover:scale-110 hover:z-10 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 cursor-pointer">
                      <FaDiscord />
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Link Grupları */}
            <div className="w-6/12 md:w-2/12 mb-4 p-4">
              <h4 className="font-semibold text-[var(--foreground)] mb-2">
                Kurumsal
              </h4>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>
                  <Link href="/gizlilik-politikasi" className={linkClass}>
                    Gizlilik Politikamız
                  </Link>
                </li>
                <li>
                  <Link href="/kisisel-verilerin-korunmasi" className={linkClass}>
                    Kişisel Verilerin Korunma Politikası
                  </Link>
                </li>
                <li>
                  <Link href="/uyelik-sozlesmesi" className={linkClass}>
                    Üyelik Sözleşmesi
                  </Link>
                </li>
                <li>
                  <Link href="/cerez-politikasi" className={linkClass}>
                    Çerez Politikası
                  </Link>
                </li>
                <li>
                  <Link href="/iptal-iade" className={linkClass}>
                    İptal & İade Koşulları
                  </Link>
                </li>
                <li>
                  <Link href="/hakkimizda" className={linkClass}>
                    Hakkımızda
                  </Link>
                </li>
                <li>
                  <Link href="/yayinci-basvuru" className={linkClass}>
                    Yayıncı Başvuru
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-6/12 md:w-2/12 mb-4 p-4">
              <h4 className="font-semibold text-[var(--foreground)] mb-2">
                Kategoriler
              </h4>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>
                  <Link href="/metin2-pvp-serverlar" className={linkClass}>
                    Metin2 PvP Serverlar
                  </Link>
                </li>
                <li>
                  <Link href="/knight-online" className={linkClass}>
                    Knight Online
                  </Link>
                </li>
                <li>
                  <Link href="/homekoworld" className={linkClass}>
                    HomekoWorld
                  </Link>
                </li>
                <li>
                  <Link href="/ko4fun" className={linkClass}>
                    KO4FUN
                  </Link>
                </li>
                <li>
                  <Link href="/forgottenko" className={linkClass}>
                    Forgottenko İtem & Goldbar
                  </Link>
                </li>
                <li>
                  <Link href="/call-of-duty-mobile" className={linkClass}>
                    Call of Duty Mobile
                  </Link>
                </li>
                <li>
                  <Link href="/darkko" className={linkClass}>
                    Darkko
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-6/12 md:w-2/12 mb-4 p-4">
              <h4 className="font-semibold text-[var(--foreground)] mb-2">
                Ürünler
              </h4>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>
                  <Link href="/knight-online-proxy" className={linkClass}>
                    Knight Online PvP Server Proxy
                  </Link>
                </li>
                <li>
                  <Link href="/disney-plus" className={linkClass}>
                    Disney Plus 50 TL Hediye Kartı
                  </Link>
                </li>
                <li>
                  <Link href="/rise-online" className={linkClass}>
                    Rise Online 1000 Cash + 20
                  </Link>
                </li>
                <li>
                  <Link href="/homekorealm" className={linkClass}>
                    HomekoRealm 5000 KC
                  </Link>
                </li>
                <li>
                  <Link href="/fortnite" className={linkClass}>
                    Fortnite Vpapel 200 USD
                  </Link>
                </li>
                <li>
                  <Link href="/test-epin" className={linkClass}>
                    Test Epin
                  </Link>
                </li>
                <li>
                  <Link href="/bigo-live" className={linkClass}>
                    Bigo Live 117 Elmas
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-6/12 md:w-2/12 mb-4 p-4">
              <h4 className="font-semibold text-[var(--foreground)] mb-2">
                Sayfalarımız
              </h4>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>
                  <Link href="/" className={linkClass}>
                    ANASAYFA
                  </Link>
                </li>
                <li>
                  <Link href="/oyunlar" className={linkClass}>
                    OYUNLAR
                  </Link>
                </li>
                <li>
                  <Link href="/oyuncu-pazari" className={linkClass}>
                    OYUNCU PAZARI
                  </Link>
                </li>
                <li>
                  <Link href="/ilan-olustur" className={linkClass}>
                    İLAN OLUŞTUR
                  </Link>
                </li>
                <li>
                  <Link href="/yayinci-basvuru" className={linkClass}>
                    YAYINCI BAŞVURU
                  </Link>
                </li>
                <li>
                  <Link href="/pvp-serverlar" className={linkClass}>
                    PVP SERVERLAR
                  </Link>
                </li>
                <li>
                  <Link href="/bakiye-yukle" className={linkClass}>
                    BAKİYE YÜKLE
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Alt Kısım */}
          <div className="text-[var(--text-gray)] mt-2 text-sm">
            Copyright © {new Date().getFullYear()} kodla.io | All Rights Reserved.
          </div>
        </div>
      </div>
      <div className="h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
    </footer>
  );
};

export default Footer;
