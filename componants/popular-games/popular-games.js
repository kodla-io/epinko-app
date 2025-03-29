"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";

const PopularGames = () => {
  const cardRef = useRef();

  useEffect(() => {
    const card = cardRef.current;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const xOffset = e.clientX - rect.left;
      const yOffset = e.clientY - rect.top;
      const cardHeight = card.clientHeight;
      const cardWidth = card.clientWidth;
      const heightCenter = Math.round(cardHeight / 2);
      const widthCenter = Math.round(cardWidth / 2);
      const rotateBaseValue = 20;
      const rotateXValue =
        ((yOffset - heightCenter) / heightCenter) * rotateBaseValue;
      const rotateYValue =
        ((widthCenter - xOffset) / widthCenter) * rotateBaseValue;
      card.style.transform = `scale(1.1) rotateX(${rotateXValue}deg) rotateY(${rotateYValue}deg)`;
    };

    const handleMouseOut = () => {
      card.style.transform = "";
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseout", handleMouseOut);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center space-x-4">
        <h2
          style={{ color: "var(--foreground)" }}
          className="text-white text-[30px] py-2 font-bold"
        >
          POPÜLER OYUNLAR
        </h2>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-14 gap-4 p-4">
        {/* 1. Kutu: Oran 3 */}
        <div
          ref={cardRef}
          className="col-span-1 md:col-span-1 lg:col-span-3 rounded-lg flex flex-col justify-center items-center relative min-h-[420px] max-h-[420px] popular-game-card"
        >
          <img
            src="https://placehold.co/200x300"
            alt="Knight Online"
            className="object-cover w-full h-full rounded-lg"
          />
          <div
            style={{
              background:
                "linear-gradient(to top, rgba(157, 85, 35, 0.7) 20%, rgba(157, 86, 35, 0) 100%)",
            }}
            className="text-white p-4 absolute bottom-[0px] left-[0px] w-full popular-card-content"
          >
            <h3 className="text-lg font-bold">Knight Online</h3>
            <p>Lorem Lorem Lorem</p>
            <p className="text-right">200,00 ₺</p>
          </div>
        </div>

        {/* 2. Kutu: Oran 6 */}
        <div className="col-span-1 md:col-span-1 lg:col-span-6 flex flex-col justify-between min-h-[420px] max-h-[420px]">
          <div className="flex gap-4 flex-1 min-h-[200px] max-h-[200px]">
            <div className="rounded-lg flex-1">
              <Link href="#">
                <img
                  src="https://placehold.co/150x150"
                  alt="Roblox"
                  className="object-cover w-full h-full rounded-lg"
                />
              </Link>
            </div>
            <div className="rounded-lg flex-2">
              <Link href="#">
                <img
                  src="https://placehold.co/150x150"
                  alt="Rise Online"
                  className="object-cover w-full h-full rounded-lg"
                />
              </Link>
            </div>
          </div>
          <div className="flex gap-4 flex-1 min-h-[200px] max-h-[200px]">
            <div className="rounded-lg flex-2">
              <Link href="#">
                <img
                  src="https://placehold.co/150x150"
                  alt="Valorant"
                  className="object-cover w-full h-full rounded-lg"
                />
              </Link>
            </div>
            <div className="rounded-lg flex-1">
              <Link href="#">
                <img
                  src="https://placehold.co/150x150"
                  alt="Metin 2"
                  className="object-cover w-full h-full rounded-lg"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* 3. Kutu: Oran 3 */}
        <Link
          href="#"
          className="col-span-1 md:col-span-1 lg:col-span-3 rounded-lg flex flex-col justify-center items-center min-h-[420px] max-h-[420px]"
        >
          <img
            src="https://placehold.co/200x300"
            alt="League of Legends"
            className="object-cover w-full h-full rounded-lg"
          />
        </Link>

        {/* 4. Kutu: Oran 2 */}
        <div className="col-span-1 md:col-span-1 lg:col-span-2 flex flex-col justify-between">
          <div className="rounded-lg min-h-[200px] max-h-[200px]">
            <Link href="#">
              <img
                src="https://placehold.co/150x150"
                alt="PUBG"
                className="object-cover w-full h-full rounded-lg"
              />
            </Link>
          </div>
          <div className="rounded-lg mt-4 min-h-[200px] max-h-[200px]">
            <Link href="#">
              <img
                src="https://placehold.co/150x150"
                alt="Metin 2"
                className="object-cover w-full h-full rounded-lg"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center py-4">
        <Link href="/all-games">
          <button
            style={{
              backgroundColor: "var(--btn-bg)",
              color: "var(--btn-color)",
            }}
            className="px-6 py-2 text-white rounded-lg shadow-lg transition duration-300 glow-on-hover"
          >
            Tümünü Görüntüle
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PopularGames;
