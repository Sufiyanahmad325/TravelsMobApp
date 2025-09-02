import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, SectionList } from "react-native";
import { Colors } from "@/constants/Colors";
import { destinations } from "../../data/destinations";
import { router } from "expo-router";

const groupByCategory = () => {
  const groups = {};

  destinations.forEach((ele) => {
    if (!groups[ele.category]) {
      groups[ele.category] = []
    }
    groups[ele.category].push(ele)
  })

  return Object.keys(groups).map((category) => (
    {
      title: category,
      data: groups[category]  // kya mai data ka name change kr sakta hu
    }
  ))

};




const Category = () => {
  const sections = groupByCategory();

  const renderCard = ({ item }) => (
   <>
    <TouchableOpacity style={styles.card} onPress={() =>{router.push({pathname:'screen/listDetails' , params:{item:JSON.stringify(item)}})} }>
      {/* Destination image */}
      <Image source={{ uri: item.image }} style={styles.cardImage} />

      {/* Details section */}
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardCategory}>{item.category}</Text>
        <Text style={styles.cardLocation}>{item.location}</Text>
        <Text style={styles.cardPrice}>₹ {item.price}</Text>
      </View>
    </TouchableOpacity>
    </>
  );

  

  return (
    <View style={{ flex: 1, backgroundColor: Colors.background, marginTop: 50 }}>
      <View style={styles.container}>
        {/* Page Header */}
        <Text style={styles.header}>Destinations by Category</Text>

        {/* Section List */}
        <SectionList
          sections={sections} // grouped data
          keyExtractor={(item, index) => item.id}
          renderItem={renderCard}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 26,
    fontWeight: "700",
    color: Colors.primaryColor,
    marginBottom: 12,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: "600",
    color: Colors.black,
    marginVertical: 8,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,

    // shadow for card
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 12,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.black,
  },
  cardCategory: {
    fontSize: 12,
    color: Colors.gray,
  },
  cardLocation: {
    fontSize: 13,
    color: "#555",
    marginTop: 2,
  },
  cardPrice: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.primaryColor,
    marginTop: 4,
  },
});
