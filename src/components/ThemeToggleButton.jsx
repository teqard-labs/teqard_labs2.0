import React from "react";
import { useTheme } from "./ThemeContext";
import Moon from "../assets/moon.png";
import Sun from "../assets/sun.png";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-4 py-2 rounded-full inline-flex items-center transition-all duration-300"
    >
      <img
        src={theme === "light" ? Moon : Sun}
        alt={theme === "light" ? "Moon" : "Sun"}
        className={`w-5 h-5 ${
          theme === "dark" ? "transform rotate-180" : ""
        } transition-transform duration-300 ease-in-out`}
      />
    </button>
  );
};

export default ThemeToggleButton;
