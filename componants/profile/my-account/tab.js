import React from "react";

import { FaMedal } from "react-icons/fa";
import { AiTwotoneSafetyCertificate } from "react-icons/ai";
import { PiMedalBold } from "react-icons/pi";
import { AiTwotoneCrown } from "react-icons/ai";

export default function MyAccount() {
  return (
    <div id="my-account">
      <div className="flex items-center space-x-4">
        <h2
          style={{ color: "var(--foreground)" }}
          className="text-white text-[30px] py-2 font-bold px-4"
        >
          HESABIM
        </h2>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
      </div>
      <div className="bg-[var(--advert-list-bg)] p-4 rounded-lg">
        <div className="flex md:flex-row flex-col space-x-4 mb-2 md:mb-4">
          <div className="flex-1">
            <label className="block text-lg mb-3">Ad</label>
            <input
              type="text"
              placeholder="Epinko Epinko"
              className="w-full p-3 rounded-lg text-white border-none focus:outline-none"
              disabled
            />
          </div>

          <div className="flex-1">
            <label className="block text-lg mb-3">Soyad</label>
            <input
              type="text"
              placeholder="EPİNKO"
              className="w-full p-3 rounded-lg text-white border-none focus:outline-none"
              disabled
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col space-x-4 mb-2 md:mb-4">
          <div className="flex-1">
            <label className="block text-lg mb-3">Kullanıcı adı</label>
            <input
              type="text"
              placeholder="@epinko"
              className="w-full p-3 rounded-lg text-white border-none focus:outline-none"
              disabled
            />
          </div>

          <div className="flex-1">
            <label className="block text-lg mb-3">Telefon</label>
            <input
              type="text"
              placeholder="90555 555 5555"
              className="w-full p-3 rounded-lg text-white border-none focus:outline-none"
              disabled
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col space-x-4 mb-2 md:mb-4">
          <div className="flex-1">
            <label className="block text-lg mb-3">TC Kimlik Numarası</label>
            <input
              type="text"
              placeholder="Kimlik Bilgilerinizi Doğrulayınız"
              className="w-full p-3 rounded-lg text-white border-none focus:outline-none"
            />
          </div>

          <div className="flex-1">
            <label className="block text-lg mb-3">E-Mail Adresi</label>
            <input
              type="text"
              placeholder="epinko@epinko.com.tr"
              className="w-full p-3 rounded-lg text-white border-none focus:outline-none"
              disabled
            />
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <h2
          style={{ color: "var(--foreground)" }}
          className="text-white text-[30px] py-2 font-bold px-4"
        >
          ROZETLERİM
        </h2>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-2">
        {/* Kutu 1 */}
        <div className="bg-gradient-to-b from-[color:var(--success)] to-transparent rounded-xl p-[2px]">
          <div className="bg-[var(--bg-info-box)] rounded-xl p-4 text-center">
            <FaMedal className="mx-auto mb-2 w-12 h-12" />
            <h3 className="text-white text-lg font-semibold">Lorem Ipsum</h3>
            <p className="text-gray-300 text-sm">
              congue mauris rhoncus aenean vels elit scelerisque mauris
              pellentesque
            </p>
          </div>
        </div>

        {/* Kutu 2 */}
        <div className="bg-gradient-to-t from-[color:var(--success)] to-transparent rounded-xl p-[2px]">
          <div className="bg-[var(--bg-info-box)] rounded-xl p-4 text-center">
            <AiTwotoneSafetyCertificate className="mx-auto mb-2 w-12 h-12" />
            <h3 className="text-white text-lg font-semibold">Lorem Ipsum</h3>
            <p className="text-gray-300 text-sm">
              congue mauris rhoncus aenean vels elit scelerisque mauris
              pellentesque
            </p>
          </div>
        </div>

        {/* Kutu 3 */}
        <div className="bg-gradient-to-b from-[color:var(--success)] to-transparent rounded-xl p-[2px]">
          <div className="bg-[var(--bg-info-box)] rounded-xl p-4 text-center">
            <PiMedalBold className="mx-auto mb-2 w-12 h-12" />
            <h3 className="text-white text-lg font-semibold">Lorem Ipsum</h3>
            <p className="text-gray-300 text-sm">
              congue mauris rhoncus aenean vels elit scelerisque mauris
              pellentesque
            </p>
          </div>
        </div>

        {/* Kutu 4 */}
        <div className="bg-gradient-to-t from-[color:var(--success)] to-transparent rounded-xl p-[2px]">
          <div className="bg-[var(--bg-info-box)] rounded-xl p-4 text-center">
            <AiTwotoneCrown className="mx-auto mb-2 w-12 h-12" />
            <h3 className="text-white text-lg font-semibold">Lorem Ipsum</h3>
            <p className="text-gray-300 text-sm">
              congue mauris rhoncus aenean vels elit scelerisque mauris
              pellentesque
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
