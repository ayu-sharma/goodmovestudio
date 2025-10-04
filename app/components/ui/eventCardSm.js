'use client';

import React from 'react';
import Image from 'next/image';
import {Calendar, MapPin } from 'lucide-react';
import { useRouter } from 'next/navigation';
// Configuration constants
const TRANSITION_DURATION = 300;
const TRANSITION_EASING = 'ease-in-out';

/**
 * EventCard Component
 * A responsive event card with background image, date badge, and event details
 * Features smooth transitions for responsive text sizing
 */
const EventCard = ({ 
  slug,
  imageUrl,
  imageAlt = '',
  month,
  day,
  tags = [],
  title,
  date,
  venue,
  price,
  className = '',
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (slug) {
      router.push(`/workshop/${slug}`);
    }
  };
  return (
    <div 
    onClick={handleClick}
    className={`relative rounded-2xl overflow-hidden shadow-lg w-full max-w-sm text-white mx-auto cursor-pointer transition-all duration-${TRANSITION_DURATION} ${TRANSITION_EASING} ${className}`}>
      {/* Background Image Section */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt={imageAlt}
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
            <div className="bg-white text-black text-center rounded-md px-3 py-1 shadow-md transition-all duration-300 ease-in-out">
              <p className="font-bold text-sm transition-all duration-300 ease-in-out">{month}</p>
              <p className="font-bold text-xl leading-none transition-all duration-300 ease-in-out">{day}</p>
            </div>
          </div>
        </header>

        {/* Spacer for layout */}
        <div className="flex-grow"></div>

        {/* Main Content Section */}
        <main className="space-y-3 p-3 pb-0 sm:p-4 sm:pb-0 transition-all duration-300 ease-in-out">
          {/* Event Tags */}
          <div className="flex items-center space-x-2 text-xs">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="bg-white/10 px-2 py-1 rounded font-medium transition-all duration-300 ease-in-out"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* Event Title and Date */}
          <div className="space-y-2">
            <h2 className="text-xl font-medium leading-tight transition-all duration-300 ease-in-out pb-2">
              {title}
            </h2>
            
          </div>
        </main>

        {/* Footer Section - Location and Price */}
        <footer className="px-3 pb-3 pt-2 sm:pt-2 sm:px-4 sm:pb-4 space-y-2 transition-all duration-300 ease-in-out">
              <p className="text-gray-400 text-sm font-normal transition-all duration-300 ease-in-out flex items-center gap-x-1">
                <Calendar className='w-4 h-4' />
                {date}
              </p>
          <p className="text-gray-400 text-sm font-normal transition-all duration-300 ease-in-out flex items-center gap-x-1">
            <MapPin className='w-4 h-4' />
            {venue}
          </p>
        </footer>
      </div>
    </div>
  );
};

export default EventCard;

