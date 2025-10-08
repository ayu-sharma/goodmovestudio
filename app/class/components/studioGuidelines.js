import React from 'react';

const StudioGuidelines = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Studio Guidelines Section */}
        <div>
          <h2 className="text-base lg:text-xl md:text-lg pb-2 text-white/70 font-medium">Studio Guidelines</h2>
          <ul className="list-disc">
            <li className="text-white font-medium">
              Outdoor shoes are not allowed. Carry a clean pair of shoes.
            </li>
            <li className="text-white font-medium">
              Arrive 10 minutes before the scheduled start time.
            </li>
            <li className="text-white font-medium">
              Carry a water bottle with you.
            </li>
          </ul>
        </div>

        {/* What You'll Need Section */}
        <div>
          <h2 className="text-base lg:text-xl md:text-lg pb-2 text-white/70 font-medium">What You'll Need</h2>
          <ul className="list-disc">
            <li className="text-white font-medium">
              Comfortable ethnic clothes
            </li>
            <li className="text-white font-medium">
              Water bottle
            </li>
            <li className="text-white font-medium">
              Clean pair of shoes
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudioGuidelines;