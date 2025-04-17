import React from "react";
import { FaTwitch } from "react-icons/fa";
import Link from "next/link";

const cards = [
  {
    image: "https://placehold.co/300",
    name: "ozlemyilmaz",
  },
  {
    image: "https://placehold.co/300",
    name: "ozlemyilmaz",
  },
  {
    image: "https://placehold.co/300",
    name: "ozlemyilmaz",
  },
  {
    image: "https://placehold.co/300",
    name: "ozlemyilmaz",
  },
  {
    image: "https://placehold.co/300",
    name: "ozlemyilmaz",
  },
  {
    image: "https://placehold.co/300",
    name: "ozlemyilmaz",
  },
];

const StreamerSingle = ({ title }) => {
  return (
    <div className="p-4">
      <div className="flex items-center space-x-4">
        <h2 className="text-white text-[30px] py-2 font-bold">{title}</h2>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {cards.map((card, index) => (
          <Link key={index} href="/">
            <div
              style={{ border: "2px solid var(--label4)" }}
              className="bg-gray-900 rounded-lg overflow-hidden"
            >
              <div className="relative">
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full h-auto"
                />
                <div
                  style={{ backgroundColor: "var(--label4)" }}
                  className="absolute top-2 left-2 rounded-full p-1"
                >
                  <FaTwitch className="text-white" />
                </div>
              </div>
              <div
                style={{ backgroundColor: "var(--label4)" }}
                className="text-center text-white py-2"
              >
                {card.name}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StreamerSingle;
