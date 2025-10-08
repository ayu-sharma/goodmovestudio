"use client"
import React, { useState, useRef, useEffect, useCallback } from "react";
import { useParams } from 'next/navigation';
import { motion, useAnimation } from "framer-motion";
import BackgroundImage from "../components/BackgroundImage";
import EventPanel from '../components/EventPanel';
import PriceCard from '../components/priceCard';
import EventPanelMd from '../components/EventPanelMd';
import cardValues from '../../constant/cardValues';

const Eventpage = () => {
    const params = useParams();
    const id = params.id;
    
    // Move all hooks to the top before any conditional returns
    const [panelState, setPanelState] = useState('peeking');
    const [isAnimating, setIsAnimating] = useState(false);
    // New state to create the "sticky top" effect before closing the panel
    const [isTopSticky, setIsTopSticky] = useState(false);
    const controls = useAnimation();
    const innerScrollRef = useRef(null);
    
    const handleAnimation = useCallback(async (state) => {
        setIsAnimating(true);
        setPanelState(state);
        if (state === 'peeking') {
            // When we start peeking, reset the sticky state
            setIsTopSticky(false);
        }
        await controls.start(state);
        setIsAnimating(false);
    }, [controls]);

    // This effect adds scroll wheel and touch control to the panel - only for mobile
    useEffect(() => {
        // Only add event listeners on mobile devices (when md:hidden is active)
        const isMobile = window.innerWidth < 768; // md breakpoint is 768px
        if (!isMobile) return;

        let touchStartY = 0;
        let touchStartTime = 0;

        const handleWheel = (event) => {
            if (isAnimating) {
                event.preventDefault();
                return;
            }
            if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
                return;
            }

            const scrollRef = innerScrollRef.current;
            if (!scrollRef) return;
            
            const isAtTop = scrollRef.scrollTop === 0;

            // If we scroll down away from the top, reset the sticky state
            if (!isAtTop && isTopSticky) {
                setIsTopSticky(false);
            }

            // Handle docking (scrolling down when peeking)
            if (panelState === 'peeking' && event.deltaY > 0) {
                event.preventDefault();
                handleAnimation('docked');
            } 
            // Handle peeking (scrolling up when docked and at the top)
            else if (panelState === 'docked' && event.deltaY < 0 && isAtTop) {
                event.preventDefault();
                // If we're already in the sticky state, the second scroll up will close the panel
                if (isTopSticky) {
                    handleAnimation('peeking');
                } else {
                    // On the first scroll up at the top, just enter the sticky state
                    setIsTopSticky(true);
                }
            }
        };

        const handleTouchStart = (event) => {
            touchStartY = event.touches[0].clientY;
            touchStartTime = Date.now();
        };

        const handleTouchMove = (event) => {
            if (isAnimating) {
                return;
            }

            const currentY = event.touches[0].clientY;
            const deltaY = touchStartY - currentY;
            const scrollRef = innerScrollRef.current;
            
            if (!scrollRef) return;
            
            const isAtTop = scrollRef.scrollTop === 0;

            // If we scroll down away from the top, reset the sticky state
            if (!isAtTop && isTopSticky) {
                setIsTopSticky(false);
            }

            // Handle docking (swiping up when peeking)
            if (panelState === 'peeking' && deltaY > 50) {
                event.preventDefault();
                handleAnimation('docked');
            } 
            // Handle peeking (swiping down when docked and at the top)
            else if (panelState === 'docked' && deltaY < -50 && isAtTop) {
                event.preventDefault();
                // If we're already in the sticky state, the second swipe down will close the panel
                if (isTopSticky) {
                    handleAnimation('peeking');
                } else {
                    // On the first swipe down at the top, just enter the sticky state
                    setIsTopSticky(true);
                }
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: false });
        window.addEventListener('touchstart', handleTouchStart, { passive: true });
        window.addEventListener('touchmove', handleTouchMove, { passive: false });
        
        return () => {
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, [panelState, handleAnimation, isAnimating, isTopSticky]);

    
    // Find the event data based on id (convert string to number)
    const eventData = cardValues.find(event => event.id === parseInt(id));
    
    console.log('Event data found:', eventData); // Debug log
    
    // If event not found, show 404
    if (!eventData) {
        console.log('Event not found for id:', id); // Debug log
        return (
            <div className="h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Event Not Found</h1>
                    <p className="text-gray-600">The event you&apos;re looking for doesn&apos;t exist.</p>
                    <p className="text-sm text-gray-400 mt-2">ID: {id}</p>
                </div>
            </div>
        );
    }

    const handleDragEnd = (event, info) => {
        if (info.velocity.y > 20 || (info.velocity.y >= 0 && info.point.y > 450)) {
            handleAnimation('peeking');
        } else {
            handleAnimation('docked');
        }
    };

    return (
        <>
        <div className="h-screen overflow-hidden md:hidden">
            <BackgroundImage imageUrl={eventData.imageUrl} />
            <EventPanel 
                panelState={panelState}
                controls={controls}
                innerScrollRef={innerScrollRef}
                isAnimating={isAnimating}
                onDragEnd={handleDragEnd}
                eventData={eventData}
            />
            <div className="fixed bottom-0 left-0 w-full z-50">
            <PriceCard
                price={eventData.price}
            />
            </div>
        </div>
        <div className="hidden md:block">
            <EventPanelMd
                eventData={eventData}
            />
        </div>
        </>
    );
};

export default Eventpage;

