// Ecran principale de l'application
import React, { useEffect, useState } from 'react';
import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import RecipeForm from '../components/RecipeForm';
import RecipeList from '../components/RecipeList';
import { getRecipes, saveRecipe, deleteRecipe } from '../services/RecipeService';
import { Recipe } from '../types/Recipe';
import { Link, useNavigation } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AddRecipe from './AddRecipe';

const HomeScreen = () => {
const navigation = useNavigation();
const [recipes, setRecipes] = useState<Recipe[]>([]);

useEffect(() => {
  loadRecipes();
}, []);
//Chargement d'une recette
const loadRecipes = async () => {
  const fetchedRecipes = await getRecipes();
  setRecipes(fetchedRecipes);
};
//Supression d'une recette
const handleDeleteRecipe = async (id: string) => {
  await deleteRecipe(id);
  loadRecipes();
};
  return(
    
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>Liste des Recettes</Text>
        <RecipeList recipes={recipes} onDelete={handleDeleteRecipe} onRecipePress={console.log} />
      </View>
    </ScrollView>
  )
};
const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor:'#0000'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    alignSelf:'center'
  },
});

export default HomeScreen;

