import React from 'react';
import { Tag, Calendar, MapPin } from 'lucide-react';
import Button from '../../components/ui/button';
const PriceCardMd = ({ price }) => {
  return (
    <div>
      <div className="bg-white border border-gray-300 w-full rounded-2xl p-8 shadow-lg">
        {/* Event Title */}
        <h1 className="lg:text-xl md:text-lg  font-bold text-gray-900 mb-6 leading-tight">
          Enrique Iglesias Live in Concert - New Show
        </h1>

        {/* Event Details Section */}
        <div className="space-y-4 mb-6">
          <div className="flex items-center space-x-4">
            <Tag className="h-4 w-4 text-gray-600" />
            <p className="text-gray-700 md:text-sm lg:text-base">Music, Concerts</p>
          </div>
          <div className="flex items-center space-x-4">
            <Calendar className="h-4 w-4 text-gray-600" />
            <p className="text-gray-700 md:text-sm lg:text-base">Wed, 29 Oct, 6:30 PM</p>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="h-4 w-4 text-gray-600" />
            <p className="text-gray-700 md:text-sm lg:text-base">MMRDA Grounds, Mumbai</p>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-gray-200 my-6"></div>

        {/* Bottom Section: Price and Booking */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Starts from</p>
            <p className="md:text-base lg:text-xl font-bold text-gray-900">₹7,000</p>
          </div>
          <Button 
            variant="primary" 
            className="bg-gray-900 text-sm lg:text-lg text-white font-bold rounded-lg hover:bg-gray-800 transition-colors duration-300 shadow-md"
          >
            BOOK TICKETS
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PriceCardMd;