"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { tours, packages, testimonials, teamMembers, type Tour, type Package, type Testimonial, type TeamMember } from "./data";

export type Lang = "es" | "en";

const ui: Record<Lang, Record<string, string>> = {
  es: {
    "nav.inicio": "Inicio",
    "nav.tours": "Tours",
    "nav.paquetes": "Paquetes",
    "nav.nosotros": "Nosotros",
    "nav.contacto": "Contacto",
    "nav.openMenu": "Abrir menú",
    "nav.closeMenu": "Cerrar menú",

    "hero.rating": "4.9/5 · Más de 1000 viajeros felices",
    "hero.tagline1": "No es un viaje",
    "hero.tagline2": "Es la historia que vas a contar",
    "hero.subtitle":
      "Descubre Centroamérica con experiencias diseñadas a tu medida en Nicaragua y Costa Rica. Naturaleza, aventura y cultura en un solo viaje.",
    "hero.ctaTours": "Explorar Tours",
    "hero.ctaReserve": "Reservar Ahora",
    "hero.trust1": "Sin costo extra",
    "hero.trust2": "Cancelación gratis",
    "hero.trust3": "Guías locales",
    "hero.scroll": "Descubre",

    "stats.1": "Viajeros felices",
    "stats.2": "Países (CR & NI)",
    "stats.3": "Años de experiencia",
    "stats.4": "Calificación promedio",

    "tp.badge": "Nuestras Experiencias",
    "tp.title": "Tours que inspiran historias",
    "tp.desc":
      "Desde excursiones de un día hasta senderos y escapadas a medida. Elige la aventura ideal y vívela al máximo.",
    "tp.details": "Ver Detalles",
    "tp.all": "Ver Todos los Tours",

    "gal.badge": "Galería",
    "gal.title": "Momentos que inspiran",
    "gal.desc":
      "Cada destino guarda una historia. Mirá lo que nuestros viajeros han vivido en Centroamérica.",
    "gal.close": "Cerrar",
    "gal.prev": "Anterior",
    "gal.next": "Siguiente",

    "ts.badge": "Testimonios",
    "ts.title": "Lo que opinan nuestros viajeros",
    "ts.desc":
      "Experiencias reales de personas reales que descubrieron Nicaragua y Costa Rica con nosotros.",

    "cta.badge": "¿Listo para vivir la experiencia?",
    "cta.title1": "Tu próxima aventura",
    "cta.title2": "te espera",
    "cta.desc":
      "Contáctanos hoy y diseñemos juntos el viaje perfecto por Nicaragua y Costa Rica. Personalizado, sin complicaciones y con guías 100% locales.",
    "cta.contact": "Contáctanos",
    "cta.email": "Correo Electrónico",

    "ft.desc":
      "Descubre los mejores destinos de ecoturismo, lagos, volcanes y cultura en Nicaragua y Costa Rica guiado por expertos locales.",
    "ft.links": "Enlaces",
    "ft.contact": "Contacto Directo",
    "ft.rights": "Todos los derechos reservados.",

    "tours.badge": "Experiencias",
    "tours.title": "Nuestros Tours",
    "tours.desc":
      "Desde escaladas de volcanes activos hasta cascadas mágicas y tours de un día. Elige tu próxima aventura.",
    "tours.details": "Ver Detalles",

    "td.back": "Volver a tours",
    "td.about": "Sobre este tour",
    "td.aboutSub": "Información general",
    "td.includes": "Incluye",
    "td.details": "Detalles",
    "td.live": "Vive la experiencia",
    "td.experiences": "Experiencias",
    "td.itinerary": "Itinerario",
    "td.itinerarySub": "Día a día del tour",
    "td.meeting": "Punto de Encuentro",
    "td.mapBtn": "Ver en mapa",
    "td.say": "Lo que dicen nuestros viajeros",
    "td.saySub": "Opiniones reales",
    "td.price": "Precio por persona",
    "td.taxes": "Impuestos y tasas",
    "td.included": "Incluidos",
    "td.cancel": "Cancelación",
    "td.free": "Gratuita",
    "td.hurry": "No pierdas tu cupo. Los espacios se llenan rápido.",
    "td.info": "Info rápida",
    "td.maxPeople": "Máx. 8 personas",
    "td.certGuide": "Guía certificado",
    "td.location": "Ubicación",
    "td.perPers": "/pers",
    "td.trust1": "Reserva 100% segura",
    "td.trust2": "Cancelación gratuita",
    "td.trust3": "Grupos reducidos",
    "td.trust4": "Mejor precio garantizado",

    "pp.badge": "Planes Completos",
    "pp.title": "Paquetes Todo Incluido",
    "pp.desc":
      "Diseñados para tu comodidad. Hoteles, tours, transporte y guías organizados para que solo disfrutes.",
    "pp.recommended": "Recomendado",
    "pp.more": "+{n} más",
    "pp.details": "Ver Detalles",

    "pd.back": "Volver a paquetes",
    "pd.recommended": "Recomendado",
    "pd.includes": "¿Qué incluye este paquete?",
    "pd.itinerary": "Itinerario",
    "pd.itinerarySub": "Día a día del paquete",
    "pd.price": "Precio por persona",
    "pd.duration": "Duración",
    "pd.taxes": "Impuestos",
    "pd.included": "Incluidos",
    "pd.cancel": "Cancelación",
    "pd.free": "Gratuita",
    "pd.hurry": "Los espacios se llenan rápido.",
    "pd.info": "Info rápida",
    "pd.allIncluded": "Todo incluido",
    "pd.region": "Nicaragua & Costa Rica",

    "ab.badge": "Nosotros",
    "ab.title": "Somos Tropical Trips & Travel",
    "ab.desc":
      "Nacimos con una misión: mostrar al mundo la belleza natural, la aventura y la cultura auténtica de Nicaragua y Costa Rica.",
    "ab.storyBadge": "Nuestra Historia",
    "ab.storyTitle1": "Más que un tour,",
    "ab.storyTitle2": "una experiencia de vida",
    "ab.para1":
      "Tropical Trips & Travel nació del amor por Centroamérica. Somos un equipo de guías locales apasionados que decidimos unir fuerzas para mostrarle al mundo los tesoros escondidos de Nicaragua y Costa Rica.",
    "ab.para2":
      "Desde las calles coloniales de Granada hasta las aguas turquesa del Río Celeste, pasando por volcanes activos, bosques nubosos y playas paradisíacas — cada ruta que diseñamos busca conectarte con la esencia de nuestra tierra.",
    "ab.para3":
      "No creemos en los tours genéricos. Cada viaje lo construimos contigo, basándonos en tus intereses, tu ritmo y tus sueños. Porque para nosotros, no es un viaje — es la historia que vas a contar.",
    "ab.missionTitle": "Nuestra Misión",
    "ab.missionText":
      "Transformar cada viaje en una experiencia inolvidable, conectando a nuestros viajeros con la autenticidad, la naturaleza y la cultura de Centroamérica a través de guías locales apasionados y un servicio personalizado.",
    "ab.visionTitle": "Nuestra Visión",
    "ab.visionText":
      "Ser la agencia de viajes líder en Centroamérica, reconocida por nuestra autenticidad, responsabilidad con el medio ambiente y la capacidad de crear historias que nuestros viajeros llevan en el corazón para siempre.",
    "ab.whyBadge": "¿Por qué nosotros?",
    "ab.whyTitle": "Viaja con confianza",
    "ab.whyDesc":
      "No somos una agencia más. Somos locales, apasionados y comprometidos con tu experiencia.",
    "ab.h1": "2 Países",
    "ab.h1d": "Nicaragua y Costa Rica, los destinos más biodiversos de Centroamérica.",
    "ab.h2": "13+ Años",
    "ab.h2d": "De experiencia guiando viajeros de todo el mundo.",
    "ab.h3": "Guías Locales",
    "ab.h3d": "Conocimiento auténtico de cada rincón, cultura e historia.",
    "ab.h4": "Viajes a Medida",
    "ab.h4d": "Cada itinerario se diseña pensando en tus sueños.",
    "ab.valuesBadge": "Nuestra Esencia",
    "ab.valuesTitle": "Valores que nos definen",
    "ab.valuesDesc":
      "Guiamos cada paso de tu aventura basándonos en la responsabilidad, la honestidad y el respeto local.",
    "ab.v1": "Pasión",
    "ab.v1d": "Amamos lo que hacemos y se nota en cada experiencia y detalle.",
    "ab.v2": "Autenticidad",
    "ab.v2d": "Experiencias reales, conectando con las comunidades locales.",
    "ab.v3": "Seguridad",
    "ab.v3d": "Guías capacitados, transporte confiable y protocolos de seguridad.",
    "ab.v4": "Excelencia",
    "ab.v4d": "Cuidamos cada detalle para garantizar tu viaje soñado.",
    "ab.teamBadge": "Equipo",
    "ab.teamTitle": "Conocé a tus guías",
    "ab.teamDesc":
      "Apasionados profesionales locales listos para mostrarte la historia, tradiciones y naturaleza silvestre de Centroamérica.",
    "ab.ctaTitle": "¿Listo para tu próxima historia?",
    "ab.ctaDesc":
      "Dejanos ser parte de tu viaje. Te prometemos que no será solo un destino — será una experiencia que recordarás siempre.",
    "ab.ctaContact": "Contáctanos",
    "ab.ctaTours": "Ver Tours",

    "ct.badge": "Contacto",
    "ct.title1": "Hablemos de tu",
    "ct.title2": "Aventura",
    "ct.desc": "Diseñemos juntos la historia de tu próximo viaje por Nicaragua y Costa Rica.",
    "ct.b1": "Respuesta en menos de 24 horas",
    "ct.b2": "Sin compromiso ni costo",
    "ct.b3": "Atención personalizada",
    "ct.formTitle": "Envíanos un Mensaje",
    "ct.formSub": "Completa el formulario y te responderemos a la brevedad.",
    "ct.lName": "Nombre Completo",
    "ct.lEmail": "Correo Electrónico",
    "ct.lPhone": "Teléfono / WhatsApp",
    "ct.lTour": "Tour de Interés",
    "ct.lMessage": "Mensaje",
    "ct.pName": "Tu nombre",
    "ct.pEmail": "tu@correo.com",
    "ct.pPhone": "+506 8888 8888",
    "ct.pSelect": "Selecciona un tour",
    "ct.pMessage":
      "Cuéntanos sobre tu viaje ideal: fechas, destino, número de personas, lo que sea que sueñes...",
    "ct.optCustom": "Itinerario personalizado",
    "ct.optOther": "Otro / Consulta general",
    "ct.submit": "Enviar Mensaje",
    "book": "Reservar ahora",
    "ct.privacy": "Tus datos están seguros. No compartimos información con terceros.",
    "ct.sEmail": "Correo Directo",
    "ct.sResp": "Respuesta en menos de 24h",
    "ct.sPhone": "WhatsApp / Teléfono",
    "ct.sRegion": "Área de Operación",
    "ct.sTours": "Tours en toda la región",
    "ct.trust1": "Reserva 100% segura",
    "ct.trust2": "Cancelación gratuita",

    "map.open": "Ver en mapa grande",
    "cal.title": "Disponibilidad",
    "cal.available": "Disponible",
    "cal.unavailable": "No disponible",
    "cal.line": "{day} de {month} del {year} — Disponible",
    "btn.reserve": "Reservar ahora",
  },
  en: {
    "nav.inicio": "Home",
    "nav.tours": "Tours",
    "nav.paquetes": "Packages",
    "nav.nosotros": "About",
    "nav.contacto": "Contact",
    "nav.openMenu": "Open menu",
    "nav.closeMenu": "Close menu",

    "hero.rating": "4.9/5 · 1000+ happy travelers",
    "hero.tagline1": "It's not a trip",
    "hero.tagline2": "It's the story you'll tell",
    "hero.subtitle":
      "Discover Central America with experiences tailored to you in Nicaragua and Costa Rica. Nature, adventure and culture in one trip.",
    "hero.ctaTours": "Explore Tours",
    "hero.ctaReserve": "Book Now",
    "hero.trust1": "No extra cost",
    "hero.trust2": "Free cancellation",
    "hero.trust3": "Local guides",
    "hero.scroll": "Discover",

    "stats.1": "Happy travelers",
    "stats.2": "Countries (CR & NI)",
    "stats.3": "Years of experience",
    "stats.4": "Average rating",

    "tp.badge": "Our Experiences",
    "tp.title": "Tours that inspire stories",
    "tp.desc":
      "From one-day excursions to trails and custom getaways. Choose your ideal adventure and live it to the fullest.",
    "tp.details": "View Details",
    "tp.all": "See All Tours",

    "gal.badge": "Gallery",
    "gal.title": "Moments that inspire",
    "gal.desc":
      "Every destination holds a story. See what our travelers have experienced in Central America.",
    "gal.close": "Close",
    "gal.prev": "Previous",
    "gal.next": "Next",

    "ts.badge": "Testimonials",
    "ts.title": "What our travelers say",
    "ts.desc":
      "Real experiences from real people who discovered Nicaragua and Costa Rica with us.",

    "cta.badge": "Ready for the experience?",
    "cta.title1": "Your next adventure",
    "cta.title2": "awaits you",
    "cta.desc":
      "Contact us today and let's design the perfect trip through Nicaragua and Costa Rica. Personalized, hassle-free and with 100% local guides.",
    "cta.contact": "Contact Us",
    "cta.email": "Email Us",

    "ft.desc":
      "Discover the best ecotourism destinations, lakes, volcanoes and culture in Nicaragua and Costa Rica with local expert guides.",
    "ft.links": "Links",
    "ft.contact": "Direct Contact",
    "ft.rights": "All rights reserved.",

    "tours.badge": "Experiences",
    "tours.title": "Our Tours",
    "tours.desc":
      "From active volcano climbs to magical waterfalls and day tours. Choose your next adventure.",
    "tours.details": "View Details",

    "td.back": "Back to tours",
    "td.about": "About this tour",
    "td.aboutSub": "General information",
    "td.includes": "Includes",
    "td.details": "Details",
    "td.live": "Live the experience",
    "td.experiences": "Experiences",
    "td.itinerary": "Itinerary",
    "td.itinerarySub": "Day by day",
    "td.meeting": "Meeting Point",
    "td.mapBtn": "View on map",
    "td.say": "What our travelers say",
    "td.saySub": "Real reviews",
    "td.price": "Price per person",
    "td.taxes": "Taxes and fees",
    "td.included": "Included",
    "td.cancel": "Cancellation",
    "td.free": "Free",
    "td.hurry": "Don't miss your spot. Spaces fill up fast.",
    "td.info": "Quick info",
    "td.maxPeople": "Max. 8 people",
    "td.certGuide": "Certified guide",
    "td.location": "Location",
    "td.perPers": "/pers",
    "td.trust1": "100% secure booking",
    "td.trust2": "Free cancellation",
    "td.trust3": "Small groups",
    "td.trust4": "Best price guaranteed",

    "pp.badge": "All-Inclusive Plans",
    "pp.title": "All-Inclusive Packages",
    "pp.desc":
      "Designed for your comfort. Hotels, tours, transportation and guides organized so you can just enjoy.",
    "pp.recommended": "Recommended",
    "pp.more": "+{n} more",
    "pp.details": "View Details",

    "pd.back": "Back to packages",
    "pd.recommended": "Recommended",
    "pd.includes": "What's included in this package?",
    "pd.itinerary": "Itinerary",
    "pd.itinerarySub": "Day by day",
    "pd.price": "Price per person",
    "pd.duration": "Duration",
    "pd.taxes": "Taxes",
    "pd.included": "Included",
    "pd.cancel": "Cancellation",
    "pd.free": "Free",
    "pd.hurry": "Spaces fill up fast.",
    "pd.info": "Quick info",
    "pd.allIncluded": "All included",
    "pd.region": "Nicaragua & Costa Rica",

    "ab.badge": "About Us",
    "ab.title": "We are Tropical Trips & Travel",
    "ab.desc":
      "We were born with a mission: to show the world the natural beauty, adventure and authentic culture of Nicaragua and Costa Rica.",
    "ab.storyBadge": "Our Story",
    "ab.storyTitle1": "More than a tour,",
    "ab.storyTitle2": "a life experience",
    "ab.para1":
      "Tropical Trips & Travel was born out of love for Central America. We are a team of passionate local guides who joined forces to show the world the hidden treasures of Nicaragua and Costa Rica.",
    "ab.para2":
      "From the colonial streets of Granada to the turquoise waters of Río Celeste, through active volcanoes, cloud forests and paradisiacal beaches — every route we design seeks to connect you with the essence of our land.",
    "ab.para3":
      "We don't believe in generic tours. Every trip is built with you, based on your interests, your pace and your dreams. Because for us, it's not a trip — it's the story you'll tell.",
    "ab.missionTitle": "Our Mission",
    "ab.missionText":
      "To turn every trip into an unforgettable experience, connecting our travelers with the authenticity, nature and culture of Central America through passionate local guides and personalized service.",
    "ab.visionTitle": "Our Vision",
    "ab.visionText":
      "To be the leading travel agency in Central America, recognized for our authenticity, environmental responsibility and the ability to create stories our travelers carry in their hearts forever.",
    "ab.whyBadge": "Why us?",
    "ab.whyTitle": "Travel with confidence",
    "ab.whyDesc":
      "We're not just another agency. We are locals, passionate and committed to your experience.",
    "ab.h1": "2 Countries",
    "ab.h1d": "Nicaragua and Costa Rica, the most biodiverse destinations in Central America.",
    "ab.h2": "13+ Years",
    "ab.h2d": "Of experience guiding travelers from around the world.",
    "ab.h3": "Local Guides",
    "ab.h3d": "Authentic knowledge of every corner, culture and history.",
    "ab.h4": "Custom Trips",
    "ab.h4d": "Every itinerary is designed around your dreams.",
    "ab.valuesBadge": "Our Essence",
    "ab.valuesTitle": "Values that define us",
    "ab.valuesDesc":
      "We guide every step of your adventure based on responsibility, honesty and local respect.",
    "ab.v1": "Passion",
    "ab.v1d": "We love what we do and it shows in every experience and detail.",
    "ab.v2": "Authenticity",
    "ab.v2d": "Real experiences, connecting with local communities.",
    "ab.v3": "Safety",
    "ab.v3d": "Trained guides, reliable transportation and safety protocols.",
    "ab.v4": "Excellence",
    "ab.v4d": "We take care of every detail to guarantee your dream trip.",
    "ab.teamBadge": "Team",
    "ab.teamTitle": "Meet your guides",
    "ab.teamDesc":
      "Passionate local professionals ready to show you the history, traditions and wildlife of Central America.",
    "ab.ctaTitle": "Ready for your next story?",
    "ab.ctaDesc":
      "Let us be part of your trip. We promise it won't just be a destination — it will be an experience you'll always remember.",
    "ab.ctaContact": "Contact Us",
    "ab.ctaTours": "View Tours",

    "ct.badge": "Contact",
    "ct.title1": "Let's talk about your",
    "ct.title2": "Adventure",
    "ct.desc": "Let's design the story of your next trip through Nicaragua and Costa Rica together.",
    "ct.b1": "Reply within 24 hours",
    "ct.b2": "No commitment or cost",
    "ct.b3": "Personalized service",
    "ct.formTitle": "Send us a Message",
    "ct.formSub": "Fill out the form and we'll get back to you shortly.",
    "ct.lName": "Full Name",
    "ct.lEmail": "Email Address",
    "ct.lPhone": "Phone / WhatsApp",
    "ct.lTour": "Tour of Interest",
    "ct.lMessage": "Message",
    "ct.pName": "Your name",
    "ct.pEmail": "you@email.com",
    "ct.pPhone": "+506 8888 8888",
    "ct.pSelect": "Select a tour",
    "ct.pMessage":
      "Tell us about your ideal trip: dates, destination, number of people, whatever you dream of...",
    "ct.optCustom": "Custom itinerary",
    "ct.optOther": "Other / General inquiry",
    "ct.submit": "Send Message",
    "book": "Book now",
    "ct.privacy": "Your data is safe. We don't share information with third parties.",
    "ct.sEmail": "Direct Email",
    "ct.sResp": "Reply within 24h",
    "ct.sPhone": "WhatsApp / Phone",
    "ct.sRegion": "Operating Area",
    "ct.sTours": "Tours across the region",
    "ct.trust1": "100% secure booking",
    "ct.trust2": "Free cancellation",

    "map.open": "View on large map",
    "cal.title": "Availability",
    "cal.available": "Available",
    "cal.unavailable": "Not available",
    "cal.line": "{day} {month} {year} — Available",
    "btn.reserve": "Book now",
  },
};

