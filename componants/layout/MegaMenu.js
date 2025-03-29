import React, { useState } from "react";
import Link from "next/link";

const MegaMenu = ({ items, isImage }) => {
  return (
    <div className="container mx-auto p-4 grid grid-cols-1 gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {items.map((item, index) => (
          <div key={index}>
            {isImage ? (
              <img src={item} alt={`Item ${index + 1}`} className="w-full" />
            ) : (
              <Link
                href={item.link}
                key={index}
                style={{ backgroundColor: item.bgColor }}
                className="flex items-center p-2 bg-opacity-90 rounded shadow megaMenu-item"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-10 h-10 mr-4 rounded-sm"
                />
                <span className="text-sm">{item.title}</span>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;
