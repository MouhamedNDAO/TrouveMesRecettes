// Ecran pour l'ajout d'une recette
import React, { useEffect, useState } from 'react';
import { Alert, Button, ScrollView, View } from 'react-native';
import RecipeForm from '../components/RecipeForm';
import RecipeList from '../components/RecipeList';
import { getRecipes, saveRecipe, deleteRecipe } from '../services/RecipeService';
import { Recipe } from '../types/Recipe';
import { useNavigation } from '@react-navigation/native';
import CostumButtons from '../components/CustomButtons';
import RecipeDetailScreen from './RecipeDetailScreen';

const AddRecipe = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    loadRecipes();
  }, []);
//Chargement d'une recette
  const loadRecipes = async () => {
    const fetchedRecipes = await getRecipes();
    setRecipes(fetchedRecipes);
  };
//Ajout d'une recette
  const handleAddRecipe = async (newRecipe: Recipe) => {
    await saveRecipe(newRecipe);
    loadRecipes();
  };
//Supression d'une recette
  const handleDeleteRecipe = async (id: string) => {
    await deleteRecipe(id);
    loadRecipes();
  };
//affichage popup
  const popUp = (recipeDetailScreen = RecipeDetailScreen) => {
    Alert.alert("Recette sélectionnée", Vous avez sélectionné : ${recipeDetailScreen});
  };


  //Affichage des Recettes
  return (
    <ScrollView>
      <View>
        <RecipeForm onSubmit={handleAddRecipe} label={''} />
        <RecipeList recipes={recipes} onDelete={handleDeleteRecipe} onRecipePress={popUp} />
        <CostumButtons/>
      </View>
    </ScrollView>
  );
};


export default AddRecipe;