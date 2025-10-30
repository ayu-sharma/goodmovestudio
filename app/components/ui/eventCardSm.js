"use client";

import React from "react";
import Image from "next/image";
import { Calendar, ChartNoAxesColumnDecreasing, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
// Configuration constants
const TRANSITION_DURATION = 300;
const TRANSITION_EASING = "ease-in-out";

const EventCard = ({ className = "", events = [], formatDate }) => {
  const router = useRouter();
  const handleClick = (event) => {
    if (!event?.id) {
      return;
    }

    if (event.type === "Workshop") {
      router.push(`/workshop/${event.id}`);
    } else if (event.type === "RegularClass") {
      router.push(`/class/${event.id}`);
    } else {
      // Fallback for any other type
      router.push(`/class/${event.id}`);
    }
  };
  const renderEventCard = (event, index) => {
    // For workshops, use start_time; for regular classes, we might need to handle differently
    const dateInfo =
      formatDate && event?.start_time ? formatDate(event.start_time) : null;

    return (
      <div
        key={event?.id || index}
        onClick={() => handleClick(event)}
        className={`relative rounded-2xl overflow-hidden shadow-lg w-full max-w-sm text-white mx-auto cursor-pointer transition-all duration-${TRANSITION_DURATION} ${TRANSITION_EASING} ${className}`}
      >
        {/* Background Image Section */}
        <div className="absolute inset-0 z-0">
          <Image
            src={event?.image}
            alt={event?.imageAlt || event?.title || `${event?.type || 'Event'} image`}
            fill
            className="object-cover transition-all duration-300 ease-in-out rounded-2xl"
          />
          {/* Gradient overlay for text readability */}
          <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
        </div>

        {/* Main Card Content */}
        <div className="relative z-10 flex flex-col justify-between min-h-[450px] sm:min-h-[500px] transition-all duration-300 ease-in-out">
          {/* Header Section - Date Badge */}
          <header className="transition-all duration-300 ease-in-out">
            <div className="flex justify-end">
              { event?.type === "Workshop" && (
              <div className="bg-white text-black text-center rounded-md px-3 py-1 shadow-md transition-all duration-300 ease-in-out">
                <p className="font-bold text-sm transition-all duration-300 ease-in-out">
                  {dateInfo?.month || event?.month}
                </p>
                <p className="font-bold text-xl leading-none transition-all duration-300 ease-in-out">
                  {dateInfo?.day || event?.day}
                </p>
              </div>)}
            </div>
          </header>

          {/* Spacer for layout */}
          <div className="flex-grow"></div>

          {/* Main Content Section */}
          <main className="space-y-3 p-3 pb-0 sm:p-4 sm:pb-0 transition-all duration-300 ease-in-out">
            {/* Event Tags */}
            <div className="flex items-center space-x-2 text-xs">
              {event.categories.map((category, categoryIndex) => (
                <span
                  key={categoryIndex}
                  className="bg-white/10 px-2 py-1 rounded font-medium transition-all duration-300 ease-in-out"
                >
                  {category}
                </span>
              ))}
            </div>

            {/* Event Title and Date */}
            <div className="space-y-2">
              <h2 className="text-xl font-medium leading-tight transition-all duration-300 ease-in-out pb-2">
                {event?.title}
              </h2>
            </div>
          </main>

          {/* Footer Section - Location and Price */}
          <footer className="px-3 pb-3 pt-2 sm:pt-2 sm:px-4 sm:pb-4 space-y-2 transition-all duration-300 ease-in-out">
            <p className="text-gray-400 text-sm font-normal transition-all duration-300 ease-in-out flex items-center gap-x-1">
              <Calendar className="w-4 h-4" />
              {dateInfo?.formattedDate || (event?.schedule?.frequency || "Regular Classes")}
            </p>
            <p className="text-gray-400 text-sm font-normal transition-all duration-300 ease-in-out flex items-center gap-x-1">
              <MapPin className="w-4 h-4" />
              {event?.location_name}
            </p>
          </footer>
        </div>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {events && events.length > 0 ? (
        events.map((event, index) => renderEventCard(event, index))
      ) : (
        <div className="col-span-full text-center text-gray-400 py-8">
          No workshops available at the moment.
        </div>
      )}
    </div>
  );
};

export default EventCard;
