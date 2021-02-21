import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';


import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"

import Tabs from "./src/navigation/tabs"
import _ from 'lodash';

import OrderDelivery from "./src/Pages/OrderDelivery/OrderDelivery"
import Restaurant from "./src/Pages/Restaurants/Restaurant"



const App = () => {
  const Stack = createStackNavigator()





  return (
   <NavigationContainer>
     <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={"Home"}
     >
       <Stack.Screen name="Home" component={Tabs} />
       <Stack.Screen name="Restaurant" component={Restaurant} />
       <Stack.Screen name="Order" component={OrderDelivery} />
     </Stack.Navigator>
   </NavigationContainer>
  )
}



export default App