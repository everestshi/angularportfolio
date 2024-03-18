import { Category } from './category';
import { Tag } from './tag';

export interface Project {
    id: number;
    name: string;
    summary: string;
    description: string;
    link: string | null;
    images: string[];
    category_id: number | null;
    category: Category | null;
    tags: Tag[];
}
