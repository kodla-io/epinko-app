"use client";
import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

import Table from "../table";

const allGiveaways = [
  {
    name: "Valorant 2000VP",
    total: "150₺",
    users: "45",
    start: "15.01.2024",
    end: "25.01.2024",
    status: "Süresi Doldu",
    statusColor: "var(--label7)",
  },
  {
    name: "Steam 50TL Hediye Kartı",
    total: "51.45₺",
    users: "128",
    start: "20.01.2024",
    end: "30.01.2024",
    status: "Devam Ediyor",
    statusColor: "var(--primary)",
  },
  {
    name: "Xbox Game Pass 3 Aylık",
    total: "89.99₺",
    users: "67",
    start: "10.01.2024",
    end: "20.01.2024",
    status: "Tamamlandı",
    statusColor: "var(--success)",
  },
  {
    name: "Riot Points 1350 RP",
    total: "25₺",
    users: "89",
    start: "05.01.2024",
    end: "15.01.2024",
    status: "Kazanıldı",
    statusColor: "var(--success)",
  },
];

const winGiveaways = [
  {
    name: "Valorant 2000VP",
    total: "150₺",
    users: "45",
    start: "15.01.2024",
    end: "25.01.2024",
    status: "Kazanıldı",
    statusColor: "var(--success)",
  },
  {
    name: "Steam 100TL Hediye Kartı",
    total: "102.9₺",
    users: "234",
    start: "12.01.2024",
    end: "22.01.2024",
    status: "Kazanıldı",
    statusColor: "var(--success)",
  },
  {
    name: "Tinder Gold 1 Aylık",
    total: "87.8₺",
    users: "156",
    start: "08.01.2024",
    end: "18.01.2024",
    status: "Kazanıldı",
    statusColor: "var(--success)",
  },
];

const headers = [
  { key: "name", label: "Çekiliş Adı" },
  { key: "total", label: "Toplam Tutar" },
  { key: "users", label: "Katılımcı Sayısı" },
  { key: "start", label: "Başlangıç Tarihi" },
  { key: "end", label: "Bitiş Tarihi" },
  { key: "durum", label: "Durum" },
];

const fakeProducts = [
  { id: 1, name: "Tinder Gold 1 Aylık", price: 87.8, image: "https://placehold.co/80x100/111/fff?text=Tinder+Gold" },
  { id: 2, name: "Xbox 100 TL Hediye Kartı", price: 102.9, image: "https://placehold.co/80x100/222/fff?text=Xbox+100TL" },
  { id: 3, name: "Riot Points 7980 RP", price: 1337.7, image: "https://placehold.co/80x100/333/fff?text=RP+7980" },
  { id: 4, name: "Razer Gold 5 TL", price: 5.0, image: "https://placehold.co/80x100/444/fff?text=Razer+5TL" },
  { id: 5, name: "Xbox 50 TL Hediye Kartı", price: 51.45, image: "https://placehold.co/80x100/555/fff?text=Xbox+50TL" },
];

function getProductById(id) {
  return fakeProducts.find((p) => p.id === id);
}

