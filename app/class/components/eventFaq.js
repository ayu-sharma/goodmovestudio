"use client"
import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

const EventFaq = ({ eventFaq }) => {
    const [openIndexes, setOpenIndexes] = useState([]);
    
    const eventFaqs = eventFaq.map((faq, index) => {
        const isOpen = openIndexes.includes(index);
        const onClick = () => {
            if (isOpen) {
                // Remove from open indexes
                setOpenIndexes(openIndexes.filter(i => i !== index));
            } else {
                // Add to open indexes
                setOpenIndexes([...openIndexes, index]);
            }
        };
        
        return (
            <div key={index} className="cursor-pointer">
                <div
                    onClick={onClick}
                    className={`w-full flex justify-between items-center text-left rounded-lg py-5`}
                >
                    <div className="flex items-center">
                        <span className="text-lg text-white font-normal">{faq.question}</span>
                    </div>
                    <ChevronDown 
                        className={`h-5 w-5 text-gray-500 dark:text-gray-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                    />
                </div>
                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
                >
                    <div className="text-lg text-white font-normal">
                        {faq.answer}
                    </div>
                </div>
            </div>
        );
    });
    
    return (
        <div>
            <p className='text-sm pb-2 text-white/70 font-medium tracking-widest'>FREQUENTLY ASKED QUESTIONS</p>
            {eventFaqs}
        </div>
    );
};

export default EventFaq;