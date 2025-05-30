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
    id: "georgia",
    title: "جورجيا",
    destination: "جورجيا",
    category: "europe",
    days: "6 أيام",
    description: "تبليسي، باكورياني، باتومي، إفطار مشمول",
    price: "3,150 ريال",
    priceDetail: "لشخصين",
    image: "/images/Georgia.jpg",
    video: "/videos/georgia.mp4",
    featured: true,
    highlights: [
      "استكشف البلدة القديمة الساحرة في تبليسي",
      "زيارة قلعة ناريكالا القديمة",
      "تجربة منتجع باكورياني الجبلي الجميل",
      "الاستمتاع بساحل البحر الأسود في باتومي"
    ],
    inclusions: [
      "النقل من وإلى المطار",
      "إقامة 5 ليالي",
      "إفطار يومي",
      "جولة في مدينة تبليسي",
      "النقل بين المدن",
      "مرشد سياحي محلي"
    ],
    itinerary: [
      {
        day: 1,
        title: "الوصول إلى تبليسي",
        description: "الوصول إلى مطار تبليسي الدولي، الاستقبال والمساعدة، النقل إلى الفندق. باقي اليوم حر."
      },
      {
        day: 2,
        title: "جولة في مدينة تبليسي",
        description: "يوم كامل لاستكشاف تبليسي بما في ذلك البلدة القديمة، قلعة ناريكالا، أبانوتوباني (حي الحمامات)، وكاتدرائية الثالوث المقدس."
      },
      {
        day: 3,
        title: "الانتقال إلى باكورياني",
        description: "السفر إلى منتجع باكورياني الجبلي. بعد الظهر حر للاستمتاع بالمناظر الجبلية."
      },
      {
        day: 4,
        title: "من باكورياني إلى باتومي",
        description: "صباح في باكورياني، ثم الانتقال إلى مدينة باتومي الساحلية. نزهة مسائية على طول البوليفارد."
      },
      {
        day: 5,
        title: "جولة في مدينة باتومي",
        description: "استكشاف باتومي بما في ذلك بوليفارد باتومي، ساحة بياتزا، والحديقة النباتية. وقت حر للأنشطة الشاطئية."
      },
      {
        day: 6,
        title: "العودة إلى تبليسي والمغادرة",
        description: "النقل صباحاً إلى تبليسي. وقت حر حتى موعد النقل إلى مطار تبليسي الدولي للمغادرة."
      }
    ],
    gallery: [
      "/images/Georgia.jpg",
      "/images/Georgia 1.jpg",
      "/images/Georgia  2.jpg",
      "/images/Georgia 3.jpg"
    ]
  },
  {
    id: "bosnia",
    title: "البوسنة",
    destination: "البوسنة والهرسك",
    category: "europe",
    days: "7 ليالي",
    description: "سراييفو، مع إفطار، نقل من وإلى المطار",
    price: "2,500 ريال",
    priceDetail: "للشخص في غرفة مزدوجة/ثلاثية",
    image: "/images/Bosnia.jpeg",
    video: "/videos/bosnia.mp4",
    featured: true,
    highlights: [
      "استكشف مدينة سراييفو التاريخية",
      "زيارة جسر موستار القديم الشهير",
      "استمتع بالطبيعة الخلابة في البوسنة",
      "تعرف على التراث الثقافي الغني"
    ],
    inclusions: [
      "النقل من وإلى المطار",
      "إقامة 7 ليالي",
      "إفطار يومي",
      "جولة في مدينة سراييفو",
      "رحلة يومية إلى موستار",
      "مرشد سياحي محلي"
    ],
    itinerary: [
      {
        day: 1,
        title: "الوصول إلى سراييفو",
        description: "الوصول إلى مطار سراييفو الدولي، الاستقبال والمساعدة، النقل إلى الفندق. عشاء ترحيبي."
      },
      {
        day: 2,
        title: "جولة في مدينة سراييفو",
        description: "يوم كامل لاستكشاف سراييفو بما في ذلك باشچارشيا، مسجد غازي خسرو بيك، ومتحف النفق."
      },
      {
        day: 3,
        title: "رحلة يومية إلى موستار",
        description: "رحلة يومية إلى موستار لمشاهدة الجسر القديم الأيقوني والبلدة القديمة التاريخية."
      },
      {
        day: 4,
        title: "جولة في ترافنيك ويايتسه",
        description: "زيارة المدن التاريخية ترافنيك ويايتسه مع عمارتها العثمانية وشلالاتها."
      },
      {
        day: 5,
        title: "بلاغاي وبوتشيتل",
        description: "استكشاف دير الدراويش في بلاغاي ومدينة القلعة بوتشيتل."
      },
      {
        day: 6,
        title: "أهرامات فيسوكو",
        description: "جولة اختيارية إلى أهرامات فيسوكو المثيرة للجدل أو يوم حر في سراييفو."
      },
      {
        day: 7,
        title: "يوم حر",
        description: "يوم حر للتسوق والأنشطة الشخصية في سراييفو."
      },
      {
        day: 8,
        title: "المغادرة",
        description: "إفطار في الفندق، وقت حر حتى موعد النقل إلى مطار سراييفو الدولي للمغادرة."
      }
    ],
    gallery: [
      "/images/Bosnia.jpeg",
      "/images/Bosnia 2.jpeg",
      "/images/Bosnia 3.jpg",
      "/images/Bosnia 4.jpeg",
      "/images/Bosnia 5.jpg"
    ]
  },
  {
    id: "azerbaijan",
    title: "أذربيجان",
    destination: "أذربيجان",
    category: "asia",
    days: "4 أيام",
    description: "باكو، شامل النقل من وإلى المطار",
    price: "1,900 ريال",
    priceDetail: "لشخصين",
    image: "/images/Azerbaijan.webp",
    video: "/videos/Azerbaijan.mp4",
    featured: false,
    highlights: [
      "استكشف مدينة باكو العصرية",
      "زيارة المدينة القديمة المدرجة في اليونسكو (إتشيري شيهر)",
      "مشاهدة أبراج اللهب الأيقونية",
      "تجربة الثقافة والمطبخ الأذربيجاني"
    ],
    inclusions: [
      "النقل من وإلى المطار",
      "إقامة 3 ليالي",
      "إفطار يومي",
      "جولة في مدينة باكو",
      "جولة في المدينة القديمة",
      "مرشد سياحي محلي"
    ],
    itinerary: [
      {
        day: 1,
        title: "الوصول إلى باكو",
        description: "الوصول إلى مطار حيدر علييف الدولي، الاستقبال والمساعدة، النقل إلى الفندق. نزهة مسائية على طول بوليفارد باكو."
      },
      {
        day: 2,
        title: "جولة في مدينة باكو",
        description: "يوم كامل لاستكشاف باكو بما في ذلك المدينة القديمة (إتشيري شيهر)، برج العذراء، قصر شيروان شاه، وأبراج اللهب."
      },
      {
        day: 3,
        title: "غوبوستان والبراكين الطينية",
        description: "رحلة يومية إلى متنزه غوبوستان الوطني لمشاهدة النقوش الصخرية القديمة والبراكين الطينية."
      },
      {
        day: 4,
        title: "المغادرة",
        description: "إفطار في الفندق، وقت حر حتى موعد النقل إلى مطار حيدر علييف الدولي للمغادرة."
      }
    ],
    gallery: [
      "/images/Azerbaijan.webp",
      "/images/Azerbaijan 1.jpg",
      "/images/Azerbaijan 2.jpg"
    ]
  },
  {
    id: "cairo-egypt",
    title: "القاهرة، مصر",
    destination: "مصر",
    category: "middle-east",
    days: "4 أيام",
    description: "فندق بإطلالة على النيل، نقل من وإلى المطار، غرفة مزدوجة",
    price: "1,400 ريال",
    priceDetail: "للشخص في غرفة مزدوجة",
    image: "/images/egypt.jpg",
    video: "/videos/egypt.mp4",
    featured: true,
    highlights: [
      "زيارة أهرامات الجيزة العظيمة وأبو الهول",
      "استكشاف المتحف المصري وكنوزه",
      "الاستمتاع بعشاء على نهر النيل",
      "التسوق في سوق خان الخليلي التاريخي"
    ],
    inclusions: [
      "النقل من وإلى المطار",
      "إقامة 3 ليالي في فندق بإطلالة على النيل",
      "إفطار يومي",
      "جولة مع مرشد إلى الأهرامات وأبو الهول",
      "تذاكر دخول المتحف المصري",
      "عشاء على نهر النيل"
    ],
    itinerary: [
      {
        day: 1,
        title: "الوصول إلى القاهرة",
        description: "الوصول إلى مطار القاهرة الدولي، الاستقبال والمساعدة من ممثلنا، النقل إلى الفندق المطل على النيل. باقي اليوم حر للراحة."
      },
      {
        day: 2,
        title: "جولة الأهرامات وأبو الهول",
        description: "بعد الإفطار، جولة كاملة لزيارة أهرامات الجيزة العظيمة وأبو الهول. زيارة المتحف المصري وكنوزه في فترة ما بعد الظهر."
      },
      {
        day: 3,
        title: "القاهرة القديمة وخان الخليلي",
        description: "زيارة القاهرة القديمة بما في ذلك قلعة صلاح الدين، مسجد محمد علي، والقاهرة القبطية. تسوق في فترة ما بعد الظهر في خان الخليلي. عشاء على نهر النيل مع عروض ترفيهية."
      },
      {
        day: 4,
        title: "المغادرة",
        description: "إفطار في الفندق، وقت حر حتى موعد النقل إلى مطار القاهرة الدولي للمغادرة."
      }
    ],
    gallery: [
      "/images/egypt.jpg",
      "/images/egypt-1.jpg",
      "/images/egypt-2.jpg",
      "/images/egypt-3.jpg"
    ]
  },
  {
    id: "aroya-cruise",
    title: "رحلة أرويا البحرية",
    destination: "البحر الأحمر",
    category: "cruises",
    days: "8 أيام",
    description: "انطلاقاً من جدة، كابينة مزدوجة مع شرفة، جميع الوجبات والمشروبات مشمولة",
    price: "6,600 ريال",
    priceDetail: "لشخصين خلال العيد",
    image: "/images/Aroya Cruise.webp",
    video: "/videos/Aroya Cruise.mp4",
    featured: true,
    highlights: [
      "تجربة رحلة بحرية فاخرة في البحر الأحمر",
      "زيارة وجهات متعددة تشمل شرم الشيخ",
      "جميع الوجبات والترفيه مشمولة",
      "كابينة مع شرفة وإطلالات بحرية"
    ],
    inclusions: [
      "إقامة 7 ليالي في كابينة مع شرفة",
      "جميع الوجبات والمشروبات",
      "برامج ترفيهية",
      "الوصول إلى جميع مرافق السفينة",
      "رسوم الموانئ والضرائب"
    ],
    itinerary: [
      {
        day: 1,
        title: "المغادرة من جدة",
        description: "الصعود على متن السفينة في ميناء جدة الإسلامي. مغادرة السفينة في المساء."
      },
      {
        day: 2,
        title: "يوم في البحر",
        description: "يوم كامل في البحر للاستمتاع بمرافق السفينة بما في ذلك المسابح والترفيه وخيارات تناول الطعام."
      },
      {
        day: 3,
        title: "شرم الشيخ، مصر",
        description: "الرسو في شرم الشيخ. رحلات اختيارية متوفرة أو الاستمتاع بالشاطئ."
      },
      {
        day: 4,
        title: "العقبة، الأردن",
        description: "زيارة العقبة مع رحلات اختيارية إلى البتراء أو وادي رم."
      },
      {
        day: 5,
        title: "سفاجا، مصر",
        description: "الرسو في سفاجا مع رحلات اختيارية إلى الأقصر ووادي الملوك."
      },
      {
        day: 6,
        title: "يوم في البحر",
        description: "يوم آخر في البحر للاستمتاع بمرافق وأنشطة السفينة."
      },
      {
        day: 7,
        title: "العين السخنة، مصر",
        description: "زيارة العين السخنة مع رحلات اختيارية إلى القاهرة والأهرامات."
      },
      {
        day: 8,
        title: "العودة إلى جدة",
        description: "الوصول صباحاً إلى ميناء جدة الإسلامي. النزول من السفينة ونهاية الرحلة."
      }
    ],
    gallery: [
      "/images/Aroya Cruise.webp",
      "/images/Aroya Cruise 1.jpg",
      "/images/Aroya Cruise 3.webp",
      "/images/Aroya Cruise 4.jpg"
    ]
  },
  {
    id: "moscow-russia",
    title: "موسكو، روسيا",
    destination: "روسيا",
    category: "europe",
    days: "5 أيام",
    description: "فندق في وسط المدينة، جولة في الكرملين، تجربة المترو",
    price: "3,200 ريال",
    priceDetail: "لشخصين",
    image: "/images/mosco.jpg",
    video: "/videos/russia-mosco.mp4",
    featured: true,
    highlights: [
      "زيارة الساحة الحمراء والكرملين الشهير",
      "استكشاف كاتدرائية القديس باسيل الجميلة",
      "تجربة الهندسة المعمارية المذهلة لمترو موسكو",
      "الاستمتاع برحلة نهرية على نهر موسكفا"
    ],
    inclusions: [
      "النقل من وإلى المطار",
      "إقامة 4 ليالي في وسط المدينة",
      "إفطار يومي",
      "جولة في الكرملين والساحة الحمراء",
      "جولة في مترو موسكو",
      "تذكرة الرحلة النهرية",
      "مرشد سياحي محلي"
    ],
    itinerary: [
      {
        day: 1,
        title: "الوصول إلى موسكو",
        description: "الوصول إلى مطار موسكو الدولي، الاستقبال والمساعدة، النقل إلى الفندق. نزهة مسائية حول الساحة الحمراء."
      },
      {
        day: 2,
        title: "الساحة الحمراء والكرملين",
        description: "جولة كاملة في الساحة الحمراء، كاتدرائية القديس باسيل، والكرملين مع متاحفه وكاتدرائياته."
      },
      {
        day: 3,
        title: "مترو موسكو وجولة في المدينة",
        description: "جولة صباحية في محطات مترو موسكو الجميلة. جولة في المدينة بعد الظهر تشمل مسرح البولشوي وغوم."
      },
      {
        day: 4,
        title: "رحلة نهرية ووقت حر",
        description: "رحلة نهرية صباحية على نهر موسكفا. فترة ما بعد الظهر حرة للتسوق أو الأنشطة الاختيارية."
      },
      {
        day: 5,
        title: "المغادرة",
        description: "إفطار في الفندق، وقت حر حتى موعد النقل إلى مطار موسكو الدولي للمغادرة."
      }
    ],
    gallery: [
      "/images/mosco.jpg",
      "/images/mosco (2).jpg",
      "/images/mosco (3).jpg",
      "/images/mosco (4).jpg",
      "/images/mosco (5).jpg"
    ]
  },
  {
    id: "albania",
    title: "ألبانيا",
    destination: "ألبانيا",
    category: "europe",
    days: "4 أيام",
    description: "النقل من وإلى المطار والجولات مشمولة",
    price: "4,500 ريال",
    priceDetail: "لشخصين",
    image: "/images/Albanian.jpg",
    video: "/videos/albanian.mp4",
    featured: false,
    highlights: [
      "استكشف العاصمة تيرانا",
      "زيارة مدينة برات التاريخية",
      "الاستمتاع بالريفيرا الألبانية الجميلة",
      "تجربة الثقافة والمطبخ الألباني"
    ],
    inclusions: [
      "النقل من وإلى المطار",
      "إقامة 3 ليالي",
      "إفطار يومي",
      "جولة في مدينة تيرانا",
      "رحلة يومية إلى برات",
      "مرشد سياحي محلي"
    ],
    itinerary: [
      {
        day: 1,
        title: "الوصول إلى تيرانا",
        description: "الوصول إلى مطار تيرانا الدولي، الاستقبال والمساعدة، النقل إلى الفندق. جولة مسائية في المدينة."
      },
      {
        day: 2,
        title: "رحلة يومية إلى برات",
        description: "رحلة يومية كاملة إلى مدينة برات المدرجة في قائمة اليونسكو للتراث العالمي، المعروفة باسم 'مدينة الألف نافذة'."
      },
      {
        day: 3,
        title: "دوريس والريفيرا الألبانية",
        description: "زيارة مدينة دوريس الساحلية والاستمتاع بوقت على الريفيرا الألبانية."
      },
      {
        day: 4,
        title: "المغادرة",
        description: "إفطار في الفندق، وقت حر حتى موعد النقل إلى مطار تيرانا الدولي للمغادرة."
      }
    ],
    gallery: [
      "/images/Albanian.jpg",
      "/images/albanian 1.jpg",
      "/images/Albanian 2.jpg",
      "/images/albanian 3.jpg",
      "/images/Albanian 4.jpg"
    ]
  },
  {
    id: "milan-italy",
    title: "ميلانو، إيطاليا",
    destination: "إيطاليا",
    category: "europe",
    days: "4 أيام",
    description: "فندق في قلب الدومو",
    price: "2,800 ريال",
    priceDetail: "للشخص في غرفة مزدوجة",
    image: "/images/italy.jpg",
    video: "/videos/italy.mp4",
    featured: true,
    highlights: [
      "زيارة كاتدرائية ميلانو الرائعة (الدومو)",
      "مشاهدة لوحة العشاء الأخير لدافنشي",
      "التسوق في عاصمة الموضة العالمية",
      "تجربة المطبخ والثقافة الإيطالية"
    ],
    inclusions: [
      "النقل من وإلى المطار",
      "إقامة 3 ليالي في وسط ميلانو",
      "إفطار يومي",
      "جولة في مدينة ميلانو",
      "تذاكر دخول سريع للدومو",
      "مشاهدة العشاء الأخير (حسب التوفر)"
    ],
    itinerary: [
      {
        day: 1,
        title: "الوصول إلى ميلانو",
        description: "الوصول إلى مطار ميلانو مالبينسا، النقل إلى فندقك في قلب ميلانو. نزهة مسائية حول منطقة الدومو."
      },
      {
        day: 2,
        title: "جولة في مدينة ميلانو",
        description: "جولة كاملة تشمل الدومو، غاليريا فيتوريو إيمانويل الثاني، دار لا سكالا للأوبرا، وقلعة سفورزا."
      },
      {
        day: 3,
        title: "التسوق والعشاء الأخير",
        description: "التسوق صباحاً في حي الموضة. بعد الظهر زيارة كنيسة سانتا ماريا ديلي غراتسيه لمشاهدة لوحة العشاء الأخير لدافنشي (حسب التوفر)."
      },
      {
        day: 4,
        title: "المغادرة",
        description: "إفطار في الفندق، وقت حر حتى موعد النقل إلى مطار ميلانو مالبينسا للمغادرة."
      }
    ],
    gallery: [
      "/images/italy.jpg",
      "/images/italy2.jpg",
      "/images/italy 3.jpg",
      "/images/italy4.jpg",
      "/images/italy 5.jpg"
    ]
  },
  {
    id: "mauritius",
    title: "موريشيوس",
    destination: "موريشيوس",
    category: "asia",
    days: "5 أيام",
    description: "فندق 5 نجوم مع إفطار، نقل من وإلى المطار وجولات",
    price: "3,500 ريال",
    priceDetail: "لشخصين",
    image: "/images/Mauritius.jpg",
    video: "/videos/Mauritius.mp4",
    featured: true,
    highlights: [
      "استرخ على شواطئ الرمال البيضاء النقية",
      "استكشف العاصمة الملونة بورت لويس",
      "زيارة الأراضي السبع الملونة في شامارل",
      "تجربة الرياضات المائية والأنشطة البحرية"
    ],
    inclusions: [
      "النقل من وإلى المطار",
      "إقامة 4 ليالي في منتجع شاطئي 5 نجوم",
      "إفطار يومي",
      "جولة في الجزيرة",
      "جولة في مدينة بورت لويس",
      "أنشطة رياضات مائية"
    ],
    itinerary: [
      {
        day: 1,
        title: "الوصول إلى موريشيوس",
        description: "الوصول إلى مطار سير سيوساغور رامغولام الدولي، الاستقبال والمساعدة، النقل إلى منتجعك الشاطئي. باقي اليوم حر."
      },
      {
        day: 2,
        title: "جولة في جنوب الجزيرة",
        description: "جولة كاملة في جنوب الجزيرة تشمل الأراضي السبع الملونة في شامارل، متنزه بلاك ريفر غورجز الوطني، وبحيرة غراند باسان المقدسة."
      },
      {
        day: 3,
        title: "بورت لويس وجولة الشمال",
        description: "زيارة العاصمة بورت لويس بما في ذلك السوق المركزي، متحف البيني الأزرق، وواجهة كودان البحرية. بعد الظهر في كاب مالهورو وغراند باي."
      },
      {
        day: 4,
        title: "الشاطئ والأنشطة المائية",
        description: "يوم حر على الشاطئ مع أنشطة رياضات مائية مشمولة مثل الغوص السطحي، القارب ذو القاع الزجاجي، والتجديف بالكاياك."
      },
      {
        day: 5,
        title: "المغادرة",
        description: "إفطار في الفندق، وقت حر حتى موعد النقل إلى مطار سير سيوساغور رامغولام الدولي للمغادرة."
      }
    ],
    gallery: [
      "/images/Mauritius.jpg",
      "/images/Mauritius 1.webp",
      "/images/Mauritius 3.jpg"
    ]
  },
  {
    id: "cairo-summer",
    title: "عرض القاهرة الصيفي",
    destination: "مصر",
    category: "middle-east",
    days: "6 أيام",
    description: "5 ليالي في فندق تاج القاهرة، إفطار يومي، جولات خاصة، نقل من وإلى المطار",
    price: "2,800 ريال",
    priceDetail: "للشخص في غرفة مزدوجة",
    image: "/images/cairo.jpg",
    featured: true,
    highlights: [
      "إقامة في فندق تاج القاهرة 4 نجوم في الدقي",
      "الاستمتاع برحلة نيلية",
      "زيارة برج القاهرة الشهير",
      "استكشاف القاهرة القديمة والحديثة",
      "تجربة أهرامات الجيزة العظيمة",
      "التسوق في خان الخليلي والمولات العصرية"
    ],
    inclusions: [
      "إقامة 5 ليالي في فندق تاج القاهرة 4 نجوم",
      "إفطار يومي",
      "واي فاي مجاني في الفندق",
      "النقل من وإلى المطار",
      "شريحة مصرية مع إنترنت ومكالمات محلية",
      "سيارة خاصة لجميع الجولات",
      "جميع رسوم دخول المواقع المذكورة"
    ],
    itinerary: [
      {
        day: 1,
        title: "قلب القاهرة النابض",
        description: "زيارة برج القاهرة، الاستمتاع برحلة نيلية، واستكشاف ممشى أهل مصر."
      },
      {
        day: 2,
        title: "القاهرة القديمة والحديثة",
        description: "استكشاف القاهرة فستيفال سيتي، شارع المعز، زيارة مطعم صاحب السعادة، مقهى أم كلثوم، وخان الخليلي."
      },
      {
        day: 3,
        title: "عجائب الدنيا السبع",
        description: "زيارة أهرامات الجيزة وأبو الهول، استكشاف مول مصر، وتجربة قرية غزال الريم."
      },
      {
        day: 4,
        title: "سحر القاهرة الجديدة",
        description: "زيارة فاميلي بارك، المول المفتوح في مدينتي، والووتر واي في التجمع."
      },
      {
        day: 5,
        title: "يوم حر",
        description: "يوم حر لاستكشاف القاهرة حسب رغبتك أو الاستمتاع بالأنشطة الاختيارية."
      },
      {
        day: 6,
        title: "المغادرة",
        description: "إفطار في الفندق، وقت حر حتى موعد النقل إلى مطار القاهرة الدولي للمغادرة."
      }
    ],
    gallery: [
      "/images/cairo.jpg",
      "/images/cairo-1.jpg",
      "/images/cairo-2.jpg",
      "/images/cairo-3.jpg",
      "/images/cairo-4.jpg"
    ]
  },
  {
    id: "istanbul-turkey",
    title: "إسطنبول، تركيا",
    destination: "تركيا",
    category: "middle-east",
    days: "5 أيام",
    description: "فندق 4 نجوم مع إفطار، نقل خاص، جولة تسوق",
    price: "2,500 ريال",
    priceDetail: "لشخصين",
    image: "/images/turkey.jpg",
    video: "/videos/turkey.mp4",
    featured: true,
    highlights: [
      "زيارة المسجد الأزرق وآيا صوفيا الأيقونية",
      "استكشاف قصر توبكابي التاريخي",
      "الاستمتاع برحلة بحرية في مضيق البوسفور بين أوروبا وآسيا",
      "تجربة السوق الكبير والسوق المصري"
    ],
    inclusions: [
      "النقل من وإلى المطار في سيارة خاصة",
      "إقامة 4 ليالي في فندق 4 نجوم",
      "إفطار يومي",
      "جولة كاملة في مدينة إسطنبول",
      "جولة تسوق مع مرشد",
      "رحلة البوسفور"
    ],
    itinerary: [
      {
        day: 1,
        title: "الوصول إلى إسطنبول",
        description: "الوصول إلى مطار إسطنبول، الاستقبال والترحيب من ممثلنا، النقل إلى الفندق. باقي اليوم حر."
      },
      {
        day: 2,
        title: "جولة إسطنبول التاريخية",
        description: "جولة كاملة لزيارة المسجد الأزرق، آيا صوفيا، قصر توبكابي، وصهريج بازيليكا."
      },
      {
        day: 3,
        title: "رحلة البوسفور والتسوق",
        description: "رحلة بحرية صباحية في البوسفور لمشاهدة الجانبين الأوروبي والآسيوي من إسطنبول. جولة تسوق بعد الظهر في السوق الكبير والسوق المصري."
      },
      {
        day: 4,
        title: "يوم حر أو جولات اختيارية",
        description: "يوم حر للراحة أو جولات اختيارية إلى جزر الأميرات أو قصر دولمابهتشه."
      },
      {
        day: 5,
        title: "المغادرة",
        description: "إفطار في الفندق، وقت حر حتى موعد النقل إلى مطار إسطنبول للمغادرة."
      }
    ],
    gallery: [
      "/images/turkey.jpg",
      "/images/turkey (2).jpg",
      "/images/turkey (3).jpg",
      "/images/turkey (4).jpg",
      "/images/turkey (5).jpg"
    ]
  },
  {
    id: "trabzon-turkey",
    title: "طرابزون، تركيا",
    destination: "تركيا",
    category: "middle-east",
    days: "5 أيام",
    description: "فندق مع إفطار، الجولات السياحية مشمولة",
    price: "2,000 ريال",
    priceDetail: "لشخصين",
    image: "/images/turkey (2).jpg",
    video: "/videos/turkey.mp4",
    featured: false,
    highlights: [
      "زيارة دير سوميلا التاريخي",
      "استكشاف بحيرة أوزنجول الجميلة",
      "تجربة الجبال الخضراء في منطقة البحر الأسود",
      "تذوق المأكولات التقليدية لمنطقة البحر الأسود"
    ],
    inclusions: [
      "النقل من وإلى المطار",
      "إقامة 4 ليالي",
      "إفطار يومي",
      "جولة دير سوميلا",
      "جولة بحيرة أوزنجول",
      "مرشد سياحي محلي"
    ],
    itinerary: [
      {
        day: 1,
        title: "الوصول إلى طرابزون",
        description: "الوصول إلى مطار طرابزون، الاستقبال والمساعدة، النقل إلى الفندق. باقي اليوم حر."
      },
      {
        day: 2,
        title: "جولة دير سوميلا",
        description: "جولة كاملة إلى دير سوميلا التاريخي المبني في الجرف الجبلي."
      },
      {
        day: 3,
        title: "جولة بحيرة أوزنجول",
        description: "رحلة يومية إلى بحيرة أوزنجول الجميلة المحاطة بالجبال والغابات."
      },
      {
        day: 4,
        title: "جولة مدينة طرابزون",
        description: "استكشاف مدينة طرابزون بما في ذلك آيا صوفيا طرابزون، قصر أتاتورك، والأسواق المحلية."
      },
      {
        day: 5,
        title: "المغادرة",
        description: "إفطار في الفندق، وقت حر حتى موعد النقل إلى مطار طرابزون للمغادرة."
      }
    ],
    gallery: [
      "/images/turkey (2).jpg",
      "/images/turkey (3).jpg",
      "/images/turkey (4).jpg",
      "/images/turkey (5).jpg"
    ]
  }
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