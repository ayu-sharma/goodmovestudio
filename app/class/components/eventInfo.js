import React from 'react';

const EventInfo = ({ eventInfo }) => {
  return (
    <div className=''>
      <div className='md:hidden block'>
        <p className='lg:text-base tracking-widest pb-2 text-white/70 font-medium'>About This Class</p>
        <p className='text-base text-white font-medium'>{eventInfo}</p>
      </div>
      <div className='hidden md:block'>
        <h1 className='lg:text-xl text-lg pb-2 text-white/70 font-medium'>About This Class</h1>
        <p className='text-base text-white font-medium'>{eventInfo}</p>
      </div>
    </div>
  );
};

export default EventInfo;