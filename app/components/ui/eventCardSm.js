import React from 'react';

// The main Event Card component
const EventCard = ({ 
  imageUrl,
  imageAlt,
  month,
  day,
  tags,
  title,
  date,
  location,
  price,
  className,
}) => {
  return (
    <div className={`relative bg rounded-t-2xl overflow-hidden shadow-lg w-full max-w-sm text-white mx-auto cursor-pointer ${className}`}>
    {/* Background Image & Gradient Overlay */}
    <div className="absolute inset-0 z-0">
      <img
        src={imageUrl}
        alt={imageAlt}
        className="w-full h-full object-cover opacity-30"
      />
      {/* Gradient only over title and date area */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
    </div>

    {/* Card Content */}
    <div className="relative z-10  flex flex-col justify-between min-h-[450px] sm:min-h-[500px]">
      {/* Header Section */}
      <header>
        <div className="flex justify-end">
          <div className="bg-white text-black text-center rounded-md px-3 py-1 shadow-md">
            <p className="font-bold text-sm">{month}</p>
            <p className="font-bold text-2xl leading-none">{day}</p>
          </div>
        </div>
      </header>

      <div className="flex-grow"></div>

      {/* Main Info Section */}
      <main className="space-y-4 p-3 pb-0 sm:p-4 sm:pb-0">
        <div className="flex items-center space-x-2 text-xs">
          {tags.map((tag, index) => (
            <span key={index} className="bg-white/10 px-2 py-1 rounded font-semibold">
              {tag}
            </span>
          ))}
        </div>
        <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
          {title}
        </h2>
        <div className='pb-1'>
          <p className="font-semibold text-md">{date}</p>
        </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-[#1a171a] rounded-b-2xl px-3 pb-3 pt-2 sm:pt-2 sm:px-4 sm:pb-4 space-y-2">
        <p className="text-gray-400 text-sm">{location}</p>
        <p className="font-bold text-lg flex justify-between items-center">{price}</p>
      </footer>
    </div>
  </div>
  );
};

export default EventCard;

