import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Tabs from '../routes/tabs/tabs';
import { ThemeContext } from '../contexts/ThemeContext';


const HomePage = () => {
    const { theme } = useContext(ThemeContext)
    return ( 
        <View style = {{flex : 1 , backgroundColor : '#1DA1F2'}}>
           <View style = {styles.header}>
               <Text style = {[styles.headerText, {color : theme.syntax}]}>Corona Tracker</Text>
           </View>
           <View style = {styles.content}>
               <Tabs />
           </View>
        </View>
     );
}
 
const styles = StyleSheet.create({
    header : {
        flex : 2,
        justifyContent : 'center',
        alignItems : 'center'
    },
    headerText : {
        fontSize : 32,
        fontWeight : 'bold'
    },
    content : {
        flex : 5,
        borderTopRightRadius : 50,
        borderTopLeftRadius : 50,
        overflow : 'hidden',
    
    }

})
export default HomePage;