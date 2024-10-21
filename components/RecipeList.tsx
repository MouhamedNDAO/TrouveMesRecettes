// Composant des listes des Recettes
import React from 'react';
import { FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Recipe } from '../types/Recipe';

interface RecipeListProps {
  recipes: Recipe[];
  onRecipePress: (recipe: Recipe) => void;
  onDelete: (id: string) => void;
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes, onRecipePress, onDelete }) => {
  return (
    <FlatList
      data={recipes}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onRecipePress(item)} style={styles.item}>
          <Text style={styles.title}>{item.name}</Text>
          <Text>{item.category}</Text>
          <Button title="Supprimer" onPress={() => onDelete(item.id)} />
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: { padding: 16, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  title: { fontSize: 18 },
});

export default RecipeList;