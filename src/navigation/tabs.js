import React from "react"
import { View, Image, TouchableOpacity, StyleSheet } from "react-native"
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"
import Home from "../Pages/Home/Home"
import Search from "../Pages/Search/Search"
import Map from "../Pages/Map/Map"
import { FontAwesome, 
        MaterialIcons, 
        AntDesign,
        EvilIcons,
        Feather,
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
                component={Search}
                options={{
                    tabBarIcon: ({focused}) => (
                        <EvilIcons name="search" size={24} style={focused ? styles.orange : styles.black}    />
                    )
                }}
            />

            <Tab.Screen
                name="Map"
                component={Map}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Feather name="map" size={24} style={focused ? styles.orange : styles.black} />
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