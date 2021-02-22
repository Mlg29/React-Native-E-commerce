import React, {useState} from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native'
import { FontAwesome, MaterialIcons, Ionicons, Entypo } from '@expo/vector-icons';

import {foodName, foodItems} from "../../utils"

const Home = ({navigation}) => {
    const [foodNames, setFoodNames] = useState("Burgers")

    const locations = "745 Lincon Street"

   

    const renderHeader = () => {
        return <View style={{ flexDirection: 'row', height: 50, marginTop: 50 }}>

            <TouchableOpacity style={{ width: 50, paddingLeft: 18, justifyContent: 'center', marginTop: 20 }}>
                <FontAwesome name="shopping-basket" size={20} color="black" style={{ width: 50, height: 50 }} />
            </TouchableOpacity>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <View
                    style={{
                        width: '70%',
                        height: '100%',
                        backgroundColor: "lightgrey",
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 25,

                    }}
                >
                    <Text style={{ fontSize: 18 }}>{locations}</Text>
                </View>


            </View>
            <TouchableOpacity
                style={{
                    width: 50,
                    paddingRight: 10,
                    justifyContent: 'center'
                }}
            >
                <Ionicons name="ios-person-add" size={20} color="black" style={{ width: 50, height: 50, marginTop: 20 }} />
            </TouchableOpacity>

        </View>
    }



    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            <View style={styles.miniContainer}>
                <Text style={styles.miniContainerText}>Main{"\n"}Categories</Text>
            </View>

            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={foodName}
                keyExtractor={item => item.id}
                renderItem = {({item}) => {
                   return <TouchableOpacity
                                style={item.name === foodNames ? styles.miniImage : styles.ntMiniImage}
                                onPress={() => setFoodNames(item.name)}
                                key={item.id}
                            >
                                <View >
                                    <View style={item.name === foodNames ? styles.image1 : styles.ntImage1}>
                                         <Image source={{uri: item.image}} style={styles.imageBody} />
                                    </View>
                                   
                                    <Text style={item.name === foodNames ? styles.imageText : styles.ntImageText}>{item.name}</Text>
                                </View>
                            
                       </TouchableOpacity>
                }}
            />

            <FlatList
                data={foodItems}
                keyExtractor={item => item.id}
                renderItem={({item}) => {
                    return item.category === foodNames ? (<TouchableOpacity
                            style={styles.imageContainer}
                            key={item.id}
                            onPress={() => navigation.navigate('Order', {id: item.id, name: item.name})}
                        >
                        <View>
                            <Image source={{uri: item.image}} style={styles.foodImage} />
                        </View>
                        <View>
                            <Text style={styles.deliveryBox}>{item.delivery}</Text>
                        </View>
                        <View>
                            <Text style={{fontSize: 20, paddingTop: 8}}>{item.name}</Text>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 80}}>
                                <Text><Entypo name="star" size={14} color="#FF7F50" />{item.rating}</Text>
                                <Text>- <FontAwesome name="dollar" size={14} color="black" />{item.price}</Text>
                            </View>
                        </View>
                        
                    </TouchableOpacity>) : null
                }}
            />
        </SafeAreaView>
    )
}

export default Home


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    miniContainer: {
        paddingHorizontal: 20,
        marginTop: 20,
        marginBottom: 10,
    },
    miniContainerText: {
        fontSize: 30,
        fontWeight: "bold"
    },
    miniImage: {
        backgroundColor: "#FF7F50",
        width: 70,
        height: 110,
        marginHorizontal: 6,
        borderRadius: 50,
        alignItems: 'center',
        paddingTop: 10,
        marginBottom: 150,
    },
    image1: {
        backgroundColor: "white",
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 50,
        borderRadius: 100,
    },
    ntImage1: {
        backgroundColor: "#E8E8E8",
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 50,
        borderRadius: 100,
    },
    imageBody: {
        width: 20,
        height: 20,
        backgroundColor: "white",
        borderRadius: 50,
    },
    imageText : {
        fontSize: 13,
        color: 'white',
        marginVertical: 5,
    },
    ntImageText : {
        fontSize: 13,
        color: 'black',
        marginVertical: 5,
    },
    ntMiniImage: {
        backgroundColor: "white",
        width: 70,
        height: 110,
        marginHorizontal: 6,
        borderRadius: 50,
        alignItems: 'center',
        paddingTop: 10,
        elevation: 1,
    },
    foodImage: {
        height: 200,
        borderRadius: 10,
    },
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
    deliveryBoxText: {
        fontSize: 18,
        height: 30,
    }
})