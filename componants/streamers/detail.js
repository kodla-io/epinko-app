"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaTwitch } from "react-icons/fa";
import { PiWarningCircleFill } from "react-icons/pi";
import StreamerSingle from "../streamers/streamers-single"

const StreamerDetailTop = () => {
  const [activeAmount, setActiveAmount] = useState(10);

  return (
    <div id="streamer-detail" className="container m-auto">
      <div className="text-white min-h-screen p-4">
        <div className="flex justify-between items-center w-full mb-4">
          <div className="flex space-x-4 flex-wrap space-y-2">
            <Link href="/">
              <button className="bg-[var(--label4)] hover:bg-[var(--label6)] py-1 px-4 rounded">
                <span className="flex items-center">
                  <FaTwitch className="mr-2" />
                  ozlemyilmaz
                </span>
              </button>
            </Link>
            <Link href="/">
              <button className="bg-[var(--label4)] hover:bg-[var(--label6)] py-1 px-4 rounded">
                TAKİP ET
              </button>
            </Link>
            <Link href="/">
              <button className="bg-[var(--label4)] hover:bg-[var(--label6)] py-1 px-4 rounded">
                YAYINCI BAŞVURUSU YAP
              </button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-4">
          <div className="flex-shrink-0 md:w-5/8 w-full">
            <img
              src="https://placehold.co/1000"
              alt="Profile"
              className="w-full h-full object-cover rounded-lg shadow-md max-h-[500px] min-h-[500px]"
            />
          </div>

          <div className="flex flex-wrap flex-col justify-between bg-[var(--list-box)] p-6 rounded-lg shadow-md md:mt-0 mt-6 max-w-md w-full md:w-3/8 max-h-[500px] min-h-[500px]">
            <div className="flex  items-center w-full mb-8">
              <div className="w-full flex space-x-4 justify-between">
                <Link href="/">
                  <button className="bg-[var(--label4)] hover:bg-[var(--label6)] py-1 px-4 rounded text-sm">
                    YAYINCIYI DESTEKLE
                  </button>
                </Link>
                <Link href="/">
                  <button className="bg-[var(--label4)] hover:bg-[var(--label6)] py-1 px-4 rounded text-sm">
                    TWITCH MESAJLARI
                  </button>
                </Link>
              </div>
            </div>
            <h2 className="text-xl text-center font-semibold mb-4">
              ozlemyilmaz
            </h2>
            <input
              type="text"
              placeholder="Kullanıcı Adı Giriniz"
              className="w-full mb-4 px-3 py-2 rounded border border-[var(--label4)]"
            />
            <textarea
              placeholder="Mesajınızı Giriniz (En fazla 250 Karakter)"
              maxLength="250"
              className="w-full mb-4 px-3 py-2 rounded resize-none border border-[var(--label4)]"
            />
            <h3 className="mb-2">BAĞIŞ MİKTARI</h3>
            <div className="flex justify-center space-x-2 mb-4">
              {[10, 15, 20, 30].map((amount) => (
                <button
                  key={amount}
                  onClick={() => setActiveAmount(amount)}
                  className={`py-1 px-4 rounded ${
                    activeAmount === amount
                      ? "bg-[var(--label4)]"
                      : "border border-[var(--label4)] bg-transparent"
                  } hover:bg-[var(--label6)]`}
                >
                  {amount}
                </button>
              ))}
            </div>
            <button className="bg-[var(--label4)] hover:bg-[var(--label6)] py-2 w-full rounded">
              YAYINCIYA BAĞIŞ YAP
            </button>
          </div>
        </div>

        <div className="bg-[var(--label4)] p-4 rounded-lg shadow-md mt-6 flex items-center space-x-4">
          <PiWarningCircleFill className="hidden md:block w-[150px] h-[50px]" />
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh sed
            pulvinar proin gravida. Consectetur lorem donec massa sapien
            faucibus et molestie ac. Dui accumsan sit amet nulla facilisi morbi
            tempus iaculis urna. Pellentesque eu tincidunt tortor aliquam nulla
            facilisi. Sit amet mattis vulputate enim nulla aliquet porttitor
            lacus luctus. Nibh nisl condimentum id venenatis a.
          </p>
        </div>

        <div className="py-8">
          <StreamerSingle title="POPÜLER YAYINCILARIMIZ" />
        </div>
      </div>
    </div>
  );
};

export default StreamerDetailTop;
