"use client";

import React, { useState } from "react";
import { HiPaperAirplane } from "react-icons/hi2";
import { GiWallet } from "react-icons/gi";
import {
  AiFillCodeSandboxSquare,
  AiTwotoneSafetyCertificate,
} from "react-icons/ai";
import { IoRocket } from "react-icons/io5";
import Link from "next/link";
import { MdAccountCircle } from "react-icons/md";
import { FaCircle, FaCamera, FaWallet } from "react-icons/fa";
import { BsBank } from "react-icons/bs";
import { IoMdHelpBuoy } from "react-icons/io";
import { GrTransaction } from "react-icons/gr";
import { TbPasswordFingerprint } from "react-icons/tb";
import { MdDomainVerification } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { GiTakeMyMoney } from "react-icons/gi";
import { TbReceiptRefund } from "react-icons/tb";
import { RiNotification2Fill } from "react-icons/ri";
import { VscReferences } from "react-icons/vsc";
import { FaBorderAll } from "react-icons/fa6";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { FaCashRegister } from "react-icons/fa6";
import { RxBorderAll } from "react-icons/rx";

import MyAccount from "./my-account/tab";
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

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState("my-account");

  return (
    <div>
      <div className="full-size-bg-img-user"></div>
      <div className="flex flex-col lg:flex-row gap-4 container p-4 mx-auto">
        {/* SOL KUTU */}
        <div className="w-full lg:max-w-xs md:relative top-[-70px]">
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

              <ul className="w-full text-left mt-4 text-white space-y-0 px-4 pb-4">
                {[
                  {
                    key: "my-account",
                    icon: <MdAccountCircle className="w-8 h-8" />,
                    label: "Hesabım",
                  },
                  {
                    key: "my-messages",
                    icon: <HiPaperAirplane className="w-8 h-8" />,
                    label: "Mesajlarım",
                  },
                  {
                    key: "my-adverts",
                    icon: <AiFillCodeSandboxSquare className="w-8 h-8" />,
                    label: "İlanlarım",
                  },
                  {
                    key: "wallet-history",
                    icon: <FaWallet className="w-8 h-8" />,
                    label: "Bakiye Geçmişim",
                  },
                  {
                    key: "bank-accounts",
                    icon: <BsBank className="w-8 h-8" />,
                    label: "Banka Hesaplarım",
                  },
                  {
                    key: "help-requests",
                    icon: <IoMdHelpBuoy className="w-8 h-8" />,
                    label: "Yardım Taleplerim",
                  },
                  {
                    key: "transactions",
                    icon: <GrTransaction className="w-8 h-8" />,
                    label: "İşlemlerim",
                  },
                  {
                    key: "password-change",
                    icon: <TbPasswordFingerprint className="w-8 h-8" />,
                    label: "Şİfre Değiştir",
                  },
                  {
                    key: "verification",
                    icon: <MdDomainVerification className="w-8 h-8" />,
                    label: "Profil Deoğulama",
                  },
                  {
                    key: "entry-logs",
                    icon: <IoDocumentTextOutline className="w-8 h-8" />,
                    label: "Profil Deoğulama",
                  },
                  {
                    key: "earnings",
                    icon: <GiTakeMyMoney className="w-8 h-8" />,
                    label: "Kazançlarım",
                  },
                  {
                    key: "refunds",
                    icon: <TbReceiptRefund className="w-8 h-8" />,
                    label: "İade Talebi",
                  },
                  {
                    key: "notifications",
                    icon: <RiNotification2Fill className="w-8 h-8" />,
                    label: "Bildirimler",
                  },
                  {
                    key: "reference-system",
                    icon: <VscReferences className="w-8 h-8" />,
                    label: "Referans Sistemi",
                  },
                  {
                    key: "my-orders",
                    icon: <FaBorderAll className="w-8 h-8" />,
                    label: "Siparişlerim",
                  },
                  {
                    key: "top-up-balance",
                    icon: <MdOutlineAccountBalanceWallet className="w-8 h-8" />,
                    label: "Bakiye Yükle",
                  },
                  {
                    key: "check-cash",
                    icon: <FaCashRegister className="w-8 h-8" />,
                    label: "Nakit Çek",
                  },
                  {
                    key: "advert-orders",
                    icon: <RxBorderAll className="w-8 h-8" />,
                    label: "İlan Siparişlerim",
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
          {activeTab === "my-account" && <MyAccount />}
          {activeTab === "my-messages" && <Messages />}
          {activeTab === "my-adverts" && <MyAdvertsTable title={"İLANLARIM"} />}
          {activeTab === "wallet-history" && (
            <WalletHistory title={"BAKİYE GEÇMİŞİM"} />
          )}
          {activeTab === "bank-accounts" && (
            <BankAccounts title={"BANKA HESAPLARIM"} />
          )}
          {activeTab === "help-requests" && (
            <HelpRequests title={"YARDIM TALEPLERİM"} />
          )}
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
        </div>
      </div>
    </div>
  );
};

export default ProfileTabs;
