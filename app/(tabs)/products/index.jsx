import { View, Text, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout/PageLayout";
import ThemedText from "../../../components/ThemedText/ThemedText";
import ProductCarouselList from "../../../components/ProductCarousel/ProductCarouselList";
import Promotion from "../../../components/ProductPage/Promotion";
import { productsList } from "../../../data/products";
import { ScreenSize } from "../../../constants/Sizes";
import { AppContext } from "../../../context/context";
import { useContext, useEffect } from "react";
import * as Network from "expo-network";
import { RefreshControl, ActivityIndicator } from "react-native";

const Products = () => {
  const tech = productsList.filter((item) => item.category == "tech");
  const men = productsList.filter((item) => item.category == "men");
  const women = productsList.filter((item) => item.category == "women");
  const [refreshing, setRefreshing] = useState(true);

  // API CONFIGS
  const API_URL = process.env.EXPO_PUBLIC_API_URL;
  const APP_ID = process.env.EXPO_PUBLIC_APP_ID;
  const ORG_ID = process.env.EXPO_PUBLIC_ORG_ID;
  const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

  // CONTEXT DATA
  const { products, SetProducts, error, SetError, loading, SetLoading } =
    useContext(AppContext);

  // USEEFFECT CALL AND API CALL METHOD
  useEffect(() => {
    FetchProducts();
  }, []);
  const FetchProducts = async () => {
    const netState = await Network.getNetworkStateAsync();
    if (!netState.isConnected && !netState.isInternetReachable) {
      Alert.alert(
        "No Internet",
        "Turn on your internet or wifi connection to make your order"
      );
    }
    let productsArr = [];
    await fetch(
      `${API_URL}/products?organization_id=${ORG_ID}&Appid=${APP_ID}&Apikey=${API_KEY}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error Fetching Data");
          Alert.alert(
            "Error fetching products",
            "an error occurred while fetching the products"
          );
        }
        return res.json();
      })
      .then(async (data) => {
        for (item of data.items) {
          let newItem = {
            name: item.name,
            description: item.description,
            category: item.categories[0]?.name,
            image: `https://api.timbu.cloud/images/${item.photos[0].url}`,
            price: item.current_price[0]["NGN"][0],
            id: item.id,
          };
          let response = await fetch(
            `${API_URL}/extrainfo/products/${item.id}`
          );
          let data = await response.json();
          data = data[0];
          newItem.rating = data.value;
          productsArr.push(newItem);
        }
        SetProducts(productsArr);
        SetLoading(false);
        setRefreshing(false);
      })
      .catch((error) => {
        console.error(error);
        Alert.alert(
          "Error fetching products",
          "an error occurred while fetching the products"
        );
      });
  };
  return (
    <PageLayout gap={2}>
      {refreshing ? <ActivityIndicator /> : null}
      <ScrollView
        style={{ flex: 1, padding: 20, gap: 30 }}
        contentContainerStyle={{ gap: 20, paddingBottom: 70 }}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={FetchProducts} />
        }
      >
        <Promotion />
        <ProductCarouselList
          label={"Tech Gadget"}
          items={products.filter((item) => item.category == "tech")}
        />
        <ProductCarouselList
          label={"Men's Fashion"}
          items={products.filter((item) => item.category == "men")}
        />
        <ProductCarouselList
          label={"Women's Fashion"}
          items={products.filter((item) => item.category == "women")}
        />
      </ScrollView>
    </PageLayout>
  );
};

export default Products;
