"use client";

import React, { useState, useEffect } from "react";
import {
  FaRegHeart,
  FaShareAlt,
  FaCheckCircle,
  FaQuestionCircle,
  FaEnvelope,
  FaTimes,
} from "react-icons/fa";
import { MdVerified, MdSecurity } from "react-icons/md";
import { IoMdFlash } from "react-icons/io";
import { FaStar, FaBolt } from "react-icons/fa";
import Tabs from "./advert-detail-tabs";
import { IoMdChatbubbles } from "react-icons/io";

const product = {
  image: "https://placehold.co/400x250",
  title: "PUBG Mobile 50-60 SKIN Random Hesap | 7/24 Oto",
  rating: 9.7,
  reviews: 5519,
  questions: 12,
  description:
    "25000+ Başarılı İşlem ve 9.9/10 Memnuniyet Güvencesiyle. Ürün PUBG Mobile hesabı olarak teslim edilir. Hesap, E-posta : şifre olarak teslim edilir. Tüm hesaplar 50 skin ve üzeri hesaplardır. Boş hesap yoktur, tüm hesaplar verilen garantilerle karşılanmaktadır.",
  features: ["Kimlik Onaylı Satıcı", "Otomatik Teslimat", "Garantili Ürün"],
  highlight: [
    "Bu satıcı kimliğini doğrulamış ve kimlik onaylı güvenli satıcı rozetine sahiptir.",
    "Satın alacağınız bu ilan otomatik teslimat ile hemen teslim edilecektir.",
  ],
  timeLeft: "Kalan süre : 37 gün 1 saat 25 dakika 2 saniye",
  price: "99,90 ₺",
  stock: 1,
};

const similarAds = [
  {
    image: "https://placehold.co/120x80",
    title: "Steam 99.99...",
    price: "20.00 TL",
  },
  {
    image: "https://placehold.co/120x80",
    title: "PUBG Mobile...",
    price: "79.90 TL",
  },
  {
    image: "https://placehold.co/120x80",
    title: "PUBG Mobile...",
    price: "15.00 TL",
  },
  {
    image: "https://placehold.co/120x80",
    title: "Valorant...",
    price: "24.90 TL",
  },
];

const seller = {
  name: "LeaoMedia",
  avatar: "https://placehold.co/60x60",
  stats: 26385,
  badges: [
    {
      icon: <MdVerified className="text-green-400 w-5 h-5" />,
      label: "Kimlik Onaylı",
    },
    {
      icon: <IoMdFlash className="text-yellow-400 w-5 h-5" />,
      label: "Hızlı Teslimat",
    },
  ],
};

const infoBoxes = [
  {
    icon: <FaCheckCircle className="w-6 h-6" />,
    title: "itemSatış Güvenli Alışveriş",
    desc: "itemSatış alışveriş süreci sona erene kadar ücretinizi güvence altına almaktadır. Alışveriş sonrası süreçte iade, teknik destek gibi konulardan ürünün satıcısı sorumludur.",
    color: "--success",
  },
  {
    icon: <FaQuestionCircle className="w-6 h-6" />,
    title: "Yardıma mı ihtiyacınız var?",
    desc: "Buraya tıklayarak yardım merkezi sayfamıza ulaşabilirsiniz. Üyelerimiz tarafından en sık sorulan sorular yardım merkezinde listelenmektedir.",
    color: "--alert",
  },
];

