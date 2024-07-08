import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../constants/Colors";

const PageLayout = ({ children,justify,padding,gap=0,align='center' }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: padding,
        justifyContent:justify,
        alignItems:align,
        gap:gap,
        backgroundColor:'white'
      }}
    >
      {children}
    </SafeAreaView>
  );
};


export default PageLayout;
