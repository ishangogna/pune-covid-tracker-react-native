
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { colors } from '../colors';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Active = ({ active, delta}) => {
    return ( 
        <View style = {styles.infoContainer}>
            <Text style = {styles.title}>Active</Text>
            <View style = {styles.numbers}>
                <Text style = {styles.plus}>{delta? delta : null}</Text>
                <Text style = {styles.total}>{active}</Text>
            </View>
            
        </View>
     );
}
const styles = StyleSheet.create({
    infoContainer : {
        height : 70,
        justifyContent : 'space-between',
        alignItems : 'center',
        backgroundColor : colors.activeLight,
        padding : 10,
        borderRadius : windowHeight/80,
        marginBottom : 10,
    },
    title : {
        color : colors.active,
        fontWeight : 'bold',
        fontSize : 15,
        textTransform : 'uppercase'
    },
    plus : {
        color : colors.active
    },
    total : {
        color : colors.active,
        fontWeight : 'bold',
        fontSize : 20
    }
})
export default Active;