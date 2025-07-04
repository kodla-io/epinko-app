"use client";

import { useState } from "react";
import SearchSidebar from "../search-sidebar/search";
import AllAdvertsList from "../advert/all-adverts-list";
import { FaFilter, FaTimes } from "react-icons/fa";
import Link from "next/link";

const AllAdverts = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!isModalOpen);

  return (
    <section style={{ backgroundColor: "var(--background)" }} className="">
      <div className="full-size-bg-img">
        <div className="container m-auto relative h-[190px]">
          <h2
            className="text-white text-[30px] py-2 ml-8 font-bold"
          >
            İLANLAR
          </h2>
          <div className="absolute bottom-[10px] md:right-10 md:left-[unset] left-[15px] right-[15px] flex text-[var(--foreground)]">
            <Link href="/create-advert" className="text-center">
              <h2 className="w-full text-white md:min-w-[200px] min-w-[100px] p-3 rounded-md cursor-pointer font-normal bg-gradient-to-r from-[var(--success)] to-[var(--label10)] hover:from-[var(--label10)] hover:to-[var(--success)] transition-colors duration-200">
                <b>İlan Oluştur</b>
              </h2>
            </Link>
            <div className="relative">
              <select 
                style={{backgroundColor: "var(--background)", color: "var(--foreground)"}} 
                className="cursor-pointer block md:min-w-[200px] min-w-[100px] ml-2 appearance-none w-full bg-black text-white p-3 h-[48px] rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                <option>Çok Satanlar</option>
                <option>Fiyat Artan</option>
                <option>Fiyat Azalan</option>
                <option>Yeniden Eskiye</option>
                <option>Eskiden Yeniye</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[var(--foreground)]">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-2 md:p-4">
        <div className="flex flex-col lg:flex-row min-h-screen">
          {/* Sol Kutu */}
          <div className="text-white p-4 lg:w-1/5">
            <div className="hidden lg:block">
              <SearchSidebar />
            </div>

            {/* Mobilde sadece arama kısmı gizlenir */}
            <div className="lg:hidden">
              <div className="flex items-center justify-between">
                <h2 className="text-xl text-[var(--foreground)]">Kategori</h2>
                <button
                  className="text-[var(--foreground)] p-2 rounded-full"
                  onClick={toggleModal}
                >
                  <FaFilter />
                </button>
              </div>
            </div>
          </div>

          {/* Sağ Kutu */}
          <div className="flex-1">
            <div>
              <AllAdvertsList />
            </div>
          </div>

          {isModalOpen && (
            <div
              className="fixed p-4 inset-0 flex items-center justify-center z-20"
              style={{
                backgroundColor: "var(--bg-soft2)",
                color: "var(--foreground)",
              }}
            >
              <div
                style={{
                  backgroundColor: "var(--background)",
                }}
                className="rounded-md"
              >
                <div className="flex justify-end">
                  <button
                    className="mt-4 p-2 m-3 rounded"
                    style={{
                      background: "var(--alert)",
                    }}
                    onClick={toggleModal}
                  >
                    <FaTimes />
                  </button>
                </div>
                <div className="max-h-[600px] overflow-y-scroll overflow-hidden">
                  <SearchSidebar />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AllAdverts;
