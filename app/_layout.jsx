 import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { AppContextProvider } from "../context/context";
import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    // light: require("../assets/fonts/Onest-Light.ttf"),
    regular: require("../assets/fonts/Onest-Regular.ttf"),
    medium: require("../assets/fonts/Onest-Medium.ttf"),
    bold: require("../assets/fonts/Onest-Bold.ttf"),
    semi: require("../assets/fonts/Onest-SemiBold.ttf"),
    desc: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <AppContextProvider>
      <Stack screenOptions={{contentStyle:{flex:1,backgroundColor:'white'}}}>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="products"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="favorites"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="product"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </AppContextProvider>
  );
}
