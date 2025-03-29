"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";

import { FaEye } from "react-icons/fa";
import { GiConfirmed, GiCubeforce } from "react-icons/gi";
import { CiClock2 } from "react-icons/ci";

const CategoryDetails = () => {
  return (
    <div className="justify-center items-center flex py-4">
      <div className="container flex flex-col lg:flex-row py-4">
        {/* Sol Kısım */}
        <div
          style={{
            backgroundColor: "var(--advert-list-bg)",
            color: "var(--color)",
          }}
          className="rounded-lg p-4 flex flex-col w-full lg:w-1/4 mb-8 lg:mb-0 relative"
        >
          <img
            src="https://placehold.co/200x70/000000/FFFFFF"
            className="absolute top-[-20px] left-1/2 transform -translate-x-1/2"
          />
          <img
            src="https://placehold.co/320x370"
            alt="League of Legends"
            className="rounded-lg mb-4"
          />
          <h2 className="text-left text-lg font-bold mb-4">
            LEAGUE OF LEGENDS
          </h2>
          <p className="text-sm mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry Lorem Ipsum is simply dummy text of the printing and
            typesetting industry Lorem Ipsum is simply dummy text of the
            printing and typesetting industry
          </p>
          <div className="flex justify-between w-full text-sm mb-2">
            <div className="w-1/2 flex">
              <div className="bg-white p-1 rounded-full flex items-center justify-center w-6 h-6 mr-2">
                <FaEye className="text-black text-xl" />
              </div>
              <span className="text-xs flex">100+ Görüntüleme</span>
            </div>
            <div className="w-1/2 flex">
              <div className="bg-white p-1 rounded-full flex items-center justify-center w-6 h-6 mr-2">
                <GiConfirmed className="text-black text-xl" />
              </div>
              <span className="text-xs flex">5000+ Satış</span>
            </div>
          </div>
          <div className="flex justify-between w-full text-sm">
            <div className="w-1/2 flex">
              <div className="bg-white p-1 rounded-full flex items-center justify-center w-6 h-6 mr-2">
                <CiClock2 className="text-black text-xl" />
              </div>
              <span className="text-xs flex">X Saat İçerisinde Teslim</span>
            </div>
            <div className="w-1/2 flex">
              <div className="bg-white p-1 rounded-full flex items-center justify-center w-6 h-6 mr-2">
                <GiCubeforce className="text-black text-xl" />
              </div>
              <span className="text-xs flex">5000+ Stok</span>
            </div>
          </div>
        </div>

        {/* Sağ Kısım */}
        <div
          style={{
            color: "var(--foreground)",
          }}
          className="flex-1 lg:w-3/4 pl-4"
        >
          <div className="flex flex-col w-full lg:flex-row items-center mb-4">
            <div
              style={{
                backgroundColor: "var(--advert-list-bg)",
              }}
              className="flex-1 lg:flex-4 p-4 rounded-lg mr-4 mb-4 sm:mb-0"
            >
              <h2 className=" text-[30px] font-bold">LEAGUE OF LEGENDS</h2>
            </div>
            <div className="flex space-x-2 flex-1 lg:flex-none w-full lg:w-auto justify-evenly">
              <Link href="/">
                <button style={{backgroundColor: "var(--idle)"}} className="text-white text-xl py-2 px-4 rounded-lg w-1/2 lg:w-auto h-[76px] w-full">
                  Nasıl Yüklenir?
                </button>
              </Link>

              <Link href="/">
                <button style={{backgroundColor: "var(--success)"}} className="text-white text-xl py-2 px-4 rounded-lg w-1/2 lg:w-auto h-[76px] w-full">
                  Değerlendirmeler
                </button>
              </Link>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "var(--advert-list-bg)",
            }}
            className="rounded-lg p-4 mb-4"
          >
            <div className="flex items-center space-x-4">
              <h2
                style={{ color: "var(--foreground)" }}
                className="text-white text-[30px] py-2 font-bold"
              >
                AÇIKLAMA
              </h2>
              <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
            </div>
            <p className="text-gray-400 text-sm max-h-[150px] overflow-y-scroll">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "var(--advert-list-bg)",
            }}
            className="text-white rounded-lg p-4 container"
          >
            <div className="flex items-center space-x-4">
              <h2
                style={{ color: "var(--foreground)" }}
                className="text-white text-[30px] py-2 font-bold"
              >
                ÇOK SATANLAR
              </h2>
              <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
            </div>
            <div className="py-1">
              <div className="container mx-auto px-4">
                <div className="py-2 space-x-4">
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    centeredSlides={false}
                    loop={true}
                    pagination={{
                      clickable: true,
                    }}
                    breakpoints={{
                      320: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                      },
                      480: {
                        slidesPerView: 2,
                        spaceBetween: 5,
                      },
                      640: {
                        slidesPerView: 3,
                        spaceBetween: 5,
                      },
                      768: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                      },
                      1024: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                      },
                      1280: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                      },
                    }}
                    modules={[Pagination, Autoplay]}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: true,
                    }}
                    className="mySwiper2 py-4"
                  >
                    {Array.from({ length: 15 }).map((_, index) => (
                      <SwiperSlide key={index}>
                        <Link href="#">
                          <img
                            src="https://placehold.co/180x150"
                            alt={`Item ${index + 1}`}
                            className="w-full h-full rounded-[20px] object-cover "
                          />
                        </Link>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetails;
