import { View, Text, ScrollView, Image } from "react-native";
import React, { useContext } from "react";
import { AppContext } from "../../../context/context";
import ThemedText from "../../../components/ThemedText/ThemedText";
import Icon from "../../../components/Icons/Icon";
import { colors } from "../../../constants/Colors";
import { SaveValue, GetValue } from "../../../store/Store";
const OrderHistory = () => {
  let history = JSON.parse(GetValue("OrderHistory")).orderHistory;
  if (history.length == 0) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <ThemedText text={"No order history"} size={18} />
      </View>
    );
  }
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        padding: 20,
        gap: 20,
        paddingTop: 30,
        backgroundColor: "white",
        flex: 1,
      }}
    >
      {history.map((item, index) => (
        <View
          key={index}
          style={{
            padding: 20,
            borderWidth: 1,
            borderColor: colors.dimText,
            gap: 20,
            borderRadius: 10,
          }}
        >
          <View>
            <ThemedText
              text={"Order ID:"}
              size={18}
              style="semi"
              color={colors.dimText}
            />
            <ThemedText
              text={item.items[0].product.id}
              size={18}
              color={colors.main}
            />
          </View>
          <ThemedText
            text={"Order Status"}
            size={18}
            style="semi"
            color={colors.dimText}
          />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ alignItems: "center" }}>
              <Icon name={"Truck"} size={20} stroke={2.4} color={colors.main} />
              <ThemedText
                text={item.delivery}
                size={15}
                color={colors.dimText}
              />
            </View>
            <View style={{ alignItems: "center" }}>
              <Icon
                name={"CreditCard"}
                size={20}
                stroke={2.4}
                color={colors.main}
              />
              <ThemedText
                text={item.payment}
                size={15}
                color={colors.dimText}
              />
            </View>
            <View style={{ alignItems: "center" }}>
              <Icon
                name={"Clock3"}
                size={20}
                stroke={2.4}
                color={colors.main}
              />
              <ThemedText text={item.date} size={15} color={colors.dimText} />
            </View>
          </View>
          <ThemedText
            text={"Order Items"}
            size={18}
            style="semi"
            color={colors.dimText}
          />
          {item.items.map((order) => (
            <View
              key={order.product.id}
              style={{
                flexDirection: "row",
                gap: 10,
                padding: 10,
                borderRadius: 10,
                backgroundColor: colors.background,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View>
                <Image
                  source={{ uri: order.product.image }}
                  height={40}
                  width={40}
                  resizeMode="contain"
                />
                <ThemedText
                  text={order.product.name}
                  size={15}
                  color={colors.dimText}
                  style="regular"
                />
              </View>
              <ThemedText
                text={order.amount}
                size={17}
                color={colors.dimText}
                style="bold"
              />
              <ThemedText
                text={"N" + order.product.price}
                size={17}
                color={colors.dimText}
                style="bold"
              />
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

export default OrderHistory;
