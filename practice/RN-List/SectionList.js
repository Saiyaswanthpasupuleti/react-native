import React, { useState } from "react";
import { SafeAreaView, View, Text, SectionList, TextInput } from "react-native";
import groupdata from "./groupData.json";
export default function SectionLists() {
    const [name,setname]=useState("sai")
  return (
    <SafeAreaView>
      <SectionList
        sections={groupdata}
        renderSectionHeader={({ section }) => (
            <View>
   <Text style={{ color: "red" }}>{section.type}</Text>
            </View>
       
        )}
        renderItem={({ item }) => {
          return (
            <View>
              <Text style={{ color: "green" }}>{item}</Text>
            </View>
          );
        }}
      />
      
      <TextInput placeholder="Enter" style={{borderWidth:1}} onChangeText={setname} ></TextInput>
      <Text>{name}</Text>
    </SafeAreaView>
  );s
}
