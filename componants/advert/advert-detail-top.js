import React, { useState } from "react";

import { FcAdvertising } from "react-icons/fc";
import { FaBoxesStacked, FaCircle } from "react-icons/fa6";
import {
  FaIdCard,
  FaPhoneAlt,
  FaEye,
  FaCalendarAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { GiCrown, GiTwoCoins } from "react-icons/gi";
import { IoMdMail } from "react-icons/io";
import { LuMessageSquareMore } from "react-icons/lu";
import Link from "next/link";

const GiveawayDetail = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    if (count < 100) setCount(count + 1);
  };

  const decrease = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="container mx-auto text-[var(--foreground)]">
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
          <div className="flex flex-col flex-[3] gap-4">
            {/* ÜST 2 KUTU */}
            <div className="flex gap-4 flex-wrap md:flex-nowrap">
              {/* SOL (RESİM) */}
              <div className="w-full md:flex-1 bg-[var(--advert-list-bg)] rounded-xl p-4 flex items-center justify-center">
                {/* Buraya resmi koy */}
                <img
                  src="https://placehold.co/500"
                  alt="Main"
                  className="w-full h-full object-cover rounded-lg "
                />
              </div>

              {/* SAĞ (CHAT) */}
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

                  {/* Fiyat */}
                  <div className="w-full">
                    <p className="text-sm">İlan Fiyatı</p>
                    <p className="text-2xl font-bold text-yellow-400">52.30₺</p>
                  </div>

                  {/* Miktar ve Buton */}
                  <div className="flex items-center justify-between gap-3 w-full">
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
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-semibold transition">
                      Siparişi Tamamla
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SAĞ TARAF */}
          <div className="flex-1 bg-[var(--bg-info-box)] rounded-xl">
            <div className="bg-gradient-to-b from-[color:var(--success)] to-transparent rounded-xl  p-[2px] rounded-xl">
              <div className="flex flex-col items-center bg-[var(--bg-info-box)] rounded-xl relative">
                <div className="bg-gradient-to-b from-[color:var(--success)] to-transparent rounded-full p-[2px] absolute top-[-50px]">
                  <div className="p-4 bg-[var(--bg-info-box)] rounded-full">
                    <div className="bg-gradient-to-b from-[color:var(--success)] to-transparent rounded-full p-[2px]">
                      <img
                        src="https://placehold.co/100"
                        alt="User Avatar"
                        className="rounded-full w-20 h-20"
                      />
                    </div>
                  </div>
                </div>

                <div className="text-center mt-[70px]">
                  <h2 className="mt-2 font-bold text-xl">User Name K.</h2>
                  <div className="flex gap-2 items-center text-sm text-[var(--alert)]">
                    <FaCircle />
                    <p className="">Çevrimdışı (4 gün önce)</p>
                  </div>
                </div>

                <p className="text-[var(--label9)] flex items-center justify-between gap-6 py-1 ">
                  <Link href="#">
                    <IoMdMail className="w-7 h-7" />
                  </Link>
                  <Link href="#">
                    <FaIdCard className="w-7 h-7" />
                  </Link>
                  <Link href="#">
                    <FaPhoneAlt className="w-7 h-7" />
                  </Link>
                </p>

                <div className="my-1 space-y-2 px-4 py-2 w-full">
                  <div className="flex gap-2 justify-center">
                    <button className="bg-[var(--primary)] justify-center px-3 py-1 rounded flex items-center w-1/2">
                      <LuMessageSquareMore />
                      <span className="ml-1 text-xs py-2">Mesaj Gönder</span>
                    </button>
                    <button className="bg-[var(--primary)] justify-center px-3 py-1 rounded flex items-center w-1/2">
                      <FaPaperPlane />
                      <span className="ml-1 text-xs py-2">SMS Gönder</span>
                    </button>
                  </div>
                  <div className="flex gap-2 justify-center">
                    <button className="bg-[var(--primary)] justify-center px-3 py-1 rounded flex items-center w-1/2">
                      <LuMessageSquareMore />
                      <span className="ml-1 text-xs py-2">100 Başarılı Satış</span>
                    </button>
                    <button className="bg-[var(--primary)] justify-center px-3 py-1 rounded flex items-center w-1/2">
                      <FaPaperPlane />
                      <span className="ml-1 text-xs py-2">100 Başarısız Satış</span>
                    </button>
                  </div>
                </div>

                <ul className="text-left text-sm px-4 py-2 w-full ">
                  <li className="flex flex-col gap-3 py-1">
                    <div className="flex items-start gap-3">
                      <AiFillSafetyCertificate className="w-12 h-12" />
                      <div>
                        <strong className="">Güvenilir Satıcı</strong>
                        <p className="text-xs">
                          Vitae turpis massa sed egestas sed.
                        </p>
                      </div>
                    </div>
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-[var(--success)] to-transparent" />
                  </li>

                  <li className="flex flex-col gap-3 py-1">
                    <div className="flex items-start gap-3">
                      <GiCrown className="w-12 h-12" />
                      <div>
                        <strong className="">Uzman Satıcı</strong>
                        <p className="text-xs">
                          Vitae turpis massa sed egestas sed.
                        </p>
                      </div>
                    </div>
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-[var(--success)] to-transparent" />
                  </li>

                  <li className="flex flex-col gap-3 py-1">
                    <div className="flex items-start gap-3">
                      <GiTwoCoins className="w-12 h-12" />
                      <div>
                        <strong className="">Lorem Ipsum</strong>
                        <p className="text-xs">
                          Vitae turpis massa sed egestas sed.
                        </p>
                      </div>
                    </div>
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-[var(--success)] to-transparent" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiveawayDetail;
