import React, { useState } from "react";
import { FlatList, ImageSourcePropType, View } from "react-native";

import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";
import colors from "../config/colors";

interface Message {
  id: number;
  title: string;
  description: string;
  image: ImageSourcePropType;
}

const initialMessages = [
  {
    id: 1,
    title: "George Fonseca",
    description: "Hey! Is this item still available?",
    image: require("../assets/george.jpeg"),
  },
  {
    id: 2,
    title: "George Fonseca",
    description:
      "I'm interested in this item. When will you be able to post it?",
    image: require("../assets/george.jpeg"),
  },
];

export default function MessagesScreen(props: any) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message: Message) => {
    // Delete the message locally
    setMessages(messages.filter((m) => m.id !== message.id));
    // Delete the message on the server
  };

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
            onPress={() => console.log("Message selected", item)}
            makeChevronRight
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          ></ListItem>
        )}
        ItemSeparatorComponent={(props) => <ListItemSeparator />}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/george.jpeg"),
            },
          ]);
        }}
      ></FlatList>
    </Screen>
  );
}

// const styles = StyleSheet.create({
//   screen: {
//     paddingTop: Constants.statusBarHeight,
//   },
// });
