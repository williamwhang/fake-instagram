import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Fake Instagram </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    backgroundColor: 'red',
    textAlign: 'center',
  },
});
