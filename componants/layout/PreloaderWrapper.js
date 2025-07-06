"use client";
import { createContext, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import Preloader from "./Preloader";
import React from "react";

export const PreloaderContext = createContext(() => {});

export default function PreloaderWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [showSpaPreloader, setShowSpaPreloader] = useState(false);

  // DOĞRU: Kendi fonksiyonunu value olarak ver!
  const pageLoaded = useCallback(() => {
    console.log("pageLoaded çağrıldı, preloader kapanacak!");
    setIsLoading(false);
  }, []);

  const pathname = usePathname();
  React.useEffect(() => {
    setIsLoading(true);
    setShowSpaPreloader(true);

    // Route değişiminden kısa süre sonra preloader'ı otomatik kapat
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 700); // 700ms sonra kapanır, süreyi isteğine göre ayarlayabilirsin

    return () => clearTimeout(timeout);
  }, [pathname]);

  React.useEffect(() => {
    const el = document.getElementById("layout-fake-loader");
    if (el) {
      el.remove();
      setShowSpaPreloader(true);
    }
  }, []);

  // İlk mount'ta preloader'ı otomatik kapat
  React.useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <PreloaderContext.Provider value={pageLoaded}>
      {showSpaPreloader && <Preloader isLoading={isLoading} />}
      {children}
    </PreloaderContext.Provider>
  );
}
