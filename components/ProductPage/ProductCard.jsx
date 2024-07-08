import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { ScreenSize } from "../../constants/Sizes";
import ThemedText from "../ThemedText/ThemedText";
import { colors } from "../../constants/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";

const ProductCard = ({ image, price, name, shift = false, id }) => {
  return (
    <Pressable
      onPress={() => {
        router.push(`product/${id}`);
      }}
      style={{
        transform: [{ translateY: shift ? -50 : 0 }],
        gap: 5,
        width: 0.42 * ScreenSize.width,
      }}
    >
      <Image
        source={{ uri: image }}
        height={ScreenSize.height / 4}
        width={0.42 * ScreenSize.width}
        resizeMode="cover"
        borderRadius={10}
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 5,
        }}
      >
        <ThemedText
          text={name}
          style="medium"
          size={15}
          extras={{ width: "80%" }}
        />
        {/* <AntDesign name="hearto" size={20} color={colors.dark} /> */}
      </View>
      <ThemedText
        text={"N" + price}
        style="bold"
        color={colors.accent}
        size={17}
      />
    </Pressable>
  );
};

export default ProductCard;
