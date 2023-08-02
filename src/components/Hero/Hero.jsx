import React, { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from '../../style';
import { pic4, pic5, pic6, pic7 } from '../../assets';
import { useTheme } from '../ThemeContext';


const Hero = () => {
  const { theme } = useTheme();
  const textColor = theme === 'light' ? 'text-black' : 'text-white';

  // Create an array containing the image URLs
  const imageUrls = [pic4, pic5, pic6, pic7];

  // Preload the images
  useEffect(() => {
    imageUrls.forEach((url) => {
      const image = new Image();
      image.src = url;
    });
  }, [imageUrls]);

  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 ${theme === "dark" ? "enter-from-left-dark" : "enter-from-left-light"}`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`flex-1 font-poppins font-semibold ss:text-[72px] ${textColor} text-[52px]  ss:leading-[100.8px] leading-[75px]`}>
            Unleashing the <br className="sm:block hidden" />{" "}
            <span className={theme === "dark" ? "text-secondary" : "text-secondary"}> Potential</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0"></div>
        </div>

        <h1 className={`font-poppins font-semibold ss:text-[68px] text-[52px] ${textColor} ss:leading-[100.8px] leading-[75px] w-full`}>
          of technology.
        </h1>
        <p className={`${textColor} ${styles.paragraph}  max-w-[470px] mt-5`}>
          Our company helps businesses leverage the power of technology to optimize processes, increase efficiency, and achieve their goals.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative fade-in-enter-from-right`} style={{ background: "transparent" }}>
        <Carousel
          autoPlay={true}
          interval={4000}
          infiniteLoop={true}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          className="w-[80%] h-[100%] relative z-[5]  fade-in-enter-from-right"
        >
          {imageUrls.map((url, index) => (
            <div key={index}>
              <img src={url} className="w-[70%] opacity-90 rounded-lg" alt={`Image ${index + 1}`} />
            </div>
          ))}
        </Carousel>

        <div className="absolute z-[0] w-[40%] h-[35%] top-20 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-20" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-40 bottom-0 blue__gradient" />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
      </div>
    </section>
  );
};

export default Hero;
