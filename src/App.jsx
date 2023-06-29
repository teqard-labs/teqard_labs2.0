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


const App = () => (
  <div className="bg-dark-bg w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
        
      </div>
    </div>

    <div className={`dark:bg-dark-bg bg-light-bg  ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero></Hero>
      </div>
    </div>

    <div className={`dark:bg-dark-bg bg-light-bg ${styles.paddingX}  ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
