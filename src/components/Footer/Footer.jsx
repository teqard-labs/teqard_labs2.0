import styles from "../../style";
import { logo } from "../../assets";
import { footerLinks, socialMedia } from "../../constants";
import { useTheme } from "../ThemeContext"

const Footer = () => {
  const { theme } = useTheme();
  const textColor = theme === 'light' ? 'text-black' : 'text-white';
  const iconColor = theme === 'light' ? 'invert-1' : '';
  const iconBright = theme === 'light' ? 'brightness-0' : '';
  return(
  <section className={`${styles.flexCenter} py-5 flex-col`}>
    <div classname="w-1/4 py-5 ">
        {/* component */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style dangerouslySetInnerHTML={{__html: "\n  .icon::after{\n  content: '';\n  display: block;\n  position: absolute;\n  border-top: 23px solid transparent;\n  border-bottom: 17px solid transparent;\n  border-left: 12px solid #3182ce;\n  left: 100%;\n  top: 0;\n}\n  " }} />
        <form action className="form bg-white dark:bg-[#00040f] p-5 mt-5 mb-20 relative ">
          <h3 className="text-4xl text-secondary dark:text-white  font-semibold pb-10 font-poppins">Let us call you!</h3>
          
          <div className="flex space-x-5 mt-3">
            <input type="text" name id placeholder="Your Name" className="border p-2  w-1/2 dark:bg-[#00040f] font-poppins" />
            <input type="tel" name id placeholder="Your Number" className="border p-2 w-1/2 dark:bg-[#00040f] font-poppins" />
          </div>
          <input type="email" name id placeholder="Your Email" className="border p-2 w-full mt-3 dark:bg-[#00040f] font-poppins" />
          <textarea name id cols={10} rows={3} placeholder="Tell us about desired property" className="border p-2 mt-3 w-full dark:bg-[#00040f] font-poppins" defaultValue={""} />
          <p className="font-bold text-sm mt-3 dark:text-white font-poppins">GDPR Agreement *</p>
          <div className="flex items-baseline space-x-2 mt-2">
            <input type="checkbox" name id className="inline-block" />
            <p className="text-secondary dark:text-white text-sm font-poppins">I consent to having this website store my submitted information so they can respond to my inquiry.</p>
          </div>
          <input type="submit" defaultValue="Submit" className="w-full mt-6 bg-secondary  hover:bg-white hover:text-[#00040f] text-white font-semibold p-3" />
        </form>
      </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45] dark:border-t-white">
      <p className={`font-poppins font-normal text-center text-[18px] leading-[27px]${textColor} dark:text-white`}>
        Copyright Ⓒ 2022 TeqardLabs. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
    {socialMedia.map((social, index) => (
     <img
      key={social.id}
      src={social.icon}
      alt={social.id}
      className={`w-[21px] h-[21px] object-contain cursor-pointer ${
        index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
      } filter ${iconBright} ${iconColor}`}
      onClick={() => window.open(social.link)}
     />
     ))}
    </div>

    </div>
  </section>
)};

export default Footer;
