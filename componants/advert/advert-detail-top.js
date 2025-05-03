import React, { useState } from "react";

import { FcAdvertising } from "react-icons/fc";
import { FaBoxesStacked } from "react-icons/fa6";
import { IoIosMedal } from "react-icons/io";
import { GiRibbonMedal } from "react-icons/gi";

import { FaEye, FaCalendarAlt, FaPaperPlane, FaShareAlt, FaRegHeart, FaQuestion } from "react-icons/fa";
import { LuMessageSquareMore } from "react-icons/lu";
import Link from "next/link";
import { FaRectangleList } from "react-icons/fa6";
import AdvertProductImageSlider from "./advert-detail-image-slider";

const GiveawayDetail = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    if (count < 100) setCount(count + 1);
  };

  const decrease = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div
      id="advert-detail"
      className="container mx-auto text-[var(--foreground)]"
    >
      <div className="flex items-center space-x-4">
        <h2
          style={{ color: "var(--foreground)" }}
          className="text-white text-[30px] py-2 font-bold px-4"
        >
          SIT AMET CURSUS SIT AMET DICTUM
        </h2>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
      </div>
      <div className="p-4 mt-8 space-y-10">
        {/* ÜST KISIM */}
        <div className="flex flex-col-reverse lg:flex-row gap-4">
          {/* SOL TARAF */}
          <div className="flex flex-col flex-[3] w-full gap-4">
            {/* ÜST 2 KUTU */}
            <div className="flex gap-4 flex-wrap md:flex-nowrap">
              {/* SOL (RESİM) */}
              <div className="w-full md:flex-1 bg-[var(--advert-list-bg)] rounded-xl p-4 flex items-center justify-center">
                {/* Buraya resmi koy */}
                <AdvertProductImageSlider />
              </div>

              {/* SAĞ */}
              <div className="w-full md:flex-1 bg-[var(--advert-list-bg)] rounded-xl p-4">
                <div className="mx-auto rounded-lg space-y-4 flex flex-wrap content-around h-full">
                  {/* Başlık */}
                  <div className="">
                    <h2 className="text-md font-bold uppercase text-[#f4f4f5]">
                      ID NEQUE ALIQUAM VESTIBULUM MORBI BLANDIT
                    </h2>
                    <div className="w-full h-1 bg-orange-400 mx-auto mt-2 rounded-full"></div>
                    <p className="text-sm mt-2 text-gray-300">
                      Ultrices neque ornare aenean euismod elementum nisi quis.
                      Nulla pellentesque dignissim enim sit amet venenatis.
                      Tincidunt ornare eget egestas purus viverra accumsan in.
                    </p>
                  </div>

                  {/* Bilgi Kutuları */}
                  <div className="grid grid-cols-2 gap-3 text-sm w-full">
                    <div className="rounded-md p-3 flex items-center border border-green-500">
                      <FcAdvertising className="w-10 h-10 mr-2" />
                      <div className="flex flex-wrap items-start">
                        <span className="mt-1 w-full">İlan Numarası</span>
                        <span className="font-semibold w-full">#TS457F</span>
                      </div>
                    </div>
                    <div className="rounded-md p-3 flex items-center border border-green-500">
                      <FaEye className="w-10 h-10 mr-2" />
                      <div className="flex flex-wrap items-start">
                        <span className="mt-1 w-full">Görüntülenme</span>
                        <span className="font-semibold w-full">57</span>
                      </div>
                    </div>
                    <div className="rounded-md p-3 flex items-center border border-green-500">
                      <FaCalendarAlt className="w-10 h-10 mr-2" />
                      <div className="flex flex-wrap items-start">
                        <span className="mt-1 w-full">Teslimat Süresi</span>
                        <span className="font-semibold w-full">1 Saat</span>
                      </div>
                    </div>
                    <div className="rounded-md p-3 flex items-center border border-green-500">
                      <FaBoxesStacked className="w-10 h-10 mr-2" />
                      <div className="flex flex-wrap items-start">
                        <span className="mt-1 w-full">Toplam Stok</span>
                        <span className="font-semibold w-full">37 Adet</span>
                      </div>
                    </div>
                  </div>

                  {/* Miktar ve Buton */}
                  <div className="flex gap-2 items-center justify-between w-full">
                    <Link
                      href="/"
                      className="bg-[var(--primary)] justify-center px-3 py-1 rounded flex items-center w-1/2"
                    >
                      <FaQuestion />
                      <span className="ml-1 text-xs py-2">Soru Sor</span>
                    </Link>
                    <div className="flex gap-2 items-center justify-between w-1/2">
                      <Link
                        href="/"
                        className="bg-[var(--primary)] justify-center px-3 py-1 rounded flex items-center w-1/2"
                      >
                        <FaRegHeart  />
                        <span className="ml-1 text-xs py-2">Favori</span>
                      </Link>
                      <Link
                        href="/"
                        className="bg-[var(--primary)] justify-center px-3 py-1 rounded flex items-center w-1/2"
                      >
                        <FaShareAlt  />
                        <span className="ml-1 text-xs py-2">Paylaş</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SAĞ TARAF */}
          <div className="flex-1 bg-[var(--bg-info-box)] rounded-xl">
            <div className="bg-gradient-to-b from-[color:var(--success)] to-transparent rounded-xl h-full p-[2px] rounded-xl">
              <div className="flex flex-col  bg-[var(--bg-info-box)] rounded-xl relative justify-around h-full">
                <div className="flex justify-start items-center p-4 gap-2">
                  <div className="bg-gradient-to-b from-[color:var(--success)] to-transparent rounded-full p-[2px]">
                    <div className="p-2 bg-[var(--bg-info-box)] rounded-full">
                      <div className="bg-gradient-to-b from-[color:var(--success)] to-transparent rounded-full p-[2px]">
                        <Link href="/">
                          <img
                            src="https://placehold.co/100"
                            alt="User Avatar"
                            className="rounded-full w-12 h-12"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="text-start">
                    <h2 className="font-bold text-md">User Name K.</h2>
                    <div className="flex gap-2 items-center text-sm text-[var(--label7)]">
                      <IoIosMedal className="w-6 h-6" />
                      <GiRibbonMedal className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                <div className="my-1 space-y-2 px-4 py-2 w-full">
                  <div className="flex gap-2 justify-center">
                    <Link
                      href="/"
                      className="bg-[var(--primary)] justify-center px-3 py-1 rounded flex items-center w-full"
                    >
                      <LuMessageSquareMore />
                      <span className="ml-1 text-xs py-2">Sohbet Et</span>
                    </Link>
                  </div>

                  <div className="flex gap-2 justify-center">
                    <Link
                      href="/"
                      className="bg-[var(--primary)] justify-center px-3 py-1 rounded flex items-center w-1/2"
                    >
                      <FaRectangleList />
                      <span className="ml-1 text-xs py-2">Tüm İlanlar</span>
                    </Link>
                    <Link
                      href="/"
                      className="bg-[var(--primary)] justify-center px-3 py-1 rounded flex items-center w-1/2"
                    >
                      <FaPaperPlane />
                      <span className="ml-1 text-xs py-2">SMS Gönder</span>
                    </Link>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 w-full p-2 md:p-4">
                  {/* Fiyat */}
                  <div className="">
                    <p className="text-sm">İlan Fiyatı</p>
                    <p className="text-2xl font-bold text-yellow-400">52.30₺</p>
                  </div>

                  {/* ADED */}
                  <div className="flex items-center px-2 py-1 rounded-md bg-[var(--advert-list-bg)]">
                    <button
                      onClick={decrease}
                      className="text-white text-xl px-2 bg-[var(--list-box)] rounded-md"
                    >
                      −
                    </button>
                    <input
                      type="text"
                      value={count}
                      readOnly
                      className="w-12 text-center bg-transparent text-white outline-none"
                    />
                    <button
                      onClick={increase}
                      className="text-white text-xl px-2 bg-[var(--list-box)] rounded-md"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 justify-center p-2 md:p-4">
                  <Link
                    href="/"
                    className="bg-[var(--success)] justify-center px-3 py-1 rounded flex items-center w-full"
                  >
                    <FaRectangleList />
                    <span className="ml-1 text-xs py-2">Satın Al</span>
                  </Link>
                  <Link
                    href="/"
                    className="bg-[var(--label7)] justify-center px-3 py-1 rounded flex items-center w-full"
                  >
                    <FaPaperPlane />
                    <span className="ml-1 text-xs py-2">Sepete Ekle</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiveawayDetail;
