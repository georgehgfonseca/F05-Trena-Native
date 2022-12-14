import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "react-native-expo-image-cache";

import colors from "../config/colors";
import AppText from "./AppText";

interface CardProps {
  title: string;
  subTitle: string;
  imageUrl: string;
  onPress: any;
  thumbnailUrl: string;
}

function Card({
  title,
  subTitle,
  imageUrl: imageUrl,
  onPress,
  thumbnailUrl,
}: CardProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          preview={{ uri: thumbnailUrl }}
          uri={imageUrl}
        ></Image>
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 8,
  },
});
export default Card;
