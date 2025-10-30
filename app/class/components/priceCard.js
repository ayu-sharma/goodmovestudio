import React, { useState } from "react";
import Button from "../../components/ui/button";
import PriceCardMd from "../../components/ui/priceCardMd";
import { X } from "lucide-react";

const PriceCard = ({ price, className, eventData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookTickets = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  console.log(price);

  return (
    <>
      <div
        className={`bg-[#1C1C1E] text-white shadow-[0_-5px_15px_-5px_rgba(0,0,0,0.2)] ${className}`}
      >
        <div className="max-w-4xl mx-auto px-4 pt-4 pb-10 sm:pb-4 flex justify-between items-center">
          {/* Left Side: Price information */}
          <div className="flex items-end gap-x-1">
            <span className="text-2xl font-bold tracking-tight">₹ {price}</span>
            <span className="text-base text-gray-300 font-medium ml-1">
              onwards
            </span>
          </div>

          {/* Right Side: Book tickets button */}
          <Button
            onClick={handleBookTickets}
            className="bg-[#00EA9C] text-white font-bold py-3 px-8 rounded-2xl text-md transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Book tickets
          </Button>
        </div>

        {/* This div is for the home indicator bar on some mobile devices, as seen in the screenshot */}
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-gray-600 rounded-full sm:hidden"></div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/30 bg-opacity-50 z-50 md:p-4 flex items-end md:items-center md:justify-center">
          <div className="relative w-full md:max-w-md md:w-full md:rounded-2xl rounded-t-3xl max-h-[90vh] overflow-visible md:overflow-y-auto">
            {/* Close button for mobile (above sheet) */}
            <Button
              onClick={closeModal}
              className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-20 bg-white/80 rounded-full px-2 py-4 transition-colors md:hidden"
            >
              <X className="w-6 h-6" />
            </Button>
            {/* Close button for md+ (inside card) */}
            <Button
              onClick={closeModal}
              className="hidden md:block absolute top-4 right-4 z-10 bg-gray-200 hover:bg-gray-300 rounded-full px-2 py-4 transition-colors"
            >
              <X className="w-5 h-5" />
            </Button>
            {/* PriceCardMd component */}
            <PriceCardMd
              price={eventData?.price || price}
              tag={eventData?.categories || []}
              date={eventData?.schedule?.batches?.[0]?.time_slots?.[0] || ""}
              venue={eventData?.location_name || ""}
              title={eventData?.title || ""}
              className="max-w-full md:rounded-2xl rounded-t-3xl"
              classType="class"
              plans={eventData?.subscriptions}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PriceCard;
