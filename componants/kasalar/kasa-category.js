import React from "react";
import Link from "next/link";

const KasaCategory = () => {
  const products = Array.from({ length: 8 }, (_, i) => ({
    title: `Rise Online Goldbar`,
    price: `15₺`,
    img: "/media/kasa.png",
  }));

  return (
    <div className="container m-auto my-4">
      <div className="flex items-center space-x-4">
        <h2
          style={{ color: "var(--foreground)" }}
          className="text-white text-[30px] py-2 font-bold"
        >
          KASA SİSTEMİ
        </h2>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
        {products.map((product, index) => (
          <Link
            href="/"
            key={index}
            className="bg-[var(--bg-soft)] rounded-xl overflow-hidden shadow-md relative"
          >
            <img
              src={product.img}
              alt={product.title}
              className="w-full object-cover md:min-h-[180px] md:max-h-[180px] lg:min-h-[226px] lg:max-h-[226px]"
            />
            <div className="p-2 text-center text-md absolute bottom-0 w-full backdrop-blur-lg">
              <p className="text-white clamp-1">{product.price}</p>
              <p className="text-[var(--success)] clamp-1">{product.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default KasaCategory;
