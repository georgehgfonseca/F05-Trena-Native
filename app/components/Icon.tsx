import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

export interface IconProps {
  name: any;
  size?: number;
  backgroundColor?: any;
  color?: any;
}

export default function Icon({
  name,
  size = 40,
  backgroundColor = "#000",
  color = "#fff",
}: IconProps) {
  return (
    <View
      style={{
        backgroundColor: backgroundColor,
        width: size,
        height: size,
        borderRadius: size / 2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons
        name={name}
        size={size / 2}
        color={color}
      ></MaterialCommunityIcons>
    </View>
  );
}
