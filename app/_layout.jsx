import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, router } from "expo-router";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import { createContext, useEffect, useState } from "react";

export const travelsInfoContext = createContext();

export default function RootLayout() {
  const [savetripsId, setSavetripsId] = useState([]);
  const [profileDetails, setProfileDetails] = useState({
    name: "John Traveler",
    bio: "🌍 Globe Trotter | 📸 Travel Blogger | ✈️ Adventure Seeker",
    avatar: "https://i.pravatar.cc/200?img=32",
  });

  const [saveTripsId, setSaveTripsId] = useState([]);

  

  useEffect(() => {
    const uniqueIds = savetripsId?.map(trip => trip.id)
    setSaveTripsId(savetripsId)
  }, [savetripsId])

  console.log(saveTripsId)

  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) return null;

  return (
    <travelsInfoContext.Provider value={{ savetripsId, setSavetripsId, profileDetails, setProfileDetails }}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

          {/* ListingDetails with Transparent Custom Header */}
          <Stack.Screen
            name="screen/listDetails"
            options={({ route }) => {
              const { item } = route.params || {}; // yaha se item aa rha hai
              const parsedItem = item ? JSON.parse(item) : null;

              return {
                headerTransparent: true,
                header: () => (
                  <View style={styles.backBtn}>
                    {/* Back Button */}
                    <TouchableOpacity onPress={() => router.back()}>
                      <Feather
                        style={styles.arrowBtn}
                        name="arrow-left"
                        size={24}
                        color="black"
                      />
                    </TouchableOpacity>

                    {/* Save Button */}
                    <TouchableOpacity
                      onPress={() => { 
                        const isAllreadySaved = savetripsId?.find(id=>id == parsedItem.id)

                        if(!isAllreadySaved){
                          setSavetripsId(prev => [...prev, parsedItem.id])
                        }
                       }}
                    >
                      <Ionicons
                        style={styles.bookmarkBtn}
                        name={savetripsId?.find(id=>id == parsedItem.id) ? "bookmark" : "bookmark-outline"}
                        size={24}
                        color={Colors.black}
                      />
                    </TouchableOpacity>
                  </View>
                ),
              };
            }}
          />

          <Stack.Screen name="screen/editProfile" options={{ headerShown: false }} />



        </Stack>
      </ThemeProvider>
    </travelsInfoContext.Provider>
  );
}

const styles = StyleSheet.create({
  backBtn: {
    position: "relative",
    top: 40,
    marginTop: 40,
    backgroundColor: "transparent",
    padding: 6,
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  arrowBtn: {
    backgroundColor: Colors.white,
    padding: 6,
    borderRadius: 12,
  },
  bookmarkBtn: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 6,
  },
});
