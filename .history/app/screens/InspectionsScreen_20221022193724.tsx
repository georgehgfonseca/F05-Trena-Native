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
import { insert } from "formik";
import useAuth from "../auth/useAuth";
export interface Listing {
  id: string;
  title: string;
  price: number;
  image: ImageSourcePropType;
}

export default function InspectionsScreen({ navigation }: any) {
  const { user } = useAuth();
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

  console.log(inspections);

  const inspectionsUser = inspections.filter((inspection: any) => {
    return inspection.user_email === user.email;
  });

  return (
    <>
      <ActivityIndicatior visible={loading} />
      <Screen style={styles.screen}>
        {error && (
          <>
            <AppText>Não foi possível carregar as inspeções.</AppText>
            <AppButton
              title="Tentar Novamente"
              onPress={loadInspections}
            ></AppButton>
          </>
        )}
        <FlatList
          data={inspectionsUser}
          keyExtractor={(inspection) => inspection.flag.toString()}
          renderItem={({ item: inspection }) => (
            <PublicWorkCard
              title={inspection.name}
              subTitle={inspection.description}
              // imageUrl={publicWork.images[0].url}
              onPress={() =>
                navigation.navigate(routes.PUBLIC_WORK_COLLECTS, inspection)
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
