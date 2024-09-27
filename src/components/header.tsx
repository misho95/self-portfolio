import { useEffect, useState } from "react";
import { BsSun, BsMoonStars } from "react-icons/bs";

const Header = () => {
  const localTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(localTheme || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme === "light" ? "light" : "dark");
  }, [theme]);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <header className="w-full flex justify-end items-center h-[50px] p-5">
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="size-5"
      >
        {theme === "light" ? (
          <BsSun className="w-full h-full" />
        ) : (
          <BsMoonStars className="w-full h-full" />
        )}
      </button>
    </header>
  );
};

export default Header;
