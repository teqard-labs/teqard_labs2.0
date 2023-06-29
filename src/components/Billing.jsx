import tech2Image from "../assets/tech2.jpg";
import styles, { layout } from "../style";
import { useTheme } from "./ThemeContext";

const Billing = () => {
  const { theme } = useTheme();
  const textColor = theme === "light" ? "text-black" : "text-white";

  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
      <div class="rounded-lg overflow-hidden relative">
  <img src={tech2Image} alt="billing" class="w-full h-full relative z-5" />
  <div class="absolute inset-0 bg-gradient-to-b from-secondary to-black opacity-70"></div>
</div>
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