const toursEn: Record<string, Partial<Tour>> = {
  "granada-colonial": {
    name: "Colonial Granada & Culture",
    description:
      "Discover the rich colonial architecture of Granada, the Grand Sultan, with a horse-carriage ride, a boat trip on Lake Cocibolca and a visit to a local chocolate factory.",
    duration: "9 to 11 hours",
    location: "Granada, Nicaragua",
    tag: "Cultural",
    includes: [
      "Transportation from and to your hotel",
      "Bilingual Guide",
      "Horse-carriage ride",
      "Boat trip on Lake Cocibolca",
      "Site entrance fees",
      "Lunch on a lake island",
      "Digital photography",
    ],
    details: [
      "Pick-up at your hotel in Granada",
      "Approximate duration of 9 to 11 hours",
      "Horse-carriage ride through the city",
      "Boat trip through the lake's 360 islets",
      "Lunch on an island with privileged views",
    ],
    experiences: [
      "Ride through colonial streets by horse carriage",
      "Sail the Great Lake Cocibolca among islets",
      "Visit Fort San Pablo and learn its history",
      "Taste Nicaraguan chocolate at a local factory",
    ],
    itinerary: [
      { time: "8:00 AM", activity: "Hotel pick-up and carriage ride through Granada" },
      { time: "10:00 AM", activity: "Boat trip on Lake Cocibolca and visit to Fort San Pablo" },
      { time: "12:30 PM", activity: "Lunch on a lake island with panoramic views" },
      { time: "2:30 PM", activity: "Visit to a local chocolate factory" },
      { time: "4:00 PM", activity: "Free time in Granada's historic center" },
      { time: "5:00 PM", activity: "Return to the hotel" },
    ],
    meetingPoint: "Hotel in Granada (we pick you up at the reception) or an agreed point in the historic center.",
  },
  "amo-el-agua": {
    name: "Love the Water — Waterfalls & Adventure",
    description:
      "If you love water and nature, this tour is for you. We visit 4 spectacular waterfalls at Rincón de la Vieja, with an adventure hike, hanging bridges and natural pools.",
    duration: "8 to 10 hours",
    location: "Rincón de la Vieja, Costa Rica",
    tag: "Adventure",
    includes: [
      "Bilingual Guide",
      "Site entrance fees",
      "Buffet lunch at Hacienda Guachipelín",
      "Hotel transportation",
      "Fruits, water and drinks",
    ],
    details: [
      "Hotel pick-up in Guanacaste",
      "3-hour round trip hike (challenging)",
      "4 different waterfalls in one day",
      "Natural pools to swim and relax",
      "Option to combine with hot springs, horseback riding, zip line or tubing",
    ],
    experiences: [
      "Hike at Rincón de la Vieja National Park",
      "Swim at La Cangreja waterfall's turquoise waters",
      "Cross hanging bridges over the forest",
      "Relax at Poza Los Coyotes at the end of the day",
    ],
    itinerary: [
      { time: "6:30 AM", activity: "Hotel pick-up and transfer to Rincón de la Vieja National Park" },
      { time: "8:00 AM", activity: "Hike to La Cangreja Waterfall (3 hours)" },
      { time: "11:00 AM", activity: "Stop at the second waterfall for photos and rest" },
      { time: "12:30 PM", activity: "Buffet lunch at Hacienda Guachipelín" },
      { time: "2:00 PM", activity: "Rio Blanco and Chorreras tour" },
      { time: "4:00 PM", activity: "Poza Los Coyotes — swimming and relaxation" },
      { time: "5:00 PM", activity: "Return to the hotel" },
    ],
    meetingPoint:
      "Hotel in Guanacaste (pick-up at reception). For accommodations outside the area, coordinate a meeting point.",
  },
  "rio-celeste": {
    name: "Río Celeste — The Blue of the Sky",
    description:
      "Río Celeste is a magical turquoise river hidden in the Tenorio Volcano National Park. Rainforest hike, hidden waterfall and options for tubing, sloths or coffee and chocolate.",
    duration: "7 to 8 hours",
    location: "Tenorio Volcano, Costa Rica",
    tag: "Nature",
    includes: [
      "Park entrance fees",
      "Bilingual Guide",
      "Round-trip transportation from your hotel",
      "Lunch",
      "One of the options (sloths, coffee/chocolate or tubing)",
      "Souvenir photography",
    ],
    details: [
      "Approximate duration of 7 to 8 hours",
      "2-hour hike through the rainforest",
      "3 variants to choose from: sloths, coffee/chocolate or tubing",
      "Pick-up at hotels in Guanacaste",
      "Moderate difficulty level",
    ],
    experiences: [
      "Hike through the rainforest to Río Celeste",
      "See the turquoise waterfall in the middle of the jungle",
      "Choose between tubing, sloths or coffee and chocolate",
      "Capture the best photos of your trip",
    ],
    itinerary: [
      { time: "6:00 AM", activity: "Hotel pick-up and transfer to Tenorio Volcano" },
      { time: "8:00 AM", activity: "Park entrance and 2-hour hike" },
      { time: "10:00 AM", activity: "Arrival at Río Celeste and waterfall — photos and rest" },
      { time: "11:30 AM", activity: "Additional activity according to chosen variant" },
      { time: "1:00 PM", activity: "Lunch" },
      { time: "2:30 PM", activity: "Return to the hotel" },
    ],
    meetingPoint: "Hotel in Guanacaste (pick-up at reception). Coordinate if you're in another area.",
  },
  "rincon-de-la-vieja": {
    name: "Volcanoes, Waterfalls & Mud Pools",
    description:
      "Explore Rincón de la Vieja National Park, an active volcano with fumaroles, mineral water and mud pools. Hike through dry forest, hot springs and impressive waterfalls.",
    duration: "8 to 9 hours",
    location: "Rincón de la Vieja, Costa Rica",
    tag: "Adventure",
    includes: [
      "Transportation from the hotel",
      "Certified Bilingual Guide",
      "Lunch at Hacienda Guachipelín",
      "Water and Drinks",
      "Park entrance fees",
      "Hot springs",
      "Access to Río Negro waterfalls",
      "Souvenir photo",
    ],
    details: [
      "Duration of 8 to 9 hours",
      "Medium difficulty",
      "Wildlife spotting: reptiles, birds and mammals",
      "Volcanic fumaroles and mineral mud pools",
      "Hot springs and waterfalls included",
    ],
    experiences: [
      "Hike through dry forest with centuries-old trees",
      "See volcanic fumaroles and mud pools",
      "Relax in natural hot springs",
      "Discover the Río Negro waterfalls",
    ],
    itinerary: [
      { time: "7:00 AM", activity: "Hotel pick-up and transfer to the park" },
      { time: "8:30 AM", activity: "Enter Rincón de la Vieja National Park" },
      { time: "9:00 AM", activity: "Guided hike along dry forest trails" },
      { time: "11:00 AM", activity: "Visit fumaroles and mud pools" },
      { time: "12:30 PM", activity: "Lunch at Hacienda Guachipelín" },
      { time: "2:00 PM", activity: "Hot springs and Río Negro waterfalls" },
      { time: "4:00 PM", activity: "Return to the hotel" },
    ],
    meetingPoint: "Hotel in Guanacaste (pick-up at reception).",
  },
  "arenal-adventure": {
    name: "Arenal — Fire, Air and Water",
    description:
      "Experience the iconic Arenal Volcano with hanging bridges over centuries-old trees, zip line or gondola, and hot springs to relax. A day full of thrills and nature.",
    duration: "9 to 10 hours",
    location: "La Fortuna, Costa Rica",
    tag: "Popular",
    includes: [
      "Transportation from your hotel",
      "Bilingual Guide",
      "Lunch",
      "Sky Adventure park entrance",
      "Hanging bridges (combine with zip line or gondola)",
      "Hot springs (Eco Termales)",
      "Souvenir photo",
    ],
    details: [
      "Duration of 9 to 10 hours",
      "Explore biological diversity from the heights",
      "Hanging bridges over centuries-old trees",
      "Zip line or gondola options available",
      "Mineral hot springs to relax",
    ],
    experiences: [
      "Walk on hanging bridges over the forest canopy",
      "See Arenal Volcano and its volcanic landscapes",
      "Relax at Eco Termales hot springs",
      "Choose zip line or gondola for more adrenaline",
    ],
    itinerary: [
      { time: "7:00 AM", activity: "Hotel pick-up in La Fortuna" },
      { time: "8:00 AM", activity: "Arrival at Sky Adventure — hanging bridges" },
      { time: "10:30 AM", activity: "Additional activity (zip line or gondola)" },
      { time: "12:30 PM", activity: "Lunch" },
      { time: "2:00 PM", activity: "Eco Termales hot springs" },
      { time: "4:00 PM", activity: "Return to the hotel" },
    ],
    meetingPoint: "Hotel in La Fortuna (pick-up at reception).",
  },
};

