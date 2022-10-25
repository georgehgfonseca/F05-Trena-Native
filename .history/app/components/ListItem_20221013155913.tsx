import React from "react";
import { View, StyleSheet, Image } from "react-native";

interface ListItemProps {
  title: string;
  subTitle: string;
  image: string;
}
function ListItem({ title, subTitle, image }: ListItemProps) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image}></Image>
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
