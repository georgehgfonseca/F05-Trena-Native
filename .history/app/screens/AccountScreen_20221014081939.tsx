import React from "react";
import { ImageSourcePropType, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import MenuItem from "../components/MyMenuItem";
import Screen from "../components/Screen";
import colors from "../config/colors";

interface UserData {
  name: string;
  email: string;
  image: ImageSourcePropType;
}

export default function MyAccountScreen({ name, email, image }: UserData) {
  return (
    <Screen>
      <ListItem
        title="George Fonseca"
        subTitle="george.fons@gmail.com"
        image={require("../assets/george.jpeg")}
      ></ListItem>
    </Screen>
    // <View style={styles.container}>
    //   <ListItem
    //     title={name}
    //     subTitle={email}
    //     image={image}
    //     onPress={() => console.log("Message selected", name)}
    //     renderRightActions={() => console.log("Message selected", email)}
    //   ></ListItem>
    //   <View style={{ paddingTop: 48 }}></View>
    //   <MenuItem
    //     text={"My Listings"}
    //     color={colors.primary}
    //     iconName="format-list-bulleted"
    //   ></MenuItem>
    //   <ListItemSeparator></ListItemSeparator>
    //   <MenuItem
    //     text={"My Messages"}
    //     color={colors.secondary}
    //     iconName="email"
    //   ></MenuItem>
    //   <View style={{ paddingTop: 24 }}></View>
    //   <MenuItem
    //     text={"Log Out"}
    //     color={colors.gold}
    //     iconName="logout"
    //   ></MenuItem>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGray,
    justifyContent: "flex-start",
    paddingTop: 48,
    flex: 1,
  },
});
