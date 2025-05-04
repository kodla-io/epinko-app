"use client";

import React, { useState } from "react";
import { HiPaperAirplane } from "react-icons/hi2";
import { GiWallet, GiRibbonMedal } from "react-icons/gi";
import { AiFillCodeSandboxSquare } from "react-icons/ai";
import { IoRocket } from "react-icons/io5";
import Link from "next/link";
import { MdAccountCircle } from "react-icons/md";
import { FaCircle, FaCamera } from "react-icons/fa";
import { AiTwotoneSafetyCertificate } from "react-icons/ai";

import MyAccount from "./my-account/tab";
import Messages from "./messages/tab";

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState("hesabim");

  return (
    <div>
      <div className="full-size-bg-img-user"></div>
      <div className="flex flex-col lg:flex-row gap-4 container p-4 mx-auto">
        {/* SOL KUTU */}
        <div className="w-full lg:max-w-sm relative top-[-70px]">
          <div className="bg-gradient-to-b from-[color:var(--success)] to-transparent rounded-xl p-[2px]">
            <div className="flex flex-col bg-[var(--bg-info-box)] rounded-xl">
              <div className="flex justify-start items-center p-4 gap-2 w-full">
                <div className="bg-gradient-to-b from-[color:var(--success)] to-transparent rounded-full p-[2px]">
                  <div className="p-2 bg-[var(--bg-info-box)] rounded-full relative">
                    <div className="rounded-full relative">
                      <Link href="/">
                        <img
                          src="https://placehold.co/100"
                          alt="User Avatar"
                          className="rounded-full w-16 h-16"
                        />
                      </Link>
                      <Link
                        href="#"
                        className="absolute bottom-0 bg-gray-500 rounded-full p-1"
                      >
                        <FaCamera className="w-3 h-3" />
                      </Link>
                    </div>
                    <div
                      href="#"
                      className="absolute top-0 right-0 p-1"
                    >
                      <FaCircle className="w-3 h-3 text-[var(--success)]" />
                    </div>
                  </div>
                </div>

                <div className="text-start">
                  <h2 className="font-bold text-md w-full flex justify-between">
                    User Name <AiTwotoneSafetyCertificate className="w-6 h-6" />
                  </h2>
                  <p className="max-w-[220px] truncate whitespace-nowrap overflow-hidden">
                    usernameepinko@gmail.com
                  </p>
                </div>
              </div>

              <ul className="w-full text-left mt-4 text-white space-y-0 px-4 pb-4">
                {[
                  {
                    key: "hesabim",
                    icon: <MdAccountCircle className="w-8 h-8" />,
                    label: "Hesabım",
                  },
                  {
                    key: "mesajlarim",
                    icon: <HiPaperAirplane className="w-8 h-8" />,
                    label: "Mesajlarım",
                  },
                  {
                    key: "ilanlarim",
                    icon: <AiFillCodeSandboxSquare className="w-8 h-8" />,
                    label: "İlanlarım",
                  },
                  {
                    key: "siparislerim",
                    icon: <IoRocket className="w-8 h-8" />,
                    label: "Siparişlerim",
                  },
                ].map((item, index, arr) => (
                  <React.Fragment key={item.key}>
                    <li
                      onClick={() => setActiveTab(item.key)}
                      className={`relative flex items-center gap-2 cursor-pointer p-2 pl-3 rounded transition-all group
          ${
            activeTab === item.key
              ? "text-[var(--success)] font-semibold"
              : "hover:bg-[var(--success)]/10"
          }
        `}
                    >
                      {item.icon}
                      {item.label}

                      {/* Sol gradient çizgisi */}
                      {activeTab === item.key && (
                        <span
                          className="absolute left-0 top-0 h-full w-[5px] rounded-r"
                          style={{
                            background:
                              "linear-gradient(to right, var(--success), transparent)",
                          }}
                        />
                      )}
                    </li>

                    {/* İki <li> arası çizgi */}
                    {index < arr.length - 1 && (
                      <div className="h-[1px] bg-gradient-to-r from-transparent via-[var(--success)] to-transparent my-1" />
                    )}
                  </React.Fragment>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* SAĞ KUTU */}
        <div className="flex-1">
          {/* 4 KUTU */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div className="bg-[var(--bg-info-box)] border-1 border-[var(--label2)] p-4 rounded-xl flex items-center gap-2">
              <GiWallet className="text-[var(--label2)] w-12 h-12" />
              <div>
                <p>Hesap Bakiyesi</p>
                <h3 className="text-md font-bold">1999,99₺</h3>
              </div>
            </div>
            <div className="bg-[var(--bg-info-box)] border-1 border-[var(--alert)] p-4 rounded-xl flex items-center gap-2">
              <HiPaperAirplane className="text-[var(--alert)] w-12 h-12" />
              <div>
                <p>Yeni Mesaj</p>
                <h3 className="text-md font-bold">2</h3>
              </div>
            </div>
            <div className="bg-[var(--bg-info-box)] border-1 border-[var(--label7)] p-4 rounded-xl flex items-center gap-2">
              <AiFillCodeSandboxSquare className="text-[var(--label7)] w-12 h-12" />
              <div>
                <p>Yeni Sipariş</p>
                <h3 className="text-md font-bold">7</h3>
              </div>
            </div>
            <div className="bg-[var(--bg-info-box)] border-1 border-[var(--label9)] p-4 rounded-xl flex items-center gap-2">
              <IoRocket className="text-[var(--label9)] w-12 h-12" />
              <div>
                <p>Toplam Kazanç</p>
                <h3 className="text-md font-bold">999,99₺</h3>
              </div>
            </div>
          </div>

          {/* TAB CONTENTS */}
          {activeTab === "hesabim" && <MyAccount />}
          {activeTab === "mesajlarim" && (
            <div className=""><Messages /></div>
          )}
          {activeTab === "ilanlarim" && (
            <div className="p-4">İlanlarım burada görünecek.</div>
          )}
          {activeTab === "siparislerim" && (
            <div className="p-4">Sipariş geçmişi burada olacak.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileTabs;
