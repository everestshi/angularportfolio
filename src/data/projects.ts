import { Project } from '../models/project';
import { Tag } from '../models/tag';

// Import the TAGS array
import { TAGS } from './tags';

// Define your projects
export const PROJECTS: Project[] = [
  {
    id: 1,
    name: 'SIPS CAFE - Software Systems Design & Development',
    summary:
      'A responsive website backed by .NET and SQL that integrates application design, agile management, and UML.',
    description: 'SIPS Cafe offers businesses a space to showcase their products and allow customers to order online with administrative security, user account creation/login, custom profile page, menu display, ordering system, payment integration, location, ratings, and many more features for a seamless user experience.',
    link: null,
    images: [],
    category_id: 3,
    category: { id: 3, slug: 'full-stack', name: 'Full Stack' },
    tags: [
      TAGS.find(tag => tag.slug === 'dotnet')!,
      TAGS.find(tag => tag.slug === 'csharp')!,
      TAGS.find(tag => tag.slug === 'sql')!
    ],
  },
  {
    id: 2,
    name: 'MYTHIC MONSTERS - JavaScript Game',
    summary:
      'Explore a world where you capture and train Mythic Monsters to gain experience and battle to become the ultimate Tamer.',
    description: 'A fully function javascript game that features a fully functional battle system, NPCs, Mythic Monster stats, a storyline, and a custom world to explore.',
    link: null,
    images: [],
    category_id: 2,
    category: { id: 2, slug: 'front-end', name: 'Front End' },
    tags: [
      TAGS.find(tag => tag.slug === 'htmlcss')!,
      TAGS.find(tag => tag.slug === 'javascript')!
    ],
  },
  {
    id: 3,
    name: 'MOVIE APP - React Movie Application',
    summary:
      'A React-driven app that allows for a comfortable user experience, comparable to any streaming website.',
    description: "The Movie App delivers real-time data on popular, top-rated, now playing, and upcoming films. With tech-enhanced features like favoriting, watch later, search functionality and beyond, it's your personalized cinematic journey - redefined.",
    link: null,
    images: [],
    category_id: 2,
    category: { id: 2, slug: 'front-end', name: 'Front End' },
    tags: [
      TAGS.find(tag => tag.slug === 'react')!,
      TAGS.find(tag => tag.slug === 'vitejs')!,
      TAGS.find(tag => tag.slug === 'nodejs')!
    ],
  },
  {
    id: 4,
    name: 'PIECE NEWS - News Site Homepage',
    summary:
      'A news site homepage that boasts a clean, responsive design, a custom layout, and a visually stunning UI.',
    description: 'A tech-forward news site homepage that is powered by SASS for modular styles, Swiper for seamless navigation, and responsive imaging for optimal visuals. Explore audio and video integrations, coupled with a responsive navbar and seamlessly integrated animations.',
    link: null,
    images: [],
    category_id: 2,
    category: { id: 2, slug: 'front-end', name: 'Front End' },
    tags: [
      TAGS.find(tag => tag.slug === 'htmlcss')!,
      TAGS.find(tag => tag.slug === 'sass')!,
      TAGS.find(tag => tag.slug === 'nodejs')!
    ],
  },
  {
    id: 5,
    name: 'ZIRVESTI - Express Billing Application',
    summary:
      'A sleek billing application focusing on the use of Node.js, Express, and MongoDB.',
    description: 'Using both relation and unstructured NoSQL databases, Zirvesti allows users to manipulate clients, products, users, and invoices. The application also features a login system with authentication and authorization, user settings and permissions, and other useful functionality.',
    link: null,
    images: [],
    category_id: 3,
    category: { id: 3, slug: 'full-stack', name: 'Full Stack' },
    tags: [
      TAGS.find(tag => tag.slug === 'expressjs')!,
      TAGS.find(tag => tag.slug === 'mongodb')!,
      TAGS.find(tag => tag.slug === 'nodejs')!,
      TAGS.find(tag => tag.slug === 'htmlcss')!
    ],
  },
  // Add other projects similarly
];