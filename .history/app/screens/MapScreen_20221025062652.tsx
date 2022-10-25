import {useEffect} from "react";
import MapView, {Marker} from "react-native-maps";
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
        {publicWorks.map((publicWork: any, index: any) => (
          <Marker
            key={index}
            coordinate={{publicWork.address.latitude, publicWork.address.longitude}}
            title={marker.title}
            description={marker.description}
          />
        ))}
      />
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
