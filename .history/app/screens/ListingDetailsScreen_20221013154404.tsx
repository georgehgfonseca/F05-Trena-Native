import React from "react";
import { Image, View, StyleSheet } from "react-native";
import AppText from "../components/AppText";

export function ListingDetailsScreen(props: any) {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../assets/jacket.jpg")}
      ></Image>
      <AppText>Red jacket for sale</AppText>
      <AppText>$100</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
});
