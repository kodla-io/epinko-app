import React from "react";
import { FaTimes } from "react-icons/fa";

const YayinciBasvuru = () => {
  return (
    <div
      id="yayinci-basvuru"
      style={{ color: "var(--foreground)" }}
      className="container m-auto flex flex-col md:flex-row text-white my-6"
    >
      <div className="w-full md:w-3/7 flex items-center justify-center p-8 order-1 md:order-2">
        <div className="w-full">
          <h2 className="text-2xl text-white mb-1">Yayıncımız Ol</h2>
          <h1 className="text-5xl font-bold mb-6">Yayıncı Başvuru</h1>

          <div className="mb-6 md:mb-12">
            <label className="block text-lg mb-3">Yayın linkini giriniz</label>
            <input
              type="text"
              placeholder="Yayın linki"
              className="w-full px-4 py-6 rounded-lg  text-white border-none focus:outline-none"
            />
          </div>

          <div className="flex space-x-4 mb-6 md:mb-12">
            <div className="flex-1">
              <label className="block text-lg mb-3">Kanal adı</label>
              <input
                type="text"
                placeholder="Kanal adı"
                className="w-full px-4 py-6 rounded-lg  text-white border-none focus:outline-none"
              />
            </div>

            <div className="flex-1">
              <label className="block text-lg mb-3">Minimum Bağış</label>
              <input
                type="text"
                placeholder="Minimum Bağış Tutarı"
                className="w-full px-4 py-6 rounded-lg  text-white border-none focus:outline-none"
              />
            </div>
          </div>

          <div className="mb-6 md:mb-12">
            <label className="block text-lg mb-3">Bağış linki</label>
            <input
              type="text"
              placeholder="Bağış linki"
              className="w-full px-4 py-6 rounded-lg  text-white border-none focus:outline-none"
            />
          </div>

          <button className="w-full bg-[var(--label4)] hover:bg-[var(--label6)] transition-colors py-3 rounded-lg text-white font-semibold">
            Başvuruyu Gönder
          </button>
        </div>
      </div>

      <div className="w-full md:w-4/7 p-8 flex flex-col justify-center items-center gap-6 order-2 md:order-1">
        <div className="w-full md:max-h-[500px] md:min-h-[500px] max-h-auto min-h-auto relative">
          <img
            src="https://placehold.co/500/black/white"
            alt="Placeholder"
            className="object-cover hidden md:block rounded-lg w-[300px] h-[300px] absolute top-0 left-0 z-20"
          />
          <img
            src="https://placehold.co/500/black/white"
            alt="Placeholder"
            className="object-cover hidden md:block rounded-lg w-[250px] h-[200px] absolute top-1/2 right-0 transform -translate-y-1/2 z-20"
          />
          <img
            src="https://placehold.co/500"
            alt="Placeholder"
            className="object-cover rounded-lg w-auto m-auto md:m-0 h-auto md:w-[300px] md:h-[400px] relative md:absolute bottom-0 left-0 md:left-1/2 transform md:-translate-x-1/2 z-10"
          />
        </div>

        <div className="bg-[var(--advert-list-bg)] text-[var(--foreground)] p-6 rounded-xl shadow-md mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">Başvuru Kuralları</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <FaTimes className="w-6 h-6 mt-1 text-[var(--alert)]" />
              <p className="text-sm text-[var(--text-gray)]">
                Eget dolor morbi non arcu risus. Viverra ipsum nunc aliquet
                bibendum enim facilisis gravida neque convallis. Fermentum et
                sollicitudin ac orci.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <FaTimes className="w-6 h-6 mt-1 text-[var(--alert)]" />
              <p className="text-sm text-[var(--text-gray)]">
                Cursus mattis molestie a iaculis. Amet commodo nulla facilisi
                nullam vehicula ipsum a arcu cursus. Vitae turpis massa sed
                elementum tempus egestas sed.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <FaTimes className="w-6 h-6 mt-1 text-[var(--alert)]" />
              <p className="text-sm text-[var(--text-gray)]">
                Dictumst quisque sagittis purus sit amet volutpat consequat
                mauris nunc. Iaculis luctus accumsan tortor posuere ac. Id diam
                maecenas ultricies mi eget mauris.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <FaTimes className="w-6 h-6 mt-1 text-[var(--alert)]" />
              <p className="text-sm text-[var(--text-gray)]">
                Nisi vitae suscipit tellus mauris a diam. Tristique et egestas
                quis ipsum suspendisse. Odio ut sem nulla pharetra diam sit amet
                nisl.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default YayinciBasvuru;
