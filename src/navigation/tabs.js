import React from "react"
import { View, Image, TouchableOpacity, StyleSheet } from "react-native"
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"
import Home from "../Pages/Home/Home"
import { FontAwesome, 
        MaterialIcons, 
        AntDesign,
        EvilIcons,
        Ionicons} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();


const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <FontAwesome name="cutlery" size={24} style={focused ? styles.orange : styles.black} />
                    )
                }}
            />

            <Tab.Screen
                name="Search"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <EvilIcons name="search" size={24} style={focused ? styles.orange : styles.black}    />
                    )
                }}
            />

            <Tab.Screen
                name="Like"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <AntDesign name="heart" size={24}  style={focused ? styles.orange : styles.black} />
                    )
                }}
            />

            <Tab.Screen
                name="Profile"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Ionicons name="person" size={24}  style={focused ? styles.orange : styles.black} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs

const styles = StyleSheet.create({
    orange: {
        color: "#FF7F50",
    },
    black: {
        color: 'black'
    }
})