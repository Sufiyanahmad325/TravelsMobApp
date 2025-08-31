import React from "react";
import {StyleSheet,Text,View,Image,TouchableOpacity,ScrollView,} from "react-native";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";
import { useHeaderHeight } from "@react-navigation/elements";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  const headerHeight = useHeaderHeight();
  console.log(headerHeight);
  return (
    <SafeAreaView edges={['top']} style={{ flex: 1, paddingTop: headerHeight, backgroundColor: "#fff" }}>
      <ScrollView style={[styles.container, { marginTop: 0 }]}>
        {/* Profile Header */}
        <View style={styles.header}>
          <Image
            source={{ uri: "https://i.pravatar.cc/200?img=32" }}
            style={styles.avatar}
          />
          <Text style={styles.name}>John Traveler</Text>
          <Text style={styles.bio}>
            🌍 Globe Trotter | 📸 Travel Blogger | ✈️ Adventure Seeker
          </Text>
        </View>

        {/* Travel Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>36</Text>
            <Text style={styles.statLabel}>Trips</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>14</Text>
            <Text style={styles.statLabel}>Countries</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>20</Text>
            <Text style={styles.statLabel}>Wishlist</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>5.6k</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actions}>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="create-outline" size={18} color="#fff" />
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#50c878" }]}
          >
            <Feather name="message-circle" size={18} color="#fff" />
            <Text style={styles.buttonText}>Message</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#ff9800" }]}
          >
            <MaterialIcons name="share" size={18} color="#fff" />
            <Text style={styles.buttonText}>Share</Text>
          </TouchableOpacity>
        </View>

        {/* My Trips */}
        <Text style={styles.sectionTitle}>✈️ My Trips</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.tripCard}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
              }}
              style={styles.tripImage}
            />
            <Text style={styles.tripTitle}>Bali</Text>
          </View>
          <View style={styles.tripCard}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
              }}
              style={styles.tripImage}
            />
            <Text style={styles.tripTitle}>Switzerland</Text>
          </View>
          <View style={styles.tripCard}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1549924231-f129b911e442",
              }}
              style={styles.tripImage}
            />
            <Text style={styles.tripTitle}>New York</Text>
          </View>
        </ScrollView>

        {/* Wishlist */}
        <Text style={styles.sectionTitle}>📌 Wishlist</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.tripCard}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
              }}
              style={styles.tripImage}
            />
            <Text style={styles.tripTitle}>Tokyo</Text>
          </View>
          <View style={styles.tripCard}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
              }}
              style={styles.tripImage}
            />
            <Text style={styles.tripTitle}>Iceland</Text>
          </View>
          <View style={styles.tripCard}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
              }}
              style={styles.tripImage}
            />
            <Text style={styles.tripTitle}>Santorini</Text>
          </View>
        </ScrollView>

        {/* Travel Gallery */}
        <Text style={[styles.sectionTitle, { marginTop: 10 }]}>
          📷 Travel Gallery
        </Text>
        <View style={styles.gallery}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
            }}
            style={styles.galleryImage}
          />
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            }}
            style={styles.galleryImage}
          />
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
            }}
            style={styles.galleryImage}
          />
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
            }}
            style={styles.galleryImage}
          />
        </View>

        {/* Options */}
        <Text style={styles.sectionTitle}>⚙️ Options</Text>
        <View style={styles.options}>
          <TouchableOpacity style={styles.optionItem}>
            <Ionicons name="settings-outline" size={20} color="#555" />
            <Text style={styles.optionText}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionItem}>
            <MaterialIcons name="bookmark-border" size={20} color="#555" />
            <Text style={styles.optionText}>Saved Places</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionItem}>
            <Ionicons name="log-out-outline" size={20} color="red" />
            <Text style={[styles.optionText, { color: "red" }]}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  /** ---------- Header ---------- **/
  header: {
    alignItems: "center",
    marginVertical: 20,
    paddingHorizontal: 15,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#4a90e2",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
  },
  bio: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
    textAlign: "center",
  },

  /** ---------- Stats ---------- **/
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  statBox: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4a90e2",
  },
  statLabel: {
    fontSize: 13,
    color: "#777",
  },

  /** ---------- Actions ---------- **/
  actions: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4a90e2",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25,
    marginHorizontal: 6,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 6,
  },

  /** ---------- Sections ---------- **/
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginVertical: 10,
    color: "#333",
    padding: 5,
  },

  /** ---------- Trip & Wishlist Cards ---------- **/
  tripCard: {
    borderRadius: 55,
    width: 150,
    marginHorizontal: 10,
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#eee",
    // elevation: 3, // Android shadow
    // shadowColor: "#000", // iOS shadow
    // shadowOpacity: 0.2,
    // shadowRadius: 4,
    // shadowOffset: { width: 0, height: 2 },
  },
  tripImage: {
    width: "100%",
    height: 100,
  },

  tripTitle: {
    padding: 8,
    textAlign: "center",
    fontWeight: "600",
    color: "#333",
  },

  /** ---------- Gallery ---------- **/
  gallery: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },
  galleryImage: {
    width: "48%",
    height: 120,
    borderRadius: 12,
    marginBottom: 10,
  },

  /** ---------- Options ---------- **/
  options: {
    margin: 15,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  optionItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  optionText: {
    marginLeft: 10,
    fontSize: 15,
    color: "#333",
  },
});
