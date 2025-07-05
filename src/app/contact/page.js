"use client";

import React, { useState } from "react";
import {
  FaQuestion,
  FaRegListAlt,
  FaMoneyCheckAlt,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";

const Contact = () => {
  const [activeTab, setActiveTab] = useState("Contact");

  return (
    <div className="my-16">
      <div className="container m-auto">
        <div className="flex flex-wrap md:flex-nowrap p-4">
          {/* Sol Kısım: Manuel Tablar */}
          <div className="min-w-[100%] mb-3 md:min-w-[250px]">
            <div className="bg-[var(--advert-card-bg)] p-4 roulded-lg mt-3">
              <ul>
                <li
                  className={`flex items-center p-2 my-2 cursor-pointer rounded ${
                    activeTab === "Contact"
                      ? "text-[var(--foreground)] bg-[var(--advert-list-bg)]"
                      : ""
                  }`}
                  onClick={() => setActiveTab("Contact")}
                >
                  <span className="mr-2">
                    <FaQuestion />
                  </span>
                  İletişim
                </li>
                <li
                  className={`flex items-center p-2 my-2 cursor-pointer rounded ${
                    activeTab === "KVKK"
                      ? "text-[var(--foreground)] bg-[var(--advert-list-bg)]"
                      : ""
                  }`}
                  onClick={() => setActiveTab("KVKK")}
                >
                  <span className="mr-2">
                    <FaRegListAlt />
                  </span>
                  KVKK
                </li>
                <li
                  className={`flex items-center p-2 my-2 cursor-pointer rounded ${
                    activeTab === "About"
                      ? "text-[var(--foreground)] bg-[var(--advert-list-bg)]"
                      : ""
                  }`}
                  onClick={() => setActiveTab("About")}
                >
                  <span className="mr-2">
                    <FaMoneyCheckAlt />
                  </span>
                  Hakkımızda
                </li>
              </ul>
            </div>

            <div className="text-white flex flex-col items-center py-3 space-y-2">
              <button className="bg-[var(--alert)] flex items-center justify-center w-full p-3 rounded shadow-lg hover:opacity-80 transition-colors">
                <FaEnvelope className="mr-2" />
                Mail Gönder
              </button>

              <button className="bg-[var(--label2)] flex items-center justify-center w-full p-3 rounded shadow-lg hover:opacity-80 transition-colors">
                <FaPhone className="mr-2" />
                Sabit Telefondan Ara
              </button>

              <button className="bg-[var(--success)] flex items-center justify-center w-full p-3 rounded shadow-lg hover:opacity-80 transition-colors">
                <FaWhatsapp className="mr-2" />
                Whatsapp Destek Hattı
              </button>
            </div>
          </div>

          {/* Sağ Kısım: Manuel İçerikler */}
          <div className="flex-1 px-0 md:px-4 mt-3 md:mt-0 w-full">
            {activeTab === "Contact" && (
              <div className="p-4 bg-[var(--advert-list-bg)] roulded-lg">
                <h2 className="text-center text-3xl mb-3">İletişim</h2>
                <p className="text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Nibh sed pulvinar proin gravida. Consectetur lorem donec massa
                  sapien faucibus et molestie ac. Dui accumsan sit amet nulla
                  facilisi morbi tempus iaculis urna. Pellentesque eu tincidunt
                  tortor aliquam nulla facilisi. Sit amet mattis vulputate enim
                  nulla aliquet porttitor lacus luctus. Nibh nisl condimentum id
                  venenatis a. Vel pretium lectus quam id leo in vitae turpis.
                  Laoreet non curabitur gravida arcu ac tortor. Cras tincidunt
                  lobortis feugiat vivamus.
                </p>
                <br />
                <p className="text-justify">
                  Nunc congue nisi vitae suscipit tellus. Egestas egestas
                  fringilla phasellus faucibus scelerisque. Sed risus pretium
                  quam vulputate dignissim suspendisse in est. Id nibh tortor id
                  aliquet. Vitae auctor eu augue ut lectus arcu bibendum. Mi
                  quis hendrerit dolor magna eget est lorem ipsum. Feugiat in
                  fermentum posuere urna nec tincidunt praesent semper. Amet
                  nisl suscipit adipiscing bibendum est ultricies integer quis.
                  Praesent elementum facilisis leo vel fringilla est ullamcorper
                  eget. Eget velit aliquet sagittis id consectetur. Enim nulla
                  aliquet porttitor lacus luctus accumsan. Cursus vitae congue
                  mauris rhoncus aenean vel elit scelerisque. Eleifend donec
                  pretium vulputate sapien. Neque aliquam vestibulum morbi
                  blandit cursus risus at ultrices. Ultricies lacus sed turpis
                  tincidunt id aliquet risus feugiat. Sodales ut etiam sit amet.
                  Volutpat blandit aliquam etiam erat. Lorem dolor sed viverra
                  ipsum. Sociis natoque penatibus et magnis dis parturient
                  montes nascetur ridiculus mus.
                </p>
                <br />
                <p className="text-justify">
                  Nulla facilisi nullam vehicula ipsum a arcu cursus vitae
                  congue. Tortor dignissim convallis aenean et tortor at risus.
                  Tortor vitae purus faucibus ornare suspendisse sed.
                </p>
                <div className="text-[var(--foreground)] flex flex-wrap md:flex-nowrap justify-center p-4">
                  <Link className="border border-[var(--alert)] bg-[var(--alert-light)] p-4 m-2 rounded shadow-lg w-full" href="/">
                    <div className="flex flex-col items-center">
                      <FaEnvelope className="text-2xl mb-2" />
                      <h3 className="text-lg font-bold">Mail Gönder</h3>
                      <p className="text-sm">epinko@epinko.com.tr</p>
                    </div>
                  </Link>

                  <Link className="border border-[var(--label2)] bg-[var(--label2-light)] p-4 m-2 rounded shadow-lg w-full" href="/">
                    <div className="flex flex-col items-center">
                      <FaPhone className="text-2xl mb-2" />
                      <h3 className="text-lg font-bold">
                        Sabit Telefondan Ara
                      </h3>
                      <p className="text-sm">+90 555 555 55 55</p>
                    </div>
                  </Link>

                  <Link className="border border-[var(--success)] bg-[var(--success-light)] p-4 m-2 rounded shadow-lg w-full" href="/">
                    <div className="flex flex-col items-center">
                      <FaWhatsapp className="text-2xl mb-2" />
                      <h3 className="text-lg font-bold">
                        Whatsapp Destek Hattı
                      </h3>
                      <p className="text-sm">+90 555 555 55 55</p>
                    </div>
                  </Link>
                </div>
              </div>
            )}

            {activeTab === "KVKK" && (
              <div className="p-4 bg-[var(--advert-list-bg)] roulded-lg">
                <h2 className="text-center text-3xl mb-3">KVKK</h2>
                <p className="text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Nibh sed pulvinar proin gravida. Consectetur lorem donec massa
                  sapien faucibus et molestie ac. Dui accumsan sit amet nulla
                  facilisi morbi tempus iaculis urna. Pellentesque eu tincidunt
                  tortor aliquam nulla facilisi. Sit amet mattis vulputate enim
                  nulla aliquet porttitor lacus luctus. Nibh nisl condimentum id
                  venenatis a. Vel pretium lectus quam id leo in vitae turpis.
                  Laoreet non curabitur gravida arcu ac tortor. Cras tincidunt
                  lobortis feugiat vivamus.
                </p>
                <br />
                <p className="text-justify">
                  Nunc congue nisi vitae suscipit tellus. Egestas egestas
                  fringilla phasellus faucibus scelerisque. Sed risus pretium
                  quam vulputate dignissim suspendisse in est. Id nibh tortor id
                  aliquet. Vitae auctor eu augue ut lectus arcu bibendum. Mi
                  quis hendrerit dolor magna eget est lorem ipsum. Feugiat in
                  fermentum posuere urna nec tincidunt praesent semper. Amet
                  nisl suscipit adipiscing bibendum est ultricies integer quis.
                  Praesent elementum facilisis leo vel fringilla est ullamcorper
                  eget. Eget velit aliquet sagittis id consectetur. Enim nulla
                  aliquet porttitor lacus luctus accumsan. Cursus vitae congue
                  mauris rhoncus aenean vel elit scelerisque. Eleifend donec
                  pretium vulputate sapien. Neque aliquam vestibulum morbi
                  blandit cursus risus at ultrices. Ultricies lacus sed turpis
                  tincidunt id aliquet risus feugiat. Sodales ut etiam sit amet.
                  Volutpat blandit aliquam etiam erat. Lorem dolor sed viverra
                  ipsum. Sociis natoque penatibus et magnis dis parturient
                  montes nascetur ridiculus mus.
                </p>
                <br />
                <p className="text-justify">
                  Nulla facilisi nullam vehicula ipsum a arcu cursus vitae
                  congue. Tortor dignissim convallis aenean et tortor at risus.
                  Tortor vitae purus faucibus ornare suspendisse sed.
                </p>
              </div>
            )}

            {activeTab === "About" && (
              <div className="p-4 bg-[var(--advert-list-bg)] roulded-lg">
                <h2 className="text-center text-3xl mb-3">Hakkımızda</h2>
                <p className="text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Nibh sed pulvinar proin gravida. Consectetur lorem donec massa
                  sapien faucibus et molestie ac. Dui accumsan sit amet nulla
                  facilisi morbi tempus iaculis urna. Pellentesque eu tincidunt
                  tortor aliquam nulla facilisi. Sit amet mattis vulputate enim
                  nulla aliquet porttitor lacus luctus. Nibh nisl condimentum id
                  venenatis a. Vel pretium lectus quam id leo in vitae turpis.
                  Laoreet non curabitur gravida arcu ac tortor. Cras tincidunt
                  lobortis feugiat vivamus.
                </p>
                <br />
                <p className="text-justify">
                  Nunc congue nisi vitae suscipit tellus. Egestas egestas
                  fringilla phasellus faucibus scelerisque. Sed risus pretium
                  quam vulputate dignissim suspendisse in est. Id nibh tortor id
                  aliquet. Vitae auctor eu augue ut lectus arcu bibendum. Mi
                  quis hendrerit dolor magna eget est lorem ipsum. Feugiat in
                  fermentum posuere urna nec tincidunt praesent semper. Amet
                  nisl suscipit adipiscing bibendum est ultricies integer quis.
                  Praesent elementum facilisis leo vel fringilla est ullamcorper
                  eget. Eget velit aliquet sagittis id consectetur. Enim nulla
                  aliquet porttitor lacus luctus accumsan. Cursus vitae congue
                  mauris rhoncus aenean vel elit scelerisque. Eleifend donec
                  pretium vulputate sapien. Neque aliquam vestibulum morbi
                  blandit cursus risus at ultrices. Ultricies lacus sed turpis
                  tincidunt id aliquet risus feugiat. Sodales ut etiam sit amet.
                  Volutpat blandit aliquam etiam erat. Lorem dolor sed viverra
                  ipsum. Sociis natoque penatibus et magnis dis parturient
                  montes nascetur ridiculus mus.
                </p>
                <br />
                <p className="text-justify">
                  Nulla facilisi nullam vehicula ipsum a arcu cursus vitae
                  congue. Tortor dignissim convallis aenean et tortor at risus.
                  Tortor vitae purus faucibus ornare suspendisse sed.
                </p>
              </div>
            )}
          </div>
        </div>
        {activeTab === "Contact" && (
          <div
            id="contact"
            className="w-full flex items-center justify-center p-4 order-1 md:order-2  rounded-lg"
          >
            <div className="w-full bg-[var(--advert-card-bg)] p-4">
              <div className="flex justify-between mb-1 md:mb-8">
                <div>
                  <h1 className="text-3xl font-bold mb-6">İletişim Formu</h1>
                </div>
              </div>

              <div className="flex space-x-4 mb-4 md:mb-6">
                <div className="flex-1">
                  <label className="block text-lg mb-3">Ad Soyad</label>
                  <input
                    type="text"
                    placeholder="Ad Soyad"
                    className="w-full px-4 py-6 rounded-lg  text-white border-none focus:outline-none"
                  />
                </div>

                <div className="flex-1">
                  <label className="block text-lg mb-3">Kullanıcı Adı</label>
                  <input
                    type="text"
                    placeholder="Kullanıcı Adı"
                    className="w-full px-4 py-6 rounded-lg  text-white border-none focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex space-x-4 mb-4 md:mb-6">
                <div className="flex-1">
                  <label className="block text-lg mb-3">Mail Adresi</label>
                  <input
                    type="email"
                    placeholder="Mail Adresi"
                    className="w-full px-4 py-6 rounded-lg  text-white border-none focus:outline-none"
                  />
                </div>

                <div className="flex-1">
                  <label className="block text-lg mb-3">Telefon Numarası</label>
                  <input
                    type="text"
                    placeholder="Telefon numarası"
                    className="w-full px-4 py-6 rounded-lg  text-white border-none focus:outline-none"
                  />
                </div>
              </div>

              <div className="mb-4 md:mb-6">
                <label className="block text-lg mb-3">Mesajınız</label>
                <textarea
                  rows="10"
                  cols="30"
                  placeholder="Mesajınızı Giriniz"
                  className="w-full !h-30 px-4 py-6 rounded-lg  text-white border-none focus:outline-none resize-none"
                />
              </div>

              <button className="w-full md:w-[200px] bg-[var(--success)] hover:opacity-80 transition-colors py-3 rounded-lg text-white font-semibold">
                Üye Ol
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
