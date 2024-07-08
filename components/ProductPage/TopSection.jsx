import { View, Text, Image } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import ThemedText from "../ThemedText/ThemedText";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "../../constants/Colors";
const TopSection = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

        borderRadius: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          gap: 10,
        }}
      >
        <ThemedText
          text={"BRADGE.FASHION"}
          size={15}
          color={colors.accent}
          style="bold"
          extras={{
            padding: 10,
            borderWidth: 1,
            borderColor: colors.accent,
            borderRadius: 10,
          }}
        />
      </View>
      {/* <AntDesign name="hearto" size={22} color="black" /> */}
    </View>
  );
};

export default TopSection;
