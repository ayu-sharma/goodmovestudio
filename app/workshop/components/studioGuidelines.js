import React from 'react';

const StudioGuidelines = ({ studioGuidelines }) => {
  // Safety check to prevent errors if data is undefined
  if (!studioGuidelines || !Array.isArray(studioGuidelines)) {
    return (
      <div>
        <p className='lg:text-base tracking-widest pb-2 text-white/70 font-medium'>Studio Guidelines</p>
        <p className='text-base text-white font-medium'>No guidelines available.</p>
      </div>
    );
  }

  return (
    <div>
      <p className='text-base lg:text-xl md:text-lg pb-2 text-white/70 font-medium'>Studio Guidelines</p>
      <ul className='list-disc px-3'>
        {studioGuidelines.map((guideline, index) => (
          <li key={index} className='text-base text-white font-medium'>{guideline}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudioGuidelines;