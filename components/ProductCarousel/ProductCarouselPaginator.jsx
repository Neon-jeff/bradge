import { View, Text } from "react-native";
import React from "react";
import ThemedText from "../ThemedText/ThemedText";
import { colors } from "../../constants/Colors";

const ProductCarouselPaginator = ({currentPage}) => {

  return (
    <View style={{ flexDirection: "row", gap: 10 }}>
      {[...Array(3).keys()].map((item) => (
        <View
          key={item}
          style={{
            height: 10,
            width: 10,
            backgroundColor: currentPage == item ? colors.main : colors.grey,
            borderRadius: 50,
          }}
        ></View>
      ))}
    </View>
  );
};

export default ProductCarouselPaginator;
