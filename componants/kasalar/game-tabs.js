"use client";

import React, { useState, useEffect, useRef } from "react";

const games = [
  {
    id: 1,
    image: "https://placehold.co/300.png?text=Far+Cry+6",
    title: "Far Cry 6",
    discountedPrice: "250₺",
    originalPrice: "500₺",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Porttitor leo a diam sollicitudin tempor id eu nisl nunc. Gravida in fermentum et sollicitudin ac orci phasellus egestas.  Orci nulla pellentesque dignissim enim sit amet venenatis. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Amet consectetur adipiscing elit pellentesque habitant morbi. At consectetur lorem donec massa sapien.",
  },
  {
    id: 2,
    image: "https://placehold.co/300.png?text=GTA+V",
    title: "GTA V",
    discountedPrice: "250₺",
    originalPrice: "500₺",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Porttitor leo a diam sollicitudin tempor id eu nisl nunc. Gravida in fermentum et sollicitudin ac orci phasellus egestas.  Orci nulla pellentesque dignissim enim sit amet venenatis. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Amet consectetur adipiscing elit pellentesque habitant morbi. At consectetur lorem donec massa sapien.",
  },
  {
    id: 3,
    image: "https://placehold.co/300.png?text=Valorant",
    title: "Valorant",
    discountedPrice: "250₺",
    originalPrice: "500₺",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Porttitor leo a diam sollicitudin tempor id eu nisl nunc. Gravida in fermentum et sollicitudin ac orci phasellus egestas.  Orci nulla pellentesque dignissim enim sit amet venenatis. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Amet consectetur adipiscing elit pellentesque habitant morbi. At consectetur lorem donec massa sapien.",
  },
  {
    id: 4,
    image: "https://placehold.co/300.png?text=Roblox",
    title: "Roblox",
    discountedPrice: "250₺",
    originalPrice: "500₺",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Porttitor leo a diam sollicitudin tempor id eu nisl nunc. Gravida in fermentum et sollicitudin ac orci phasellus egestas.  Orci nulla pellentesque dignissim enim sit amet venenatis. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Amet consectetur adipiscing elit pellentesque habitant morbi. At consectetur lorem donec massa sapien.",
  },
  {
    id: 5,
    image: "https://m.media-amazon.com/images/I/81J5Tg-f0KL.png",
    title: "PUBG",
    discountedPrice: "250₺",
    originalPrice: "500₺",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Porttitor leo a diam sollicitudin tempor id eu nisl nunc. Gravida in fermentum et sollicitudin ac orci phasellus egestas.  Orci nulla pellentesque dignissim enim sit amet venenatis. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Amet consectetur adipiscing elit pellentesque habitant morbi. At consectetur lorem donec massa sapien.",
  },
  {
    id: 6,
    image: "https://placehold.co/300.png?text=League+of+Legends",
    title: "League of Legends",
    discountedPrice: "250₺",
    originalPrice: "500₺",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Porttitor leo a diam sollicitudin tempor id eu nisl nunc. Gravida in fermentum et sollicitudin ac orci phasellus egestas.  Orci nulla pellentesque dignissim enim sit amet venenatis. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Amet consectetur adipiscing elit pellentesque habitant morbi. At consectetur lorem donec massa sapien.",
  },
  {
    id: 7,
    image: "https://placehold.co/300.png?text=Metin2",
    title: "Metin2",
    discountedPrice: "250₺",
    originalPrice: "500₺",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Porttitor leo a diam sollicitudin tempor id eu nisl nunc. Gravida in fermentum et sollicitudin ac orci phasellus egestas.  Orci nulla pellentesque dignissim enim sit amet venenatis. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Amet consectetur adipiscing elit pellentesque habitant morbi. At consectetur lorem donec massa sapien.",
  },
  {
    id: 8,
    image: "https://placehold.co/300.png?text=Minecraft",
    title: "Minecraft",
    discountedPrice: "250₺",
    originalPrice: "500₺",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Porttitor leo a diam sollicitudin tempor id eu nisl nunc. Gravida in fermentum et sollicitudin ac orci phasellus egestas.  Orci nulla pellentesque dignissim enim sit amet venenatis. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Amet consectetur adipiscing elit pellentesque habitant morbi. At consectetur lorem donec massa sapien.",
  },
  {
    id: 9,
    image: "https://placehold.co/300.png?text=FIFA+23",
    title: "FIFA 23",
    discountedPrice: "250₺",
    originalPrice: "500₺",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Porttitor leo a diam sollicitudin tempor id eu nisl nunc. Gravida in fermentum et sollicitudin ac orci phasellus egestas.  Orci nulla pellentesque dignissim enim sit amet venenatis. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Amet consectetur adipiscing elit pellentesque habitant morbi. At consectetur lorem donec massa sapien.",
  },
];

