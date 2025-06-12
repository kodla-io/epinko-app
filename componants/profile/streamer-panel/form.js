import React, { useRef, useState } from "react";
import { FaTwitch, FaTrashAlt, FaDonate } from "react-icons/fa";

const inputBase =
  "w-full p-3 rounded-md bg-[var(--profile-input)] text-white border-none focus:outline-none transition";
const labelBase = "block text-sm mb-1 font-medium text-white";
const labelInfo = "ml-2 text-xs font-normal text-gray-400";

import { FaCog } from "react-icons/fa"; // Üstteki ikon

const StreamerPanel = ({ title }) => {
  // State'ler
  const [profilePic, setProfilePic] = useState(null); // file nesnesi
  const [profilePicUrl, setProfilePicUrl] = useState(""); // preview
  const [username, setUsername] = useState("");
  const [twitchUrl, setTwitchUrl] = useState("");
  const [facebookUrl, setFacebookUrl] = useState("");
  const [twitterUrl, setTwitterUrl] = useState("");
  const [instagramUrl, setInstagramUrl] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [minGosterim, setMinGosterim] = useState("");
  const [profilNote, setProfilNote] = useState("");
  const [platforms, setPlatforms] = useState({ twitch: false });

  // Dosya seçme inputu
  const fileInputRef = useRef();

  // Profil fotoğrafı preview
  const handleProfilePic = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(file);
      setProfilePicUrl(URL.createObjectURL(file));
    }
  };

  // CheckBox ile platform ekleme/çıkarma (ileride genişletilebilir)
  const handlePlatformChange = (e) => {
    setPlatforms({ ...platforms, [e.target.name]: e.target.checked });
  };

  // Submit (yakala)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form datasını burada backend'e gönderebilirsin
    // ...
    alert("Başarıyla kaydedildi!");
  };

  return (
    <>
      <div className="flex items-center space-x-4">
        <h2
          style={{ color: "var(--foreground)" }}
          className="text-white text-[30px] py-2 font-bold px-4"
        >
          {title}
        </h2>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
      </div>
      <div className="bg-[var(--profile-tab-bg)] border border-[var(--profile-tab-bg)]/10 rounded-xl p-2 md:p-4 mb-8">
        {/* Header */}
        <div className="flex items-center mb-3 gap-3">
          <FaCog className="text-white text-3xl" />
          <h2 className="text-[30px] font-bold text-white">Yayıncı Paneli</h2>
        </div>
        {/* Açıklama */}
        <div className="text-base text-gray-300 mb-6">
          Youtube ve Twitch Yayın Yapmak isteyen oyuncularımız başvurunuzu bu
          alanda yapabilirsiniz
        </div>
        <hr className="border-white/10 mb-6 opacity-60" />

        {/* Buton */}
        <div>
          <button
            className="flex items-center gap-2 px-8 py-3 rounded-lg border transition
            text-[var(--label6,#9147ff)] border-[var(--label6,#9147ff)]
            hover:bg-[var(--label6,#9147ff)] hover:text-white focus:outline-none text-lg font-semibold
            duration-200"
          >
            <FaTwitch className="w-6 h-6" />
            Twitch ile Giriş Yap
          </button>
        </div>
      </div>
      <div
        id="stream-form"
        className="bg-[var(--profile-tab-bg)] rounded-xl p-2 md:p-4 relative"
      >
        {/* Üst Butonlar */}
        <div className="flex flex-wrap gap-3 mb-8">
          <button
            type="button"
            className="flex items-center gap-2 px-6 py-2 rounded-lg border transition
            text-[var(--label6,#9147ff)] border-[var(--label6,#9147ff)]
            hover:bg-[var(--label6,#9147ff)] hover:text-white font-bold text-sm md:text-lg w-full md:w-auto duration-200"
          >
            <FaTwitch className="w-5 h-5" />
            (ben00nur) Twitch hesabını kaldır
          </button>
          <button
            type="button"
            className="flex items-center gap-2 px-6 py-2 rounded-lg border transition
            text-[var(--label6,#17fff7)] border-[var(--label6,#17fff7)]
            hover:bg-[var(--label6,#17fff7)] hover:text-white font-bold text-sm md:text-lg w-full md:w-auto duration-200"
          >
            <FaDonate className="w-5 h-5" />
            Streamlabs ile Giriş Yap ( Bağış için )
          </button>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit}>
          {/* 2 Sütunlu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* SOL SÜTUN: Profil Fotoğrafı */}
            <div className="flex flex-col gap-4 items-center md:items-start justify-start">
              <label
                className={`${labelBase} mb-3 w-full text-center md:text-left`}
              >
                Profil Resmi <span className={labelInfo}>(Zorunlu Değil)</span>
              </label>
              <div className="w-full flex flex-col items-center md:items-start ">
                <div className="w-25 aspect-square relative rounded-xl bg-black overflow-hidden mb-2 flex items-center justify-center">
                  {profilePicUrl ? (
                    <img
                      src={profilePicUrl}
                      alt="Profil Önizleme"
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <span className="text-gray-500 text-center text-xs px-2">
                      Profil resmi seçilmedi
                    </span>
                  )}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  className="block text-sm rounded px-2 py-1 bg-[#232337] text-gray-300 w-full cursor-pointer"
                  onChange={handleProfilePic}
                  ref={fileInputRef}
                />
              </div>
              <div className="w-full">
                <label className={labelBase}>
                  Kullanıcı Adı
                  <span className={labelInfo}>* Zorunlu Alan</span>
                </label>
                <input
                  type="text"
                  className={inputBase}
                  placeholder="Kullanıcı Adı"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              <div className="w-full">
                <label className={labelBase}>
                  Twitch Adresi
                  <span className={labelInfo}>* Değiştirilemez</span>
                </label>
                <input
                  type="text"
                  className={inputBase}
                  placeholder="https://twitch.tv/kullanici"
                  value={twitchUrl}
                  disabled
                  onChange={(e) => setTwitchUrl(e.target.value)}
                />
              </div>

              <div className="w-full">
                <label className={labelBase}>
                  Facebook Adresi
                  <span className={labelInfo}>* Boş Bırakılabilir</span>
                </label>
                <input
                  type="text"
                  className={inputBase}
                  placeholder="Facebook profil linki"
                  value={facebookUrl}
                  onChange={(e) => setFacebookUrl(e.target.value)}
                />
              </div>

              <div className="w-full">
                <label className={labelBase}>
                  Ekranda minimum kaç ₺ ve üzeri görünmekte?
                  <span className={labelInfo}>* Zorunlu Alan</span>
                </label>
                <input
                  type="number"
                  step="0.01"
                  className={inputBase}
                  placeholder="0,00"
                  value={minGosterim}
                  onChange={(e) => setMinGosterim(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* SAĞ SÜTUN: Tüm inputlar alt alta */}
            <div className="flex flex-col gap-4">
              <div>
                <label className={labelBase}>
                  Youtube Adresi
                  <span className={labelInfo}>* Boş Bırakılabilir</span>
                </label>
                <input
                  type="text"
                  className={inputBase}
                  placeholder="Youtube kanal linki"
                  value={youtubeUrl}
                  onChange={(e) => setYoutubeUrl(e.target.value)}
                />
              </div>
              <div>
                <label className={labelBase}>
                  Twitter Adresi
                  <span className={labelInfo}>* Boş Bırakılabilir</span>
                </label>
                <input
                  type="text"
                  className={inputBase}
                  placeholder="Twitter profil linki"
                  value={twitterUrl}
                  onChange={(e) => setTwitterUrl(e.target.value)}
                />
              </div>
              <div>
                <label className={labelBase}>
                  Instagram Adresi
                  <span className={labelInfo}>* Boş Bırakılabilir</span>
                </label>
                <input
                  type="text"
                  className={inputBase}
                  placeholder="Instagram profil linki"
                  value={instagramUrl}
                  onChange={(e) => setInstagramUrl(e.target.value)}
                />
              </div>
              <div>
                <label className={labelBase}>
                  Profil Notu
                  <span className={labelInfo}>(Zorunlu Değil)</span>
                </label>
                <textarea
                  className={`${inputBase} min-h-[130px] resize-none`}
                  placeholder="Yayıncı detayınızda kullanıcılara gösterilir"
                  value={profilNote}
                  onChange={(e) => setProfilNote(e.target.value)}
                />
              </div>
              <div>
                <label className={labelBase}>
                  Hangi Platformlarda Yayın Yapıcaksın?
                </label>
                <div className="flex flex-wrap gap-3 items-center mt-2">
                  <label className="inline-flex items-center gap-2 text-gray-300 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-5 h-5 accent-[var(--label6,#9147ff)]"
                      name="twitch"
                      checked={platforms.twitch}
                      onChange={handlePlatformChange}
                    />
                    Twitch
                  </label>
                  {/* Diğer platformlar için ek label'lar */}
                  {/* ... */}
                </div>
              </div>
            </div>
          </div>

          {/* SAĞ ALTA KAYDET BUTONU */}
          <div className="w-full pt-8">
            <button
              type="submit"
              className="rounded-md w-full py-3 font-bold bg-[var(--label6,#0aefff)] text-white text-lg transition hover:opacity-80 duration-200"
            >
              Başvuruyu Tamamla
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default StreamerPanel;
