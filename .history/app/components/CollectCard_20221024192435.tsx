import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "react-native-expo-image-cache";

import colors from "../config/colors";
import AppText from "./AppText";

interface CardProps {
  title: string;
  subTitle: string;
  // imageUrl: string;
  onPress: any;
  // thumbnailUrl: string;
}

export default function CollectCard({
  title,
  subTitle,
  // imageUrl: imageUrl,
  onPress,
}: // thumbnailUrl,
CardProps) {
  const date = new Date(subTitle);
  console.log();
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        {/* <Image
          style={styles.image}
          preview={{ uri: thumbnailUrl }}
          tint="light"
          uri={imageUrl}
        ></Image> */}
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>
            {date.getDate() +
              "/" +
              (date.getMonth() + 1) +
              "/" +
              date.getFullYear()}
          </AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.medium,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: colors.trenaGreen,
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
    color: colors.light,
    fontWeight: "bold",
  },
  title: {
    color: colors.trenaGreen,
    marginBottom: 8,
  },
});
