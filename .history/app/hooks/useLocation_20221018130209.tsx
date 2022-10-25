import { useEffect, useState } from "react";

export default useLocation = () => {
  const [location, setLocation] = useState<Coordinates>({
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
};
