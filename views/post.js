import React from 'react'
import {StyleSheet, View, Text,Image} from 'react-native'
import {globalStyles} from '../styles/global';


export default function Post({navigation})
{
    return(
    <View style={globalStyles.container}> 
        <Image source={{uri:"https://source.unsplash.com/random"}} style={globalStyles.myImage2}/>

        <Text style={{fontSize:20}}> {navigation.getParam('title')} </Text> 
        <br/>
         <Text> {navigation.getParam('body')} </Text>
    </View>
    )
}
