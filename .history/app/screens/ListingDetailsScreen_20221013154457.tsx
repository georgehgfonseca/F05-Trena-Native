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
      <View style={styles.detailsContainer}>
        <AppText>Red jacket for sale</AppText>
        <AppText>$100</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20
  }
  image: {
    width: "100%",
    height: 300,
  },
});
