import { View, Text, Image, Pressable } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { ScreenSize } from "../../constants/Sizes";
import ThemedText from "../ThemedText/ThemedText";
import { colors } from "../../constants/Colors";
import { router } from "expo-router";

const TrendingItem = ({ item, index, scrollX }) => {
  const size = useSharedValue(0);
  const width = 0.6 * ScreenSize.width;
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
  size.value = interpolate(scrollX, inputRange, [0.7, 1, 0.7]);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ scale: size.value }],
    };
  });
  return (
    <Pressable
      onPress={() => {
        router.push(`/product/${item.id}`);
      }}
    >
      <Animated.View
        style={[
          {
            width: 0.7 * ScreenSize.width,
            gap: 8,
          },
          animatedStyles,
        ]}
      >
        <Image
          source={{
            uri: `https://api.timbu.cloud/images/${item.photos[0].url}`,
          }}
          height={0.3 * ScreenSize.height}
          borderRadius={20}
          resizeMode="cover"
        />
        <View style={{gap:5,flexDirection:'row'}}>
          <ThemedText
            text={item.name}
            size={18}
   
            style="medium"
            extras={{width:'70%'}}
          />
          <ThemedText
            text={"N" + item.current_price[0]["NGN"][0]}
            size={22}
     
            style="bold"
            color={colors.accent}
          />
        </View>
      </Animated.View>
    </Pressable>
  );
};

export default TrendingItem;
