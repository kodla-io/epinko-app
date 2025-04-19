"use client";

import React, { useState } from "react";
import Comments from "../texts/comments";
import BuySell from "./buy-sell";

const AlSat = () => {
  const [activeTab, setActiveTab] = useState("alsat");

  return (
    <div id="buy-sell" className="container m-auto">
      <div className="text-[var(--foreground)] p-4 rounded-xl">
        {/* Tabs */}
        <div className="flex items-center space-x-2 mb-6 text-[14px] md:text-md overflow-x-auto scrollbar-hide pb-[10px]">
          <h2
            style={{ color: "var(--foreground)" }}
            className="text-[30px] py-1 font-bold hidden lg:block"
          >
            KNIGHT ONLINE 1M GOLDBAR
          </h2>
          <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500 hidden lg:block" />
          <button
            onClick={() => setActiveTab("alsat")}
            className={`min-w-[180px] px-4 py-2 rounded-md font-semibold transition-all duration-300 ${
              activeTab === "alsat"
                ? "bg-[var(--primary)] text-white"
                : "bg-[var(--bg-soft)] text-gray-300 hover:text-white cursor-pointer"
            }`}
          >
            Bize Goldbar Sat
          </button>
          <button
            onClick={() => setActiveTab("hakkinda")}
            className={`min-w-[180px] px-4 py-2 rounded-md font-semibold transition-all duration-300 ${
              activeTab === "hakkinda"
                ? "bg-[var(--primary)] text-white"
                : "bg-[var(--bg-soft)] text-gray-300 hover:text-white cursor-pointer"
            }`}
          >
            Oyun Hakkında
          </button>
          <button
            onClick={() => setActiveTab("degerlendirme")}
            className={`min-w-[180px] px-4 py-2 rounded-md font-semibold transition-all duration-300 ${
              activeTab === "degerlendirme"
                ? "bg-[var(--primary)] text-white"
                : "bg-[var(--bg-soft)] text-gray-300 hover:text-white cursor-pointer"
            }`}
          >
            Değerlendirmeler
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "alsat" && (
          <div className="">
            <BuySell />
          </div>
        )}

        {activeTab === "hakkinda" && (
          <div className="flex gap-6 md:flex-nowrap flex-wrap md:max-h-[330px] md:min-h-330px] w-full h-auto">
            {/* Left Side */}
            <div className="w-full md:w-2/3 flex md:flex-nowrap flex-wrap bg-[var(--advert-list-bg)] rounded-xl overflow-hidden">
              {/* Image */}
              <div className="w-full md:w-1/3 p-2">
                <img
                  src="https://placehold.co/500"
                  alt="Knight Online Goldbar"
                  className="w-full h-full rounded-lg object-cover"
                />
              </div>

              {/* Right Side */}
              <div className="w-full md:w-2/3 p-4 flex flex-col justify-between">
                <div className="flex h-full flex-wrap flex-col justify-around">
                  <h2 className="text-xl font-bold mb-2">
                    KNIGHT ONLINE 1M GOLDBAR
                  </h2>
                  <p className="text-sm mb-4">
                    Cursus mattis molestie a iaculis. Amet commodo nulla
                    facilisi nullam vehicula ipsum a arcu cursus.
                  </p>
                  <div className="flex space-x-4 mb-4">
                    <div className="flex flex-col w-1/2">
                      <label className="text-sm text-white mb-1">
                        Karakter Adı
                      </label>
                      <input
                        type="text"
                        placeholder="Karakter Adı Giriniz"
                        className="bg-[#262636] text-white p-2 rounded-md outline-none"
                      />
                    </div>
                    <div className="flex flex-col w-1/2">
                      <label className="text-sm text-white mb-1">Adet</label>
                      <input
                        type="text"
                        placeholder="Adet Giriniz"
                        className="bg-[#262636] text-white p-2 rounded-md outline-none"
                      />
                    </div>
                  </div>
                  <div className="flex justify-start items-center text-sm mb-2">
                    <div className="mr-4">
                      <p className="text-[var(--success)] mb-2">Alış Fiyatı</p>
                      <p className="text-white font-semibold py-2 px-4 bg-[var(--advert-list-bg)] rounded-md">
                        3,40₺
                      </p>
                    </div>
                    <div className="mr-4">
                      <p className="text-[var(--success)] mb-2">Kazancınız</p>
                      <p className="text-white font-semibold py-2 px-4 bg-[var(--advert-list-bg)] rounded-md">
                        3,40₺
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full justify-between items-center md:flex-nowrap flex-wrap mb-2">
                    <div className="flex md:mb-0 my-2 md:my-0">
                      <input type="checkbox" className="mr-2" />
                      <p className="text-xs">
                        Ürün Satış Kurallarını okudum ve kabul ediyorum.
                      </p>
                    </div>
                    <button className="bg-blue-500 px-4 py-2 rounded-md self-end">
                      Satışı Tamamla
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="w-full md:w-1/3 bg-[var(--advert-list-bg)] p-4 rounded-xl">
              <h3 className="text-lg font-semibold mb-2">LOREM IPSUM</h3>
              <p className="text-sm text-gray-400 text-justify max-h-[260px] min-h-[260px] overflow-y-scroll custom-scrollbar pr-2">
                Cursus mattis molestie a iaculis. Amet commodo nulla facilisi
                nullam vehicula ipsum a arcu cursus. Vitae turpis massa sed
                elementum tempus egestas sed. Ac tincidunt vitae semper quis
                lectus nulla. Vel pretium lectus quam id leo in.
                <br /> <br />
                Dictumst quisque sagittis purus sit amet volutpat consequat
                mauris nunc. Lacus luctus accumsan tortor posuere ac. Id diam
                maecenas ultricies mi eget mauris. Nisi vitae suscipit tellus
                mauris a diam. Tristique et egestas quis ipsum suspendisse. Odio
                eu sem nulla pharetra diam sit amet nisl. Ullamcorper velit sed
                ullamcorper morbi leo urna. Non pulvinar neque laoreet
                suspendisse interdum consectetur. Sit amet tellus cras
                adipiscing enim eu turpis.
                <br /> <br />
                Cursus mattis molestie a iaculis. Amet commodo nulla facilisi
                nullam vehicula ipsum a arcu cursus. Vitae turpis massa sed
                elementum tempus egestas sed. Ac tincidunt vitae semper quis
                lectus nulla. Vel pretium lectus quam id leo in.
                <br /> <br />
                Dictumst quisque sagittis purus sit amet volutpat consequat
                mauris nunc. Lacus luctus accumsan tortor posuere ac. Id diam
                maecenas ultricies mi eget mauris. Nisi vitae suscipit tellus
                mauris a diam. Tristique et egestas quis ipsum suspendisse. Odio
                eu sem nulla pharetra diam sit amet nisl. Ullamcorper velit sed
                ullamcorper morbi leo urna. Non pulvinar neque laoreet
                suspendisse interdum consectetur. Sit amet tellus cras
                adipiscing enim eu turpis.
              </p>
            </div>
          </div>
        )}

        {activeTab === "degerlendirme" && (
          <div className="">
            <Comments />
          </div>
        )}
      </div>
    </div>
  );
};

export default AlSat;
