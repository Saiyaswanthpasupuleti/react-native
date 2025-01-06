import React, { useState } from "react";
import { Platform, SafeAreaView, StyleSheet, Switch, Text, View } from "react-native";
export default function Switchs() {
    const [darkmode,Setdarkmode]=useState(false)
  return (
    <SafeAreaView>
      <View style={styles.main}>
        <Text>Is Dark Mode</Text>
       <Switch value={darkmode} onValueChange={()=>Setdarkmode((a)=>!a)}/>
      </View>
    </SafeAreaView>
  );
}
const styles=StyleSheet.create({
    main:{
        marginTop:Platform.OS==="android"?10:0,
     flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    }


})