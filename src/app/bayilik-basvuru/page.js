import React from "react";
import { FaTimes } from "react-icons/fa";

const BayilikBasvuru = () => {
  return (
    <div
      id="bayilik-basvuru"
      style={{ color: "var(--foreground)" }}
      className="container m-auto flex flex-col md:flex-row text-white my-6"
    >
      <div className="w-full md:w-3/7 flex items-center justify-center p-8 order-1 md:order-2">
        <div className="w-full">
          <h2 className="text-2xl text-white mb-1">Bayimiz Ol</h2>
          <h1 className="text-5xl font-bold mb-6">Başvuru Formu</h1>

          <div className="mb-6 md:mb-12">
            <label className="block text-lg mb-3">Yayın linkini giriniz</label>
            <select
              className="w-full px-4 py-6 rounded-lg border-none focus:outline-none"
              defaultValue="Lorem Ipsum 1"
            >
              <option className="bg-[var(--background)]" value="Lorem Ipsum 1">Lorem1</option>
              <option className="bg-[var(--background)]" value="Lorem Ipsum 2">Lorem2</option>
              <option className="bg-[var(--background)]" value="Lorem Ipsum 3">Lorem3</option>
              <option className="bg-[var(--background)]" value="Lorem Ipsum 4">Lorem4</option>
            </select>
          </div>

          <div className="flex space-x-4 mb-6 md:mb-12">
            <div className="flex-1">
              <label className="block text-lg mb-3">Yetkili Adı</label>
              <input
                type="text"
                placeholder="Yetkili Adı"
                className="w-full px-4 py-6 rounded-lg border-none focus:outline-none"
              />
            </div>

            <div className="flex-1">
              <label className="block text-lg mb-3">Yetkili Soyadı</label>
              <input
                type="text"
                placeholder="Yetkili Soyadı"
                className="w-full px-4 py-6 rounded-lg border-none focus:outline-none"
              />
            </div>
          </div>

          <div className="mb-6 md:mb-12">
            <label className="block text-lg mb-3">Yetkili E-mail</label>
            <input
              type="text"
              placeholder="E-mail"
              className="w-full px-4 py-6 rounded-lg border-none focus:outline-none"
            />
          </div>

          <div className="mb-6 md:mb-12">
            <label className="block text-lg mb-3">Yetkili Telefon</label>
            <input
              type="text"
              placeholder="Telefon"
              className="w-full px-4 py-6 rounded-lg border-none focus:outline-none"
            />
          </div>

          <button className="w-full bg-[var(--label4)] hover:bg-[var(--label6)] transition-colors py-3 rounded-lg text-white font-semibold">
            Başvuruyu Gönder
          </button>
        </div>
      </div>

      <div className="w-full md:w-4/7 p-8 flex flex-col justify-center items-center gap-6 order-2 md:order-1">
        <div className="flex flex-col grid grid-cols-1 sm:grid-cols-2  lg:flex-row items-center gap-10">
          <img
            src="/media/login-bg.png"
            alt="Placeholder"
            className="rounded-lg"
          />
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
        </div>

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

        <div className="bg-[var(--advert-list-bg)] text-[var(--foreground)] p-6 rounded-xl shadow-md mx-auto text-white">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Başvuru Kuralları
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <FaTimes className="w-6 h-6 mt-1 text-[var(--alert)]" />
              <p className="text-sm text-gray-300">
                Eget dolor morbi non arcu risus. Viverra ipsum nunc aliquet
                bibendum enim facilisis gravida neque convallis. Fermentum et
                sollicitudin ac orci.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <FaTimes className="w-6 h-6 mt-1 text-[var(--alert)]" />
              <p className="text-sm text-gray-300">
                Cursus mattis molestie a iaculis. Amet commodo nulla facilisi
                nullam vehicula ipsum a arcu cursus. Vitae turpis massa sed
                elementum tempus egestas sed.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <FaTimes className="w-6 h-6 mt-1 text-[var(--alert)]" />
              <p className="text-sm text-gray-300">
                Dictumst quisque sagittis purus sit amet volutpat consequat
                mauris nunc. Iaculis luctus accumsan tortor posuere ac. Id diam
                maecenas ultricies mi eget mauris.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <FaTimes className="w-6 h-6 mt-1 text-[var(--alert)]" />
              <p className="text-sm text-gray-300">
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

export default BayilikBasvuru;