export default function AdvertDetailFull() {
  // Initialize state with default values
  const [mounted, setMounted] = useState(false);
  const [showSmsModal, setShowSmsModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Only run client-side code after mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  // Modal içerikleri
  const modalContents = {
    kimlikOnaylı: {
      title: "Kimlik Onaylı Satıcı",
      icon: <MdVerified className="text-green-400 w-8 h-8" />,
      content: `itemSatış üzerinde kimlik ve telefon bilgilerini ve selfie doğrulaması yapmış kullanıcılara kimlik onaylı satıcı rozeti verilmektedir.

Bu bilgilerini doğrulayan satıcıların dolandırıcılık yapma ihtimalleri daha düşüktür. Önceki bir dolandırıcılık durumunda tarafımıza gelecek herhangi bir resmi tebligatta dolandırıcı kişinin tüm kişisel ve erişim bilgilerini savcılık ile paylaşmaktayız. Kimlik bilgileri onaylanmış kullanıcılara bu yüzden dolandırıcılık denemesinde bulunmamaz.

Bir kez dolandırıcılığa kalkışmış kullanıcıların kimlik bilgileri sistemden yasaklanır, aynı kişiler farklı üyeliklerle siteye kayıt olamazlar.`
    },
    otomatikTeslimat: {
      title: "Otomatik Teslimat Sistemi",
      icon: <FaBolt className="text-yellow-400 w-8 h-8" />,
      content: `Bu ilanı satın aldığınızda ürün otomatik olarak ekli stoklardan teslim edilecektir.

Bildirimler ve mesajlar sayfasından teslim edilen ürüne erişebilirsiniz. Ürünle ilgili sorun olması durumunda video kayıt alarak canlı desteğe veya satıcınıza ulaşmanız gerekmektedir.`
    },
    garantiliUrun: {
      title: "Garantili Ürün",
      icon: <MdSecurity className="text-orange-400 w-8 h-8" />,
      content: `Bu ürün satıcı tarafından garanti kapsamında sunulmaktadır.

Ürünle ilgili herhangi bir sorun yaşamanız durumunda satıcı ile iletişime geçerek çözüm talep edebilirsiniz. Garanti süresi ve koşulları ürün açıklamasında belirtilmiştir.`
    }
  };

  const openInfoModal = (type) => {
    setModalContent(modalContents[type]);
    setShowInfoModal(true);
  };

  // Geri sayım fonksiyonu
  useEffect(() => {
    if (!mounted) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [mounted]);

  // Don't render anything until mounted
  if (!mounted) {
    return <div className="animate-pulse bg-gray-700 h-96 rounded-lg"></div>;
  }

  return (
    <div className="container mx-auto text-[var(--foreground)] p-4">
      <div className="flex items-center space-x-4 mb-4">
        <h2
          style={{ color: "var(--foreground)" }}
          className="text-[30px] py-2 font-bold"
        >
          Eget velit aliquet sagittis idEget velit aliquet sagittis id
        </h2>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
      </div>
      {/* Üst Bilgi */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sol: Ürün görseli ve detay */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="rounded-xl p-0 flex items-center justify-center w-full md:min-w-[320px] md:max-w-[400px]">
              <img
                src={product.image}
                alt="product"
                className="rounded-xl w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <div className="text-xl font-bold">{product.title}</div>
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold">
                    {product.rating}
                  </span>
                  <div className="flex text-yellow-400">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                  <span className="text-[var(--text-gray)] text-sm">
                    {product.reviews} Değerlendirme
                  </span>
                  <span className="text-[var(--text-gray)] text-sm">
                    • {product.questions} Soru & Cevap
                  </span>
                </div>
              </div>
              <div className="text-sm text-[var(--text-gray)] mt-1">
                {product.description}
              </div>
              <div className="flex gap-2 flex-wrap mt-3 pt-3 border-t border-gray-600">
                {product.features.map((f, i) => {
                  const gradients = [
                    'bg-gradient-to-r from-green-500 to-teal-500',
                    'bg-gradient-to-r from-blue-500 to-purple-500',
                    'bg-gradient-to-r from-orange-500 to-red-500',
                    'bg-gradient-to-r from-pink-500 to-rose-500'
                  ];
                  const icons = [
                    <MdVerified className="text-white" />,
                    <FaBolt className="text-white" />,
                    <MdSecurity className="text-white" />,
                    <FaStar className="text-white" />
                  ];
                  const modalTypes = ['kimlikOnaylı', 'otomatikTeslimat', 'garantiliUrun'];
                  
                  return (
                    <button
                      key={i}
                      onClick={() => i < 3 ? openInfoModal(modalTypes[i]) : null}
                      className={`${gradients[i % gradients.length]} px-4 py-2 rounded-full text-xs flex items-center gap-2 text-white font-medium hover:opacity-80 transition-opacity ${i < 3 ? 'cursor-pointer' : 'cursor-default'}`}
                    >
                      {icons[i % icons.length]} {f}
                    </button>
                  );
                })}
              </div>
              <div className="mt-2 text-sm">
                <div className="font-semibold">
                  İlanın Öne Çıkan Özellikleri
                </div>
                <ul className="list-disc ml-6">
                  {product.highlight.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-2 text-xs text-[var(--text-gray)]">
                Kalan süre : {timeLeft.days} gün {timeLeft.hours} saat {timeLeft.minutes} dakika {timeLeft.seconds} saniye
              </div>
            </div>
          </div>
          {/* Benzer İlanlar */}
          <div className="mt-4 bg-[var(--profile-tab-bg)] border border-gray-700 rounded-md p-2">
            <div className="font-semibold mb-2">Satıcının Benzer İlanları</div>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {similarAds.map((ad, i) => (
                <div
                  key={i}
                  className="bg-[var(--profile-input)] rounded-lg min-w-[160px] p-2 flex flex-row gap-2 items-center"
                >
                  <div className="w-25 h-15">
                    <img
                      src={ad.image}
                      alt="ad"
                      className="rounded w-full h-full object-cover mb-2"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="text-xs font-semibold text-center mb-1">
                      {ad.title}
                    </div>
                    <div className="text-yellow-400 font-bold">{ad.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Tabs />
        </div>
        {/* Sağ: Satıcı ve fiyat kutusu */}
        <div className="bg-[var(--profile-tab-bg)] w-full md:w-[340px] rounded-sm flex flex-col">
          <div className="bg-[var(--success)] text-white text-center py-1 px-4 font-semibold text-xs rounded-t-sm">
            SATICI BİLGİLERİ
          </div>
          <div className="rounded-xl p-4 flex flex-col gap-3 pb-0">
            <div className="flex items-center gap-3">
              <img
                src={seller.avatar}
                alt="seller"
                className="rounded-sm w-12 h-12"
              />
              <div className="flex justify-between w-full">
                <div>
                  <div className="font-bold text-sm">{seller.name}</div>
                                  <div className="flex gap-1 mt-1">
                  <button 
                    onClick={() => openInfoModal('kimlikOnaylı')}
                    className="text-xs hover:opacity-80 transition-opacity"
                  >
                    <MdVerified className="text-green-400 w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => openInfoModal('otomatikTeslimat')}
                    className="text-xs hover:opacity-80 transition-opacity"
                  >
                    <IoMdFlash className="text-yellow-400 w-5 h-5" />
                  </button>
                </div>
                </div>
                <div className="text-xs text-[var(--text-gray)] mt-1 text-right flex flex-col justify-between">
                  <span className="font-bold text-[var(--foreground)] text-2xl">
                    {seller.stats}
                  </span>
                  Başarılı İşlem:{" "}
                </div>
              </div>
            </div>
            <div className="flex gap-2 mt-2">
              <button className="flex-1 bg-[var(--label9)] text-white py-2 rounded font-semibold hover:opacity-80 transition-opacity">
                Satıcı Profili
              </button>
              <button className="bg-[var(--label9)] text-white py-2 px-3 rounded font-semibold flex items-center justify-center hover:opacity-80 transition-opacity">
                <IoMdChatbubbles />
              </button>
              <button 
                onClick={() => setShowSmsModal(true)}
                className="flex-1 bg-[var(--label9)] text-white py-2 rounded font-semibold hover:opacity-80 transition-opacity"
              >
                SMS
              </button>
            </div>
            <div className="flex flex-row justify-between items-center gap-3 mt-3 pt-3">
              <div className="text-left ">
                <div className="text-2xl font-bold text-green-400 mb-1">
                  {product.price}
                </div>
                <div className="text-sm text-[var(--text-gray)]">İlan Ücreti</div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-[var(--foreground)]">
                  {product.stock}
                </div>
                <div className="text-sm text-[var(--text-gray)]">Stok Sayısı</div>
              </div>
            </div>
            <button className="bg-[var(--success)] text-white py-2 rounded font-bold mt-2 hover:opacity-80 transition-opacity">
              Satın Al
            </button>
            <button className="bg-[var(--primary)] text-white py-2 rounded font-bold hover:opacity-80 transition-opacity">
              Sepete Ekle
            </button>
            <div className="flex items-center justify-center my-2">
              <div className="flex-1 h-px bg-gray-600"></div>
              <span className="px-3 text-sm text-[var(--text-gray)]">veya</span>
              <div className="flex-1 h-px bg-gray-600"></div>
            </div>
            <div className="flex gap-2 mt-2">
              <button className="flex-1 bg-[var(--primary)] text-white py-2 rounded font-semibold flex items-center justify-center gap-2 hover:opacity-80 transition-opacity">
                <FaRegHeart /> Favori
              </button>
              <button className="flex-1 bg-[var(--primary)] text-white py-2 rounded font-semibold flex items-center justify-center gap-2 hover:opacity-80 transition-opacity">
                <FaShareAlt /> Paylaş
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-4 p-4 my-2">
            {/* Güvenli alışveriş kutuları */}
            {infoBoxes.map((box, i) => (
              <div
                key={i}
                className={`bg-[var(--profile-input)] rounded-xl p-4 flex gap-3 items-start relative`}
              >
                <div
                  className={`p-2 bg-[var(${box.color})] rounded-full flex items-center justify-center absolute top-[-5px] left-[-5px]`}
                >
                  <div className="text-white">{box.icon}</div>
                </div>
                <div>
                  <div className="font-bold mb-1 ml-6">{box.title}</div>
                  <div className="text-xs text-[var(--text-gray)]">{box.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SMS Modal */}
      {showSmsModal && (
        <div 
          className="fixed inset-0 bg-[#0000007d] flex items-center justify-center z-50 p-4"
          onClick={() => setShowSmsModal(false)}
        >
          <div 
            className="bg-[var(--advert-card-bg)] rounded-xl p-6 w-full max-w-lg mx-4 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowSmsModal(false)}
              className="text-[var(--text-gray)] hover:text-white absolute top-4 right-4 z-10"
            >
              <FaTimes className="w-5 h-5" />
            </button>
            <div className="mb-6">
              <h3 className="text-[var(--foreground)] text-center font-medium">Satıcıya SMS Gönder</h3>
            </div>
            
            <p className="text-[var(--text-gray)] text-sm mb-6 text-center leading-relaxed">
              Bu panel üzerinden ilan sahibine SMS olarak mesaj gönderebilirsiniz. Gönderilen SMS mesajında telefon numaranız paylaşılmamaktadır.
            </p>

            <div className="mb-4">
              <label className="block text-[var(--text-gray)] text-sm mb-2 font-medium">Şablon Seçimi</label>
              <select className="w-full bg-[var(--profile-input)] text-[var(--foreground)] p-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-500">
                <option>İlanınız ile ilgileniyorum. Teslimat süresini hızlandırma</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-[var(--text-gray)] text-sm mb-2 font-medium">Gönderilecek Mesaj</label>
              <textarea 
                className="w-full bg-[var(--profile-input)] text-[var(--foreground)] p-3 rounded-lg border-0 h-28 resize-none focus:ring-2 focus:ring-blue-500 text-sm leading-relaxed"
                defaultValue="★ PUBG Mobile 50-60 SKIN Random Hesap | 7/24 Oto adlı ilanınız için kullanıcısından yeni bir mesajınız var! İlanınız ile ilgileniyorum. Teslimat süresini hızlandırma şansınız var mı? Lütfen benimle itemsatış.com üzerinden iletişime geçin."
              />
            </div>

            <div className="flex items-start mb-6 gap-3">
              <input type="checkbox" id="smsRules" className="mt-1 !w-4 !h-4" />
              <label htmlFor="smsRules" className="text-[var(--text-gray)] text-sm leading-relaxed">
                SMS Gönderim Kurallarını okudum & kabul ediyorum.
              </label>
            </div>

            <button className="w-full bg-[var(--success)] hover:bg-[var(--primary)] text-white py-3 rounded-lg font-medium transition-colors">
              SMS Gönder (2₺)
            </button>
          </div>
        </div>
      )}

      {/* Info Modal */}
      {showInfoModal && modalContent && (
        <div 
          className="fixed inset-0 bg-[#0000007d] bg-opacity-30 flex items-center justify-center z-50 p-4"
          onClick={() => setShowInfoModal(false)}
        >
          <div 
            className="bg-[#4a5568] rounded-xl p-6 w-full max-w-lg mx-4 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowInfoModal(false)}
              className="text-[var(--text-gray)] hover:text-[var(--foreground)] absolute top-4 right-4 z-10"
            >
              <FaTimes className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-3 mb-6">
              {modalContent.icon}
              <h3 className="text-white font-medium text-lg">{modalContent.title}</h3>
            </div>
            
            <div className="text-[var(--text-gray)] text-sm leading-relaxed whitespace-pre-line">
              {modalContent.content}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
