import { useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import useLocation from "../hooks/useLocation";
import useApi from "../hooks/useApi";
import publicWorksApi from "../api/publicWorks";

export default function MapScreen() {
  const location = useLocation();

  const { data: publicWorks, request: loadPublicWorks } = useApi(
    publicWorksApi.getPublicWorks
  );

  const loadDataFromServer = async () => {
    await loadPublicWorks();
  };

  useEffect(() => {
    loadDataFromServer();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map}
      >
        {publicWorks.map((publicWork: any, index: any) => (
          <Marker
            key={index}
            coordinate={{
              latitude: publicWork.address.latitude,
              longitude: publicWork.address.longitude,
            }}
            title={publicWork.name}
            // description={publicWork.description}
          />
        ))}
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
          image={{ uri: "https://github.com/georgehgfonseca.png" }}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
