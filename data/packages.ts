export interface TravelPackage {
  id: string
  title: string
  destination: string
  category: "middle-east" | "europe" | "asia" | "cruises"
  days: string
  description: string
  price: string
  priceDetail: string
  image: string
  video?: string
  featured: boolean
  highlights: string[]
  inclusions: string[]
  itinerary: {
    day: number
    title: string
    description: string
  }[]
  gallery: string[]
}

export const travelPackages: TravelPackage[] = [
  {
    id: "cairo-egypt",
    title: "Cairo, Egypt",
    destination: "Egypt",
    category: "middle-east",
    days: "4 Days",
    description: "Nile view hotel, airport transfer, double room",
    price: "1,400 SAR",
    priceDetail: "per person in double room",
    image: "/cairo-pyramids-nile.png",
    featured: true,
    highlights: [
      "Visit the Great Pyramids of Giza and the Sphinx",
      "Explore the Egyptian Museum with its treasures",
      "Enjoy a Nile River cruise dinner",
      "Shop at the historic Khan El Khalili Bazaar",
    ],
    inclusions: [
      "Airport transfers",
      "3 nights accommodation in a Nile view hotel",
      "Daily breakfast",
      "Guided tour to the Pyramids and Sphinx",
      "Egyptian Museum entrance fees",
      "Nile dinner cruise",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Cairo",
        description:
          "Arrival at Cairo International Airport, meet and assist by our representative, transfer to your hotel with Nile view. Rest of the day at leisure.",
      },
      {
        day: 2,
        title: "Pyramids & Sphinx Tour",
        description:
          "After breakfast, full day tour to visit the Great Pyramids of Giza and the Sphinx. Afternoon visit to the Egyptian Museum with its treasures.",
      },
      {
        day: 3,
        title: "Old Cairo & Khan El Khalili",
        description:
          "Visit Old Cairo including the Citadel of Saladin, Alabaster Mosque, and Coptic Cairo. Afternoon shopping at Khan El Khalili Bazaar. Evening Nile dinner cruise with entertainment.",
      },
      {
        day: 4,
        title: "Departure",
        description: "Breakfast at hotel, free time until transfer to Cairo International Airport for departure.",
      },
    ],
    gallery: [
      "/cairo-pyramids-nile.png",
      "/placeholder.svg?key=cairo1",
      "/placeholder.svg?key=cairo2",
      "/placeholder.svg?key=cairo3",
    ],
  },
  {
    id: "istanbul-turkey",
    title: "Istanbul, Turkey",
    destination: "Turkey",
    category: "middle-east",
    days: "5 Days",
    description: "4-star hotel with breakfast, private transfers, shopping tour",
    price: "2,500 SAR",
    priceDetail: "for two persons",
    image: "/images/turkey.jpg",
    featured: true,
    highlights: [
      "Visit the iconic Blue Mosque and Hagia Sophia",
      "Explore the historic Topkapi Palace",
      "Enjoy a Bosphorus cruise between Europe and Asia",
      "Experience the Grand Bazaar and Spice Market",
    ],
    inclusions: [
      "Airport transfers in private vehicle",
      "4 nights accommodation in 4-star hotel",
      "Daily breakfast",
      "Full day Istanbul city tour",
      "Shopping tour with guide",
      "Bosphorus cruise",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Istanbul",
        description:
          "Arrival at Istanbul Airport, meet and greet by our representative, transfer to your hotel. Rest of the day at leisure.",
      },
      {
        day: 2,
        title: "Historic Istanbul Tour",
        description: "Full day tour visiting Blue Mosque, Hagia Sophia, Topkapi Palace, and Basilica Cistern.",
      },
      {
        day: 3,
        title: "Bosphorus Cruise & Shopping",
        description:
          "Morning Bosphorus cruise seeing both European and Asian sides of Istanbul. Afternoon shopping tour at Grand Bazaar and Spice Market.",
      },
      {
        day: 4,
        title: "Free Day or Optional Tours",
        description: "Free day at leisure or optional tours to Princes Islands or Dolmabahce Palace.",
      },
      {
        day: 5,
        title: "Departure",
        description: "Breakfast at hotel, free time until transfer to Istanbul Airport for departure.",
      },
    ],
    gallery: [
      "/images/turkey.jpg",
      "/images/turkey (2).jpg",
      "/images/turkey (3).jpg",
      "/images/turkey (4).jpg",
      "/images/turkey (5).jpg",
    ],
  },
  {
    id: "trabzon-turkey",
    title: "Trabzon, Turkey",
    destination: "Turkey",
    category: "middle-east",
    days: "5 Days",
    description: "Hotel with breakfast, tourist tours included",
    price: "2,000 SAR",
    priceDetail: "for two persons",
    image: "/images/turkey (2).jpg",
    featured: false,
    highlights: [
      "Visit the historic Sumela Monastery",
      "Explore the beautiful Uzungol Lake",
      "Experience the lush green mountains of the Black Sea region",
      "Taste authentic Black Sea cuisine",
    ],
    inclusions: [
      "Airport transfers",
      "4 nights accommodation",
      "Daily breakfast",
      "Sumela Monastery tour",
      "Uzungol Lake tour",
      "Local guide",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Trabzon",
        description: "Arrival at Trabzon Airport, meet and assist, transfer to your hotel. Rest of the day at leisure.",
      },
      {
        day: 2,
        title: "Sumela Monastery Tour",
        description: "Full day tour to the historic Sumela Monastery built into the mountain cliff.",
      },
      {
        day: 3,
        title: "Uzungol Lake Tour",
        description: "Day trip to the beautiful Uzungol Lake surrounded by mountains and forests.",
      },
      {
        day: 4,
        title: "Trabzon City Tour",
        description: "Explore Trabzon city including Hagia Sophia of Trabzon, Ataturk Mansion, and local markets.",
      },
      {
        day: 5,
        title: "Departure",
        description: "Breakfast at hotel, free time until transfer to Trabzon Airport for departure.",
      },
    ],
    gallery: [
      "/images/turkey (2).jpg",
      "/images/turkey (3).jpg",
      "/images/turkey (4).jpg",
      "/images/turkey (5).jpg",
    ],
  },
  {
    id: "bosnia",
    title: "Bosnia",
    destination: "Bosnia and Herzegovina",
    category: "europe",
    days: "7 Nights",
    description: "Sarajevo, breakfast included, airport transfers",
    price: "2,500 SAR",
    priceDetail: "per person in double/triple room",
    image: "/placeholder.svg?key=s57s3",
    video: "/videos/bosnia.mp4",
    featured: true,
    highlights: [
      "Explore the historic city of Sarajevo",
      "Visit the famous Stari Most (Old Bridge) in Mostar",
      "Experience the beautiful nature of Bosnia",
      "Learn about the rich cultural heritage",
    ],
    inclusions: [
      "Airport transfers",
      "7 nights accommodation",
      "Daily breakfast",
      "Sarajevo city tour",
      "Mostar day trip",
      "Local guide",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Sarajevo",
        description:
          "Arrival at Sarajevo International Airport, meet and assist, transfer to your hotel. Welcome dinner.",
      },
      {
        day: 2,
        title: "Sarajevo City Tour",
        description: "Full day exploring Sarajevo including Baščaršija, Gazi Husrev-beg Mosque, and the Tunnel Museum.",
      },
      {
        day: 3,
        title: "Mostar Day Trip",
        description: "Day trip to Mostar to see the iconic Old Bridge and historic old town.",
      },
      {
        day: 4,
        title: "Travnik and Jajce Tour",
        description: "Visit the historic towns of Travnik and Jajce with their Ottoman architecture and waterfalls.",
      },
      {
        day: 5,
        title: "Blagaj and Počitelj",
        description: "Explore the Dervish monastery at Blagaj and the fortress town of Počitelj.",
      },
      {
        day: 6,
        title: "Visoko Pyramids",
        description: "Optional tour to the controversial Visoko Pyramids or free day in Sarajevo.",
      },
      {
        day: 7,
        title: "Free Day",
        description: "Free day for shopping and personal activities in Sarajevo.",
      },
      {
        day: 8,
        title: "Departure",
        description: "Breakfast at hotel, free time until transfer to Sarajevo International Airport for departure.",
      },
    ],
    gallery: [
      "/placeholder.svg?key=s57s3",
      "/placeholder.svg?key=bosnia1",
      "/placeholder.svg?key=bosnia2",
      "/placeholder.svg?key=bosnia3",
    ],
  },
  {
    id: "albania",
    title: "Albania",
    destination: "Albania",
    category: "europe",
    days: "4 Days",
    description: "Airport transfers and tours included",
    price: "4,500 SAR",
    priceDetail: "for two persons",
    image: "/albanian-coastline-mountains.png",
    featured: false,
    highlights: [
      "Explore the capital city Tirana",
      "Visit the historic town of Berat",
      "Enjoy the beautiful Albanian Riviera",
      "Experience Albanian culture and cuisine",
    ],
    inclusions: [
      "Airport transfers",
      "3 nights accommodation",
      "Daily breakfast",
      "Tirana city tour",
      "Berat day trip",
      "Local guide",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Tirana",
        description:
          "Arrival at Tirana International Airport, meet and assist, transfer to your hotel. Afternoon city tour of Tirana.",
      },
      {
        day: 2,
        title: "Berat Day Trip",
        description:
          'Full day trip to the UNESCO World Heritage city of Berat, known as the "City of a Thousand Windows".',
      },
      {
        day: 3,
        title: "Durres and Albanian Riviera",
        description: "Visit the coastal city of Durres and enjoy time at the Albanian Riviera.",
      },
      {
        day: 4,
        title: "Departure",
        description: "Breakfast at hotel, free time until transfer to Tirana International Airport for departure.",
      },
    ],
    gallery: [
      "/albanian-coastline-mountains.png",
      "/placeholder.svg?key=albania1",
      "/placeholder.svg?key=albania2",
      "/placeholder.svg?key=albania3",
    ],
  },
  {
    id: "milan-italy",
    title: "Milan, Italy",
    destination: "Italy",
    category: "europe",
    days: "4 Days",
    description: "Hotel in the heart of Duomo",
    price: "2,800 SAR",
    priceDetail: "per person in double room",
    image: "/milan-duomo-cathedral.png",
    featured: true,
    highlights: [
      "Visit the magnificent Milan Cathedral (Duomo)",
      "See Da Vinci's Last Supper",
      "Shop in the fashion capital of the world",
      "Experience Italian cuisine and culture",
    ],
    inclusions: [
      "Airport transfers",
      "3 nights accommodation in central Milan",
      "Daily breakfast",
      "Milan city tour",
      "Skip-the-line tickets to the Duomo",
      "Last Supper viewing (subject to availability)",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Milan",
        description:
          "Arrival at Milan Malpensa Airport, transfer to your hotel in the heart of Milan. Evening walk around the Duomo area.",
      },
      {
        day: 2,
        title: "Milan City Tour",
        description:
          "Full day tour including the Duomo, Galleria Vittorio Emanuele II, La Scala Opera House, and Sforza Castle.",
      },
      {
        day: 3,
        title: "Shopping and Last Supper",
        description:
          "Morning shopping in the fashion district. Afternoon visit to Santa Maria delle Grazie to see Da Vinci's Last Supper (subject to availability).",
      },
      {
        day: 4,
        title: "Departure",
        description: "Breakfast at hotel, free time until transfer to Milan Malpensa Airport for departure.",
      },
    ],
    gallery: [
      "/milan-duomo-cathedral.png",
      "/placeholder.svg?key=milan1",
      "/placeholder.svg?key=milan2",
      "/placeholder.svg?key=milan3",
    ],
  },
  {
    id: "georgia",
    title: "Georgia",
    destination: "Georgia",
    category: "asia",
    days: "6 Days",
    description: "Tbilisi, Bakuriani, Batumi, breakfast included",
    price: "3,150 SAR",
    priceDetail: "for two persons",
    image: "/tbilisi-old-town-river.png",
    video: "/videos/georgia.mp4",
    featured: true,
    highlights: [
      "Explore the charming old town of Tbilisi",
      "Visit the ancient Narikala Fortress",
      "Experience the beautiful mountain resort of Bakuriani",
      "Enjoy the Black Sea coast in Batumi",
    ],
    inclusions: [
      "Airport transfers",
      "5 nights accommodation",
      "Daily breakfast",
      "Tbilisi city tour",
      "Transportation between cities",
      "Local guide",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Tbilisi",
        description:
          "Arrival at Tbilisi International Airport, meet and assist, transfer to your hotel. Rest of the day at leisure.",
      },
      {
        day: 2,
        title: "Tbilisi City Tour",
        description:
          "Full day exploring Tbilisi including the Old Town, Narikala Fortress, Abanotubani (Bath District), and the Holy Trinity Cathedral.",
      },
      {
        day: 3,
        title: "Transfer to Bakuriani",
        description: "Travel to the mountain resort of Bakuriani. Afternoon at leisure to enjoy the mountain scenery.",
      },
      {
        day: 4,
        title: "Bakuriani to Batumi",
        description:
          "Morning in Bakuriani, then transfer to the coastal city of Batumi. Evening walk along the Boulevard.",
      },
      {
        day: 5,
        title: "Batumi City Tour",
        description:
          "Explore Batumi including Batumi Boulevard, Piazza Square, and the Botanical Garden. Free time for beach activities.",
      },
      {
        day: 6,
        title: "Return to Tbilisi and Departure",
        description:
          "Morning transfer back to Tbilisi. Free time until transfer to Tbilisi International Airport for departure.",
      },
    ],
    gallery: [
      "/tbilisi-old-town-river.png",
      "/placeholder.svg?key=georgia1",
      "/placeholder.svg?key=georgia2",
      "/placeholder.svg?key=georgia3",
    ],
  },
  {
    id: "azerbaijan",
    title: "Azerbaijan",
    destination: "Azerbaijan",
    category: "asia",
    days: "4 Days",
    description: "Baku, airport transfers included",
    price: "1,900 SAR",
    priceDetail: "for two persons",
    image: "/placeholder.svg?key=zv99k",
    featured: false,
    highlights: [
      "Explore the modern city of Baku",
      "Visit the UNESCO-listed Old City (Icherisheher)",
      "See the iconic Flame Towers",
      "Experience Azerbaijani culture and cuisine",
    ],
    inclusions: [
      "Airport transfers",
      "3 nights accommodation",
      "Daily breakfast",
      "Baku city tour",
      "Old City tour",
      "Local guide",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Baku",
        description:
          "Arrival at Heydar Aliyev International Airport, meet and assist, transfer to your hotel. Evening walk along Baku Boulevard.",
      },
      {
        day: 2,
        title: "Baku City Tour",
        description:
          "Full day exploring Baku including the Old City (Icherisheher), Maiden Tower, Shirvanshah's Palace, and Flame Towers.",
      },
      {
        day: 3,
        title: "Gobustan and Mud Volcanoes",
        description: "Day trip to Gobustan National Park to see ancient rock carvings and mud volcanoes.",
      },
      {
        day: 4,
        title: "Departure",
        description:
          "Breakfast at hotel, free time until transfer to Heydar Aliyev International Airport for departure.",
      },
    ],
    gallery: [
      "/placeholder.svg?key=zv99k",
      "/placeholder.svg?key=azerbaijan1",
      "/placeholder.svg?key=azerbaijan2",
      "/placeholder.svg?key=azerbaijan3",
    ],
  },
  {
    id: "mauritius",
    title: "Mauritius",
    destination: "Mauritius",
    category: "asia",
    days: "5 Days",
    description: "5-star hotel with breakfast, airport transfers and tours",
    price: "3,500 SAR",
    priceDetail: "for two persons",
    image: "/mauritius-beach-resort.png",
    featured: true,
    highlights: [
      "Relax on pristine white sand beaches",
      "Explore the colorful capital of Port Louis",
      "Visit the Seven Colored Earths at Chamarel",
      "Experience water sports and marine activities",
    ],
    inclusions: [
      "Airport transfers",
      "4 nights accommodation in 5-star beach resort",
      "Daily breakfast",
      "Island tour",
      "Port Louis city tour",
      "Water sports activities",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Mauritius",
        description:
          "Arrival at Sir Seewoosagur Ramgoolam International Airport, meet and assist, transfer to your beach resort. Rest of the day at leisure.",
      },
      {
        day: 2,
        title: "South Island Tour",
        description:
          "Full day tour to the south of the island including Chamarel Seven Colored Earths, Black River Gorges National Park, and Grand Bassin sacred lake.",
      },
      {
        day: 3,
        title: "Port Louis and North Tour",
        description:
          "Visit the capital city Port Louis including the Central Market, Blue Penny Museum, and Caudan Waterfront. Afternoon at Cap Malheureux and Grand Baie.",
      },
      {
        day: 4,
        title: "Beach and Water Activities",
        description:
          "Free day at the beach with included water sports activities such as snorkeling, glass bottom boat, and kayaking.",
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Breakfast at hotel, free time until transfer to Sir Seewoosagur Ramgoolam International Airport for departure.",
      },
    ],
    gallery: [
      "/mauritius-beach-resort.png",
      "/placeholder.svg?key=mauritius1",
      "/placeholder.svg?key=mauritius2",
      "/placeholder.svg?key=mauritius3",
    ],
  },
  {
    id: "aroya-cruise",
    title: "Aroya Cruise",
    destination: "Red Sea",
    category: "cruises",
    days: "8 Days",
    description: "Departing from Jeddah, double cabin with balcony, all meals and drinks included",
    price: "6,600 SAR",
    priceDetail: "for two persons during Eid",
    image: "/placeholder.svg?key=uuh20",
    featured: true,
    highlights: [
      "Luxury cruise experience on the Red Sea",
      "Visit multiple destinations including Sharm El Sheikh",
      "All-inclusive dining and entertainment",
      "Balcony cabin with sea views",
    ],
    inclusions: [
      "7 nights accommodation in balcony cabin",
      "All meals and drinks",
      "Entertainment programs",
      "Access to all ship facilities",
      "Port charges and taxes",
    ],
    itinerary: [
      {
        day: 1,
        title: "Departure from Jeddah",
        description: "Embarkation at Jeddah Islamic Port. Ship departs in the evening.",
      },
      {
        day: 2,
        title: "Day at Sea",
        description:
          "Full day at sea to enjoy the ship's facilities including pools, entertainment, and dining options.",
      },
      {
        day: 3,
        title: "Sharm El Sheikh, Egypt",
        description: "Dock at Sharm El Sheikh. Optional shore excursions available or enjoy the beach.",
      },
      {
        day: 4,
        title: "Aqaba, Jordan",
        description: "Visit Aqaba with optional excursions to Petra or Wadi Rum.",
      },
      {
        day: 5,
        title: "Safaga, Egypt",
        description: "Dock at Safaga with optional excursions to Luxor and the Valley of the Kings.",
      },
      {
        day: 6,
        title: "Day at Sea",
        description: "Another day at sea to enjoy the ship's amenities and activities.",
      },
      {
        day: 7,
        title: "Ain Sokhna, Egypt",
        description: "Visit Ain Sokhna with optional excursions to Cairo and the Pyramids.",
      },
      {
        day: 8,
        title: "Return to Jeddah",
        description: "Morning arrival at Jeddah Islamic Port. Disembarkation and end of cruise.",
      },
    ],
    gallery: [
      "/placeholder.svg?key=uuh20",
      "/placeholder.svg?key=cruise1",
      "/placeholder.svg?key=cruise2",
      "/placeholder.svg?key=cruise3",
    ],
  },
  {
    id: "moscow-russia",
    title: "Moscow, Russia",
    destination: "Russia",
    category: "europe",
    days: "5 Days",
    description: "City center hotel, Kremlin tour, metro experience",
    price: "3,200 SAR",
    priceDetail: "for two persons",
    image: "/images/mosco.jpg",
    video: "/videos/russia-mosco.mp4",
    featured: true,
    highlights: [
      "Visit the iconic Red Square and Kremlin",
      "Explore the beautiful St. Basil's Cathedral",
      "Experience the Moscow Metro's stunning architecture",
      "Enjoy a river cruise on the Moskva River",
    ],
    inclusions: [
      "Airport transfers",
      "4 nights accommodation in city center",
      "Daily breakfast",
      "Kremlin and Red Square tour",
      "Moscow Metro tour",
      "River cruise ticket",
      "Local guide",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Moscow",
        description: "Arrival at Moscow International Airport, meet and assist, transfer to your hotel. Evening walk around Red Square.",
      },
      {
        day: 2,
        title: "Red Square and Kremlin",
        description: "Full day tour of Red Square, St. Basil's Cathedral, and the Kremlin with its museums and cathedrals.",
      },
      {
        day: 3,
        title: "Moscow Metro and City Tour",
        description: "Morning tour of the beautiful Moscow Metro stations. Afternoon city tour including Bolshoi Theatre and GUM.",
      },
      {
        day: 4,
        title: "River Cruise and Free Time",
        description: "Morning river cruise on the Moskva River. Afternoon free for shopping or optional activities.",
      },
      {
        day: 5,
        title: "Departure",
        description: "Breakfast at hotel, free time until transfer to Moscow International Airport for departure.",
      },
    ],
    gallery: [
      "/images/mosco.jpg",
      "/images/mosco (2).jpg",
      "/images/mosco (3).jpg",
      "/images/mosco (4).jpg",
      "/images/mosco (5).jpg",
    ],
  },
]

export const getFeaturedPackages = () => {
  return travelPackages.filter((pkg) => pkg.featured)
}

export const getPackagesByCategory = (category: string) => {
  return travelPackages.filter((pkg) => pkg.category === category)
}

export const getPackageById = (id: string) => {
  return travelPackages.find((pkg) => pkg.id === id) || null
}
