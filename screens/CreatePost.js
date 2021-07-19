import React, { Component } from 'react'
import {View, Text, TouchableOpacity,Linking,StyleSheet} from 'react-native'

export default class CreatePost extends Component {
    render() {
        return (
            <View>
                <Text style={styles.textHeadStyle}>Create Post</Text>
                <TouchableOpacity textAlign={'center'} style={styles.touchableOpacityStyle} onPress={()=>{
                    Linking.openURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
                }}><Text style={styles.textStyle}>Click Here...</Text></TouchableOpacity>
                
            </View>
        )
    }
}
const styles=StyleSheet.create({
    textHeadStyle:{
        alignSelf:'center',
        fontFamily:'times',
        fontWeight:'bold',
        fontSize:30
    },touchableOpacityStyle:{
        alignSelf:'center',
        borderWidth:2,
        borderRadius:5,
        width:260,
        height:40,
        marginTop:10
    },textStyle:{
        fontSize:20,
        fontWeight:'bold',
        alignSelf:'center',
    }
})