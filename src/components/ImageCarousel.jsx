import React, { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from '../style';
import c1 from '../assets/c1.jpg'
import c2 from '../assets/c2.jpg'
import c3 from '../assets/c3.jpg'
import LArrow from '../assets/back-100w.png';
import RArrow from '../assets/forward-100w.png';

// Custom previous arrow component
// Custom previous arrow component
const PrevArrow = ({ onClick }) => (
  <button
    className="carousel-arrow"
    style={{ left: "200px" }} // Adjust the left position as needed
    onClick={onClick}
  >
    <img src={LArrow} alt="larrow" />
  </button>
);

// Custom next arrow component
const NextArrow = ({ onClick }) => (
  <button
    className="carousel-arrow"
    style={{ right: "10px" }} // Adjust the right position as needed
    onClick={onClick}
  >
    <img src={RArrow} alt="rarrow" />
  </button>
);


const ImageCarousel = () => {

  const overlay = [
    {
      id: 1,
      pic: c1,
      text1: "Looking to",
      text2: "Revolutionize",
      text3: "your industry with IoT?",
      para: "We specialize in IoT solutions that can transform your industry. Our expertise in connecting devices, collecting data, and leveraging advanced analytics can help you unlock new opportunities and efficiencies in your business."

    },

    {
      id: 2,
      pic: c2,
      text1: "Looking to gain a",
      text2: "Competitive Edge",
      text3: " with cutting-edge technology?",
      para: " You're in the right place! At Teqard Labs, we offer innovative solutions that can give your business a competitive advantage. Whether it's AI, automation, or other emerging technologies, we have the expertise to help you stay ahead of the curve."
    },

    {
      id: 3,
      pic: c3,
      text1: "Want to take a",
      text2: "Peek",
      text3: "at our revolutionary projects?",
      para: "We're proud of our groundbreaking projects. We'd be happy to share insights into our past projects and discuss how we can tailor our solutions to meet your specific needs. You can find them below to see how we've helped other businesses achieve remarkable results through technology."
    },
  ]

  // useEffect(() => {
  //   imageUrls.forEach((url) => {
  //     const image = new Image();
  //     image.src = url;
  //   });
  // }, [imageUrls]);


  return (
    <div className="md:my-0 my-10 z-0 bg-black enter-from-right">

      <Carousel
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        showIndicators={true}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && <PrevArrow onClick={onClickHandler} />
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && <NextArrow onClick={onClickHandler} />
        }
        className="fade-in-enter-from-right"
      >
        {overlay.map((item, index) => (
          <div key={index}>
            <img src={item.pic} className="h-[90vw] ss:h-[50vw] relative opacity-40" alt={`Image ${index + 1}`} />
            <div className={`justify-center flex-1 ${styles.flexCenter} text-white flex-col absolute ${index === 0 ? "ss:top-[120px] top-24 left-[90px]" : index === 1 ? "ss:top-28 top-14 left-[90px]" : "ss:top-20 top-14 left-[90px]" } ss:w-[50vw] w-full left-0 xl:px-0 sm:px-16 px-6 enter-from-left`}>
              <div className="flex flex-row justify-between items-center w-full">
                <h1 className={`flex-1 font-poppins font-semibold ss:text-[60px] text-[25px] ss:w-auto  ss:leading-[60px] leading-[28px]`}>
                  {item.text1}
                  <br className="sm:block hidden" />{" "}
                  <span className='text-secondary'> {item.text2}</span>{" "}
                </h1>
                <div className="ss:flex hidden md:mr-4 mr-0"></div>
              </div>

              <h1 className={`font-poppins font-semibold ss:text-[56px] text-[25px] ss:leading-[60px] leading-[28px] w-[300px] ss:w-full`}>
                {item.text3}
              </h1>
              <p className={` ${styles.paragraph} leading-[20px] ss:leading-[25px]  ss:w-[40vw] w-[350px]  mt-5`}>
                {item.para}
              </p>
              <div className={` ${index === 2 ? "" : "hidden"} ss:mt-7 scale-75 ss:scale-100`} >
                <button data-text="Awesome" className="button">
                  <span className="actual-text">&nbsp;More&nbsp;</span>
                  <span className="hover-text" aria-hidden="true">
                    &nbsp;More&nbsp;
                  </span>
                </button>

              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;

