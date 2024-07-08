import { View, Text, FlatList } from "react-native";
import React, { useContext, useEffect } from "react";
import ThemedText from "../components/ThemedText/ThemedText";
import { Image } from "react-native";
import { AppContext } from "../context/context";
import { SafeAreaView } from "react-native-safe-area-context";
import PageLayout from "../components/PageLayout/PageLayout";
import { ScreenSize } from "./../constants/Sizes";
import { transform } from "typescript";
import { colors } from "../constants/Colors";
import Button from "../components/Button/Button";
import { router } from "expo-router";

const Index = () => {
  return (
    <PageLayout gap={70} justify={"center"}>
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
      <View style={{ flexDirection: "row", gap: 20}}>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/13876110/pexels-photo-13876110.jpeg?auto=compress&cs=tinysrgb&w=600",
          }}
          style={{
            height: ScreenSize.height / 3,
            width: 0.4 * ScreenSize.width,
            resizeMode: "cover",
            borderRadius: 20,
            transform: [
              { translateY: 0 },
              { rotateZ: "-5deg" },
              { translateX: -20 },
            ],
          }}
        />
        <Image
          source={{
            uri: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600",
          }}
          style={{
            height: ScreenSize.height / 3,
            width: 0.4 * ScreenSize.width,
            resizeMode: "cover",
            borderRadius: 20,
            transform: [{ translateY: 50 }, { rotateZ: "5deg" }],
          }}
        />
      </View>
      <View style={{ paddingHorizontal: 18 }}>
        <ThemedText
          text={"radical fashion collections"}
          style="regular"
          align="center"
          color={colors.dimText}
          size={20}
          extras={{
            transform: [{ rotateZ: "5deg" }],
            padding: 15,
            borderRadius: 100,
            borderWidth: 1,
            borderColor: colors.grey,
          }}
        />
        <ThemedText
          text={"Discover elegance and your unique fashion style"}
          style="semi"
          size={30}
          extras={{ marginTop: 25 }}
        />
      </View>
      <Button
        label="Start Shopping Now"
        action={() => {
          router.push("products");
        }}
      />
    </PageLayout>
  );
};

export default Index;
