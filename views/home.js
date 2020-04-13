import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import {globalStyles} from '../styles/global';
import { color } from 'react-native-reanimated';

export default function Home({navigation})
{
    const pressHandler = () => {
        navigation.navigate('Posts')
    }
    return(
    <View style={globalStyles.container}> 
        <TouchableOpacity onPress={pressHandler} style={globalStyles.startButton}>
                        <Text style={{color:"white"}}> Get Posts </Text>
         </TouchableOpacity>
    </View>
    )
}
