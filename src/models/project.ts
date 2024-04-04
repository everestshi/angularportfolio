import { Category } from './category';
import { Tag } from './tag';

export interface Project {
    id: number;
    name: string;
    subtitle: string;
    summary: string;
    description: string;
    features: string[];
    ghlink: string | null;
    weblink: string | null;
    carouselImages: string[];
    images: string[];
    category_id: number | null;
    category: Category | null;
    tags: Tag[];
    featured: boolean;
}
