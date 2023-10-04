import React from 'react'
import Team from '../assets/team.png'
import Solution from '../assets/solution.png'
import Innovation from '../assets/innovation.png'
import Quality from '../assets/quality.png'
import Client from '../assets/client.png'

function WhatWeDo() {
  
    const data = [
        { id: 1, name: "Expert Team", icon: Team, description: "Our dedicated team of engineers and researchers is at the forefront of technology, ensuring you receive the best solutions and insights." },
        { id: 2, name: "Custom Solutions", icon: Solution, description: "We understand that one size doesn't fit all. Our solutions are tailor-made to meet your unique requirements and challenges." },
        { id: 3, name: "Innovation", icon: Innovation, description: "We stay ahead of the curve, continually exploring new technologies and approaches to deliver innovative solutions that keep you competitive." },
        { id: 4, name: "Quality Assurance", icon: Quality, description: " Quality and reliability are paramount. We rigorously test and refine our products to ensure they exceed your expectations." },
        { id: 5, name: "Client-Centric Approach", icon: Client, description: " Your success is our success. We work closely with you, fostering strong partnerships to achieve your goals." },
    ]
    
      return (
        <div className="relative mx-auto py-8 px-4 w-full max-w-7xl bg-white overflow-hidden">
          <div className="mx-auto max-w-sm sm:max-w-2xl lg:max-w-7xl flex flex-col lg:flex-row items-center">
    
            {/* :TITLE CONTAINER */}
            <div className="mx-auto w-full lg:max-w-md">
              <p className="mt-2 text-2xl sm:text-4xl text-gray-700 font-extrabold capitalize tracking-wide">Why Choose Teqard Labs?</p>
              <div className="mt-5 text-sm text-gray-500">
                {/* Content goes here */}
                
              </div>
              <button className="mt-6 py-1.5 px-4 inline-block shadow-sm rounded border border-gray-700 bg-white text-sm text-gray-700 font-medium uppercase tracking-wider">Explore</button>
            </div>
    
    
            {/* :FEATURES CONTAINER */}
            <div className="relative mt-8 lg:mt-0 lg:ml-16 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {data.map((item, index) => {
                return (
                <div key={item.id} className={`col-span-1 p-5 flex flex-col items-center space-y-2 shadow rounded-md ${index === 0 || index === 3 || index === 4 ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-700"}`}>
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
              )})
              }
            </div>
    
    
          </div>
        </div>
      )
}

export default WhatWeDo