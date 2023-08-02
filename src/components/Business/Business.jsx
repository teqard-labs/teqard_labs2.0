import { features } from "../../constants";
import styles, { layout } from "../../style";
import { useTheme } from "../ThemeContext"

const FeatureCard = ({ icon, title, content, index }) => {
  const { theme } = useTheme();
  const textColor = theme === 'light' ? 'text-black' : 'text-white';

  return(
  <div
    className={`flex flex-row p-6 rounded-[20px] ${textColor} ${
      index !== features.length - 1 ? "mb-6" : "mb-0 "
    } feature-card`}
    style={{ animation: `fadeInRight 0.3s ease ${index * 0.4}s both` }}
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
)};

const Business = () => {
  const { theme } = useTheme();
  const textColor = theme === 'light' ? 'text-black' : 'text-white';
  return(
  <section id="features" className={layout.section}>
    <div className={`${layout.sectionInfo} ${textColor} animate-fadeIn`}>
      <h2 className={styles.heading2}>
      At Teqard Labs, <br className="sm:block hidden" />we are committed to building
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
 futuristic IoT solutions that prioritize community value creation. Our mission is to leverage the power of automation, robotics, custom electronics, and touchless solutions to revolutionize industries and improve the lives of individuals.
      </p>
    </div>
    <div className={`${layout.sectionImg} flex-col fade-in-enter-from-right`}>
      {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} style={{ animationDelay: `${index * 2}s` }} />      ))}
    </div>
  </section>
)};

export default Business;
