import React from "react";
import { useTheme } from "./ThemeContext";
import Moon from "../assets/moon.png";
import Sun from "../assets/sun.png";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-4 py-2 rounded inline-flex items-center"
    >
      <img
        src={theme === "light" ? Moon : Sun}
        alt={theme === "light" ? "Moon" : "Sun"}
        className="w-5 h-5"
      />
      
    </button>
  );
};

export default ThemeToggleButton;
