import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'

import { destinations } from '../../data/destinations'
import { Link } from 'expo-router'

const ListItem = ({ item }) => {
  return (
    <Link href={{ pathname: 'listing/listDetails', params: { item: JSON.stringify(item) } }} asChild>
      <TouchableOpacity>
        <View style={styles.item}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.iconContainer}>
            <Ionicons style={styles.bookmark} name='bookmark' size={20} color="black" />
          </View>
          <Text style={styles.itemTxt} numberOfLines={1} ellipsizeMode='tail'>{item.name}</Text>

          <View style={styles.itemDetails}>
            <View style={styles.itemLocation}>
              <FontAwesome name='map-marker' size={20} color={Colors.primaryColor} />
              <Text style={styles.itemLocationTxt}>{item.location}</Text>
            </View>
            <Text style={styles.itemPriceTxt}>{item.price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  )
}

const Listings = ({ category }) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log('Update listing')
    setLoading(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer) // cleanup
  }, [category])

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={Colors.primaryColor} />
      </View>
    )
  }

  return (
    <FlatList
      data={destinations}
      renderItem={({ item }) => <ListItem item={item} />}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  )
}

export default Listings

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    width: 220,
    marginRight: 20,
  },
  image: {
    width: 200,
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
  },
  iconContainer: {
    position: 'relative',
    marginBottom: 10
  },
  bookmark: {
    position: 'absolute',
    top: -32,
    right: 16,
    backgroundColor: Colors.primaryColor,
    padding: 5,
    borderRadius: 20,
    color: Colors.white,
    borderWidth: 2,
    borderColor: Colors.white,
  },
  itemTxt: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.black,
    marginBottom: 10
  },
  itemLocationTxt: {
    fontSize: 12,
    marginLeft: 5
  },
  itemDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  itemLocation: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemPriceTxt: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.primaryColor
  }
})
