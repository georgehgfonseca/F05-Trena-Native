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
  const [messages, setMessages] = useState<Message[]>(initialMessages);
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
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          ></ListItem>
        )}
        ItemSeparatorComponent={(props) => <ListItemSeparator />}
      ></FlatList>
    </Screen>
  );
}

// const styles = StyleSheet.create({
//   screen: {
//     paddingTop: Constants.statusBarHeight,
//   },
// });
