import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { Colors } from '@/constants/Colors'
import { destinationCategories } from '../../data/categories'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const CategoryButton = ({onCatChanged}) => {
  const [activeIndex, setActiveIndex] = useState(null)

  const scrollRef = useRef(null)         // ScrollView ka ref
  const buttonRefs = useRef([])          // Har button ka ref array

  const handleCategoryIndex = (index) => {
    setActiveIndex(index)

    // clicked button ki position nikal ke scroll karenge
    buttonRefs.current[index]?.measureLayout(                             //measureLayout(...) → is button ki position aur size nikalne ke liye use hota hai
      scrollRef.current,                                                  // kis container (ScrollView) ke andar se position nikalni hai
      (x, y, width, height) => {                                          //agar measure sahi hua to yaha x, y, width, height milenge
        scrollRef.current.scrollTo({ x, y: 0, animated: true })          // matlab click kiya hua button left side aa jaye
      },
      () => { } // error callback agar measure fail ho
    )

    onCatChanged(destinationCategories[index].title) // Parent component ko category change ke baare mein batana
    
  }

  return (
    <View>
      <Text style={styles.title}>Categories</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{ columnGap: 8, marginBottom: 10 }}
        showsHorizontalScrollIndicator={false}
        ref={scrollRef}
      >
        {destinationCategories.map((item, index) => (
          <TouchableOpacity
            key={index}
            ref={(el) => (buttonRefs.current[index] = el)} // har button ka ref store
            onPress={() => handleCategoryIndex(index)}
            style={[
              styles.categoryBtn,
              {
                backgroundColor:
                  activeIndex === index ? Colors.primaryColor : Colors.white,
              },
            ]}
          >
            <MaterialCommunityIcons
              name={item.iconName}
              size={18}
              color={activeIndex === index ? 'white' : 'black'}
            />
            <Text
              style={[
                styles.categoryBtnTxt,
                { color: activeIndex === index ? 'white' : 'black' },
              ]}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

export default CategoryButton

const styles = StyleSheet.create({
  categoryBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,   // sirf vertical padding
    paddingHorizontal: 10, // kam horizontal padding
    borderRadius: 8,
    shadowColor: '#333333',
    shadowOffset: { width: 1, height: 2 },
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.black,
    marginBottom: 10,
  },
  categoryBtnTxt: {
    marginLeft: 4,
    fontSize: 14,
    color: Colors.black,
  },
})
