export interface Recipe {
    id: string;
    name: string;
    ingredients: string[];
    instructions: string;
    category: string;
    image?: string; // chemin vers l'image
    favorite: boolean; // état pour les favoris
  }