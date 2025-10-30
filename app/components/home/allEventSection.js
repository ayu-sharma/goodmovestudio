import React from "react";
import EventCard from "../ui/eventCardSm";

const AllEventSection = ({ className }) => {
  // Separate workshops and regulars
  const workshops = events.filter((event) => event.eventType === "WORKSHOP");
  const regulars = events.filter((event) => event.eventType === "REGULAR");

  return (
    <div className={`w-full py-8 ${className || ""}`}>
      <div className="flex flex-col gap-16">
        {/* Workshops Section */}
        <div className="w-full">
          {/* Workshops Header */}
          <div className="flex items-center w-full max-w-7xl mx-auto mb-8 px-4">
            {/* The Left Line */}
            <div className="flex-grow h-px bg-gradient-to-r from-transparent to-[#6e6d72] md:hidden block"></div>

            {/* The Text */}
            <h2 className="px-6 text-lg md:text-xl font-semibold tracking-widest text-[#e5e4e9] uppercase">
              Workshops
            </h2>

            {/* The Right Line with a fade */}
            <div className="flex-grow h-px bg-gradient-to-l from-transparent to-[#6e6d72] md:hidden block"></div>
          </div>

          {/* Workshops Grid */}
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {workshops.map((event, index) => (
                <EventCard
                  key={index}
                  id={event.id}
                  slug={event.slug}
                  imageUrl={event.imageUrl}
                  imageAlt={event.imageAlt}
                  month={event.month}
                  day={event.day}
                  tags={event.tags}
                  title={event.title}
                  type={event.type}
                  date={event.date}
                  venue={event.venue}
                  price={event.price}
                  className="hover:scale-105 transition-all duration-300 ease-in-out"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Regulars Section */}
        <div className="w-full">
          {/* Regulars Header */}
          <div className="flex items-center w-full max-w-7xl mx-auto mb-8 px-4">
            {/* The Left Line */}
            <div className="flex-grow h-px bg-gradient-to-r from-transparent to-[#6e6d72] md:hidden block"></div>

            {/* The Text */}
            <h2 className="px-6 text-lg md:text-xl font-semibold tracking-widest text-[#e5e4e9] uppercase">
              Regular Classes
            </h2>

            {/* The Right Line with a fade */}
            <div className="flex-grow h-px bg-gradient-to-l from-transparent to-[#6e6d72] md:hidden block"></div>
          </div>

          {/* Regulars Grid */}
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {regulars.map((event, index) => (
                <EventCard
                  key={index}
                  id={event.id}
                  slug={event.slug}
                  imageUrl={event.imageUrl}
                  imageAlt={event.imageAlt}
                  month={event.month}
                  day={event.day}
                  tags={event.tags}
                  title={event.title}
                  type={event.type}
                  date={event.date}
                  venue={event.venue}
                  price={event.price}
                  className="hover:scale-105 transition-all duration-300 ease-in-out"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllEventSection;
