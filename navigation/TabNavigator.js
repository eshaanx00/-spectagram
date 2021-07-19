import React, { Component } from 'react'
import { Text,} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from '../screens/Feed';
import CreatePost from '../screens/CreatePost';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator()

const BottomTabNavigator=()=>{
    return(
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon : ({focused , color, size}) => {
                let iconName;
                if(route.name==="Feed"){
                    iconName=focused
                    ? 'book'
                    : 'book-outline'
                }else if(route.name==="CreatePost"){
                    iconName = focused ? 'create' : 'create-outline'
                }
                return<Ionicons name={iconName} size={size} color={color}></Ionicons>
            },
        })}
        tabBarOptions={{
            activeTintColor:'tomato',
            inactiveTintColor:'gray'
        }}
        >
        <Tab.Screen name = "Feed" component = {Feed}></Tab.Screen>
        <Tab.Screen name = "CreatePost" component = {CreatePost}></Tab.Screen>

        </Tab.Navigator>
    );
}

export default BottomTabNavigator