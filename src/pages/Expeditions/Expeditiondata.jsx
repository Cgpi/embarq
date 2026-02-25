// data/expeditions.js

import heroImage from "../../assets/expedition/expbg.jpg";
import mapImage from "../../assets/expedition/Vector.png";
import routeMap from "../../assets/expedition/Group996.png";
import routeMapMobile from "../../assets/expedition/routeverticle.png";
import expeditionBg from "../../assets/expedition/expeditionixbg.jpg";

export const expeditions = {
  georgia: {
    hero: {
      title: "Georgia",
      subtitle: "A Self-Drive Expedition",
      badge: "All Women",
      description:
        "A premium all-women self-drive road expedition through Georgia, covering historic cities, wine regions, dramatic mountain passes, alpine terrain, lush canyons, coastal landscapes, and mineral-rich valleys. The journey blends scenic driving, cultural immersion, and convoy-supported self-drive freedom, curated and led by the Embarq co-founder.",
      bgImage: heroImage,
      mapImage: mapImage,
    },

    about: {
      destination: "Georgia",
      duration: "8 Days / 7 Nights",
      cost: "USD 4,000.00 per person",
      travelDates: "8th August to 16th August, 2026",
      vehicle: "Self-Drive 4x4 SUV",
      distance: "Approx. 1,845 km",
    },

    route: {
      desktop: routeMap,
      mobile: routeMapMobile,
    },

    itinerary: [
      {
        day: 1,
        title: "Arrival in Tbilisi",
        description: "Arrive in Georgia's capital...",
        details: "Transfer to hotel...",
      },
      {
        day: 2,
        title: "Tbilisi Exploration",
        description: "Discover the vibrant streets...",
        details: "Visit Old Town...",
      },
       {
    day: 3,
    title: "Tbilisi to Kazbegi",
    description: "Drive through the dramatic Georgian Military Highway.",
    details:
      "Stop at Ananuri Fortress and arrive in Kazbegi for stunning mountain views.",
  },
  {
    day: 4,
    title: "Kazbegi Adventures",
    description: "Explore the mountains and visit Gergeti Trinity Church.",
    details:
      "Hike or drive to this iconic church with breathtaking views of Mount Kazbek.",
  },
  {
    day: 5,
    title: "Kazbegi to Gudauri",
    description: "Continue your mountain journey to Gudauri.",
    details:
      "Enjoy scenic drives and optional activities in this mountain resort town.",
  },
  {
    day: 6,
    title: "Wine Region Tour",
    description: "Drive to Kakheti wine region.",
    details:
      "Visit traditional wineries and taste Georgian wines made in ancient qvevri clay vessels.",
  },
  {
    day: 7,
    title: "Sighnaghi and Countryside",
    description: "Explore the charming town of Sighnaghi.",
    details:
      "Walk through the town of love with beautiful views over Alazani Valley.",
  },
  {
    day: 8,
    title: "Return to Tbilisi",
    description: "Drive back to Tbilisi for departure.",
    details:
      "Last-minute shopping and farewell dinner before your journey home.",
  },
    ],

    inclusionExclusion: {
      bgImage: expeditionBg,

      inclusions: [
        "Recced, hand-picked driving routes",
        "Self-drive car rentals (Toyota RAV4 or similar)",
        "Fuel for the car",
        "All exclusive stays on twin sharing basis",
        "All meals during the expedition",
        "All internal sightseeing and experiences",
        "Local guide and support team",
      ],

      exclusions: [
        "International air tickets and visa",
        "Insurance and documentation costs",
        "Refundable security deposit",
        "Personal expenses",
        "Unforeseen costs",
        "TCS as applicable",
      ],
    },
  },
};