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

const Footer = () => {
  const linkClass =
    "relative inline-block text-white transition-transform duration-300 hover:-translate-y-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full";

  return (
    <footer className="text-white">
      <div className="h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo ve Açıklama */}
          <div className="w-full md:w-3/14 mb-4 p-4">
            <div className="text-2xl font-bold text-green-500 mb-2">epinKO</div>
            <p className="text-sm text-gray-400">
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
          <div className="w-6/12 md:w-2/14 mb-4 p-4">
            <h4 className="font-semibold text-white mb-2">Marketplace</h4>
            <ul className="space-y-1 text-sm text-gray-400">
              <li>
                <Link href="/explore" className={linkClass}>
                  Explore
                </Link>
              </li>
              <li>
                <Link href="/item-detail" className={linkClass}>
                  Item Detail
                </Link>
              </li>
              <li>
                <Link href="/live-auction" className={linkClass}>
                  Live Auction
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-6/12 md:w-2/14 mb-4 p-4">
            <h4 className="font-semibold text-white mb-2">Stats</h4>
            <ul className="space-y-1 text-sm text-gray-400">
              <li>
                <Link href="/ranking" className={linkClass}>
                  Ranking
                </Link>
              </li>
              <li>
                <Link href="/activity" className={linkClass}>
                  Activity
                </Link>
              </li>
              <li>
                <Link href="/author" className={linkClass}>
                  Author
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-6/12 md:w-2/14 mb-4 p-4">
            <h4 className="font-semibold text-white mb-2">Resource</h4>
            <ul className="space-y-1 text-sm text-gray-400">
              <li>
                <Link href="/blogs" className={linkClass}>
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/help" className={linkClass}>
                  Help And Center
                </Link>
              </li>
              <li>
                <Link href="/sss" className={linkClass}>
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-6/12 md:w-2/14 mb-4 p-4">
            <h4 className="font-semibold text-white mb-2">My Account</h4>
            <ul className="space-y-1 text-sm text-gray-400">
              <li>
                <Link href="/profile" className={linkClass}>
                  Profile
                </Link>
              </li>
              <li>
                <Link href="/wallet" className={linkClass}>
                  My Wallet
                </Link>
              </li>
            </ul>
          </div>

          {/* E-posta Abonelik */}
          <div className="w-full md:w-3/14 mb-4 p-4">
            <h4 className="font-semibold text-white mb-2">Subscribe Us</h4>
            <p className="text-sm text-gray-400 mb-2">
              Signup for our newsletter to get the latest news in your inbox.
            </p>
            <div className="flex">
              <input
                type="text"
                placeholder="Info@Yourgmail.Com"
                className="px-4 py-2 bg-gray-800 text-sm text-gray-300 rounded-l-md focus:outline-none"
              />
              <button className="bg-green-500 px-4 py-2 rounded-r-md">
                &gt;
              </button>
            </div>
          </div>
        </div>

        {/* Alt Kısım */}
        <div className="text-gray-400 mt-2 text-sm">
          Copyright © {new Date().getFullYear()} kodla.io | All Rights Reserved.
        </div>
      </div>
      <div className="h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
    </footer>
  );
};

export default Footer;
