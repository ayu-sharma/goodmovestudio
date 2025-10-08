'use client'
import React, { useState } from 'react';
import { Tag, Calendar, MapPin, CheckCircle } from 'lucide-react';
import Button from '../../components/ui/button';

// Simple event card component for medium screens
const PriceCardMd = ({ price, tag, date, venue, title, plans=[
  { id: 'monthly', name: 'Monthly Basic', price: '₹299', period: '/month' },
  { id: 'quarterly', name: 'Quarterly Premium', price: '₹799', period: '/quarter' }
] }) => {
  const [selectedPlanId, setSelectedPlanId] = useState(plans[0].id);
  return (
      <div className="bg-white border border-gray-200 rounded-2xl p-3 sm:px-5 sm:py-6 shadow-xl w-full max-w-md mx-auto">
        {/* Event Tags */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {tag.map((tagItem, index) => (
            <span 
              key={index} 
              className="text-gray-600 text-xs sm:text-sm bg-gray-100 px-3 py-1 rounded-full font-medium"
            >
              {tagItem}
            </span>
          ))}
        </div>
        
        {/* Event Title */}
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
          {title}
        </h1>

        {/* Event Details (Date & Venue) */}
        <div className="space-y-3 mb-5">
          <div className="flex items-center gap-3 text-gray-500">
            <Calendar className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
            <span className="text-xs sm:text-sm md:text-base font-medium">{date}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-500">
            <MapPin className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
            <span className="text-xs sm:text-sm md:text-base font-medium">{venue}</span>
          </div>
        </div>

        <div className="border-t border-gray-200 my-5"></div>

        {/* Plan Selection Section - Vertical Layout */}
        <div className="space-y-3 mb-6">
          {plans.map(plan => (
            <div
              key={plan.id}
              onClick={() => setSelectedPlanId(plan.id)}
              className={`cursor-pointer p-4 sm:p-5 rounded-xl border-2 transition-all duration-300
                ${selectedPlanId === plan.id
                  ? 'border-[#00EA9C] bg-[#00EA9C]/10'
                  : 'border-gray-200 bg-white hover:border-gray-300'
                }
              `}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                      {plan.name}
                    </h3>
                    {plan.discount && (
                      <span className="text-xs font-semibold text-[#008a5c] bg-[#00EA9C]/20 px-2 py-0.5 rounded-full">
                        {plan.discount}
                      </span>
                    )}
                  </div>
                  <div className="flex items-baseline">
                    <span className="text-2xl sm:text-3xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-500 text-sm ml-1">
                      {plan.period}
                    </span>
                  </div>
                </div>
                
                {/* Selection Indicator */}
                <div className="flex-shrink-0 ml-3">
                  {selectedPlanId === plan.id ? (
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-[#00EA9C]" />
                  ) : (
                    <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full border-2 border-gray-300"></div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Book Tickets CTA Button */}
        <button
          className="w-full bg-[#00EA9C] text-black font-bold rounded-xl hover:bg-[#00c584] transform transition-all duration-300 shadow-lg focus:ring-4 focus:ring-[#00EA9C]/50 px-6 py-3.5 text-sm sm:text-base"
        >
          Book Tickets
        </button>
      </div>
  );
};

export default PriceCardMd;