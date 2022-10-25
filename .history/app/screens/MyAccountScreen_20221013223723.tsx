import React from "react";
import { ImageSourcePropType, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

interface UserData {
  name: string;
  email: string;
  image: ImageSourcePropType;
}

export default function MyAccountScreen({ name, email, image }: UserData) {
  return (
    <View style={styles.container}>
      <ListItem
        title={name}
        subTitle={email}
        image={image}
        onPress={() => console.log("Message selected", name)}
        renderRightActions={() => console.log("Message selected", email)}
      ></ListItem>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
