import React, { useState, useEffect } from 'react'
import Team from '../assets/team.png'
import Solution from '../assets/solution.png'
import Innovation from '../assets/innovation.png'
import Quality from '../assets/quality.png'
import Client from '../assets/client.png'
import styles, { layout } from "../style";

function WhatWeDo() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElement = document.getElementById("features");
      if (sectionElement) {
        const sectionRect = sectionElement.getBoundingClientRect();
        setIsVisible(sectionRect.top <= window.innerHeight && sectionRect.bottom >= 0);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);
    // Initial check when the component mounts
    handleScroll();

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Change the key value whenever isVisible changes to force re-render
  const fadeInSectionKey = isVisible ? "visible" : "hidden";

  const data = [
    { id: 1, name: "Expert Team", icon: Team, description: "Our dedicated team of engineers and researchers is at the forefront of technology, ensuring you receive the best solutions and insights." },
    { id: 2, name: "Custom Solutions", icon: Solution, description: "We understand that one size doesn't fit all. Our solutions are tailor-made to meet your unique requirements and challenges." },
    { id: 3, name: "Innovation", icon: Innovation, description: "We stay ahead of the curve, continually exploring new technologies and approaches to deliver innovative solutions that keep you competitive." },
    { id: 4, name: "Quality Assurance", icon: Quality, description: " Quality and reliability are paramount. We rigorously test and refine our products to ensure they exceed your expectations." },
    { id: 5, name: "Client-Centric Approach", icon: Client, description: " Your success is our success. We work closely with you, fostering strong partnerships to achieve your goals." },
  ]

  return (
    <div id="services" className="relative mx-auto py-8 px-4 w-full max-w-7xl bg-white overflow-hidden">
      <div className=" max-w-sm sm:max-w-none lg:max-w-full flex flex-col lg:flex-row items-center">

        {/* :TITLE CONTAINER */}
        <div key={fadeInSectionKey} className={`${layout.sectionInfo} animate-fadeIn ss:min-w-[40%]`} style={{ opacity: isVisible ? 1 : 0 }}>
          {/* Set the width to '60%' to take up more space */}
          <h2 className={styles.heading2}>
            Empowering Communities <br className="sm:block hidden" />
            through Futuristic IoT Solutions
          </h2>
          <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
            {/* Content Here */}
          </p>
        </div>


        {/* :FEATURES CONTAINER */}
        <div className="relative mt-8 lg:mt-0 lg:ml-16 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {data.map((item, index) => {

            const isMobileView = window.innerWidth <= 640; // Define your mobile breakpoint
            const isSwitched = isMobileView && (item.id === 4 || item.id === 3);
            return (
              <div key={item.id} className={`col-span-1 p-5 flex flex-col items-center space-y-2 shadow rounded-md ${isSwitched ? "bg-gray-800 text-white" : ""}  ${index === 0 || index === 3 || index === 4 ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-700"}`}>
                {/* ::Icon */}
                <span>
                  {/* Icon goes here */}
                  <img src={item.icon} className='h-[50px] w-[50px]' alt="icon" />
                </span>
                {/* ::Name */}
                <span className="text-lg font-bold">{item.name}</span>
                {/* ::Description */}
                <p className="text-sm text-gray-500 text-center font-normal">{item.description}</p>
              </div>
            )
          })
          }
        </div>


      </div>
    </div>
  )
}

export default WhatWeDo