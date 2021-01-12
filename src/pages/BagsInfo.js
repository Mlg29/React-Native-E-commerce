import React, { useState } from 'react'
import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Details from '../components/Details'
import Reviews from "../components/Reviews"
import Products from "../components/Product"

import { bags } from "../util"


const BagsInfo = ({ route }) => {
    const [body, setBody] = useState("product")

    const id = route.params.id

    return (
        <View>
            <FlatList
                keyExtractor={(item) => item.id}
                data={bags}
                renderItem={({ item }) => {
                    return id === item.id ? (
                        <View>
                            <Image source={{ uri: item.image }} style={styles.containerImage} />

                            <View style={styles.secondContainer}>
                                <TouchableOpacity>
                                    <Text style={body === "product" ? styles.active : styles.miniContainer} onPress={() => setBody("product")}>Product</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={body === "detail" ? styles.active : styles.miniContainer} onPress={() => setBody("detail")}>Details</Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={body === "review" ? styles.active : styles.miniContainer} onPress={() => setBody("review")}>Reviews</Text>
                                </TouchableOpacity>

                            </View>

                            {
                                body === "product" ?
                                    <Products item={item} /> :
                                    body === "detail" ?
                                        <Details  item={item}/> :
                                        body === "review" ? <Reviews item={item}/> : <Products  item={item}/>
                            }
                        </View>
                    ) : null
                }}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    active: {
        color: "red",
        backgroundColor: "white",
        padding: 10,
        borderRadius: 5,
    },
    containerImage: {
        width: "100%",
        height: 500,
    },
    secondContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 15,
    },
    miniContainer: {
        backgroundColor: "white",
        padding: 10,
        borderRadius: 5,
        color: "black"
    }
})
export default BagsInfo
