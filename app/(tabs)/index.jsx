import { Image, StyleSheet, Text, TouchableOpacity, View, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@/constants/Colors'
import { Stack } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { useHeaderHeight } from '@react-navigation/elements'
import CategoryButton from '../component/CategoryButton'
import Listings from '../component/Listings'
import TopAgencyList from '../component/TopAgencyList'

const page = () => {
  const headerHeight = useHeaderHeight();
  const [category, setCategory] = useState('All')

  const onCatChanged =(category)=>{
      setCategory(category)
      console.log(category);
  }

  return (
    <>
      <Stack.Screen options={{
        headerTransparent: true,
        headerTitle: '',
        headerLeft: () => (
          <TouchableOpacity onPress={() => { }} style={{ marginLeft: 20 }}>
            <Image source={{ uri: "https://images.pexels.com/photos/31842340/pexels-photo-31842340.jpeg" }}
              style={{ width: 40, height: 40, borderRadius: 10 }}
            />
          </TouchableOpacity>

        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => { }} style={
            {
              marginRight: 20,
              backgroundColor: Colors.white,
              padding: 10,
              borderRadius: 10,
              shadowColor: '#171717',
              shadowOffset: { width: 2, height: 4 },
              shadowOpacity: 0.2,
              shadowRadius: 3,
            }
          }>
            <Ionicons name="notifications" size={24} color={Colors.black} />

          </TouchableOpacity>
        )

      }} />


      <View style={[styles.container, { paddingTop: headerHeight }]}>
        <ScrollView>
        {/* <Text style={styles.headingTxt}>Home Screen</Text> */}

        <View style={styles.searchSectionWraper}>
          <View style={styles.seacrhBar}>
            <Ionicons name="search" size={18} color={Colors.primaryColor} />
            <TextInput  placeholder='Search...' />
          </View>
          <TouchableOpacity onPress={() => { }}>
            <Ionicons name="options" size={24} color={Colors.black} style={styles.filterBtn} />
          </TouchableOpacity>
        </View>


        <CategoryButton onCatChanged={onCatChanged} />
        <Listings category={category} />
        <TopAgencyList />

        </ScrollView>
      </View>




    </>
  )
}

export default page

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.bgColor
  },
  headingTxt: {
    fontSize: 28,
    fontWeight: '800',
    color: Colors.black,
  },
  searchSectionWraper: {
    flexDirection:'row', 
    marginVertical: 20,
  },
  seacrhBar: {
    flex: 1,       // take full width
    alignItems: 'center',
    flexDirection:'row',
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    gap: 10,
  },
  filterBtn:{
    backgroundColor: Colors.primaryColor,
    padding:14 ,
    borderRadius:10,
    marginLeft:10,
  }
})