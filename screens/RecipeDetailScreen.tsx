// src/screens/RecipeDetailScreen.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Recipe } from '../types/Recipe';

interface RecipeDetailScreenProps {
  route: { params: { recipe: Recipe } };
}

const RecipeDetailScreen: React.FC<RecipeDetailScreenProps> = ({ route }) => {
  const { recipe } = route.params;

  return (
    <View style={styles.container}>
      {recipe.image ? (
        <Image source={{ uri: recipe.image }} style={styles.image} />
      ) : null}
      <Text style={styles.title}>{recipe.name}</Text>
      <Text style={styles.category}>{recipe.category}</Text>
      <Text style={styles.ingredientsHeader}>Ingrédients :</Text>
      <Text>{recipe.ingredients.join(', ')}</Text>
      <Text style={styles.instructionsHeader}>Instructions :</Text>
      <Text>{recipe.instructions}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  category: {
    fontSize: 18,
    color: '#555',
    marginBottom: 8,
  },
  ingredientsHeader: {
    fontWeight: 'bold',
    marginTop: 16,
  },
  instructionsHeader: {
    fontWeight: 'bold',
    marginTop: 16,
  },
});

export default RecipeDetailScreen;
