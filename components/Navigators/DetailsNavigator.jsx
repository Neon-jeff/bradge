import { View, Text, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import ThemedText from "../ThemedText/ThemedText";
import { colors } from "../../constants/Colors";
import { ScreenSize } from "../../constants/Sizes";
import { router } from "expo-router";

const DetailsNavigator = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        position: "absolute",
        top: 20,
        left: 0,
        right: 0,
        zIndex: 2,
        padding: 20,
        justifyContent: "space-between",
        alignItems: "center",
      
      }}
    >
      <Pressable
        style={{
          backgroundColor: 'white',
          borderRadius: 1000,
          padding:10
        }}
        onPress={() => {
          router.push("products");
        }}
      >
        <Ionicons name="arrow-back-outline" size={20} color={colors.black} />
      </Pressable>
      {/* <ThemedText
        text={"Product Details"}
        color={colors.dark}
        align="center"
        style="bold"
        size={25}
      /> */}
      <View
        style={{ width: ScreenSize.width / 10, height: ScreenSize.width / 10 }}
      ></View>
    </View>
  );
};

export default DetailsNavigator;
