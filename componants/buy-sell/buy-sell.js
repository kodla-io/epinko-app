import React from "react";
import { GiTwoCoins } from "react-icons/gi";
import { TbBasket } from "react-icons/tb";
import { TbBasketDollar } from "react-icons/tb";

const BuySell = () => {
  const items = Array(5).fill({
    title: "LOREM IPSUM DOLAR SIT AMET",
    details: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Aenean commodo ligula eget dolor.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Cum sociis natoque penatibus et magnis dis montes.",
    ],
    price: "40,60₺",
    sellPrice: "37,60₺",
  });

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Sol Kısım */}
      <div className="lg:w-1/4 w-full">
        <div className="bg-[var(--advert-list-bg)] p-4 rounded-xl">
          <img
            src="https://placehold.co/500"
            alt="Goldbar"
            className="w-full h-full md:h-[350px] object-cover rounded-xl mb-4"
          />
          <img
            src="https://placehold.co/200x70/000000/FFFFFF"
            className="relative top-[-50px] left-1/2 transform -translate-x-1/2"
          />
          <div className="relative top-[-30px]">
            <h2 className="text-white font-bold text-lg mb-2">KNIGHT ONLINE</h2>
            <p className="text-gray-400 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
        </div>
      </div>

      {/* Sağ Kısım */}
      <div className="lg:w-3/4 w-full flex flex-col gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-[var(--advert-list-bg)] rounded-xl p-3 flex flex-col md:flex-row items-start md:items-center gap-4"
          >
            <img
              src="https://placehold.co/100"
              alt="Oyun"
              className="w-[100px] h-[100px] object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="text-white font-bold text-sm md:text-md mb-1">
                {item.title}
              </h3>
              <ul className="text-gray-400 text-xs list-disc ml-4 space-y-1">
                {item.details.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-2 w-full md:w-auto md:min-w-[250px]">
              <div className="flex gap-2">
                <button className="bg-[var(--primary)] text-white font-semibold text-sm px-2 py-2 rounded-md w-full flex items-center justify-center">
                  <GiTwoCoins className="mr-2" />
                  {item.price}
                </button>
                <button className="bg-[var(--primary)] text-white font-semibold text-sm px-2 py-2 rounded-md w-full flex items-center justify-center">
                  <TbBasket className="mr-2" />
                  Sepete Ekle
                </button>
              </div>
              <div className="flex gap-2">
                <button className="bg-[var(--success)] text-white font-semibold text-sm px-2 py-2 rounded-md w-full flex items-center justify-center">
                  <GiTwoCoins className="mr-2" />
                  {item.sellPrice}
                </button>
                <button className="bg-[var(--success)] text-white font-semibold text-sm px-2 py-2 rounded-md w-full flex items-center justify-center">
                  <TbBasketDollar className="mr-2" />
                  Bize GB Sat
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuySell;
