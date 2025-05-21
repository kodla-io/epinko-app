// components/CategoryStepOne.jsx
import React, { useState } from 'react';

const fakeData = [
  {
    id: 1,
    name: 'Knight Online',
    image: 'https://placehold.co/500x500?text=Knight+Online',
    subcategories: [
      { id: 101, name: 'Item Satış', image: 'https://placehold.co/500x500?text=Item+Satış' },
      { id: 102, name: 'Hesap', image: 'https://placehold.co/500x500?text=Hesap' },
      { id: 103, name: 'CSS Ring', image: 'https://placehold.co/500x500?text=CSS+Ring' },
    ],
  },
  {
    id: 2,
    name: 'Metin2',
    image: 'https://placehold.co/500x500?text=Metin2',
    subcategories: [
      { id: 201, name: 'PVP Server', image: 'https://placehold.co/500x500?text=PVP+Server' },
      { id: 202, name: 'Item Alım', image: 'https://placehold.co/500x500?text=Item+Alım' },
    ],
  },
  {
    id: 3,
    name: 'PUBG Mobile',
    image: 'https://placehold.co/500x500?text=PUBG+Mobile',
    subcategories: [
      { id: 301, name: 'Skin Satış', image: 'https://placehold.co/500x500?text=Skin+Satış' },
    ],
  },
];

const CategoryStepOne = ({ onNext }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const selectedCategory = fakeData.find((cat) => cat.id === selectedCategoryId);

  return (
    <div className="flex gap-6 w-full">
      {/* Ana Kategoriler */}
      <ul className="grid grid-cols-4 gap-4 w-3/4">
        {fakeData.map((category) => (
          <li
            key={category.id}
            className={`rounded cursor-pointer border-2 transition-all p-1 
              ${
                selectedCategoryId === category.id
                  ? 'border-[var(--success)] bg-[var(--success)]/10'
                  : 'border-transparent hover:border-[var(--success)]'
              }
            `}
            onClick={() => setSelectedCategoryId(category.id)}
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-[120px] object-cover rounded"
            />
            <p className="text-center mt-2 text-white font-medium">{category.name}</p>
          </li>
        ))}
      </ul>

      {/* Alt Kategoriler */}
      <div className="flex flex-col w-1/4 bg-[#20232a] rounded p-2 space-y-2">
        {selectedCategory?.subcategories.map((sub) => (
          <div
            key={sub.id}
            onClick={() => onNext(sub)}
            className="flex items-center gap-2 p-2 bg-[#2c2f36] hover:bg-[var(--success)]/10 cursor-pointer rounded text-white"
          >
            <img
              src={sub.image}
              alt={sub.name}
              className="w-10 h-10 object-cover rounded"
            />
            <span>{sub.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryStepOne;
