import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, ImageSourcePropType, StyleSheet, View } from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";

import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigation/routes";
import inspectionsApi from "../api/inspections";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import ActivityIndicatior from "../components/ActivityIndicatior";
import useApi from "../hooks/useApi";
import PublicWorkCard from "../components/PublicWorkCard";
export interface Listing {
  id: string;
  title: string;
  price: number;
  image: ImageSourcePropType;
}

export default function InspectionsScreen({ navigation }: any) {
  const {
    data: inspections,
    error,
    loading,
    request: loadInspections,
  } = useApi(inspectionsApi.getInspections);

  useEffect(() => {
    loadInspections();
  }, []);

  const netInfo = useNetInfo();

  // console.log(publicWorks);

  return (
    <>
      <ActivityIndicatior visible={loading} />
      <Screen style={styles.screen}>
        {error && (
          <>
            <AppText>Couldn't retrieve the listings.</AppText>
            <AppButton title="Retry" onPress={loadInspections}></AppButton>
          </>
        )}
        <FlatList
          data={inspections}
          keyExtractor={(publicWork) => publicWork.id.toString()}
          renderItem={({ item: publicWork }) => (
            <PublicWorkCard
              title={publicWork.name}
              subTitle={publicWork.address.street}
              // imageUrl={publicWork.images[0].url}
              onPress={() =>
                navigation.navigate(routes.PUBLIC_WORK_COLLECTS, publicWork)
              }
              // thumbnailUrl={publicWork.images[0].thumbnailUrl}
            />
          )}
        ></FlatList>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
