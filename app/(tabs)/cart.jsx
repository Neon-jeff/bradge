import { View, Text, Image } from "react-native";
import React, { useContext } from "react";
import PageLayout from "../../components/PageLayout/PageLayout";
import ThemedText from "../../components/ThemedText/ThemedText";
import { ScrollView } from "react-native";
import { FlatList } from "react-native";
import { AppContext } from "../../context/context";
import CartItemCard from "../../components/CartPage/CartItem";
import { colors } from "../../constants/Colors";
import Field from "../../components/Fields/Field";
import Button from "../../components/Button/Button";
import { ScreenSize } from "../../constants/Sizes";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const PriceItem = ({ label, price }) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <ThemedText text={label} style="regular" size={18} />
      <ThemedText text={"N " + price} style="semi" size={20} />
    </View>
  );
};

const CartBlank = () => {
  const { orders } = useContext(AppContext);
  let total = orders.reduce((a, b) => a + b.product.price * b.amount, 0);
  return (
    <SafeAreaView
      style={{ flex: 1, paddingHorizontal: 20, backgroundColor: "white" }}
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
          source={require("../../assets/images/logo.png")}
          style={{ position: "absolute", left: 0 }}
        />
        <ThemedText text={"My Cart"} size={25} style="semi" align="center" />
      </View>

      {orders.length == 0 ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ThemedText text={"No Item In Cart"} size={25} style="semi" />
        </View>
      ) : (
        <ScrollView
          contentContainerStyle={{ gap: 50 }}
          style={{ flex: 1, gap: 10, padding: 0 }}
          showsVerticalScrollIndicator={false}
        >
          <FlatList
            scrollEnabled={false}
            data={orders}
            renderItem={({ item, index }) => <CartItemCard item={item} />}
            contentContainerStyle={{ gap: 20 }}
          />
          {/* summary card */}
          <View
            style={{
              backgroundColor: "#f1f1f1",
              padding: 20,
              borderRadius: 10,
              gap: 30,
            }}
          >
            <ThemedText text={"Shopping Summary"} size={20} style="bold" />
            <View style={{ gap: 10 }}>
              <ThemedText
                text={"Discount Code"}
                size={20}
                color={colors.dimText}
                style="medium"
              />
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                  gap: 50,
                }}
              >
                <Field flex={2} />
                <Button label="Apply" />
              </View>
            </View>

            {/* price details */}
            <View style={{ gap: 20 }}>
              <PriceItem label={"Sub-Total"} price={total} />
              <PriceItem label={"Delivery Fee"} price={1500} />
              <PriceItem label={"Discount Amount"} price={3500} />
              <View
                style={{
                  borderTopWidth: 2,
                  borderColor: colors.dimText,
                  borderStyle: "dashed",
                }}
              ></View>
              <PriceItem label={"Total Amount"} price={total+4800} />
            </View>
            <Button
              label="Checkout"
              action={() => {
                router.push("/(tabs)/checkout");
              }}
            />
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default CartBlank;
