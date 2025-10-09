import React from "react";
import Image from "next/image";
import PriceCardMd from "./priceCardMd";
import EventInfo from "./eventInfo";
import EventLocation from "./eventLocation";
import StudioGuidelines from "./studioGuidelines";
import EventFaq from "./eventFaq";
import PriceCard from "./priceCard";
import ClassSchedule from "./classSchedule";
import EventHeader from "./EventHeader";
import Navbar from "@/app/components/ui/navbar";
import Footer from "@/app/components/ui/footer";
const EventPanelMd = ({ eventData }) => {
  return (
    <>
        <Navbar/>
      <div className="max-w-7xl mx-auto w-full py-10 px-10 flex flex-col gap-y-7 ">
        <div className="flex gap-x-10 w-full">
          <div className="flex justify-between w-full">
            <div className="lg:w-[60%] w-full flex flex-col gap-y-10">
              <Image
                src="/images/bhangra.png"
                className="rounded-2xl shadow-2xl max-w-3xl w-full"
                alt={eventData.title}
                width={550}
                height={200}
              />
              <div className="hidden flex-col space-y-10 lg:flex w-full">
                
                <div className="w-full">
                  <EventInfo eventInfo={eventData.description} />
                </div>
                <div className="w-full">
                  <EventLocation eventVenue={eventData.venue} />
                </div>
                <div className="w-full">
                  <ClassSchedule />
                </div>
                <div className="w-full">
                  <StudioGuidelines studioGuidelines={eventData.guidelines} />
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
              <PriceCardMd
                price={eventData.price}
                tag={eventData.tags}
                date={eventData.date}
                venue={eventData.venue}
                title={eventData.title}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-10 lg:hidden w-full">
         <div className="w-full md:block hidden lg:hidden">
                  <EventHeader 
                    title={eventData.title}
                    tag={eventData.tags}
                    date={eventData.date}
                    time={eventData.time}
                  />
                </div>
          <div className="w-full">
            <EventInfo eventInfo={eventData.description} />
          </div>
          <div className="w-full">
            <EventLocation eventVenue={eventData.venue} />
          </div>
          <div className="w-full">
            <ClassSchedule />
          </div>
          <div className="w-full">
            <StudioGuidelines studioGuidelines={eventData.guidelines} />
          </div>
          <div className="w-full">
            <EventFaq eventFaq={eventData.faqs} />
          </div>
          <div className="w-full fixed bottom-0 left-0  z-50 lg:hidden md:block">
            <PriceCard price={eventData.price} eventData={eventData} />
          </div>
        </div>
      </div>
          <Footer/>
    </>
  );
};

export default EventPanelMd;
