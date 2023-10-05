import React from 'react'
import Embed from '../../assets/embed.png'
import Firmware from '../../assets/firmware.png'
import IoT from '../../assets/iot.png'
import Automation from '../../assets/automation1.png'
import RD from '../../assets/rd1.png'
import Workshop from '../../assets/techwrk.png'


function HCards() {

    const Features = [
        {
            id: 1,
            icon: Embed,
            feat: "Embedded Design",
            desc: "Our seasoned team of engineers specializes in creating embedded systems that power a wide range of applications, from consumer electronics to industrial machinery. We excel in designing custom hardware and software solutions tailored to your specific needs.",

        },
        {
            id: 2,
            icon: Firmware,
            feat: "Firmware Development",
            desc: "Teqard Labs takes pride in crafting robust and efficient firmware for various devices, ensuring optimal functionality, reliability, and security. Our expertise spans across multiple platforms and microcontrollers.",
            style: "w-[80px] h-[80px]",
        },
        {
            id: 3,
            icon: IoT,
            feat: "IoT Devices",
            desc: "Embrace the future with our IoT expertise. We design and develop IoT solutions that connect devices, collect data, and provide valuable insights to streamline your operations and improve decision-making.",

        },
        {
            id: 4,
            icon: Automation,
            feat: "Industrial Automation",
            desc: "We bring automation to the heart of industries. Our solutions optimize processes, increase productivity, and enhance safety. Teqard Labs is your partner in realizing the full potential of automation technologies.",

        },
        {
            id: 5,
            icon: RD,
            feat: "R&D Projects",
            desc: "Innovation is in our DNA. We engage in cutting-edge research and development projects, pushing the boundaries of technology to create solutions that transform industries and improve lives.",

        },
        {
            id: 6,
            icon: Workshop,
            feat: "Technical Workshops",
            desc: "Sharing knowledge is key to progress. Teqard Labs conducts enlightening technical workshops, empowering individuals and organizations with the skills and insights needed to thrive in the ever-evolving tech landscape.",

        },

    ]

    return (
        <div id="features">
            <p className="md:mt-10 mt-2 text-2xl sm:text-4xl mb-10 text-center text-gray-700 font-extrabold capitalize tracking-wide">Our Expertise</p>

            <div className="relative mt-4 lg:mt-0 lg:ml-16 grid grid-cols-1 sm:grid-cols-3 gap-5">

                {Features.map((item, index) => (
                    <div key={index}>

                        <div className={`card wallet md:w-[22vw] md:h-[55vh] w-full mt-6 ${index === 0 ? "h-[50vh]" : "h-[40vh]"} `}>
                            <div className={`${index === 0 ? "bottom-[280px] md:top-20" : "top-0 md:top-20" && index === 1 ? "bottom-[220px] md:top-20" : "top-0 md:top-20" }   overlay `}></div>

                            <div className='z-10 '><img src={item.icon} className={`${item.style}`} alt="icon" /></div>
                            <p className='z-10 text-xl font-bold mx-3  mt-5'>{item.feat}</p>
                            <p className='z-10 text-base font-normal mx-3 mt-5'>{item.desc}</p>
                        </div>

                    </div>
                ))
                }
            </div>
        </div>

    )
}

export default HCards