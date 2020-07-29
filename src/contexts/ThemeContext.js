import React, { useState, createContext, useReducer } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ThemeReducer from '../reducers/ThemeReducer';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
   const [theme, dispatch] = useReducer(ThemeReducer,{
       bg : 'white', syntax : 'black'
   })
   return(
       <ThemeContext.Provider value = {{theme, dispatch}}> 
           {props.children}
       </ThemeContext.Provider>
   )
}
export default ThemeContextProvider;