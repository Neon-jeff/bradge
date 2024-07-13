import { View, Text, TextInput } from "react-native";
import React from "react";
import ThemedText from "../ThemedText/ThemedText";
import { colors } from "../../constants/Colors";
import Icon from "../Icons/Icon";

const Field = ({ label, placeholder, secure = false, width,flex }) => {
  return (
    <View
      style={{ gap: 10, width: width ? width : "auto", flex:flex?flex:0,  padding: 0 }}
    >
      {label && <ThemedText text={label} size={18} />}

      <TextInput
        placeholder={placeholder}
        style={{
          fontFamily: "regular",
          fontSize: 15,
          padding: 10,
          backgroundColor: "transparent",
          borderRadius: 10,
          borderWidth: 1,
          borderColor: colors.dimText,
        }}
        cursorColor={"black"}
      />
    </View>
  );
};

export default Field;
