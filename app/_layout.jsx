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
import { SaveValue, GetValue } from "./../store/Store";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    // light: require("../assets/fonts/Montserrat-Light.ttf"),
    regular: require("../assets/fonts/Montserrat-Regular.ttf"),
    medium: require("../assets/fonts/Montserrat-Medium.ttf"),
    bold: require("../assets/fonts/Montserrat-Bold.ttf"),
    semi: require("../assets/fonts/Montserrat-SemiBold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  const history = JSON.parse(GetValue("OrderHistory"))

  if (history == null) {
    SaveValue("OrderHistory", JSON.stringify({ orderHistory: [] }));
  }
  else{
    SaveValue("OrderHistory", JSON.stringify({ orderHistory: [...history['orderHistory']] }));
  }

  return (
    <AppContextProvider>
      <Stack
        screenOptions={{ contentStyle: { flex: 1, backgroundColor: "white" } }}
      >
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
