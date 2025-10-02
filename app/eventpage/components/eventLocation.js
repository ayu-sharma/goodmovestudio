import React from 'react';
import { MapPinIcon } from 'lucide-react';

const EventLocation = ({ eventVenue }) => {
  return (
    <>
    <div className='flex items-center gap-x-2 cursor-pointer md:hidden'>
      <div className='bg-white/10 border border-white/20 rounded-2xl p-2 '>
      <MapPinIcon className='text-sm text-white font-medium' />
      </div>
      <p className='text-base text-white font-medium'>{eventVenue}</p>
    </div>
    {/* for large screens than md */}
    <div className="w-full hidden md:block">
            {/* -- Section Title -- */}
            <h1 className="text-2xl font-bold text-white mb-6">Venue</h1>

            {/* -- Venue Card -- */}
            <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between shadow-sm">
              {/* -- Left side: Venue Details -- */}
              <div className="mb-4 sm:mb-0">
                <h2 className="text-lg font-bold text-white">
                  {eventVenue}
                </h2>
                <p className="text-sm text-gray-400 mt-1">
                  Sector 31, Kharghar, Navi Mumbai, Maharashtra 410210
                </p>
              </div>
            </div>
          </div>
    </>
  );
};

export default EventLocation;