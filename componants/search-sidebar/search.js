"use client";

const SearchSidebar = () => {
  return (
    <div
      style={{
        backgroundColor: "#262626",
        color: "var(--foreground)",
      }}
      className="text-white p-4 rounded-lg md:relative md:mt-[-100px]"
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
          placeholder="Kategori Ara"
          className="w-full p-2 rounded text-white"
          style={{
            backgroundColor: "var(--advert-list-bg)",
          }}
        />
      </div>

      {/* Kategori Listesi */}
      <div className="mb-4 space-y-2 max-h-[300px] overflow-y-scroll">
        {[
          "Pubg Battleground",
          "Pubg Mobile",
          "Rise Online World",
          "Call Of Duty Mobile",
          "Pubg New State",
          "Rise Of Kingdoms",
          "Pasha Fencer",
          "Mobile Legends",
        ].map((game, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 border-b border-gray-500 pb-2"
          >
            <div className="w-8 h-8">
              <img className="rounded-sm" src="https://placehold.co/200" />
            </div>
            <span>{game}</span>
          </div>
        ))}
      </div>

      {/* Fiyat Aralığı */}
      <div className="mb-4">
        <h3 className="mb-2">Fiyat Aralığı</h3>
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Min. Fiyat"
            className="w-1/2 p-2 rounded text-white"
            style={{
              backgroundColor: "var(--advert-list-bg)",
            }}
          />
          <input
            type="text"
            placeholder="Max. Fiyat"
            className="w-1/2 p-2 rounded text-white"
            style={{
              backgroundColor: "var(--advert-list-bg)",
            }}
          />
        </div>
      </div>

      {/* Satıcı Filtrele */}
      <div className="mb-4">
        <h3 className="mb-2">Satıcı Filtrele</h3>
        <input
          type="text"
          placeholder="Satıcı Adı Giriniz"
          className="w-full p-2 rounded text-white"
          style={{
            backgroundColor: "var(--advert-list-bg)",
          }}
        />
      </div>

      {/* Kelime Filtrele */}
      <div className="mb-4">
        <h3 className="mb-2">Kelime Filtrele</h3>
        <input
          type="text"
          placeholder="Kelime Giriniz"
          className="w-full p-2 rounded text-white"
          style={{
            backgroundColor: "var(--advert-list-bg)",
          }}
        />
      </div>

      {/* Diğer Özellikler */}
      <div className="mb-4">
        <h3 className="mb-2">Diğer Özellikler</h3>
        <div className="space-y-2">
          {["Çevrimiçi Satıcı", "Güvenilir Satıcı", "En Hızlı Teslimat"].map(
            (option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input type="checkbox" className="h-4 w-4 text-purple-600" />
                <span>{option}</span>
              </div>
            )
          )}
        </div>
      </div>

      {/* Filtreyi Uygula Butonu */}
      <button className="w-full bg-purple-600 text-white p-2 rounded">
        Filtreyi Uygula
      </button>
    </div>
  );
};

export default SearchSidebar;
