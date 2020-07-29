import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ThemeContextProvider from './src/contexts/ThemeContext';
import HomePage from './src/screens/home';


export default function App() {
  return (
    <ThemeContextProvider>
      <View style={styles.container}>
        <HomePage />
        <StatusBar style="auto" />
      </View>
    </ThemeContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
