import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RecipeDetailScreen from './screens/RecipeDetailScreen';
import FavoritesScreen from './screens/FavoriteScreen';
import AddRecipe from './screens/AddRecipe';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ACCUEIL" component={HomeScreen}  options={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="AJOUTER UNE RECETTE" component={AddRecipe}  options={{
          headerStyle: {
            backgroundColor: '#f4558e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="DETAILS RECETTE" component={RecipeDetailScreen} />
        <Stack.Screen name="FAVORIS" component={FavoritesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
