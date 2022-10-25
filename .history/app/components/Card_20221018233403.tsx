import React from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import colors from "../config/colors";
import { Listing } from "../screens/ListingsScreen";
import AppText from "./AppText";

interface CardProps {
  title: string;
  subTitle: string;
  imageUrl: ImageSourcePropType;
  onPress: any;
}

function Card({ title, subTitle, imageUrl: image, onPress }: CardProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={image}></Image>
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
