"use client";
import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import cardValues from "../../constant/cardValues";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import EventCard from "../ui/eventCardSm";
const EventCarousal = () => {
    const cardVariants = {
        unfocused: { scale: 0.9, opacity: 0.5, zIndex: 0 },
        focused: { scale: 1, opacity: 1, zIndex: 1, boxShadow: "0px 10px 30px -5px rgba(0, 0, 0, 0.3)" },
      };
    
      const [currentIndex, setCurrentIndex] = useState(Math.floor(cardValues.length / 2));
      
      // State to track window width for responsiveness
      const [windowWidth, setWindowWidth] = useState(0);
      
      // Touch/swipe states
      const [touchStart, setTouchStart] = useState(null);
      const [touchEnd, setTouchEnd] = useState(null);
    
      useEffect(() => {
        // Set initial window width on client-side mount
        setWindowWidth(window.innerWidth);
    
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
    
      const handlePrev = () => setCurrentIndex((p) => (p === 0 ? cardValues.length - 1 : p - 1));
      const handleNext = () => setCurrentIndex((p) => (p === cardValues.length - 1 ? 0 : p + 1));

      // Touch/swipe handlers
      const minSwipeDistance = 50;

      const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
      };

      const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
      };

      const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
          handleNext();
        } else if (isRightSwipe) {
          handlePrev();
        }
      };
    
      // Dynamic card width based on screen size (Tailwind's 'sm' breakpoint is 640px)
      const isMobile = windowWidth < 640;
      const cardWidth = (isMobile ? 288 : 384) + 8; // w-72 for mobile, w-96 for desktop + margin
      const offset = `calc(50% - ${currentIndex * cardWidth + cardWidth / 2}px)`;
    
      // Avoid rendering on server or before window width is known
      if (windowWidth === 0) return null;
    
      return (
        <div className="relative w-full flex flex-col items-center justify-center overflow-hidden">
          {/* Responsive viewport: full width on mobile, fixed on desktop */}
          <div 
            className="w-full md:w-[480px] h-[500px] relative overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <motion.div
              className="flex items-center h-full"
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              animate={{ x: offset }}
            >
              {cardValues.map((cardItem, index) => (
                <motion.div
                  key={cardItem.id || index}
                  // Responsive card width
                  className="flex-shrink-0 mx-1 w-72 sm:w-96"
                  variants={cardVariants}
                  animate={index === currentIndex ? 'focused' : 'unfocused'}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  onClick={() => setCurrentIndex(index)}
                >
                  <EventCard 
                    slug={cardItem.slug}
                    imageUrl={cardItem.imageUrl}
                    imageAlt={cardItem.imageAlt}
                    month={cardItem.month}
                    day={cardItem.day}
                    tags={cardItem.tags}
                    title={cardItem.title}
                    date={cardItem.date}
                    venue={cardItem.venue}
                    price={cardItem.price}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
    
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-3 bg-white/10 rounded-full shadow-lg hover:bg-white/20 transition-colors duration-300 backdrop-blur-sm focus:outline-none"
            >
              <ChevronLeftIcon className="h-6 w-6 text-white" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 bg-white/10 rounded-full shadow-lg hover:bg-white/20 transition-colors duration-300 backdrop-blur-sm focus:outline-none"
            >
              <ChevronRightIcon className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
  );
};

export default EventCarousal;
