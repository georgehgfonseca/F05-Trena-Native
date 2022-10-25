import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "react-native-expo-image-cache";

import colors from "../config/colors";
import AppText from "./AppText";

interface CardProps {
  title: string;
  subTitle: string;
  distance?: number;
  type?: string;
  typeTagColor?: string;
  addressStreet?: string;
  addressNumber?: string;
  addressCity?: string;
  addressState?: string;
  status?: number;
  // imageUrl: string;
  onPress: any;
  // thumbnailUrl: string;
}

export default function InspectionCard({
  title,
  subTitle,
  distance = 2000,
  type = "Outros",
  typeTagColor = "#8BC34A",
  addressStreet = "Rua Onofre Newton de Ambrosio",
  addressNumber = "124",
  addressCity = "Joao Monlevade",
  addressState = "MG",
  status = 1,
  // imageUrl: imageUrl,
  onPress,
}: // thumbnailUrl,
CardProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.card,
          status === 1
            ? { borderLeftColor: "#00ff00" }
            : { borderLeftColor: "#ffff00" },
        ]}
      >
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
    borderLeftWidth: 4,
    borderLeftColor: "#00ff00",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 8,
  },
});
