import React, { useContext } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { colors } from '../colors';
import { ThemeContext } from '../contexts/ThemeContext';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Maharashtra = ({ confirmed, recovered, deceased }) => {
    
    const { theme } = useContext(ThemeContext);

    return ( 
        <View style = {styles.infoContainer}>
            <View style = {styles.component}>
                <Text style = {[styles.info, {color : theme.syntax}]}>{confirmed}</Text>
                <Text style = {[styles.title, {color : colors.confirmed}]}>Confirmed</Text>
            </View>
            <View style = {styles.component}>
                <Text style = {[styles.info, {color : theme.syntax}]}>{recovered}</Text>
                <Text style = {[styles.title, {color : colors.recovered}]}>Recovered</Text>
            </View>
            <View style = {styles.component}>
                <Text style = {[styles.info, {color : theme.syntax}]}>{deceased}</Text>
                <Text style = {[styles.title, {color : colors.active}]}>Deceased</Text>
            </View>
        </View>
     );
}
const styles = StyleSheet.create({
    infoContainer : {
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    component : {
        marginRight : 10,
        height : windowHeight/9,
        borderRadius : windowHeight/80,
        justifyContent : 'center',
        alignItems : 'center'
    },
    title : {
        fontWeight : 'bold',
        fontSize : 15,
        textTransform : 'uppercase'
    },
    info : {
        fontSize : 22,
    }
})
export default Maharashtra;