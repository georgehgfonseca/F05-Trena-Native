import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import AuthContext from "../auth/context";
import Icon, { IconProps } from "../components/Icon";

import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigation/routes";

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
    targetScreen: routes.MESSAGES,
  },
];
export default function AccountScreen({ navigation }: any) {
  const authContext = useContext(AuthContext);

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={authContext.user.name}
          subTitle={authContext.user.email}
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
                onPress={() => navigation.navigate(item.targetScreen)}
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
        onPress={() => authContext.setUser(null)}
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
