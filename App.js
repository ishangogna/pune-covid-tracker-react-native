import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tabs from './src/routes/tabs/tabs';
import ThemeContextProvider from './src/contexts/ThemeContext';

export default function App() {
  return (
    <ThemeContextProvider>
      <View style={styles.container}>
        <Tabs />
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
