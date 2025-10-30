import React from 'react';
import Button from '../../components/ui/button';

const PriceCard = ({ regularPrice, earlyBirdPrice, className }) => {
  return (
    <div className={`bg-[#1C1C1E] text-white shadow-[0_-5px_15px_-5px_rgba(0,0,0,0.2)] ${className}`}>
    <div className="max-w-4xl mx-auto px-4 pt-4 pb-10 sm:pb-4 flex justify-between items-center">
      {/* Left Side: Price information */}
        <div className="flex items-center gap-x-3">
          {earlyBirdPrice && earlyBirdPrice.enabled === true ? (
          <>
            <span className="text-2xl font-bold tracking-tight text-gray-500 line-through">₹ {regularPrice?.price}</span>
            <div className="relative">
              <span className="text-2xl font-bold tracking-tight text-[#00EA9C]">₹ {earlyBirdPrice.price}</span>
            </div>
          </>
        ) : (
          <span className="text-2xl font-bold tracking-tight">₹ {regularPrice?.price}</span>
        )}
        <span className="text-base text-gray-300 font-medium ml-1"></span>
      </div>

      {/* Right Side: Book tickets button */}
      <Button 
        className="bg-[#00EA9C] text-[#003000] font-medium py-3 px-8 rounded-2xl text-md transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        Book Tickets
      </Button>
    </div>

    {/* This div is for the home indicator bar on some mobile devices, as seen in the screenshot */}
    <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-gray-600 rounded-full sm:hidden"></div>
  </div>
  );
};

export default PriceCard;