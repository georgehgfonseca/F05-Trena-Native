import React from "react";
import { ImageSourcePropType, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import MyMenuItem from "../components/MyMenuItem";
import Screen from "../components/Screen";
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
      <View style={{ paddingTop: 48 }}></View>
      <MyMenuItem
        text={"My Listings"}
        color={colors.primary}
        iconName="format-list-bulleted"
      ></MyMenuItem>
      <ListItemSeparator></ListItemSeparator>
      <MyMenuItem
        text={"My Messages"}
        color={colors.secondary}
        iconName="email"
      ></MyMenuItem>
      <View style={{ paddingTop: 24 }}></View>
      <MyMenuItem
        text={"Log Out"}
        color={colors.gold}
        iconName="logout"
      ></MyMenuItem>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    justifyContent: "flex-start",
    paddingTop: 48,
    flex: 1,
  },
});
