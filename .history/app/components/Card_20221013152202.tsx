import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";

interface CardProps: {
  title: String;
  subTitle: String;
  image: String;
}

function Card({title, subTitle, image}: any) {
  return <View style={styles.card}><Image source={require()}></Image></View>;
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
  },
});
export default Card;
