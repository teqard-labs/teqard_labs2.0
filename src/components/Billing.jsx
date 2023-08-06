import React, { useEffect, useRef, useState } from 'react';
import tech2Image from "../assets/tech2.jpg";
import styles, { layout } from "../style";
import { useTheme } from "./ThemeContext";

const Billing = () => {
  const { theme } = useTheme();
  const textColor = theme === "light" ? "text-black" : "text-white";
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
    <section id="product" className={layout.sectionReverse} ref={sectionRef}>
      <div className={layout.sectionImgReverse} >
        <div className={`rounded-lg overflow-hidden relative ${isVisible ? 'enter-from-left' : ''}`}>
          <img src={tech2Image} alt="billing" className="w-full h-full relative z-5" />
          {isVisible && (
            <div className="absolute inset-0 bg-gradient-to-b from-secondary to-black opacity-70"></div>
          )}
        </div>
      </div>

      <div className={`${layout.sectionInfo} ${textColor} ${isVisible ? 'enter-from-right' : ''}`}>
        <h2 className={styles.heading2}>
        Empowering growth through innovative<br className="sm:block hidden" /> solutions.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Accelerating business success through tailored IT services and transformative solutions for a wide range of organizations.
        </p>
      </div>
    </section>
  );
};

export default Billing;
