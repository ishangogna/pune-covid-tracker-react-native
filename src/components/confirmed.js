import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { colors } from '../colors';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Confirmed = ({ confirmed, delta }) => {
    

    return ( 
        <View style = {styles.infoContainer}>
            <Text style = {styles.title}>confirmed</Text>
            <View style = {styles.numbers}>
                <Text style = {styles.plus}>{delta ? delta : null}</Text>
                <Text style = {styles.total}>{confirmed}</Text>
            </View>
            
        </View>
     );
}
const styles = StyleSheet.create({
    infoContainer : {
        height : windowHeight/9,
        justifyContent : 'space-between',
        alignItems : 'center',
        backgroundColor : colors.confirmedLight,
        padding : 10,
        borderRadius : windowHeight/80,
        marginBottom : 10,
    },
    numbers : {
        alignItems : 'center'
    },
    title : {
        color : colors.confirmed,
        fontWeight : 'bold',
        fontSize : 15,
        textTransform : 'uppercase'
    },
    plus : {
        color : colors.confirmed
    },
    total : {
        color : colors.confirmed,
        fontWeight : 'bold',
        fontSize : 20
    }
})
export default Confirmed;