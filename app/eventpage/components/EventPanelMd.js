import React from 'react'
import Image from 'next/image'
import PriceCardMd from './priceCardMd'
import EventInfo from './eventInfo'
import EventLocation from './eventLocation'
import StudioGuidelines from './studioGuidelines'
import EventFaq from './eventFaq'
const EventPanelMd = ({ eventData }) => {
  return (
    <>
    <div className='py-10 mx-auto max-w-7xl px-10'>
      <div className='flex justify-center gap-x-10'>
        <div className='w-2/3 flex flex-col gap-y-10'>
          <Image src="/images/bhangra.png" className='rounded-2xl shadow-2xl max-w-3xl w-full' alt={eventData.title} width={550} height={200} />
          <div className=''>
          <EventInfo eventInfo={eventData.eventDescription} />          
        </div>
        <div className=''>
        <EventLocation eventVenue={eventData.venue} />
        </div>
        <div className=''>
        <StudioGuidelines studioGuidelines={eventData.studioGuidelines} />
        </div>
        <EventFaq eventFaq={eventData.faqs} />
        </div>
        <div className=''>
          <PriceCardMd price={eventData.price} />
        </div>
      </div>
      </div>
    </> 
  )
}

export default EventPanelMd