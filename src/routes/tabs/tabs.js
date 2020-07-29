import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import MainPage from '../../screens/main';
import SettingsPage from '../../screens/settings';
import React from 'react';
const tab = createBottomTabNavigator();

const Tabs = () => {
    return ( 
        <NavigationContainer>
            <tab.Navigator>
                <tab.Screen name = 'Home' component = {MainPage}/>
                <tab.Screen name = 'Settings' component = {SettingsPage}/>
            </tab.Navigator>
        </NavigationContainer>
     );
}
 
export default Tabs;