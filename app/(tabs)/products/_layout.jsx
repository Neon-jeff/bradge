import { View, Text, Image, Pressable } from "react-native";
import React, { useContext } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import Icon from "../../../components/Icons/Icon";
import ThemedText from "../../../components/ThemedText/ThemedText";
import { colors } from "../../../constants/Colors";
import { ScreenSize } from "../../../constants/Sizes";
import DrawerHeader from "../../../components/Headers/DrawerHeader";
import CustomDrawer from "../../../components/Drawer/CustomDrawer";
import { AppContext } from "../../../context/context";
import { router, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const ProductHeader = () => {
  return (
    <SafeAreaView
      style={{
        padding: 20,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Image
        source={require("../../../assets/images/logo.png")}
        height={200}
        width={200}
        resizeMode="contain"
      />
      <ThemedText text={"Products"} size={20} style="semi" />
      <View style={{ flexDirection: "row", gap: 30, alignItems: "center" }}>
        <Pressable
          onPress={() => {
            router.push("(tabs)/products/wishlists");
          }}
        >
          <Icon name={"Album"} size={25} stroke={2} color={colors.main} />
        </Pressable>
        <Pressable
          onPress={() => {
            router.push("(tabs)/products/history");
          }}
        >
          <Icon name={"Bell"} size={25} stroke={2} color={colors.dimText} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const ProductsDrawer = () => {
  const { wishlist, history } = useContext(AppContext);
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerTitle: "", header: () => <ProductHeader /> }}
      />
      <Stack.Screen
        name="history"
        options={{
          header: () => <DrawerHeader title={"Order History"} />,
        }}
      />
      <Stack.Screen
        name="wishlists"
        options={{
          header: () => <DrawerHeader title={"My WishList"} />,
        }}
      />
    </Stack>
  );
};

export default ProductsDrawer;
