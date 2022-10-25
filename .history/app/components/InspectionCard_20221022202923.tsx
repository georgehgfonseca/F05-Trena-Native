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
  addressStreet = "Av. Getulio Vargas",
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
            ? { borderLeftColor: "#8BC34A" }
            : { borderLeftColor: "#FFC107" },
        ]}
      >
        <View style={styles.headerContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{distance / 1000} km</AppText>
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.typeCard}>
            <AppText style={styles.typeText} color="#fff">
              {type}
            </AppText>
          </View>
          <View style={styles.addressContainer}>
            <AppText
              style={styles.subTitle}
            >{`${addressStreet} - ${addressNumber}`}</AppText>
            <AppText
              style={styles.subTitle}
            >{`${addressCity}/${addressState}`}</AppText>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
    borderLeftWidth: 8,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    paddingBottom: 0,
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    paddingTop: 0,
  },
  addressContainer: {
    justifyContent: "center",
    alignItems: "flex-end",
    // padding: 16,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: colors.secondary,
    fontSize: 12,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 8,
  },
  typeText: {
    color: colors.white,
    fontSize: 16,
    // fontWeight: "bold",
  },
  typeCard: {
    width: 100,
    borderRadius: 8,
    backgroundColor: "#81D4FA",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 8,
  },
});
