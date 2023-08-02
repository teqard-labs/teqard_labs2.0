import React from 'react';
import { stats } from "../../constants";
import styles from "../../style";
import { useTheme } from "../ThemeContext";

const Stats = () => {
  const { theme } = useTheme();
  const textColor = theme === "light" ? "text-black" : "text-white";
  const textGradient = theme === "light" ? "text-gradient-light" : "text-gradient";

  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat, index) => (
        <div key={stat.id} className="flex-1 flex justify-start items-center flex-row m-3" style={{ animation: `bottomUpFadeIn 1.3s ease ${index * 0.4}s forwards`, opacity: 0 }}>
          <h4
            className={`font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] ${textColor}`}
          >
            {stat.value}
          </h4>
          <p
            className={`font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] ${
              theme === "light" ? "text-secondary" : "text-secondary"
            } uppercase ml-3`}
          >
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
