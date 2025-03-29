// components/StyledSection.js
import React from "react";

const TextBanner = () => {
  return (
    <section className="relative py-40 relative">
      <div className="container mx-auto px-4">
        <div className="absolute top-[-50px] right-0 w-1/2 max-w-[500px] max-h-[500px]">
          <img
            src="https://placehold.co/450x450"
            alt="Character"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg p-8">
          <div className="relative z-10 text-white w-4/5">
            <h2 className="text-3xl font-bold mb-4">LOREM IPSUM LOREM IPSUM</h2>
            <p>
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
              Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut
              Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris
              Nisi Ut Aliquip Ex Ea Commodo Consequat. Duis Aute Irure Dolor In
              Reprehenderit In Voluptate Velit Esse Cillum Dolore Eu Fugiat
              Nulla Pariatur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextBanner;
