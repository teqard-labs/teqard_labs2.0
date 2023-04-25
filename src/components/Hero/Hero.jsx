import styles from "../../style";
import { discount, robot } from "../../assets";
import GetStarted from "./GetStarted";
import Carousel from 'nuka-carousel';
import { useTheme } from "../ThemeContext"

const Hero = () => {
  const { theme } = useTheme();
  const textColor = theme === 'light' ? 'text-black' : 'text-white';

  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className={`flex-1 font-poppins font-semibold ss:text-[72px] ${textColor} text-[52px]  ss:leading-[100.8px] leading-[75px]`}>
          Unleashing the <br className="sm:block hidden" />{" "}
            <span className="text-gradient"> potential</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className={`font-poppins font-semibold ss:text-[68px] text-[52px] ${textColor} ss:leading-[100.8px] leading-[75px] w-full`}>
        of technology.
        </h1>
        <p className={`${textColor} ${styles.paragraph}  max-w-[470px] mt-5`}>
        Our company helps businesses leverage the power of technology to optimize processes, increase efficiency, and achieve their goals.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <Carousel
          wrapAround={true}
          autoplay={true}
          autoplayInterval={4000}
          renderCenterLeftControls={({ previousSlide }) => null}
          renderCenterRightControls={({ nextSlide }) => null}
          renderBottomCenterControls={({ currentSlide }) => null}
          className="w-[100%] h-[100%] relative z-[5]"
        >
          <img src={robot} alt="Image 1" />
          <img src={robot} alt="Image 2" />
          <img src={robot} alt="Image 3" />
          {/* Add more slides as desired */}
        </Carousel>

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
