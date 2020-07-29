import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import MainPage from '../../screens/main';
import SettingsPage from '../../screens/settings';
import React, { useContext } from 'react';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { ThemeContext } from '../../contexts/ThemeContext';


const tab = createBottomTabNavigator();

const Tabs = () => {
    const { theme } = useContext(ThemeContext);
    return ( 
        <NavigationContainer>
            <tab.Navigator
                tabBarOptions={{
                activeTintColor: '#1DA1F2',
                style : {
                    backgroundColor : theme.bg,
                    borderTopColor : theme.bg
                }
            }}
            
            >
                <tab.Screen 
                    name = 'Home' 
                    component = {MainPage}
                    options = {{
                        tabBarIcon: ({ color, size }) => (
                            <Entypo name="home" size={size} color={color} />
                        ),
                    }}  
                    />
                <tab.Screen 
                    name = 'Settings' 
                    component = {SettingsPage}
                    options = {{
                        tabBarIcon: ({ color, size }) => (
                            <Feather name="settings" size={size} color={color} />
                        ),
                    }}  
                    />
            </tab.Navigator>
        </NavigationContainer>
     );
}
 
export default Tabs;