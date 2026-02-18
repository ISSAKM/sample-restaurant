export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string; // Markdown supported
  author: string;
  date: string;
  imageUrl: string;
  tags: string[];
  isAiGenerated?: boolean;
}

export interface GeneratedRecipeResponse {
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  cookingTime: string;
}

export enum ViewState {
  HOME = 'HOME',
  POST = 'POST',
  GENERATE = 'GENERATE'
}