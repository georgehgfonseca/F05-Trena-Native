import React from "react";
import { FlatList } from "react-native";
import Constants from "expo-constants";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/george.jpeg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/george.jpeg"),
  },
];

export default function MessagesScreen(props: any) {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
          ></ListItem>
        )}
      ></FlatList>
    </Screen>
  );
}

// const styles = StyleSheet.create({
//   screen: {
//     paddingTop: Constants.statusBarHeight,
//   },
// });
