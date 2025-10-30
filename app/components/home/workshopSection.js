import React from "react";
import EventCard from "../ui/eventCardSm";

const WorkshopSection = ({ className, workshops = [], formatDate }) => {
  // Helper function to format individual dates
  
  return (
    <div className={`w-full py-8 ${className || ""}`}>
      {/* Workshops Header */}
      <div className="flex items-center w-full max-w-7xl mx-auto mb-6 px-4">
        {/* The Left Line */}
        <div className="flex-grow h-px bg-gradient-to-r from-transparent to-[#6e6d72] md:hidden block"></div>

        {/* The Text */}
        <h2 className="px-6 text-lg md:text-xl font-semibold tracking-widest text-[#e5e4e9] uppercase">
          Workshops
        </h2>

        {/* The Right Line with a fade */}
        <div className="flex-grow h-px bg-gradient-to-l from-transparent to-[#6e6d72] md:hidden block"></div>
      </div>

      {/* Workshops Grid */}
      <div className="w-full max-w-7xl mx-auto px-4">
        <EventCard
          events={workshops}
          formatDate={formatDate}
          className="hover:scale-105 transition-all duration-300 ease-in-out"
        />
      </div>
    </div>
  );
};

export default WorkshopSection;
