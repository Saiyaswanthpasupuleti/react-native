import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Flex({ children, style }) {
  return (
    <View style={style}>
      <Text>{children}</Text>
    </View>
  );
}

