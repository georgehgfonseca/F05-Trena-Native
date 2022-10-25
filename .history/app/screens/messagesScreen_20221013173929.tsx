import React from "react";
import { FlatList } from "react-native";

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
function messagesScreen(props: any) {
  return <FlatList data={messages}></FlatList>;
}

export default messagesScreen;
