import React from 'react'
import { SafeAreaView, StyleSheet,Platform, ScrollView } from 'react-native'
import One from './PokemonCard/One'
const image=require("./assets/pickachu/bulbasaur.png")
const image1=require("./assets/pickachu/charmander.png")
const image2=require("./assets/pickachu/pikachu.png")
const image3=require("./assets/pickachu/squirtle.png")
export default function PokemonCards() {
  return (
    <ScrollView>

  
    <SafeAreaView style={styles.container}>
      <One title="Charmander" button="🔥Fire" hp="♥️ 39" image={image1} movies="Scratch,Ember,Growl,Leer" weakness="Water,rock"/>
      <One title="Squirtle" button="💧water" hp="♥️ 40" image={image3} movies="Tackle,watergun,tail,whisp, withdraw" weakness="Electric,glass"/>
      <One title="bulbasaur" button="🌿grass" hp="♥️ 32" image={image} movies="Tackle,wine,whisp,Growl,Leech,seed" weakness="Fire,ice,flying"/>
      <One title="Pikachu" button="⚡️Electric" hp="♥️ 45" image={image2} movies="Quick Attack,ThunderBolt,tail,whisp,growl" weakness="Ground"/>

    </SafeAreaView>
    </ScrollView>
    
  )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        
        paddingTop:Platform.OS==="android"?"25":0
  
    }
  })
  