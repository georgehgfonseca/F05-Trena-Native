import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, ImageSourcePropType, StyleSheet, View } from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";

import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigation/routes";
import collectsApi from "../api/collects";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import ActivityIndicatior from "../components/ActivityIndicatior";
import useApi from "../hooks/useApi";
import PublicWorkCard from "../components/PublicWorkCard";
import CollectCard from "../components/CollectCard";
export interface Listing {
  id: string;
  title: string;
  price: number;
  image: ImageSourcePropType;
}

export default function PublicWorkCollectsScreen({ navigation, route }: any) {
  console.log("######### Public Work #########");
  console.log(route.params);
  const {
    data: collects,
    error,
    loading,
    request: loadCollects,
  } = useApi(collectsApi.getCollects);

  useEffect(() => {
    loadCollects();
  }, []);

  const netInfo = useNetInfo();

  console.log(collects);

  return (
    <>
      <ActivityIndicatior visible={loading} />
      <Screen style={styles.screen}>
        {error && (
          <>
            <AppText>Couldn't retrieve the collects.</AppText>
            <AppButton title="Retry" onPress={loadCollects}></AppButton>
          </>
        )}
        <FlatList
          data={collects}
          keyExtractor={(collect) => collect.id.toString()}
          renderItem={({ item: collect }) => (
            <CollectCard
              title={collect.date}
              subTitle={collect.comments}
              // imageUrl={publicWork.images[0].url}
              onPress={() => navigation.navigate(routes.COLLECT_EDIT, collect)}
              // thumbnailUrl={publicWork.images[0].thumbnailUrl}
            />
          )}
        ></FlatList>
        <AppButton
          title="Nova Coleta"
          onPress={() => navigation.navigate(routes.COLLECT_EDIT)}
        ></AppButton>
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
