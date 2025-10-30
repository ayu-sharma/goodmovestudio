"use client";

import React, { useState, useEffect, useCallback } from 'react';
import {Calendar,MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/button';
import { useData } from '../../context/DataContext';
import { useRouter } from 'next/navigation';
// Configuration constants
const SLIDE_INTERVAL = 7000; // 7 seconds
const ANIMATION_DURATION = 1.5;
const TEXT_ANIMATION_DURATION = 0.7;

// Event data - can be moved to a separate file or API call
const EVENTS_DATA = [
  {
    id: 1,
    date: 'OCTOBER 12, 2025',
    title: 'Bhangra Dance Workshop',
    location: 'Koramangala',
    price: 'From Rs. 599',
    videoUrl: '/video/bhangra.mp4',
  },
];

// Animation variants for consistent animations
const ANIMATION_VARIANTS = {
  text: {
    initial: { x: '50%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '-50%', opacity: 0 },
  },
  video: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
};



const HeroShowcaseMd = ({ className = "" }) => {
  // State management
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const {getAllEvents, formatDate} = useData();
  const featuredEvents = getAllEvents().filter(event => event?.featured === true);
  console.log("featuredEvents:", featuredEvents);
  // Auto-slide function
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredEvents.length);
  }, [featuredEvents]);

  // Auto-slide functionality with hover pause
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        nextSlide();
      }
    }, SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, [isHovered, nextSlide]);

  // Get current event data
  const currentEvent = featuredEvents[currentIndex] || EVENTS_DATA[0];

  // Mouse event handlers
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  // Handle Book Tickets button click
  const handleBookTickets = () => {
    if (!currentEvent?.id) {
      return;
    }

    if (currentEvent.type === "Workshop") {
      router.push(`/workshop/${currentEvent.id}`);
    } else if (currentEvent.type === "Class") {
      router.push(`/class/${currentEvent.id}`);
    } else {
      // Fallback for any other type
      router.push(`/class/${currentEvent.id}`);
    }
  };
  return (
    <div 
      className={`relative h-screen w-full overflow-hidden font-sans bg-black text-white ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Video Section */}
      <AnimatePresence initial={false}>
        <motion.video
          key={currentIndex}
          src={currentEvent?.videoUrl || currentEvent?.video || '/video/bhangra.mp4'}
          variants={ANIMATION_VARIANTS.video}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: ANIMATION_DURATION, ease: "easeInOut" }}
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Overlay Layers */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10 transition-all duration-300 ease-in-out" />
      <div className="absolute hidden md:block inset-0 w-full md:w-1/2 bg-gradient-to-r from-black via-transparent to-transparent z-15 transition-all duration-300 ease-in-out"/>
      <div className="absolute block md:hidden inset-0 w-full bg-gradient-to-t from-black via-transparent to-transparent z-15 transition-all duration-300 ease-in-out"/>
      {/* Main Content Container */}
      <div className="relative z-20 h-full w-full grid grid-cols-1 md:grid-cols-2 transition-all duration-300 ease-in-out">
        {/* Text Content Section */}
        <div className="flex items-end justify-center p-4 md:p-8 overflow-hidden transition-all duration-300 ease-in-out">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              variants={ANIMATION_VARIANTS.text}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: TEXT_ANIMATION_DURATION, ease: "easeInOut" }}
              className="w-full max-w-2xl text-left"
            >
              {/* Event Date */}
              <div className='flex items-center gap-x-4 uppercase md:tracking-widest text-gray-300 text-xs md:text-sm font-medium transition-all duration-300 ease-in-out'>
              <p className="flex items-center gap-x-2">
                <Calendar className='w-4 h-4' />
                {currentEvent?.start_time ? formatDate(currentEvent.start_time)?.formattedDate : currentEvent?.date}
              </p>
               {/* Event Location */}
               <p className="flex items-center gap-x-2">
               <MapPin className='w-4 h-4' />
                {currentEvent?.location_name || currentEvent?.location}
              </p>
              </div>
              
              {/* Event Title */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-[-0.019em] sm:tracking-[-0.019em] md:tracking-[-0.021em] lg:tracking-[-0.021em] leading-tight my-2 md:my-3 transition-all duration-300 ease-in-out">
                {currentEvent?.title}
              </h2>
              
              {/* Event Price */}
              <div className="text-white font-medium text-lg tracking-[-0.014em] md:tracking-[-0.017em] md:text-xl mt-1 transition-all duration-300 ease-in-out">
                {currentEvent?.type === "Workshop" && Array.isArray(currentEvent?.tickets) && currentEvent.tickets.length > 0
                  ? (
                      <p>From ₹ {currentEvent.tickets?.[0]?.price}</p>
                    )
                  : currentEvent?.type === "Class" && Array.isArray(currentEvent?.subscriptions) && currentEvent.subscriptions.length > 0
                  ? (
                      <p>Starting at ₹ {currentEvent.subscriptions?.[0]?.price}</p>
                    )
                  : null}
              </div>
              
              {/* Book Tickets Button */}
              <Button 
                variant="primary"
                size="large"
                onClick={handleBookTickets}
                className="bg-[#00EA9C] text-[#003000] font-medium rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg text-sm tracking-[-0.006em] md:tracking-[-0.011em] md:text-base mt-4 md:mt-6"
              >
                Book Tickets
              </Button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default HeroShowcaseMd;

