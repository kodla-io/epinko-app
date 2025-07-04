"use client";

import React, { useState } from "react";

import { LuCircleCheckBig } from "react-icons/lu";
import { MdMoreHoriz } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { MdOutlineNotificationsActive } from "react-icons/md";
import Switch from "../switch";

const items = [
  {
    id: 1,
    image: "https://placehold.co/100",
    title: "Sipariş Onayı",
    date: "2025-05-09",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt sit amet, consectetur adipiscing elit. ut labore et dolore magna aliqua.",
    read: true, // 👈 OKUNDU
  },
  {
    id: 2,
    image: "https://placehold.co/100",
    title: "Kargoya Verildi",
    date: "2025-05-08",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris consectetur adipiscing elit. Sed do eiusmod tempor incididunt sit amet, consectetur adipiscing elit. nisi ut aliquip ex ea commodo consequat.",
    read: false, // 👈 OKUNMADI
  },
  {
    id: 3,
    image: "https://placehold.co/100",
    title: "Teslim Edildi",
    date: "2025-05-07",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum vitae elementum curabitur vitae nunc sed dolore eu fugiat nulla pariatur.",
    read: true, // 👈 OKUNDU
  },
  {
    id: 4,
    image: "https://placehold.co/100",
    title: "İade Süreci Başladı",
    date: "2025-05-06",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa consectetur adipiscing elit. Sed do eiusmod tempor incididunt sit amet, consectetur adipiscing elit. qui officia deserunt mollit anim id est laborum.",
    read: false, // 👈 OKUNMADI
  },
  {
    id: 5,
    image: "https://placehold.co/100",
    title: "İade Tamamlandı",
    date: "2025-05-05",
    description:
      "Aliquam malesuada bibendum arcu velit dignissim sodales ut eu sem.",
    read: true, // 👈 OKUNDU
  },
];

const NotificationDetailModal = ({
  open,
  onClose,
  notification,
  setReadStatus,
}) => {
  if (!open || !notification) return null;
  const isRead = notification.read;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000b3] bg-opacity-60 px-4">
      <div className="bg-[var(--advert-card-bg)] rounded-xl p-6 w-full max-w-lg shadow-xl relative">
        <div className="flex justify-between items-start mb-4">
          <div className="flex gap-3 items-center">
            <MdOutlineNotificationsActive className="w-8 h-8 text-blue-400" />
            <div>
              <div className="font-semibold text-lg text-[var(--foreground)]">
                {notification.title}
              </div>
              <div className="text-xs text-[var(--text-gray)]">{notification.date}</div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-md flex justify-center items-center ml-4 mt-2 bg-[var(--alert)] cursor-pointer"
          >
            <FaTimes className="text-white w-4 h-4" />
          </button>
        </div>
        <div className="mb-3 text-[var(--foreground)]">{notification.description}</div>

        {/* Durum satırı: Switch */}
        <div className="mb-2 flex items-center justify-between gap-2 border-t border-[var(--text-gray)] pt-2">
          <span className="mr-2 font-semibold text-[var(--text-gray)]">
            Okundu Durumu:
          </span>
          {/* <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              isRead ? "bg-green-600 text-white" : "bg-gray-400 text-white"
            }`}
          >
            {isRead ? "OKUNDU" : "OKUNMADI"}
          </span> */}
          <Switch
            checked={isRead}
            onChange={() => setReadStatus(notification.id, !isRead)}
          />
        </div>
      </div>
    </div>
  );
};

const NotificationsList = ({ title }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalNotif, setModalNotif] = useState(null);

  const [notifications, setNotifications] = useState(items);

  // Bildirim güncelleme fonksiyonu (ana componentte):
  const setReadStatus = (id, value) => {
    setNotifications((list) =>
      list.map((item) => (item.id === id ? { ...item, read: value } : item))
    );
    // Ayrıca modal'daki bildirimi de güncelleyebilirsin (isteğe bağlı):
    setModalNotif((current) =>
      current && current.id === id ? { ...current, read: value } : current
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4 py-2 flex-wrap md:flex-nowrap">
        <h2
          style={{ color: "var(--foreground)" }}
          className="text-[30px] py-2 font-bold"
        >
          {title}
        </h2>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 hidden md:block to-green-500 hidden md:block" />
        <button className="w-full md:w-auto py-2 px-4 text-center font-medium w-auto min-w-[200px] bg-[var(--success)] rounded-md flex gap-2 items-center justify-center text-white hover:opacity-80 transition duration-200">
          <LuCircleCheckBig className="w-4 h-4" />
          Tümünü Okundu Olarak İşaretle
        </button>
      </div>
      {notifications.map((item) => (
        <div
          key={item.id}
          className="flex gap-4 items-start p-4 rounded-md shadow transition"
          style={
            !item.read
              ? {
                  background:
                    "linear-gradient(90deg, var(--success) 0%, var(--profile-tab-bg) 15%, var(--profile-tab-bg) 100%)",
                }
              : { background: "var(--profile-tab-bg)" }
          }
        >
          <img
            src={item.image}
            alt="Fotoğraf"
            className="w-[100px] h-[100px] object-cover rounded-md"
          />
          <div className="flex flex-col justify-between w-full">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-lg flex items-center gap-2 md:flex-nowrap flex-wrap">
                <span> {item.title} </span>{" "}
                <span className="md:block hidden"> - </span>
                <span className="text-sm font-semibold">{item.date}</span>
              </h3>
              <span
                onClick={() => {
                  setModalNotif(item);
                  setModalOpen(true);
                }}
                className="font-semibold p-2 cursor-pointer rounded-sm bg-[var(--success)] text-white flex items-center justify-center"
              >
                <MdMoreHoriz className="w-4 h-4" />
              </span>
            </div>
            <p className="line-clamp-2">{item.description}</p>
          </div>
        </div>
      ))}
      <NotificationDetailModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        notification={notifications.find((n) => n.id === modalNotif?.id)}
        setReadStatus={setReadStatus}
      />
    </div>
  );
};

export default NotificationsList;
