
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Recipe } from '../types/Recipe';

const RECIPES_KEY = '@recipes';

export const saveRecipe = async (recipe: Recipe) => {
  const recipes = await getRecipes();
  recipes.push(recipe);
  await AsyncStorage.setItem(RECIPES_KEY, JSON.stringify(recipes));
};

export const getRecipes = async (): Promise<Recipe[]> => {
  const data = await AsyncStorage.getItem(RECIPES_KEY);
  return data ? JSON.parse(data) : [];
};

export const updateRecipe = async (updatedRecipe: Recipe) => {
  const recipes = await getRecipes();
  const index = recipes.findIndex(recipe => recipe.id === updatedRecipe.id);
  recipes[index] = updatedRecipe;
  await AsyncStorage.setItem(RECIPES_KEY, JSON.stringify(recipes));
};

export const deleteRecipe = async (id: string) => {
  const recipes = await getRecipes();
  const updatedRecipes = recipes.filter(recipe => recipe.id !== id);
  await AsyncStorage.setItem(RECIPES_KEY, JSON.stringify(updatedRecipes));
};

export const toggleFavorite = async (id: string) => {
  const recipes = await getRecipes();
  const updatedRecipes = recipes.map(recipe =>
    recipe.id === id ? { ...recipe, favorite: !recipe.favorite } : recipe
  );
  await AsyncStorage.setItem(RECIPES_KEY, JSON.stringify(updatedRecipes));
};
