export const siteConfig = {
  name: "Tropical Trips & Travel",
  tagline: "No es un viaje. Es la historia que vas a contar.",
  phone: "+506 8888 8888", // Número configurable
  whatsapp: "50688888888",
  email: "jcaotravel@gmail.com",
  address: "Nicaragua & Costa Rica",
  social: {
    instagram: "https://www.instagram.com/tropicaltripstravel",
    facebook: "https://www.facebook.com/profile.php?id=61591397281587",
    tiktok: "https://www.tiktok.com/@tropicaltripstravel",
  },
};

export interface Tour {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  location: string;
  image: string;
  lat: number;
  lng: number;
  tag?: string;
  includes: string[];
  details: string[];
  experiences: string[];
  itinerary: { time: string; activity: string }[];
  meetingPoint: string;
}

export const tours: Tour[] = [
  {
    id: "granada-colonial",
    name: "Granada Colonial y Cultural",
    description: "Descubre la rica arquitectura colonial de Granada, la Gran Sultana, en un recorrido en coche halado por caballos, paseo en bote por el Lago Cocibolca y visita a una fábrica de chocolate local.",
    price: 90,
    duration: "9 a 11 horas",
    location: "Granada, Nicaragua",
    lat: 11.9298,
    lng: -85.9529,
    image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=1200&q=80",
    tag: "Cultural",
    includes: [
      "Transporte desde y hasta su hotel",
      "Guía Bilingüe",
      "Paseo en coche halado por caballos",
      "Paseo en bote por el Lago Cocibolca",
      "Entradas a sitios",
      "Almuerzo en isla del lago",
      "Fotografía digital",
    ],
    details: [
      "Recogida en tu hotel en Granada",
      "Duración aproximada de 9 a 11 horas",
      "Recorrido en coches halados por caballos",
      "Paseo en bote por las 360 isletas del lago",
      "Almuerzo en una isla con vista privilegiada",
    ],
    experiences: [
      "Recorrer las calles coloniales en coche halado por caballos",
      "Navegar por el Gran Lago Cocibolca entre isletas",
      "Visitar el Fuerte San Pablo y conocer su historia",
      "Degustar chocolate nicaragüense en fábrica local",
    ],
    itinerary: [
      { time: "8:00 AM", activity: "Recogida en hotel y recorrido en coche por Granada" },
      { time: "10:00 AM", activity: "Paseo en bote por el Lago Cocibolca y visita al Fuerte San Pablo" },
      { time: "12:30 PM", activity: "Almuerzo en isla del lago con vista panorámica" },
      { time: "2:30 PM", activity: "Visita a fábrica de chocolate local" },
      { time: "4:00 PM", activity: "Tiempo libre en el centro histórico de Granada" },
      { time: "5:00 PM", activity: "Regreso al hotel" },
    ],
    meetingPoint: "Hotel en Granada (te recogemos en la recepción) o punto acordado en el centro histórico.",
  },
  {
    id: "amo-el-agua",
    name: "Amo el Agua — Cascadas y Aventura",
    description: "Si amas el agua y la naturaleza, este tour es para ti. Visitamos 4 cascadas espectaculares en Rincón de la Vieja, con caminata de aventura, puentes colgantes y pozas naturales.",
    price: 130,
    duration: "8 a 10 horas",
    location: "Rincón de la Vieja, Costa Rica",
    lat: 10.7733,
    lng: -85.3467,
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1200&q=80",
    tag: "Aventura",
    includes: [
      "Guía Bilingüe",
      "Entradas a sitios",
      "Almuerzo estilo buffet en Hacienda Guachipelín",
      "Transporte desde hotel",
      "Frutas, agua y bebidas",
    ],
    details: [
      "Recogida en hotel en Guanacaste",
      "Caminata de 3 horas ida y vuelta (exigente)",
      "4 cascadas diferentes en un día",
      "Pozas naturales para nadar y relajarse",
      "Opción de combinar con aguas termales, cabalgata, zip line o tubing",
    ],
    experiences: [
      "Caminar al Parque Nacional Rincón de la Vieja",
      "Bañarte en la Cascada La Cangreja de aguas turquesa",
      "Cruzar puentes colgantes sobre el bosque",
      "Relajarte en Poza Los Coyotes al final del día",
    ],
    itinerary: [
      { time: "6:30 AM", activity: "Recogida en hotel y traslado al Parque Nacional Rincón de la Vieja" },
      { time: "8:00 AM", activity: "Caminata a Cascada La Cangreja (3 horas)" },
      { time: "11:00 AM", activity: "Parada en segunda cascada para fotos y descanso" },
      { time: "12:30 PM", activity: "Almuerzo buffet en Hacienda Guachipelín" },
      { time: "2:00 PM", activity: "Tour por Rio Blanco y Chorreras" },
      { time: "4:00 PM", activity: "Poza Los Coyotes — natación y relajación" },
      { time: "5:00 PM", activity: "Regreso al hotel" },
    ],
    meetingPoint: "Hotel en Guanacaste (te recogemos en la recepción). Para hospedajes fuera del área, coordinar punto de encuentro.",
  },
  {
    id: "rio-celeste",
    name: "Río Celeste — El Azul del Cielo",
    description: "El Río Celeste es un río mágico de color turquesa escondido en el Parque Nacional Volcán Tenorio. Caminata por el bosque lluvioso, cascada escondida y opciones de tubing, perezosos o café y chocolate.",
    price: 110,
    duration: "7 a 8 horas",
    location: "Volcán Tenorio, Costa Rica",
    lat: 10.6735,
    lng: -84.9906,
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80",
    tag: "Naturaleza",
    includes: [
      "Entradas al parque",
      "Guía Bilingüe",
      "Transporte ida y regreso desde tu hotel",
      "Almuerzo",
      "Una de las opciones (perezosos, café/chocolate o tubing)",
      "Fotografía de recuerdo",
    ],
    details: [
      "Duración aproximada de 7 a 8 horas",
      "Caminata de 2 horas por el bosque lluvioso",
      "3 variantes para elegir: perezosos, café/chocolate o tubing",
      "Recogida en hoteles de Guanacaste",
      "Nivel de dificultad moderado",
    ],
    experiences: [
      "Caminar por el bosque lluvioso hasta el Río Celeste",
      "Ver la cascada de aguas turquesa en medio de la selva",
      "Elegir entre tubing, perezosos o café y chocolate",
      "Capturar las mejores fotos de tu viaje",
    ],
    itinerary: [
      { time: "6:00 AM", activity: "Recogida en hotel y traslado al Volcán Tenorio" },
      { time: "8:00 AM", activity: "Ingreso al parque y caminata de 2 horas" },
      { time: "10:00 AM", activity: "Llegada al Río Celeste y cascada — fotos y descanso" },
      { time: "11:30 AM", activity: "Actividad adicional según variante elegida" },
      { time: "1:00 PM", activity: "Almuerzo" },
      { time: "2:30 PM", activity: "Regreso al hotel" },
    ],
    meetingPoint: "Hotel en Guanacaste (recogida en recepción). Coordinar si estás en otro sector.",
  },
  {
    id: "rincon-de-la-vieja",
    name: "Volcanes, Cascadas y Piscinas de Barro",
    description: "Explora el Parque Nacional Rincón de la Vieja, un volcán activo con fumarolas, pozas de agua y barro mineral. Caminata por bosque seco, aguas termales y cascadas impresionantes.",
    price: 120,
    duration: "8 a 9 horas",
    location: "Rincón de la Vieja, Costa Rica",
    lat: 10.7733,
    lng: -85.3467,
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
    tag: "Aventura",
    includes: [
      "Transporte desde el hotel",
      "Guía Certificado Bilingüe",
      "Almuerzo en Hacienda Guachipelín",
      "Aguas y Bebidas",
      "Entradas al Parque",
      "Aguas termales",
      "Acceso a cascadas Río Negro",
      "Foto recuerdo",
    ],
    details: [
      "Duración de 8 a 9 horas",
      "Dificultad media",
      "Avistamiento de fauna: reptiles, aves y mamíferos",
      "Fumarolas volcánicas y pozas de barro mineral",
      "Aguas termales y cascadas incluidas",
    ],
    experiences: [
      "Caminar por bosque seco con árboles centenarios",
      "Ver fumarolas volcánicas y pozas de barro",
      "Relajarte en aguas termales naturales",
      "Descubrir las cascadas del Río Negro",
    ],
    itinerary: [
      { time: "7:00 AM", activity: "Recogida en hotel y traslado al parque" },
      { time: "8:30 AM", activity: "Ingreso al Parque Nacional Rincón de la Vieja" },
      { time: "9:00 AM", activity: "Caminata guiada por senderos de bosque seco" },
      { time: "11:00 AM", activity: "Visita a fumarolas y pozas de barro" },
      { time: "12:30 PM", activity: "Almuerzo en Hacienda Guachipelín" },
      { time: "2:00 PM", activity: "Aguas termales y cascadas Río Negro" },
      { time: "4:00 PM", activity: "Regreso al hotel" },
    ],
    meetingPoint: "Hotel en Guanacaste (recogida en recepción).",
  },
  {
    id: "arenal-adventure",
    name: "Arenal — Fuego, Aire y Agua",
    description: "Vive el icónico Volcán Arenal con puentes colgantes sobre árboles centenarios, tirolesa o teleférico, y aguas termales para relajarte. Un día lleno de emociones y naturaleza.",
    price: 140,
    duration: "9 a 10 horas",
    location: "La Fortuna, Costa Rica",
    lat: 10.4714,
    lng: -84.6452,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    tag: "Popular",
    includes: [
      "Transporte desde tu hotel",
      "Guía Bilingüe",
      "Almuerzo",
      "Entradas al parque Sky Adventure",
      "Puentes colgantes (combínalo con tirolesa o teleférico)",
      "Aguas termales (Eco termales)",
      "Foto recuerdo",
    ],
    details: [
      "Duración de 9 a 10 horas",
      "Explora la diversidad biológica desde las alturas",
      "Puentes colgantes sobre árboles centenarios",
      "Opciones de tirolesa o teleférico disponibles",
      "Aguas termales minerales para relajarte",
    ],
    experiences: [
      "Caminar por puentes colgantes sobre dosel del bosque",
      "Ver el Volcán Arenal y sus paisajes volcánicos",
      "Relajarte en aguas termales Eco termales",
      "Elegir entre tirolesa o teleférico para más adrenalina",
    ],
    itinerary: [
      { time: "7:00 AM", activity: "Recogida en hotel en La Fortuna" },
      { time: "8:00 AM", activity: "Llegada a Sky Adventure — puentes colgantes" },
      { time: "10:30 AM", activity: "Actividad adicional (tirolesa o teleférico)" },
      { time: "12:30 PM", activity: "Almuerzo" },
      { time: "2:00 PM", activity: "Aguas termales Eco termales" },
      { time: "4:00 PM", activity: "Regreso al hotel" },
    ],
    meetingPoint: "Hotel en La Fortuna (recogida en recepción).",
  },
];

