import React, { useEffect, useRef, useState } from 'react';
import { features } from "../../constants";
import styles, { layout } from "../../style";
import { useTheme } from "../ThemeContext";
import 'intersection-observer';

const FeatureCard = ({ icon, title, content, index }) => {
  const { theme } = useTheme();
  const textColor = theme === 'light' ? 'text-black' : 'text-white';

 

  return (
    <div
      className={`flex flex-row p-6 rounded-[20px] ${textColor} ${
        index !== features.length - 1 ? "mb-6" : "mb-0 "
      } feature-card `}
      style={{
        animation: `fadeInRight 0.3s ease ${index === 0 ? "0.35s" : `calc(${index * 0.35}s + 0.35s)`} both`,
      }}
      key={index}
    >
      <div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
      >
        <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className={`font-poppins font-semibold text-[18px] leading-[23.4px] mb-1`}>
          {title}
        </h4>
        <p className={`font-poppins font-normal text-[16px] leading-[24px]`}>
          {content}
        </p>
      </div>
    </div>
  );
};

const Business = () => {
  const { theme } = useTheme();
  const textColor = theme === "light" ? "text-black" : "text-white";
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElement = document.getElementById("features");
      if (sectionElement) {
        const sectionRect = sectionElement.getBoundingClientRect();
        setIsVisible(sectionRect.top <= window.innerHeight && sectionRect.bottom >= 0);
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

  // Change the key value whenever isVisible changes to force re-render
  const fadeInSectionKey = isVisible ? "visible" : "hidden";

  return (
    <section id="features" className={layout.section}>
      <div key={fadeInSectionKey} className={`${layout.sectionInfo} ${textColor} animate-fadeIn`} style={{ opacity: isVisible ? 1 : 0 }}>
        <h2 className={styles.heading2}>
        Empowering Communities <br className="sm:block hidden" />
        through Futuristic IoT Solutions
        </h2>
        <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
        At Teqard Labs Pvt Ltd., we are the driving force behind innovation in the world of technology. Our passion for cutting-edge solutions and our commitment to excellence have established us as a trusted partner for businesses and individuals seeking expertise in embedded design, firmware development, IoT devices, industrial automation, R&D projects, and enlightening technical workshops.
        </p>
      </div>
      <div className={`${layout.sectionImg} flex-col fade-in-enter-from-right `}>
        {isVisible && // Only render FeatureCard components when the section is in view
          features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
      </div>
    </section>
  );
};

export default Business;
