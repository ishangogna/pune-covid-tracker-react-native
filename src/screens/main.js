import React, { useContext } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { ThemeContext } from '../contexts/ThemeContext';

const MainPage = () => {
    const { theme } = useContext(ThemeContext)
    return ( 
        <View style = {{backgroundColor : theme.bg, flex : 1}}>
            <Text style = {{color : theme.syntax}}>Main Page</Text>
        </View>
     );
}
 
export default MainPage;