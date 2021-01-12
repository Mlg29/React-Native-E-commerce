import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'

import { bags, Jacket, Watches } from "../util"
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from "react-navigation"


const HomePage = ({ navigation }) => {



    return (
        <ScrollView>
            <View style={styles.homeContainer}>
                <Text style={styles.textOne}>Bags</Text>
                <Text style={styles.textTwo}>See all</Text>
            </View>
            <FlatList
                horizontal
                keyExtractor={(item) => item.id}
                data={bags}
                renderItem={({ item }) => {
                    return <TouchableOpacity onPress={() => navigation.navigate("bag", {id: item.id})}>
                        <View style={styles.detailContainer}>
                            <Image source={{ uri: item.image }} style={styles.imageStyle} />
                            <Text style={styles.headerName}>{item.name}</Text>
                            <Text style={styles.textPrice}>
                                <FontAwesome name="dollar" size={14} color="black" style={{ marginVertical: 2 }} />
                                {item.price}</Text>
                        </View>
                    </TouchableOpacity>
                }}


            />


            <View style={styles.homeContainer}>
                <Text style={styles.textOne}>Jackets</Text>
                <Text style={styles.textTwo}>See all</Text>
            </View>
            <FlatList
                horizontal
                keyExtractor={(item) => item.id}
                data={Jacket}
                renderItem={({ item }) => {
                    return <TouchableOpacity onPress={() => navigation.navigate("jacket", {id: item.id})}>
                        <View style={styles.detailContainer}>
                            <Image source={{ uri: item.image }} style={styles.imageStyle} />
                            <Text style={styles.headerName}>{item.name}</Text>
                            <Text style={styles.textPrice}>
                                <FontAwesome name="dollar" size={14} color="black" style={{ marginVertical: 2 }} />
                                {item.price}</Text>
                        </View>
                    </TouchableOpacity> 
                }}


            />


            <View style={styles.homeContainer}>
                <Text style={styles.textOne}>Watches</Text>
                <Text style={styles.textTwo}>See all</Text>
            </View>
            <FlatList
                horizontal
                keyExtractor={(item) => item.id}
                data={Watches}
                renderItem={({ item }) => {
                    return <TouchableOpacity onPress={() => navigation.navigate("watch", {id: item.id})}>
                        <View style={styles.detailContainer}>
                            <Image source={{ uri: item.image }} style={styles.imageStyle} />
                            <Text style={styles.headerName}>{item.name}</Text>
                            <Text style={styles.textPrice}>
                                <FontAwesome name="dollar" size={14} color="black" style={{ marginVertical: 2 }} />
                                {item.price}</Text>
                        </View>
                        </TouchableOpacity>
                }}


            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    homeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    textOne: {
        fontSize: 30,
        color: 'grey',
        textTransform: 'capitalize',
        fontWeight: 'bold'
    },
    textTwo: {
        fontSize: 20,
        color: 'orange',
        textTransform: 'uppercase'
    },
    imageStyle: {
        width: 70,
        height: 70,
    },
    detailContainer: {
        justifyContent: 'center',
        marginHorizontal: 10,
        width: 100,
        height: 150,
        backgroundColor: 'white',
        paddingHorizontal: 15,
        borderRadius: 12,
    },
    headerName: {
        fontSize: 11,
        marginTop: 14,
        color: 'grey',
    },
    textPrice: {
        color: 'black',
        fontWeight: 'bold'
    }
})

export default withNavigation(HomePage)
