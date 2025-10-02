import React from 'react';

const StudioGuidelines = ({ studioGuidelines }) => {
  return (
    <div>
      <p className='text-base tracking-widest pb-2 text-white/70 font-medium'>STUDIO GUIDELINES</p>
      <ul className='list-disc list-inside'>
        {studioGuidelines.map((guideline, index) => (
          <li key={index} className='text-base text-white font-medium'>{guideline}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudioGuidelines;