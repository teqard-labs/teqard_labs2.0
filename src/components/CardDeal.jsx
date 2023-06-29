import styles, { layout } from "../style";
import Button from "./Button/Button";
import { useTheme } from "./ThemeContext";
import techImage from "../assets/tech.jpg";

const CardDeal = () => {
  const { theme } = useTheme();
  const textColor = theme === 'light' ? 'text-black' : 'text-white';
  return (
    <section className={layout.section}>
      <div className={`${layout.sectionInfo} ${textColor}`}>
        <h2 className={styles.heading2}>
        Driving Digital Transformation for Tangible Growth.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our expertise specializes in delivering innovative solutions that optimize operational efficiency and empower organizations to adapt to the ever-evolving digital landscape, all backed by our deep industry expertise and contextual understanding.
        </p>
        <Button styles={`mt-10`} />
      </div>
      <div className={layout.sectionImg}>
        <img src={techImage} alt="Technology" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;
