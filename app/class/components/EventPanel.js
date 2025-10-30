import React from 'react';
import { motion } from 'framer-motion';
import DragHandle from './DragHandle'; 
import EventHeader from './EventHeader';
import EventLocation from './eventLocation';
import EventInfo from './eventInfo';
import StudioGuidelines from './studioGuidelines';
import EventFaq from './eventFaq';
import ClassSchedule from './classSchedule';
import { useData } from '../../context/DataContext';
// Force refresh


const EventPanel = ({ 
  panelState, 
  controls, 
  innerScrollRef, 
  isAnimating, 
  onDragEnd,
  eventData = {},
  formatDays,
  formatTime
}) => {
  const panelVariants = {
    peeking: { y: 'calc(100vh - 350px)' },
    docked: { y: '0px' },
  };
  console.log("this", eventData)
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
        {console.log("eventData:", eventData?.schedule)}
        {console.log("full time schedule:", eventData?.schedule?.batches[0]?.days)}
        {console.log("full time schedule:", eventData?.schedule?.batches[0]?.time_slots[0])}
        <div className="max-w-4xl mx-auto px-4 pb-8">
          <EventHeader 
            title={eventData?.title}
            tag={eventData?.categories}
            day={formatDays(eventData?.schedule?.batches[0]?.days)}
            time={formatTime(eventData?.schedule?.batches[0]?.time_slots[0])}
            frequency={eventData?.schedule?.frequency}
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 pb-8"> 
        <EventInfo
        eventInfo={eventData?.description}
        />
        </div>
        <div className="max-w-4xl mx-auto px-4 pb-8">
        <EventLocation
        eventVenue={eventData?.location_name}
        eventSubAddress={eventData?.location_description}
        url={eventData?.location_url}
        />
        </div>
        <div className="max-w-4xl mx-auto px-4 pb-8">
        <ClassSchedule 
        day={formatDays(eventData?.schedule?.batches[0]?.days)}
        time={formatTime(eventData?.schedule?.batches[0]?.time_slots[0])}
        />
        </div>
        <div className="max-w-4xl mx-auto px-4 pb-8">
        <StudioGuidelines
        studioGuidelines={eventData?.studio_guidelines}
        />
        </div>

        <div className="max-w-4xl mx-auto px-4 pb-8">
        <EventFaq
        eventFaq={eventData?.faqs}
        />
        </div>
        <div className="h-[10vh]"></div>
      </div>
    </motion.div>
  );
};

export default EventPanel;