
import React from "react";
import { View, Text, StyleSheet, Platform, Image } from "react-native";

export default function One(props) {
  return (
    <View style={styles.card}>
      <View style={styles.nav}>
        <Text style={styles.text}>{props.title}</Text>
        <Text style={styles.text}>{props.hp}</Text>
      </View>
      <View>
        <Image style={styles.image} source={props.image}></Image>
      </View>
      <View>
        <Text style={styles.cover}>{props.button}</Text>
      </View>
      <View style={styles.start}>
        <Text style={styles.size}>Movies :{props.movies}</Text>
        <Text  style={styles.size}>Weakness :{props.weakness}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
 
  card: {
    borderWidth: 2,
    borderColor: "black",
  
    padding: 15,
    margin: 17,
    justifyContent: "center",
    alignItems: "center",
    ...Platform.select({
      ios: {
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowColor: "black",
        shadowRadius: 2,
        shadowOpacity: 0.4,
        borderRadius: 5,
      },
      android: {
        elevation: 4,
        borderRadius: 5,
      },
    }),
  },
  image: {
    height: 150,
    width:150,
    justifyContent: "center",
    alignItems: "center",

  },
  nav: {
    width:"100%",
   
      flexDirection: "row",
      justifyContent:"space-between",
    },
    text:{
        fontSize:20,
        fontWeight:"bold"
       
    },
    cover:{
        
        borderWidth:2,
        borderColor:"black",
       margin:20,
       padding:10,
       borderRadius:10
    },
    start:{
        width: "100%",
        alignItems: "flex-start",
        marginTop: 10,
     
    },
    size:{
        fontSize:15,
        fontWeight:"bold"
    }
});
