import React from "react";
import { FaEye } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const NewsTop = () => {
  return (
    <div className="flex justify-center">
      <div className="container flex flex-wrap md:flex-nowrap p-4 py-4 md:py-16">
        <div className="md:w-5/8 w-full max-h-[600px] min-h-[600px] relative">
          <img
            src="https://placehold.co/800x500"
            alt="Main"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[var(--background)] to-transparent">
            <span className="bg-[var(--primary)] text-white px-2 py-1 rounded">
              Rise Online
            </span>
            <h2 className="text-[var(--foreground)] mt-2">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit,
            </h2>
            <div className="text-[var(--text-gray)] flex gap-4 mt-1">
              <span className="flex items-center">
                <SlCalender className="mr-2" /> 25-10-2022
              </span>
              <span className="flex items-center">
                <FaEye className="mr-2" /> 157 Görüntüleme
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:w-3/8 w-full">
          <div className="max-h-[300px] min-h-[300px] relative">
            <img
              src="https://placehold.co/800x500"
              alt="Top"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[var(--background)] to-transparent">
              <span className="bg-[var(--success)] text-white px-2 py-1 rounded">
                PUBG
              </span>
              <h2 className="text-[var(--foreground)] mt-2">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit,
              </h2>
              <div className="text-[var(--text-gray)] flex gap-4 mt-1">
                <span className="flex items-center">
                  <SlCalender className="mr-2" /> 25-10-2022
                </span>
                <span className="flex items-center">
                  <FaEye className="mr-2" /> 157 Görüntüleme
                </span>
              </div>
            </div>
          </div>
          <div className="max-h-[300px] min-h-[300px] relative">
            <img
              src="https://placehold.co/800x500"
              alt="Bottom"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[var(--background)] to-transparent">
              <span className="bg-[var(--alert)] text-white px-2 py-1 rounded">
                Valorant
              </span>
              <h2 className="text-[var(--foreground)] mt-2">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit,
              </h2>
              <div className="text-[var(--text-gray)] flex gap-4 mt-1">
                <div className="text-[var(--text-gray)] flex gap-4 mt-1">
                  <span className="flex items-center">
                    <SlCalender className="mr-2" /> 25-10-2022
                  </span>
                  <span className="flex items-center">
                    <FaEye className="mr-2" /> 157 Görüntüleme
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTop;
