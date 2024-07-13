import { View, Text, Image, ScrollView, Pressable } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScreenSize } from "../../../constants/Sizes";
import ThemedText from "../../../components/ThemedText/ThemedText";
import Field from "../../../components/Fields/Field";
import Button from "../../../components/Button/Button";
import Icon from "../../../components/Icons/Icon";
import { router, Redirect } from "expo-router";
import { AppContext } from "../../../context/context";
const Card = () => {
  return (
    <View
      style={{
        height: 0.25 * ScreenSize.height,
        padding: 20,
        justifyContent: "flex-end",
        gap: 30,
      }}
    >
      <Image
        source={require("../../../assets/images/card.png")}
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
        text={"2334493944932"}
        color="white"
        size={25}
        style="medium"
      />
      <View style={{ flexDirection: "row", gap: 50 }}>
        <View style={{ gap: 5 }}>
          <ThemedText
            text={"Card holder name"}
            color="white"
            size={17}
            style="regular"
          />
          <ThemedText
            text={"Neon Kyson"}
            color="white"
            size={17}
            style="semi"
          />
        </View>
        <View style={{ gap: 5 }}>
          <ThemedText
            text={"Card Expiry"}
            color="white"
            size={17}
            style="regular"
          />
          <ThemedText text={"2/30"} color="white" size={17} style="semi" />
        </View>
      </View>
    </View>
  );
};

const Payment = () => {
  const { orders, setOrders } = useContext(AppContext);
  if (orders.length == 0) {
    return <Redirect href={"/(tabs)/products"} />;
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        gap: 40,
        backgroundColor: "white",
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: 0.9 * ScreenSize.width,
          gap: 40,
          marginVertical: 20,
        }}
      >
        <Pressable
          onPress={() => {
            router.push("/(tabs)/checkout");
          }}
        >
          <Icon name={"ArrowLeft"} size={25} stroke={2} color="black" />
        </Pressable>
        <ThemedText text={"Payment"} size={25} style="semi" align="center" />
      </View>
      <ScrollView
        contentContainerStyle={{ gap: 30 }}
        showsVerticalScrollIndicator={false}
      >
        <Card />
        <Field label={"Card Number"} placeholder={"0000 0000 0000"} />
        <View style={{ flexDirection: "row", gap: 30 }}>
          <Field
            label={"Card Number"}
            placeholder={"0000 0000 0000"}
            flex={1}
          />
          <Field
            label={"Card Expiry"}
            placeholder={"0000 0000 0000"}
            flex={1}
          />
        </View>
        <Button
          label="Make Payment"
          action={() => {
            setOrders([]);
            router.push("/(tabs)/checkout/success");
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Payment;
