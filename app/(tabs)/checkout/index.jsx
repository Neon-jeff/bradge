import { View, Text, Image, ScrollView } from "react-native";
import React, { useContext, useState } from "react";
import PageLayout from "../../../components/PageLayout/PageLayout";
import ThemedText from "../../../components/ThemedText/ThemedText";
import CartItemCard from "../../../components/CartPage/CartItem";
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import { colors } from "../../../constants/Colors";
import Field from "../../../components/Fields/Field";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../../components/Button/Button";
import { ScreenSize } from "../../../constants/Sizes";
import { router } from "expo-router";
import { AppContext } from "../../../context/context";

const Index = () => {
  let { orders } = useContext(AppContext);
  const [current, setCurrent] = useState("test");
  return (
    <SafeAreaView
      style={{
        flex: 1,
        gap: 20,
        backgroundColor: "white",
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: 0.9 * ScreenSize.width,
          justifyContent: "center",
          marginVertical: 30,
        }}
      >
        <Image
          source={require("../../../assets/images/logo.png")}
          style={{ position: "absolute", left: 0 }}
        />
        <ThemedText text={"Checkout"} size={25} style="semi" align="center" />
      </View>
      {orders.length == 0 ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ThemedText text={"No Item In Cart"} size={25} style="semi" />
        </View>
      ) : (
        <ScrollView
          contentContainerStyle={{ gap: 25 }}
          showsVerticalScrollIndicator={false}
        >
          <ThemedText
            text={"Select how to receive your package(s)"}
            size={23}
            style="semi"
          />
          <ThemedText text={"Pickup"} size={20} style="medium" />
          <RadioButtonGroup
            containerStyle={{ marginBottom: 10, gap: 20 }}
            selected={current}
            onSelected={(value) => setCurrent(value)}
            radioBackground={colors.main}
            radioStyle={{ borderWidth: 1 }}
          >
            <RadioButtonItem
              value="test2"
              label={
                <Text
                  style={{
                    color: colors.text,
                    fontFamily: "regular",
                    fontSize: 17,
                  }}
                >
                  Old Secretariat Complex, Area 1, Garki Abaji Abji
                </Text>
              }
            />
            <RadioButtonItem
              value="test"
              label={
                <Text
                  style={{
                    color: colors.text,
                    fontFamily: "regular",
                    fontSize: 17,
                  }}
                >
                  Sokoto Street, Area 1, Garki Area 1 AMAC
                </Text>
              }
            />
          </RadioButtonGroup>
          <Field label={"Delivery"} />
          <Field label={"Contact"} placeholder={"phone No2"} />
          <Field placeholder={"phone No1"} />
          <Button
            label="Go to Payment"
            action={() => {
              router.push("/(tabs)/checkout/payment");
            }}
          />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Index;
