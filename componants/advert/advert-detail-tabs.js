import { useState } from "react";
import {
  FaClipboardList,
  FaStar,
  FaQuestionCircle,
  FaCommentDots,
  FaGavel,
} from "react-icons/fa";
import Comments from "../texts/comments"; 

// Tab içerik bileşenleri
const TabIlanAciklamasi = () => (
  <div>
    <p className="text-justify">
      Ultrices neque ornare aenean euismod elementum nisi quis. Nulla
      pellentesque dignissim enim sit amet venenatis. Tincidunt ornare massa
      eget egestas purus viverra accumsan in. Massa tempor nec feugiat nisl
      pretium. Amet consectetur adipiscing elit duis tristique sollicitudin.
      Aliquam vestibulum morbi blandit cursus risus at. Ante metus dictum at
      tempor commodo ullamcorper a. Tincidunt tortor aliquam nulla facilisi.
      Etiam dignissim diam quis enim lobortis scelerisque fermentum. Ac odio
      tempor orci dapibus. Sollicitudin ac orci phasellus egestas tellus rutrum
      tellus pellentesque.
    </p>
    <br />
    <p className="text-justify">
      In egestas erat imperdiet sed euismod. Facilisi cras fermentum odio eu
      feugiat pretium nibh. Integer enim neque volutpat ac tincidunt vitae
      semper quis. Sem nulla pharetra diam sit amet nisl suscipit adipiscing
      bibendum . Vitae congue mauris rhoncus aenean vel elit scelerisque.
      Egestas sed sed risus pretium quam vulputate dignissim. Sed euismod nisi
      porta lorem mollis. Venenatis a condimentum vitae sapien. Pharetra vel
      turpis nunc eget. Duis convallis convallis tellus id interdum velit
      laoreet. Scelerisque fermentum dui faucibus in ornare quam. Volutpat est
      velit egestas dui id ornare arcu odio ut. At quis risus sed vulputate odio
      ut enim blandit. At lectus urna duis convallis convallis tellus id
      interdum velit. Vitae sapien pellentesque habitant morbi tristique
      senectus et netus. Nibh mauris cursus mattis molestie a iaculis at erat
      pellentesque. Ut ornare lectus sit amet est placerat in egestas erat.{" "}
    </p>
  </div>
);

const TabLoremIpsum = () => (
  <div>
    <p className="text-justify">
      Ultrices neque ornare aenean euismod elementum nisi quis. Nulla
      pellentesque dignissim enim sit amet venenatis. Tincidunt ornare massa
      eget egestas purus viverra Tincidunt tortor aliquam nulla facilisi. Etiam
      dignissim diam quis enim lobortis scelerisque fermentum. Ac odio tempor
      orci dapibus. Sollicitudin ac orci phasellus egestas tellus rutrum tellus
      pellentesque.
    </p>
    <br />
    <p className="text-justify">
      In egestas erat imperdiet sed euismod. Facilisi cras fermentum odio eu
      feugiat pretium nibh. Integer enim neque volutpat ac tincidunt vitae
      semper quis. Sem nulla pharetra diam sit lis tellus id interdum velit
      laoreet. Scelerisque fermentum cursus mattis molestie a iaculis at erat
      pellentesque. Ut ornare lectus sit amet est placerat in egestas erat.{" "}
    </p>
  </div>
);

const TabSoruCevap = () => (
  <div>
    <div className="mb-3 p-2 bg-[var(--advert-list-bg)] rounded-lg">
    <p className="font-semibold text-lg"> Ürün elime ne kadar sürede ulaşır?</p>
    <p className="ml-4 text-sm"> Siparişiniz onaylandıktan sonra genellikle 2-3 iş günü içinde kargoya verilir. Teslimat süresi ise bulunduğunuz ile göre değişiklik gösterebilir.</p>
  </div>

  <div className="mb-3 p-2 bg-[var(--advert-list-bg)] rounded-lg">
    <p className="font-semibold text-lg"> Ürün orijinal mi?</p>
    <p className="ml-4 text-sm"> Evet, sattığımız tüm ürünler orijinaldir ve üretici firma tarafından garanti altındadır. Faturalı olarak gönderilir.</p>
  </div>

  <div className="mb-3 p-2 bg-[var(--advert-list-bg)] rounded-lg">
    <p className="font-semibold text-lg"> Ürünle birlikte şarj aleti de geliyor mu?</p>
    <p className="ml-4 text-sm"> Evet, kutu içeriğinde orijinal şarj aleti ve garanti belgesi bulunmaktadır.</p>
  </div>

  <div className="mb-3 p-2 bg-[var(--advert-list-bg)] rounded-lg">
    <p className="font-semibold text-lg"> İade süreci nasıl işliyor?</p>
    <p className="ml-4 text-sm"> Ürünü teslim aldıktan sonra 14 gün içinde iade talebinde bulunabilirsiniz. Ürün kullanılmamış ve orijinal ambalajında olmalıdır.</p>
  </div>

  <div className="mb-3 p-2 bg-[var(--advert-list-bg)] rounded-lg">
    <p className="font-semibold text-lg"> Renk seçeneği mevcut mu?</p>
    <p className="ml-4 text-sm"> Evet, ürün açıklamasında belirtilen tüm renk seçenekleri stoklarımızda mevcuttur. Sipariş sırasında tercihinizi belirtebilirsiniz.</p>
  </div>
  </div>
);

