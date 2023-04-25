import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button/Button";
import { useTheme } from "./ThemeContext"

const CardDeal = () => {
  const { theme } = useTheme();
  const textColor = theme === 'light' ? 'text-black' : 'text-white';
  return(
  <section className={layout.section}>
    <div className={`${layout.sectionInfo} ${textColor}`}>
      <h2 className={styles.heading2}>
      we transforms businesses <br className="sm:block hidden" /> through technology.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Our expertise lies in guiding businesses through digital transformation and achieving tangible growth, leveraging 
      our extensive experience and knowledge of the relevant context.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
)};

export default CardDeal;
