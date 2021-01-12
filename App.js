import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';


import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"

import MainPage from "./src/pages/MainPage"
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-gesture-handler';
import _ from 'lodash';
import BagsInfo from './src/pages/BagsInfo';
import JacketsInfo from "./src/pages/JacketsInfo"
import WatchesInfo from "./src/pages/WatchesInfo"


const App = () => {
  const Navigator = createStackNavigator()





  return (
    <NavigationContainer>
      <Navigator.Navigator>
        <Navigator.Screen 
          name="Yogoppy" 
          component={MainPage} 
          options={{ 
            headerTitleStyle: {
              fontWeight: 'normal',
              fontFamily: 'monospace',
              fontSize: 30,
              color: 'white',
              alignSelf: 'center',
            },
            headerStyle: {
              backgroundColor: '#f4511e',
              height: 100,
            },
            headerLeft: () => (
              <TouchableOpacity>
                  <FontAwesome name="bars" size={30} color="black" style={{marginHorizontal: 10}} />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity>
                  <MaterialIcons name="search" size={30} color="black" style={{marginHorizontal: 10}} />
              </TouchableOpacity>
            )
          }} 
        />
        <Navigator.Screen name="bag" component={BagsInfo}/>
        <Navigator.Screen name="jacket" component={JacketsInfo}/>
        <Navigator.Screen name="watch" component={WatchesInfo}/>
      </Navigator.Navigator>

    </NavigationContainer>
  )
}



export default App