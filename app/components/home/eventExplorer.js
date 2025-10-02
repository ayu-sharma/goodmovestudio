"use client";
import React from 'react'

// Event categories data
const eventCategories = [
  {
    id: 1,
    title: "WORKSHOPS",
    icon: "🎸",
  },
  {
    id: 2,
    title: "REGULARS",
    icon: "🕺",
  },
  {
    id: 3,
    title: "DANCE",
    icon: "🏟️",
  },
  {
    id: 4,
    title: "KIDS",
    icon: "🍻",
  },
  {
    id: 5,
    title: "FITNESS",
    icon: "🎤",
  },
  {
    id: 6,
    title: "ART AND CRAFT",
    icon: "🎭",
  },
  {
    id: 7,
    title: "OTHERS",
    icon: "🪘",
  },

];

const EventExplorer = ({ className }) => {
  return (
    <div className={`w-full py-8 ${className || ''}`}>
      {/* Header Section */}
      <div className="flex items-center w-full max-w-6xl mx-auto mb-12 px-4">
        {/* The Left Line */}
        <div className="flex-grow h-px bg-gradient-to-r from-transparent to-[#6e6d72] block md:hidden"></div>
        
        {/* The Text */}
        <h2 className="px-6 text-lg md:text-xl font-semibold tracking-widest text-[#e5e4e9] uppercase">
          Explore Events
        </h2>
        
        {/* The Right Line with a fade */}
        <div className="flex-grow h-px bg-gradient-to-l from-transparent to-[#6e6d72] block md:hidden"></div>
      </div>
      
      {/* Event Categories Scrollable Grid */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="grid grid-rows-1 grid-flow-col gap-4 md:gap-6 px-3 py-4 auto-cols-[minmax(200px,1fr)]">
            {eventCategories.map((category) => (
              <div
                key={category.id}
                className={`relative group cursor-pointer transition-all duration-300 hover:scale-105`}
              >
                <div className={`rounded-2xl p-6 md:p-8  flex flex-col gap-y-5 items-center border border-gray-700/50 hover:border-gray-600/70 transition-all duration-300`}>
                  {/* Title */}
                  <h3 className="text-white font-bold text-sm md:text-base tracking-wide">
                    {category.title}
                  </h3>
                  {/* Icon */}
                  <div className="text-5xl md:text-6xl mb-2">
                    {category.icon}
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventExplorer