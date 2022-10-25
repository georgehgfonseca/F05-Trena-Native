import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Icon, { IconProps } from "../components/Icon";

import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";
import colors from "../config/colors";

interface MenuItem {
  title: string;
  icon: IconProps;
}
const menuItems = [
  {
    title: "My Listings",
    icon: { name: "format-list-bulleted", backgroundColor: colors.primary },
  },
  {
    title: "My Messages",
    icon: { name: "email", backgroundColor: colors.secondary },
  },
];
export default function AccountScreen() {
  const navigation = useNavigation();

  const handlePress = (item: any) => navigation.navigate("Messages");

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="George Fonseca"
          subTitle="george.fons@gmail.com"
          image={require("../assets/george.jpeg")}
        ></ListItem>
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => {
            return item.title === "My Messages" ? (
              <ListItem
                title={item.title}
                IconComponent={
                  <Icon
                    name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor}
                  ></Icon>
                }
                onPress={handlePress}
              ></ListItem>
            ) : (
              <ListItem
                title={item.title}
                IconComponent={
                  <Icon
                    name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor}
                  ></Icon>
                }
              ></ListItem>
            );
          }}
        ></FlatList>
      </View>
      <ListItem
        title="Log Out"
        IconComponent={
          <Icon name="logout" backgroundColor={colors.gold}></Icon>
        }
      ></ListItem>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});
