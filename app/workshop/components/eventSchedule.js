import React from 'react';
import { CalendarDays, Clock } from 'lucide-react';


const EventSchedule = ({ date, formatDate }) => {
  const dateInfo = formatDate && date ? formatDate(date) : null;
  return (
    <div className='flex items-start gap-x-5 w-full'>
        <CalendarDays className='w-6 h-6 text-[#00ea9c] flex-shrink-0 mt-0.5' />
        <div className='flex flex-col gap-y-1'>
            <p className='text-lg font-normal text-white tracking-[-0.006em]'>
              {dateInfo?.dayOfWeek || 'Every Saturday'}
            </p>
            <p className='text-base font-normal text-gray-300 tracking-[-0.006em]'>
              {dateInfo?.formattedDate || '06:00 AM - 10:00 PM'}
            </p>
        </div>
    </div>
  );
}

export default EventSchedule;