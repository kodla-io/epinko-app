import React from "react";

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
                Giriş Yap
              </span>
            </div>
          </div>

          <div className="mb-6 md:mb-12">
            <label className="block text-lg mb-3">
              Kullanıcı adınızı veya e-posta adresinizi giriniz
            </label>
            <input
              type="text"
              placeholder="Kullanıcı adı ya da Eposta adresi"
              className="w-full px-4 py-6 rounded-lg  text-white border-none focus:outline-none"
            />
          </div>

          <div class="flex space-x-4 mb-6 md:mb-12">
            <div class="flex-1">
              <label class="block text-lg mb-3">
                Kullanıcı adı
              </label>
              <input
                type="text"
                placeholder="Kullanıcı adı"
                class="w-full px-4 py-6 rounded-lg  text-white border-none focus:outline-none"
              />
            </div>

            <div class="flex-1">
              <label class="block text-lg mb-3">
                Telefon numarası
              </label>
              <input
                type="text"
                placeholder="Telefon numarası"
                class="w-full px-4 py-6 rounded-lg  text-white border-none focus:outline-none"
              />
            </div>
          </div>

          <div className="mb-6 md:mb-12">
            <label className="block text-lg mb-3">Şifrenizi Giriniz</label>
            <input
              type="password"
              placeholder="Şifre"
              className="w-full px-4 py-6 rounded-lg  text-white border-none focus:outline-none"
            />
            <div className="text-right text-sm text-blue-400 mt-1 hover:underline cursor-pointer mt-2">
              Şifremi Unuttum
            </div>
          </div>

          <button className="w-full bg-[var(--primary)] hover:bg-[var(--label2)] transition-colors py-3 rounded-lg text-white font-semibold">
            Üye Ol
          </button>
        </div>
      </div>

      {/* Sol Kutu (Bilgi + İkonlar) */}
      <div className="w-full md:w-4/7 p-8 flex flex-col justify-center items-center gap-6 order-2 md:order-1">
        <div className="flex flex-col grid grid-cols-1 sm:grid-cols-2  lg:flex-row items-center gap-10">
          {/* Yazı */}
          <div className="max-w-md text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-4">Lorem Ipsum</h2>
            <p className="text-sm text-gray-300">
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
          style={{
            color: "var(--btn-color)",
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 w-full"
        >
          <div
            style={{
              backgroundColor: "var(--advert-list-bg)",
            }}
            className=" p-4 rounded-lg flex items-center gap-3"
          >
            <div className="bg-white text-black p-2 rounded">
              🛍️ {/* örnek emoji / ikon */}
            </div>
            <div>
              <h3 className="font-semibold text-sm">Lorem Ipsum</h3>
              <p className="text-xs text-gray-400">
                Elit lorem ipsum dummy info.
              </p>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "var(--advert-list-bg)",
            }}
            className=" p-4 rounded-lg flex items-center gap-3"
          >
            <div className="bg-white text-black p-2 rounded">
              🛍️ {/* örnek emoji / ikon */}
            </div>
            <div>
              <h3 className="font-semibold text-sm">Lorem Ipsum</h3>
              <p className="text-xs text-gray-400">
                Elit lorem ipsum dummy info.
              </p>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "var(--advert-list-bg)",
            }}
            className=" p-4 rounded-lg flex items-center gap-3"
          >
            <div className="bg-white text-black p-2 rounded">
              🛍️ {/* örnek emoji / ikon */}
            </div>
            <div>
              <h3 className="font-semibold text-sm">Lorem Ipsum</h3>
              <p className="text-xs text-gray-400">
                Elit lorem ipsum dummy info.
              </p>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "var(--advert-list-bg)",
            }}
            className=" p-4 rounded-lg flex items-center gap-3"
          >
            <div className="bg-white text-black p-2 rounded">
              🛍️ {/* örnek emoji / ikon */}
            </div>
            <div>
              <h3 className="font-semibold text-sm">Lorem Ipsum</h3>
              <p className="text-xs text-gray-400">
                Elit lorem ipsum dummy info.
              </p>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "var(--advert-list-bg)",
            }}
            className=" p-4 rounded-lg flex items-center gap-3"
          >
            <div className="bg-white text-black p-2 rounded">
              🛍️ {/* örnek emoji / ikon */}
            </div>
            <div>
              <h3 className="font-semibold text-sm">Lorem Ipsum</h3>
              <p className="text-xs text-gray-400">
                Elit lorem ipsum dummy info.
              </p>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "var(--advert-list-bg)",
            }}
            className=" p-4 rounded-lg flex items-center gap-3"
          >
            <div className="bg-white text-black p-2 rounded">
              🛍️ {/* örnek emoji / ikon */}
            </div>
            <div>
              <h3 className="font-semibold text-sm">Lorem Ipsum</h3>
              <p className="text-xs text-gray-400">
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
