import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useContext } from "react";
import { useLocalSearchParams } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { travelsInfoContext } from "../_layout";

const ListingDetails = () => {
  const { item } = useLocalSearchParams();
  const parsedItem = JSON.parse(item); // string → object
  
  return (
    <>
      <View style={styles.container}>
        {/* Image */}
        <Image
          source={{ uri: parsedItem.image }}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.contentWrapper}>
          {/* Title */}
          <Text style={styles.listingName}>{parsedItem.name}</Text>

          {/* Location */}
          <View style={styles.listingLocationWrapper}>
            <MaterialCommunityIcons
              name="map-marker-outline"
              size={18}
              color={Colors.primaryColor}
            />
            <Text style={styles.listingLocationText}>
              {parsedItem.location}
            </Text>
          </View>

          {/* Info Row---------------------- */}

          <View style={styles.infoRow}>
            {/* Duration */}
            <View style={styles.row}>
              <MaterialCommunityIcons
                style={styles.logo}
                name="clock-time-four-outline"
                size={24}
                color={Colors.primaryColor}
              />
              <View style={styles.rowTextWrapper}>
                <Text style={styles.rowLabel}>Duration</Text>
                <Text style={styles.rowValue}>{parsedItem.duration}</Text>
              </View>
            </View>

            {/* Group Size */}
            <View style={styles.row}>
              <MaterialCommunityIcons
                style={styles.logo}
                name="account-group"
                size={24}
                color={Colors.primaryColor}
              />
              <View style={styles.rowTextWrapper}>
                <Text style={styles.rowLabel}>Group Size</Text>
                <Text style={styles.rowValue}>3</Text>
              </View>
            </View>

            {/* Rating */}
            <View style={styles.row}>
              <MaterialCommunityIcons
                style={styles.logo}
                name="star"
                size={24}
                color={Colors.primaryColor}
              />
              <View style={styles.rowTextWrapper}>
                <Text style={styles.rowLabel}>Rating</Text>
                <Text style={styles.rowValue}>{parsedItem.rating}</Text>
              </View>
            </View>
          </View>

          {/* Description */}
          <Text style={styles.description}>{parsedItem.description}</Text>
        </View>
        
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerBookBtn}>
          <Text style={styles.footerBtnTxt}>Book Now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerBtn}>
          <Text style={styles.footerBtnTxt}>{parsedItem.price}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ListingDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  image: {
    width: "100%",
    height: 300,
  },
  contentWrapper: {
    padding: 20,
    gap: 10,
  },
  listingName: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.black,
    letterSpacing: 0.5,
  },
  listingLocationWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  listingLocationText: {
    fontSize: 14,
    marginLeft: 5,
    color: Colors.black,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  rowTextWrapper: {
    gap: 3,
  },
  rowLabel: {
    fontSize: 12,
    color: Colors.black,
  },
  rowValue: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.black,
  },
  logo: {
    backgroundColor: Colors.gray,
    padding: 6,
    borderRadius: 6,
  },
  description: {
    fontSize: 16,
    color: Colors.black,
    lineHeight: 20,
    letterSpacing: 0.5,
  },
  footer: {
    paddingBottom: 40,
    backgroundColor: Colors.white,
    gap: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  footerBookBtn: {
    flex: 4,
    backgroundColor: Colors.primaryColor,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    paddingVertical: 18,
  },
  footerBtn: {
    flex:1,
     alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.black,
    paddingVertical: 18,
    borderRadius: 5,
  },
  footerBtnTxt: {
    color: Colors.white,
    fontSize: 18,
  },
});