const TabSaticiYorumlari = () => (
  <div>
    <Comments />
  </div>
);

const TabSatinAlmaKurallari = () => (
  <div>
    <p className="text-justify">
      Ultrices neque ornare aenean euismod elementum nisi quis. Nulla
      pellentesque dignissim enim sit amet venenatis. Tincidunt ornare massa
      eget egestas purus viverra accumsan in. Massa tempor nec feugiat nisl
      pretium. Amet consectetur adipiscing elit duis tristique sollicitudin.
      Aliquam vestibulum morbi blandit cursus risus at. Ante metus dictum at
      tempor commodo ullamcorper a. Tincidunt tortor aliquam nulla facilisi.
      Etiam dignissim diam quis enim lobortis scelerisque fermentum. Ac odio
      tempor orci dapibus. Sollicitudin ac orci phasellus egestas tellus rutrum
      tellus pellentesque.
    </p>
    <br />
    <p className="text-justify">
      In egestas erat imperdiet sed euismod. Facilisi cras fermentum odio eu
      feugiat pretium nibh. Integer enim neque volutpat ac tincidunt vitae
      semper quis. Sem nulla pharetra diam sit amet nisl suscipit adipiscing
      bibendum . Vitae congue mauris rhoncus aenean vel elit scelerisque.
      Egestas sed sed risus pretium quam vulputate dignissim. Sed euismod nisi
      porta lorem mollis. Venenatis a condimentum vitae sapien. Pharetra vel
      turpis nunc eget. Duis convallis convallis tellus id interdum velit
      laoreet. Scelerisque fermentum dui faucibus in ornare quam. Volutpat est
      velit egestas dui id ornare arcu odio ut. At quis risus sed vulputate odio
      ut enim blandit. At lectus urna duis convallis convallis tellus id
      interdum velit. Vitae sapien pellentesque habitant morbi tristique
      senectus et netus. Nibh mauris cursus mattis molestie a iaculis at erat
      pellentesque. Ut ornare lectus sit amet est placerat in egestas erat.{" "}
    </p>
  </div>
);

// Tab listesi
const tabs = [
  { id: 1, label: "İlan Açıklaması", icon: <FaClipboardList /> },
  { id: 2, label: "Lorem Ipsum", icon: <FaStar /> },
  { id: 3, label: "Soru Cevap", icon: <FaQuestionCircle /> },
  { id: 4, label: "Satıcı Yorumları", icon: <FaCommentDots /> },
  { id: 5, label: "Satın Alma Kuralları", icon: <FaGavel /> },
];

const MultipleTabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  // İçeriği dinamik olarak seç
  const renderTabContent = () => {
    switch (activeTab) {
      case 1:
        return <TabIlanAciklamasi />;
      case 2:
        return <TabLoremIpsum />;
      case 3:
        return <TabSoruCevap />;
      case 4:
        return <TabSaticiYorumlari />;
      case 5:
        return <TabSatinAlmaKurallari />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto mt-4 px-0 md:px-4 md:px-0">
      <div className="w-full">
        {/* Tabs */}
        <div className="flex overflow-x-auto bg-[var(--advert-list-bg)] rounded-t-lg px-2 py-3 gap-2 scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md whitespace-nowrap transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-[#3f3f5e]"
                  : "bg-[#2a2a3b] hover:bg-[#3a3a50]"
              }`}
            >
              {tab.icon}
              <span className="text-sm font-medium">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-[var(--advert-list-bg)] p-4 rounded-b-lg max-h-[300px] min-h-[200px] mt-1 overflow-y-auto">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default MultipleTabs;
