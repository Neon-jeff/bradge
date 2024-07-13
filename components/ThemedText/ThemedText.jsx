import { View, Text } from "react-native";
import React from "react";
import { colors } from "../../constants/Colors";

const ThemedText = ({
  text,
  style = "regular",
  size=36,
  color = colors.text,
  align = "left",
  extras = {},
  children,
}) => {
  return (
    <Text
      style={{
        fontFamily: style,
        fontSize: size,
        color: color,
        textAlign: align,
        ...extras,
      }}
    >
      {text}
      {children}
    </Text>
  );
};

export default ThemedText;
