"use client";

import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CategoryProducts from "../category-products/category-products";
import Comments from "../../texts/comments";

const CategoryDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentType, setContentType] = useState(null);

  const openModal = (type) => {
    setContentType(type);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setContentType(null);
  };

  const steps = [
    {
      number: 1,
      title: "Lorem Ipsum Dolar Sit Amet",
      image: "https://placehold.co/650x400",
    },
    {
      number: 2,
      title: "Lorem Ipsum Dolar Sit Amet",
      image: "https://placehold.co/650x400",
    },
    {
      number: 3,
      title: "Lorem Ipsum Dolar Sit Amet",
      image: "https://placehold.co/650x400",
    },
  ];

  return (
    <>
      <div className="products-detail-top-banner relative"></div>
      <div className="justify-center items-center flex py-4">
        <div className="container flex flex-col lg:flex-row py-2">
          {/* Sol Kısım */}
          <div className="rounded-lg p-4 rounded-lg flex flex-col w-full lg:w-1/4 mb-2 lg:mb-0 relative min-h-[100px] md:min-h-[500px]">
            <div className="relative p-4 lg:absolute top-[0] lg:top-[-150px] bg-[var(--advert-list-bg)] text-[var(--color)] rounded-lg">
              <img
                src="https://placehold.co/400x400"
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
              <button
                onClick={() => openModal("html")}
                style={{ backgroundColor: "var(--idle)" }}
                className="text-white text-xl p-2 rounded-lg w-full my-2"
              >
                Nasıl Yüklenir?
              </button>
            </div>
          </div>

          {/* Sağ Kısım */}
          <div
            style={{
              color: "var(--foreground)",
            }}
            className="flex-1 lg:w-3/4 lg:pl-2 relative min-h-[100px] md:min-h-[500px]"
          >
            <div className="hidden md:block lg:flex lg:flex-row items-center mb-0 w-full p-4 relative lg:absolute top-[0] lg:top-[-150px]">
              <div className="flex-1 lg:flex-4 p-4 rounded-lg lg:mr-4 mb-4 ">
                <h2 className="text-lg xl:text-xl text-white font-bold">
                  LEAGUE OF LEGENDS
                </h2>
                <p className="text-sm xl:text-md text-white font-bold">
                  %30'a varan indirimlerle Global PUBG Mobile UC satın alın ve
                  kâra geçin.
                </p>
              </div>
            </div>
            <div className="w-full p-4">
              <div className="w-full min-h-[120px] max-h-[120px] md:min-h-[105px] md:max-h-[105px] relative overflow-hidden rounded-md">
                <img className="w-full h-full object-cover absolute top-0 left-0 block" src="https://placehold.co/1100x110" alt="banner" />
              </div>
            </div>
            <CategoryProducts title={false} />
          </div>
        </div>
      </div>
      {/* MODAL */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
          <div
            style={{
              backgroundColor: "var(--advert-list-bg)",
              color: "var(--color)",
            }}
            className="bg-white rounded-xl w-full max-w-lg relative shadow-lg p-6"
          >
            {/* Kapatma butonu */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-black text-2xl font-bold"
            >
              &times;
            </button>

            {/* İçerik başlık */}
            <h2 className="text-xl font-semibold mb-4">
              {contentType === "html" ? "Nasıl Yüklenir?" : "Yorumlar"}
            </h2>

            {/* İçerik */}
            <div className="modal-content space-y-2">
              {contentType === "html" && (
                <div className="flex flex-col space-y-4 min-h-[650px] max-h-[650px] overflow-y-scroll overflow-hidden">
                  {steps.map((step) => (
                    <div key={step.number} className="p-4 rounded-lg">
                      <div className="flex items-center md:items-end mb-3">
                        <h2 className="text-6xl font-bold mr-2">
                          {step.number}
                        </h2>
                        <h3 className="text-xl">{step.title}</h3>
                      </div>
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-auto object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              )}

              {contentType === "comments" && (
                <div className="min-h-[650px] max-h-[650px] overflow-y-scroll overflow-hidden">
                  <Comments />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryDetails;
