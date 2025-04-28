import React, { useState } from "react";

const CreateAdvert = () => {
  const [selectedIndices, setSelectedIndices] = useState([]);

  const toggleSelection = (index) => {
    setSelectedIndices(
      (prevSelected) =>
        prevSelected.includes(index)
          ? prevSelected.filter((i) => i !== index) // seçiliyse çıkar
          : [...prevSelected, index] // seçili değilse ekle
    );
  };

  return (
    <div className="container mx-auto my-12">
      <div className="p-4">
        <div className="bg-[var(--advert-list-bg)] rounded-xl mb-8 p-4">
          <div className="flex-1 flex items-center flex-wrap lg:flex-nowrap lg:flex-col lg:flex-row">
            {Array(4)
              .fill("")
              .map((_, index) => (
                <div
                  key={index}
                  className="lg:flex-1 flex w-full items-center mb-4 lg:mb-0 gap-4 flex-nowrap"
                >
                  <div
                    className={`bg-gradient-to-b ${
                      index < 2
                        ? "from-[var(--success)]"
                        : "from-[var(--alert)]"
                    } to-transparent rounded-full p-[2px]`}
                  >
                    <div className="p-4 bg-[var(--bg-info-box)] rounded-full">
                      <div
                        className={`bg-gradient-to-b ${
                          index < 2
                            ? "from-[var(--success)]"
                            : "from-[var(--alert)]"
                        } to-transparent rounded-full p-[2px]`}
                      >
                        <img
                          src="https://placehold.co/100"
                          alt="User Avatar"
                          className="rounded-full w-18 h-18"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <h3 className="font-bold">Lorem Ipsum</h3>
                    <p className="text-sm">
                      Eget velit aliquet sagittis id. Duis faucibus in ornare
                      quam viverra.
                    </p>
                  </div>
                </div>
              ))}
          </div>
          <div className="flex-1 mt-12 lg:flex flex-nowrap items-center hidden">
            {Array(4)
              .fill("")
              .map((_, index) => (
                <div
                  key={index}
                  className="flex-1 flex flex-col items-start relative"
                >
                  <div
                    className={`bg-${
                      index < 3 ? "green" : "red"
                    }-500 p-2 rounded-full z-10 ml-[40px]`}
                  >
                    <div className="w-4 h-4 rounded-full bg-current" />
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="bg-[var(--advert-list-bg)] rounded-xl p-4 rounded mb-4">
          <h4 className="text-lg font-bold mb-2">İlan Kategori Bilgileri</h4>
          <div className="mb-4">
            <select className="w-full p-2 bg-gray-700 text-white rounded border border-green-500">
              <option>Knight Online</option>
              <option>Valorant</option>
              <option>PUBG</option>
              <option>Roblox</option>
            </select>
          </div>

          <div className="flex flex-col gap-2 mb-4 md:flex-row md:flex-wrap">
            {Array(4)
              .fill("")
              .map((_, index) => {
                const isSelected = selectedIndices.includes(index);
                return (
                  <button
                    key={index}
                    onClick={() => toggleSelection(index)}
                    className={`py-2 px-4 rounded flex items-center w-full md:w-auto
                ${isSelected ? "bg-green-600" : "bg-gray-700"} text-white`}
                  >
                    <img
                      src="https://placehold.co/20x20"
                      alt="Icon"
                      className="mr-2"
                    />
                    Lorem Ipsum
                  </button>
                );
              })}
          </div>

          <div className="w-full flex justify-end">
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
              Devam Et
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAdvert;
