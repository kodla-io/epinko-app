import React from "react";

const DealOfTheDayUnknown = ({ items }) => {
  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center space-x-4">
        <h2
          style={{ color: "var(--foreground)" }}
          className="text-white text-[30px] py-2 font-bold md:px-0 px-4"
        >
          LOREM IPSUM DOLOR SIT AMET
        </h2>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
      </div>
      <div className="flex flex-wrap">
        {items.map((item, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/2 xl:w-1/3 p-4">
            <div className="bg-[var(--advert-list-bg)] text-white rounded-xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative p-4 min-h-[200px] max-h-[200px] md:min-h-[250px] md:max-h-[250px]">
                  <img
                    src="/media/cube.png"
                    alt="Product"
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div
                    className="absolute top-0 -translate-x-1/2 left-1/2 flex items-center min-w-[120px] md:min-w-[150px] justify-center rounded-b-[30px] p-2"
                    style={{ backgroundColor: item.badgeColor }}
                  >
                    <span className="text-white text-sm md:text-lg font-bold">
                      {item.badgeText}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col justify-between p-4 text-[var(--invisible-text)]">
                  <h2 className="font-bold text-lg">{item.title}</h2>
                  <p className="text-sm mb-2">{item.description}</p>
                  <div className="flex items-center gap-3">
                    <p className="line-through">{item.originalPrice}₺</p>
                    <p className="text-xl font-bold">{item.discountedPrice}₺</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealOfTheDayUnknown;
