import React, { useEffect, useRef, useState } from 'react';
import styles, { layout } from "../style";
import { useTheme } from "./ThemeContext";
import techImage from "../assets/tech.jpg";

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
        Driving Digital Transformation for Tangible Growth.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our expertise specializes in delivering innovative solutions that optimize operational efficiency and empower organizations to adapt to the ever-evolving digital landscape, all backed by our deep industry expertise and contextual understanding.
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
