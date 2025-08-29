import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {destinations} from '../../data/destinations'

const Listings = () => {
  return (
     <>
     {destinations.map((item, index) => (
      <TouchableOpacity key={index} style={{ marginBottom: 20, borderRadius: 10, overflow: 'hidden' }}>
        <Image source={{ uri: item.image }} style={{ width: '100%', height: 200 }} />
        <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0,0,0,0.5)', padding: 10 }}>
          <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
          <Text style={{ color: 'white', fontSize: 14 }}>{item.location}</Text>
        </View>
      </TouchableOpacity>
     ))}
     </>
  )
}

export default Listings

const styles = StyleSheet.create({})