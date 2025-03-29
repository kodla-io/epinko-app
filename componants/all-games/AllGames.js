import React from "react";
import Link from "next/link";

const AllGames = () => {
  return (
    <div className="py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-4">
          <h2
            style={{ color: "var(--foreground)" }}
            className="text-white text-[30px] py-2 font-bold"
          >
            TÜM OYUNLAR
          </h2>
          <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 to-green-500" />
        </div>
        <div className="py-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {Array.from({ length: 15 }, (_, index) => (
              <Link href="/" key={index}>
                <div
                  key={index}
                  className="text-center game-category-card glow-on-hover"
                >
                  <img
                    src="https://placehold.co/300x350"
                    alt={`Game ${index + 1}`}
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="mt-2 text-lg font-semibold game-category-card-title">
                    <img src="https://placehold.co/100x50/000000/FFFFFF/png" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center py-4">
          <Link href="/all-games">
            <button
              style={{
                backgroundColor: "var(--btn-bg)",
                color: "var(--btn-color)",
              }}
              className="px-6 py-2 text-white rounded-lg shadow-lg transition duration-300 glow-on-hover"
            >
              DAHA FAZLA GÖRÜNTÜLE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllGames;
