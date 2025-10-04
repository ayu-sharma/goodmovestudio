"use client";
import React from 'react'
import Image from 'next/image'

// Event categories data
const eventCategories = [
  {
    id: 1,
    title: "WORKSHOPS",
    icon: "/images/workshop.png",
  },
  {
    id: 2,
    title: "REGULARS",
    icon: "/images/regular.png",
  },

];

const EventExplorer = ({ className = "", onFilterSelect, selectedFilter }) => {
  const handleFilterClick = (category) => {
    if (onFilterSelect) {
      onFilterSelect(category);
    }
  };

  return (
    <div className={`w-full py-8 ${className}`}>
      {/* Event Categories Filter Row */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 overflow-x-auto py-3">
          {eventCategories.map((category) => (
            <div
              key={category.id}
              onClick={() => handleFilterClick(category)}
              className={`relative group cursor-pointer transition-all duration-300 md:hover:scale-105 flex-shrink-0`}
            >
              <div className={`rounded-2xl p-2 sm:p-3 md:p-4 lg:p-6 flex flex-col gap-y-1 sm:gap-y-2 md:gap-y-3 items-center border transition-all duration-300 w-[100px] sm:w-[120px] md:w-[140px] lg:w-[160px] ${
                selectedFilter?.id === category.id 
                  ? 'border-[#00EA9C] bg-[#00EA9C]/10' 
                  : 'border-gray-700/50 hover:border-gray-600/70'
              }`}>
                {/* Title */}
                <h3 className="text-white font-bold text-xs sm:text-sm md:text-base tracking-widest text-center">
                  {category.title}
                </h3>
                {/* Icon */}
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                  <Image src={category.icon} alt={category.title} width={100} height={50} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EventExplorer