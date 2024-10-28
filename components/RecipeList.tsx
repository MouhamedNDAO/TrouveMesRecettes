// Composant des listes des Recettes
import React from 'react';
import { FlatList, TouchableOpacity, Text, StyleSheet, Button } from 'react-native';
import { Recipe } from '../types/Recipe';

interface RecipeListProps {
  recipes: Recipe[];
  onRecipePress: (recipe: Recipe) => void;
  onDelete: (id: string) => void;
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes, onRecipePress, onDelete }) => {
  return (
    <FlatList
    style={styles.full}
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
  item: { padding: 16, borderBottomWidth: 2, borderBottomColor: '#ccc', borderRadius:20, backgroundColor:'#FAF4BB' },
  title: { fontSize: 18 },
  full:{margin:8, flex:3, resizeMode:'contain'}
});

export default RecipeList;
