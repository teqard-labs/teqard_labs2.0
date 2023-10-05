import React from "react";
import styles from "./style";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from "./components";
import ImageCarousel from "./components/ImageCarousel";
import WhatWeDo from "./components/Wwd";
import HCards from "./components/Cards/HCards";


const App = () => (
  <div className="bg-dark-bg overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`dark:bg-dark-bg bg-light-bg  ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <ImageCarousel/>
        <Hero/>
      </div>
    </div>

    <div className={`dark:bg-dark-bg bg-light-bg ${styles.paddingX}  ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
       
        {/* <Stats /> */}
        <WhatWeDo/>
        {/* <Business /> */}
        {/* <Billing /> */}
        {/* <CardDeal /> */}
        <HCards/>
        {/* <Testimonials /> */}
        
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
