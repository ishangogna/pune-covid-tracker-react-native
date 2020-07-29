import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Tabs from '../routes/tabs/tabs';
import { ThemeContext } from '../contexts/ThemeContext';
import * as Animated from 'react-native-animatable';

const HomePage = () => {
    return ( 
        <View style = {{flex : 1 , backgroundColor : '#1DA1F2'}}>
           <View style = {styles.header}>
               <Text style = {[styles.headerText, {color : 'white'}]}>Pune Covid-19</Text>
               <Text style = {{color : 'lightgrey'}}>Made with ♥ by @ishangogna</Text>
           </View>
           <Animated.View 
                style = {styles.content}
                animation = 'fadeInUpBig'
                duration = {500}
                >
               <Tabs />
           </Animated.View>
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