const packagesEn: Record<string, Partial<Package>> = {
  "explorador-tropical": {
    name: "Tropical Explorer",
    duration: "3 days / 2 nights",
    description: "Perfect for a quick and exciting getaway through volcanoes and lagoons.",
    features: [
      "2 nights at selected hotel",
      "2 complete guided tours",
      "Internal transfers included",
      "Daily continental breakfast",
      "Expert bilingual guide",
      "National park entrance fees",
    ],
    itinerary: [
      { day: "Day 1", activity: "Arrival and transfer to the hotel. Free afternoon to explore the city center." },
      { day: "Day 2", activity: "Full-day guided tour: volcano and lagoon. Lunch included." },
      { day: "Day 3", activity: "Breakfast and departure transfer. End of the experience." },
    ],
  },
  "aventurero-completo": {
    name: "Complete Adventurer",
    duration: "5 days / 4 nights",
    description: "The ultimate experience to discover the best of Nicaragua and Costa Rica.",
    features: [
      "4 nights at hotel (tourist category)",
      "4 guided adventure tours",
      "Private ground transportation",
      "All meals included",
      "Private guide for your group",
      "Canopy and hiking activities",
      "Border crossing assistance",
    ],
    itinerary: [
      { day: "Day 1", activity: "Arrival in Costa Rica. Transfer to the hotel in Guanacaste." },
      { day: "Day 2", activity: "Full-day tour: Rincón de la Vieja National Park. Hike, fumaroles and hot springs." },
      { day: "Day 3", activity: "Adventure tour: canopy and hanging bridges in the cloud forest." },
      { day: "Day 4", activity: "Río Celeste tour: hike, turquoise waterfall and optional tubing." },
      { day: "Day 5", activity: "Breakfast and airport transfer. End of the trip." },
    ],
  },
  "expedicion-premium": {
    name: "Premium Expedition",
    duration: "7 days / 6 nights",
    description: "Total luxury, comfort and exclusivity exploring trails and exotic beaches.",
    features: [
      "6 nights at 5★ boutique hotel",
      "Unlimited private tours",
      "Premium A/C transportation",
      "All gourmet meals",
      "Dedicated personal guide 24/7",
      "Spa and wellness session",
      "Special welcome dinner",
      "VIP border logistics",
    ],
    itinerary: [
      { day: "Day 1", activity: "VIP arrival. Private transfer to a boutique hotel in La Fortuna." },
      { day: "Day 2", activity: "Private Arenal Volcano tour: hanging bridges, zip line and hot springs." },
      { day: "Day 3", activity: "Río Celeste excursion with personal guide. Gourmet lunch." },
      { day: "Day 4", activity: "Transfer to the beach. Free afternoon with spa included." },
      { day: "Day 5", activity: "Boat tour and snorkeling in the Pacific." },
      { day: "Day 6", activity: "Free day. Farewell dinner at an exclusive restaurant." },
      { day: "Day 7", activity: "Breakfast and executive airport transfer." },
    ],
  },
};

