import React from 'react';
import Button from '../../components/ui/button';

const EventHeader = ({ title, tag, date, time, buttonText, onButtonClick, titleClass }) => {
  return (
   <div className='flex flex-col space-y-4'>
    <div className='flex items-center space-x-2'>
    {tag.map((tag, index) => (
      <span key={index} className='bg-white text-black px-2 py-1 rounded-full font-semibold'>
        {tag}
      </span>
    ))}
    </div>
      <h1 className={`text-3xl text-white font-bold ${titleClass}`}>{title}</h1>
      <p className='text-md text-[#f8f7cd] font-medium'>{date}, {time}</p>
   </div>
  );
};

export default EventHeader;