"use client";

import React, { useState } from "react";
import { FaCircle } from "react-icons/fa6";
import { FaStar, FaIdCard, FaPhoneAlt } from "react-icons/fa";
import {
  AiTwotoneDislike,
  AiTwotoneLike,
  AiFillSafetyCertificate,
} from "react-icons/ai";
import { FcAdvertising } from "react-icons/fc";
import { MdOutlineDateRange } from "react-icons/md";
import { GiCrown, GiTwoCoins } from "react-icons/gi";
import { RiDiscountPercentFill } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";
import { AiOutlineSafety } from "react-icons/ai";
import Link from "next/link";
import Comments from "../texts/comments";
import AdvertCard from "../advert/advert-card";

const tabs = [
  "Mağaza Aktif İlanlar",
  "Mağaza Satılmış İlanlar",
  "Mağaza Yorumları",
];

const AllAdverts = [
  {
    title: "PUBG Mobile UC",
    price: 149.0,
    viewCount: 300,
    isVitrin: true,
    vitrinText: "POPÜLER",
    vitrinColor: "var(--label1)",
    image: "https://placehold.co/300x300",
    sellerName: "UCMarket",
    sellerImage: "https://placehold.co/50x50",
  },
  {
    title: "Fortnite V-Bucks",
    price: 99.0,
    viewCount: 120,
    isVitrin: false,
    vitrinText: "İNDİRİM",
    vitrinColor: "var(--label2)",
    image: "https://placehold.co/300x300",
    sellerName: "FortShop",
    sellerImage: "https://placehold.co/50x50",
  },
  {
    title: "Minecraft Premium",
    price: 59.0,
    viewCount: 210,
    isVitrin: false,
    vitrinText: "YENİ ÜRÜN",
    vitrinColor: "var(--label3)",
    image: "https://placehold.co/300x300",
    sellerName: "BlockStore",
    sellerImage: "https://placehold.co/50x50",
  },
  {
    title: "Call of Duty CP",
    price: 129.0,
    viewCount: 180,
    isVitrin: false,
    vitrinText: "TAVSİYE",
    vitrinColor: "var(--label4)",
    image: "https://placehold.co/300x300",
    sellerName: "CODMarket",
    sellerImage: "https://placehold.co/50x50",
  },
  {
    title: "Apex Legends Coins",
    price: 89.0,
    viewCount: 95,
    isVitrin: true,
    vitrinText: "ÇOK SATAN",
    vitrinColor: "var(--label5)",
    image: "https://placehold.co/300x300",
    sellerName: "ApexShop",
    sellerImage: "https://placehold.co/50x50",
  },
  {
    title: "Valorant VP",
    price: 79.0,
    viewCount: 160,
    isVitrin: false,
    vitrinText: "EN UCUZ",
    vitrinColor: "var(--label6)",
    image: "https://placehold.co/300x300",
    sellerName: "ValoStore",
    sellerImage: "https://placehold.co/50x50",
  },
  {
    title: "Among Us Skin Paketi",
    price: 19.0,
    viewCount: 75,
    isVitrin: true,
    vitrinText: "HEDİYE",
    vitrinColor: "var(--label7)",
    image: "https://placehold.co/300x300",
    sellerName: "AmongShop",
    sellerImage: "https://placehold.co/50x50",
  },
  {
    title: "Genshin Impact Primogem",
    price: 49.0,
    viewCount: 110,
    isVitrin: false,
    vitrinText: "İNDİRİM",
    vitrinColor: "var(--label8)",
    image: "https://placehold.co/300x300",
    sellerName: "GenshinStore",
    sellerImage: "https://placehold.co/50x50",
  },
  {
    title: "Dota 2 Battle Pass",
    price: 39.0,
    viewCount: 140,
    isVitrin: false,
    vitrinText: "YENİ ÜRÜN",
    vitrinColor: "var(--label9)",
    image: "https://placehold.co/300x300",
    sellerName: "DotaShop",
    sellerImage: "https://placehold.co/50x50",
  },
  {
    title: "CS:GO Prime",
    price: 119.0,
    viewCount: 200,
    isVitrin: true,
    vitrinText: "ÇOK SATAN",
    vitrinColor: "var(--label10)",
    image: "https://placehold.co/300x300",
    sellerName: "CSGOStore",
    sellerImage: "https://placehold.co/50x50",
  },
];

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [rating, setRating] = useState(0);

  return (
    <div className="">
      <div className="full-size-bg-img-profile"></div>
      <div className="flex flex-col lg:flex-row gap-4 container p-4 mx-auto relative top-[-50px]">
        {/* SOL KUTU */}
        <div className="w-full lg:max-w-sm">
          <div className="bg-gradient-to-b from-[color:var(--success)] to-transparent rounded-xl  p-[2px] rounded-xl">
            <div className="flex flex-col items-center bg-[var(--advert-card-bg)] rounded-xl">
              <div className="bg-gradient-to-b from-[color:var(--success)] to-transparent rounded-full p-[2px] relative top-[-74px]">
                <div className="p-4 bg-[var(--advert-card-bg)] rounded-full">
                  <div className="bg-gradient-to-b from-[color:var(--success)] to-transparent rounded-full p-[2px]">
                    <img
                      src="https://placehold.co/100"
                      alt="User Avatar"
                      className="rounded-full w-24 h-24"
                    />
                  </div>
                </div>
              </div>

              <div className="relative top-[-55px] text-center">
                <h2 className="mt-2 font-bold text-xl">User Name K.</h2>
                <div className="flex gap-2 items-center text-sm text-[var(--alert)]">
                  <FaCircle />
                  <p className="">Çevrimdışı (4 gün önce)</p>
                </div>
              </div>

              <p className="text-[var(--label9)] flex items-center justify-between gap-6 py-2 relative top-[-40px]">
                <Link href="#">
                  <IoMdMail className="w-7 h-7" />
                </Link>
                <Link href="#">
                  <FaIdCard className="w-7 h-7" />
                </Link>
                <Link href="#">
                  <FaPhoneAlt className="w-7 h-7" />
                </Link>
              </p>

              <div className="flex gap-2 my-3 relative top-[-20px]">
                <button className="bg-[var(--success)] text-white px-3 py-1 rounded">
                  Mesaj Gönder
                </button>
                <button className="bg-[var(--success)] text-white px-3 py-1 rounded">
                  SMS Gönder
                </button>
              </div>

              <ul className="text-left text-sm p-4 w-full relative top-[-5px]">
                <li className="flex flex-col gap-3 py-1">
                  <div className="flex items-start gap-3">
                    <AiFillSafetyCertificate className="w-12 h-12" />
                    <div>
                      <strong className="">Güvenilir Satıcı</strong>
                      <p className="text-xs">
                        Vitae turpis massa sed egestas sed.
                      </p>
                    </div>
                  </div>
                  <div className="h-[1px] bg-gradient-to-r from-transparent via-[var(--success)] to-transparent" />
                </li>

                <li className="flex flex-col gap-3 py-1">
                  <div className="flex items-start gap-3">
                    <GiCrown className="w-12 h-12" />
                    <div>
                      <strong className="">Uzman Satıcı</strong>
                      <p className="text-xs">
                        Vitae turpis massa sed egestas sed.
                      </p>
                    </div>
                  </div>
                  <div className="h-[1px] bg-gradient-to-r from-transparent via-[var(--success)] to-transparent" />
                </li>

                <li className="flex flex-col gap-3 py-1">
                  <div className="flex items-start gap-3">
                    <GiTwoCoins className="w-12 h-12" />
                    <div>
                      <strong className="">Lorem Ipsum</strong>
                      <p className="text-xs">
                        Vitae turpis massa sed egestas sed.
                      </p>
                    </div>
                  </div>
                  <div className="h-[1px] bg-gradient-to-r from-transparent via-[var(--success)] to-transparent" />
                </li>

                <li className="flex items-start gap-3 py-1">
                  <RiDiscountPercentFill className="w-12 h-12" />
                  <div>
                    <strong className="">Lorem Ipsum</strong>
                    <p className="text-xs">
                      Vitae turpis massa sed egestas sed.
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-3 flex items-center gap-3 w-full flex- itmes-center justify-center py-4 bg-[var(--advert-list-bg)] rounded-b-xl">
                <p>Satıcı Değerlendirme</p>
                <p className="text-[var(--label9)] flex items-center gap-1">
                  <FaStar className="w-6 h-6" /> <FaStar className="w-6 h-6" />{" "}
                  <FaStar className="w-6 h-6" /> <FaStar className="w-6 h-6" />{" "}
                  <FaStar className=" w-6 h-6 text-[var(--background)]" />
                  4.2
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SAĞ KUTU */}
        <div className="flex-1">
          {/* 4 KUTU */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div className="bg-[var(--label2-light)] border-1 border-[var(--label2)] p-4 rounded-xl flex items-center gap-2">
              <AiTwotoneLike className="text-[var(--label2)] w-12 h-12" />
              <div>
                <p>Başarılı Satış</p>
                <h3 className="text-md font-bold">135</h3>
              </div>
            </div>
            <div className="bg-[var(--alert-light)] border-1 border-[var(--alert)] p-4 rounded-xl flex items-center gap-2">
              <AiTwotoneDislike className="text-[var(--alert)] w-12 h-12" />
              <div>
                <p>Başarısız Satış</p>
                <h3 className="text-md font-bold">2</h3>
              </div>
            </div>
            <div className="bg-[var(--label7-light)] border-1 border-[var(--label7)] p-4 rounded-xl flex items-center gap-2">
              <FcAdvertising className="text-[var(--label7)] w-12 h-12" />
              <div>
                <p>Toplam Aktif İlan</p>
                <h3 className="text-md font-bold">7</h3>
              </div>
            </div>
            <div className="bg-[var(--label9-light)] border-1 border-[var(--label9)] p-4 rounded-xl flex items-center gap-2">
              <MdOutlineDateRange className="text-[var(--label9)] w-12 h-12" />
              <div>
                <p>Kayıt Tarihi</p>
                <h3 className="text-md font-bold">11-12-2022</h3>
              </div>
            </div>
          </div>

          {/* TABS */}
          <div className="flex w-full flex-wrap md:flex-nowrap justify-between gap-2 mb-4">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-10 py-2 w-full md:w-full rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? "bg-[var(--success)] text-white"
                    : "bg-[var(--advert-list-bg)] text-[var(--text-gray)] hover:bg-[var(--label10)] hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="mt-4 bg-[var(--advert-list-bg)] p-0 md:p-2 rounded-xl">
            {activeTab === 0 && (
              <div>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
                  {AllAdverts.map((game, index) => (
                    <div key={index} className="p-0 md:p-2">
                      <Link href="#">
                        <div className="p-1">
                          <div className="relative overflow-hidden rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                            <AdvertCard data={game} link="/advert-detail" />
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === 1 && (
              <div>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
                  {AllAdverts.map((game, index) => (
                    <div key={index} className="p-0 md:p-2">
                      <Link href="#">
                        <div className="p-1">
                          <div className="relative overflow-hidden rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                            <div className="w-full h-full absolute rounded-xl top-0 left-0 bg-[#ff000087] z-50 flex items-center justify-center font-bold text-4xl">
                              SATILDI
                            </div>
                            <div className="absolute top-2 right-2">
                              <AiOutlineSafety className="w-8 h-8" />
                            </div>
                            <AdvertCard data={game} link="/advert-detail" />
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === 2 && (
              <div id="store-comments">
                <div className="flex flex-col rounded-xl">
                  <div className="flex flex-col gap-6 p-4 md:flex-row">
                    {/* Sol Kısım - Yıldız ve Buton */}
                    <div className="md:w-2/3 w-full">
                      <textarea
                        placeholder="Yorumunuzu buraya yazın..."
                        className="w-full h-full p-3 rounded-md bg-[var(--background)] text-[var(--text-gray)] resize-none min-h-[96px] md:min-h-full"
                      ></textarea>
                    </div>

                    {/* Sağ Kısım - Textarea */}
                    <div className="md:w-1/3 w-full flex-1 flex flex-col justify-between">
                      <div className="flex items-center gap-2">
                        <h6 className="font-semibold">Puan Veriniz</h6>
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              onClick={() => setRating(star)}
                              className="focus:outline-none"
                            >
                              <FaStar
                                className={`w-4 h-4 ${
                                  rating >= star
                                    ? "text-[var(--label9)]"
                                    : "text-white/20"
                                }`}
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                      <button className="mt-4 p-4 bg-[var(--success)] text-white rounded-md">
                        Değerlendirmeyi Gönder
                      </button>
                    </div>
                  </div>

                  <Comments />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTabs;
