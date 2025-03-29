"use client";

import React from "react";
import Link from "next/link";
import { FaUserCheck } from "react-icons/fa";
import { TbCandy } from "react-icons/tb";
import { RiDiscountPercentLine } from "react-icons/ri";

const SingleAdvert = () => {
  const items = Array(10).fill("");

  return (
    <div className="container mx-auto px-1 md:px-4">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5">
        {items.map((_, index) => (
          <div key={index} className="p-2 md:p-2">
            <Link href="#">
              <div className="relative min-h-[300px] max-h-[300px] overflow-hidden rounded-lg">
                <div className="absolute top-2 left-2 flex space-x-1 p-1">
                  <div className="bg-orange-500 text-white text-xs flex items-center justify-center w-6 h-6 rounded-full">
                    <FaUserCheck />
                  </div>
                  <div className="bg-purple-500 text-white text-xs flex items-center justify-center w-6 h-6 rounded-full">
                    <TbCandy />
                  </div>
                  <div className="bg-red-500 text-white text-xs flex items-center justify-center w-6 h-6 rounded-full">
                    <RiDiscountPercentLine />
                  </div>
                </div>
                <img
                  src="https://placehold.co/200x300"
                  alt={`Card ${index}`}
                  className="w-full h-full object-cover min-h-[300px] max-h-[300px] bg-gradient-to-tl"
                />
                <div
                  className="text-white absolute bottom-0 p-2 w-full"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0, 0, 0, 0.7) 50%, transparent)",
                  }}
                >
                  <button className="bg-orange-500 text-black text-[10px] mb-2 font-bold py-1 px-2 rounded shimmer-effect">
                    Pubg Kategori
                  </button>
                  <p className="text-[11px]">
                    Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                  </p>
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center">
                      <img
                        src="https://placehold.co/50x50"
                        alt="Seller"
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="ml-2">
                        <p className="text-[8px] font-bold">LoremIpsum</p>
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
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleAdvert;
