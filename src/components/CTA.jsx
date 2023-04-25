import styles from "../style";
import Button from "./Button/Button";
import { useTheme } from "./ThemeContext"

const CTA = () => {
  const { theme } = useTheme();
  const textColor = theme === 'light' ? 'text-black' : 'text-white';
  return(
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col dark:bg-dark-bg bg-white rounded-[20px] box-shadow`}
  >
    <div className={`flex-1 flex flex-col ${textColor}`}>
      <h2 className={styles.heading2}>Let’s try our services </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      We bring you powerful advantages to navigate your digital transformation
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
)};

export default CTA;
