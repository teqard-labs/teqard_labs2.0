import React, { useEffect, useRef, useState } from 'react';
import styles, { layout } from "../style";
import { useTheme } from "./ThemeContext";

const CardDeal = () => {
  const { theme } = useTheme();
  const textColor = theme === 'light' ? 'text-black' : 'text-white';
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setIsVisible(rect.top <= window.innerHeight && rect.bottom >= 0);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);
    // Initial check when the component mounts
    handleScroll();

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={layout.section} ref={sectionRef}>
      <div className={`${layout.sectionInfo} ${textColor} ${isVisible ? 'enter-from-left' : ''}`}>
        <h2 className={styles.heading2}>
        Fueling tangible growth with driving digital transformation.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Leveraging deep industry expertise to deliver innovative solutions that drive operational efficiency and enable seamless adaptation to the dynamic digital landscape.
        </p>
      </div>
      <div className={`${layout.sectionImg} ${isVisible ? 'enter-from-right' : ''}`}>
        <div className="rounded-lg overflow-hidden relative">
          <img src={techImage} alt="Technology" className="w-[100%] h-[100%]" />
          {isVisible && (
            <div className="absolute inset-0 bg-gradient-to-b from-secondary to-black opacity-70"></div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CardDeal;
