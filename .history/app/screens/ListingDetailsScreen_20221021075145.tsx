import React from "react";
import { View, StyleSheet } from "react-native";
import { Image } from "react-native-expo-image-cache";

import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import { AppFormField } from "../components/forms";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

export default function ListingDetailsScreen({ route }: any) {
  const listing = route.params;

  return (
    <View>
      <Image
        style={styles.image}
        uri={listing.images[0].url}
        preview={{ uri: listing.images[0].thumbnailUrl }}
        tint="light"
      ></Image>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/george.jpeg")}
            title="George Fonseca"
            subTitle="5 Listings"
          ></ListItem>
        </View>
        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          name="message"
          placeholder="Message..."
          // style={styles.message}
        ></AppTextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    font: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});
