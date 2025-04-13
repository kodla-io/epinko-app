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
            style={{ color: "var(--foreground)" }}
            className="text-white text-[30px] py-2 ml-8 font-bold"
          >
            İLANLAR
          </h2>
          <div className="absolute bottom-[10px] right-10 flex">
            <Link href="/" className="text-center">
              <h2 className="w-full min-w-[200px] p-3 rounded-md cursor-pointer font-normal bg-gradient-to-r from-green-300 to-green-500 hover:from-green-400 hover:to-green-600 transition-colors duration-200">
                <b>İlan Oluştur</b>
              </h2>
            </Link>
            <select style={{backgroundColor: "var(--label5)"}} className="cursor-pointer block min-w-[100px] ml-2 appearance-none w-full bg-black text-white px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              <option>Çok Satanlar</option>
              <option>Fiyat Artan</option>
              <option>Fiyat Azalan</option>
              <option>Yeniden Eskiye</option>
              <option>Eskiden Yeniye</option>
            </select>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-2 md:p-4">
        {/* <div className="flex items-center space-x-4">
          <h2
            style={{ color: "var(--foreground)" }}
            className="text-white text-[30px] py-2 font-bold"
          >
            İLANLAR
          </h2>
          <div clas
          sName="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
        </div> */}
        <div className="flex flex-col lg:flex-row min-h-screen">
          {/* Sol Kutu */}
          <div className="text-white p-4 lg:w-1/5">
            <div className="hidden lg:block">
              <SearchSidebar />
            </div>

            {/* Mobilde sadece arama kısmı gizlenir */}
            <div className="lg:hidden">
              <div className="flex items-center justify-between">
                <h2 className="text-xl">Kategori</h2>
                <button
                  className="text-white p-2 rounded-full"
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
