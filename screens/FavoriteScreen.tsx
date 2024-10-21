// src/screens/FavoritesScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import RecipeItem from '../components/RecipeItem';
import { getRecipes, toggleFavorite } from '../services/recipeService';
import { Recipe } from '../types/Recipe';

const FavoritesScreen = () => {
  const [favorites, setFavorites] = useState<Recipe[]>([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    const recipes = await getRecipes();
    const favoriteRecipes = recipes.filter(recipe => recipe.favorite);
    setFavorites(favoriteRecipes);
  };

  const handleToggleFavorite = async (id: string) => {
    await toggleFavorite(id);
    loadFavorites(); // Recharger les favoris après modification
  };

  const handleRecipePress = (recipe: Recipe) => {
    navigation.navigate('RecipeDetail', { recipe });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Recettes Favorites</Text>
      <FlatList
        data={favorites}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <RecipeItem recipe={item} onPress={console.log} onToggleFavorite={handleToggleFavorite} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default FavoritesScreen;
