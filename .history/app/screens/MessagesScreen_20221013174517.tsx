import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import ListItem from "../components/ListItem";

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
function MessagesScreen(props: any) {
  return (
    <SafeAreaView>
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
    </SafeAreaView>
  );
}

export default MessagesScreen;
