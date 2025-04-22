import GameTabs from "../../../componants/kasalar/game-tabs";
import KasaTable from "../../../componants/kasalar/kasa-table";

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
    kullaniciResim: "https://placehold.co/150"
  },
  {
    no: "#35359",
    oyun: "League of Legends",
    oyunResim: "https://placehold.co/150",
    urun: "Bronz Kasa 100% Bakiye",
    tarih: "25.01.2023 Çarşamba 01:13",
    durum: "Teslim edildi",
    kullanici: "kcannmutlu",
    kullaniciResim: "https://placehold.co/150"
  },
  {
    no: "#35359",
    oyun: "League of Legends",
    oyunResim: "https://placehold.co/150",
    urun: "Bronz Kasa 100% Bakiye",
    tarih: "25.01.2023 Çarşamba 01:13",
    durum: "Teslim edildi",
    kullanici: "kcannmutlu",
    kullaniciResim: "https://placehold.co/150"
  },
  {
    no: "#35359",
    oyun: "League of Legends",
    oyunResim: "https://placehold.co/150",
    urun: "Bronz Kasa 100% Bakiye",
    tarih: "25.01.2023 Çarşamba 01:13",
    durum: "Teslim edildi",
    kullanici: "kcannmutlu",
    kullaniciResim: "https://placehold.co/150"
  },
];

export default function KasaDetail() {
  return (
    <>
      <GameTabs />
      <KasaTable data={data} title={"SON ÇIKANLAR"} />
    </>
  );
}
