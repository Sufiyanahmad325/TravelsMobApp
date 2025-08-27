import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';


const RootLayout = () => {
    return (
        <Tabs screenOptions={{
            tabBarStyle: {
                // backgroundColor: Colors.bgColor,
                borderTopWidth: 0,
                padding: 0
            },
            tabBarShowLabel: false,
            tabBarActiveTintColor: Colors.black,   // active color
            tabBarInactiveTintColor: '#999' // inactive color
        }}>
            <Tabs.Screen name="index" options={{
                tabBarIcon: ({ color }) => (
                    <Ionicons name="compass" size={24} color={color} />
                )
            }} />
            <Tabs.Screen name="category" options={{
                tabBarIcon: ({ color }) => (
                    <MaterialIcons name="space-dashboard" size={24} color={color} />
                )
            }} />
            <Tabs.Screen name="search" options={{
                tabBarIcon: ({ color }) => (
                    <View style={
                        {
                            backgroundColor: Colors.primaryColor,
                            paddingHorizontal: 6,
                            borderRadius: 10,
                            justifyContent: "center",  // icon ko center karo
                            alignItems: "center",      // horizontally center
                            height: 50,
                            width: 50,
                        }
                    }>
                        <Ionicons name="search" size={24} color={Colors.white} />
                    </View>
                )
            }} />
            <Tabs.Screen name="bookmarks" options={{
                tabBarIcon: ({ color }) => (
                    <Ionicons name="bookmark" size={24} color={color} />
                )
            }} />
            <Tabs.Screen name="profile" options={{
                tabBarIcon: ({ color }) => (
                    <Ionicons name="person" size={24} color={color} />
                )
            }} />
        </Tabs>
    )
}

export default RootLayout

const styles = StyleSheet.create({})