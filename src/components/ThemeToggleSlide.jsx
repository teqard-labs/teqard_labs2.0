// import React from "react";
// import { useTheme } from "./ThemeContext";
// import Moon from "../assets/moon.png";
// import Sun from "../assets/sun.png";

// const ThemeToggleSlide = () => {
//     const { theme, toggleTheme } = useTheme();

//   return (
//     <div className={`slider-container ml-10 ${theme === "dark" ? "slide-left" : "slide-right"}`}>
//       <div className="slider-content">
//         <div className={`toggle-button-container ${
//           theme === "dark" ? "slide-toggle-dark" : "slide-toggle-light"
//         }`}>
//           <button
//             onClick={toggleTheme}
//             className="toggle-button -mt-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-4 py-2 rounded-full inline-flex items-center transition-all duration-300"
//           >
//             <img
//               src={theme === "light" ? Moon : Sun}
//               alt={theme === "light" ? "Moon" : "Sun"}
//               className={`w-5 h-5 ${
//                 theme === "dark" ? "transform rotate-180" : ""
//               } transition-transform duration-300 ease-in-out`}
//             />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ThemeToggleSlide;
