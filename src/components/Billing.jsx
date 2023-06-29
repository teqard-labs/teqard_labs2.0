import tech2Image from "../assets/tech2.jpg";
import styles, { layout } from "../style";
import { useTheme } from "./ThemeContext";

const Billing = () => {
  const { theme } = useTheme();
  const textColor = theme === "light" ? "text-black" : "text-white";

  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={tech2Image} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`${layout.sectionInfo} ${textColor}`}>
        <h2 className={styles.heading2}>
          We build <br className="sm:block hidden" /> greater futures
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          We provide IT services and business solutions organization that has been partnering with many business organizations in their transformation journeys.
        </p>
      </div>
    </section>
  );
};

export default Billing;
