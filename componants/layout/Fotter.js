import React from "react";
// Eğer Font Awesome kullanıyorsanız aşağıdaki importları ekleyin
import {
  FaTwitter,
  FaFacebook,
  FaTelegram,
  FaYoutube,
  FaTiktok,
  FaDiscord,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white">
      <div className="h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo ve Açıklama */}
          <div className="w-full md:w-3/12 mb-4 p-4">
            <div className="text-2xl font-bold text-green-500 mb-2">epinKO</div>
            <p className="text-sm text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
            <div className="flex space-x-2 mt-4">
              <FaTwitter className="bg-gray-800 p-2 rounded-md h-8 w-8" />
              <FaFacebook className="bg-gray-800 p-2 rounded-md h-8 w-8" />
              <FaTelegram className="bg-gray-800 p-2 rounded-md h-8 w-8" />
              <FaYoutube className="bg-gray-800 p-2 rounded-md h-8 w-8" />
              <FaTiktok className="bg-gray-800 p-2 rounded-md h-8 w-8" />
              <FaDiscord className="bg-gray-800 p-2 rounded-md h-8 w-8" />
            </div>
          </div>

          {/* Link Grupları */}
          <div className="w-6/12 md:w-1/12 mb-4 p-4">
            <h4 className="font-semibold text-white">Marketplace</h4>
            <ul className="text-sm text-gray-400">
              <li>Explore</li>
              <li>Item Detail</li>
              <li>Live Auction</li>
            </ul>
          </div>

          <div className="w-6/12 md:w-1/12 mb-4 p-4">
            <h4 className="font-semibold text-white">Stats</h4>
            <ul className="text-sm text-gray-400">
              <li>Ranking</li>
              <li>Activity</li>
              <li>Author</li>
            </ul>
          </div>

          <div className="w-6/12 md:w-1/12 mb-4 p-4">
            <h4 className="font-semibold text-white">Resource</h4>
            <ul className="text-sm text-gray-400">
              <li>Blogs</li>
              <li>Help And Center</li>
              <li>FAQs</li>
            </ul>
          </div>

          <div className="w-6/12 md:w-1/12 mb-4 p-4">
            <h4 className="font-semibold text-white">My Account</h4>
            <ul className="text-sm text-gray-400">
              <li>Profile</li>
              <li>My Wallet</li>
            </ul>
          </div>

          {/* E-posta Abonelik */}
          <div className="w-full md:w-2/12 mb-4 p-4">
            <h4 className="font-semibold text-white">Subscribe Us</h4>
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
