import React from "react";
import { useTheme } from "../ThemeContext";

const Cards = ({ imgSrc, title, description }) => {

    const { theme } = useTheme();
    const textColor = theme === 'light' ? 'text-black' : 'text-white';

  return (
    <div className="container">
      <div className="card">
        <div className="slide slide1">
          <div className="content">
            <img src={imgSrc} alt="icon" />
          </div>
        </div>
        <div className={`slide slide2 cardbg ${textColor}`}>
          <div className="content">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
