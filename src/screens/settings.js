import React, { useContext } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { ThemeContext } from '../contexts/ThemeContext';

const SettingsPage = () => {
    const { theme, dispatch } = useContext(ThemeContext);

    return ( 
        <View style = {{flex : 1, backgroundColor : theme.bg}}>
            <Text style = {{color : theme.syntax}}>Settings Page</Text>
            <Button title = 'Dark Mode' onPress = {()=>dispatch({type:'DARK_MODE'})}></Button>
            <Button title = 'Light Mode' onPress = {()=>dispatch({type: 'LIGHT_MODE'})}></Button>
        </View>
     );
}
 
export default SettingsPage;