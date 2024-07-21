import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import Icon from "../../components/Icons/Icon";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../constants/Colors";
import { router } from "expo-router";
import ThemedText from "../ThemedText/ThemedText";

const DrawerHeader = ({title,backroute}) => {
 
  return (
    <SafeAreaView
      style={{
        padding: 20,
        gap: 20,
        justifyContent: "space-between",
        paddingHorizontal:5,
        backgroundColor:'white'
        
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Pressable
          onPress={() => {
            router.back()
          }}
          style={{ position: "absolute", left: 10,top:0 }}
        >
          <Icon name={"ChevronLeft"} size={30} stroke={1} color={colors.dimText} />
        </Pressable>
        <ThemedText text={title} size={20} />
      </View>
    </SafeAreaView>
  );
};

export default DrawerHeader;