const teamMembersEn: Record<string, { role: string; bio: string }> = {
  "Alex Mayorga": {
    role: "Tour Guide",
    bio: "Hello! I have been working in tourism for 13 years in Nicaragua, known as the land of volcanoes and lakes. I am ready to show you the history and traditions of this beautiful land, giving you lifelong memories.",
  },
  "Alejandro": {
    role: "Nature Guide",
    bio: "Alejandro is a nature guide who loves spending time outdoors; he'll take you past waterfalls, rivers and through the forest to discover Costa Rica.",
  },
  "Juan Pablo Gutiérrez": {
    role: "National Tour Guide",
    bio: "I am a national tour guide in both countries. I love showing the world our country. I love the outdoors and nature and I try to make the most of every experience when you're with me!",
  },
  "Alexander Ramos Cortez": {
    role: "General Guide",
    bio: "I am a General Guide, passionate about animals. I love seeing people's faces when they find the animal they wanted to meet. My clients' dream is my goal.",
  },
  "Santos Fuentes": {
    role: "General Guide",
    bio: "Santos is a Costa Rican guide passionate about nature and outdoor activities. A day trip with him is fun; he puts all his passion and effort into giving you the best experience during your visit to Costa Rica.",
  },
  "Julio César": {
    role: "Tour Guide",
    bio: "Julio César is a Nicaraguan guide who loves nature and adventure. He is passionate about showing the best of Nicaragua. He knows Nicaragua and Costa Rica perfectly and can take you to the best spots in both countries.",
  },
  "Ulises Álvarez": {
    role: "Cultural Tour Guide",
    bio: "Ulises belongs to one of Costa Rica's indigenous peoples, the Maleku. Live a unique and enriching experience learning about culture, history, wildlife and much more from his native perspective.",
  },
};

