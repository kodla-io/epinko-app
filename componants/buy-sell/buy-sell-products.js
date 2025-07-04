import React from "react";
import Link from "next/link";

const BuySellProducts = () => {
  const products = Array.from({ length: 8 }, (_, i) => ({
    title: `Rise Online Goldbar`,
    img: "https://kabasakalonline.com/_next/image?url=https%3A%2F%2Fcdn.ksobilisim.com%2Fstatic%2Ftg%2Fupload%2Furunler%2Fb1de7e6b-6f8e-4252-acee-a93f15e02d9d.webp&w=3840&q=100",
  }));

  return (
    <div className="container m-auto my-4">
      <div className="flex items-center space-x-4">
        <h2
          className="text-[var(--foreground)] text-[30px] py-2 font-bold"
        >
          OYUN PARASI
        </h2>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-4">
        {products.map((product, index) => (
          <Link
            href="/"
            key={index}
            className="bg-[var(--advert-list-bg)] rounded-xl overflow-hidden shadow-md relative"
          >
            <img
              src={product.img}
              alt={product.title}
              className="w-full object-cover"
            />
            <div className="p-2 text-white font-semibold text-center text-lg clamp-1 absolute bottom-0 w-full backdrop-blur-lg rounded-t-full">
              {product.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BuySellProducts;
