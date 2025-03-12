import { useEffect } from "react";

export const useTheme = () => {
  useEffect(() => {
    const root = document.documentElement;
    const savedTheme = localStorage.getItem("theme");

    if (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      root.setAttribute("data-theme", "dark");
    } else {
      root.setAttribute("data-theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const currentTheme = root.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    root.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return toggleTheme;
};
