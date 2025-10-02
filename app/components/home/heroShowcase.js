import React from "react";
import EventCarousal from "./eventCarousal";
const HeroShowcase = ({ className }) => {
  return (
    <div className={`w-full ${className || ''}`}>
      {/* for small screens */}
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center w-full max-w-2xl mx-auto mb-4 mt-8">
          {/* The Left Line */}
          <div className="flex-grow h-px bg-gradient-to-r from-transparent to-[#6e6d72]"></div>

          {/* The Text */}
          <h2 className="px-4 text-sm font-semibold tracking-widest text-[#e5e4e9] uppercase">
            Featured Events
          </h2>

          {/* The Right Line with a fade */}
          <div className="flex-grow h-px bg-gradient-to-l from-transparent to-[#6e6d72]"></div>
        </div>
        <EventCarousal />
      </div>
    </div>
  );
};

export default HeroShowcase;
