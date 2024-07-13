import { View, Text,Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";
import { ScreenSize } from "../../../constants/Sizes";
import ThemedText from "../../../components/ThemedText/ThemedText";
import Icon from "../../../components/Icons/Icon";
import { colors } from "../../../constants/Colors";

const Success = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        gap: 100,
        backgroundColor: "white",
        paddingHorizontal: 20,
        justifyContent: "center",
      }}
    >
      <Image
        source={require("../../../assets/images/logo.png")}
        style={{ position: "absolute", left: 20,top:40 }}
      />
      <LottieView
        autoPlay
        source={require("../../../assets/images/confetti.json")}
        style={{
          height:400,
          width:400,
          backgroundColor: "#ffffff",
          position: "absolute",
        }}
      />
      <ThemedText
        text={"Payment Successful"}
        style="semi"
        size={30}
        align="center"
      />
      <View style={{ gap: 10 }}>
        <View
          style={{
            padding: 20,
            borderRadius: 1000,
            backgroundColor: colors.main,
            alignSelf: "center",
          }}
        >
          <Icon name={"Check"} color="white" size={60} stroke={4} />
        </View>
        <ThemedText
          text={"Payment Successful"}
          style="semi"
          size={20}
          align="center"
        />
        <ThemedText
          text={"Thanks for your purchase"}
          style="regular"
          size={20}
          align="center"
        />
      </View>
    </SafeAreaView>
  );
};

export default Success;
