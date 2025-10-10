import React from 'react';
import { CalendarDays, Clock } from 'lucide-react';


const ClassSchedule = () => {
  return (
    <div className="w-full py-8 space-y-8 rounded-2xl text-white ">
        <h1 className='lg:text-xl text-lg pb-2 text-white/70 font-medium'>
        Class Schedule
        </h1>
        <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-200">
                Weekend Batch
            </h2>
            <div className="flex items-start space-x-4">
                <CalendarDays className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <div className="flex flex-col items-start">
                <span className="text-gray-400 font-medium">Days</span>
                <div className="mt-2">
                    <span className="px-4 py-1.5 text-sm font-semibold text-purple-200 bg-purple-900/50 rounded-full">
                    Saturday
                    </span>
                </div>
                </div>
            </div>
            <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <div className="flex flex-col items-start">
                <span className="text-gray-400 font-medium">Time Slots</span>
                <p className="mt-1 text-gray-200 font-medium">
                    3:00 PM - 4:30 PM
                </p>
                </div>
            </div>
        </div>
        <p className="text-sm text-gray-500 pt-6">
        Classes run weekly
        </p>
    </div>
  );
}

export default ClassSchedule;