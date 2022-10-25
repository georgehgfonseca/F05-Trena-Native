import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, ImageSourcePropType, StyleSheet, View } from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";

import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigation/routes";
import inspectionsApi from "../api/inspections";
import publicWorksApi from "../api/publicWorks";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import ActivityIndicatior from "../components/ActivityIndicatior";
import useApi from "../hooks/useApi";
import PublicWorkCard from "../components/PublicWorkCard";
import { insert } from "formik";
import useAuth from "../auth/useAuth";
import InspectionCard from "../components/InspectionCard";
import typeWorksApi from "../api/typeWorks";
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

  const { data: publicWorks, request: loadPublicWorks } = useApi(
    publicWorksApi.getPublicWorks
  );

  const { data: typeWorks, request: loadTypeWorks } = useApi(
    typeWorksApi.getTypeWorks
  );

  const loadDataFromServer = async () => {
    await loadTypeWorks();
    await loadPublicWorks();
    await loadInspections();
    console.log(typeWorks);
    console.log(publicWorks);
  };

  useEffect(() => {
    loadDataFromServer();
  }, []);

  const getPublicWorkOfInspection = (publicWorkId: string) => {
    const pw = publicWorks.find((publicWork: any) => {
      return publicWork.id === publicWorkId;
    });
    return pw;
  };

  const inspectionsUser = inspections.filter((inspection: any) => {
    return inspection.user_email === user.email;
  });

  return (
    <>
      <ActivityIndicatior visible={loading} />
      <View style={styles.screen}>
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
            <InspectionCard
              inspection={inspection}
              publicWork={getPublicWorkOfInspection(inspection.public_work_id)}
              // imageUrl={publicWork.images[0].url}
              onPress={() =>
                navigation.navigate(routes.INSPECTION_COLLECT_EDIT, {
                  inspection,
                })
              }
              // thumbnailUrl={publicWork.images[0].thumbnailUrl}
            />
          )}
          ListEmptyComponent={
            <AppText style={{ color: colors.white }}>
              Não há vistorias solicitadas a esse usuário
            </AppText>
          }
        ></FlatList>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.black,
    flex: 1,
  },
});
