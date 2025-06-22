"use client";

import React, { useState, useRef, useEffect } from "react";
import { HiPaperAirplane } from "react-icons/hi2";
import { GiWallet } from "react-icons/gi";
import {
  AiFillCodeSandboxSquare,
  AiTwotoneSafetyCertificate,
} from "react-icons/ai";
import { IoRocket } from "react-icons/io5";
import Link from "next/link";
import { FaCircle, FaCamera, FaWallet } from "react-icons/fa";

import MyAccount from "./my-account/tab";
import Security from "./my-account/security/form";
import Billing from "./billing/form";
import Messages from "./messages/tab";
import MyAdvertsTable from "./my-adverts/table";
import WalletHistory from "./wallet-history/table";
import BankAccounts from "./bank-accounts/table";
import HelpRequests from "./help-requests/tabs";
import Transactions from "./transactions/table";
import PasswordChange from "./password-change/form";
import Verification from "./verification/cards";
import EntryLogs from "./entry-logs/table";
import Earnings from "./earnings/list";
import Refunds from "./refunds/table";
import NotificationsList from "./notifications/list";
import ReferenceSystem from "./reference-system/sections";
import MyOrders from "./my-orders/list";
import TopUpBalance from "./top-up-balance/section";
import CheckCash from "./check-cash/list";
import AdvertOrders from "./advert-orders/section";
import IncomingOrders from "./incoming-orders/list";
import StreamerPanel from "./streamer-panel/form";

import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import dynamic from "next/dynamic";

const Player = dynamic(
  () => import("@lordicon/react").then((mod) => mod.Player),
  {
    ssr: false,
  }
);

