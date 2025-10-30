import React from 'react';
import Button from '../../components/ui/button';

const EventHeader = ({ title, tag, day, time, frequency, titleClass, formatDate }) => {
  console.log("day:", day);
  console.log("time:", time);
  console.log("frequency:", frequency);
  return (
    <div className='flex flex-col space-y-4'>
    <div className='flex items-center space-x-2'>
    {tag && Array.isArray(tag) && tag.map((tagItem, index) => (
      <span key={index} className='bg-white/10 px-2 py-1 text-white rounded-full font-medium text-xs tracking-[0.01em]'>
        {tagItem}
      </span>
    ))}
    </div>
      <h1 className='text-3xl text-white font-bold tracking-[-0.021em]'>{title}</h1>
      <p className='text-base text-[#f8f7cd] font-medium tracking-[-0.011rem]'> {frequency}, {time} </p>
   </div>
  );
};

export default EventHeader;