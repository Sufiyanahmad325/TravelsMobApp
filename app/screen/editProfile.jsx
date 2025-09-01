import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useContext, useState } from "react";
import { travelsInfoContext } from "../_layout"; // adjust path if needed
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const EditProfile = () => {
  const { profileDetails, setProfileDetails } = useContext(travelsInfoContext);

  // local state for editing
  const [name, setName] = useState(profileDetails.name);
  const [bio, setBio] = useState(profileDetails.bio);
  const [avatar, setAvatar] = useState(profileDetails.avatar);

  const handleSave = () => {
    setProfileDetails({ name, bio, avatar });
    router.back(); // go back to profile page
  };
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <Text style={styles.header}>Edit Profile</Text>

      {/* Avatar Preview */}
      <Image source={{ uri: avatar }} style={styles.avatar} />

      {/* Avatar Input */}
      <Text style={styles.label}>Avatar URL</Text>
      <TextInput
        style={styles.input}
        value={avatar}
        onChangeText={setAvatar}
        placeholder="Enter image URL"
      />

      {/* Name Input */}
      <Text style={styles.label}>Full Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />

      {/* Bio Input */}
      <Text style={styles.label}>Bio</Text>
      <TextInput
        style={[styles.input, { height: 100, textAlignVertical: "top" }]}
        value={bio}
        onChangeText={setBio}
        placeholder="Write something about yourself..."
        multiline
      />

      {/* Save Button */}
      <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
        <Text style={styles.saveBtnText}>Save Changes</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.background,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
    color: Colors.primaryColor,
    textAlign: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 6,
    color: Colors.black,
  },
  input: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 16,
  },
  saveBtn: {
    backgroundColor: Colors.primaryColor,
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  saveBtnText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
});
