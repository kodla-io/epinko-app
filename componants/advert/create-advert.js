import React from "react";

const CreateAdvert = () => {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg">
      <div className="mb-8">
        <div className="flex-1 flex items-center">
          {Array(5)
            .fill("")
            .map((_, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div
                  className={`bg-${
                    index < 3 ? "green" : "red"
                  }-500 p-4 rounded-full mb-2`}
                >
                  <img
                    src="https://placehold.co/50x50"
                    alt="Icon"
                    className="w-12 h-12"
                  />
                </div>
                <h3 className="font-bold">Lorem Ipsum</h3>
                <p className="text-sm">
                  Eget velit aliquet sagittis id. Duis faucibus in ornare quam
                  viverra.
                </p>
              </div>
            ))}
        </div>
        <div className="flex-1 flex items-center">
          {Array(5)
            .fill("")
            .map((_, index) => (
              <div
                key={index}
                className="flex-1 flex flex-col items-center relative"
              >
                <div
                  className={`bg-${
                    index < 3 ? "green" : "red"
                  }-500 p-2 rounded-full z-10`}
                >
                  <div className="w-4 h-4 rounded-full bg-current" />
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="bg-gray-800 p-4 rounded mb-4">
        <h4 className="text-lg font-bold mb-2">İlan Kategori Bilgileri</h4>
        <div className="mb-4">
          <select className="w-full p-2 bg-gray-700 text-white rounded border border-green-500">
            <option>Knight Online</option>
            {/* Daha fazla seçenek ekleyebilirsiniz */}
          </select>
        </div>

        <div className="flex gap-2 mb-4">
          {Array(4)
            .fill("")
            .map((_, index) => (
              <button
                key={index}
                className={`bg-${
                  index === 2 ? "blue" : "gray"
                }-700 text-white py-2 px-4 rounded flex items-center`}
              >
                <img
                  src="https://placehold.co/20x20"
                  alt="Icon"
                  className="mr-2"
                />
                Lorem Ipsum
              </button>
            ))}
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
          Devam Et
        </button>
      </div>
    </div>
  );
};

export default CreateAdvert;
