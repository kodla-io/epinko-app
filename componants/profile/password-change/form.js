"use client";

import React  from "react";

const PasswordChange = ({ title }) => {

  return (
    <div className="container mx-auto p-4">
      <div className="flex md:flex-nowrap flex-wrap items-center space-x-4 py-2">
        <h2
          style={{ color: "var(--foreground)" }}
          className="text-[30px] py-2 font-bold"
        >
          {title}
        </h2>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-orange-500 hidden md:block to-green-500" />
      </div>

        <div
          id="password-change"
          className="bg-[var(--profile-tab-bg)] p-4 rounded-lg"
        >
          <div className="flex md:flex-row flex-col space-x-4 mb-2 md:mb-4 gap-2">
            <div className="md:flex-1 w-full">
              <input
                type="text"
                placeholder="Yeni Şifreniz"
                className="w-full p-3 rounded-lg text-white border-none focus:outline-none"
              />
            </div>

            <div className="md:flex-1 w-full">
              <input
                type="text"
                placeholder="Yeni Şifreniz (Tekrar)"
                className="w-full p-3 rounded-lg text-white border-none focus:outline-none"
              />
            </div>
          </div>

          <div className="flex w-full justify-end">
            <button className="py-2 text-center font-medium min-w-[200px] bg-[var(--success)] text-white rounded-md">
              GÜNCELLE
            </button>
          </div>
        </div>
    </div>
  );
};

export default PasswordChange;
