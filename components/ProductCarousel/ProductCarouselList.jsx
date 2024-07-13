import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import ProductCarouselPaginator from "./ProductCarouselPaginator";
import { products } from "../../data/products";
import CarouselItem from "./CarouselItem";
import { ScreenSize } from "./../../constants/Sizes";
import ThemedText from "../ThemedText/ThemedText";

const ProductCarouselList = ({ label,items }) => {
  const [currentPage, SetCurrentPage] = useState(0);
  const WIDTH = 0.9 * ScreenSize.width;
  return (
    <View style={{ alignItems: "center", gap: 20 }}>
      <ThemedText
        text={label}
        size={20}
        style="semi"
        extras={{ alignSelf: "flex-start" }}
        align="left"
      />
      <FlatList
        bounces={false}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={items}
        keyExtractor={(item, index) => `${index}`}
        renderItem={({ item, index }) => <CarouselItem item={item} />}
        contentContainerStyle={{ gap: 15 }}
        snapToInterval={0.92 * ScreenSize.width}
        onScroll={(e) => {
          if (e.nativeEvent.contentOffset.x < WIDTH) {
            SetCurrentPage(0);
            return;
          }
          if (
            e.nativeEvent.contentOffset.x >= WIDTH &&
            e.nativeEvent.contentOffset.x < 2 * WIDTH
          ) {
            SetCurrentPage(1);
            return;
          }
          if (e.nativeEvent.contentOffset.x >= 2 * WIDTH) {
            SetCurrentPage(2);
            return;
          }
        }}
      />
      <ProductCarouselPaginator currentPage={currentPage} />
    </View>
  );
};

export default ProductCarouselList;
