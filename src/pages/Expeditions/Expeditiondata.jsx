// data/expeditions.js

import heroImage from "../../assets/expedition/expbg.jpg";
import mapImage from "../../assets/expedition/Vector.png"; //??
import routeMap from "../../assets/expedition/GeorgiaMap.png";
import routeMapMobile from "../../assets/expedition/GeorgiaMap.png";
import expeditionBg from "../../assets/expedition/georgiabg.jpg";

//romania
import heroImage1 from "../../assets/expedition/romanihero.png";
import routeMap1 from "../../assets/expedition/RomaniaMap.png";
import routeMapMobile1 from "../../assets/expedition/RomaniaMap.png";
import expeditionBg1 from "../../assets/expedition/romaniabg.jpg";

//south korea,finlad,k2k2026,scotland
import heroImage2 from "../../assets/expedition/southkorea.png";
import routeMap2 from "../../assets/expedition/SouthKoreaMap.png";
import routeMapMobile2 from "../../assets/expedition/SouthKoreaMap.png";
import expeditionBg2 from "../../assets/expedition/SouthKoreabg.jpg";

export const expeditions = {
  //georgia
  georgia: {
    hero: {
      title: "Georgia",
      subtitle: "Mountain passes. Offbeat routes.",
      badge: "All Women",
      description:
        "A premium all-women self-drive road expedition through Georgia, covering historic cities, wine regions, dramatic mountain passes, alpine terrain, lush canyons, coastal landscapes, and mineral-rich valleys. The journey blends scenic driving, cultural immersion, and convoy-supported self-drive freedom, curated and led by the Embarq co-founder.",
      bgImage: heroImage,
      mapImage: mapImage,
    },

    about: {
      destination: "Georgia",
      duration: "9 Days / 8 Nights",
      cost: "USD 4,000.00 per head",
      travelDates: "8th August to 16th August, 2026",
      vehicle: "Toyota RAV4 or similar (self-drive rental)",
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
        description:
          "Arrive in Georgia’s capital, Tbilisi, where your journey begins. Transfer to the hotel and ease into the city’s unique blend of old-world charm and modern vibrancy.The day is kept relaxed to recover from travel and prepare for the road journey ahead.",
        // details: "Transfer to hotel...",
      },
      {
        day: 2,
        title: "Tbilisi to Kakheti to Tbilisi (350 km)",
        description:
          "Drive from Tbilisi to the Kakheti wine region via the scenic Gombori Pass, passing through picturesque villages framed by the Caucasus Mountains.Experience Georgia’s 8,000-year-old winemaking tradition with a private wine tasting, including the unique qvevri (underground clay pot) ageing method.Visit Sighnaghi, the “City of Love,” perched high above the Alazani Valley, and enjoy leisurely moments with sweeping vineyard views before returning to Tbilisi.",
        // details: "Visit Old Town...",
      },
      {
        day: 3,
        title: "Tbilisi to Gudauri via Gergeti (160 km + 4×4 drive)",
        description:
          "Begin the mountain journey towards Gudauri with stops at iconic landmarks including Jvari Church and the ancient capital of Mtskheta. Pause at the Friendship Monument before a thrilling 4×4 ascent to Gergeti Trinity Church, dramatically located at 2,170 metres with commanding views of Mount Kazbeg. A day defined by alpine roads, historic sites, and high-altitude landscapes.",
        // details:
        //   "Stop at Ananuri Fortress and arrive in Kazbegi for stunning mountain views.",
      },
      {
        day: 4,
        title: "Gudauri to Kutaisi (350 km)",
        description:
          "Explore the historic Ananuri Fortress, once home to Georgian dukes, set against a stunning riverside backdrop. Continue towards Uplistsikhe, the ancient rock-hewn cave town known as the “Fortress of God,” carved into stone over 3,000 years ago. Drive onward to Kutaisi, transitioning from mountain terrain to western Georgia’s cultural heartland.",
        // details:
        //   "Hike or drive to this iconic church with breathtaking views of Mount Kazbek.",
      },
      {
        day: 5,
        title: "Kutaisi Day Break (320 km)",
        description:
          "Set out to explore the dramatic Okatse and Martvili Canyons, known for their untamed beauty, waterfalls, and suspended walkways. Visit the enchanting Prometheus Cave, walking through illuminated tunnels filled with stalactites, stalagmites, underground rivers, and lakes. A day immersed in Georgia’s natural wonders, both above and below ground.",
        // details:
        //   "Enjoy scenic drives and optional activities in this mountain resort town.",
      },
      {
        day: 6,
        title: "Kutaisi to Batumi (180 km)",
        description:
          "Drive towards the Black Sea coast and arrive in Batumi, Georgia’s vibrant seaside city. Stroll along the lively promenade, explore local landmarks, and unwind in the relaxed coastal atmosphere.Optional time to visit the Botanical Gardens, offering panoramic views and diverse flora.",
        // details:
        //   "Visit traditional wineries and taste Georgian wines made in ancient qvevri clay vessels.",
      },
      {
        day: 7,
        title: "Batumi to Borjomi (325 km)",
        description:
          "Depart Batumi and head inland towards Borjomi, renowned for its naturally carbonated mineral water sourced from the Borjomi Gorge.Arrive at a serene resort set within a coniferous forest, offering a slower pace and a deep connection with nature.The day blends scenic driving with wellness and relaxation.",
        // details:
        //   "Walk through the town of love with beautiful views over Alazani Valley.",
      },
      {
        day: 8,
        title: "Borjomi to Tbilisi (160 km)",
        description:
          "Enjoy a scenic return drive to Tbilisi, transitioning from forested landscapes back into the capital’s urban energy.Spend the day exploring historic sites, vibrant markets, and cultural pockets of the city.A fitting final drive that brings together history, culture, and the joy of the open road.",
        // details:
        //   "Last-minute shopping and farewell dinner before your journey home.",
      },
      {
        day: 9,
        title: "Departure from Tbilisi",
        description:
          "Check out from the hotel and transfer for your onward flight.Depart Georgia carrying memories of mountain passes, coastal roads, historic towns, and a truly immersive self-drive journey.",
        // details:
        //   "Last-minute shopping and farewell dinner before your journey home.",
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
        "Local guide and Embarq support team throughout the journey",
      ],

      exclusions: [
        "International air tickets and visa",
        "Individual insurance and documentation costs",
        "Refundable security deposit for rental car",
        "All personal expenses not mentioned in inclusions",
        "Any cost arising out of unforeseen circumstances",
        "TCS as applicable",
      ],
    },
  },

  //Romania

  romania: {
    hero: {
      title: "Romania",
      subtitle: "The Unseen Carpathians",
      badge: "All Women",
      description:
        "A premium all-women self-drive road expedition through Romania’s Carpathian heartland, revealing one of Europe’s least explored driving destinations. From iconic alpine highways and medieval citadels to Saxon villages, forests, and deep wilderness, this journey is designed for travellers who value unhurried roads, dramatic scenery, and places that reward taking the long way around.",
      bgImage: heroImage1,
      mapImage: mapImage,
    },

    about: {
      destination: "Romania",
      duration: "9 Days / 8 Nights",
      cost: " USD 5,000.00 per head",
      travelDates: "20th June to 28th June, 2026",
      vehicle: "Toyota RAV4 or similar (self-drive rental)",
      distance: "Approx. 740 km",
    },

    route: {
      desktop: routeMap1,
      mobile: routeMapMobile1,
    },

    itinerary: [
      {
        day: 1,
        title: "Arrival in Bucharest",
        description:
          "Arrive in Romania’s capital and ease into the journey.The day is kept light and flexible, allowing time to rest after travel or explore Bucharest’s historic streets and cafés at your own pace.",
      },
      {
        day: 2,
        title: "Bucharest to Sibiu via Transfăgărășan (264 km)",
        description:
          "Leave the city behind and head north onto one of Europe’s most iconic mountain roads. The Transfăgărășan climbs into the Făgăraș Mountains with sweeping curves, tunnels, and panoramic viewpoints. A relaxed picnic near the alpine section sets the pace before descending into Transylvania and reaching Sibiu by evening. A day defined entirely by the road.",
      },
      {
        day: 3,
        title: "Sibiu to Cund (76 km)",
        description:
          "Drive deeper into rural Transylvania, where rolling fields and forests replace city life. Near the village of Cund, enjoy a local experience rooted in the landscape, followed by a hands-on culinary session using regional ingredients. The afternoon is intentionally slow, offering time to absorb the stillness of the countryside.",
      },
      {
        day: 4,
        title: "Sighișoara and the Transylvanian Hills (76 km)",
        description:
          "Arrive in Sighișoara, one of Europe’s best-preserved medieval citadels, where cobbled streets and fortified walls tell stories of centuries past. Later, explore the surrounding countryside on e-bikes, moving through villages, meadows, and open hills at an unhurried pace.",
      },
      {
        day: 5,
        title: "Cund to Brașov via Viscri (155 km)",
        description:
          "Drive through Saxon Transylvania with a stop at Viscri, a UNESCO-listed village known for its fortified church and timeless rural character. Simple homes, uneven streets, and open landscapes offer a glimpse into a way of life that has endured for generations.By evening, arrive in Brașov, set against forested hills and medieval squares.",
      },
      {
        day: 6,
        title: "Brașov and Bran (30 km)",
        description:
          "Leave paved roads behind for a guided off-road experience through forest tracks and elevated clearings, reaching viewpoints rarely accessed by conventional vehicles.As evening approaches, visit Bran after hours, experiencing the site in a quieter, more atmospheric setting before continuing into the mountains.",
      },
      {
        day: 7,
        title: " Sinaia and the Wild",
        description:
          "Begin the day with Romania’s royal history at Peleș Castle, set against a dramatic mountain backdrop. Later, shift focus to nature with a guided wildlife observation experience from a forest hide, following strict ethical and safety practices. A day shaped by history, landscape, and silence.",
      },
      {
        day: 8,
        title: "Return to Bucharest via Slănic Prahova (140 km)",
        description:
          "Leave the mountains behind and drive south to one of Romania’s most striking natural spaces—an expansive underground salt mine with a scale unlike anything above ground. From here, continue back to Bucharest for a relaxed final evening.",
      },
      {
        day: 9,
        title: "Departure",
        description:
          "After breakfast, transfer to the airport and depart with memories of a lesser-known Europe discovered at driving pace.",
      },
    ],

    inclusionExclusion: {
      bgImage: expeditionBg1,

      inclusions: [
        "Recced, hand-picked driving routes",
        "Self-drive car rentals (Toyota RAV4 or similar)",
        "Fuel for the car",
        "All exclusive stays on twin sharing basis",
        "All meals during the expedition",
        "All internal sightseeing and experiences",
        "Local guide and Embarq support team throughout the journey",
      ],

      exclusions: [
        "International air tickets and visa",
        "Individual insurance and documentation costs",
        "Refundable security deposit for rental car",
        "All personal expenses not mentioned in inclusions",
        "Any cost arising out of unforeseen circumstances",
        "TCS as applicable",
      ],
    },
  },

  //South Korea

  southkorea: {
    hero: {
      title: "South Korea",
      subtitle: "Perfect roads.Mountains curves.",
      badge: "All Women",
      description:
        "A premium all-women self-drive road expedition through South Korea, combining some of the world’s most perfectly engineered roads with mountain curves, coastal light, ancient temples, and vibrant cities. From the energy of Seoul to forested national parks, historic villages, and the southern coast, this journey is designed around driving pleasure, cultural depth, and immersive local experiences.",
      bgImage: heroImage2,
      mapImage: mapImage,
    },

    about: {
      destination: "South Korea",
      duration: "9 Days / 8 Nights",
      cost: " USD 6,500.00 per head",
      travelDates: "21st November to 29th November, 2026",
      vehicle: "Hyundai Santa Fe or similar (self-drive rental)",
      distance: "Approx. 1,940 km",
    },

    route: {
      desktop: routeMap2,
      mobile: routeMapMobile2,
    },

    itinerary: [
      {
        day: 1,
        title: "Arrival in Seoul",
        description:
          "Arrive in Seoul and transfer to the hotel using private transport.The day is kept relaxed to settle in and prepare for the journey ahead.",
      },
      {
        day: 2,
        title: "Seoul Sightseeing",
        description:
          "Visit the Demilitarized Zone (DMZ), one of the world’s most heavily guarded borders, with access to infiltration tunnels, observation points, and museums that document this complex chapter of history.Explore Gyeongbokgung Palace and experience Seoul’s royal heritage through interactions with palace guards.Walk along the Seoul Wall, passing through the alleys and murals of Ihwa Mural Village, before visiting the iconic Dongdaemun Design Plaza (DDP), blending tradition with contemporary architecture.End the day at Gwangjang Market, one of Seoul’s oldest traditional markets, alive with street food, music, cafés, and late-night energy.",
      },
      {
        day: 3,
        title: "Seoul to Sokcho (245 km)",
        description:
          "Begin the driving journey, leaving the city behind and following the Han River with views of the Taebaek Mountains.The road winds through forested slopes and long tunnels, leading to the edges of Seoraksan National Park, a UNESCO-designated Biosphere Reserve known for dramatic rock formations, dense forests, wildlife, and hot springs.Visit the historic Naksansa Temple, with over 1,300 years of history dating back to the Silla Kingdom.",
      },
      {
        day: 4,
        title: "Sokcho to Andong (330 km)",
        description:
          "Descend from the Taebaek Mountains into countryside dotted with palm trees and fishing villages.Visit Hahoe Village, the “village surrounded by water,” a beautifully preserved traditional settlement offering a glimpse into Korea’s past through its houses, cobbled streets, and landscapes.Spend the evening in Maenggae Village, followed by a visit to a distinctive Korean brewery that reimagines age-old fermentation methods, and enjoy a private dinner prepared with regional ingredients and traditional techniques.",
      },
      {
        day: 5,
        title: "Andong to Gyeongju (200 km)",
        description:
          "Drive along the Nakdong River as the landscape transitions from farmland to historic heartland.Arrive in Gyeongju, once the capital of the Silla Kingdom, where temples, pagodas, and stone lanterns appear at every turn.Visit Bulguksa Temple, a UNESCO World Heritage Site, and the Seokguram Grotto, followed by an evening musical experience at a traditional Hanok house.",
      },
      {
        day: 6,
        title: "Gyeongju to Busan (190 km)",
        description:
          "Drive south to Busan, a major port city on Korea’s southeastern coast.Explore the vibrant city, including Haedong Yonggungsa Temple, dramatically set by the sea, and the bustling Gukje and Jagalchi markets, where coastal culture and daily life come alive.",
      },
      {
        day: 7,
        title: "Busan to Beopjusa (180 km)",
        description:
          "En route, visit Yangdong Village, South Korea’s largest and best-preserved traditional clan village.Arrive at Beopjusa Temple, set deep within the mountains of Songnisan National Park.Experience a unique Temple Stay, waking to temple bells and chants echoing through ancient forests, and walking paths shaped by centuries of reflection, mindfulness, and tradition.",
      },
      {
        day: 8,
        title: "Beopjusa to Seoul (420 km)",
        description:
          "Begin the return drive to Seoul, a day shaped by long scenic stretches, rustic landscapes, and cultural reflections from the journey.Arrive in Seoul by evening for a relaxed final night.",
      },
      {
        day: 9,
        title: "Departure from Seoul",
        description:
          "Transfer to the airport for your return flight.Depart South Korea with memories of exceptional roads, layered history, coastal light, and deeply immersive experiences.",
      },
    ],

    inclusionExclusion: {
      bgImage: expeditionBg2,

      inclusions: [
        "Recced, hand-picked driving routes",
        "Self-drive car rentals (Toyota RAV4 or similar)",
        "Fuel for the car",
        "All exclusive stays on twin sharing basis",
        "All meals during the expedition",
        "All internal sightseeing and experiences",
        "Local guide and Embarq support team throughout the journey",
      ],

      exclusions: [
        "International air tickets and visa",
        "Individual insurance and documentation costs",
        "Refundable security deposit for rental car",
        "All personal expenses not mentioned in inclusions",
        "Any cost arising out of unforeseen circumstances",
        "TCS as applicable",
      ],
    },
  },

  //Finland

  finland: {
    hero: {
      title: "Finland ",
      subtitle: "Arctic Winter Self-Drive Expedition",
      badge: "All Women",
      description:
        "A premium winter self-drive expedition through Finland, journeying from the design-forward capital of Helsinki into the deep Arctic landscapes of Lapland. This expedition blends frozen forests, snowbound highways, ice-covered seas, and immersive Arctic experiences — from driving through Nordic postcard-perfect scenery to floating on the frozen Gulf of Bothnia and chasing the Northern Lights in Rovaniemi.",
      bgImage: heroImage2,
      mapImage: mapImage,
    },

    about: {
      destination: "South Korea",
      duration: "9 Days / 8 Nights",
      cost: " USD 6,500.00 per head",
      travelDates: "21st November to 29th November, 2026",
      vehicle: "Hyundai Santa Fe or similar (self-drive rental)",
      distance: "Approx. 1,940 km",
    },

    route: {
      desktop: routeMap2,
      mobile: routeMapMobile,
    },

    itinerary: [
      {
        day: 1,
        title: "Arrival in Helsinki",
        description:
          "Arrive in Helsinki and transfer to the hotel.The day is kept relaxed to settle in and prepare for the winter journey ahead.",
      },
      {
        day: 2,
        title: "Helsinki Sightseeing",
        description:
          "Enjoy a guided sightseeing tour of Helsinki.Visit the city’s iconic harbours, Senate Square, the Lutheran Cathedral, Parliament Building, Finlandia Hall, and the Sibelius Monument, gaining insight into Finland’s history, design sensibility, and cultural rhythm.",
      },
      {
        day: 3,
        title: "Helsinki to Jyväskylä (270 km)",
        description:
          "Let the adventure begin as you take to your own wheels for one of Finland’s most spectacular winter drives.Wind through snow-blanketed forests and frozen lakes glinting in low winter light, passing small Nordic towns where smoke curls gently from chimneys.A classic Nordic postcard comes alive as you experience the calm, beauty, and scale of Finland’s winter landscapes.",
      },
      {
        day: 4,
        title: "Jyväskylä to Kemi (450 km)",
        description:
          "Drive north into Lapland as the landscape becomes increasingly raw and elemental.Frozen rivers run parallel to the road, wide and white, while reindeer may appear at the roadside, unhurried and completely at home in the Arctic stillness.As you approach the Bothnian Bay, forests thin, horizons widen, and Kemi emerges quietly — shaped by ice, sea, and northern light.",
      },
      {
        day: 5,
        title: "Kemi to Rovaniemi (120 km)",
        description:
          "Begin the day with one of Finland’s most extraordinary winter experiences — an Icebreaker Cruise on the frozen waters of the Gulf of Bothnia.Watch as the mighty Sampo crushes thick sea ice beneath its hull. When the ship halts, experience the unforgettable thrill of floating on the frozen sea in thermal survival suits.If conditions allow, step out onto the ice itself, feeling it creak beneath your boots as you take in the vast Arctic expanse.After this exhilarating experience, drive onwards to Rovaniemi.",
      },
      {
        day: 6 & 7,
        title: " Rovaniemi (Lapland Experience)",
        description:
          "Spend two immersive days in the heart of Lapland.Visit the magical Santa Claus Village, cross the legendary Arctic Circle, and race through snowy forests on a husky safari, followed by a warming barbecue.Enjoy a once-in-a-lifetime dinner at an ice hotel, and venture out on guided night tours in search of the elusive Northern Lights dancing across the polar sky.Stay at an exquisite Lappish resort, complete with a private sauna and wide windows framing the open Arctic skies — designed for slow, restorative moments in deep winter.",
      },
      // {
      //   day: 7,
      //   title: "Busan to Beopjusa (180 km)",
      //   description: "En route, visit Yangdong Village, South Korea’s largest and best-preserved traditional clan village.Arrive at Beopjusa Temple, set deep within the mountains of Songnisan National Park.Experience a unique Temple Stay, waking to temple bells and chants echoing through ancient forests, and walking paths shaped by centuries of reflection, mindfulness, and tradition.",
      // },
      {
        day: 8,
        title: "Rovaniemi to Helsinki (Flight)",
        description:
          "Bid farewell to Lapland and fly back to Helsinki.A day to reflect on Arctic landscapes, frozen roads, and unforgettable winter experiences.",
      },
      {
        day: 9,
        title: "Departure from Helsinki",
        description:
          "Transfer to the airport and fly out of Helsinki, carrying memories of one of the world’s most extraordinary winter journeys.",
      },
    ],

    inclusionExclusion: {
      bgImage: expeditionBg2,

      inclusions: [
        "Recced, hand-picked driving routes",
        "Self-drive car rentals (Toyota RAV4 or similar)",
        "Fuel for the car",
        "All exclusive stays on twin sharing basis",
        "All meals during the expedition",
        "All internal sightseeing and experiences",
        "Local guide and Embarq support team throughout the journey",
      ],

      exclusions: [
        "International travel to and from Helsinki/Finland and visa charges",
        "Any additional stay, sightseeing, or transfers",
        "Refundable security deposit for the rental vehicle",
        "Individual insurance and documentation costs",
        "International Driving Permit",
        "All personal and incidental expenses not mentioned",
        "Any cost arising out of unforeseen circumstances",
        "TCS as applicable",
      ],
    },
  },

  // K2K 2026

  k2k2026: {
    hero: {
      title: "K2K 2026",
      subtitle: "Kutch to Kibithoo Self-Drive Expedition",
      badge: "All Women",
      description:
        "Covering India’s westernmost to easternmost drivable points, it is set to become one of the largest all-women self-drive expeditions ever undertaken in India, symbolising unity, courage, and the limitless potential of women on the move",
      bgImage: heroImage2,
      mapImage: mapImage,
    },
    about: {
      destination: "Kutch, Gujrat to Kibithoo, Arunachal Pradesh",
      duration: "9 Days / 8 Nights",
      cost: "INR 235,000/- Per head",
      travelDates: "8th March to 25th March 2026",
      vehicle: "Self-drive - Citroën and Jeep SUVs",
      distance: "Approx. 4800 km",
    },

    route: {
      desktop: routeMap2,
      mobile: routeMapMobile,
    },

    itinerary: [
      {
        day: 1,
        title: "Arrival in Seoul",
        description:
          "Arrive in Seoul and transfer to the hotel using private transport.The day is kept relaxed to settle in and prepare for the journey ahead.",
      },
      {
        day: 2,
        title: "Seoul Sightseeing",
        description:
          "Visit the Demilitarized Zone (DMZ), one of the world’s most heavily guarded borders, with access to infiltration tunnels, observation points, and museums that document this complex chapter of history.Explore Gyeongbokgung Palace and experience Seoul’s royal heritage through interactions with palace guards.Walk along the Seoul Wall, passing through the alleys and murals of Ihwa Mural Village, before visiting the iconic Dongdaemun Design Plaza (DDP), blending tradition with contemporary architecture.End the day at Gwangjang Market, one of Seoul’s oldest traditional markets, alive with street food, music, cafés, and late-night energy.",
      },
      {
        day: 3,
        title: "Seoul to Sokcho (245 km)",
        description:
          "Begin the driving journey, leaving the city behind and following the Han River with views of the Taebaek Mountains.The road winds through forested slopes and long tunnels, leading to the edges of Seoraksan National Park, a UNESCO-designated Biosphere Reserve known for dramatic rock formations, dense forests, wildlife, and hot springs.Visit the historic Naksansa Temple, with over 1,300 years of history dating back to the Silla Kingdom.",
      },
      {
        day: 4,
        title: "Sokcho to Andong (330 km)",
        description:
          "Descend from the Taebaek Mountains into countryside dotted with palm trees and fishing villages.Visit Hahoe Village, the “village surrounded by water,” a beautifully preserved traditional settlement offering a glimpse into Korea’s past through its houses, cobbled streets, and landscapes.Spend the evening in Maenggae Village, followed by a visit to a distinctive Korean brewery that reimagines age-old fermentation methods, and enjoy a private dinner prepared with regional ingredients and traditional techniques.",
      },
      {
        day: 5,
        title: "Andong to Gyeongju (200 km)",
        description:
          "Drive along the Nakdong River as the landscape transitions from farmland to historic heartland.Arrive in Gyeongju, once the capital of the Silla Kingdom, where temples, pagodas, and stone lanterns appear at every turn.Visit Bulguksa Temple, a UNESCO World Heritage Site, and the Seokguram Grotto, followed by an evening musical experience at a traditional Hanok house.",
      },
      {
        day: 6,
        title: "Gyeongju to Busan (190 km)",
        description:
          "Drive south to Busan, a major port city on Korea’s southeastern coast.Explore the vibrant city, including Haedong Yonggungsa Temple, dramatically set by the sea, and the bustling Gukje and Jagalchi markets, where coastal culture and daily life come alive.",
      },
      {
        day: 7,
        title: "Busan to Beopjusa (180 km)",
        description:
          "En route, visit Yangdong Village, South Korea’s largest and best-preserved traditional clan village.Arrive at Beopjusa Temple, set deep within the mountains of Songnisan National Park.Experience a unique Temple Stay, waking to temple bells and chants echoing through ancient forests, and walking paths shaped by centuries of reflection, mindfulness, and tradition.",
      },
      {
        day: 8,
        title: "Beopjusa to Seoul (420 km)",
        description:
          "Begin the return drive to Seoul, a day shaped by long scenic stretches, rustic landscapes, and cultural reflections from the journey.Arrive in Seoul by evening for a relaxed final night.",
      },
      {
        day: 9,
        title: "Departure from Seoul",
        description:
          "Transfer to the airport for your return flight.Depart South Korea with memories of exceptional roads, layered history, coastal light, and deeply immersive experiences.",
      },
    ],

    inclusionExclusion: {
      bgImage: expeditionBg2,

      inclusions: [
        "Recede Route",
        "Stay on twin sharing",
        "All Meals",
        "Rental SUV with fuel",
        "Embarq Lead & Support Vehicles",
        "Support Team",
        "Fun-filled engagement activities",
        "Taxes",
      ],

      exclusions: [
        "Travel cost to reach Kutch, where the drive starts from and departure from Kibithoo once the drive ends",
        "Personal insurance",
        "Personal expenses and any incidentals like tips, laundry, room service, porter services etc",
        "Alcoholic beverages ",
        "Actual cost incurred towards repair-work, if required",
        "Expenses arising out of unforeseen circumstance",
      ],
    },
  },

  // scotland

  scotland: {
    hero: {
      title: "Scotland",
      subtitle: "Kutch to Kibithoo Self-Drive Expedition",
      badge: "All Women",
      description:
        "Covering India’s westernmost to easternmost drivable points, it is set to become one of the largest all-women self-drive expeditions ever undertaken in India, symbolising unity, courage, and the limitless potential of women on the move",
      bgImage: heroImage2,
      mapImage: mapImage,
    },
    about: {
      destination: "Kutch, Gujrat to Kibithoo, Arunachal Pradesh",
      duration: "9 Days / 8 Nights",
      cost: "INR 235,000/- Per head",
      travelDates: "8th March to 25th March 2026",
      vehicle: "Self-drive - Citroën and Jeep SUVs",
      distance: "Approx. 4800 km",
    },

    route: {
      desktop: routeMap2,
      mobile: routeMapMobile,
    },

    itinerary: [
      {
        day: 1,
        title: "Arrival in Seoul",
        description:
          "Arrive in Seoul and transfer to the hotel using private transport.The day is kept relaxed to settle in and prepare for the journey ahead.",
      },
      {
        day: 2,
        title: "Seoul Sightseeing",
        description:
          "Visit the Demilitarized Zone (DMZ), one of the world’s most heavily guarded borders, with access to infiltration tunnels, observation points, and museums that document this complex chapter of history.Explore Gyeongbokgung Palace and experience Seoul’s royal heritage through interactions with palace guards.Walk along the Seoul Wall, passing through the alleys and murals of Ihwa Mural Village, before visiting the iconic Dongdaemun Design Plaza (DDP), blending tradition with contemporary architecture.End the day at Gwangjang Market, one of Seoul’s oldest traditional markets, alive with street food, music, cafés, and late-night energy.",
      },
      {
        day: 3,
        title: "Seoul to Sokcho (245 km)",
        description:
          "Begin the driving journey, leaving the city behind and following the Han River with views of the Taebaek Mountains.The road winds through forested slopes and long tunnels, leading to the edges of Seoraksan National Park, a UNESCO-designated Biosphere Reserve known for dramatic rock formations, dense forests, wildlife, and hot springs.Visit the historic Naksansa Temple, with over 1,300 years of history dating back to the Silla Kingdom.",
      },
      {
        day: 4,
        title: "Sokcho to Andong (330 km)",
        description:
          "Descend from the Taebaek Mountains into countryside dotted with palm trees and fishing villages.Visit Hahoe Village, the “village surrounded by water,” a beautifully preserved traditional settlement offering a glimpse into Korea’s past through its houses, cobbled streets, and landscapes.Spend the evening in Maenggae Village, followed by a visit to a distinctive Korean brewery that reimagines age-old fermentation methods, and enjoy a private dinner prepared with regional ingredients and traditional techniques.",
      },
      {
        day: 5,
        title: "Andong to Gyeongju (200 km)",
        description:
          "Drive along the Nakdong River as the landscape transitions from farmland to historic heartland.Arrive in Gyeongju, once the capital of the Silla Kingdom, where temples, pagodas, and stone lanterns appear at every turn.Visit Bulguksa Temple, a UNESCO World Heritage Site, and the Seokguram Grotto, followed by an evening musical experience at a traditional Hanok house.",
      },
      {
        day: 6,
        title: "Gyeongju to Busan (190 km)",
        description:
          "Drive south to Busan, a major port city on Korea’s southeastern coast.Explore the vibrant city, including Haedong Yonggungsa Temple, dramatically set by the sea, and the bustling Gukje and Jagalchi markets, where coastal culture and daily life come alive.",
      },
      {
        day: 7,
        title: "Busan to Beopjusa (180 km)",
        description:
          "En route, visit Yangdong Village, South Korea’s largest and best-preserved traditional clan village.Arrive at Beopjusa Temple, set deep within the mountains of Songnisan National Park.Experience a unique Temple Stay, waking to temple bells and chants echoing through ancient forests, and walking paths shaped by centuries of reflection, mindfulness, and tradition.",
      },
      {
        day: 8,
        title: "Beopjusa to Seoul (420 km)",
        description:
          "Begin the return drive to Seoul, a day shaped by long scenic stretches, rustic landscapes, and cultural reflections from the journey.Arrive in Seoul by evening for a relaxed final night.",
      },
      {
        day: 9,
        title: "Departure from Seoul",
        description:
          "Transfer to the airport for your return flight.Depart South Korea with memories of exceptional roads, layered history, coastal light, and deeply immersive experiences.",
      },
    ],

    inclusionExclusion: {
      bgImage: expeditionBg2,

      inclusions: [
        "Recede Route",
        "Stay on twin sharing",
        "All Meals",
        "Rental SUV with fuel",
        "Embarq Lead & Support Vehicles",
        "Support Team",
        "Fun-filled engagement activities",
        "Taxes",
      ],

      exclusions: [
        "Travel cost to reach Kutch, where the drive starts from and departure from Kibithoo once the drive ends",
        "Personal insurance",
        "Personal expenses and any incidentals like tips, laundry, room service, porter services etc",
        "Alcoholic beverages ",
        "Actual cost incurred towards repair-work, if required",
        "Expenses arising out of unforeseen circumstance",
      ],
    },
  },
};
