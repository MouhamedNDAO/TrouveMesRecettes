// Composant de formulaire de Recette 
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Pressable } from 'react-native';
import { Recipe } from '../types/Recipe';
import * as ImagePicker from 'expo-image-picker';

interface RecipeFormProps {
  onSubmit: (recipe: Recipe) => void;
  label: string;
  theme?: 'primary';
  onPress?: () => void;
}

const RecipeForm: React.FC<RecipeFormProps> = ({ onSubmit,label, theme, onPress }) => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [category, setCategory] = useState('');
  const [favorite, setFavorites] = useState('');
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
    } else {
      alert('You did not select any image.');
    }
  };

  const handleSubmit = () => {
    const recipe: Recipe = {
      id: Date.now().toString(),
      name,
      ingredients: ingredients.split(',').map(item => item.trim()),
      instructions,
      category,
      image: '', // Gestion de l'image à implémenter
      favorite:true,
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
      <View
        style={[
          styles.buttonContainer,
          { borderWidth: 4, borderColor: '#ffd33d', borderRadius: 18 },
        ]}>
        <Pressable style={[styles.button, { backgroundColor: '#fff' }]} onPress={onPress}>
          <Text style={[styles.buttonLabel, { color: '#25292e' }]}>{label}</Text>
        </Pressable>
      </View>
      <Button title="Ajouter la recette" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: "#C8E1C6", marginTop: '50%', borderRadius:20 },
  input: { marginBottom: 12, borderBottomWidth: 1, padding: 8 },
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});

export default RecipeForm;
