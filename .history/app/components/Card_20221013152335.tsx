import React from "react";
import { View, StyleSheet, Image } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

interface CardProps {
  title: String;
  subTitle: String;
  image: String;
}

function Card({ title, subTitle, image }: CardProps) {
  return (
    <View style={styles.card}>
      <Image source={require(image)}></Image>
      <AppText>{title}</AppText>
      <AppText>{subTitle}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
  },
});
export default Card;
