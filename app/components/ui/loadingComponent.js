import React from 'react';

const LoadingComponent = () => {
  return (
    <div className="w-full py-8">
      <div className="flex flex-col gap-16">
        {/* Workshops Section Skeleton */}
        <div className="w-full">
          {/* Workshops Header Skeleton */}
          <div className="flex items-center w-full max-w-7xl mx-auto mb-12 px-4">
            {/* The Left Line */}
            <div className="flex-grow h-px bg-gradient-to-r from-transparent to-[#6e6d72] md:hidden block"></div>
            
            {/* The Text Skeleton */}
            <div className="px-6">
              <div className="h-6 w-32 bg-gray-700 rounded animate-pulse"></div>
            </div>
            
            {/* The Right Line with a fade */}
            <div className="flex-grow h-px bg-gradient-to-l from-transparent to-[#6e6d72] md:hidden block"></div>
          </div>

          {/* Workshops Grid Skeleton */}
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="bg-gray-800 rounded-lg overflow-hidden animate-pulse">
                  {/* Image Skeleton */}
                  <div className="w-full h-48 bg-gray-700"></div>
                  
                  {/* Content Skeleton */}
                  <div className="p-4 space-y-3">
                    {/* Date Skeleton */}
                    <div className="flex items-center space-x-2">
                      <div className="h-4 w-16 bg-gray-700 rounded"></div>
                      <div className="h-4 w-20 bg-gray-700 rounded"></div>
                    </div>
                    
                    {/* Title Skeleton */}
                    <div className="h-5 w-3/4 bg-gray-700 rounded"></div>
                    
                    {/* Tags Skeleton */}
                    <div className="flex space-x-2">
                      <div className="h-6 w-20 bg-gray-700 rounded-full"></div>
                      <div className="h-6 w-16 bg-gray-700 rounded-full"></div>
                    </div>
                    
                    {/* Venue Skeleton */}
                    <div className="h-4 w-2/3 bg-gray-700 rounded"></div>
                    
                    {/* Price Skeleton */}
                    <div className="h-6 w-20 bg-gray-700 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Regulars Section Skeleton */}
        <div className="w-full">
          {/* Regulars Header Skeleton */}
          <div className="flex items-center w-full max-w-7xl mx-auto mb-12 px-4">
            {/* The Left Line */}
            <div className="flex-grow h-px bg-gradient-to-r from-transparent to-[#6e6d72] md:hidden block"></div>
            
            {/* The Text Skeleton */}
            <div className="px-6">
              <div className="h-6 w-40 bg-gray-700 rounded animate-pulse"></div>
            </div>
            
            {/* The Right Line with a fade */}
            <div className="flex-grow h-px bg-gradient-to-l from-transparent to-[#6e6d72] md:hidden block"></div>
          </div>

          {/* Regulars Grid Skeleton */}
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="bg-gray-800 rounded-lg overflow-hidden animate-pulse">
                  {/* Image Skeleton */}
                  <div className="w-full h-48 bg-gray-700"></div>
                  
                  {/* Content Skeleton */}
                  <div className="p-4 space-y-3">
                    {/* Date Skeleton */}
                    <div className="flex items-center space-x-2">
                      <div className="h-4 w-16 bg-gray-700 rounded"></div>
                      <div className="h-4 w-20 bg-gray-700 rounded"></div>
                    </div>
                    
                    {/* Title Skeleton */}
                    <div className="h-5 w-3/4 bg-gray-700 rounded"></div>
                    
                    {/* Tags Skeleton */}
                    <div className="flex space-x-2">
                      <div className="h-6 w-20 bg-gray-700 rounded-full"></div>
                      <div className="h-6 w-16 bg-gray-700 rounded-full"></div>
                    </div>
                    
                    {/* Venue Skeleton */}
                    <div className="h-4 w-2/3 bg-gray-700 rounded"></div>
                    
                    {/* Price Skeleton */}
                    <div className="h-6 w-20 bg-gray-700 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingComponent;