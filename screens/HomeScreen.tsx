// Ecran principale de l'application
import React, { useEffect, useState } from 'react';
import { Button, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import RecipeForm from '../components/RecipeForm';
import RecipeList from '../components/RecipeList';
import { getRecipes, saveRecipe, deleteRecipe } from '../services/RecipeService';
import { Recipe } from '../types/Recipe';
import { Link, useNavigation } from '@react-navigation/native';
import CostumButtons from '../components/CustomButtons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AddRecipe from './AddRecipe';

const HomeScreen = () => {
const navigation = useNavigation();
  return(
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: 'https://recettesdafrique.com/wp-content/uploads/2021/08/Thiep-bou-dien-ou-riz-au-poisson.jpg',
              }}
              />
            <Text style={styles.desc}>Quand la creativite rencontre l'innovation le resultat ne peut etre que palpitant</Text>
            <Text style={styles.join}>N'hesitez pas !!
               Entrez donc et ne vous priver pas de la possibilite de creer vos propres recettes ainsi que de decouvrir d'autre recettes</Text>
            <View style ={styles.press}>
            <Button title='COMMENCER' onPress={()=> navigation.navigate('AJOUTER UNE RECETTE')}/>
            </View>
      </SafeAreaView>
    </SafeAreaProvider>);

};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#0000'
  },
  tinyLogo: {
    width: 200,
    height: 250,
    borderTopLeftRadius: 12 ,
    borderBottomRightRadius: 12,
    top:15,
    //left:90,
    alignSelf:'center'
  },
  desc:{
    fontFamily:'bold',
    fontSize: 20,
    fontStyle:'italic',
    justifyContent:'center',
    top:19,
    textAlign:'center',

  },
  join:{
    fontFamily:'semi-bold',
    fontSize: 14,
    fontStyle:'normal',
    justifyContent:'center',
    top:39,
    textAlign:'center',

  },
  press:{
    top:100,
    backgroundColor:'#17B30C',
    color:'#0000'
  }
});

export default HomeScreen;

