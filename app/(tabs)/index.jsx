import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { Stack } from 'expo-router'

const index = () => {
  return (
    <Stack.Screen options={{
      headerTransparent:true,
      headerTitle:'',
      headerLeft:()=>(
        <TouchableOpacity onPress={()=>{}} style={{marginLeft:20}}>
          <Image source={{uri:"https://images.pexels.com/photos/31842340/pexels-photo-31842340.jpeg"}} 
          style={{width:40 ,height:40,borderRadius:10}}
          />
        </TouchableOpacity>

      ),

      

    }} />
  )
}

export default index

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.bgColor
    }
})