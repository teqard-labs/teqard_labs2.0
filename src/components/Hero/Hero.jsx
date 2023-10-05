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
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} -mt-4 `}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 enter-from-left`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`flex-1 font-poppins font-semibold ss:text-[72px] text-[35px] ${textColor}  ss:leading-[100.8px] leading-[50px]`}>
            Empowering the
            <br className="sm:block hidden" />{" "}
            <span className={theme === "dark" ? "text-secondary" : "text-secondary"}> Connected</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0"></div>
        </div>

        <h1 className={`font-poppins font-semibold ss:text-[68px] text-[35px] ${textColor} ss:leading-[100.8px] leading-[50px] w-full`}>
          Future.
        </h1>
        <p className={`${textColor} ${styles.paragraph}  max-w-[700px]  mt-5`}>
          At Teqard Labs Pvt Ltd., we are the driving force behind innovation in the world of technology. Our passion for cutting-edge solutions and our commitment to excellence have established us as a trusted partner for businesses and individuals seeking expertise in embedded design, firmware development, IoT devices, industrial automation, R&D projects, and enlightening technical workshops.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative enter-from-right`} style={{ background: "transparent" }}>
        <Carousel
          autoPlay={true}
          interval={3000}
          infiniteLoop={true}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          className="w-[80%] h-[100%] relative md:mt-20 z-[5]  fade-in-enter-from-right"
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
