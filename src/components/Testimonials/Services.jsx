import { feedback } from "../../constants";
import styles from "../../style";
import FeedbackCard from "./FeedbackCard";
import { useTheme } from "../ThemeContext";
import { pic6 } from "../../assets";
import Cards from "../Cards/Cards"

const Testimonials = () => {
  const { theme } = useTheme();
  const textColor = theme === 'light' ? 'text-black' : 'text-white';

  return (
    <section id="clients" className={`py-5 ${styles.flexCenter} ${textColor} flex-col relative `}>
      <div id="services" className="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white dark:bg-[#00040f]">
        <div className="container xl:max-w-6xl mx-auto px-4">
          {/* Heading start */}
          <header className="text-center mx-auto mb-12 lg:px-20">
            <h2 className="text-2xl leading-normal mb-2 font-bold font-poppins text-black dark:text-white">
              What We Do
            </h2>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 100 60"
              style={{ margin: "0 auto", height: 35 }}
              xmlSpace="preserve"
            >
              <circle
                cx="50.1"
                cy="30.4"
                r={5}
                className="stroke-primary"
                style={{ fill: "transparent", strokeWidth: 2, strokeMiterlimit: 10 }}
              />
              <line
                x1="55.1"
                y1="30.4"
                x2={100}
                y2="30.4"
                className="stroke-primary"
                style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
              />
              <line
                x1="45.1"
                y1="30.4"
                x2={0}
                y2="30.4"
                className="stroke-primary"
                style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
              />
            </svg>
            <p className="text-gray-500 font-poppins leading-relaxed font-light text-xl mx-auto pb-2 dark:text-white">
              Powering your &amp; digital transformation.
            </p>
          </header>
          {/* End heading */}
          {/* row */}
          <div className="flex flex-wrap flex-row text-center">
            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp service-block"
              data-wow-duration="1s"
              data-wow-delay=".1s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationDelay: "0.1s",
                animationName: "fadeInUp"
              }}
            >
              {/* service block */}
              <Cards
              imgSrc={pic6} // Pass the image source
              title="IoT Concept Sketching" // Pass the title
              description="Creating visual representations of IoT device ideas and functionalities." // Pass the description
            />
               
              {/* end service block */}
            </div>
            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp service-block"
              data-wow-duration="1s"
              data-wow-delay=".1s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationDelay: "0.1s",
                animationName: "fadeInUp"
              }}
            >
              {/* service block */}
              <Cards
              imgSrc={pic6} // Pass the image source
              title="IoT Electronics" // Pass the title
              description="Designing the electronic components and circuits for IoT devices." // Pass the description
            />
                
              {/* end service block */}
            </div>
            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp service-block"
              data-wow-duration="1s"
              data-wow-delay=".3s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationDelay: "0.3s",
                animationName: "fadeInUp"
              }}
            >
              {/* service block */}
              <Cards
              imgSrc={pic6} // Pass the image source
              title="Wireless IoT Technologies" // Pass the title
              description="Implementing wireless communication protocols for seamless IoT connectivity." // Pass the description
            />
                
              {/* end service block */}
            </div>
            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp service-block"
              data-wow-duration="1s"
              data-wow-delay=".3s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationDelay: "0.3s",
                animationName: "fadeInUp"
              }}
            >
              {/* service block */}
              <Cards
              imgSrc={pic6} // Pass the image source
              title="IoT Prototyping" // Pass the title
              description=" Building functional prototypes of IoT devices to test and validate their performance." // Pass the description
            />
                
              </div>
              {/* end service block */}
            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp service-block"
              data-wow-duration="1s"
              data-wow-delay=".5s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationDelay: "0.5s",
                animationName: "fadeInUp"
              }}
            >
              {/* service block */}
              <Cards
              imgSrc={pic6} // Pass the image source
              title="IoT Design for Manufacturing" // Pass the title
              description=" Optimizing IoT device designs for efficient and cost-effective manufacturing." // Pass the description
            />
                
              {/* end service block */}
            </div>
            <div
              className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp service-block"
              data-wow-duration="1s"
              data-wow-delay=".5s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationDelay: "0.5s",
                animationName: "fadeInUp"
              }}
            >
              {/* service block */}
              <Cards
              imgSrc={pic6} // Pass the image source
              title="Full-scale IoT Manufacturing" // Pass the title
              description="Mass-producing IoT devices for widespread distribution and commercialization." // Pass the description
            />
               
              {/* end service block */}
            </div>
          </div>
          {/* end row */}
        </div>
      </div>
      {/* Feedback section */}
      <div
        className={`${
          theme === "light" ? "bg-gray-100 dark:bg-[#00040f]" : "bg-[#00040f] dark:bg-[#08060eb2]"
        } relative py-20 mt-20`}
      >
        <div className="container xl:max-w-6xl mx-auto px-4">
          {/* Heading */}
          <header className="text-center mx-auto mb-12 lg:px-20">
            <h2 className="text-2xl leading-normal mb-2 font-bold font-poppins text-black dark:text-white">
              Client Feedback
            </h2>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 100 60"
              style={{ margin: "0 auto", height: 35 }}
              xmlSpace="preserve"
            >
              <circle
                cx="50.1"
                cy="30.4"
                r={5}
                className="stroke-primary"
                style={{ fill: "transparent", strokeWidth: 2, strokeMiterlimit: 10 }}
              />
              <line
                x1="55.1"
                y1="30.4"
                x2={100}
                y2="30.4"
                className="stroke-primary"
                style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
              />
              <line
                x1="45.1"
                y1="30.4"
                x2={0}
                y2="30.4"
                className="stroke-primary"
                style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
              />
            </svg>
            <p className="text-gray-500 font-poppins leading-relaxed font-light text-xl mx-auto pb-2 dark:text-white">
              Here's what our clients have to say about our services.
            </p>
          </header>
          {/* End heading */}
          {/* Feedback cards */}
          <div
            className={`grid gap-8 ${
              feedback.length > 2 ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
            } `}
          >
             {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
          </div>
          {/* End Feedback cards */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
