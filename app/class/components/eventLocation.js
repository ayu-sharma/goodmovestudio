import React from "react";
import { MapPinIcon, ChevronRightIcon } from "lucide-react";
import Button from "../../components/ui/button";

const EventLocation = ({ eventVenue, eventAddress, eventSubAddress }) => {
  const handleGetDirections = () => {
    // Prevents the event from bubbling up to parent elements
    // A simple implementation to open Google Maps with the venue location
    const query = encodeURIComponent(`${eventVenue}, ${eventAddress}`);
    window.open(`${url}`, "_blank");
    console.log("Get directions clicked");
  };
  return (
    <>
     <div className="flex justify-between items-start gap-x-5 w-full">
        <div className="w-full flex items-start gap-5 max-w-md">
          <MapPinIcon className="w-6 h-6 text-[#00ea9c] flex-shrink-0 mt-0.5" />
          <div className="flex flex-col gap-y-1">
            <div className="flex items-start justify-between">
            {eventVenue && (
              <p className="text-lg font-normal text-white tracking-[-0.006em]">
                {eventVenue}
              </p>
            )}
             <Button
          onClick={handleGetDirections}
          className="text-[#00ea9c] md:text-base  cursor-pointer font-medium transition-colors !px-0 !py-0 sm:hidden"
        >
          DIRECTIONS
        </Button>
            </div>
            {eventSubAddress && (
              <p className="text-base font-normal text-gray-300 tracking-[-0.006em]">
                {eventSubAddress}
              </p>
            )}
          </div>
        </div>
        <Button
          onClick={handleGetDirections}
          className="text-[#00ea9c] md:text-base  cursor-pointer font-medium transition-colors !px-0 !py-0 sm:block hidden"
        >
          DIRECTIONS
        </Button>
      </div>{" "}
    </>
  );
};

export default EventLocation;
