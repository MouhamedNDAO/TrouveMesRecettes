import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RecipeDetailScreen = ({ route }) => {
  const { recipe } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{recipe.name}</Text>
      <Text style={styles.subtitle}>Ingrédients:</Text>
      <Text>{recipe.ingredients.join(', ')}</Text>
      <Text style={styles.subtitle}>Instructions:</Text>
      <Text>{recipe.instructions}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    marginTop: 10,
  },
});

export default RecipeDetailScreen;