import { View, Text } from "react-native";
import React, { useEffect } from "react";
import {
  useSharedValue,
  useAnimatedStyle,
  Easing,
  withTiming,
  withSequence,
  withRepeat,
  withDecay,
  withDelay,
  withSpring,
} from "react-native-reanimated";
import Animated from "react-native-reanimated";

const ProductLoadingSkeleton = ({ height=150 }) => {
  const color = useSharedValue("#f2f2f2");
  const animatedStyles = useAnimatedStyle(() => ({
    backgroundColor: color.value,
  }));
  useEffect(() => {
    color.value = withRepeat(
      withSequence(
        withDelay(
          100,
          withTiming("#f1f1f1", { duration: 500, easing: Easing.cubic })
        ),
        withDelay(
          100,
          withTiming("#c5c7c6", { duration: 500, easing: Easing.cubic })
        )
      ),
      -1,
      false,
      () => {}
    );
  }, []);
  return (
    <Animated.View
      style={[{ height: height, padding: 50, borderRadius: 20 }, animatedStyles]}
    >
     
    </Animated.View>
  );
};

export default ProductLoadingSkeleton;
