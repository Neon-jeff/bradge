import { View, Text, Image, ScrollView } from "react-native";
import React, { useContext } from "react";
import { useLocalSearchParams } from "expo-router";
import { AppContext } from "../../context/context";
import { ScreenSize } from "../../constants/Sizes";
import ThemedText from "../../components/ThemedText/ThemedText";
import { StatusBar } from "expo-status-bar";
import { colors } from "../../constants/Colors";
import DetailsNavigator from "../../components/Navigators/DetailsNavigator";
import Button from "../../components/Button/Button";
import { SafeAreaView } from "react-native-safe-area-context";

const Product = () => {
  const { products } = useContext(AppContext);
  const param = useLocalSearchParams();
  const product = products.find((item) => item.id == param.id);
  return (
    <ScrollView
      style={{ gap: 20, backgroundColor: colors.white }}
      contentContainerStyle={{ gap: 30, paddingHorizontal: 15 }}
    >
      <DetailsNavigator />
      <Image
        source={{
          uri: `https://api.timbu.cloud/images/${product.photos[0].url}`,
        }}
        // width={0.9*ScreenSize.width}
        resizeMode="cover"
        height={ScreenSize.height / 1.8}
        width={ScreenSize.width}
        style={{
          alignSelf: "center",
        }}
      />
      <View
        style={{
          gap: 10,
          borderBottomWidth: 1,
          borderColor: colors.grey,
          paddingBottom: 10,
        }}
      >
        <ThemedText
          text={"Available"}
          style="medium"
          size={15}
          color={colors.accent}
        />
        <View
          style={{
            gap: 5,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <ThemedText
            text={product.name}
            style="semi"
            size={23}
            extras={{
              width: "60%",
            }}
          />
          <ThemedText
            text={"N" + product.current_price[0]["NGN"][0]}
            color={colors.accent}
            size={20}
            style="bold"
          />
        </View>
      </View>
      <ThemedText
        text={`In Stock: ${product.available_quantity}`}
        style="semi"
        size={20}
        color={colors.accent}
      />
      <View>
        <ThemedText
          text={"Description"}
          size={20}
          style="semi"
          extras={{ paddingBottom: 5 }}
        />
        <ThemedText
          text={product.description?.trim()}
          size={18}
          color={colors.dimText}
        />
      </View>

      {/* <StatusBar hidden={true} /> */}
    </ScrollView>
  );
};

export default Product;
