// src/screens/RecipeDetailScreen.tsx
import React from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';

const RecipeDetailModal = ({ visible, recipe, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalView}>
          <Text style={styles.title}>{recipe.name}</Text>
          <Text style={styles.label}>Ingredients:</Text>
          <Text>{recipe.ingredients.join(', ')}</Text>
          <Text style={styles.label}>Instructions:</Text>
          <Text>{recipe.instructions}</Text>
          <Button title="Close" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  label: {
    marginTop: 10,
    fontWeight: 'bold',
  },
});

export default RecipeDetailModal;
