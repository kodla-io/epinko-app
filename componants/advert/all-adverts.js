"use client";

import { useState } from "react";
import SearchSidebar from "../search-sidebar/search";
import AllAdvertsList from "../advert/all-adverts-list"
import { FaFilter, FaTimes } from "react-icons/fa";

const AllAdverts = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!isModalOpen);

  return (
    <section style={{ backgroundColor: "var(--background)" }} className="p-4">
      <div className="container mx-auto">
        <div className="flex items-center space-x-4">
          <h2
            style={{ color: "var(--foreground)" }}
            className="text-white text-[30px] py-2 font-bold"
          >
            İLANLAR
          </h2>
          <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
        </div>
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