const mergeTeam = (lang: Lang) =>
  lang === "es"
    ? teamMembers
    : teamMembers.map((m) => ({ ...m, ...teamMembersEn[m.name] }));

const testimonialsEn: Record<string, string> = {
  "Carlos Mendoza":
    "The best tour I've done in Central America. The organization was impeccable and the landscapes incredible. I'll definitely be back.",
};

const mergeTours = (lang: Lang): Tour[] =>
  lang === "es" ? tours : tours.map((t) => ({ ...t, ...toursEn[t.id] }));

const mergePackages = (lang: Lang): Package[] =>
  lang === "es" ? packages : packages.map((p) => ({ ...p, ...packagesEn[p.id] }));

const mergeTestimonials = (lang: Lang): Testimonial[] =>
  lang === "es"
    ? testimonials
    : testimonials.map((t) => ({ ...t, text: testimonialsEn[t.name] || t.text }));

interface I18nContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  tours: Tour[];
  packages: Package[];
  testimonials: Testimonial[];
  teamMembers: TeamMember[];
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    const saved = localStorage.getItem("tropical-lang");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (saved === "en" || saved === "es") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("tropical-lang", l);
    document.documentElement.lang = l;
  };

  const t = (key: string) => ui[lang][key] ?? key;

  return (
    <I18nContext.Provider
      value={{
        lang,
        setLang,
        t,
        tours: mergeTours(lang),
        packages: mergePackages(lang),
        testimonials: mergeTestimonials(lang),
        teamMembers: mergeTeam(lang),
      }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
}
