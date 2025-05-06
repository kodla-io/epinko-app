"use client";

import React, { useState } from "react";
import { CiCoins1 } from "react-icons/ci";
import { TbBrandValorant } from "react-icons/tb";
import { FaFlag } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import { BsPatchQuestionFill } from "react-icons/bs";
import { IoIosTime } from "react-icons/io";

import Comments from "../texts/comments";
import Link from "next/link";

const products = [
  { name: "PUBG Mobile 840 UC", price: "444,33 TL" },
  { name: "PUBG Mobile 405000 UC", price: "164.087,50 TL" },
  { name: "PUBG Mobile 32400 UC", price: "13.127,00 TL" },
  { name: "PUBG Mobile 9900 UC Global", price: "4.263,80 TL" },
  { name: "PUBG Mobile 240 UC Global", price: "145,08 TL" },
  { name: "PUBG Mobile 40500 UC Epin", price: "17.463,60 TL" },
  { name: "PUBG Mobile 1800 UC", price: "833,17 TL" },
];

const steps = [
  {
    number: 1,
    title: "Lorem Ipsum Dolar Sit Amet",
    image: "https://placehold.co/650x400",
  },
  {
    number: 2,
    title: "Lorem Ipsum Dolar Sit Amet",
    image: "https://placehold.co/650x400",
  },
  {
    number: 3,
    title: "Lorem Ipsum Dolar Sit Amet",
    image: "https://placehold.co/650x400",
  },
];

