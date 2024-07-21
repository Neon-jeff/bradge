import { View, Text, ScrollView, Image, Pressable } from "react-native";
import React, { useContext } from "react";
import { AppContext } from "../../../context/context";
import ThemedText from "../../../components/ThemedText/ThemedText";
import { colors } from "../../../constants/Colors";
import CarouselItemRating from "../../../components/ProductCarousel/CarouselItemRating";
import Button from "../../../components/Button/Button";

const Wishlists = () => {
  const { wishlist, setWishlist } = useContext(AppContext);
  if(wishlist.length==0){
    return(<View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
      <ThemedText text={'Wishlists empty'} size={18}/>
    </View>)
  }
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ padding: 20, gap: 20,paddingTop:30,backgroundColor:'white',flex:1 }}
    >
      {wishlist.map((item) => (
        <View
        key={item.id}
          style={{
            borderWidth: 1,
            borderColor: colors.grey,
            padding: 20,
            gap: 20,
            borderRadius:10
          }}
        >
          <View
            key={item.id}
            style={{
              flexDirection: "row",
              gap: 20,
            }}
          >
            <Image
              source={{ uri: item.image }}
              height={70}
              width={100}
              resizeMode="contain"
            />
            <View style={{gap:10}}>
              <ThemedText text={item.name} size={18} />
              <ThemedText
                text={"N" + item.price}
                size={16}
                style="bold"
                color={colors.main}
              />
              <CarouselItemRating rating={item.rating} />
            </View>
          </View>
         <Pressable style={{borderWidth:1,borderColor:colors.main,padding:10,alignSelf:'flex-end',borderRadius:10}} onPress={()=>{
          setWishlist(wishlist.filter(i=>i.id!=item.id))
         }}>
          <ThemedText text={'Remove from wishlists'} size={15}/>
         </Pressable>
        </View>
      ))}
    </ScrollView>
  );
};

export default Wishlists;
