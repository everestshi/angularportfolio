import { Project } from '../models/project';
import { Tag } from '../models/tag';

// Import the TAGS array
import { TAGS } from './tags';

// Define your projects
export const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'SIPS Cafe',
    subtitle: 'Full Stack Web Application with Software Systems Design & Development',
    summary:
      'A responsive website backed by .NET and SQL that integrates application design, agile management, and UML.',
    description: 'SIPS Cafe offers businesses a space to showcase their products and allow customers to order online with administrative security, user account creation/login, custom profile page, menu display, ordering system, payment integration, location, ratings, and many more features for a seamless user experience.',
    features: [
      'Administrative security with authorization and authentication',
      'User account creation/login with Sendgrid email verification',
      'Custom menu display and ordering system',
      'PayPal payment and refund integration',
    ],
    ghlink: "https://github.com/everestshi/SIPSCafe",
    weblink: null,
    carouselImages: ["../../assets/images/project-media/SIPS/carousel-sips.png"],
    images: ["../../assets/images/project-media/SIPS/main-img.png", "../../assets/images/project-media/SIPS/img2.png", "../../assets/images/project-media/SIPS/img3.png", "../../assets/images/project-media/SIPS/img4.png", "../../assets/images/project-media/SIPS/img5.png", "../../assets/images/project-media/SIPS/img6.png"],
    category_id: 3,
    category: { id: 3, slug: 'full-stack', name: 'Full Stack' },
    tags: [
      TAGS.find(tag => tag.slug === 'aspnetcore')!,
      TAGS.find(tag => tag.slug === 'csharp')!,
      TAGS.find(tag => tag.slug === 'sql')!
    ],
    featured: true,
  },
  {
    id: 2,
  
    name: 'Mythic Monsters',
    subtitle: 'Front End Javascript Game',
    summary:
      'Explore a world where you capture and train Mythic Monsters to gain experience and battle to become the ultimate Tamer.',
    description: 'A fully function javascript game that features a fully functional battle system, NPCs, Mythic Monster stats, a storyline, and a custom world to explore.',
    features: [
      'Fully functional battle system',
      'NPC interactions and battles',
      'In-depth Mythic Monster stats and level-up system',
      'Engaging storyline',
      'Expansive custom world'
    ],
    ghlink: "https://github.com/everestshi/mythicmonstersgame",
    weblink: "https://mythicmonstersgame.vercel.app/",
    carouselImages: ["../../assets/images/project-media/mythic-monsters/carousel-mm.png"],
    images: ["../../assets/images/project-media/mythic-monsters/main-img.png",
    "../../assets/images/project-media/mythic-monsters/mm-2.png",
    "../../assets/images/project-media/mythic-monsters/mm-3.png",
    "../../assets/images/project-media/mythic-monsters/mm-4.png",
    "../../assets/images/project-media/mythic-monsters/mm-5.png",
    "../../assets/images/project-media/mythic-monsters/mm-6.png",
    "../../assets/images/project-media/mythic-monsters/mm-7.png"],
    category_id: 2,
    category: { id: 2, slug: 'front-end', name: 'Front End' },
    tags: [
      TAGS.find(tag => tag.slug === 'javascript')!
    ],
    featured: true,
  },
  {
    id: 3,
    name: 'TMDB',
    subtitle: 'Front End React Movie Application',
    summary:
      'A React-driven app that allows for a comfortable user experience, comparable to any streaming website.',
    description: "The Movie App delivers real-time data on popular, top-rated, now playing, and upcoming films. With tech-enhanced features like favoriting, watch later, search functionality and beyond, it's your personalized cinematic journey - redefined.",
    features: [
      'Real-time data on films',
      'Favoriting and watch later features',
      'Search functionality',
      'User-friendly responsive interface',
    ],
    ghlink: 'https://github.com/everestshi/reactp01-movieapp',
    weblink: 'https://everestshi-movieapp.vercel.app/',
    carouselImages: ["../../assets/images/project-media/TMDB/tmdb-carousel.png"],
    images: ["../../assets/images/project-media/TMDB/main-img.png",
    "../../assets/images/project-media/TMDB/img2.png",
    "../../assets/images/project-media/TMDB/img3.png",
    "../../assets/images/project-media/TMDB/img4.png",
    "../../assets/images/project-media/TMDB/img5.png",],
    category_id: 2,
    category: { id: 2, slug: 'front-end', name: 'Front End' },
    tags: [
      TAGS.find(tag => tag.slug === 'react')!,
      TAGS.find(tag => tag.slug === 'vitejs')!,
      TAGS.find(tag => tag.slug === 'nodejs')!
    ],
    featured: true,
  },
  {
    id: 4,
    name: 'PIECE News',
    subtitle: 'Front End News Site Homepage',
    summary:
      'A news site homepage that boasts a clean, responsive design, a custom layout, and a visually stunning UI.',
    description: 'A tech-forward news site homepage that is powered by SASS for modular styles, Swiper for seamless navigation, and responsive imaging for optimal visuals. Explore audio and video integrations, coupled with a responsive navbar and seamlessly integrated animations.',
    features: [
      'Responsive design',
      'Custom layouts',
      'Visually stunning UI',
      'Modular styles with SASS',
      'Interactive carousels with Swiper',
    ],
    ghlink: 'https://github.com/everestshi/newssite',
    weblink: null,
    carouselImages: ["../../assets/images/project-media/piece-news/news-carousel.png"],
    images: ["../../assets/images/project-media/piece-news/main-img.png",
    "../../assets/images/project-media/piece-news/img2.png",
    "../../assets/images/project-media/piece-news/img3.png",
    "../../assets/images/project-media/piece-news/img4.png",],
    category_id: 2,
    category: { id: 2, slug: 'front-end', name: 'Front End' },
    tags: [
      TAGS.find(tag => tag.slug === 'sassscss')!,
      TAGS.find(tag => tag.slug === 'nodejs')!
    ],
    featured: true,
  },
  {
    id: 5,
    name: 'ZIRVESTI',
    subtitle: 'Full Stack Express Billing Application',
    summary:
      'A sleek billing application focusing on the use of Node.js, Express, and MongoDB.',
    description: 'Using both relation and unstructured NoSQL databases, Zirvesti allows users to manipulate clients, products, users, and invoices. The application also features a login system with authentication and authorization, user settings and permissions, and other useful functionality.',
    features: [
      'Responsive design',
      'Login system with authentication and authorization',
      'Database management with CRUD features for clients, products, users, and invoices',
      'User settings and permissions',
    ],
    ghlink: 'https://github.com/everestshi/newssite',
    weblink: null,
    carouselImages: ["../../assets/images/project-media/express-billing/carousel-zirvesti.png"],
    images: ["../../assets/images/project-media/express-billing/main-img.png",
    "../../assets/images/project-media/express-billing/img2.png",
    "../../assets/images/project-media/express-billing/img3.png",
    "../../assets/images/project-media/express-billing/img4.png",
    "../../assets/images/project-media/express-billing/img5.png",
    "../../assets/images/project-media/express-billing/img6.png",
    "../../assets/images/project-media/express-billing/img7.png",
    "../../assets/images/project-media/express-billing/img8.png"],
    category_id: 3,
    category: { id: 3, slug: 'full-stack', name: 'Full Stack' },
    tags: [
      TAGS.find(tag => tag.slug === 'expressjs')!,
      TAGS.find(tag => tag.slug === 'mongodb')!,
      TAGS.find(tag => tag.slug === 'nodejs')!,
    ],
    featured: true,
  },
  {
    id: 6,
    name: 'Calculator',
    subtitle: 'React Calculator',
    summary: 'A React-based calculator with support for floating-point numbers and advanced features.',
    description: "This calculator application is built using React and features a user-friendly interface. It supports basic arithmetic operations as well as advanced functions such as square root, exponentiation, and more. The calculator handles floating-point numbers accurately and provides precise results for complex calculations.",
    features: [
      "Supports addition, subtraction, multiplication, and division",
      "Handles floating-point numbers with precision",
      "Includes advanced functions such as square root and exponentiation",
      "Displays history of previous calculations for reference",
      "Has additional features like percentage calculation and memory functions"
    ],
    ghlink: 'https://github.com/everestshi/A03-ReactCalculator',
    weblink: 'https://react-calculator-chi-ten.vercel.app/',
    carouselImages: [],
    images: ['../../assets/images/project-media/react-calc/main-img.png'],
    category_id: 3,
    category: { id: 3, slug: 'full-stack', name: 'Full Stack' },
    tags: [
      TAGS.find(tag => tag.slug === 'react')!,
    ],
    featured: false,
  },
];
