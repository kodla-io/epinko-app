"use client";

import React, { useState } from "react";
import Comments from "../texts/comments";
import BuySell from "./buy-sell";
import { useRouter } from "next/navigation";

const AlSat = () => {
  const [activeTab, setActiveTab] = useState("alsat");
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  const handleCompleteSale = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      router.push("/basket");
    }, 1200);
  };

  return (
    <div id="buy-sell" className="container m-auto">
      {/* Popup */}
      {showPopup && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-bounce">
          Ürün sepete eklendi!
        </div>
      )}
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
                ? "bg-[var(--success)] text-white"
                : "bg-[var(--advert-list-bg)] text-var(--foreground) cursor-pointer"
            }`}
          >
            Bize Goldbar Sat
          </button>
          <button
            onClick={() => setActiveTab("hakkinda")}
            className={`min-w-[180px] px-4 py-2 rounded-md font-semibold transition-all duration-300 ${
              activeTab === "hakkinda"
                ? "bg-[var(--success)] text-white"
                : "bg-[var(--advert-list-bg)] text-var(--foreground) cursor-pointer"
            }`}
          >
            Oyun Hakkında
          </button>
          <button
            onClick={() => setActiveTab("degerlendirme")}
            className={`min-w-[180px] px-4 py-2 rounded-md font-semibold transition-all duration-300 ${
              activeTab === "degerlendirme"
                ? "bg-[var(--success)] text-white"
                : "bg-[var(--advert-list-bg)] text-var(--foreground) cursor-pointer"
            }`}
          >
            Değerlendirmeler
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "alsat" && (
          <div className="">
            <BuySell onSellToUs={() => setActiveTab("hakkinda")} />
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
                <div className="flex h-full flex-wrap flex-col text-[var(--foreground)] justify-around">
                  <h2 className="text-xl font-bold mb-2">
                    KNIGHT ONLINE 1M GOLDBAR
                  </h2>
                  <p className="text-sm mb-4">
                    Cursus mattis molestie a iaculis. Amet commodo nulla
                    facilisi nullam vehicula ipsum a arcu cursus.
                  </p>
                  <div className="flex space-x-4 mb-4">
                    <div className="flex flex-col w-1/2">
                      <label className="text-sm mb-1">Karakter Adı</label>
                      <input
                        type="text"
                        placeholder="Karakter Adı Giriniz"
                        className="bg-[#262636] text-white p-2 rounded-md outline-none"
                      />
                    </div>
                    <div className="flex flex-col w-1/2">
                      <label className="text-sm mb-1">Adet</label>
                      <input
                        type="text"
                        placeholder="Adet Giriniz"
                        className="bg-[#262636] p-2 rounded-md outline-none"
                      />
                    </div>
                  </div>
                  <div className="flex w-full flex-col md:flex-row justify-between items-center mb-2 gap-2">
                    <div className="flex items-center gap-4 flex-col flex-wrap md:flex-row w-full md:w-auto justify-end">
                      <div className="flex flex-row gap-2 justify-around w-full md:w-auto">
                        <div className="mr-4">
                          <p className="text-[var(--success)] mb-2">
                            Alış Fiyatı
                          </p>
                          <p className="font-semibold py-2 px-4 bg-[var(--advert-list-bg)] rounded-md">
                            3,40₺
                          </p>
                        </div>
                        <div className="mr-4">
                          <p className="text-[var(--success)] mb-2">
                            Kazancınız
                          </p>
                          <p className="font-semibold py-2 px-4 bg-[var(--advert-list-bg)] rounded-md">
                            3,40₺
                          </p>
                        </div>
                      </div>
                      <div className="w-full md:w-auto">
                        <div className="flex items-center md:mb-0 my-2 md:my-0 w-full md:w-auto justify-start">
                          <input type="checkbox" className="mr-2 !w-4 !h-4" />
                          <p className="text-xs">
                            Ürün Satış Kurallarını okudum ve kabul ediyorum.
                          </p>
                        </div>
                        <button className="bg-[var(--success)] text-white px-4 py-2 mt-2 rounded-md self-end" onClick={handleCompleteSale}>
                          Satışı Tamamla
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="w-full md:w-1/3 bg-[var(--advert-list-bg)] p-4 rounded-xl">
              <h3 className="text-lg font-semibold mb-2">LOREM IPSUM</h3>
              <p className="text-sm text-[var(--text-gray)] text-justify max-h-[260px] min-h-[260px] overflow-y-scroll custom-scrollbar pr-2">
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
