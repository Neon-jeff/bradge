import { View, Text, Pressable } from "react-native";
import React from "react";
import { colors } from "../../constants/Colors";
import ThemedText from "../ThemedText/ThemedText";

const Button = ({ label = "Button", action = () => {} }) => {
  return (
    <Pressable
      style={{
        backgroundColor: colors.black,
        padding: 25,
        borderRadius: 100,
        paddingHorizontal: 30,
        width: "90%",
        alignSelf:'center'
     
      }}
      onPress={action}
    >
      <ThemedText text={label} size={18} color={colors.white} align="center" />
    </Pressable>
  );
};

export default Button;
