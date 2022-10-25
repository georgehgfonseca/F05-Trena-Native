import React from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

interface ListItemProps {
  title: string;
  subTitle: string;
  image: ImageSourcePropType;
}
function ListItem({ title, subTitle, image }: ListItemProps) {
  return (
    <TouchableHighlight onPress={() => console.log("pressed")}>
      <View style={styles.container}>
        <Image style={styles.image} source={image}></Image>
        <View>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 16,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 10,
  },
  subTitle: {
    color: colors.gray,
  },
  title: {
    fontWeight: "500",
  },
});

export default ListItem;
