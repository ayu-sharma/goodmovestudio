import React from 'react'
import events from '../../constant/cardValues'
import EventCard from '../ui/eventCardSm'

const AllEventSection = ({ className, selectedFilter }) => {
  const getSectionTitle = () => {
    if (selectedFilter) {
      return selectedFilter.title;
    }
    return "All Events";
  };

  // Filter events based on selected category
  const getFilteredEvents = () => {
    if (!selectedFilter) {
      return events;
    }
    
    // Map category titles to event types
    const categoryMapping = {
      "WORKSHOPS": "WORKSHOP",
      "REGULARS": "REGULAR", 
      "KIDS": "KIDS"
    };
    
    const eventType = categoryMapping[selectedFilter.title];
    return events.filter(event => event.eventType === eventType);
  };

  return (
    <div className={`w-full py-8 ${className || ''}`}>
      {/* Header Section */}
      <div className="flex items-center w-full max-w-7xl mx-auto mb-12 px-4">
        {/* The Left Line */}
        <div className="flex-grow h-px bg-gradient-to-r from-transparent to-[#6e6d72] md:hidden block"></div>
        
        {/* The Text */}
        <h2 className="px-6 text-lg md:text-xl font-semibold tracking-widest text-[#e5e4e9] uppercase">
          {getSectionTitle()}
        </h2>
        
        {/* The Right Line with a fade */}
        <div className="flex-grow h-px bg-gradient-to-l from-transparent to-[#6e6d72] md:hidden block"></div>
      </div>

      {/* Events Grid */}
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {getFilteredEvents().map((event, index) => (
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
              className='hover:scale-105 transition-all duration-300 ease-in-out'
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AllEventSection