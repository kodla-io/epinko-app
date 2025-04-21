"use client";

import React, { useState } from "react";

const games = [
  {
    id: 1,
    image: "https://via.placeholder.com/300x200.png?text=Far+Cry+6",
    title: "Far Cry 6",
    discountedPrice: "250₺",
    originalPrice: "500₺",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/300x200.png?text=GTA+V",
    title: "GTA V",
    discountedPrice: "250₺",
    originalPrice: "500₺",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/300x200.png?text=Valorant",
    title: "Valorant",
    discountedPrice: "250₺",
    originalPrice: "500₺",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/300x200.png?text=Roblox",
    title: "Roblox",
    discountedPrice: "250₺",
    originalPrice: "500₺",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 5,
    image: "https://via.placeholder.com/300x200.png?text=PUBG",
    title: "PUBG",
    discountedPrice: "250₺",
    originalPrice: "500₺",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 6,
    image: "https://via.placeholder.com/300x200.png?text=League+of+Legends",
    title: "League of Legends",
    discountedPrice: "250₺",
    originalPrice: "500₺",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 7,
    image: "https://via.placeholder.com/300x200.png?text=Metin2",
    title: "Metin2",
    discountedPrice: "250₺",
    originalPrice: "500₺",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 8,
    image: "https://via.placeholder.com/300x200.png?text=Minecraft",
    title: "Minecraft",
    discountedPrice: "250₺",
    originalPrice: "500₺",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 9,
    image: "https://via.placeholder.com/300x200.png?text=FIFA+23",
    title: "FIFA 23",
    discountedPrice: "250₺",
    originalPrice: "500₺",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const GameTabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeGame = games[activeIndex];

  return (
    <div className="w-full max-w-6xl mx-auto p-4 space-y-6">
      {/* Tab Content */}
      <div className="bg-gray-800 text-white p-6 rounded-lg flex flex-col md:flex-row gap-6">
        <img
          src={activeGame.image}
          alt={activeGame.title}
          className="w-full md:w-1/3 rounded-lg object-cover"
        />
        <div className="flex flex-col justify-between">
          <h2 className="text-2xl font-bold mb-2">{activeGame.title}</h2>
          <p className="text-sm mb-4">{activeGame.description}</p>
          <div className="flex items-center gap-4">
            <span className="text-green-400 text-xl font-bold">
              {activeGame.discountedPrice}
            </span>
            <span className="text-gray-400 line-through">
              {activeGame.originalPrice}
            </span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="overflow-x-auto">
        <div className="flex gap-4 w-max md:w-full">
          {games.map((game, index) => (
            <button
              key={game.id}
              onClick={() => setActiveIndex(index)}
              className={`flex-shrink-0 px-4 py-2 rounded-md text-sm font-medium transition-all whitespace-nowrap
              ${
                activeIndex === index
                  ? "bg-blue-500 text-white"
                  : "bg-gray-700 text-gray-200 hover:bg-gray-600"
              }`}
            >
              {game.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameTabs;
