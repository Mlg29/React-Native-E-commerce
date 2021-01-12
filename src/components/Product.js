import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

const Products = ({item}) => {
    return (
        <View style={styles.container}>
            <FlatList 
                horizontal
                keyExtractor={(item) => item.id}
                data={item.size}
                renderItem={({item}) => {
                    return <Text style={styles.productSize}>{item.value}</Text>
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    productSize: {
        backgroundColor: 'white',
        padding: 15,
        margin: 5,
    },
    container: {
        paddingHorizontal: 20,
    }
})

export default Products
