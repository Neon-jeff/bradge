import { View, Text, Image } from "react-native";
import React from "react";

const CarouselItemRating = ({ rating }) => {
  return (
    <View style={{flexDirection:'row',gap:5}}>
      {[...Array(5).keys()].map((item) => (
        <Image
        key={item}
          source={
            item < rating
              ? require("../../assets/icons/star-filled.png")
              : require("../../assets/icons/start-outline.png")
          }
        />
      ))}
    </View>
  );
};

export default CarouselItemRating;
