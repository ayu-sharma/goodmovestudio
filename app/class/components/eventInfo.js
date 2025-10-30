import React from 'react';

const EventInfo = ({ eventInfo }) => {
  return (
    <div className=''>
      <div className='md:hidden block'>
        <p className='text-sm pb-2 text-white/70 font-medium tracking-widest'>ABOUT THIS CLASS</p>
        <p className='text-lg text-white font-normal'>{eventInfo}</p>
      </div>
      <div className='hidden md:block'>
        <h1 className='text-sm pb-2 text-white/70 font-medium tracking-widest'>ABOUT THIS CLASS</h1>
        <p className='text-lg text-white font-normal'>{eventInfo}</p>
      </div>
    </div>
  );
};

export default EventInfo;