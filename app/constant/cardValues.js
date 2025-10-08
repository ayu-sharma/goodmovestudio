const cardValues = [
  {
    id: 1,
    type: "Workshop",
    title: "Bhangra Dance Workshop",
    slug: "bhangra-dance-workshop",
    subtitle: "Live Performance by DJ Walia",
    eventType: "WORKSHOP",
    tags: ["Workshop", "Dance"],
    imageUrl: "/images/bhangra.png",
    imageAlt: "Bhangra Dance Workshop",
    eventAddress: "Good Move Studios, Koramangala",
    date: "Thu, Feb 09",
    time: "2:00 PM - 4:00 PM",
    venue: "Good Move Studios, Koramangala",
    price:  "₹599",
    buttonText: "Book Tickets",
    storeLink: "https://www.google.com",
    description: "Learn the high-energy traditional dance form of Bhangra! Perfect for beginners and dance enthusiasts, this workshop will get your heart pumping and feet moving.",
    // Add missing fields for EventCard
    month: "FEB",
    day: "09",
    guidelines: [
      "Outdoor shoes are not allowed. Carry a clean pair of shoes.",
      "Arrive 10 minutes before the scheduled start time.",
      "Carry a water bottle with you."
    ],
    faqs: [
      {
        question: "Do I need prior dance experience?",
        answer: "No, this workshop is designed for both beginners and dance enthusiasts. Just bring your energy and enthusiasm!"
      },
      {
        question: "What should I wear?",
        answer: "Wear comfortable clothing that allows you to move freely, along with a clean pair of shoes (no outdoor shoes allowed)."
      }
    ],
  },
  {
    id: 2,
    type: "Regular",
    title: "Hip Hop Regular Class",
    slug: "hip-hop-regular-class",
    subtitle: "Weekly Hip Hop Sessions",
    eventAddress: "Good Move Studios, Koramangala",
    eventType: "REGULAR",
    tags: ["Regular", "Hip Hop"],
    imageUrl: "/images/bhangra.png",
    imageAlt: "Hip Hop Regular Class",
    date: "Mon, Feb 12",
    time: "6:00 PM - 7:30 PM",
    venue: "Good Move Studios, Koramangala",
    price:  "₹299",
    buttonText: "Book Class",
    storeLink: "https://www.google.com",
    description: "Join our weekly Hip Hop classes for all skill levels. Perfect for building your dance foundation and staying active.",
    // Add missing fields for EventCard
    month: "FEB",
    day: "12",
    guidelines: [
      "Outdoor shoes are not allowed. Carry a clean pair of shoes.",
      "Arrive 10 minutes before the scheduled start time.",
      "Carry a water bottle with you."
    ],
    faqs: [
      {
        question: "Do I need prior dance experience?",
        answer: "No, this class is designed for all skill levels. We'll start with the basics and build up."
      },
      {
        question: "What should I wear?",
        answer: "Wear comfortable clothing that allows you to move freely, along with a clean pair of shoes (no outdoor shoes allowed)."
      }
    ],
  },
  {
    id: 3,
    type: "Kids",
    title: "Kids Bollywood Dance",
    slug: "kids-bollywood-dance",
    subtitle: "Fun Dance for Kids",
    eventType: "KIDS",
    tags: ["Kids", "Bollywood"],
    imageUrl: "/images/bhangra.png",
    imageAlt: "Kids Bollywood Dance",
    eventAddress: "Good Move Studios, Koramangala",
    date: "Sat, Feb 10",
    time: "10:00 AM - 11:00 AM",
    venue: "Good Move Studios, Koramangala",
    price:  "₹199",
    buttonText: "Book Class",
    storeLink: "https://www.google.com",
    description: "A fun and energetic Bollywood dance class designed specifically for kids aged 6-12 years.",
    // Add missing fields for EventCard
    month: "FEB",
    day: "10",
    guidelines: [
      "Outdoor shoes are not allowed. Carry a clean pair of shoes.",
      "Arrive 10 minutes before the scheduled start time.",
      "Carry a water bottle with you."
    ],
    faqs: [
      {
        question: "What age group is this for?",
        answer: "This class is designed for kids aged 6-12 years."
      },
      {
        question: "What should my child wear?",
        answer: "Comfortable clothing that allows free movement and clean shoes (no outdoor shoes allowed)."
      }
    ],
  }
];

export default cardValues;