"use client";

import Link from "next/link";
import React from "react";

const CategoryGames = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-4 p-4">
        {/* 1. Kutu: Oran 3 */}
        <div className="col-span-1 md:col-span-1 lg:col-span-4 rounded-lg flex flex-col justify-center items-center relative min-h-[620px] max-h-[620px]">
          <img
            src="https://placehold.co/350x470"
            alt="Knight Online"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>

        {/* 2. Kutu: Oran 6 */}
        <div className="col-span-1 md:col-span-1 lg:col-span-4 flex flex-col justify-between min-h-[620px] max-h-[620px]">
          <div className="flex gap-4 flex-1 min-h-[200px] max-h-[300px]">
            <div className="rounded-lg flex-1">
              <Link href="#">
                <img
                  src="https://placehold.co/350x470"
                  alt="Roblox"
                  className="object-cover w-full h-full rounded-lg"
                />
              </Link>
            </div>
            <div className="rounded-lg flex-1">
              <Link href="#">
                <img
                  src="https://placehold.co/350x470"
                  alt="Rise Online"
                  className="object-cover w-full h-full rounded-lg"
                />
              </Link>
            </div>
          </div>
          <div className="flex gap-4 flex-1 min-h-[200px] max-h-[300px]">
            <div className="rounded-lg flex-1">
              <Link href="#">
                <img
                  src="https://placehold.co/350x470"
                  alt="Valorant"
                  className="object-cover w-full h-full rounded-lg"
                />
              </Link>
            </div>
            <div className="rounded-lg flex-1">
              <Link href="#">
                <img
                  src="https://placehold.co/350x470"
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
          className="col-span-1 md:col-span-1 lg:col-span-4 rounded-lg flex flex-col justify-center items-center min-h-[620px] max-h-[620px]"
        >
          <img
            src="https://placehold.co/350x470"
            alt="League of Legends"
            className="object-cover w-full h-full rounded-lg"
          />
        </Link>
      </div>
    </div>
  );
};

export default CategoryGames;
