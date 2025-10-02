"use client"; // Add this directive for React hooks

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock data for events, now with video URLs
const events = [
  {
    date: 'OCTOBER 12, 2025',
    title: 'Bhangra Dance Workshop',
    location: 'Koramangala',
    price: 'From Rs. 599',
    videoUrl: '/video/bhangra.mp4',
  },
];

// A simple UI Button component to avoid external imports
const Button = ({ children, className, ...props }) => (
  <button className={`px-6 py-3 font-semibold transition-colors ${className}`} {...props}>
    {children}
  </button>
);


const HeroShowcaseMd = ({ className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        nextSlide();
      }
    }, 7000); 

    return () => clearInterval(interval);
  }, [isHovered, events.length]); // Added events.length to dependency array

  const currentEvent = events[currentIndex];

  const textVariants = {
    initial: { x: '50%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '-50%', opacity: 0 },
  };
  
  const videoVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div 
        className={`relative h-screen w-full overflow-hidden font-sans bg-black text-white ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
        {/* Background Video Player */}
        <AnimatePresence initial={false}>
            <motion.video
                key={currentIndex}
                src={currentEvent.videoUrl}
                variants={videoVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 1.5, ease: "easeInOut" }}
                autoPlay
                loop
                muted
                playsInline
                className="absolute z-0 w-full h-full object-cover"
            />
        </AnimatePresence>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

        {/* Main Content Grid */}
        <div className="relative z-20 h-full w-full grid grid-cols-2">
            {/* Right side with text content */}
            <div className="flex items-end justify-center p-8 overflow-hidden">
                 <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        variants={textVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.7, ease: "easeInOut" }}
                        className="w-full max-w-2xl text-left"
                    >
                        <p className="text-gray-300 text-sm font-medium tracking-wider">{currentEvent.date}</p>
                        <h2 className="text-5xl font-bold leading-tight my-3">
                            {currentEvent.title}
                        </h2>
                        <p className="text-gray-200 text-lg">{currentEvent.location}</p>
                        <p className="text-white font-semibold text-xl mt-1">{currentEvent.price}</p>
                        <Button 
                            className="bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-transform transform hover:scale-105 mt-6"
                        >
                            Book tickets
                        </Button>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>

        {/* Navigation Arrows */}
        {/* <button onClick={prevSlide} className="absolute left-8 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
            <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button onClick={nextSlide} className="absolute right-8 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
            <ChevronRight className="h-6 w-6 text-white" />
        </button> */}
    </div>
  );
}

export default HeroShowcaseMd;

