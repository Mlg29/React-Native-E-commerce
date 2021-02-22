import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

import MapView from 'react-native-maps';
import { EvilIcons } from '@expo/vector-icons';


const Map = () => {

    const locations = "745 Lincon Street"

    return (
        <View style={styles.container}>
            <MapView style={styles.map} />
            <View
                    style={{
                        backgroundColor: "white",
                        width: "90%",
                        padding: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 25,
                         position: 'absolute',
                         top: 55
                    }}
                >
                    <Text style={{ fontSize: 18 }}><EvilIcons name="location" size={18} color="black" /> {locations}</Text>
                </View>
            </View>
    )
}

export default Map


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
})
