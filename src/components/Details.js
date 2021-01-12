import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Details = ({ item }) => {
    return (
        <>
            <View style={styles.container}>
                <View>
                    <Text style={styles.containerHeader}>Brand</Text>
                    <Text style={styles.containerSecondHeader}>{item.brand}</Text>
                </View>
                <View>
                    <Text style={styles.containerHeader2}>SKU</Text>
                    <Text style={styles.containerSecondHeader}>{item.sku}</Text>
                </View>
            </View>

            <View style={styles.container}>
                <View>
                    <Text style={styles.containerHeader}>Condition</Text>
                    <Text style={styles.containerSecondHeader}>{item.condition}</Text>
                </View>
                <View>
                    <Text style={styles.containerHeader2}>Material</Text>
                    <Text style={styles.containerSecondHeader}>{item.material}</Text>
                </View>
            </View>
            <View style={styles.container}>
                <View>
                    <Text style={styles.containerHeader}>Category</Text>
                    <Text style={styles.containerSecondHeader}>{item.category}</Text>
                </View>
                <View>
                    <Text style={styles.containerHeader2}>Fitting</Text>
                    <Text style={styles.containerSecondHeader}>{item.fitting}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.cart}>
                <Text style={styles.cartText}>Add to Cart</Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 25,
        marginVertical: 5,
    },
    containerHeader: {
        fontSize: 10,
        color: 'grey'
    },
    containerHeader2: {
        fontSize: 10,
        color: 'grey',
        alignSelf: 'flex-end'
    },
    containerSecondHeader: {
        fontSize: 15,
    },
    cart: {
        backgroundColor: 'red',
        justifyContent: "center",
        alignItems: 'center',
        paddingVertical: 10,
        marginTop: 5,
    },
    cartText: {
        color: 'white',
        fontSize: 18,
    }
})

export default Details
