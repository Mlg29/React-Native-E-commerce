import React, {useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native'
import { AntDesign, Feather, FontAwesome, EvilIcons } from '@expo/vector-icons';

import {foodItems} from "../../utils"


const OrderDelivery = ({ navigation, route }) => {

    const locations = "745 Lincon Street"


    const [quantity, setQuantity] = useState(1)

    const id = route.params.id


    const quantityIncrease = () => {
        setQuantity(quantity + 1)
    }

    const quantityDecrease = () => {
        if (quantity <= 1) {
            setQuantity(1)
        }
        else {
            setQuantity(quantity - 1)
        }
    }


    return (
        <View>
            <View style={{ flexDirection: 'row', height: 50, marginTop: 50 }}>

                <TouchableOpacity style={{ width: 50, paddingLeft: 18, justifyContent: 'center', marginTop: 20 }}>
                    <AntDesign name="arrowleft" size={24} color="black" onPress={() => navigation.navigate('Home') }/>
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
                        <Text style={{ fontSize: 13 }}>{route.params.name}</Text>
                    </View>


                </View>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: 10,
                        justifyContent: 'center'
                    }}
                >
                    <Feather name="menu" size={24} color="black" />
                </TouchableOpacity>

            </View>


            <FlatList
                data={foodItems}
                initialNumToRender={50}
                keyExtractor={item => item.id}
                renderItem={({item}) => {
                    return item.id === id ? 
                    <View  key={item.id}>
                        <View style={styles.orderContainer}>
                            <Image source={{uri: item.image}} style={styles.orderImage} />
                            <View
                                 style={{
                                     flexDirection: 'row', 
                                     backgroundColor: 'white', 
                                     width: 150, 
                                     padding: 8, 
                                     borderRadius: 25, 
                                     elevation: 5, 
                                     position: 'absolute', 
                                     bottom: -5,
                                     justifyContent: 'space-around'
                                 }}
                            >
                                <TouchableOpacity onPress={() => quantityDecrease()}><Text style={{fontSize: 25}}>-</Text></TouchableOpacity>
                                <Text style={{fontSize: 25}}>{quantity}</Text>
                                <TouchableOpacity onPress={() => quantityIncrease()}><Text style={{fontSize: 25}}>+</Text></TouchableOpacity>
                            </View>
                        </View>
 
                        <View>
                            <Text style={{fontSize: 30, alignSelf: 'center', fontWeight: 'bold', textAlign: 'center'}}>{item.name} - <FontAwesome name="dollar" size={29} color="black" />{item.price}</Text>
                             <Text style={{fontSize: 15, paddingHorizontal: 10, marginVertical: 10, textAlign: 'center'}}>{item.description}</Text>
                        </View>
 
                        <View style={{
                            marginTop: 30, 
                            backgroundColor: 'white', 
                            height: 220, 
                            borderTopRightRadius: 30, 
                            borderTopLeftRadius: 30, 
                            elevation: 10,
                            paddingVertical: 20,
                            paddingHorizontal: 20
                            }}>
                            <View style={{flexDirection: 'row',justifyContent: 'space-between', marginVertical: 15}}>
                                <Text style={{fontSize: 20, fontWeight: 'bold'}}>{quantity} Items in Cart</Text>
                                <Text style={{fontSize: 20, fontWeight: 'bold'}}><FontAwesome name="dollar" size={20} color="black" />{ quantity * item.price}</Text>
                            </View>
                            <View  style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                                <Text style={{fontSize: 15, fontWeight: 'bold'}}><EvilIcons name="location" size={15} color="black" /> {locations}</Text>
                                <Text style={{fontSize: 15, fontWeight: 'bold'}}>893777</Text>
                            </View>
 
                            <TouchableOpacity style={{backgroundColor: '#FF7F50', marginTop: 35, alignItems: 'center', padding: 15, borderRadius: 20}}>
                                 <Text style={{color: 'white', fontSize: 20}}>Order</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View> : null
                }} 
            />
        </View>
    )
}

export default OrderDelivery


const styles = StyleSheet.create({
    orderImage: {
        width: 200,
        height: 200,
        borderRadius: 100,

    },
    orderContainer: {
        marginVertical: 30,
        alignItems: 'center'
    }
})
