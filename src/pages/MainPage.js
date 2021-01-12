import React from "react"
import { View, Text, StyleSheet, Image, FlatList } from "react-native"


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfilePage from "./ProfilePage";
import SearchPage from "./Search";
import HomePage from "./HomePage"
import CartsPage from "./Carts"
import MorePage from "./More"
import {FontAwesome, AntDesign, EvilIcons, Ionicons} from "@expo/vector-icons"

import { itemList } from "../util"
import { TouchableOpacity } from "react-native-gesture-handler";

const Tab = createBottomTabNavigator();


const MainPage = () => {

   var numColumns = 4

    return <>
        <View >
            <FlatList 
              numColumns={numColumns}
              keyExtractor={(item) => item.id}
              data={itemList}
              renderItem={({item}) => {
                  return <View style={styles.featureHeader}>
                    <TouchableOpacity style={styles.list}>
                       <Text style={styles.name}>{item.name}</Text> 
                    </TouchableOpacity>
                      
                    </View>
              }}
            />
        </View>

        <Tab.Navigator>
            <Tab.Screen 
                name="Home" 
                component={HomePage}
                options={{
                    tabBarIcon: () => (
                      <AntDesign name="home" size={24} />
                    ),
                  }}  
            />
            <Tab.Screen 
                name="Search" 
                component={SearchPage} 
                options={{
                    tabBarIcon: () => (
                      <EvilIcons name="search" size={24} />
                    ),
                  }} 
            />
            <Tab.Screen 
                name="Carts" 
                component={CartsPage}
                options={{
                    tabBarIcon: () => (
                      <AntDesign name="shoppingcart" size={24} />
                    ),
                    tabBarBadge: 3,
                  }} 
            />
            <Tab.Screen 
                name="Profile" 
                component={ProfilePage} 
                options={{
                    tabBarIcon: () => (
                      <Ionicons name="person-outline" size={24} />
                    ),
                  }}  
            />
            <Tab.Screen 
                name="More" 
                component={MorePage}
                options={{
                    tabBarIcon: () => (
                      <FontAwesome name="bars" size={24} />
                    ),
                  }}
            />
        </Tab.Navigator>
    </>
}

const styles = StyleSheet.create({
    featureHeader: {
        flexDirection: 'row',
        flex: 1,
        flexWrap: 'wrap',
        justifyContent: "space-around",
        marginTop: 2,
    },
    textStyle: {
        fontSize: 20,
        color: 'black',
        textTransform: 'uppercase'
    },
    list: {
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 5,
      marginVertical: 7,
    }, 
    name : {
      fontSize: 12,
    }
})





export default MainPage