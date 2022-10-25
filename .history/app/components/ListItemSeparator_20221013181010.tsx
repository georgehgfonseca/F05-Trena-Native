import React from "react";
import { View } from "react-native";
import colors from "../config/colors";

function ListItemSeparator(props: any) {
  return (
    <View style={{ width: "100%", height: 1, backgroundColor: colors.gray }} />
  );
}

export default ListItemSeparator;
