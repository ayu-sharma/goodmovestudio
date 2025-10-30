import React from "react";
import Image from "next/image";
import PriceCardMd from "../../components/ui/priceCardMd";
import EventInfo from "./eventInfo";
import EventLocation from "./eventLocation";
import StudioGuidelines from "./studioGuidelines";
import EventFaq from "./eventFaq";
import PriceCard from "./priceCard";
import ClassSchedule from "./classSchedule";
import EventHeader from "./EventHeader";
import Navbar from "@/app/components/ui/navbar";
import Footer from "@/app/components/ui/footer";
const EventPanelMd = ({ eventData, formatDays, formatTime }) => {
  console.log("eventData:", eventData)
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto w-full py-10 px-10 flex flex-col gap-y-7 ">
        <div className="flex gap-x-10 w-full">
          <div className="flex justify-between w-full">
            <div className="lg:w-[60%] w-full flex flex-col gap-y-10">
              <Image
                src={eventData.image}
                className="rounded-2xl shadow-2xl max-w-3xl w-full"
                alt={eventData.title}
                width={550}
                height={200}
              />
              <div className="hidden flex-col space-y-10 lg:flex w-full">
                <div className="w-full">
                  <EventInfo eventInfo={eventData.description} />
                </div>
                <div className="flex flex-col gap-y-6">
                  <div className="w-full">
                    <EventLocation  
                      eventVenue={eventData?.location_name}
                      eventSubAddress={eventData?.location_description}
                      url={eventData?.location_url}
                    />
                  </div>
                  <div className="w-full">
                    <ClassSchedule
                      day={formatDays(eventData?.schedule?.batches?.[0]?.days)}
                      time={formatTime(
                        eventData?.schedule?.batches?.[0]?.time_slots?.[0]
                      )}
                    />
                  </div>
                </div>
                <div className="w-full">
                  <StudioGuidelines
                    studioGuidelines={eventData?.studio_guidelines}
                  />
                </div>
                <div className="w-full">
                  <EventFaq eventFaq={eventData.faqs} />
                </div>
                <div className="w-full fixed bottom-0 left-0  z-50 lg:hidden md:block">
                  <PriceCard price={eventData.price} eventData={eventData} />
                </div>
              </div>
            </div>
            <div className="w-[35%] lg:block hidden">
              <div className="sticky top-4">
                <PriceCardMd
                  tag={eventData.categories}
                  date={eventData?.schedule?.batches?.[0]?.time_slots?.[0]}
                  venue={eventData.location_name}
                  title={eventData.title}
                  classType="class"
                  plans={eventData?.subscriptions}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-10 lg:hidden w-full">
          <div className="w-full md:block hidden lg:hidden">
            <EventHeader
              title={eventData.title}
              tag={eventData.categories}
              day={formatDays(eventData?.schedule?.batches?.[0]?.days)}
              time={formatTime(
                eventData?.schedule?.batches?.[0]?.time_slots?.[0]
              )}
              frequency={eventData?.schedule?.frequency}
            />
          </div>
          <div className="w-full">
            <EventInfo eventInfo={eventData.description} />
          </div>
          <div className="w-full">
            <EventLocation
              eventVenue={eventData?.location_name}
              eventSubAddress={eventData?.location_description}
              url={eventData?.location_url}
            />
          </div>
          <div className="w-full">
            <ClassSchedule
              day={formatDays(eventData?.schedule?.batches?.[0]?.days)}
              time={formatTime(
                eventData?.schedule?.batches?.[0]?.time_slots?.[0]
              )}
            />
          </div>
          <div className="w-full">
            <StudioGuidelines studioGuidelines={eventData.guidelines} />
          </div>
          <div className="w-full">
            <EventFaq eventFaq={eventData.faqs} />
          </div>
          <div className="w-full fixed bottom-0 left-0  z-50 lg:hidden md:block">
            <PriceCard price={eventData?.subscriptions?.[0]?.price} eventData={eventData} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventPanelMd;
