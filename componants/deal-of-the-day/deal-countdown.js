import React, { useState, useEffect } from "react";
import PlayingCards from "./playing-cards";

const DealOfTheDayCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container m-auto flex flex-col md:flex-row items-center justify-between gap-8 py-8">
      {/* Left Side */}
      <div className="flex flex-col gap-6 w-full md:w-1/2 p-4 text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          SIT AMET CURSUS SIT AMET DICTUM.
        </h2>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Mauris vitae
          ultricies leo integer malesuada nunc. Sit amet cursus sit amet dictum.
          Lectus quam id leo in vitae turpis massa.
        </p>

        <div className="flex gap-2">
          <div className="bg-gray-700 rounded-md p-2 text-center text-white text-sm">
            <div className="font-bold">{timeLeft.days}</div>
            <div>gün</div>
          </div>
          <div className="bg-gray-700 rounded-md p-2 text-center text-white text-sm">
            <div className="font-bold">{timeLeft.hours}</div>
            <div>saat</div>
          </div>
          <div className="bg-gray-700 rounded-md p-2 text-center text-white text-sm">
            <div className="font-bold">{timeLeft.minutes}</div>
            <div>dakika</div>
          </div>
          <div className="bg-gray-700 rounded-md p-2 text-center text-white text-sm">
            <div className="font-bold">{timeLeft.seconds}</div>
            <div>saniye</div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 flex justify-center">
        <PlayingCards />
      </div>
    </div>
  );
};

export default DealOfTheDayCountdown;
