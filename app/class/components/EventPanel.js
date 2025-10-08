import React from 'react';
import { motion } from 'framer-motion';
import DragHandle from './DragHandle'; 
import EventHeader from './EventHeader';
import EventLocation from './eventLocation';
import EventInfo from './eventInfo';
import StudioGuidelines from './studioGuidelines';
import EventFaq from './eventFaq';
import ClassSchedule from './classSchedule';
// Force refresh


const EventPanel = ({ 
  panelState, 
  controls, 
  innerScrollRef, 
  isAnimating, 
  onDragEnd,
  eventData = {}
}) => {
  const panelVariants = {
    peeking: { y: 'calc(100vh - 350px)' },
    docked: { y: '0px' },
  };

  return (
    <motion.div 
      className="fixed left-0 right-0 z-20 h-screen bg-[#121212] rounded-t-2xl text-white"
      variants={panelVariants}
      initial="peeking"
      animate={controls}
      transition={{ type: "spring", damping: 30, stiffness: 250 }}
    >
      <DragHandle onDragEnd={onDragEnd} />

      <div 
        ref={innerScrollRef} 
        className={`h-full pt-12 ${panelState === 'docked' && !isAnimating ? 'overflow-y-auto' : 'overflow-y-hidden'}`}
        style={{
          WebkitOverflowScrolling: 'touch',
          overscrollBehavior: 'contain'
        }}
      >
        <div className="max-w-4xl mx-auto px-4 pb-8">
          <EventHeader 
            title={eventData.title}
            tag={eventData.tags}
            date={eventData.date}
            time={eventData.time}
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 pb-8">
        <EventLocation
        eventVenue={eventData.venue}
        />
        </div>
        <div className="max-w-4xl mx-auto px-4 pb-8">
        <EventInfo
        eventInfo={eventData.description}
        />
        </div>
        <div className="max-w-4xl mx-auto px-4 pb-8">
        <ClassSchedule
        />
        </div>
        <div className="max-w-4xl mx-auto px-4 pb-8">
        <StudioGuidelines
        studioGuidelines={eventData.guidelines}
        />
        </div>

        <div className="max-w-4xl mx-auto px-4 pb-8">
        <EventFaq
        eventFaq={eventData.faqs}
        />
        </div>
        <div className="h-[10vh]"></div>
      </div>
    </motion.div>
  );
};

export default EventPanel;