export default function orderList({ title }) {
  const [activeTab, setActiveTab] = useState("create");
  // Katılımcı ve ödüller state
  const [participants, setParticipants] = useState([
    { id: 1, prizes: [] },
  ]);

  // Çekiliş adı, notu, tarih, saat, kimler katılabilir
  const [drawName, setDrawName] = useState("");
  const [drawNote, setDrawNote] = useState("");
  const [endDate, setEndDate] = useState("2025-07-05");
  const [endTime, setEndTime] = useState("00:00");
  const [whoCanJoin, setWhoCanJoin] = useState("all");

  // Toplam tutar hesaplama
  const totalAmount = participants.reduce(
    (sum, p) =>
      sum + p.prizes.reduce((s, pid) => s + (getProductById(pid)?.price || 0), 0),
    0
  );

  // Katılımcı ekle
  const addParticipant = () => {
    setParticipants((prev) => [
      ...prev,
      { id: prev.length + 1, prizes: [] },
    ]);
  };

  // Katılımcıdan ödül kaldır
  const removePrize = (participantIdx, prizeIdx) => {
    setParticipants((prev) =>
      prev.map((p, i) =>
        i === participantIdx
          ? { ...p, prizes: p.prizes.filter((_, j) => j !== prizeIdx) }
          : p
      )
    );
  };

  // Katılımcıdan tümünü kaldır
  const removeParticipant = (idx) => {
    setParticipants((prev) => prev.filter((_, i) => i !== idx));
  };

  // Katılımcıya ödül ekle
  const addPrize = (participantIdx, productId) => {
    setParticipants((prev) =>
      prev.map((p, i) =>
        i === participantIdx && productId
          ? { ...p, prizes: [...p.prizes, productId] }
          : p
      )
    );
  };

  // Tarih inputu için min değeri bugünün tarihi olacak şekilde ayarla
  const todayStr = new Date().toISOString().split('T')[0];

  // Saat inputu için min değeri hesapla (bugünse şu an +1 saat, değilse yok)
  const now = new Date();
  const pad = (n) => n.toString().padStart(2, '0');
  const minTime = `${pad(now.getHours() + 1)}:00`;
  const isToday = endDate === todayStr;

  return (
    <div id="orders" className="p-4">
      <div className="flex items-center space-x-4 py-2">
        <h2
          style={{ color: "var(--foreground)" }}
          className="text-[30px] py-2 font-bold"
        >
          {title}
        </h2>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-[var(--success)]" />
      </div>
      {/* Tabs */}
      <div className="flex flex-wrap md:flex-nowrap gap-2 mb-4">
        <button
          onClick={() => setActiveTab("create")}
          className={`px-4 py-2 rounded w-full md:flex-1 ${
            activeTab === "create"
              ? "bg-[var(--success)] text-white"
              : "border border-[var(--success)] text-[var(--foreground)]"
          }`}
        >
          Çekiliş Oluştur
        </button>
        <button
          onClick={() => setActiveTab("past")}
          className={`px-4 py-2 rounded w-full md:flex-1 ${
            activeTab === "past"
              ? "bg-[var(--success)] text-white"
              : "border border-[var(--success)] text-[var(--foreground)]"
          }`}
        >
          Çekiliş Geçmişi
        </button>
        <button
          onClick={() => setActiveTab("win")}
          className={`px-4 py-2 rounded w-full md:flex-1 ${
            activeTab === "win"
              ? "bg-[var(--success)] text-white"
              : "border border-[var(--success)] text-[var(--foreground)]"
          }`}
        >
          Kazandığım Çekilişler
        </button>
      </div>
      {/* 1. TAB: Çekiliş Oluştur */}
      {activeTab === "create" && (
        <div className="space-y-6 bg-[var(--advert-list-bg)] p-6 rounded-xl">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-[var(--foreground)] font-semibold">Çekiliş Adı Giriniz</label>
              <input
                className="bg-[var(--profile-input)] rounded px-4 py-2 text-[var(--foreground)] placeholder-[var(--text-gray)] focus:outline-none"
                placeholder="Çekiliş adı..."
                value={drawName}
                onChange={e => setDrawName(e.target.value)}
              />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-[var(--foreground)] font-semibold">Çekiliş Notu (Opsiyonel)</label>
              <textarea
                className="bg-[var(--profile-input)] rounded px-4 py-2 text-[var(--foreground)] placeholder-[var(--text-gray)] focus:outline-none min-h-[48px]"
                placeholder="Çekiliş ile ilgili bir açıklama girebilir veya boş bırakabilirsiniz."
                value={drawNote}
                onChange={e => setDrawNote(e.target.value)}
              />
            </div>
          </div>
          <div className="space-y-8">
            <p className="text-[var(--text-gray)] text-sm">Lütfen katılımcıları ve ödülleri belirleyin, birden fazla katılımcı ve ödül ekleyebilirsiniz. Her katılımcı için ödül eklemeniz ve ödüllerin toplam tutarı kadar bakiyeniz olması gerekmektedir.</p>
            {participants.map((participant, idx) => (
              <div key={participant.id} className="mb-6 bg-[var(--background)] rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-bold text-[var(--foreground)] text-lg w-8 h-8 flex items-center justify-center bg-[var(--advert-list-bg)] rounded">{idx + 1}.</span>
                  <span className="text-[var(--foreground)] font-semibold">Ürün seçiniz...</span>
                  {participants.length > 1 && (
                    <button onClick={() => removeParticipant(idx)} className="ml-auto text-red-500 hover:text-red-700 text-sm flex items-center gap-1"><FaTrashAlt /> Kaldır</button>
                  )}
                </div>
                {/* Ürün seçme alanı */}
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2 items-center">
                    <select
                      className="bg-[var(--profile-input)] rounded px-3 py-2 text-[var(--foreground)]"
                      value=""
                      onChange={e => {
                        const val = Number(e.target.value);
                        if (val) addPrize(idx, val);
                      }}
                    >
                      <option value="">Ürün seçiniz...</option>
                      {fakeProducts.map(p => <option key={p.id} value={p.id}>{p.name} ({p.price.toFixed(2)} ₺)</option>)}
                    </select>
                  </div>
                  {/* Seçilen ürünler */}
                  {participant.prizes.length > 0 && (
                    <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
                      {participant.prizes.map((pid, pidx) => {
                        const prod = getProductById(pid);
                        return prod ? (
                          <div key={pidx} className="flex items-center gap-3 bg-[var(--advert-list-bg)] rounded p-2">
                            <img src={prod.image} alt={prod.name} className="w-12 h-14 object-cover rounded" />
                            <div className="flex-1">
                              <div className="font-semibold text-[var(--foreground)]">{prod.name}</div>
                              <div className="text-[var(--text-gray)] text-sm">{prod.price.toFixed(2)} ₺</div>
                            </div>
                            <button onClick={() => removePrize(idx, pidx)} className="text-red-500 hover:text-red-700 text-xs flex items-center gap-1"><FaTrashAlt /> Kaldır</button>
                          </div>
                        ) : null;
                      })}
                    </div>
                  )}
                </div>
              </div>
            ))}
            <button
              onClick={addParticipant}
              className="bg-[var(--primary)] hover:bg-[var(--success)] text-white font-semibold px-6 py-2 rounded transition"
            >
              Katılımcı ve Ödül Ekle
            </button>
          </div>
          {/* Toplam tutar ve diğer alanlar */}
          <div className="flex flex-col md:flex-row gap-4 items-end justify-between mt-8">
            <div className="flex-1 flex flex-col gap-2">
              <span className="text-[var(--foreground)] font-semibold">Çekiliş Ödül Tutarı</span>
              <div className="text-3xl font-bold text-[var(--success)]">{totalAmount.toFixed(2)} ₺</div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[var(--foreground)] font-semibold">Çekiliş Bitiş Tarihi</label>
              <input
                type="date"
                className="bg-[var(--profile-input)] rounded px-4 py-2 text-[var(--foreground)]"
                value={endDate}
                min={todayStr}
                onChange={e => {
                  if (e.target.value < todayStr) {
                    alert('Geçmiş bir tarih seçemezsiniz!');
                    return;
                  }
                  setEndDate(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[var(--foreground)] font-semibold">Saat</label>
              <input
                type="time"
                className="bg-[var(--profile-input)] rounded px-4 py-2 text-[var(--foreground)]"
                value={endTime}
                min={isToday ? minTime : undefined}
                onChange={e => {
                  if (isToday && e.target.value < minTime) {
                    alert('Bugün için en erken saat şu anki saatten en az 1 saat sonrası olmalı!');
                    return;
                  }
                  setEndTime(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[var(--foreground)] font-semibold">Kimler Katılabilir</label>
              <select
                className="bg-[var(--profile-input)] rounded px-4 py-2 text-[var(--foreground)]"
                value={whoCanJoin}
                onChange={e => setWhoCanJoin(e.target.value)}
              >
                <option value="all">Herkes Katılabilir</option>
                <option value="members">Sadece Üyeler</option>
                <option value="followers">Sadece Takipçiler</option>
              </select>
            </div>
          </div>
          <div className="mt-8">
            <button className="w-full bg-[var(--success)] hover:bg-[var(--primary)] text-white font-bold py-3 rounded-xl text-lg transition">Çekiliş Oluştur</button>
          </div>
        </div>
      )}
      {/* Diğer tablar (past, win) için eski içerik veya senin ekleyeceğin içerik kalabilir */}
      {activeTab === "past" && (
        <div className="space-y-4">
          <Table data={allGiveaways} headers={headers} />
        </div>
      )}
      {activeTab === "win" && (
        <div className="space-y-4">
          <Table data={winGiveaways} headers={headers} />
        </div>
      )}
    </div>
  );
}
