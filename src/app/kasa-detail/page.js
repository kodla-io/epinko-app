import GameTabs from "../../../componants/kasalar/game-tabs";
import KasaTable from "../../../componants/kasalar/kasa-table";
import KasaProducts from "../../../componants/kasalar/kasa-product";
import Comments from "../../../componants/texts/comments";

const data = [
  {
    no: "#35359",
    oyun: "League of Legends",
    oyunResim: "https://placehold.co/150",
    urun: "Bronz Kasa 100% Bakiye",
    tarih: "25.01.2023 Çarşamba 01:13",
    durum: "Teslim edildi",
    kullanici: "kcannmutlu",
    kullaniciResim: "https://placehold.co/150",
  },
  {
    no: "#35359",
    oyun: "League of Legends",
    oyunResim: "https://placehold.co/150",
    urun: "Bronz Kasa 100% Bakiye",
    tarih: "25.01.2023 Çarşamba 01:13",
    durum: "Teslim edildi",
    kullanici: "kcannmutlu",
    kullaniciResim: "https://placehold.co/150",
  },
  {
    no: "#35359",
    oyun: "League of Legends",
    oyunResim: "https://placehold.co/150",
    urun: "Bronz Kasa 100% Bakiye",
    tarih: "25.01.2023 Çarşamba 01:13",
    durum: "Teslim edildi",
    kullanici: "kcannmutlu",
    kullaniciResim: "https://placehold.co/150",
  },
  {
    no: "#35359",
    oyun: "League of Legends",
    oyunResim: "https://placehold.co/150",
    urun: "Bronz Kasa 100% Bakiye",
    tarih: "25.01.2023 Çarşamba 01:13",
    durum: "Teslim edildi",
    kullanici: "kcannmutlu",
    kullaniciResim: "https://placehold.co/150",
  },
  {
    no: "#35359",
    oyun: "League of Legends",
    oyunResim: "https://placehold.co/150",
    urun: "Bronz Kasa 100% Bakiye",
    tarih: "25.01.2023 Çarşamba 01:13",
    durum: "Teslim edildi",
    kullanici: "kcannmutlu",
    kullaniciResim: "https://placehold.co/150",
  },
];

export default function KasaDetail() {
  return (
    <>
      <GameTabs />
      <KasaTable data={data} title={"SON ÇIKANLAR"} />
      <KasaProducts />
      <div className="container mx-auto">
        <div className="flex items-center space-x-4 mx-0 md:mx-4 p-4 md:p-0">
          <h2
            style={{ color: "var(--foreground)" }}
            className="text-white text-[30px] font-bold"
          >
            YORUMLAR
          </h2>
          <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
        </div>
        <Comments />
      </div>
    </>
  );
}
