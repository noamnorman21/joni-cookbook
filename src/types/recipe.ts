export type Category = 'starters' | 'mains' | 'desserts';

export interface Recipe {
    id: string;
    title: string;
    category: Category;
    image: string;
    story_about_johnny: string;
    servings: string;
    prep_time: string;
    cook_time: string;
    difficulty: 1 | 2 | 3;
    ingredients: string[];
    instructions: string[];
    home_tip: string;

    // optional helpers
    source_pdf?: "starters" | "mains" | "desserts";
    source_page?: number;
    notes?: string;
}
