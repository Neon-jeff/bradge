import { View, Text, Image, Pressable } from "react-native";
import React, { useContext } from "react";
import ThemedText from "../ThemedText/ThemedText";
import { ScreenSize } from "../../constants/Sizes";
import { colors } from "../../constants/Colors";
import CarouselItemRating from "./CarouselItemRating";
import { AppContext } from "../../context/context";

const CarouselItem = ({ item }) => {
  const { orders, setOrders } = useContext(AppContext);
  return (
    <View style={{ width: 0.43 * ScreenSize.width, gap: 10 }}>
      <View
        style={{
          padding: 20,
          backgroundColor: colors.grey,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 5,
          height: 184,
        }}
      >
        <Image
          source={{ uri: item.image }}
          resizeMode="contain"
          height={100}
          width={100}
        />
      </View>

      <ThemedText text={item.name} size={15} style="semi" />
      <ThemedText text={item.description} size={12} style="regular" />
      <CarouselItemRating rating={item.rating} />
      <ThemedText
        text={`N ${item.price}`}
        size={16}
        style="semi"
        color={colors.main}
      />
      <Pressable
        style={{
          borderWidth: 2,
          padding: 10,
          borderColor: colors.main,
          borderRadius: 10,
          alignSelf: "flex-start",
        }}
        onPress={() => {
          if (orders.find((product) => product.product.id == item.id)) {
            return;
          }
          setOrders([...orders, { product: item, amount: 1 }]);
        }}
      >
        <ThemedText
          text={
            orders.find((product) => product.product.id == item.id)
              ? "Added"
              : "Add to cart"
          }
          size={16}
        />
      </Pressable>
    </View>
  );
};

export default CarouselItem;
