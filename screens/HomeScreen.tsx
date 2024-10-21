// Ecran principale de l'application
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import RecipeForm from '../components/RecipeForm';
import RecipeList from '../components/RecipeList';
import { getRecipes, saveRecipe, deleteRecipe } from '../services/recipeService';
import { Recipe } from '../types/Recipe';

const HomeScreen = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    loadRecipes();
  }, []);

  const loadRecipes = async () => {
    const fetchedRecipes = await getRecipes();
    setRecipes(fetchedRecipes);
  };

  const handleAddRecipe = async (newRecipe: Recipe) => {
    await saveRecipe(newRecipe);
    loadRecipes();
  };

  const handleDeleteRecipe = async (id: string) => {
    await deleteRecipe(id);
    loadRecipes();
  };

  return (
    <View>
      <RecipeForm onSubmit={handleAddRecipe} />
      <RecipeList recipes={recipes} onDelete={handleDeleteRecipe} onRecipePress={console.log} />
    </View>
  );
};

export default HomeScreen;