const GameTabs = () => {
  const [activeIndex, setActiveIndex] = useState(4);
  const activeGame = games[activeIndex];

  const tabsRef = useRef([]);
  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      const el = tabsRef.current[activeIndex];
      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    }
  }, [activeIndex]);

  return (
    <div className="container mx-auto py-6 px-4">
      <div className="flex items-center space-x-4">
        <h2
          style={{ color: "var(--foreground)" }}
          className="text-white text-[30px] py-2 font-bold"
        >
          BRONZ KASA AÇ
        </h2>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
      </div>
      <div className="w-full mx-auto p-4 bg-[var(--advert-card-bg)] rounded-lg">
        {/* Tab Content */}
        <div className="text-[var(--foreground)] p-6 flex flex-col md:flex-row gap-6">
          <div>
            <div className="relative rounded-lg">
              <img
                src={activeGame.image}
                alt={activeGame.title}
                className="w-full h-full md:max-h-[200px] md:min-h-[200px] md:max-w-[200px] md:min-w-[200px] rounded-lg object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent rounded-b-lg backdrop-blur-md flex flex-col justify-end px-4 pb-2">
                <h3 className="text-white text-lg font-semibold text-lg text-center">
                  15₺
                </h3>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h2 className="text-2xl font-bold mb-2">{activeGame.title}</h2>
            <p className="text-sm mb-4">{activeGame.description}</p>
            <div className="flex items-center gap-4">
              <span className="px-4 py-2 bg-[var(--label2)] rounded-xl font-semibold">
                {activeGame.originalPrice}
              </span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="overflow-x-auto">
          <div className="grid items-end grid-cols-9 md:w-full w-[300%]">
            {games.map((game, index) => (
              <button
                key={game.id}
                ref={(el) => (tabsRef.current[index] = el)}
                onClick={() => setActiveIndex(index)}
                className={`relative flex flex-col items-center justify-center transition-all duration-500 overflow-hidden game-card-top-price
  ${
    activeIndex === index
      ? "border-[5px] border-b-0 border-[var(--success)] h-[156px]"
      : "h-[130px]"
  }
  w-full`}
                style={{
                  ...(activeIndex === index
                    ? {
                        borderTopLeftRadius: "8px",
                        borderTopRightRadius: "8px",
                        "--before-bg-color": "var(--success)",
                      }
                    : {
                        "--before-bg-color": "gray",
                      }),
                }}
              >
                <style>{`
                .game-card-top-price::before {
                  content: "";
                  position: absolute;
                  top: -10px;
                  left: -14px;
                  width: 67px;
                  height: 41px;
                  background-color: var(--before-bg-color);
                  border-radius: 15px;
                  transform: rotate(-10deg);
                  z-index: 1;
                }
              `}</style>
                <img
                  src={game.image}
                  alt={game.title}
                  className={`w-full h-full object-cover transition-all duration-500
                  ${activeIndex === index ? "" : "grayscale"}`}
                />
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent flex flex-col justify-end px-4 pb-2">
                  <h3 className="text-white text-lg font-semibold text-xs clamp-1">
                    {game.title}
                  </h3>
                  <p className="text-xs clamp-1">Lorem Ipsum</p>
                </div>
                <div className="absolute text-left z-20 font-semibold top-0 left-1 w-full flex flex-col">
                  <p className="text-md">{game.discountedPrice}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameTabs;
