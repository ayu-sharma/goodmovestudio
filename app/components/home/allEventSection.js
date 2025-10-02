import React from 'react'
import events from '../../constant/cardValues'
import EventCard from '../ui/eventCardSm'

const AllEventSection = (className) => {
  return (
    <div className={`w-full py-8 ${className || ''}`}>
      {/* Header Section */}
      <div className="flex items-center w-full max-w-6xl mx-auto mb-12 px-4">
        {/* The Left Line */}
        <div className="flex-grow h-px bg-gradient-to-r from-transparent to-[#6e6d72]"></div>
        
        {/* The Text */}
        <h2 className="px-6 text-lg md:text-xl font-semibold tracking-widest text-[#e5e4e9] uppercase">
          All Events
        </h2>
        
        {/* The Right Line with a fade */}
        <div className="flex-grow h-px bg-gradient-to-l from-transparent to-[#6e6d72]"></div>
      </div>

      {/* Events Grid */}
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <EventCard
              key={index}
              imageUrl={event.imageUrl}
              imageAlt={event.imageAlt}
              month={event.month}
              day={event.day}
              tags={event.tags}
              title={event.title}
              date={event.date}
              location={event.location}
              price={event.price}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AllEventSection