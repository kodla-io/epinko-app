"use client";
import React from "react";

const cardData = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  title: "League Of Legends",
  subtitle: "Steam Gift",
  image: "https://placehold.co/300",
}));

const KasaProducts = () => {
  return (
    <div className="container mx-auto my-6 p-4">
      <div className="flex items-center space-x-4 mx-0 md:mx-4">
        <h2
          style={{ color: "var(--foreground)" }}
          className="text-white text-[30px] py-2 font-bold"
        >
          KASA ÜRÜN
        </h2>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mx-auto">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="bg-[var(--advert-list-bg)] rounded-xl overflow-hidden shadow-md text-center text-white"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="py-2">
              <p className="text-sm text-gray-400">{card.subtitle}</p>
              <p className="font-semibold">
                <span className="clamp-1">{card.title}</span> Mobile
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KasaProducts;
