import React from "react";
import data from "../data.json";
import { SafeAreaView, FlatList, View, Text, StyleSheet, Platform } from "react-native";

export default function FlatLists() {
  return (
    <SafeAreaView>
      <FlatList
        data={data}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <View style={styles.card}>
              <Text style={styles.text}>{item.type}</Text>
              <Text style={styles.text}>{item.name}</Text>
            </View>
          );
        }}
        ItemSeparatorComponent={<View style={{ height: 15 }} />}
        ListEmptyComponent={<Text>No Data Found</Text>}
        ListHeaderComponent={
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Pokemon List</Text>
          </View>
        }
        ListFooterComponent={
            <View style={styles.headerContainer}>
            <Text>End of List</Text>
          </View>}
      />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: Platform.OS === "android" ? 20 : 0,
    borderWidth: 2,
    borderColor: "black",
    padding: 10,
    borderRadius: 20,
  },
  text: {
    fontSize: 16,
  },
  headerContainer: {
    alignItems: "center", // Horizontally center the text
    justifyContent: "center", // Vertically center the text
    padding: 10,
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold", // Optional: to make it more prominent
  },
});
