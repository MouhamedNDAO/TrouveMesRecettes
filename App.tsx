import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RecipeDetailScreen from './screens/RecipeDetailScreen';
import FavoritesScreen from './screens/FavoriteScreen';
import AddRecipe from './screens/AddRecipe';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
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
  );
}

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
      <Tab.Navigator >
        <Tab.Screen name="Home" component={HomeScreen} 
         options={{
          tabBarActiveBackgroundColor:'#FAF4BB',
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
        />
        <Tab.Screen name="Favoris" component={FavoritesScreen} 
        options={{
          tabBarActiveBackgroundColor:'#EFE3E9',
          tabBarLabel: 'Favoris',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" color={color} size={26} />
          ),
        }}
        />
        <Tab.Screen name="Ajouter Recette" component={AddRecipe}
        options={{
          tabBarActiveBackgroundColor:'#C8E1C6',
          tabBarLabel: 'Ajouter Recette',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-plus" color={color} size={26} />
          ),
        }}
        />
      </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
  );
}
