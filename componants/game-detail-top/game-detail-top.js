"use client";

import React, { useState } from "react";
import { CiCoins1 } from "react-icons/ci";
import Comments from "../comments//comments";

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
              <div className="h-auto max-h-auto md:max-h-[425px] min-h-auto md:min-h-[425px] bg-[var(--advert-list-bg)] text-[var(--foreground)] p-4 relative rounded-lg">
                <img
                  src="https://placehold.co/200x70/000000/FFFFFF"
                  className="absolute bottom-[20px] left-1/2 transform -translate-x-1/2"
                />
                <img
                  src="https://placehold.co/350x350"
                  alt="Game Picture"
                  className="rounded-lg w-full h-full object-cover max-h-auto md:max-h-[394px]"
                />
              </div>
            </div>

            {/* İkinci Kutu: Görsel */}
            <div className="flex-5 p-2">
              <div className="h-auto max-h-auto md:max-h-[425px] min-h-auto md:min-h-[425px] bg-[var(--advert-list-bg)] text-[var(--foreground)] p-6 relative rounded-lg">
                <div className="w-full rounded-lg text-white">
                  <div className="flex bg-[var(--advert-list-bg)] items-center mb-4 p-3 rounded-lg">
                    <img
                      src="https://placehold.co/100"
                      alt="Product Logo"
                      className="w-[80px] h-[80px] mr-4 rounded-lg"
                    />
                    <div>
                      <h2 className="text-lg font-bold">PUBG Mobile 10 UC</h2>
                      <p className="text-gray-400">Tencent Games</p>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-4">Oyuncu ID’nize yüklenir.</p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center space-x-2 bg-[var(--advert-list-bg)] px-2 py-1 rounded-xl">
                      <span>Satıcı: Hesap.com.tr</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-[var(--advert-list-bg)] px-2 py-1 rounded-xl">
                      <span>Bölge: Türkiye</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-[var(--advert-list-bg)] px-2 py-1 rounded-xl">
                      <span>Platform: Apple</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-[var(--advert-list-bg)] px-2 py-1 rounded-xl">
                      <span>Platform: Android</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-[var(--advert-list-bg)] px-2 py-1 rounded-xl">
                      <span>Ürün Tipi: Top-Up</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-[var(--advert-list-bg)] px-2 py-1 rounded-xl">
                      <span>Yükleme Süresi: 0-60 sn</span>
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
              <div className="flex border-b border-gray-700 mb-4">
                <button
                  className={`px-4 py-2 ${
                    activeTab === "aciklama"
                      ? "text-blue-500 border-b-2 border-blue-500"
                      : "text-gray-400"
                  }`}
                  onClick={() => setActiveTab("aciklama")}
                >
                  Açıklama
                </button>
                <button
                  className={`px-4 py-2 ${
                    activeTab === "degerlendirmeler"
                      ? "text-blue-500 border-b-2 border-blue-500"
                      : "text-gray-400"
                  }`}
                  onClick={() => setActiveTab("degerlendirmeler")}
                >
                  Değerlendirmeler
                </button>
                <button
                  className={`px-4 py-2 ${
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

        {/* Üçüncü Kutu: Satın Alma Bilgileri */}
        <div className="flex-2 p-2">
          <div className="h-auto max-h-auto bg-[var(--advert-list-bg)] text-[var(--foreground)] p-2 relative rounded-lg">
            <div className="max-w-sm p-2 rounded-lg">
              <h2 className="text-xl font-bold text-white mb-4">
                Benzer Ürünler
              </h2>
              <div className="space-y-4">
                {products.map((product, index) => (
                  <div key={index} className="flex items-center space-x-4">
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
