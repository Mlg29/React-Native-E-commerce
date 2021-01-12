import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const ReviewList = ({lists}) => {
    
    return (
        <View style={styles.container}>
            <Image source={{uri: lists.image}} style={styles.imageReview} />
            <View style={styles.miniContainer1}>
                <View style={styles.miniContainer}>
                    <Text style={styles.reviewHeader}>{lists.name}</Text>
                    <Text style={styles.reviewDate}>{lists.date}</Text>
                </View>
                
                <Text style={styles.reviewPost}>{lists.post}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    imageReview: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    container: {
        flexDirection: "row",
        marginVertical: 15,
        paddingHorizontal: 10,
    },
    miniContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    miniContainer1: {
        paddingHorizontal: 10,
    },
    reviewPost: {
        width: 300,
        color: 'grey'
    },
    reviewDate: {
        marginRight: 35,
        color: 'grey',
    },
    reviewHeader: {
        color: 'black',
        fontWeight: 'bold'
    }

})
export default ReviewList
