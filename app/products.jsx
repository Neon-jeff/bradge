import { View, Text, ImageBackground, FlatList } from "react-native";
import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/context";
import PageLayout from "../components/PageLayout/PageLayout";
import ProductLoadingSkeleton from "../components/Skeletons/ProductLoadingSkeleton";
import ThemedText from "./../components/ThemedText/ThemedText";
import TopSection from "../components/ProductPage/TopSection";
import { ScreenSize } from "./../constants/Sizes";
import ProductCard from "../components/ProductPage/ProductCard";
import { ScrollView } from "react-native";
import Trending from "../components/ProductPage/Trending";
import { colors } from "../constants/Colors";

const Products = () => {
  // AUTH KEYS
  const API_URL = process.env.EXPO_PUBLIC_API_URL;
  const APP_ID = process.env.EXPO_PUBLIC_APP_ID;
  const ORG_ID = process.env.EXPO_PUBLIC_ORG_ID;
  const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

  const { products, SetProducts, error, SetError, loading, SetLoading } =
    useContext(AppContext);
  useEffect(() => {
    FetchProducts();
  }, []);
  const FetchProducts = async () => {
    await fetch(
      `${API_URL}?organization_id=${ORG_ID}&Appid=${APP_ID}&Apikey=${API_KEY}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("something killed goliath");
        }
        return res.json();
      })
      .then((data) => {
        SetProducts(data.items);
        SetLoading(false);
      })
      .catch((error) => console.error(error));
  };

  return (
    <PageLayout align="" padding={15} gap={50}>
      <TopSection />
      <ScrollView
        contentContainerStyle={{ gap: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <ThemedText
          text={"Trending Now"}
          size={22}
          style="semi"
          align="left"
          extras={{ width: 0.5 * ScreenSize.width }}
          color={colors.dimText}
        />
        {loading ? (
          <View style={{ gap: 20 }}>
            <ProductLoadingSkeleton />
            <ProductLoadingSkeleton />
            <ProductLoadingSkeleton />
          </View>
        ) : (
          <View style={{ gap: 30 }}>
            {/* tremding clothes */}
            <Trending data={products.slice(-5, -1)} />
            <ThemedText
              text={"All Products"}
              size={22}
              style="semi"
              align="left"
              extras={{ width: 0.5 * ScreenSize.width }}
              color={colors.dimText}
            />
            <FlatList
              keyExtractor={(item) => item.id}
              data={products}
              numColumns={2}
              scrollEnabled={false}
              renderItem={({ item, index }) => (
                <ProductCard
                  name={item.name}
                  image={`https://api.timbu.cloud/images/${item.photos[0]?.url}`}
                  shift={index % 2 != 0}
                  price={item.current_price[0]["NGN"][0]}
                  id={item.id}
                />
              )}
              contentContainerStyle={{
                gap: 30,
                alignItems: "center",
                paddingTop: 50,
              }}
              columnWrapperStyle={{ gap: 25 }}
            />
          </View>
        )}
      </ScrollView>
    </PageLayout>
  );
};

export default Products;
