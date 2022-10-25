import React from "react";
import { View, StyleSheet, Image, ImageSourcePropType } from "react-native";
import AppText from "./AppText";

interface ListItemProps {
  title: string;
  subTitle: string;
  image: ImageSourcePropType;
}
function ListItem({ title, subTitle, image }: ListItemProps) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image}></Image>
      <View>
        <AppText>{title}</AppText>
        <AppText>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 10,
  },
});

export default ListItem;
