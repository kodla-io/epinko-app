import React from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { IoLogoTwitch } from "react-icons/io5";

const Register = () => {
  return (
    <div
      id="register"
      style={{ color: "var(--foreground)" }}
      className="container m-auto flex flex-col md:flex-row text-white my-6"
    >
      {/* Sağ Kutu (Giriş Formu) - Mobilde üstte */}
      <div className="w-full md:w-3/7 flex items-center justify-center p-8 order-1 md:order-2">
        <div className="w-full">
          <div className="flex justify-between mb-1 md:mb-8">
            <div>
              <h2 className="text-2xl text-white mb-1">Merhaba</h2>
              <h1 className="text-5xl font-bold mb-6">Kayıt Ol</h1>
            </div>
            <div className="text-sm mt-4 flex flex-wrap flex-col justify-start items-end">
              Üye Misin?{" "}
              <span className="text-blue-400 hover:underline cursor-pointer">
                <Link href="/login"> Giriş Yap</Link>
              </span>
            </div>
          </div>

          <div className="flex flex-wrap space-x-2 mb-3 md:mb-8">
            <div className="w-full md:flex-1">
              <label className="block text-lg mb-3">Ad</label>
              <input
                type="text"
                placeholder="Adınız"
                className="w-full px-2 py-4 md:px-4 md:py-6 rounded-lg  text-white border-none focus:outline-none"
              />
            </div>

            <div className="w-full md:flex-1">
              <label className="block text-lg mb-3">Soyad</label>
              <input
                type="Soyad"
                placeholder="Soyadınız"
                className="w-full px-2 py-4 md:px-4 md:py-6 rounded-lg  text-white border-none focus:outline-none"
              />
            </div>
          </div>

          <div className="flex flex-wrap space-x-2 mb-3 md:mb-8">
            <div className="w-full md:flex-1">
              <label className="block text-lg mb-3">Kullanıcı adı</label>
              <input
                type="text"
                placeholder="Kullanıcı adı"
                className="w-full px-2 py-4 md:px-4 md:py-6 rounded-lg  text-white border-none focus:outline-none"
              />
            </div>

            <div className="w-full md:flex-1">
              <label className="block text-lg mb-3">Email Adresi</label>
              <input
                type="email"
                placeholder="Email Adresi"
                className="w-full px-2 py-4 md:px-4 md:py-6 rounded-lg  text-white border-none focus:outline-none"
              />
            </div>
          </div>

          <div className="mb-3 md:mb-6 flex flex-wrap space-x-2">
            <div className="w-full md:flex-1">
              <label className="block text-lg mb-3">Şifre</label>
              <input
                type="password"
                placeholder="Şifre"
                className="w-full px-2 py-4 md:px-4 md:py-6 rounded-lg  text-white border-none focus:outline-none"
              />
            </div>

            <div className="w-full md:flex-1">
              <label className="block text-lg mb-3">Şifre Tekrar</label>
              <input
                type="password"
                placeholder="Şifre Tekrar"
                className="w-full px-2 py-4 md:px-4 md:py-6 rounded-lg  text-white border-none focus:outline-none"
              />
            </div>
          </div>

          <button className="w-full mb-2 bg-[var(--primary)] hover:opacity-80 transition-colors py-3 rounded-lg text-white font-semibold">
            Üye Ol
          </button>

          <div className="flex w-full flex-wrap md:flex-nowrap gap-2">
            {/* Google Login */}
            <Link href="#" className="w-full md:w-1/2">
              <button className="w-full bg-white text-black py-3 rounded-lg hover:opacity-80 transition text-black font-semibold flex items-center gap-2 justify-center shadow-md">
                <FcGoogle className="w-8 h-8" />
                <span>Google ile Kayıt Ol</span>
              </button>
            </Link>

            {/* Twitch Login */}
            <Link href="#" className="w-full md:w-1/2">
              <button className="w-full bg-[var(--label4)] text-white py-3 rounded-lg hover:opacity-80 transition text-white font-semibold flex items-center gap-2 justify-center">
                <IoLogoTwitch className="w-8 h-8" />
                <span>Twitch ile Kayıt Ol</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Sol Kutu (Bilgi + İkonlar) */}
      <div className="w-full md:w-4/7 p-8 flex flex-col justify-center items-center gap-6 order-2 md:order-1">
        <div className="flex flex-col grid grid-cols-1 sm:grid-cols-2  lg:flex-row items-center gap-10">
          {/* Yazı */}
          <div className="max-w-md text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-4">Lorem Ipsum</h2>
            <p className="text-sm text-[var(--text-gray)]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged.
            </p>
          </div>
          {/* Görsel */}
          <img
            src="/media/login-bg.png"
            alt="Placeholder"
            className="rounded-lg"
          />
        </div>

        {/* 2x2 ikon + yazılar */}
        <div
          className="text-[var(--foreground)] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 w-full"
        >
          <div
            className=" p-4 rounded-lg flex items-center gap-3 bg-[var(--advert-card-bg)]"
          >
            <div className="bg-white text-black p-2 rounded">
              🛍️ {/* örnek emoji / ikon */}
            </div>
            <div>
              <h3 className="font-semibold text-sm">Lorem Ipsum</h3>
              <p className="text-xs text-[var(--text-gray)]">
                Elit lorem ipsum dummy info.
              </p>
            </div>
          </div>
          <div
            className=" p-4 rounded-lg flex items-center gap-3 bg-[var(--advert-card-bg)]"
          >
            <div className="bg-white text-black p-2 rounded">
              🛍️ {/* örnek emoji / ikon */}
            </div>
            <div>
              <h3 className="font-semibold text-sm">Lorem Ipsum</h3>
              <p className="text-xs text-[var(--text-gray)]">
                Elit lorem ipsum dummy info.
              </p>
            </div>
          </div>
          <div
            className=" p-4 rounded-lg flex items-center gap-3 bg-[var(--advert-card-bg)]"
          >
            <div className="bg-white text-black p-2 rounded">
              🛍️ {/* örnek emoji / ikon */}
            </div>
            <div>
              <h3 className="font-semibold text-sm">Lorem Ipsum</h3>
              <p className="text-xs text-[var(--text-gray)]">
                Elit lorem ipsum dummy info.
              </p>
            </div>
          </div>
          <div
            className=" p-4 rounded-lg flex items-center gap-3 bg-[var(--advert-card-bg)]"
          >
            <div className="bg-white text-black p-2 rounded">
              🛍️ {/* örnek emoji / ikon */}
            </div>
            <div>
              <h3 className="font-semibold text-sm">Lorem Ipsum</h3>
              <p className="text-xs text-[var(--text-gray)]">
                Elit lorem ipsum dummy info.
              </p>
            </div>
          </div>
          <div
            className=" p-4 rounded-lg flex items-center gap-3 bg-[var(--advert-card-bg)]"
          >
            <div className="bg-white text-black p-2 rounded">
              🛍️ {/* örnek emoji / ikon */}
            </div>
            <div>
              <h3 className="font-semibold text-sm">Lorem Ipsum</h3>
              <p className="text-xs text-[var(--text-gray)]">
                Elit lorem ipsum dummy info.
              </p>
            </div>
          </div>
          <div
            className=" p-4 rounded-lg flex items-center gap-3 bg-[var(--advert-card-bg)]"
          >
            <div className="bg-white text-black p-2 rounded">
              🛍️ {/* örnek emoji / ikon */}
            </div>
            <div>
              <h3 className="font-semibold text-sm">Lorem Ipsum</h3>
              <p className="text-xs text-[var(--text-gray)]">
                Elit lorem ipsum dummy info.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
