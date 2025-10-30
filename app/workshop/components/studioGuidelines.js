import React from 'react';

const StudioGuidelines = ({ studioGuidelines }) => {
    return (
      <div>
      <div className="flex flex-col">
        <p className='text-sm pb-2 text-white/70 font-medium tracking-widest'>STUDIO GUIDELINES</p>
        <div className='flex flex-col gap-y-4'>
        {studioGuidelines && studioGuidelines.map((guideline, index) => (
          <div key={index} className='flex items-center gap-x-4'>
            {/* <div className='w-5 h-5 text-white flex-shrink-0'>
              {guideline.icon}
            </div> */}
            <p className='text-lg text-white font-normal'>{guideline}</p>
          </div>
        ))}
        </div>
        </div>
    </div>
  );
};

export default StudioGuidelines;