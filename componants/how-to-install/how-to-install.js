"use client";

import React from "react";
import Comments from "../../componants/comments/comments";

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

const HowToInstall = () => {
  return (
    <div className="p-4">
      <div className="container m-auto">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          {/* Sol Kısım */}
          <div
            style={{
              backgroundColor: "var(--advert-list-bg)",
              color: "var(--color)",
            }}
            className="flex-none p-4 rounded-lg w-full md:w-1/2"
          >
            <div className="flex items-center space-x-4">
              <h2
                style={{ color: "var(--foreground)" }}
                className="text-white text-[30px] py-2 font-bold"
              >
                NASIL YÜKLENİR
              </h2>
              <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
            </div>
            <div className="flex flex-col space-y-4 min-h-[650px] max-h-[650px] overflow-y-scroll overflow-hidden">
              {steps.map((step) => (
                <div key={step.number} className="p-4 rounded-lg">
                  <div className="flex items-center md:items-end mb-3">
                    <h2 className="text-6xl font-bold mr-2">{step.number}</h2>
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
          </div>

          {/* Sağ Kısım */}
          <div
            style={{
              backgroundColor: "var(--advert-list-bg)",
              color: "var(--color)",
            }}
            className="flex-none p-4 rounded-lg  w-full md:w-1/2"
          >
            <div className="flex items-center space-x-4">
              <h2
                style={{ color: "var(--foreground)" }}
                className="text-white text-[30px] py-2 font-bold"
              >
                YORUMLAR
              </h2>
              <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
            </div>
            <div className="min-h-[650px] max-h-[650px] overflow-y-scroll overflow-hidden">
              <Comments />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToInstall;
