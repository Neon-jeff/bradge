import { View, Text, Image, Pressable } from "react-native";
import React, { useContext } from "react";
import { colors } from "../../constants/Colors";
import { AppContext } from "../../context/context";
import ThemedText from "../ThemedText/ThemedText";
import { ScreenSize } from "../../constants/Sizes";
import Icon from "../Icons/Icon";

// import { colors } from "../../constants/Colors";
// import ThemedText from "../ThemedText/ThemedText";
// import { ScreenSize } from "../../constants/Sizes";
// import Icon from "../Icons/Icon";
// import { AppContext } from "../../context/context";

const CartItemCard = ({ item }) => {
  const { orders, setOrders } = useContext(AppContext);
  return (
    <View
      style={{
        padding: 25,
        borderRadius: 10,
        // flexDirection: "row",
        justifyContent: "space-between",
        gap: 10,
        borderWidth: 1,
        borderColor: colors.grey,
        // alignItems: "center",
      }}
    >
      <Pressable
        style={{ position: "absolute", top: 15, right: 10 }}
        onPress={() => {
          setOrders(
            orders.filter((product) => product.product.id != item.product.id)
          );
        }}
      >
        <Icon name={"Trash2"} stroke={2} size={22} color={"#cecece"} />
      </Pressable>
      <View style={{ flexDirection: "row", gap: 20 }}>
        <Image
          source={{ uri: item.product.image }}
          style={{
            height: 80,
            width: 80,
            resizeMode: "contain",
            borderRadius: 20,
          }}
        />
        <View style={{ gap: 10, flex: 1 }}>
          <ThemedText
            text={item.product.name}
            size={18}
            style="bold"
            extras={{ alignSelf: "start" }}
          />
          <ThemedText text={item.product.description} size={14} />

          {/* increase amount control */}

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              flex: 3,

              gap: 50,
            }}
          >
            <View
              style={{
                alignItems: "center",

                borderRadius: 100,

                gap: 15,
                flexDirection: "row",
              }}
            >
              <Pressable
                style={{
                  height: 30,
                  width: 30,
                  borderRadius: 5,
                  borderWidth: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  borderColor: colors.tab,
                }}
                onPress={() => {
                  let newArray = orders.map((order) => {
                    if (order.product.id == item.product.id) {
                      if (order.amount == 1) {
                        return { ...order };
                      }
                      return { ...order, amount: item.amount - 1 };
                    }
                    return order;
                  });
                  setOrders(newArray);
                }}
              >
                <Icon name={"Minus"} color={colors.tab} stroke={4} size={15} />
              </Pressable>
              <ThemedText text={item.amount} size={18} style="bold" />
              <Pressable
                style={{
                  height: 30,
                  width: 30,
                  borderRadius: 5,
                  borderColor: colors.tab,
                  alignItems: "center",
                  justifyContent: "center",
                  borderWidth: 1,
                }}
                onPress={() => {
                  let newArray = orders.map((order) => {
                    if (order.product.id == item.product.id) {
                      return { ...order, amount: item.amount + 1 };
                    }
                    return order;
                  });
                  setOrders(newArray);
                }}
              >
                <Icon name={"Plus"} color={colors.tab} stroke={4} size={15} />
              </Pressable>
            </View>
            <ThemedText
              text={"$" + item.product.price * item.amount}
              align="center"
              size={20}
              style="bold"
              // extras={{
              //   backgroundColor: "#b0c0b4",
              //   padding: 10,
              //   borderRadius: 20,
              // }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItemCard;
