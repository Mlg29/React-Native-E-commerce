import React from 'react'
import { View, Text, FlatList } from 'react-native'
import ReviewList from './ReviewList'

const Reviews = ({item}) => {
    return (
        <View>
            <FlatList 
                keyExtractor={(item) => item.id}
                data={item.reviews}
                renderItem={({item}) => {
                    return <ReviewList lists={item} />
                }}
            />
        </View>
    )
}

export default Reviews
