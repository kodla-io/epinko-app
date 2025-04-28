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

const tabs = [
  "Mağaza Aktif İlanlar",
  "Mağaza Satılmış İlanlar",
  "Mağaza Yorumları",
];

const AllAdverts = [
  { title: "PUBG Mobile", isVitrin: true, vitrinColor: "var(--label1)" },
  { title: "Fortnite", isVitrin: false, vitrinColor: "var(--label1)" },
  { title: "Minecraft", isVitrin: false, vitrinColor: "var(--label2)" },
  { title: "Call of Duty", isVitrin: false, vitrinColor: "var(--label1)" },
  { title: "Apex Legends", isVitrin: true, vitrinColor: "var(--label3)" },
  { title: "Valorant", isVitrin: false, vitrinColor: "var(--label1)" },
  { title: "Among Us", isVitrin: true, vitrinColor: "var(--label4)" },
  { title: "Genshin Impact", isVitrin: false, vitrinColor: "var(--label1)" },
  { title: "Dota 2", isVitrin: false, vitrinColor: "var(--label4)" },
  { title: "CS:GO", isVitrin: true, vitrinColor: "var(--label6)" },
  { title: "Rocket League", isVitrin: true, vitrinColor: "var(--label1)" },
  { title: "Overwatch", isVitrin: false, vitrinColor: "var(--label7)" },
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
            <div className="flex flex-col items-center bg-[var(--bg-info-box)] rounded-xl">
              <div className="bg-gradient-to-b from-[color:var(--success)] to-transparent rounded-full p-[2px] relative top-[-74px]">
                <div className="p-4 bg-[var(--bg-info-box)] rounded-full">
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
                <button className="bg-[var(--primary)] px-3 py-1 rounded">
                  Mesaj Gönder
                </button>
                <button className="bg-[var(--primary)] px-3 py-1 rounded">
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
            <div className="bg-[var(--bg-info-box)] border-1 border-[var(--label2)] p-4 rounded-xl flex items-center gap-2">
              <AiTwotoneLike className="text-[var(--label2)] w-12 h-12" />
              <div>
                <p>Başarılı Satış</p>
                <h3 className="text-md font-bold">135</h3>
              </div>
            </div>
            <div className="bg-[var(--bg-info-box)] border-1 border-[var(--alert)] p-4 rounded-xl flex items-center gap-2">
              <AiTwotoneDislike className="text-[var(--alert)] w-12 h-12" />
              <div>
                <p>Başarısız Satış</p>
                <h3 className="text-md font-bold">2</h3>
              </div>
            </div>
            <div className="bg-[var(--bg-info-box)] border-1 border-[var(--label7)] p-4 rounded-xl flex items-center gap-2">
              <FcAdvertising className="text-[var(--label7)] w-12 h-12" />
              <div>
                <p>Toplam Aktif İlan</p>
                <h3 className="text-md font-bold">7</h3>
              </div>
            </div>
            <div className="bg-[var(--bg-info-box)] border-1 border-[var(--label9)] p-4 rounded-xl flex items-center gap-2">
              <MdOutlineDateRange className="text-[var(--label9)] w-12 h-12" />
              <div>
                <p>Kayıt Tarihi</p>
                <h3 className="text-md font-bold">11-12-2022</h3>
              </div>
            </div>
          </div>

          {/* TABS */}
          <div className="flex w-full flex-wrap md:flex-nowrap justify-around gap-2 mb-4">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-10 py-2 w-full md:w-auto rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-blue-500"
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
                          <div className="relative min-h-[300px] max-h-[300px] overflow-hidden rounded-xl">
                            {game.isVitrin && (
                              <span
                                className="absolute top-[75px] left-[-21px] text-white py-[2px] px-[30px] text-xs font-bold transform -rotate-45 origin-top-left"
                                style={{ backgroundColor: game.vitrinColor }}
                              >
                                VİTRİN İLANI
                              </span>
                            )}
                            <div className="absolute top-2 right-2">
                              <AiOutlineSafety className="w-8 h-8" />
                            </div>
                            <img
                              src="https://placehold.co/200x300"
                              alt={`Card ${index}`}
                              className="w-full h-full object-cover min-h-[300px] max-h-[300px] bg-gradient-to-tl"
                            />
                            <div
                              className="text-white absolute bottom-0 p-2 w-full"
                              style={{
                                backdropFilter: "blur(4px)",
                              }}
                            >
                              <img
                                src="https://placehold.co/200x70/000000/FFFFFF"
                                className="relative bottom-[5px] left-1/2 transform -translate-x-1/2 w-[70%] md:w-[80%]"
                              />
                              <h3 className="text-md font-bold clamp-1">
                                {game.title}
                              </h3>
                              <div className="flex justify-between items-center mt-2">
                                <div className="flex items-center">
                                  <img
                                    src="https://placehold.co/50x50"
                                    alt="Seller"
                                    className="w-8 h-8 rounded-full"
                                  />
                                  <div className="ml-2">
                                    <p className="text-[8px] text-gray-400">
                                      GÜVENİLİR SATICI
                                    </p>
                                  </div>
                                </div>
                                <div className="text-md font-bold text-yellow-400">
                                  199.90₺
                                </div>
                              </div>
                            </div>
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
                          <div className="relative min-h-[300px] max-h-[300px] overflow-hidden rounded-xl">
                            <div className="w-full h-full absolute rounded-xl top-0 left-0 bg-[#ff000087] z-50 flex items-center justify-center font-bold text-4xl">
                              SATILDI
                            </div>
                            {game.isVitrin && (
                              <span
                                className="absolute top-[75px] left-[-21px] text-white py-[2px] px-[30px] text-xs font-bold transform -rotate-45 origin-top-left"
                                style={{ backgroundColor: game.vitrinColor }}
                              >
                                VİTRİN İLANI
                              </span>
                            )}
                            <div className="absolute top-2 right-2">
                              <AiOutlineSafety className="w-8 h-8" />
                            </div>
                            <img
                              src="https://placehold.co/200x300"
                              alt={`Card ${index}`}
                              className="w-full h-full object-cover min-h-[300px] max-h-[300px] bg-gradient-to-tl"
                            />
                            <div
                              className="text-white absolute bottom-0 p-2 w-full"
                              style={{
                                backdropFilter: "blur(4px)",
                              }}
                            >
                              <img
                                src="https://placehold.co/200x70/000000/FFFFFF"
                                className="relative bottom-[5px] left-1/2 transform -translate-x-1/2 w-[70%] md:w-[80%]"
                              />
                              <h3 className="text-md font-bold clamp-1">
                                {game.title}
                              </h3>
                              <div className="flex justify-between items-center mt-2">
                                <div className="flex items-center">
                                  <img
                                    src="https://placehold.co/50x50"
                                    alt="Seller"
                                    className="w-8 h-8 rounded-full"
                                  />
                                  <div className="ml-2">
                                    <p className="text-[8px] text-gray-400">
                                      GÜVENİLİR SATICI
                                    </p>
                                  </div>
                                </div>
                                <div className="text-md font-bold text-yellow-400">
                                  199.90₺
                                </div>
                              </div>
                            </div>
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
                        className="w-full h-full p-3 rounded-md bg-white/10 text-white resize-none min-h-[96px] md:min-h-full"
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
                                    ? "text-yellow-400"
                                    : "text-white/20"
                                }`}
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                      <button className="mt-4 p-4 bg-[var(--success)] rounded-md">
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
