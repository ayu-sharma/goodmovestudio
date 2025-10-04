import React from 'react';
import { Tag, Calendar, MapPin } from 'lucide-react';
import Button from '../../components/ui/button';

// Simple event card component for medium screens
const PriceCardMd = ({ price, tag, date, venue, title }) => {
  return (
    <div className="bg-white border border-gray-300 rounded-2xl py-4 px-5 shadow-lg">
       <div className="flex items-center gap-4 mb-2">
          <div className="flex gap-x-2">
            {tag.map((tagItem, index) => (
              <span key={index} className="text-gray-700 lg:text-sm text-xs bg-black/10 px-2 py-1 rounded-xl font-medium">
                {tagItem}
              </span>
            ))}
          </div>
        </div>
      {/* Event Title */}
      <h1 className="text-lg md:text-2xl font-bold text-gray-900 mb-4">
        {title}
      </h1>

      {/* Event Information */}
      <div className="space-y-4 mb-6">
        {/* Event Date */}
        <div className="flex items-center gap-4">
          <Calendar className="h-4 w-4 text-gray-600" />
          <span className="text-gray-700 text-sm md:text-base">{date}</span>
        </div>
        
        {/* Event Location */}
        <div className="flex items-center gap-4">
          <MapPin className="h-4 w-4 text-gray-600" />
          <span className="text-gray-700 text-sm md:text-base">{venue}</span>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t lg:block hidden border-gray-200 my-6"></div>

      {/* Price and Book Button */}
      <div className="lg:flex items-center hidden justify-between">
        <div className="text-base md:text-xl text-gray-900">
          <span className="text-gray-900 text-base md:text-xl font-bold">{price}</span>
        </div>
        <Button 
          variant="primary" 
          className="bg-[#00EA9C] text-white !font-medium rounded-lg hover:scale-105 hover:transform-all duration-300 shadow-md px-6 py-2"
        >
          Book Tickets
        </Button>
      </div>
    </div>
  );
};

export default PriceCardMd;