import user from "../../src/assets/animations/account.json";
import message from "../../src/assets/animations/message.json";
import adverts from "../../src/assets/animations/Adverts.json";
import balanceHistory from "../../src/assets/animations/EarnHistory.json";
import bank from "../../src/assets/animations/Bank.json";
import help from "../../src/assets/animations/Help.json";
import transactions from "../../src/assets/animations/Transactions.json";
import passwordChange from "../../src/assets/animations/PasswordChange.json";
import verification from "../../src/assets/animations/Verification.json";
import logInHistory from "../../src/assets/animations/LogInHistory.json";
import earnings from "../../src/assets/animations/Earnings.json";
import refunds from "../../src/assets/animations/Refunds.json";
import notifications from "../../src/assets/animations/Notifications.json";
import reference from "../../src/assets/animations/Reference.json";
import order from "../../src/assets/animations/Order.json";
import addBalance from "../../src/assets/animations/balanceHistory.json";
import checkCash from "../../src/assets/animations/CheckCash.json";
import stream from "../../src/assets/animations/stream.json";
// import advertOrders from "../../src/assets/animations/Adverts.json";
// import incomingOrders from "../../src/assets/animations/Adverts.json";

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState("personal-details");
  const [openDropdown, setOpenDropdown] = useState(null);

  // player ref'leri array olarak tutuyoruz
  const playerRefs = useRef([]);

  const handleMouseEnter = (index) => {
    playerRefs.current[index]?.playFromBeginning();
  };

  const handleMouseLeave = (index) => {
    // playerRefs.current[index]?.goToFirstFrame();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const dropdownRef = useRef(null);

  return (
    <div>
      <div className="full-size-bg-img-user"></div>
      <div className="flex flex-col lg:flex-row gap-4 container p-4 mx-auto">
        {/* SOL KUTU */}
        <div className="w-full lg:max-w-xs md:relative top-[-70px]">
          <div className="rounded p-[2px]">
            <div className="flex flex-col rounded">
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
                    <div href="#" className="absolute top-0 right-0 p-1">
                      <FaCircle className="w-3 h-3 text-[var(--success)]" />
                    </div>
                  </div>
                </div>

                <div className="text-start">
                  <h2 className="font-bold text-md w-full flex justify-between">
                    User Name <AiTwotoneSafetyCertificate className="w-6 h-6" />
                  </h2>
                  <p className="max-w-[180px] truncate whitespace-nowrap overflow-hidden">
                    usernameepinko@gmail.com
                  </p>
                </div>
              </div>

              <ul
                className="w-full text-left mt-4 text-white space-y-0 px-4 pb-4"
                ref={dropdownRef}
              >
                {[
                  {
                    key: "my-account",
                    icon: user,
                    label: "Hesabım",
                    subItems: [
                      { key: "personal-details", label: "Kişisel Bilgilerim" },
                      { key: "security", label: "Güvenlik ve Bildirim" },
                      { key: "help-requests", label: "Destek Taleplerim" },
                      {
                        key: "verification",
                        icon: verification,
                        label: "Profil Doğrulama",
                      },
                    ],
                  },
                  {
                    key: "my-orders",
                    icon: order,
                    label: "Siparişlerim",
                  },
                  {
                    key: "my-adverts",
                    icon: adverts,
                    label: "İlanlarım",
                  },
                  {
                    key: "notifications",
                    icon: notifications,
                    label: "Bildirimler",
                  },
                  {
                    key: "streamer-panel",
                    icon: stream,
                    label: "Yayıncı Paneli",
                  },

                  {
                    key: "password-change",
                    icon: passwordChange,
                    label: "Şİfre Değiştir",
                  },
                  {
                    key: "top-up-balance",
                    icon: addBalance,
                    label: "Bakiye Yükle",
                  },
                  {
                    key: "wallet-history",
                    icon: balanceHistory,
                    label: "Ödeme Geçmişim",
                  },
                  {
                    key: "check-cash",
                    icon: checkCash,
                    label: "Bakiye Çek",
                  },
                  {
                    key: "bank-accounts",
                    icon: bank,
                    label: "Banka Hesaplarım",
                  },
                  {
                    key: "earnings",
                    icon: earnings,
                    label: "Kazançlarım",
                  },
                  {
                    key: "transactions",
                    icon: transactions,
                    label: "İşlemlerim",
                  },

                  // {
                  //   key: "advert-orders",
                  //   icon: adverts,
                  //   label: "İlan Siparişlerim",
                  // },
                  // {
                  //   key: "incoming-orders",
                  //   icon: adverts,
                  //   label: "Gelen Siparişlerim",
                  // },
                  {
                    key: "my-messages",
                    icon: message,
                    label: "Mesajlarım",
                  },
                  {
                    key: "refunds",
                    icon: refunds,
                    label: "İade Talebi",
                  },
                  {
                    key: "reference-system",
                    icon: reference,
                    label: "Referans Sistemi",
                  },
                ].map((item, index, arr) => (
                  <React.Fragment key={item.key}>
                    <li
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={() => handleMouseLeave(index)}
                      onClick={() => {
                        if (item.subItems) {
                          setOpenDropdown(
                            openDropdown === item.key ? null : item.key
                          );
                        } else {
                          setActiveTab(item.key);
                        }
                      }}
                      className={`relative flex items-center justify-between gap-2 cursor-pointer p-2 pl-3 rounded transition-all group ${
                        activeTab === item.key
                          ? "bg-[#36373c]/50 font-semibold"
                          : "hover:bg-[var(--advert-list-bg)]/5"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Player
                          ref={(el) => (playerRefs.current[index] = el)}
                          icon={item.icon}
                          size={30}
                          style={{ cursor: "pointer" }}
                          trigger="manual"
                        />
                        {item.label}
                      </div>

                      {/* Ok simgesi */}
                      {item.subItems && (
                        <span className="mr-2 text-gray-400">
                          {openDropdown === item.key ? (
                            <FiChevronUp />
                          ) : (
                            <FiChevronDown />
                          )}
                        </span>
                      )}

                      {/* Sol çizgi */}
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

                    {/* Dropdown alt menü */}
                    {item.subItems && openDropdown === item.key && (
                      <>
                        {/* Mobilde göster */}
                        <ul className="ml-10 mt-1 space-y-1 block lg:hidden">
                          {item.subItems.map((sub) => (
                            <li
                              key={sub.key}
                              onClick={() => {
                                setActiveTab(sub.key);
                                setOpenDropdown(null); // bu satır eklenmeli
                              }}
                              className={`text-sm cursor-pointer p-1 rounded px-2 transition-all ${
                                activeTab === sub.key
                                  ? "bg-[#36373c]/50 font-semibold"
                                  : "hover:bg-[var(--advert-list-bg)]/10"
                              }`}
                            >
                              {sub.label}
                            </li>
                          ))}
                        </ul>

                        {/* Masaüstünde sağda göster */}
                        <ul className="hidden lg:block absolute left-full mt-[-46px] w-56 bg-[#1e1e1e] shadow-lg rounded ml-2 py-2 z-50">
                          {item.subItems.map((sub) => (
                            <li
                              key={sub.key}
                              onClick={() => {
                                setActiveTab(sub.key);
                                setOpenDropdown(null); // bu satır eklenmeli
                              }}
                              className={`text-sm cursor-pointer p-2 px-4 hover:bg-[var(--advert-list-bg)]/10 transition-all ${
                                activeTab === sub.key
                                  ? "bg-[#36373c]/50 font-semibold"
                                  : ""
                              }`}
                            >
                              {sub.label}
                            </li>
                          ))}
                        </ul>
                      </>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 gap-[25px]">
            <div className="bg-[var(--bg-info-box)] border-1 border-[var(--label2)] p-2 rounded flex items-center gap-4 justify-center">
              <GiWallet className="text-[var(--label2)] w-12 h-12" />
              <div>
                <p>Hesap Bakiyesi</p>
                <h3 className="text-md font-bold">1999,99₺</h3>
              </div>
            </div>
            <div className="bg-[var(--bg-info-box)] border-1 border-[var(--alert)] p-2 rounded flex items-center gap-4 justify-center">
              <HiPaperAirplane className="text-[var(--alert)] w-12 h-12" />
              <div>
                <p>Yeni Mesaj</p>
                <h3 className="text-md font-bold">2</h3>
              </div>
            </div>
            <div className="bg-[var(--bg-info-box)] border-1 border-[var(--label7)] p-2 rounded flex items-center gap-4 justify-center">
              <AiFillCodeSandboxSquare className="text-[var(--label7)] w-12 h-12" />
              <div>
                <p>Yeni Sipariş</p>
                <h3 className="text-md font-bold">7</h3>
              </div>
            </div>
            <div className="bg-[var(--bg-info-box)] border-1 border-[var(--label9)] p-2 rounded flex items-center gap-4 justify-center">
              <IoRocket className="text-[var(--label9)] w-12 h-12" />
              <div>
                <p>Toplam Kazanç</p>
                <h3 className="text-md font-bold">999,99₺</h3>
              </div>
            </div>
          </div>

          {/* TAB CONTENTS */}
          {activeTab === "personal-details" && <MyAccount />}
          {activeTab === "security" && (
            <Security title={"Güvenlik Tercihleri"} />
          )}
          {activeTab === "streamer-panel" && (
            <StreamerPanel title={"Yayıncı Paneli"} />
          )}
          {/* {activeTab === "billing" && <Billing title={"Fatura Adreslerim"} />} */}
          {activeTab === "my-messages" && <Messages />}
          {activeTab === "my-adverts" && <MyAdvertsTable title={"İLANLARIM"} />}
          {activeTab === "wallet-history" && (
            <WalletHistory title={"ÖDEME GEÇMİŞİM"} />
          )}
          {activeTab === "bank-accounts" && (
            <BankAccounts title={"BANKA HESAPLARIM"} />
          )}
          {activeTab === "help-requests" && <HelpRequests title={"Destek"} />}
          {activeTab === "transactions" && (
            <Transactions title={"İŞLEMLERİM"} />
          )}
          {activeTab === "password-change" && (
            <PasswordChange title={"ŞİFRE DEĞİŞTİR"} />
          )}
          {activeTab === "verification" && (
            <Verification title={"PROFİL DOĞRULAMA"} />
          )}
          {activeTab === "entry-logs" && (
            <EntryLogs title={"GİRİŞ HAREKETLERİM"} />
          )}
          {activeTab === "earnings" && <Earnings title={"Kazançlarım"} />}
          {activeTab === "refunds" && <Refunds title={"İade Taleplerim"} />}
          {activeTab === "notifications" && (
            <NotificationsList title={"İade Taleplerim"} />
          )}
          {activeTab === "reference-system" && (
            <ReferenceSystem title={"Referans Sistemi"} />
          )}
          {activeTab === "my-orders" && <MyOrders title={"Siparişlerim"} />}
          {activeTab === "top-up-balance" && (
            <TopUpBalance title={"Bakiye Yükle"} />
          )}
          {activeTab === "check-cash" && <CheckCash title={"Nakit Çek"} />}
          {activeTab === "advert-orders" && (
            <AdvertOrders title={"İLAN SİPARİŞLERİM"} />
          )}
          {activeTab === "incoming-orders" && (
            <IncomingOrders title={"GELEN SİPARİŞLERİM"} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileTabs;
