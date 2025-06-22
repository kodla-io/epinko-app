"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, Home, Mail, Gamepad, Megaphone, LogIn, UserPlus } from "lucide-react";
import Link from "next/link";
import { useTheme } from "./Theme";

export default function MobileNav({ onLoginClick, onRegisterClick }) {
  const toggleTheme = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setIsDark(savedTheme === "dark");
  }, []);

  const handleToggle = () => {
    setIsDark(!isDark);
    toggleTheme();
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  const menuItems = [
    { label: "Anasayfa", href: "/", icon: <Home size={18} className="mr-2" /> },
    {
      label: "İletişim",
      href: "/contact",
      icon: <Mail size={18} className="mr-2" />,
    },
    {
      label: "Tüm Oyunlar",
      href: "/all-games",
      icon: <Gamepad size={18} className="mr-2" />,
    },
    {
      label: "Tüm İlanlar",
      href: "/all-adverts",
      icon: <Megaphone size={18} className="mr-2" />,
    },
  ];

  return (
    <>
      <button
        className="md:hidden p-2 z-10"
        onClick={toggleMenu}
        aria-label="Open Menu"
      >
        <Menu size={28} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-30 z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            {/* Sidebar */}
            <motion.div
              className="fixed bg-[var(--background)] text-[var(--foreground)] top-0 left-0 h-full w-80 z-30 flex flex-col"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              {/* Close Icon */}
              <div className="bg-[var(--bg-header)] p-3 ">
                <button
                  onClick={toggleMenu}
                  className="self-end mb-6 text-white w-full flex justify-end"
                >
                  <X className="mr-1" size={26} />
                </button>

                <div className="flex justify-between mb-2">
                  <div className="text-2xl font-bold text-green-500">
                    {/* epin<span className="text-white">KO</span> */}
                    <Link href="/">
                      <img
                        className="max-w-[90px] md:max-w-[130px]"
                        src="/media/logo.png"
                      />
                    </Link>
                  </div>
                  <div className="d-l-mode">
                    <div className="middle">
                      <div
                        className={`switch ${isDark ? "dark" : ""}`}
                        onClick={handleToggle}
                      >
                        <span className="sun"></span>
                        <span className="moon"></span>

                        <span className="sun--bubble--left"></span>
                        <span className="sun--bubble--right"></span>

                        <span className="moon--bubble--left"></span>
                        <span className="moon--bubble--middle"></span>
                        <span className="moon--bubble--right"></span>
                        <span className="moon--star--left"></span>
                        <span className="moon--star--right"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Menu Items */}
              <ul className="space-y-4 p-6 ">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="flex items-center text-lg font-medium relative transition-transform duration-300 hover:-translate-y-1"
                    >
                      <span className="flex items-center">
                        {item.icon}
                        <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
                          {item.label}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
                
                {/* Login/Register Buttons */}
                <li className="pt-4 border-t border-gray-600">
                  <button
                    onClick={() => {
                      closeMenu();
                      onLoginClick && onLoginClick();
                    }}
                    className="flex items-center text-lg font-medium relative transition-transform duration-300 hover:-translate-y-1 w-full text-left"
                  >
                    <span className="flex items-center">
                      <LogIn size={18} className="mr-2" />
                      <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
                        Giriş Yap
                      </span>
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      closeMenu();
                      onRegisterClick && onRegisterClick();
                    }}
                    className="flex items-center text-lg font-medium relative transition-transform duration-300 hover:-translate-y-1 w-full text-left"
                  >
                    <span className="flex items-center">
                      <UserPlus size={18} className="mr-2" />
                      <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
                        Kayıt Ol
                      </span>
                    </span>
                  </button>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
