import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const RecipeForm = ({ addRecipe }) => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = () => {
    const newRecipe = {
      id: Date.now(),
      name,
      ingredients: ingredients.split(','),
      instructions,
    };
    addRecipe(newRecipe);
    setName('');
    setIngredients('');
    setInstructions('');
  };

  return (
    <View style={styles.form}>
      <TextInput
        placeholder="Nom de la recette"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Ingrédients (séparés par des virgules)"
        value={ingredients}
        onChangeText={setIngredients}
        style={styles.input}
      />
      <TextInput
        placeholder="Instructions"
        value={instructions}
        onChangeText={setInstructions}
        style={styles.input}
      />
      <Button title="Ajouter Recette" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default RecipeForm;

