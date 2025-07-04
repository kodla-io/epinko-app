import { RiPagesLine } from "react-icons/ri";
import { FaPercent } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import React, { useState } from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { GiAlarmClock } from "react-icons/gi";

export default function Listings({ title }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");

  const listings = [
    {
      id: "#1525H",
      title: "Steam Gift Card 50 TL",
      description: "Steam platformu için 50 TL değerinde hediye kartı satışı",
      date: "15-12-2024",
      time: "14:30",
      commission: "2.50₺",
      earnings: "47.50₺",
      image: "https://placehold.co/150",
    },
    {
      id: "#1526H",
      title: "Valorant 1000 VP",
      description: "Valorant oyunu için 1000 VP paketi satışı",
      date: "14-12-2024",
      time: "16:45",
      commission: "5.00₺",
      earnings: "95.00₺",
      image: "https://placehold.co/150",
    },
    {
      id: "#1527H",
      title: "PUBG Mobile UC",
      description: "PUBG Mobile için 600 UC paketi satışı",
      date: "13-12-2024",
      time: "09:15",
      commission: "3.00₺",
      earnings: "57.00₺",
      image: "https://placehold.co/150",
    },
    {
      id: "#1528H",
      title: "League of Legends RP",
      description: "LoL için 650 RP paketi satışı",
      date: "12-12-2024",
      time: "22:20",
      commission: "4.00₺",
      earnings: "76.00₺",
      image: "https://placehold.co/150",
    },
    {
      id: "#1529H",
      title: "GTA 5 Shark Card",
      description: "GTA 5 için 1.25M Shark Card satışı",
      date: "11-12-2024",
      time: "11:30",
      commission: "7.50₺",
      earnings: "142.50₺",
      image: "https://placehold.co/150",
    },
    {
      id: "#1530H",
      title: "FIFA 24 Coins",
      description: "FIFA 24 için 100K coin paketi satışı",
      date: "10-12-2024",
      time: "19:45",
      commission: "6.00₺",
      earnings: "114.00₺",
      image: "https://placehold.co/150",
    },
  ];

  // Filtreleme ve sıralama
  const filteredAndSortedListings = listings
    .filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.id.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      let comparison = 0;
      
      switch (sortBy) {
        case "date":
          comparison = new Date(a.date.split('-').reverse().join('-')) - new Date(b.date.split('-').reverse().join('-'));
          break;
        case "earnings":
          comparison = parseFloat(a.earnings) - parseFloat(b.earnings);
          break;
        case "id":
          comparison = a.id.localeCompare(b.id);
          break;
        default:
          comparison = 0;
      }
      
      return sortOrder === "desc" ? -comparison : comparison;
    });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(filteredAndSortedListings.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentListings = filteredAndSortedListings.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSortChange = (newSortBy) => {
    if (sortBy === newSortBy) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(newSortBy);
      setSortOrder("desc");
    }
    setCurrentPage(1);
  };

  return (
    <div id="earnings" className="p-6 space-y-4 min-h-screen">
      <div className="flex items-center space-x-4 py-2">
        <h2
          style={{ color: "var(--foreground)" }}
          className="text-[30px] py-2 font-bold"
        >
          {title}
        </h2>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 hidden md:block to-green-500" />
      </div>
      
      {/* Filtreler */}
      <div className="flex flex-wrap justify-between bg-[var(--advert-card-bg)] p-2 rounded gap-2 mb-4">
        <input
          type="text"
          placeholder="Ara (İlan adı, açıklama, ilan no)"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          className="bg-[#2a2a3b] text-white p-2 rounded-md w-full md:w-60 focus:outline-none focus:ring-2 focus:ring-[var(--success)]"
        />
        <select 
          value={`${sortBy}-${sortOrder}`}
          onChange={(e) => {
            const [newSortBy, newSortOrder] = e.target.value.split('-');
            setSortBy(newSortBy);
            setSortOrder(newSortOrder);
            setCurrentPage(1);
          }}
          className="bg-[#2a2a3b] text-white p-2 rounded-md flex-1 focus:outline-none focus:ring-2 focus:ring-[var(--success)]"
        >
          <option value="date-desc">Tarihe Göre Sırala (Yeni-Eski)</option>
          <option value="date-asc">Tarihe Göre Sırala (Eski-Yeni)</option>
        </select>
        <select 
          value={`${sortBy}-${sortOrder}`}
          onChange={(e) => {
            const [newSortBy, newSortOrder] = e.target.value.split('-');
            setSortBy(newSortBy);
            setSortOrder(newSortOrder);
            setCurrentPage(1);
          }}
          className="bg-[#2a2a3b] text-white p-2 rounded-md flex-1 focus:outline-none focus:ring-2 focus:ring-[var(--success)]"
        >
          <option value="earnings-desc">Kazanca Göre Sırala (Yüksek-Düşük)</option>
          <option value="earnings-asc">Kazanca Göre Sırala (Düşük-Yüksek)</option>
        </select>
        <select 
          value={`${sortBy}-${sortOrder}`}
          onChange={(e) => {
            const [newSortBy, newSortOrder] = e.target.value.split('-');
            setSortBy(newSortBy);
            setSortOrder(newSortOrder);
            setCurrentPage(1);
          }}
          className="bg-[#2a2a3b] text-white p-2 rounded-md flex-1 focus:outline-none focus:ring-2 focus:ring-[var(--success)]"
        >
          <option value="id-asc">İlan No'ya Göre Sırala (A-Z)</option>
          <option value="id-desc">İlan No'ya Göre Sırala (Z-A)</option>
        </select>
      </div>

      {/* Sonuç sayısı */}
      <div className="text-sm text-[var(--text-gray)] mb-2">
        {filteredAndSortedListings.length} sonuç bulundu
      </div>

      {/* Liste */}
      <div className="space-y-2">
        {currentListings.length > 0 ? (
          currentListings.map((item, index) => (
            <div
              key={index}
              className="flex items-center flex-wrap md:flex-nowrap justify-between bg-[var(--advert-card-bg)] p-2 rounded text-[var(--foreground)]"
            >
              <img
                src={item.image}
                alt="Game"
                className="w-20 h-20 rounded-md object-cover mr-4"
              />
              <div className="flex-1">
                <h3 className="font-bold text-sm">{item.title}</h3>
                <p className="text-xs mb-1 clamp-1">{item.description}</p>
                <div className="text-xs text-[var(--label7)] flex gap-2 items-center">
                  <FaCalendarAlt />
                  {item.date} <span className="text-[var(--text-gray)]">|</span>{" "}
                  <GiAlarmClock />
                  {item.time}
                </div>
              </div>
              <div className="ml-0 md:ml-4 text-xs bg-[var(--advert-list-bg)] p-2 mt-2 md:mt-0 w-full md:w-auto rounded-md space-y-1">
                <div className="flex items-center gap-2">
                  <RiPagesLine className="w-4 h-4" />
                  <b>İlan No:</b>{" "}
                  <span className="text-[var(--primary)]">{item.id}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaPercent className="w-4 h-4" />
                  <b>Komisyon:</b>{" "}
                  <span className="text-[var(--alert)]">{item.commission}</span>
                </div>
                <div className="flex items-center gap-2">
                  <GiReceiveMoney className="w-4 h-4" />
                  <b>Kazanç:</b>{" "}
                  <span className="text-[var(--success)]">{item.earnings}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-[var(--text-gray)]">
            Arama kriterlerinize uygun sonuç bulunamadı.
          </div>
        )}
        
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-6">
            <ul className="flex items-center space-x-1 p-2 rounded-lg">
              {/* Sol ikon */}
              <li>
                <button
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="px-2 py-1 h-[34px] rounded-md bg-gradient-to-r from-[var(--idle)] to-[var(--label7)] text-white hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FaAngleDoubleLeft />
                </button>
              </li>

              {/* Sayfa numaraları */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <li key={page}>
                  <button
                    onClick={() => handlePageChange(page)}
                    className={`px-2 py-1 rounded-md border border-[var(--idle)] ${
                      page === currentPage
                        ? "bg-[var(--label7)] text-white"
                        : "text-[var(--foreground)] hover:bg-[var(--idle)]"
                    }`}
                  >
                    {page}
                  </button>
                </li>
              ))}

              {/* Sağ ikon */}
              <li>
                <button
                  onClick={() =>
                    handlePageChange(Math.min(totalPages, currentPage + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="px-2 py-1 h-[34px] rounded-md bg-gradient-to-l from-[var(--idle)] to-[var(--label7)] text-white hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FaAngleDoubleRight />
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
