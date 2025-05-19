import { useState } from "react";

const MONTHS = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
];

const WEEK_DAYS = ["P", "S", "Ç", "P", "C", "C", "P"];

export default function Calendar({ onDateChange }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleMonthChange = (offset) => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(newDate.getMonth() + offset);
    setSelectedDate(newDate);
  };

  const isSameDay = (date1, date2) =>
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate();

  const renderCalendar = () => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const firstDayIndex = firstDayOfMonth.getDay();
    const totalDays = lastDayOfMonth.getDate();

    const days = [];

    // Boş hücreler
    for (let i = 0; i < (firstDayIndex === 0 ? 6 : firstDayIndex - 1); i++) {
      days.push(<div key={`empty-${i}`} className="w-8 h-8" />);
    }

    // Günler
    for (let i = 1; i <= totalDays; i++) {
      const dayDate = new Date(year, month, i);
      const isSelected = isSameDay(dayDate, selectedDate);

      days.push(
        <div
          key={i}
          className={`w-5 h-5 flex items-center justify-center rounded cursor-pointer 
            ${isSelected ? "bg-blue-600 text-white" : "hover:bg-gray-700"}`}
          onClick={() => {
            setSelectedDate(dayDate);
            if (onDateChange) onDateChange(dayDate); // dışarıya bildirme
          }}
        >
          {i}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="mt-4 text-white">
      <h3 className="text-lg mb-2">Tarih Seçiniz</h3>
      <div className="flex justify-between items-center mb-2 bg-[var(--advert-list-bg)]">
        <button
          onClick={() => handleMonthChange(-1)}
          className="px-2 py-1 rounded hover:bg-gray-700"
        >
          ◄
        </button>
        <span className="font-semibold">
          {MONTHS[selectedDate.getMonth()]} {selectedDate.getFullYear()}
        </span>
        <button
          onClick={() => handleMonthChange(1)}
          className="px-2 py-1 rounded hover:bg-gray-700"
        >
          ►
        </button>
      </div>

      {/* Hafta Günleri */}
      <div className="grid grid-cols-7 gap-1 text-center text-sm text-gray-400 mb-1">
        {WEEK_DAYS.map((day, index) => (
          <div key={index}>{day}</div>
        ))}
      </div>

      {/* Takvim */}
      <div className="grid grid-cols-7 gap-1">{renderCalendar()}</div>
    </div>
  );
}
