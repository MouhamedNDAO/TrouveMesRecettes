// Affichage d'une recette individuellement
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Recipe } from '../types/Recipe';

interface RecipeItemProps {
  recipe: Recipe;
  onPress: (recipe: Recipe) => void;
  onToggleFavorite: (id: string) => void;
}

const RecipeItem: React.FC<RecipeItemProps> = ({ recipe, onPress, onToggleFavorite }) => {
  return (
    <TouchableOpacity onPress={() => onPress(recipe)} style={styles.item}>
      {recipe.image ? (
        <Image source={{ uri: recipe.image }} style={styles.image} />
      ) : null}
      <Text style={styles.title}>{recipe.name}</Text>
      <Text style={styles.category}>{recipe.category}</Text>
      <TouchableOpacity onPress={() => onToggleFavorite(recipe.id)}>
        <Text style={styles.favoriteText}>
          {recipe.favorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: '100%',
    height: 150,
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
  },
  category: {
    fontSize: 14,
    color: '#555',
  },
  favoriteText: {
    color: 'blue',
    marginTop: 5,
  },
});

export default RecipeItem;
