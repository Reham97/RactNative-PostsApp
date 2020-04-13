import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';
import { TouchableOpacity, Text, Button, ShadowPropTypesIOS } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

import Home from '../views/home';
import Posts from '../views/posts';
import Post from '../views/post';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: "PostsList",
            // headerStyle: {backgroundColor: 'plum'},
        }
    },
    Posts:
    {
        screen: Posts,
        navigationOptions: {
            title: "PostsList",
            // headerStyle: {backgroundColor: 'plum'},
        }
    },
    Post:
    {
        screen: Post,
        navigationOptions: {
            title: "DETAILS",
            // headerStyle: {backgroundColor: 'plum'},
            headerLeft: () => (
                <TouchableOpacity onPress={()=>{props.navigation.navigate('Posts')}} >
                    <Text style={{ color: "white" }}>
                    <MaterialIcons name="backspace" ></MaterialIcons>
                         Back
                          </Text>
                </TouchableOpacity>),
        }
    },


}
const HomeStack = createStackNavigator(
    screens,
    {
        defaultNavigationOptions: {
            headerTintColor: 'white',
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: 'plum' },
            headerLeft: () => (
                <Text></Text>),
            
            
        }
    }
);

export default createAppContainer(HomeStack);