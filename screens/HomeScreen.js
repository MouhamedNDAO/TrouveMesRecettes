import React, { useState, useEffect } from 'react';
import { View, FlatList, Button, TextInput, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RecipeForm from '../components/RecipeForm';
import RecipeList from '../components/RecipeList';

const HomeScreen = ({ navigation }) => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    loadRecipes();
  }, []);

  const loadRecipes = async () => {
    const storedRecipes = await AsyncStorage.getItem('recipes');
    if (storedRecipes) {
      setRecipes(JSON.parse(storedRecipes));
    }
  };

  const addRecipe = async (recipe) => {
    const newRecipes = [...recipes, recipe];
    setRecipes(newRecipes);
    await AsyncStorage.setItem('recipes', JSON.stringify(newRecipes));
  };

  const deleteRecipe = async (id) => {
    const newRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(newRecipes);
    await AsyncStorage.setItem('recipes', JSON.stringify(newRecipes));
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Rechercher une recette"
        value={search}
        onChangeText={setSearch}
        style={styles.searchBar}
      />
      <RecipeForm addRecipe={addRecipe} />
      <RecipeList recipes={filteredRecipes} deleteRecipe={deleteRecipe} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchBar: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
});

export default HomeScreen;

