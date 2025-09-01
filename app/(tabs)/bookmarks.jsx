import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import { travelsInfoContext } from "../_layout";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { destinations } from "../../data/destinations";

const Bookmarks = () => {
  const { savetrips, setSavetrips } = useContext(travelsInfoContext);

  const handleRemove = (id) => {
    setSavetrips((prev) => prev.filter((ele) => ele !== id));
  };

  const renderItem = ({ item }) => {
    const trip = destinations.find((d) => d.id === item); // item is ID
    if (!trip) return null;

    return (
      <View style={styles.card}>
        {/* Image */}
        <Image source={{ uri: trip.image }} style={styles.image} />

        {/* Details */}
        <View style={styles.info}>
          <Text style={styles.title}>{trip.title}</Text>
          <Text style={styles.location}>{trip.location}</Text>

          {/* Extra Details */}
          {trip.rating && (
            <Text style={styles.ratingText}>⭐ {trip.rating} / 5</Text>
          )}
          {trip.duration && (
            <Text style={styles.detailText}>🕒 {trip.duration} days</Text>
          )}
          {trip.type && (
            <Text style={styles.detailText}>🏞️ {trip.type}</Text>
          )}
          {trip.description && (
            <Text style={styles.description}>{trip.description}</Text>
          )}

          <Text style={styles.price}>₹{trip.price}</Text>
        </View>

        {/* Remove Button */}
        <TouchableOpacity
          style={styles.removeBtn}
          onPress={() => handleRemove(trip.id)}
        >
          <Ionicons name="trash-outline" size={22} color={Colors.black} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {savetrips.length === 0 ? (
        <Text style={styles.emptyText}>No bookmarks added yet ✨</Text>
      ) : (
        <FlatList
          data={savetrips}
          keyExtractor={(item) => item.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
    </View>
  );
};

export default Bookmarks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightGray,
    padding: 16,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 16,
    color: Colors.gray,
  },
  card: {
    flexDirection: "row",
    backgroundColor: Colors.white,
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  image: {
    width: 120,
    height: '100%',
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  info: {
    flex: 1,
    padding: 12,
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.black,
  },
  location: {
    fontSize: 14,
    color: Colors.gray,
    marginTop: 2,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.black,
    marginTop: 2,
  },
  detailText: {
    fontSize: 13,
    color: Colors.grayDark,
    marginTop: 2,
  },
  description: {
    fontSize: 13,
    fontWeight: "bold",
    color: Colors.gray,
    marginTop: 4,
    lineHeight: 16,
  },
  price: {
    fontSize: 14,
    color: Colors.primary,
    marginTop: 6,
    fontWeight: "600",
  },
  removeBtn: {
    backgroundColor: Colors.red,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});
