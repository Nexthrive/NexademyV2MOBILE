import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { AuthProvider, useAuth } from "../context/AuthContext";
import { useColorScheme } from "@/hooks/useColorScheme";
import LoginScreen from "@/components/LoginScreen";
import "../global.css";
import { ActivityIndicator } from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function RootLayoutContent() {
  const colorScheme = useColorScheme();
  const { isLoggedIn } = useAuth(); // Use login state

  const [fontsLoaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"), // Add this line
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"), // Add this line
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"), // Add this line

    Montserrat: require("../assets/fonts/Montserrat-Bold.ttf"),
  });

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  if (isLoggedIn === null) {
    return <ActivityIndicator />; // Show loading spinner or null while checking login state
  }

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      {isLoggedIn ? (
        // Main App Navigation
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      ) : (
        // Render the LoginScreen component if not logged in
        <LoginScreen />
      )}
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootLayoutContent />
    </AuthProvider>
  );
}
