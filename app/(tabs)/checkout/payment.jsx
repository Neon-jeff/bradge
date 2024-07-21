import { View, Text, Image, ScrollView, Pressable } from "react-native";
import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScreenSize } from "../../../constants/Sizes";
import ThemedText from "../../../components/ThemedText/ThemedText";
import Field from "../../../components/Fields/Field";
import Button from "../../../components/Button/Button";
import Icon from "../../../components/Icons/Icon";
import { router, Redirect } from "expo-router";
import { AppContext } from "../../../context/context";
import { GetValue, SaveValue } from "../../../store/Store";
const Card = ({ cardnum, exp }) => {
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
      <ThemedText text={cardnum} color="white" size={25} style="medium" />
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
          <ThemedText text={exp} color="white" size={17} style="semi" />
        </View>
      </View>
    </View>
  );
};

const Payment = () => {
  const { orders, setOrders, setHistory, history } = useContext(AppContext);
  let [cardNum, setCardNum] = useState("0000 0000 0000");
  let [exp, setExp] = useState("");
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
        <Card cardnum={cardNum} exp={exp} />
        <Field
          label={"Card Number"}
          placeholder={"0000 0000 0000"}
          setState={setCardNum}
          numeric={true}
        />
        <View style={{ flexDirection: "row", gap: 30 }}>
          <Field
            label={"Card Expiry"}
            placeholder={"02-23"}
            flex={1}
            setState={setExp}
            numeric={true}
          />
          <Field
            label={"CVV"}
            placeholder={"XXX"}
            flex={1}
            numeric={true}
            secure={true}
          />
        </View>
        <Button
          label="Make Payment"
          action={() => {
            let date = new Date();
            date = date.toDateString(Date.now());
            const OrderHistoryList = JSON.parse(GetValue("OrderHistory"));
            SaveValue(
              "OrderHistory",
              JSON.stringify({
                orderHistory: [
                  ...OrderHistoryList.orderHistory,
                  {
                    date: date,
                    payment: "pending",
                    delivery: "pending",
                    items: orders,
                  },
                ],
              })
            );
            setOrders([]);
            router.push("/(tabs)/checkout/success");
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Payment;
