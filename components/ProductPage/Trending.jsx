import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  interpolate,
  withTiming,
} from "react-native-reanimated";
import ThemedText from "../ThemedText/ThemedText";
import { ScreenSize } from "../../constants/Sizes";
import { transform } from "typescript";
import TrendingItem from "./TrendingItem";

const Trending = ({ data }) => {
  const [scrollX, setScrollX] = useState(0);
  //   const scrollHandler = useAnimatedScrollHandler({
  //     onScroll: (e) => {
  //       scrollX.value = e.contentOffset.x;
  //     },
  //   });
  return (
    <Animated.FlatList
      data={data}
      key={(item) => item.id}
      
      contentContainerStyle={{ gap: 0}}
      bounces={false}
      renderItem={({ item, index }) => (
        <TrendingItem item={item} index={index} scrollX={scrollX} />
      )}
      scrollEventThrottle={16}
      horizontal
      showsHorizontalScrollIndicator={false}
      onScroll={(event) => {
        setScrollX(event.nativeEvent.contentOffset.x);
      }}
    />
  );
};

export default Trending;
