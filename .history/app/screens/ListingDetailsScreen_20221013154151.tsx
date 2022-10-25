import React from "react";
import { Image, View, StyleSheet } from "react-native";

export function ListingDetailsScreen(props: any) {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("./assets/jacket.jpg")}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
});
