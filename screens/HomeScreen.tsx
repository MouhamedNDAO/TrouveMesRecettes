// Ecran principale de l'application
import React, { useEffect, useState } from 'react';
import { Button, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import RecipeForm from '../components/RecipeForm';
import RecipeList from '../components/RecipeList';
import { getRecipes, saveRecipe, deleteRecipe } from '../services/RecipeService';
import { Recipe } from '../types/Recipe';
import { Link, useNavigation } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AddRecipe from './AddRecipe';
import RecipeDetailScreen from './RecipeDetailScreen';

const HomeScreen = () => {
const navigation = useNavigation();
const [recipes, setRecipes] = useState<Recipe[]>([]);
const [selectedRecipe, setSelectedRecipe] = useState(null);
const [modalVisible, setModalVisible] = useState(false);

//Affichage du detail des recette en popUp
  const openModal = (recipe) => {
    setSelectedRecipe(recipe);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedRecipe(null);
  };

useEffect(() => {
  loadRecipes();
  
  const fetchRecipes = async () => {
    const data = await getRecipes();
    setRecipes(data);
  };

  fetchRecipes();
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
        <FlatList
        data={recipes}
        renderItem={({ item }) => (
          <RecipeList recipes={recipes} onDelete={handleDeleteRecipe} onRecipePress={() => openModal(item)} />
        )}
        keyExtractor={item => item.id.toString()}
      />
        <ScrollView>
          {selectedRecipe && (
            <RecipeDetailScreen
              visible={modalVisible}
              recipe={selectedRecipe}
              onClose={closeModal}
            />
          )}
        </ScrollView>  
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

