import React from 'react';
import { MapPinIcon, ChevronRightIcon } from 'lucide-react';
import Button from '../../components/ui/button';

const EventLocation = ({ eventVenue, eventAddress, eventDistance }) => {
  const handleGetDirections = (e) => {
    // Prevents the event from bubbling up to parent elements
    e.stopPropagation();
    // A simple implementation to open Google Maps with the venue location
    const query = encodeURIComponent(`${eventVenue}, ${eventAddress}`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
    console.log('Get directions clicked');
  };

  return (
    <>
      {/* Mobile version (based on the first image) */}
      <div className='md:hidden'>
        <div 
          onClick={handleGetDirections}
          className="flex items-center gap-2 backdrop-blur-sm rounded-xl shadow-lg w-full cursor-pointer hover:bg-gray-800 transition-colors"
        >
          <div className="bg-[#2c2c2e] border border-[#38383a] p-2 rounded-lg">
             <MapPinIcon className="w-5 h-5 text-white" />
          </div>
          <div className="flex-grow">
            <h2 className="font-normal text-sm text-white">
              {eventVenue}
            </h2>
            {/* You can pass a prop like `eventDistance` to show text like "6 km away" */}
            {eventDistance && (
              <p className="text-sm text-gray-300">
                {eventDistance}
              </p>
            )}
          </div>
          <ChevronRightIcon className="w-6 h-6 text-gray-400" />
        </div>
      </div>

      {/* Desktop version (based on the second image) */}
      <div className="w-full hidden md:block">
      <h1 className='lg:text-xl text-lg pb-2 text-white/70 font-medium'>Venue</h1>
        <div className="bg-transparent rounded-xl p-6 shadow-sm border border-[#2c2c2e]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
            {/* Left side: Venue Details */}
            <div className="mb-4 sm:mb-0">
              <h2 className="lg:text-lg sm:text-sm font-normal text-white mb-1">
                {eventVenue}
              </h2>
              {eventAddress && (
                <p className="text-sm text-gray-600">
                  {eventAddress}
                </p>
              )}
            </div>
            
            {/* Right side: Get Directions Button */}
            <Button 
              onClick={handleGetDirections}
              icon={MapPinIcon}
              className="bg-white text-gray-800 rounded-lg text-sm font-medium border border-gray-300 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              GET DIRECTIONS
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventLocation;