export interface Package {
  id: string;
  name: string;
  price: number;
  duration: string;
  description: string;
  image: string;
  features: string[];
  itinerary: { day: string; activity: string }[];
  popular: boolean;
}

export const packages: Package[] = [
  {
    id: "explorador-tropical",
    name: "Explorador Tropical",
    price: 299,
    duration: "3 días / 2 noches",
    description: "Perfecto para una escapada rápida y emocionante por volcanes y lagunas.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    features: [
      "2 noches de hotel seleccionado",
      "2 tours guiados completos",
      "Traslados internos incluidos",
      "Desayuno diario continental",
      "Guía bilingüe experto",
      "Entradas a los parques nacionales"
    ],
    itinerary: [
      { day: "Día 1", activity: "Llegada y traslado al hotel. Tarde libre para explorar el centro de la ciudad." },
      { day: "Día 2", activity: "Tour guiado de día completo: volcán y laguna. Almuerzo incluido." },
      { day: "Día 3", activity: "Desayuno y traslado de salida. Fin de la experiencia." },
    ],
    popular: false,
  },
  {
    id: "aventurero-completo",
    name: "Aventurero Completo",
    price: 599,
    duration: "5 días / 4 noches",
    description: "La experiencia definitiva para descubrir lo mejor de Nicaragua y Costa Rica.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80",
    features: [
      "4 noches de hotel (categoría turista)",
      "4 tours guiados de aventura",
      "Transporte privado terrestre",
      "Todas las comidas incluidas",
      "Guía privado para tu grupo",
      "Actividades de canopy y caminatas",
      "Asistencia en cruce de frontera"
    ],
    itinerary: [
      { day: "Día 1", activity: "Llegada a Costa Rica. Traslado al hotel en Guanacaste." },
      { day: "Día 2", activity: "Tour de día completo: Parque Nacional Rincón de la Vieja. Caminata, fumarolas y aguas termales." },
      { day: "Día 3", activity: "Tour de aventura: canopy y puentes colgantes en el bosque nuboso." },
      { day: "Día 4", activity: "Tour Río Celeste: caminata, cascada turquesa y tubing opcional." },
      { day: "Día 5", activity: "Desayuno y traslado al aeropuerto. Fin del viaje." },
    ],
    popular: true,
  },
  {
    id: "expedicion-premium",
    name: "Expedición Premium",
    price: 999,
    duration: "7 días / 6 noches",
    description: "Lujo, confort y exclusividad total recorriendo senderos y playas exóticas.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=80",
    features: [
      "6 noches de hotel boutique 5★",
      "Tours privados ilimitados",
      "Transporte premium con A/C",
      "Todas las comidas gourmet",
      "Guía personal dedicado 24/7",
      "Sesión de spa y bienestar",
      "Cena especial de bienvenida",
      "Logística de frontera VIP"
    ],
    itinerary: [
      { day: "Día 1", activity: "Llegada VIP. Traslado privado a hotel boutique en La Fortuna." },
      { day: "Día 2", activity: "Tour privado Volcán Arenal: puentes colgantes, tirolesa y aguas termales." },
      { day: "Día 3", activity: "Excursión Río Celeste con guía personal. Almuerzo gourmet." },
      { day: "Día 4", activity: "Traslado a playa. Tarde libre con spa incluido." },
      { day: "Día 5", activity: "Tour de navegación y snorkel en el Pacífico." },
      { day: "Día 6", activity: "Día libre. Cena de despedida en restaurante exclusivo." },
      { day: "Día 7", activity: "Desayuno y traslado ejecutivo al aeropuerto." },
    ],
    popular: false,
  },
];

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Alex Mayorga",
    role: "Guía Turístico",
    bio: "Hello! I have been working in tourism for 13 years in Nicaragua, which is known as the land of volcanoes and lakes. I am ready to show you the history and traditions of this beautiful land, giving you lifelong memories.",
    image: "https://tropicaltrips.travel/wp-content/uploads/elementor/thumbs/2026-04-14-2.08.09-p.-m-rm0e8p8cu4k94w2j7objy30650kk6wa9jgkp28voyo.jpg",
  },
  {
    name: "Alejandro",
    role: "Guía de Naturaleza",
    bio: "Alejandro is a nature guide who loves spending time outdoors; he’ll take you past waterfalls, rivers and through the forest to discover Costa Rica.",
    image: "https://tropicaltrips.travel/wp-content/uploads/elementor/thumbs/2026-04-14-2.08.23-p.-m-rm0e949rvh4uangorutl1z7jn6ifm1xyxj0gqo9e74.jpg",
  },
  {
    name: "Juan Pablo Gutiérrez",
    role: "Guía Turístico Nacional",
    bio: "Soy guía turístico nacional en ambos países. Me encanta mostrarle al mundo nuestro país. ¡Amo el aire libre y la naturaleza y trato de sacar lo mejor de cada experiencia cuando estás conmigo!",
    image: "https://tropicaltrips.travel/wp-content/uploads/elementor/thumbs/2026-04-14-2.08.30-p.-m-rm0e9idcpzo54sw7hiwzldngjykxtihxzgsqxtohls.jpg",
  },
  {
    name: "Alexander Ramos Cortez",
    role: "Guía General",
    bio: "I am a General Guide, passionate about animals. I love seeing people's faces when they find the animal they wanted to meet. My clients' dream is my goal.",
    image: "https://tropicaltrips.travel/wp-content/uploads/elementor/thumbs/2026-04-14-2.12.59-p.-m-rm0efesvmjqy0obn12qo8w1mt1hw53xa4o8hecxijk.jpg",
  },
  {
    name: "Santos Fuentes",
    role: "Guía General",
    bio: "Santos es un guía de Costa Rica apasionado por la naturaleza y las actividades al aire libre. Un día de excursión con él es divertido, pone toda su pasión y esfuerzo en brindar la mejor experiencia en tu visita por Costa Rica.",
    image: "https://tropicaltrips.travel/wp-content/uploads/elementor/thumbs/SANTOS-rmjp2ehtxsfn7s9trhhkngnzn57vvpy3lsetl6tctc.jpeg",
  },
  {
    name: "Julio César",
    role: "Guía Turístico",
    bio: "Julio César es un guía nicaragüense que ama la naturaleza y la aventura. Le apasiona mostrar lo mejor de Nicaragua. Conoce Nicaragua y Costa Rica a la perfección y puede llevarte a conocer los mejores sitios de ambos países.",
    image: "https://tropicaltrips.travel/wp-content/uploads/elementor/thumbs/JULIO-rmjp0t5ocw95jkl42apbxd4ven2hu6mh1wm7bb6dcw.jpeg",
  },
  {
    name: "Ulises Álvarez",
    role: "Guía Turístico & Cultural",
    bio: "Ulises pertenece a una de las etnias indígenas de Costa Rica, los Maleku. Vive una experiencia única y enriquecedora conociendo sobre cultura, historia, vida silvestre y mucho más desde su perspectiva nativa.",
    image: "https://tropicaltrips.travel/wp-content/uploads/elementor/thumbs/ULISES-rmjp3x0gy6i9x62mx51xo2wq3hr6a5yj5a8zf8kisg.jpeg",
  },
];

