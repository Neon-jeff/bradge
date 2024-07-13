import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const CartsLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          flex:1
        },
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="payment" />
      <Stack.Screen name="success" />
    </Stack>
  );
};

export default CartsLayout;
