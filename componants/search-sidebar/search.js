"use client";

import { useState, useEffect } from "react";

const SearchSidebar = () => {
  const categories = [
    {
      name: "PUBG Mobile",
      subcategories: [
        { name: "Random Hesap", count: 353 },
        { name: "Hesap", count: 435 },
        { name: "Popülerlik Klan", count: 210 },
        { name: "PUBG Mobile Boost", count: 22 }
      ]
    },
    {
      name: "Pubg Battleground",
      subcategories: [
        { name: "Steam Hesap", count: 125 },
        { name: "Boost Hizmeti", count: 89 },
        { name: "Skin", count: 234 }
      ]
    },
    {
      name: "Rise Online World",
      subcategories: [
        { name: "Karakter", count: 67 },
        { name: "Item", count: 145 },
        { name: "Gold", count: 89 }
      ]
    },
    {
      name: "Call Of Duty Mobile",
      subcategories: [
        { name: "Hesap", count: 78 },
        { name: "CP", count: 156 },
        { name: "Boost", count: 34 }
      ]
    },
    {
      name: "Pubg New State",
      subcategories: [
        { name: "Hesap", count: 45 },
        { name: "NC", count: 67 }
      ]
    },
    {
      name: "Rise Of Kingdoms",
      subcategories: [
        { name: "Hesap", count: 89 },
        { name: "Gem", count: 123 }
      ]
    },
    {
      name: "Pasha Fencer",
      subcategories: [
        { name: "Hesap", count: 23 },
        { name: "Item", count: 45 }
      ]
    },
    {
      name: "Mobile Legends",
      subcategories: [
        { name: "Hesap", count: 167 },
        { name: "Diamond", count: 234 },
        { name: "Boost", count: 78 }
      ]
    }
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [openCategories, setOpenCategories] = useState({});
  const [typingTexts, setTypingTexts] = useState({});

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.subcategories.some(sub => 
      sub.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Typing effect hook
  const useTypingEffect = (text, speed = 100) => {
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, speed);
        return () => clearTimeout(timeout);
      }
    }, [currentIndex, text, speed]);

    return displayText;
  };

  const toggleCategory = (categoryName) => {
    setOpenCategories(prev => {
      // Eğer tıklanan kategori zaten açıksa kapat, değilse sadece onu aç
      if (prev[categoryName]) {
        return {}; // Hepsini kapat
      } else {
        return { [categoryName]: true }; // Sadece tıklanan kategoriyi aç
      }
    });
  };

  // Typing effect component
  const TypingText = ({ text, speed = 80 }) => {
    const displayText = useTypingEffect(text, speed);
    const isComplete = displayText.length === text.length;
    return (
      <span>
        {displayText}
        {!isComplete && <span className="animate-pulse">|</span>}
      </span>
    );
  };

  return (
    <div
      className="text-[var(--foreground)] p-4 rounded-lg md:relative md:mt-[-100px] bg-[var(--advert-card-bg)]"
    >
      <h2
        style={{ color: "var(--foreground)" }}
        className="text-white text-[20px] mb-2 font-bold"
      >
        KATEGORİLER
      </h2>
      {/* Kategori Arama */}
      <div className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Kategori Ara"
          className="w-full p-2 rounded text-[var(--foreground)] bg-[var(--advert-list-bg)] focus:outline-none focus:ring-1 focus:ring-[var(--success)] focus:border-[var(--success)]"
        />
      </div>

      {/* Kategori Listesi */}
      <div className="mb-4 space-y-2 max-h-[300px] overflow-y-scroll">
        {filteredCategories.map((category, index) => (
          <div key={index} className="border-b border-gray-500 pb-2">
            {/* Ana Kategori */}
            <div
              className="flex items-center justify-between cursor-pointer hover:bg-[var(--advert-list-bg)] p-2 rounded transition-all duration-300"
              onClick={() => toggleCategory(category.name)}
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8">
                  <img className="rounded-sm" src="https://placehold.co/200" />
                </div>
                <span className="font-medium text-sm">{category.name}</span>
              </div>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${
                  openCategories[category.name] ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Alt Kategoriler - Cascade Animation */}
            {openCategories[category.name] && (
              <div className="ml-6 mt-2 space-y-1">
                {category.subcategories.map((subcategory, subIndex) => (
                  <div
                    key={subIndex}
                    className="flex items-center justify-between cursor-pointer hover:bg-[var(--advert-list-bg)] p-2 rounded text-sm transform transition-all duration-300"
                    style={{
                      animationDelay: `${subIndex * 100}ms`,
                      animation: openCategories[category.name] ? `slideInCascade 0.5s ease-out forwards` : 'none'
                    }}
                  >
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="!w-4 !h-4" />
                      <span>
                        <TypingText text={subcategory.name} speed={30} />
                      </span>
                    </div>
                    <span className="text-xs text-gray-400">({subcategory.count})</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        {filteredCategories.length === 0 && (
          <div className="text-center py-4 text-gray-500">
            Kategori bulunamadı
          </div>
        )}
      </div>

      {/* Fiyat Aralığı */}
      <div className="mb-4">
        <h3 className="mb-2">Fiyat Aralığı</h3>
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Min. Fiyat"
            className="w-1/2 p-2 rounded text-[var(--foreground)] bg-[var(--advert-list-bg)] focus:outline-none focus:ring-1 focus:ring-[var(--success)] focus:border-[var(--success)]"
          />
          <input
            type="text"
            placeholder="Max. Fiyat"
            className="w-1/2 p-2 rounded text-[var(--foreground)] bg-[var(--advert-list-bg)] focus:outline-none focus:ring-1 focus:ring-[var(--success)] focus:border-[var(--success)]"
          />
        </div>
      </div>

      {/* Satıcı Filtrele */}
      <div className="mb-4">
        <h3 className="mb-2">Satıcı Filtrele</h3>
        <input
          type="text"
          placeholder="Satıcı Adı Giriniz"
          className="w-full p-2 rounded text-[var(--foreground)] bg-[var(--advert-list-bg)] focus:outline-none focus:ring-1 focus:ring-[var(--success)] focus:border-[var(--success)]"
        />
      </div>

      {/* Kelime Filtrele */}
      <div className="mb-4">
        <h3 className="mb-2">Kelime Filtrele</h3>
        <input
          type="text"
          placeholder="Kelime Giriniz"
          className="w-full p-2 rounded text-[var(--foreground)] bg-[var(--advert-list-bg)] focus:outline-none focus:ring-1 focus:ring-[var(--success)] focus:border-[var(--success)]"
        />
      </div>

      {/* Diğer Özellikler */}
      <div className="mb-4">
        <h3 className="mb-2">Diğer Özellikler</h3>
        <div className="space-y-2">
          {["Çevrimiçi Satıcı", "Güvenilir Satıcı", "En Hızlı Teslimat"].map(
            (option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input type="checkbox" className="!h-4 !w-4 text-[var(--success)]" />
                <span>{option}</span>
              </div>
            )
          )}
        </div>
      </div>

      {/* Filtreyi Uygula Butonu */}
      <button className="w-full bg-[var(--success)] text-white p-2 rounded">
        Filtreyi Uygula
      </button>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slideInCascade {
          0% {
            opacity: 0;
            transform: translateX(-20px) translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateX(0) translateY(0);
          }
        }
        
        .animate-pulse {
          animation: pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default SearchSidebar;