export interface Testimonial {
  name: string;
  country: string;
  text: string;
  rating: number;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    country: "USA 🇺🇸",
    text: "Amazing experience! The guides were incredibly knowledgeable and made us feel safe throughout the entire trip. Highly recommend!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  },
  {
    name: "Carlos Mendoza",
    country: "México 🇲🇽",
    text: "El mejor tour que he hecho en Centroamérica. La organización fue impecable y los paisajes increíbles. Volveré sin duda.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  },
  {
    name: "Emma Wilson",
    country: "UK 🇬🇧",
    text: "Tropical Trips made our honeymoon unforgettable. The custom package was perfectly tailored to what we wanted. 10/10!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005162-d76694265947?w=100&q=80",
  },
];

export const stats = [
  { value: "1000+", label: "Viajeros felices" },
  { value: "2", label: "Países (CR & NI)" },
  { value: "13+", label: "Años de experiencia" },
  { value: "4.9★", label: "Calificación promedio" },
];

export const clientGallery = [
  "https://tropicaltrips.travel/wp-content/uploads/2026/04/Dloo-4DUUAATynw.jpg",
  "https://tropicaltrips.travel/wp-content/uploads/2026/04/Cascada.jpeg",
  "https://tropicaltrips.travel/wp-content/uploads/2026/04/Granada-scaled.jpeg",
  "https://tropicaltrips.travel/wp-content/uploads/2026/04/Laguna.jpeg",
  "https://tropicaltrips.travel/wp-content/uploads/2026/04/Leon.jpeg",
  "https://tropicaltrips.travel/wp-content/uploads/2026/04/Ometepe-1.png",
  "https://tropicaltrips.travel/wp-content/uploads/2026/04/20220615_135828-scaled-800x1000-1.jpg",
];
