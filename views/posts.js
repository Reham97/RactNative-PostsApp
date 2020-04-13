import axios from 'axios'
import React, { useState } from 'react'
import { ActivityIndicator}  from 'react-native';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import { globalStyles } from '../styles/global'
import { FlatList } from 'react-native-gesture-handler'

export default function Posts({navigation}) {
    const [posts, setPosts] = useState([])
    const [showme, setShowMe] = useState(false)

    axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
        console.log(res.data);
        setPosts(res.data);
    })
    setTimeout(()=>{
        setShowMe(true)
    },3000)


    // console.log(posts);
    return (
        <View style={globalStyles.container}>
           {
            showme ?
            <FlatList
                data={posts}
                renderItem={({ item }) => (
                    <TouchableOpacity style={globalStyles.post} onPress={()=> navigation.navigate('Post',item)}>
                        <Text style={{fontSize:20 }} key={item.key}>
                            {item.title}
                            </Text>
                            <Image source={{uri:"https://source.unsplash.com/random"}} style={globalStyles.myImage}/>
                    </TouchableOpacity>
                )}/>
                :
            <ActivityIndicator size="large" color="plum" style={globalStyles.loading}/>
            }
        </View>
    )
}

