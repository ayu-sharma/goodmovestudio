import React, { useState } from "react";
import Button from "../../components/ui/button";
import PriceCardMd from "./priceCardMd";
import { X } from "lucide-react";

const PriceCard = ({ price, className, eventData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookTickets = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className={`bg-[#1C1C1E] text-white shadow-[0_-5px_15px_-5px_rgba(0,0,0,0.2)] ${className}`}
      >
        <div className="max-w-4xl mx-auto px-4 pt-4 pb-10 sm:pb-4 flex justify-between items-center">
          {/* Left Side: Price information */}
          <div className="flex items-center gap-x-1">
            <span className="text-2xl font-bold tracking-tight">{price}</span>
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
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 p-4 md:flex lg:hidden">
          {/* For screens less than md: bottom-to-top animation */}
          <div className="md:hidden fixed inset-x-0 bottom-0 rounded-t-3xl max-h-[90vh] overflow-visible transform transition-transform duration-300 ease-out">
            <div className="relative">
              {/* Close button - positioned above the modal */}
              <Button
                onClick={closeModal}
                className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-20 bg-white/80 rounded-full px-2 py-4 transition-colors"
              >
                <X className="w-6 h-6" />
              </Button>

              {/* PriceCardMd component */}
              <div className="">
                <PriceCardMd
                  price={eventData?.price || price}
                  tag={eventData?.tags || []}
                  date={eventData?.date || ""}
                  venue={eventData?.venue || ""}
                  title={eventData?.title || ""}
                  className="max-w-full rounded-t-3xl rounded-b-none"
                />
              </div>
            </div>
          </div>

          {/* For screens md and above: centered modal */}
          <div className="hidden md:flex items-center justify-center w-full">
            <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                {/* Close button */}
                <Button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 bg-gray-200 hover:bg-gray-300 rounded-full p-2 transition-colors"
                >
                  <X className="w-5 h-5" />
                </Button>

                {/* PriceCardMd component */}
                <PriceCardMd
                  price={eventData?.price || price}
                  tag={eventData?.tags || []}
                  date={eventData?.date || ""}
                  venue={eventData?.venue || ""}
                  title={eventData?.title || ""}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PriceCard;
