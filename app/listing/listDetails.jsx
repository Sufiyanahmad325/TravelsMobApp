import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const ListingDetails = () => {
  const { item } = useLocalSearchParams();
  const parsedItem = JSON.parse(item); // 👈 string → object

  console.log('your item is =======> ', parsedItem);

  return (
    <View>
      <Text>{parsedItem.name}</Text>
      <Text>{parsedItem.location}</Text>
      <Text>{parsedItem.price}</Text>
    </View>
  )
}

export default ListingDetails

const styles = StyleSheet.create({})
