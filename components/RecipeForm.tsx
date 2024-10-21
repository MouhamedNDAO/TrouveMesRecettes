// Composant de formulaire de Recette 
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { Recipe } from '../types/Recipe';

interface RecipeFormProps {
  onSubmit: (recipe: Recipe) => void;
}

const RecipeForm: React.FC<RecipeFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = () => {
    const recipe: Recipe = {
      id: Date.now().toString(),
      name,
      ingredients: ingredients.split(',').map(item => item.trim()),
      instructions,
      category,
      image: '', // Gestion de l'image à implémenter
      favorite: false,
    };
    onSubmit(recipe);
    // Réinitialiser le formulaire
    setName('');
    setIngredients('');
    setInstructions('');
    setCategory('');
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Nom de la recette" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Ingrédients" value={ingredients} onChangeText={setIngredients} />
      <TextInput style={styles.input} placeholder="Instructions" value={instructions} onChangeText={setInstructions} />
      <TextInput style={styles.input} placeholder="Catégorie" value={category} onChangeText={setCategory} />
      <Button title="Ajouter la recette" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  input: { marginBottom: 12, borderBottomWidth: 1, padding: 8 },
});

export default RecipeForm;
