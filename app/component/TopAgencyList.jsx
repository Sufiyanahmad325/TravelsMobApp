import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {topAgenciesInfo} from '../../data/TopTravelsInfo';


const AgencyCard = ({ item }) => (

  <View style={styles.card}>
    <Image source={{ uri: item.image }} style={styles.image} />
    <View style={styles.info}>
      <Text style={styles.name}>{item.name}</Text>
      <View style={styles.ratingRow}>
        <Ionicons name="star" size={16} color="orange" />
        <Text style={styles.rating}>{item.rating}</Text>
        <Text style={styles.count}>({item.ratingCount.toString()})</Text>
      </View>
    </View>
  </View>
);

export default function TopAgencyList() {
  return (
    <>
    <Text style={{paddingVertical:15 , fontSize:25 , fontWeight:800}}>Top Travel Group</Text>
    <FlatList
      data={topAgenciesInfo}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <AgencyCard item={item} />}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ borderRadius: 10 }}
    />
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 15,
    marginRight: 12,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    width: 250,
  },
  image: {
    width: 60,
    height: 80,
    borderRadius: 10,
    marginRight: 10
  },
  info: {
    flex: 1
  },
  name: {
    fontSize: 16,
    fontWeight: '600'
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4
  },
  rating: {
    marginLeft: 4,
    fontSize: 14,
    fontWeight: '500'
  },
  count: {
    marginLeft: 4,
    fontSize: 12,
    color: 'gray'
  }
});
