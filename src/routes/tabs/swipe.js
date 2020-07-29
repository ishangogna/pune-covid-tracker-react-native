import React, { useState, useContext } from 'react';
import { Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import MainPage from '../../screens/main';
import SecondaryPage from '../../screens/secondary';
import { ThemeContext } from '../../contexts/ThemeContext';


const initialLayout = { width : Dimensions.get('window').width }

export default function Swipe(props){
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key : 'first', title : 'pune' },
        { key : 'second', title : 'maharashtra' }
    ])
    const { theme } = useContext(ThemeContext);
    const renderScene = ({ route }) => {
        switch (route.key) {
          case 'first':
             return <MainPage {...props}/>;
          case 'second':
            return <SecondaryPage {...props}/>;
          default:
            return null;
      }}
    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: '#FF3B53' }}
            activeColor = '#1DA1F2'
            inactiveColor = {theme.syntax}
            style={{ backgroundColor: theme.bg, color : theme.syntax}}
        />
        );
    return (
        <TabView 
            navigationState = {{index,routes}}
            renderScene = {renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            renderTabBar = {renderTabBar}
        />
    )
}


