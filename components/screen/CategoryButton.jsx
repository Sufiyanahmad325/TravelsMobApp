import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { destinationCategories } from '../../data/categories'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const CategoryButton = () => {
    return (
        <View>
            <Text style={styles.title}>Categories</Text>
            <ScrollView 
            horizontal
            contentContainerStyle={{ columnGap: 10 , marginBottom:10  }}
            showsHorizontalScrollIndicator={false}
            >
                {destinationCategories.map((item, index) => (
                    <TouchableOpacity onPress={()=>{}} style={styles.categoryBtn} >
                        <MaterialCommunityIcons name={item.iconName} size={20} color={Colors.black} />
                        <Text style={styles.categoryBtnTxt}>{item.title}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}

export default CategoryButton

const styles = StyleSheet.create({
    categoryBtn:{
        flexDirection: 'row',
        alignItems:'center',
        backgroundColor: Colors.white,
        paddingVertical:10 ,
        paddingHorizontal:10,
        borderRadius:10,
        shadowColor:'#333333' ,
        shadowOffset:{ width: 1, height: 2 },
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        color: Colors.black,
        marginBottom: 10,
    },
    categoryBtnTxt:{
        marginLeft:5,
        color: Colors.black,
    }
})
