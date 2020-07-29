import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { colors } from '../colors';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Recovered = ( {recovered} ) => {
    return ( 
        <View style = {styles.infoContainer}>
            <Text style = {styles.title}>Recovered</Text>
            <View style = {styles.numbers}>
                <Text style = {styles.plus}>+3,201</Text>
                <Text style = {styles.total}>{recovered}</Text>
            </View>
        </View>
     );
}
const styles = StyleSheet.create({
    infoContainer : {
        height : windowHeight/9,
        width : windowWidth/4,
        justifyContent : 'space-between',
        alignItems : 'center',
    },
    numbers : {
        alignItems : 'center'
    },
    title : {
        color : colors.recovered,
        fontWeight : 'bold',
        fontSize : 15,
        textTransform : 'uppercase'
    },
    plus : {
        color : colors.recovered
    },
    total : {
        color : colors.recovered,
        fontWeight : 'bold',
        fontSize : 20
    }
})
export default Recovered;