import { View, Text, Pressable } from "react-native";
import React from "react";
import { colors } from "../../constants/Colors";
import ThemedText from "../ThemedText/ThemedText";

const Button = ({ label = "Button", action = () => {} }) => {
  return (
    <Pressable
      style={{
        backgroundColor: colors.main,
        padding: 15,
        borderRadius: 10,
     
      }}
      onPress={action}
    >
      <ThemedText text={label} size={19} color={colors.tab} align="center" />
    </Pressable>
  );
};

export default Button;
