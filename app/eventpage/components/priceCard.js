import React from 'react';

const PriceCard = ({ price }) => {
  return (
    <div className="bg-[#1C1C1E] text-white shadow-[0_-5px_15px_-5px_rgba(0,0,0,0.2)]">
    <div className="max-w-4xl mx-auto px-4 pt-4 pb-10 sm:pb-4 flex justify-between items-center">
      {/* Left Side: Price information */}
      <div className="flex items-center gap-x-1">
        <span className="text-2xl font-bold tracking-tight">₹ {price}</span>
        <span className="text-base text-gray-300 font-medium ml-1">onwards</span>
      </div>

      {/* Right Side: Book tickets button */}
      <button className="bg-white text-black font-bold py-3 px-8 rounded-2xl text-md hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg">
        Book tickets
      </button>
    </div>

    {/* This div is for the home indicator bar on some mobile devices, as seen in the screenshot */}
    <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-gray-600 rounded-full sm:hidden"></div>
  </div>
  );
};

export default PriceCard;