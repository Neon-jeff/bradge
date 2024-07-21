import { View, Text, Image } from "react-native";
import React, { useContext } from "react";
import { Tabs } from "expo-router";
import { ScreenSize } from "../../constants/Sizes";
import { colors } from "@/constants/Colors";
import ThemedText from "./../../components/ThemedText/ThemedText";
import { AppContext } from "@/context/context";

const TabIcon = ({ focused, icon, number = false }) => {
  return (
    <View
      style={{
        backgroundColor: focused ? colors.main : "transparent",
        width: 40,
        height: 40,
        borderRadius: 1000,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        source={icon}
        width={10}
        height={10}
        resizeMode="contain"
        tintColor={focused ? colors.tab : "white"}
      />
      {(number!==false && !focused) ? (
        <View style={{ position: "absolute",top:0,right:0 }}>
          <ThemedText text={number} size={15} color="white" style="bold" />
        </View>
      ) : null}
    </View>
  );
};

const TabsLayout = () => {
  const { orders } = useContext(AppContext);
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          height: 70,
          backgroundColor: colors.tab,
          borderWidth: 0,
          shadowColor: "transparent",
          shadowOpacity: 0,
          borderTopWidth: 0,
          bottom: 10,
          alignItems: "center",
          justifyContent: "center",
          width: 0.9 * ScreenSize.width,
          alignSelf: "center",
          borderRadius: 20,
        },
        headerShown: false,
      }}
      sceneContainerStyle={{
        backgroundColor: "red",
      }}
    >
      <Tabs.Screen
        name="products"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              icon={require("../../assets/icons/home.png")}
              focused={focused}
              
            />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              icon={require("../../assets/icons/null.png")}
              focused={focused}
              number={orders.length}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="checkout"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              icon={require("../../assets/icons/checkout.png")}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
