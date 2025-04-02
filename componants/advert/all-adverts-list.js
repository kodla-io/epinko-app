"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineSafety } from "react-icons/ai";

const AllAdvertsList = () => {
  const AllAdverts = [
    { title: "PUBG Mobile", isVitrin: true, vitrinColor: "var(--label1)" },
    { title: "Fortnite", isVitrin: false, vitrinColor: "var(--label1)" },
    { title: "Minecraft", isVitrin: false, vitrinColor: "var(--label2)" },
    { title: "Call of Duty", isVitrin: false, vitrinColor: "var(--label1)" },
    { title: "Apex Legends", isVitrin: true, vitrinColor: "var(--label3)" },
    { title: "Valorant", isVitrin: false, vitrinColor: "var(--label1)" },
    { title: "Among Us", isVitrin: true, vitrinColor: "var(--label4)" },
    { title: "Genshin Impact", isVitrin: false, vitrinColor: "var(--label1)" },
    {
      title: "League of Legends",
      isVitrin: false,
      vitrinColor: "var(--label5)",
    },
    { title: "Dota 2", isVitrin: false, vitrinColor: "var(--label4)" },
    { title: "CS:GO", isVitrin: true, vitrinColor: "var(--label6)" },
    { title: "Rocket League", isVitrin: true, vitrinColor: "var(--label1)" },
    { title: "Overwatch", isVitrin: false, vitrinColor: "var(--label7)" },
    { title: "FIFA 21", isVitrin: false, vitrinColor: "var(--label1)" },
    { title: "Cyberpunk 2077", isVitrin: true, vitrinColor: "var(--label8)" },
    { title: "Red Dead Online", isVitrin: false, vitrinColor: "var(--label1)" },
    { title: "Warframe", isVitrin: true, vitrinColor: "var(--label9)" },
    { title: "Rust", isVitrin: false, vitrinColor: "var(--label1)" },
    { title: "Fall Guys", isVitrin: true, vitrinColor: "var(--label10)" },
    { title: "The Witcher 3", isVitrin: true, vitrinColor: "var(--label7)" },
  ];
  return (
    <div className="container mx-auto">
      <div className="advert-tabs space-x-4">
        <div className="px-4 flex justify-between items-center w-full">
          <div className="text-center w-full p-2 rounded-sm">
            <Link className="w-full p-0" href="/">
              <h2
                style={{ backgroundColor: "var(--advert-list-bg)" }}
                className="w-full p-3 rounded-md"
              >
                İlan Nasıl Oluşturulur?
              </h2>
            </Link>
          </div>
          <div className="text-center w-full p-2 rounded-sm">
            <Link className="w-full p-0" href="/">
              <h2
                style={{ backgroundColor: "var(--advert-list-bg)" }}
                className="w-full p-3 rounded-md"
              >
                Nasıl Satın Alınır?
              </h2>
            </Link>
          </div>
          <div className="text-center w-full p-2 rounded-sm">
            <Link className="w-full p-0" href="/">
              <h2
                style={{ backgroundColor: "var(--advert-list-bg)" }}
                className="w-full p-3 rounded-md"
              >
                Güvenilir Satıcı Nedir?
              </h2>
            </Link>
          </div>
          <div className="text-center w-full p-2 rounded-sm">
            <Link className="w-full p-0" href="/">
              <h2
                style={{ backgroundColor: "var(--advert-list-bg)" }}
                className="w-full p-3 rounded-md"
              >
                Title
              </h2>
            </Link>
          </div>
        </div>
      </div>

      <div className="tab-content active">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {AllAdverts.map((game, index) => (
            <div key={index} className="p-2 md:p-2">
              <Link href="#">
                <div className="p-1">
                  <div className="relative min-h-[300px] max-h-[300px] overflow-hidden rounded-xl">
                    {game.isVitrin && (
                      <span
                        className="absolute top-[75px] left-[-21px] text-white py-[2px] px-[30px] text-xs font-bold transform -rotate-45 origin-top-left"
                        style={{ backgroundColor: game.vitrinColor }}
                      >
                        VİTRİN İLANI
                      </span>
                    )}
                    <div className="absolute top-2 right-2">
                      <AiOutlineSafety className="w-8 h-8" />
                    </div>
                    <img
                      src="https://placehold.co/200x300"
                      alt={`Card ${index}`}
                      className="w-full h-full object-cover min-h-[300px] max-h-[300px] bg-gradient-to-tl"
                    />
                    <div
                      className="text-white absolute bottom-0 p-2 w-full"
                      style={{
                          backdropFilter: "blur(4px)"
                      }}
                    >
                      <img
                        src="https://placehold.co/200x70/000000/FFFFFF"
                        className="relative bottom-[5px] left-1/2 transform -translate-x-1/2 w-[70%] md:w-[80%]"
                      />
                      <h3 className="text-md font-bold">{game.title}</h3>
                      <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center">
                          <img
                            src="https://placehold.co/50x50"
                            alt="Seller"
                            className="w-8 h-8 rounded-full"
                          />
                          <div className="ml-2">
                            <p className="text-[8px] text-gray-400">
                              GÜVENİLİR SATICI
                            </p>
                            <p className="text-[8px] text-yellow-500">
                              2 BAŞARILI İŞLEM
                            </p>
                          </div>
                        </div>
                        <div className="text-md font-bold text-yellow-400">
                          199.90₺
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center py-4">
        <Link href="/all-games">
          <button
            style={{
              // backgroundColor: "var(--btn-bg)",
              color: "var(--btn-color)",
            }}
            className="px-6 py-2 text-white rounded-lg shadow-lg transition duration-300 border-glow"
          >
            Tümünü Görüntüle
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AllAdvertsList;
