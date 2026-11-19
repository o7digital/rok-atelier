import type { Lang } from './content';

type ProjectCopy = {
  title: string;
  cardTitle: string;
  subtitle: string;
  category: string;
  description: string;
  statement: string;
  values: string[];
  imageAlt: string;
  secondaryAlt: string;
};

type GalleryImage = {
  src: string;
  width: number;
  height: number;
} & Record<Lang, string>;

export type ClientProject = {
  slug: string;
  image: string;
  secondary: string;
  source: string;
  gallery: GalleryImage[];
} & Record<Lang, ProjectCopy>;

// Locations and project subjects come from the atelier's own publications.
// Dates, floor areas and construction status are intentionally not inferred.
export const clientProjects: ClientProject[] = [
  {
    slug: 'oficinas-la-roma',
    image: '/images/projects/roma-01.webp',
    secondary: '/images/projects/roma-06.webp',
    source: 'https://www.instagram.com/rok.atelier/p/DXzruMuGm0L/',
    es: {
      title: 'La Roma', cardTitle: 'Oficinas La Roma',
      subtitle: 'Un lugar para encontrarse.', category: 'Espacios de trabajo',
      description: 'Un patio interior, una estructura de acero y la luz que recorre los muros. En estas oficinas, la vegetación y los tonos cálidos del mobiliario conviven con la textura del edificio. La mirada continúa de un espacio a otro, entre umbrales, transparencias y rincones para conversar.',
      statement: 'Trabajar. Compartir.\nSentirse en un lugar.',
      values: ['Ciudad de México', 'Oficinas', 'ROK Atelier'],
      imageAlt: 'Oficinas de ROK Atelier en La Roma, con sillones cálidos, vegetación y patio iluminado',
      secondaryAlt: 'Mesa de reunión y cancelería de acero en las oficinas de La Roma',
    },
    en: {
      title: 'La Roma', cardTitle: 'La Roma offices',
      subtitle: 'A place to come together.', category: 'Workspaces',
      description: 'An interior courtyard, a steel structure and light moving across the walls. In these offices, greenery and warm furniture tones meet the texture of the building. The view continues from one space to the next, through thresholds, glazing and corners for conversation.',
      statement: 'Work. Share.\nFeel a sense of place.',
      values: ['Mexico City', 'Offices', 'ROK Atelier'],
      imageAlt: 'ROK Atelier offices in La Roma with warm armchairs, greenery and a sunlit courtyard',
      secondaryAlt: 'Meeting table and steel-framed glazing in the La Roma offices',
    },
    gallery: [
      {src:'/images/projects/roma-01.webp',width:1440,height:1920,es:'Zona de encuentro abierta al patio de las oficinas de La Roma',en:'Seating area opening onto the courtyard of the La Roma offices'},
      {src:'/images/projects/roma-06.webp',width:1440,height:1920,es:'Mesa de reunión tras una puerta de acero y vidrio',en:'Meeting table behind a steel and glass door'},
      {src:'/images/projects/roma-04.webp',width:1440,height:1920,es:'Marcos de madera y una secuencia de puertas en La Roma',en:'Wooden frames and a sequence of doorways in La Roma'},
      {src:'/images/projects/roma-10.webp',width:1440,height:1920,es:'Escalera metálica y vegetación en el patio interior',en:'Metal staircase and greenery in the interior courtyard'},
    ],
  },
  {
    slug: 'cocina-acapulco',
    image: '/images/projects/acapulco-02.webp',
    secondary: '/images/projects/acapulco-01.webp',
    source: 'https://www.instagram.com/rok.atelier/p/DW16bjGGrLB/',
    es: {
      title: 'Acapulco', cardTitle: 'Cocina en Acapulco',
      subtitle: 'La calidez de cada día.', category: 'Interiorismo',
      description: 'Madera de veta marcada, cubiertas oscuras y una barra que reúne el espacio. Las líneas del mobiliario y la iluminación bajo los gabinetes construyen una cocina de contrastes serenos, abierta a los pequeños rituales de todos los días.',
      statement: 'La vida sucede\nalrededor de la mesa.',
      values: ['Acapulco', 'Cocina', 'ROK Atelier'],
      imageAlt: 'Cocina de ROK Atelier en Acapulco con madera veteada, cubierta oscura y lámparas suspendidas',
      secondaryAlt: 'Vista de la cocina de Acapulco desde la barra con tres bancos de madera',
    },
    en: {
      title: 'Acapulco', cardTitle: 'A kitchen in Acapulco',
      subtitle: 'The warmth of the everyday.', category: 'Interiors',
      description: 'Richly grained wood, dark countertops and a breakfast bar bringing the room together. Cabinetry lines and under-cabinet lighting create a kitchen of quiet contrasts, open to the small rituals of everyday life.',
      statement: 'Life unfolds\naround the table.',
      values: ['Acapulco', 'Kitchen', 'ROK Atelier'],
      imageAlt: 'ROK Atelier kitchen in Acapulco with grained wood, dark countertops and pendant lights',
      secondaryAlt: 'Acapulco kitchen viewed from the breakfast bar with three wooden stools',
    },
    gallery: [
      {src:'/images/projects/acapulco-01.webp',width:1440,height:1920,es:'La cocina de Acapulco vista desde la barra',en:'The Acapulco kitchen seen from the breakfast bar'},
      {src:'/images/projects/acapulco-02.webp',width:960,height:1280,es:'Encuentro de la madera y la cubierta oscura en la cocina',en:'The meeting of wooden cabinetry and dark countertops'},
      {src:'/images/projects/acapulco-03.webp',width:960,height:1280,es:'Detalle de gabinetes, iluminación y materiales de la cocina',en:'Detail of the kitchen cabinetry, lighting and materials'},
    ],
  },
  {
    slug: 'vestidor-lounge',
    image: '/images/projects/vestidor-01.webp',
    secondary: '/images/projects/vestidor-03.webp',
    source: 'https://www.instagram.com/rok.atelier/p/DXKNre6Gog0/',
    es: {
      title: 'Vestidor', cardTitle: 'Vestidor & lounge',
      subtitle: 'Un ritual, otro ritmo.', category: 'Interiorismo',
      description: 'La madera clara, los arcos y un asiento tapizado en tonos tierra dan continuidad a este vestidor con lounge. Los módulos de guardado dibujan una trama precisa; la luz integrada acompaña las superficies y deja lugar a la pausa.',
      statement: 'Elegir con calma.\nHabitar el detalle.',
      values: ['Ciudad de México', 'Vestidor y lounge', 'ROK Atelier'],
      imageAlt: 'Vestidor y lounge de ROK Atelier en CDMX con mobiliario de madera y asiento central en tonos tierra',
      secondaryAlt: 'Perspectiva del vestidor de CDMX con módulos de guardado y un arco al fondo',
    },
    en: {
      title: 'Dressing room', cardTitle: 'Dressing room & lounge',
      subtitle: 'A ritual at a different pace.', category: 'Interiors',
      description: 'Light wood, arches and an upholstered seat in earthy tones bring continuity to this dressing room and lounge. Storage modules form a precise rhythm; integrated lighting follows the surfaces and leaves room for a pause.',
      statement: 'Take your time.\nLive in the details.',
      values: ['Mexico City', 'Dressing room and lounge', 'ROK Atelier'],
      imageAlt: 'ROK Atelier dressing room and lounge in Mexico City with wooden cabinetry and an earthy central seat',
      secondaryAlt: 'Perspective of the Mexico City dressing room with storage modules and an archway',
    },
    gallery: [
      {src:'/images/projects/vestidor-01.webp',width:1200,height:900,es:'Vestidor y lounge con madera clara y asiento central',en:'Dressing room and lounge with light wood and central seating'},
      {src:'/images/projects/vestidor-02.webp',width:1200,height:900,es:'Módulos de guardado y asiento tapizado del vestidor',en:'Storage modules and upholstered seating in the dressing room'},
      {src:'/images/projects/vestidor-03.webp',width:1200,height:900,es:'Vista hacia el arco, la carpintería y el lounge',en:'View towards the archway, cabinetry and lounge'},
    ],
  },
];
