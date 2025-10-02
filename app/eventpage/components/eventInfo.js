import React from 'react';

const EventInfo = ({ eventInfo }) => {
  return (
    <div className=''>
      <div className='md:hidden block'>
        <p className='text-base tracking-widest pb-2 text-white/70 font-medium'>ABOUT THE EVENT</p>
        <p className='text-base text-white font-medium'>{eventInfo}</p>
      </div>
      <div className='hidden md:block'>
        <h1 className='text-base tracking-widest pb-2 text-white/70 font-medium'>ABOUT THE EVENT</h1>
        <p className='text-base text-white font-medium'>{eventInfo}</p>
      </div>
    </div>
  );
};

export default EventInfo;