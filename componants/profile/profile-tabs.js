"use client";

import React, { useState } from "react";
import { FaCircle } from "react-icons/fa6";
import { HiPaperAirplane } from "react-icons/hi2";
import { GiWallet } from "react-icons/gi";
import { AiFillCodeSandboxSquare } from "react-icons/ai";
import { IoRocket } from "react-icons/io5";

import { MdAccountCircle } from "react-icons/md";

import MyAccount from "./my-account/tab";

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState("hesabim");

  return (
    <div>
      <div className="full-size-bg-img-user"></div>
      <div className="flex flex-col lg:flex-row gap-4 container p-4 mx-auto">
        {/* SOL KUTU */}
        <div className="w-full lg:max-w-sm relative top-[-70px]">
          <div className="bg-gradient-to-b from-[color:var(--success)] to-transparent rounded-xl p-[2px]">
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
                  <p>Çevrimdışı (4 gün önce)</p>
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
          {activeTab === "hesabim" && (
            <MyAccount />
          )}
          {activeTab === "mesajlarim" && (
            <div className="p-4">Mesajlarım burada listelenecek.</div>
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
