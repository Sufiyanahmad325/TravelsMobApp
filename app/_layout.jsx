import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, router } from "expo-router";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) return null;

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        {/* ListingDetails with Transparent Custom Header */}
        <Stack.Screen
          name="listing/listDetails"
          options={{
            headerTransparent: true,
            header: () => {
              return (
                <View style={styles.backBtn}>
                  <TouchableOpacity onPress={() => router.back()}>
                    <Feather
                      style={styles.arrowBtn}
                      name="arrow-left"
                      size={24}
                      color="black"
                    />
                  </TouchableOpacity>
                  <Ionicons
                    style={styles.bookmarkBtn}
                    name="bookmark-outline"
                    size={24}
                    color="black"
                  />
                </View>
              );
            },
          }}
        />

        
      </Stack>
    </ThemeProvider>
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
