import { View, Text, Image } from "react-native";
import React from "react";
import { ScreenSize } from "../../constants/Sizes";
import ThemedText from "../ThemedText/ThemedText";

const Promotion = () => {
  return (
    <View
      style={{
        height: 0.25 * ScreenSize.height,
        padding: 20,
        justifyContent: "center",
        gap:2
      }}
    >
      <Image
        source={require("../../assets/images/promotion.png")}
        resizeMode="cover"
        style={{
          position: "absolute",
          top: 0,
          borderRadius: 10,
          left: 0,
          right: 0,
          width: 0.9 * ScreenSize.width,
          height: 0.25 * ScreenSize.height,
        }}
      />
      <ThemedText
        text={"Premium Sounds,"}
        color="white"
        size={25}
        style="medium"
      />
      <ThemedText
        text={"Premium Saving"}
        color="white"
        size={25}
        style="medium"
      />
      <ThemedText
        text={"Limited offer, hope on and get yours now"}
        color="white"
        size={17}
        style="regular"
        extras={{
            paddingTop:5
        }}
      />
    </View>
  );
};

export default Promotion;
