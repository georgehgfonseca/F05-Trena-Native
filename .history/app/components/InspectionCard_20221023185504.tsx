import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "react-native-expo-image-cache";

import colors from "../config/colors";
import AppText from "./AppText";

interface CardProps {
  inspection: any;
  publicWork: any;
  // title: string;
  // subTitle: string;
  // distance?: number;
  // type?: string;
  // typeTagColor?: string;
  // addressStreet?: string;
  // addressNumber?: string;
  // addressCity?: string;
  // addressState?: string;
  // status?: number;
  // imageUrl: string;
  onPress: any;
  // thumbnailUrl: string;
}

export default function InspectionCard({
  inspection,
  publicWork,
  // title,
  // subTitle,
  // distance = 2000,
  // type = "Outros",
  // typeTagColor = "#8BC34A",
  // addressStreet = "Av. Getulio Vargas",
  // addressNumber = "124",
  // addressCity = "Joao Monlevade",
  // addressState = "MG",
  // status = 1,
  // imageUrl: imageUrl,
  onPress,
}: // thumbnailUrl,
CardProps) {
  console.log(publicWork);
  console.log(inspection);

  const calculateDistance = (
    currLatitude: number,
    currLongitude: number,
    goalLatitude: number,
    goalLongitude: number
  ) => {
    return Math.sqrt(
      Math.pow(currLatitude - goalLatitude, 2) +
        Math.pow(currLongitude - goalLongitude, 2)
    );
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.card,
          inspection.status === 1
            ? { borderLeftColor: "#8BC34A" }
            : { borderLeftColor: "#FFC107" },
        ]}
      >
        <View style={styles.headerContainer}>
          <AppText style={styles.title}>{inspection.name}</AppText>
          <AppText style={styles.subTitle}>{12434 / 1000} km</AppText>
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.typeCard}>
            <AppText style={styles.typeText} color="#fff">
              {"Pavimentacao"}
            </AppText>
          </View>
          <View style={styles.addressContainer}>
            <AppText
              style={styles.subTitle}
            >{`${publicWork.address.street} - ${publicWork.address.number}`}</AppText>
            <AppText
              style={styles.subTitle}
            >{`${publicWork.address.city}/${publicWork.address.state}`}</AppText>
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
