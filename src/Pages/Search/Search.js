import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, Image } from 'react-native'

import { foodItems } from "../../utils"

import {Entypo, FontAwesome} from '@expo/vector-icons';



export default function Search({navigation}) {
    const [search, setSearch] = useState("")
    const [datas, setDatas] = useState([])


    const filteredList = () => {
        const filters = foodItems.filter(a => a.name.includes(search))
        setDatas(filters)
    }

    useEffect(() => {
        filteredList()
    }, [search])

    


    return (
        <View style={{ paddingBottom: 100 }}>
            <View style={{ marginTop: 50, paddingHorizontal: 10}}>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 10 }}
                    placeholder=" Search for Food"
                    value={search}
                    onChangeText={(text) => setSearch(text)}
                />
            </View>
            <FlatList
                data={datas}
                initialNumToRender={50}
                keyExtractor={item => item.id}
                renderItem={({item}) => {
                    return <TouchableOpacity
                    style={styles.imageContainer}
                    key={item.id}
                    onPress={() => navigation.navigate('Order', { id: item.id, name: item.name })}
                >
                    <View>
                        <Image source={{ uri: item.image }} style={styles.foodImage} />
                    </View>
                    <View>
                        <Text style={styles.deliveryBox}>{item.delivery}</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 20, paddingTop: 8 }}>{item.name}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 80 }}>
                            <Text><Entypo name="star" size={14} color="#FF7F50" />{item.rating}</Text>
                            <Text>- <FontAwesome name="dollar" size={14} color="black" />{item.price}</Text>
                        </View>
                    </View>

                </TouchableOpacity>
                }}

            />
        </View>
    )
}


const styles = StyleSheet.create({
    imageContainer: {
        marginVertical: 4,
        paddingHorizontal: 10,
        paddingBottom: 25,
    },
    deliveryBox: {
        position: 'absolute',
        bottom: 0, 
        backgroundColor: 'white', 
        paddingHorizontal: 10,
        borderTopRightRadius: 20,
    },
    foodImage: {
        height: 200,
        borderRadius: 10,
    },
})