const GameDetailTop = () => {
  const [activeTab, setActiveTab] = useState("aciklama");

  return (
    <div className="flex justify-center">
      <div className="container flex flex-col lg:flex-row justify-between p-2 space-y-4 md:space-y-0">
        {/* İlk Kutu: Ürün Bilgileri */}

        <div className="flex flex-col flex-7 flex-column space-y-4 md:space-y-0">
          <div className="flex flex-col flex-7 md:flex-row justify-between space-y-4 md:space-y-0">
            <div className="flex-3 p-2">
              <div className="h-auto max-h-auto md:max-h-[456px] min-h-auto md:min-h-[456px] bg-[var(--advert-list-bg)] text-[var(--foreground)] p-4 relative rounded-lg">
                <img
                  src="https://placehold.co/350x450"
                  alt="Game Picture"
                  className="rounded-lg w-full h-full object-cover min-h-auto max-h-auto md:min-h-[420px] md:max-h-[420px]"
                />
              </div>
            </div>

            {/* İkinci Kutu: Görsel */}
            <div className="flex-5 p-2">
              <div className="h-auto max-h-auto md:max-h-[456px] min-h-auto md:min-h-[456px] bg-[var(--advert-list-bg)] text-[var(--foreground)] p-6 relative rounded-lg">
                <div className="w-full rounded-lg text-white">
                  <p className="text-gray-400 mb-4">Oyuncu ID’nize yüklenir.</p>

                  <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center space-x-2 bg-[var(--advert-list-bg)] p-4 rounded relative">
                      <TbBrandValorant className="w-8 h-8 mr-2" />
                      <div>
                        <span className="mobil-top-title">Satıcı:</span>
                        <span className="mt-2 md:mt-0">epinko</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 bg-[var(--advert-list-bg)] p-4 rounded relative">
                      <FaFlag className="w-8 h-8 mr-2" />
                      <div>
                        <span className="mobil-top-title">Bölge:</span>
                        <span className="mt-2 md:mt-0">Türkiye</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 bg-[var(--advert-list-bg)] p-4 rounded relative">
                      <FaApple className="w-8 h-8 mr-2" />
                      <div>
                        <span className="mobil-top-title">Platform:</span>
                        <span className="mt-2 md:mt-0">Apple</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 bg-[var(--advert-list-bg)] p-4 rounded relative">
                      <DiAndroid className="w-8 h-8 mr-2" />
                      <div>
                        <span className="mobil-top-title">Platform:</span>
                        <span className="mt-2 md:mt-0"> Android</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 bg-[var(--advert-list-bg)] p-4 rounded relative">
                      <BsPatchQuestionFill className="w-8 h-8 mr-2" />
                      <div>
                        <span className="mobil-top-title">Ürün Tipi:</span>
                        <span className="mt-2 md:mt-0">Top-Up</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 bg-[var(--advert-list-bg)] p-4 rounded relative">
                      <IoIosTime className="w-8 h-8 mr-2" />
                      <div>
                        <span className="mobil-top-title">Yükleme Süresi:</span>
                        <span className="mt-2 md:mt-0"> 0-60 sn</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between bg-[var(--advert-list-bg)] p-4 rounded-xl">
                    <div className="flex items-center space-x-2 ">
                      <CiCoins1 className="w-12 h-12" />
                      <span className="text-xl font-bold">14,28 TL</span>
                    </div>
                    <button className="bg-green-500 px-4 py-2 rounded-lg text-white font-semibold">
                      SATIN AL
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full mt-2">
            <div className="bg-[var(--advert-list-bg)] p-4 rounded-lg text-white">
              <div className="flex border-b border-gray-700 mb-4 overflow-x-auto pb-2 md:pb-0">
                <button
                  className={`px-4 py-2 min-w-[170px] ${
                    activeTab === "aciklama"
                      ? "text-blue-500 border-b-2 border-blue-500"
                      : "text-gray-400"
                  }`}
                  onClick={() => setActiveTab("aciklama")}
                >
                  Açıklama
                </button>
                <button
                  className={`px-4 py-2 min-w-[170px] ${
                    activeTab === "degerlendirmeler"
                      ? "text-blue-500 border-b-2 border-blue-500"
                      : "text-gray-400"
                  }`}
                  onClick={() => setActiveTab("degerlendirmeler")}
                >
                  Değerlendirmeler
                </button>
                <button
                  className={`px-4 py-2 min-w-[170px] ${
                    activeTab === "nasil"
                      ? "text-blue-500 border-b-2 border-blue-500"
                      : "text-gray-400"
                  }`}
                  onClick={() => setActiveTab("nasil")}
                >
                  Nasıl Kullanılır?
                </button>
              </div>

              <div>
                {activeTab === "aciklama" && (
                  <p>
                    üzerinden PUBG Mobile 10 UC Satın Al işleminizi güvenilir ve
                    hızlı bir şekilde gerçekleştirin. PUBG Mobile oyununda
                    kullanabileceğiniz 10 UC Unknown Cash ile oyun içi
                    alışverişlerinizi rahatça yapabilir, karakterinizi ve
                    ekipmanlarınızı geliştirebilirsiniz. Satın aldığınız 10 UC
                    anında oyun hesabınıza yüklenir ve sadece Türkiye Sunucusu
                    için geçerlidir. 7/24 hizmet sunarak, PUBG Mobile UC satın
                    alma işlemlerinizde en hızlı çözümü sağlıyoruz. Güvenli
                    ödeme yöntemleri ve anında teslimat garantisi ile
                    Hesap.com.tr, PUBG deneyiminizi en üst seviyeye taşıyın. UC
                    satın alarak yeni kostümler, silah kaplamaları, sandıklar ve
                    diğer özel içeriklere hemen sahip olabilirsiniz.
                    <br />
                    <br />
                    PUBG Mobile 10 UC ID Yükleme işlemi oldukça basittir.
                    Hesap.com.tr'den siparişinizi verirken oyuncu ID'nizi
                    girmeniz yeterlidir. Siparişiniz alındıktan sonra 1-5 dakika
                    içerisinde 10 UC hesabınıza otomatik olarak yüklenecektir.
                    Bu sayede hızlı ve sorunsuz bir şekilde oyun içi
                    alışverişlerinize devam edebilirsiniz.
                  </p>
                )}
                {activeTab === "degerlendirmeler" && <Comments />}
                {activeTab === "nasil" && (
                  <div>
                    {steps.map((step) => (
                      <div key={step.number} className="p-4 rounded-lg">
                        <div className="flex items-center md:items-end mb-3">
                          <h2 className="text-6xl font-bold mr-2">
                            {step.number}
                          </h2>
                          <h3 className="text-xl">{step.title}</h3>
                        </div>
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-auto object-cover rounded-lg"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Üçüncü Kutu: Benzer Ürünler */}
        <div className="flex-2 p-2">
          <div className="h-auto max-h-auto bg-[var(--advert-list-bg)] text-[var(--foreground)] p-2 relative rounded-lg">
            <div className="max-w-sm p-2 rounded-lg">
              <h2 className="text-xl font-bold text-white mb-4">
                Benzer Ürünler
              </h2>
              <div className="space-y-4">
                {products.map((product, index) => (
                  <Link key={index} href="/all-adverts">
                    <div className="flex items-center space-x-4 mb-3">
                      <img
                        src="https://placehold.co/100"
                        alt={product.name}
                        className="max-w-[70px] max-h-[70px] rounded-md"
                      />
                      <div>
                        <div className="text-white font-semibold">
                          {product.name}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {product.price}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetailTop;
