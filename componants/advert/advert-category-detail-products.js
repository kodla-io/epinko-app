import React from "react";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { FcAdvertising } from "react-icons/fc";

const AdvertCategoryDetailProducts = () => {
  const products = Array.from({ length: 18 }, (_, i) => ({
    title: `Rise Online Goldbar`,
    img: "https://kabasakalonline.com/_next/image?url=https%3A%2F%2Fcdn.ksobilisim.com%2Fstatic%2Ftg%2Fupload%2Furunler%2Fb1de7e6b-6f8e-4252-acee-a93f15e02d9d.webp&w=3840&q=100",
  }));

  return (
    <div className="container m-auto my-4">
      <div className="p-4">
        <div className="relative">
          <input
            type="text"
            placeholder="İlan Kategori Filtrele"
            className="w-full p-4 rounded-full text-[var(--foreground)] border border-gray-400 cursor-pointer focus:outline-none"
          />
          <div className="absolute -translate-y-1/2 top-1/2 right-2 p-3 bg-[var(--label2)] rounded-full flex items-center pointer-events-none">
            <IoSearch />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-6 p-4">
        {products.map((product, index) => (
          <Link
            href="/"
            key={index}
            className="bg-[var(--bg-soft)] rounded-xl overflow-hidden shadow-md relative"
          >
            <img
              src={product.img}
              alt={product.title}
              className="w-full  object-cover min-h-[280px] max-h-[280px]"
            />
            <div className="p-2 text-white font-semibold text-center text-lg clamp-1 absolute bottom-[-2px] w-full backdrop-blur-lg">
              <p>{product.title}</p>
              <span className="flex items-center justify-center text-[14px] text-[var(--label7)]">
                <FcAdvertising />
                Aktif İlan Sayısı 12
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdvertCategoryDetailProducts;
