import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, FlatList, ActivityIndicator, Button, TextInput, StyleSheet } from "react-native";

export default function Networking() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");

  const fetchData = async (limit = 10) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    );
    const result = await response.json();
    setData(result);
    setLoading(false);
  };

  const handleRefresh = () => {
    setRefresh(true);
    fetchData(20);
    setRefresh(false);
  };

  const handleAddData = async () => {
    const newPost = {
      title: newTitle,
      body: newBody,
    };

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    });
    const result = await response.json();

    // Update the data list
    setData((prevData) => [result, ...prevData]); // Add the new post to the top of the list
    setNewTitle(""); // Reset title input
    setNewBody(""); // Reset body input
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Title"
          value={newTitle}
          onChangeText={(text) => setNewTitle(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Body"
          value={newBody}
          onChangeText={(text) => setNewBody(text)}
        />
        <Button title="Add Post" onPress={handleAddData} />
      </View>
      <FlatList
        refreshing={refresh}
        onRefresh={handleRefresh}
        data={data}
        renderItem={({ item }) => {
          return (
            <View style={styles.itemContainer}>
              <Text style={styles.title}>Title: {item.title}</Text>
              <Text>Body: {item.body}</Text>
            </View>
          );
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
