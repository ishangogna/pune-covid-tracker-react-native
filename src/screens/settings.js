import React, { useContext } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../contexts/ThemeContext';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SettingsPage = () => {
    const { theme, dispatch } = useContext(ThemeContext);
    return ( 
        <View style = {[styles.settingsContainer,{ backgroundColor : theme.bg}]}>
            <Text style = {[styles.header, {color : theme.syntax}]}>Settings</Text>
            <View style = {styles.settings}>
                <Text style = {styles.version}>v1.0.0</Text>
                <Text style = {[styles.subHeading,{color : theme.syntax}]}>Change themes</Text>
                <View style = {styles.options}>
                    <TouchableOpacity onPress = {()=>dispatch({type:'DARK_MODE'})}>
                        <View style = {styles.themeContainer}>
                            <Text style = {styles.theme}>Dark</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {()=>dispatch({type:'LIGHT_MODE'})}>
                        <View style = {styles.themeContainer}>
                            <Text style = {styles.theme}>Light</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
     );
}
const styles = StyleSheet.create({
    settingsContainer : {
        flex : 1,
        paddingHorizontal : 20,
    },
    header : {
        marginTop : windowHeight/15,
        fontSize : 32,
        fontWeight : 'bold'
    },
    version : {
        color : 'grey',
    },
    options : {
        marginTop : 15,
        flexDirection : 'row',
        justifyContent : 'flex-start'
    },
    themeContainer : {
        height : windowHeight/15,
        width : windowWidth/5,
        backgroundColor : '#1DA1F2',
        borderRadius : windowHeight/100,
        justifyContent : 'center',
        alignItems : 'center',
        marginRight : 10,
    },
    theme : {
        color: 'white',
    
    },
    subHeading : {
        fontSize : 20,
        marginTop : 30,
    }
})

export default SettingsPage;