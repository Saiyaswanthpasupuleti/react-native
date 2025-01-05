import React from "react";
import {View,Text,SafeAreaView,ScrollView,StyleSheet,StatusBar,} from "react-native";
import data from "../data.json";
export default function DefaultList() {
  return (
    <SafeAreaView>
      <ScrollView>
        {data.map((a) => {
          return (
            <View key={a.id} style={[styles.card, styles.android]}>
              <Text>Type : {a.type}</Text>
              <Text>Name : {a.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    borderColor: "black",
    padding: 10,
    margin: 10,
    borderRadius: 20,
  },
  android: {
    marginTop: StatusBar.currentHeight,
  },
});
