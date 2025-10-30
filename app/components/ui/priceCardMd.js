"use client";

import React, { useState } from "react";
import { Tag, Calendar, MapPin } from "lucide-react";
import Button from "./button";
import { useData } from "../../context/DataContext";

// Simple event card component for medium screens
const PriceCardMd = ({
  regularPrice,
  earlyBirdPrice,
  tag,
  date,
  venue,
  title,
  plans,
  classType = "workshop",
}) => {
  const initialSelectedPlanId =
    Array.isArray(plans) && plans.length > 0 ? plans[0]?.id : null;
  const [selectedPlanId, setSelectedPlanId] = useState(initialSelectedPlanId);
  const { formatDate } = useData();
  const dateInfo = formatDate && date ? formatDate(date) : null;
  console.log("this is", plans);
  return (
    <div className="bg-white border border-gray-300 md:rounded-2xl rounded-t-3xl py-4 px-5 shadow-lg">
      <div className="flex items-center gap-4 mb-2">
        <div className="flex gap-x-2">
          {tag &&
            Array.isArray(tag) &&
            tag.map((tagItem, index) => (
              <span
                key={index}
                className="text-gray-700 lg:text-sm text-xs bg-black/10 px-2 py-1 rounded-xl font-medium"
              >
                {tagItem}
              </span>
            ))}
        </div>
      </div>
      {/* Event Title */}
      <h1 className="text-lg md:text-2xl font-bold text-gray-900 mb-4">
        {title}
      </h1>

      {/* Event Information */}
      <div className="space-y-4 mb-6">
        {/* Event Date */}
        <div className="flex items-center gap-4">
          <Calendar className="h-4 w-4 text-gray-600" />
          <span className="text-gray-700 text-sm md:text-base">
            {dateInfo?.formattedDate}
          </span>
        </div>

        {/* Event Location */}
        <div className="flex items-center gap-4">
          <MapPin className="h-4 w-4 text-gray-600" />
          <span className="text-gray-700 text-sm md:text-base">{venue}</span>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t lg:block hidden border-gray-200 my-6"></div>

{/* This for the class page */}
      <div
        className={`lg:flex items-center justify-between ${
          classType === "class" ? "flex-col" : ""
        }`}
      >
        {classType === "class" ? (
          <div className="flex gap-4 mb-6 max-[1219px]:flex-col max-[1219px]:gap-3 max-lg:flex-row w-full">
            {Array.isArray(plans) &&
              plans.length > 0 &&
              plans.map((plan) => (
                <div
                  key={plan.id}
                  onClick={() => setSelectedPlanId(plan.id)}
                  className={`flex-1 cursor-pointer py-2 sm:px-6 sm:py-4 px-3 rounded-xl border-2 transition-all duration-300
                  ${
                    selectedPlanId === plan.id
                      ? "border-[#00EA9C] bg-[#00EA9C]/10"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }
                `}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col justify-between">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-normal text-gray-800 text-xs uppercase sm:text-sm">
                          {plan.name}
                        </h3>
                      </div>
                      <div className="flex items-baseline gap-x-1 whitespace-nowrap">
                        <span className="text-xl sm:text-2xl font-semibold text-gray-900 whitespace-nowrap shrink-0 leading-none">
                          ₹5999
                        </span>
                        <span className="text-gray-500 text-sm ml-1 whitespace-nowrap shrink-0 leading-none">
                        {plan.name === "Monthly" ? "/month" : "/quarter"}
                      </span>
                      </div>
                     {/* {plan.name != "Monthly" && (
                        <span className="text-xs font-medium text-[#008a5c] tracking-widest">
                          SAVE 10%
                        </span>
                     )} */}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ) :
        (
          <div className="text-base md:text-xl text-gray-900 flex items-center gap-x-2">
            {earlyBirdPrice && earlyBirdPrice.enabled === true ? (
              <>
                <span className="text-lg sm:text-xl font-semibold text-gray-500 line-through">
                ₹ {regularPrice?.price || regularPrice}
                </span>
                <div className="relative">
                  <span className="text-lg sm:text-xl font-semibold text-[#008a5c]">
                    ₹ {earlyBirdPrice.price}
                  </span>
                </div>
              </>
            ) : (
              <span className="text-lg sm:text-xl font-semibold text-gray-900">
                ₹ {regularPrice?.price || regularPrice}
              </span>
            )}
          </div>
        )}
        {/* Price and Book Button */}

        <Button
          variant="primary"
          className={`bg-[#00EA9C] text-[#003000] !font-medium rounded-lg hover:transform-all duration-300 shadow-md text-base px-6 py-2 ${
            classType === "class" ? "w-full" : ""
          }`}
        >
          Book Tickets
        </Button>
      </div>
    </div>
  );
};

export default PriceCardMd;
