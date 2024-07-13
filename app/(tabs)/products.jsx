import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import PageLayout from "../../components/PageLayout/PageLayout";
import ThemedText from "../../components/ThemedText/ThemedText";
import ProductCarouselList from "../../components/ProductCarousel/ProductCarouselList";
import Promotion from "../../components/ProductPage/Promotion";
import { productsList } from "../../data/products";
import { ScreenSize } from "../../constants/Sizes";
import { AppContext } from "../../context/context";
import { useContext, useEffect } from "react";

const Products = () => {
  const tech = productsList.filter((item) => item.category == "tech");
  const men = productsList.filter((item) => item.category == "men");
  const women = productsList.filter((item) => item.category == "women");

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
    const productsArr = [];
    await fetch(
      `${API_URL}/products?organization_id=${ORG_ID}&Appid=${APP_ID}&Apikey=${API_KEY}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error Fetching Data");
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
            id:item.id
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
      })
      .catch((error) => console.error(error));
  };
  return (
    <PageLayout gap={25}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: 0.9 * ScreenSize.width,
          justifyContent: "center",
          marginTop: 30,
        }}
      >
        <Image
          source={require("../../assets/images/logo.png")}
          style={{ position: "absolute", left: 0 }}
        />
        <ThemedText
          text={"Product List"}
          size={22}
          style="semi"
          align="center"
        />
      </View>
      <ScrollView
        style={{ flex: 1, padding: 20, gap: 30 }}
        contentContainerStyle={{ gap: 20, paddingBottom: 70 }}
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
