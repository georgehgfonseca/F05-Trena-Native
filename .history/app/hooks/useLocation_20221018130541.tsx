import { useEffect, useState } from "react";
import * as Location from "expo-location";

interface Coordinates {
  latitude: number;
  longitude: number;
}

export default function useLocation() {
  const [location, setLocation] = useState<any>({
    latitude: 0,
    longitude: 0,
  });
  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) return;
      const result = await Location.getLastKnownPositionAsync();
      if (result) {
        setLocation({
          latitude: result.coords.latitude,
          longitude: result.coords.longitude,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
}
